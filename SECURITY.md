# Política de seguridad
No publiques vulnerabilidades en incidencias públicas. Notifica al responsable de seguridad definido por la empresa. Rota secretos de inmediato ante una filtración. Nunca guardes `.env` en Git. Las funciones críticas deben revisarse por dos personas y desplegarse con migraciones y rollback probado.

## Modelo de amenazas resumido
Activos: credenciales, PII, boletas, firmas y auditoría. Amenazas: inyección, fuerza bruta, IDOR, escalamiento de rol, robo de sesión, alteración de PDF y abuso interno. Controles: ORM parametrizado, validación, RBAC servidor, cookies seguras, bloqueo, auditoría, hash del documento y separación OWNER/ADMIN.
