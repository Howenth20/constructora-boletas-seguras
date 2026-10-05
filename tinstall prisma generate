{
  "name": "constructora-boletas-seguras",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": "22.x"
  },
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "typecheck": "tsc --noEmit",
    "postinstall": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:deploy": "prisma migrate deploy",
    "db:seed": "tsx prisma/seed.ts",
    "test": "vitest run"
  },
  "dependencies": {
    "@prisma/client": "6.7.0",
    "argon2": "0.41.1",
    "jose": "6.0.10",
    "lucide-react": "0.468.0",
    "next": "^15.5.27",
    "pdf-lib": "1.17.1",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "zod": "3.24.2"
  },
  "devDependencies": {
    "@types/node": "22.13.10",
    "@types/react": "19.0.10",
    "@types/react-dom": "19.0.4",
    "prisma": "6.7.0",
    "tsx": "4.19.3",
    "typescript": "5.8.2",
    "vitest": "^3.2.7"
  }
}
