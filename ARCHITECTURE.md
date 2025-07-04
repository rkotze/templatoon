

# 🏗️ Templatoon Architecture

Templatoon is a monorepo-based web application designed to help developers manage and sync pull request templates across multiple GitHub repositories.

---

## 🧱 Monorepo Structure

```
github-pr-templatoon/
│
├── apps/
│   └── web/               # Next.js app (frontend + API routes)
│
├── packages/
│   └── db/                # Database ORM (e.g. Prisma or Drizzle)
│   └── github/            # GitHub API integration logic
│
├── docker/
│   └── init.sql           # Optional DB seed/migration setup
│
├── docker-compose.yml     # Podman-compatible service definitions
├── .env                   # Environment configuration
└── README.md
```

---

## ⚙️ Core Technologies

| Layer            | Tech Stack                       | Reasoning |
|------------------|-----------------------------------|-----------|
| Frontend         | [Next.js](https://nextjs.org/) + React | Fullstack support (pages + API), SSR, developer-friendly |
| Backend/API      | Next.js API Routes                | Integrated backend to simplify deployment and DX |
| Database         | PostgreSQL                        | Reliable, widely supported open-source RDBMS |
| ORM              | Prisma (or Drizzle ORM)           | Type-safe DB access and migrations |
| GitHub API       | GitHub REST (or GraphQL) API      | To list repos, create PRs, and manage templates |
| Containerization | Podman + Docker Compose           | Rootless, secure container management for dev and prod |
| Auth             | GitHub OAuth                      | Seamless login and permissions model for GitHub repos |

---

## 🔄 Key App Flows

### 1. User Authentication
- User logs in via GitHub OAuth
- Access token is securely stored
- App fetches list of user repositories

### 2. Template Creation
- User creates a new PR template via a markdown editor
- Template is saved to the database

### 3. Linking to Repos
- User selects GitHub repositories
- App links the selected template to those repositories

### 4. Template Deployment
- On request, app:
  - Creates a new branch in the selected repo(s)
  - Adds or updates the `.github/PULL_REQUEST_TEMPLATE.md` file
  - Opens a pull request via GitHub API

### 5. Status Tracking
- The dashboard shows the state of each template deployment:
  - Not pushed / Open PR / Merged / Closed

---

## 🔐 Security & Permissions

- Templatoon only requests minimal GitHub scopes (repo access) via OAuth
- All write operations (PRs, branch creation) happen via the user's access token
- Tokens are stored encrypted at rest

---

## 🚀 Deployment Model (Planned)

Templatoon is containerized and runs in any Podman-compatible environment. Future hosting options may include:
- Railway
- Fly.io
- Render
- Self-hosted VM or VPS

---

## 🧱 Future Considerations

- Support GitHub Apps for better org-level integration
- Multi-template folders (`.github/PULL_REQUEST_TEMPLATE/`)
- Webhook support for real-time PR status updates
- Role-based access control for teams/orgs

---

## 🧠 Project Philosophy

Templatoon is built with the following principles:

- **Learn by doing:** Designed to help the developer understand the "why" behind the tech stack
- **Keep it simple:** Avoid unnecessary complexity or premature abstraction
- **Great UX first:** Focus on intuitive, fast, and helpful interactions

---

## 📬 Feedback & Contributions

Templatoon is source-available and welcomes contributions and feedback. Commercial usage requires a separate license.