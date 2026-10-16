# Caso de negocio

[Volver al proyecto](../README.md)

## Problema y decisión

Una cifra cultural solo es útil para decidir si se conoce qué cuenta, de dónde procede y qué parte de la actividad representa. El proyecto plantea un sistema propio para reunir actividades, recursos, ayudas y participación con definiciones consistentes.

La pregunta inicial es: **¿qué información necesita Cultura para revisar una programación y justificar una decisión?** No se presupone que una asistencia baja pruebe un problema de gestión ni que una subvención concedida sea gasto pagado.

## Usuarios y requisitos

| Perfil propuesto | Necesidad | Respuesta del MVP | Pendiente de piloto |
|---|---|---|---|
| Técnico de Cultura | Registrar actividad con evidencia | Formulario, controles y guardado local | Catálogos y permisos reales |
| Responsable de validación | Identificar registros incompletos | Cola de calidad y estados demo | Separación de funciones y auditoría protegida |
| Dirección | Entender cifras y límites | Panel, fichas y casos de decisión | Contraste con resultados municipales |
| Analista | Reproducir y exportar | Motor de cálculo, CSV y JSON | Versionado de fórmulas y conjuntos reales |
| Intervención | Conciliar importes y fases | Lectura documental con discrepancias visibles | Validación contable y pagos |

Estos perfiles son una propuesta de diseño; no representan usuarios municipales contratados ni sesiones de validación ya realizadas.

## Decisiones de diseño

1. Separar el contexto real de la actividad sintética para demostrar funciones sin fabricar resultados municipales.
2. Mantener los datos ausentes como ausentes: no sustituir la población zonal ni inventar satisfacción.
3. Calcular ocupación sobre pares completos y sumar denominadores, evitando el promedio simple de porcentajes.
4. Referenciar SIACS como futuro maestro de asociaciones y evitar duplicarlo.
5. Conservar las discrepancias documentales antes de construir series temporales o totales.
6. Crear primero un demostrador estático para explorar el flujo; plantear persistencia y roles como un piloto posterior.

## Resultado entregado y valor pendiente

El resultado verificable es el MVP, su documentación y sus reglas de cálculo. Los 16 indicadores, las 48 actividades sintéticas y el catálogo documental permiten inspeccionar ese trabajo.

El ahorro de tiempo, la mejora de calidad de datos municipales y la utilidad para decidir son hipótesis del piloto. No se dispone de una medición antes/después ni de una evaluación causal de impacto cultural.

La [propuesta original](pdf/03_Propuesta_Piloto_StzKulturAdi.pdf) plantea hasta 30 actividades, dos equipamientos y una línea cultural, con criterios de trazabilidad, cálculo, conciliación, permisos y recuperación. Su duración orientativa es de diez semanas desde la disponibilidad de datos y responsables; no es un compromiso municipal.

## Competencias que puede evaluar un reclutador

| Competencia | Evidencia concreta |
|---|---|
| Business Analysis | Usuarios, necesidades, alcance y criterios de aceptación |
| Data Analytics | Fórmulas inspeccionables y resultados reproducibles |
| Data Quality | Casos de ausencias, validación pendiente y conciliación |
| Comunicación | Resumen ejecutivo, capturas y explicación de límites |
| Desarrollo web | Aplicación modular sin dependencias de compilación |
| Arquitectura de datos | Diseño propuesto separado de la implementación actual |

No se presenta este repositorio como evidencia de una base PostgreSQL implantada ni de un modelo predictivo entrenado.
