# Nexus Construcción · Boletas Virtuales

Proyecto full-stack en TypeScript con Next.js, PostgreSQL y Prisma. Incluye roles USER, ADMIN y OWNER; creación de cuentas; datos de DNI, teléfono, cargo y proyecto; emisión de boletas; firma interna verificable; PDF; auditoría; soporte por correo y UI claymorphism + glassmorphism.

## Inicio rápido
1. Instala Node.js 22 LTS y Docker Desktop.
2. Copia `.env.example` como `.env` y cambia **todos** los secretos.
3. Ejecuta `docker compose up -d`.
4. Ejecuta `npm install`.
5. Ejecuta `npx prisma migrate dev --name init`.
6. Ejecuta `npm run db:seed`.
7. Ejecuta `npm run dev` y abre http://localhost:3000.

## Roles
- USER: ve sus propias boletas, las firma y descarga PDF.
- ADMIN: crea usuarios USER y ADMIN, publica boletas y consulta personal. No puede crear OWNER.
- OWNER: autoridad máxima. El primer OWNER solo se crea por seed y secreto de entorno.

## Seguridad aplicada
- Consultas parametrizadas mediante Prisma. Nunca concatena SQL de entrada.
- Contraseñas Argon2id y política mínima de 14 caracteres para cuentas nuevas.
- Cookie de sesión HttpOnly, SameSite=Lax, Secure en producción y prefijo `__Host-`.
- Sesiones aleatorias almacenadas como hash SHA-256, expiración de 8 horas y revocación al cerrar sesión.
- Validación Zod en servidor, control de acceso en cada acción y protección contra IDOR en el PDF.
- Bloqueo temporal tras 5 intentos fallidos, límite por huella de cliente y respuesta genérica para evitar enumeración.
- CSP y otros encabezados defensivos, auditoría de eventos sensibles y hash del documento firmado.
- El OWNER no se crea desde la interfaz, reduciendo escalamiento de privilegios.

## Antes de producción
- Coloca la app detrás de un proxy/CDN con TLS, rate limiting distribuido y WAF.
- Usa PostgreSQL administrado con backups PITR, cifrado y usuario DB de mínimo privilegio.
- Sustituye el limitador local/DB por Redis cuando haya varias réplicas.
- Añade MFA/WebAuthn, verificación de correo y flujo obligatorio de cambio de clave inicial.
- Define retención de datos, consentimiento, política de privacidad y requisitos laborales aplicables en Perú.
- Ejecuta SAST, DAST, análisis de dependencias, pruebas de penetración y revisión legal antes de procesar información real.
- Para firma con validez jurídica fuerte, integra un proveedor de firma digital/certificados conforme a la normativa aplicable. La firma incluida es una aceptación electrónica interna con evidencia técnica.

## Escalabilidad
La aplicación es stateless salvo PostgreSQL, por lo que puede replicarse horizontalmente. PDFs se generan bajo demanda. Para alto volumen, usar almacenamiento S3 compatible, cola de trabajos, Redis, observabilidad OpenTelemetry y partición/archivo de auditoría.

## Comprobaciones
`npm run typecheck`, `npm run build`, `npm run test` y `npm audit`.
