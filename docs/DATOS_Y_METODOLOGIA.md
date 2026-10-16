# Datos y metodología

[Volver al proyecto](../README.md)

## Naturaleza de las entradas

| Conjunto | Cobertura de la entrega | Naturaleza y límite |
|---|---|---|
| Actividades | 48 registros; 24 en 2024 y 24 en 2025 | Sintéticos, reproducibles mediante `seed()` |
| Asociaciones | 6 identificadores `SIACS-DEMO-*` | Entidades ficticias; sin conexión SIACS |
| Territorio | Centro, Mamariga, Kabiezes y San Juan | Cuatro zonas ilustrativas, sin catálogo oficial completo |
| Población | 46.111; municipio, año 2025 | Instantánea real atribuida a Eustat; 2024 y zonas ausentes |
| Renta familiar total | 16 observaciones de 2001 a 2023 | Instantánea Udalmap, euros corrientes y años no consecutivos |
| Ayudas 2023/2024 | 9 líneas, 5 con revisión o bloqueo | Datos documentales, sin acreditación de pago |
| Antecedentes | 13 registros de 12 PDF administrativos | Finalidades y fases separadas; no formar un total cultural automático |
| Catálogo de fuentes | 82 documentos | Estados de lectura heredados y referencias, no una auditoría municipal |

Las consultas originales son de septiembre de 2026. Esta publicación del repositorio no actualiza las fuentes ni vuelve a validar todas sus cifras. El fichero JSON de inventario previo a v1.2 no se publica como catálogo vigente: la referencia de la aplicación es `app/source-catalog.js`.

## Contrato de cálculo

`R`: registros del año y ámbito. `V`: registros de R con estado validado demo. `P`: registros de V con asistencia informada. Población compatible: mismo año y territorio.

| Código | Medida | Fórmula implementada o estado |
|---|---|---|
| A1 | Coste de actividades por habitante | Σ coste V / población compatible |
| A2 | Ejecución del presupuesto demo | Σ coste V / (n.º R × 2.000 €) × 100 |
| A3 | Apoyo a asociaciones | Σ ayuda de asociaciones demo del ámbito; factor 0,9 en 2024 |
| A4 | Personal cultural equivalente | Sin dato; plantilla y dedicación ausentes |
| S1 | Accesibilidad declarada | N.º V accesibles / n.º V × 100 |
| S2 | Oferta gratuita | N.º V gratuitas / n.º V × 100 |
| S3 | Programación en euskera | N.º V en euskera / n.º V × 100 |
| S4 | Satisfacción | Sin dato; no existen respuestas de encuesta |
| I1 | Asistencias | Σ asistencia P |
| I2 | Ocupación | Σ asistencia P / Σ aforo P × 100 |
| I3 | Coste por asistencia | Σ coste P / Σ asistencia P |
| I4 | Conversión de difusión | Σ inscripciones V / Σ clics V × 100 |
| I5 | Uso de equipamientos | Σ horas usadas V / Σ horas disponibles V × 100 |
| T1 | Actividades por 10.000 habitantes | N.º V / población compatible × 10.000 |
| T2 | Cobertura de zonas demo | Zonas con actividad validada / zonas seleccionadas × 100 |
| Q1 | Registros listos para asistencia | N.º P / n.º R × 100 |

A2 es un supuesto de demostración, no ejecución presupuestaria municipal. Las metas de las fichas también son ilustrativas. El origen, la transformación y la validación son dimensiones distintas: un cálculo con costes sintéticos y población real sigue siendo demostrativo.

## Reglas de interpretación

- Asistencia cuenta visitas, no personas únicas.
- Si falta asistencia, se excluye también el aforo y coste correspondientes de I2 e I3.
- Los pendientes se excluyen de los indicadores de actividad y permanecen en el denominador de Q1.
- Ausencia no equivale a cero; una tasa sin denominador válido queda sin dato.
- La ubicación es el lugar de la actividad, no la residencia de sus asistentes.
- Concesión, dotación, obligación y pago no son fases intercambiables.
- Los cambios temporales no demuestran causalidad ni pueden atribuirse al sistema.
- No existe índice compuesto que mezcle euros, porcentajes y asistencias; las correspondencias ODS/FEMP son propuestas propias.

## Fuentes y trazabilidad

La aplicación contiene enlaces individuales, periodo, clasificación y alcance de lectura. [El acta de cierre](revision/cierre_13_lecturas.md) documenta las 13 lecturas completadas después del primer cribado; no convierte todos los documentos en lecturas visuales íntegras ni resuelve las discrepancias contables de 2023/2024.

Referencias de contexto conservadas: [Eustat, población](https://www.eustat.eus/elementos/tbl0011427_c.html), [Udalmap, renta familiar total](https://opendata.euskadi.eus/webopd00-dataset/es/contenidos/estadistica/udalmap_indicador_206/es_def/adjuntos/indicator.shtml) y [SICultura/BACULO](https://sicultura.es/baculo-2/). Su disponibilidad actual no se garantiza. Los PDF de terceros no se redistribuyen en este repositorio.
