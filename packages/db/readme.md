# @templatoon/db

This package contains the Prisma schema and database client for the Templatoon monorepo.

## Setup

1. **Install dependencies**

   From the monorepo root:

   ```sh
   pnpm install
   ```

2. **Set up your database connection**

   Create a `.env` file in this directory or at the monorepo root with your database URL:

   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

## Prisma Commands

- **Generate Prisma Client**

  ```sh
  pnpm exec prisma generate
  ```

- **Create a new migration**

  ```sh
  pnpm exec prisma migrate dev --name <migration-name>
  ```

- **Apply pending migrations**

  ```sh
  pnpm exec prisma migrate deploy
  ```

- **Open Prisma Studio**
  ```sh
  pnpm exec prisma studio
  ```

## Development

- Source code is in the `src` directory.
- Build output is in the `dist` directory.

To build the package:

```sh
pnpm build
```

## Useful Links

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Prisma CLI Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)
