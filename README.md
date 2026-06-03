# eg_admin — Brand B Strapi (separate CMS)

This folder is a **copy of** `../um_admin` with the **same content-types and API routes** as the uniweb Strapi app. Run it with a **fresh database** and **separate** `public/uploads` volume for this brand.

## Intended deployment

- **Own subdomain** (e.g. `cms.brandb.example.com`).
- **Own Docker stack** (or process manager) — do not share DB or upload volume with uniadmin.
- **CORS:** set `FRONTEND_URLS` in `.env` to the **eg_web** site origin (comma-separated if multiple).
- **Git:** separate repository from this directory when ready.

## Setup

```bash
cp .env.example .env
# Edit .env: APP_KEYS, salts, secrets, DATABASE_*, FRONTEND_URLS, etc.

npm install
npm run build
npm run start
# or develop:
npm run develop
```

## Docker (template)

See `docker-compose.yml` in this folder. Persist:

- `./data` (or your DB files)
- `./public/uploads` → Strapi `public/uploads` inside the container

Adjust `Dockerfile` path if your image build context differs.

## Relationship to eg_web

The **`eg_web`** SPA points `VITE_STRAPI_URL` at this instance. **No schema changes** are required vs `../um_admin`; only **content** and **media** differ per brand.

## Reference

Upstream twin: **`../um_admin`** (Unicare Medical / uniweb reference) — keep eg_admin aligned when you intentionally port API fixes.
