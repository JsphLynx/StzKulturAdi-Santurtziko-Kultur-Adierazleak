# Verificación del repositorio

[Volver al proyecto](../README.md)

## Comprobación local · 16/10/2026

Entorno: Node.js 24.19.0. Comando desde la raíz: `npm test`. Resultado: **14 pruebas aprobadas, 0 fallos**.

| Grupo | Evidencia |
|---|---|
| Conjunto inicial | 48 identificadores únicos, 16 indicadores y registros válidos |
| Resultados de referencia | 2025 / Todo Santurtzi y 2025 / San Juan |
| Contrato analítico | Tasas ponderadas, pares completos, ausencia frente a cero, exclusión de pendientes |
| Denominadores | Ausencia de población compatible, denominadores cero y resultados finitos |
| Formularios | Aforo, conteos enteros, horas, periodo, zona, asociación, responsable y evidencia |
| Fuentes | 82 identificadores documentales; referencias de antecedentes; pagos desconocidos |
| Conciliación | Cinco líneas con incidencia y diferencia de 450 € conservadas |
| Contexto | Serie de renta y cálculo nominal reproducibles |

Los resultados de referencia proceden de la memoria y demostración originales. Los casos adicionales comprueban reglas analíticas con entradas controladas. `tests/model.test.js` permite repetir la verificación sin dependencias npm.

Los ocho archivos de `app/` se han comparado byte a byte con la fuente original v1.2. Sus huellas SHA-256 figuran en [SOURCE_SHA256.json](SOURCE_SHA256.json). La sintaxis JavaScript y los destinos de enlaces relativos de la documentación también se comprueban antes de la publicación.

## Automatización

`.github/workflows/verify.yml` ejecuta la misma suite en cada push y pull request. El resultado remoto se consulta en la pestaña Actions del repositorio; el resultado local anterior no sustituye al estado de una ejecución remota.

## Evidencias heredadas

`revision/verificacion_lecturas.json` registra comprobaciones de septiembre de 2026, incluidas 150 combinaciones de plantillas con DOM simulado. Se conserva como evidencia previa, separada de las 14 pruebas incorporadas a este repositorio.

Las capturas y PDF proceden de la versión 3 del sitio, identificada como v1.2. La revisión de octubre prepara el portafolio y las pruebas; no repite la lectura íntegra de las fuentes externas ni acredita su vigencia actual.

## Qué no acreditan estas pruebas

No se ha realizado una nueva prueba integral de todos los flujos en navegador, una auditoría completa de seguridad o accesibilidad, pruebas de carga, integración municipal ni restauración de datos de servidor. Las pruebas de datos documentales comprueban coherencia interna, no sustituyen el cotejo con resoluciones originales ni certifican pagos.
