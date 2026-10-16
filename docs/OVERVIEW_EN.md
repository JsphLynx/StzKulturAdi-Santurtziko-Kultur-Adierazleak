# StzKulturAdi · Cultural indicators for Santurtzi

[Español / main README](../README.md)

A portfolio project by Joseph / JsphLynx combining business analysis, data quality and a runnable web prototype for cultural management decisions.

## What is implemented

- A static HTML/CSS/JavaScript application with ES modules, local storage and CSV/JSON exports.
- 16 indicator definitions, 48 synthetic activities for 2024–2025, six fictional associations and four illustrative areas.
- Documentary source tracking, contextual population/income snapshots and grant reconciliation that preserves discrepancies.
- Screenshots, four project PDFs, reproducible calculation tests and a proposed municipal pilot.

The project was developed with generative AI assistance. This repository provides inspectable evidence rather than claims of municipal deployment or measured impact.

## Run locally

From the repository root, run `python3 -m http.server 8000 --bind 127.0.0.1 --directory app` and open `http://localhost:8000`. On Windows, use `py` instead of `python3`. No build or package installation is required. Tests use Node.js 22+ and run with `npm test`.

The original hosted instance has restricted access. The local application, screenshots and PDFs can be evaluated independently.

## Why the analytical choices matter

For the synthetic 2025 San Juan scenario, four complete, validated records produce 326 attendances and 50.9375% occupancy. Occupancy aggregates attendance and capacity over the same records. Missing attendance is not replaced by zero; missing local population prevents per-capita rates. Attendance does not count unique people.

The model distinguishes documentary evidence from synthetic activity, and grants awarded from payments made. It does not infer causal impact from changes in attendance.

## Boundaries

PostgreSQL/PostGIS, protected audit logs, municipal identity and SIACS integration are proposed architecture, not implemented features. There is no connected AI agent, machine learning model or municipal production backend. Benefits such as time savings remain hypotheses to test in a future pilot.

See the [business case](CASO_DE_NEGOCIO.md), [architecture](ARQUITECTURA.md), [demonstration](DEMOSTRACION.md) and [verification scope](VERIFICACION.md). The application and detailed project documentation are in Spanish.
