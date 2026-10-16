import test from 'node:test';
import assert from 'node:assert/strict';
import {seed, metrics, validate, indicators, associations, zones} from '../app/model.js';
import {grants, income} from '../app/review-data.js';
import {documentCatalog} from '../app/source-catalog.js';
import {historicalRecords, selectHistorical} from '../app/historical-review.js';

const near=(actual, expected)=>assert.ok(Math.abs(actual-expected)<1e-9, `${actual} != ${expected}`);
const event=(changes={})=>({...seed()[24],validated:true,attendance:50,capacity:100,...changes});

test('el conjunto inicial tiene claves únicas, referencias y campos válidos',()=>{
  const rows=seed();
  assert.equal(rows.length,48);
  assert.equal(new Set(rows.map(r=>r.id)).size,48);
  assert.equal(indicators.length,16);
  assert.equal(new Set(indicators.map(r=>r.id)).size,16);
  for(const row of rows){
    assert.equal(validate(row),null);
    assert.ok(associations.some(a=>a.id===row.association));
    assert.ok(zones.includes(row.zone));
  }
});

test('reproduce el escenario documentado 2025 / Todo Santurtzi',()=>{
  const m=metrics(seed(),2025,'all');
  assert.equal(m.I1,2228);
  near(m.I2,2228/3100*100);
  near(m.Q1,19/24*100);
  assert.equal(m.A3,54000);
  assert.equal(m.A4,null);
  assert.equal(m.S4,null);
});

test('reproduce San Juan y no fabrica denominadores zonales',()=>{
  const m=metrics(seed(),2025,'San Juan');
  assert.equal(m.I1,326);
  near(m.I2,50.9375);
  near(m.Q1,4/6*100);
  assert.equal(m.A1,null);
  assert.equal(m.T1,null);
  assert.equal(metrics(seed(),2024,'all').A1,null);
});

test('la ocupación pondera por plazas, no promedia porcentajes',()=>{
  const rows=[event({id:'a',attendance:10,capacity:10}),event({id:'b',attendance:0,capacity:90})];
  assert.equal(metrics(rows,2025,'all').I2,10);
});

test('una asistencia ausente excluye su aforo y coste de los pares',()=>{
  const rows=[event({id:'a',attendance:40,capacity:80,cost:200}),event({id:'b',attendance:null,capacity:200,cost:9999})];
  const m=metrics(rows,2025,'all');
  assert.equal(m.I1,40);
  assert.equal(m.I2,50);
  assert.equal(m.I3,5);
  assert.equal(m.Q1,50);
});

test('cero observado es distinto de asistencia ausente',()=>{
  const zero=metrics([event({attendance:0})],2025,'all');
  const missing=metrics([event({attendance:null})],2025,'all');
  assert.equal(zero.I1,0);
  assert.equal(zero.I2,0);
  assert.equal(zero.I3,null);
  assert.equal(zero.Q1,100);
  assert.equal(missing.I1,null);
  assert.equal(missing.I2,null);
  assert.equal(missing.Q1,0);
});

test('pendientes fuera del cálculo de actividad, dentro del denominador de calidad',()=>{
  const m=metrics([event({id:'a',attendance:40}),event({id:'b',attendance:100,validated:false})],2025,'all');
  assert.equal(m.I1,40);
  assert.equal(m.I2,40);
  assert.equal(m.Q1,50);
});

test('denominadores cero no generan Infinity ni NaN',()=>{
  const m=metrics([event({capacity:0,attendance:0,clicks:0,registrations:0,hours:0,availableHours:0})],2025,'all');
  for(const key of ['I2','I3','I4','I5']) assert.equal(m[key],null);
  for(const value of Object.values(m)) assert.ok(value===null||Number.isFinite(value));
});

test('un conjunto vacío no inventa asistencia; A3 conserva su catálogo independiente',()=>{
  const m=metrics([],2025,'all');
  for(const key of ['I1','I2','I3','Q1','A1']) assert.equal(m[key],null);
  assert.equal(m.A3,54000);
  assert.equal(m.T2,0);
});

test('los formularios rechazan inconsistencias de conteos, periodo y evidencia',()=>{
  const invalid=[{attendance:101},{attendance:-1},{attendance:1.5},{cost:-1},{hours:11,availableHours:10},{registrations:11,clicks:10},{month:13},{year:2026},{zone:'Zona inexistente'},{association:'OTRA'},{responsible:' '},{evidence:''}];
  for(const change of invalid) assert.equal(typeof validate(event(change)),'string');
  assert.equal(validate(event({attendance:null})),null);
  assert.equal(validate(event({attendance:0})),null);
});

test('los diez ámbitos y periodos generan resultados finitos o ausentes',()=>{
  for(const year of [2024,2025]) for(const zone of ['all',...zones]) {
    const m=metrics(seed(),year,zone);
    assert.equal(Object.keys(m).length,16);
    for(const value of Object.values(m)) assert.ok(value===null||Number.isFinite(value));
    for(const key of ['I2','S1','S2','S3','Q1','T2']) assert.ok(m[key]===null||(m[key]>=0&&m[key]<=100));
  }
});

test('el catálogo y los antecedentes conservan referencias y pagos desconocidos',()=>{
  assert.equal(documentCatalog.length,82);
  assert.equal(new Set(documentCatalog.map(d=>d.id)).size,82);
  assert.equal(historicalRecords.length,13);
  for(const row of historicalRecords){
    assert.ok(documentCatalog.some(d=>d.id===row.sourceId));
    assert.equal(row.paid,null);
  }
  assert.equal(historicalRecords.filter(r=>r.scope==='Fiestas'&&r.year===2015).reduce((s,r)=>s+r.amount,0),21675);
  const equality=selectHistorical('2020','Igualdad');
  assert.equal(equality.length,1);
  assert.equal(equality[0].amount,4400);
});

test('las discrepancias documentales no se resuelven alterando importes',()=>{
  assert.equal(grants.length,9);
  assert.equal(grants.filter(r=>r.status!=='Concuerda').length,5);
  const r=grants.find(r=>r.year===2023&&r.scope==='Euskera');
  assert.equal(r.declared-r.sum,450);
  assert.equal(r.status,'Bloqueado');
});

test('la renta mantiene periodo, unidad de serie y variación nominal',()=>{
  assert.equal(income.length,16);
  assert.equal(income.at(-1).year,2023);
  assert.equal(income.at(-1).value,44628);
  near((income.at(-1).value/income.at(-2).value-1)*100,7.940500665134843);
});
