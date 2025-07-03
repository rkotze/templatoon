# 🧭 User Journey: Using Templatoon to Manage PR Templates

Templatoon helps developers and teams create reusable pull request templates and apply them consistently across multiple GitHub repositories.

---

## 🎯 Goal

Create a reusable PR template and apply it to multiple GitHub repositories via automated pull requests.

---

## 👤 User Persona

An engineer, tech lead, or open source maintainer who wants to standardize pull request formats across their projects or team repositories.

---

## 🧵 Step-by-Step Journey

### 🔐 1. Sign In with GitHub

- Authenticate via GitHub OAuth
- App requests access to the user's repositories (only for reading/writing PR templates)

---

### 🧭 2. Onboarding / Dashboard Intro

- First-time users see a short 3-step intro:
  1. Create a template
  2. Link it to your repos
  3. Push it as a PR

---

### 📝 3. Create a PR Template

- Fill out a form with:
  - Template name (e.g., “Feature PR”)
  - Optional description
  - Markdown editor for the template body
- Save the template
- The template is stored in your private database

---

### 🔗 4. Link Template to GitHub Repositories

- Select which GitHub repos the template should apply to
- Multi-select UI for filtering and selecting repos
- Save the template-to-repo links

---

### 🚀 5. Push Template to Repos

- Choose one or more linked repos to push the template to
- Templatoon creates:
  - A new branch (`templatoon/update-pr-template`)
  - A commit adding or updating `.github/PULL_REQUEST_TEMPLATE.md`
  - A pull request with a summary message
- Success message shows PR links

---

### 📊 6. View PR Status Dashboard

- Monitor PR state for each linked repo:
  - ⬜️ Not pushed
  - 🟡 Open
  - ✅ Merged
  - ❌ Closed

---

### 🧠 7. Edit or Update a Template

- Edit the existing template content
- Re-push changes to all or selected linked repositories

---

## 🔁 Return User Flow (Simplified)

- Sign in
- View existing templates on dashboard
- Click into a template
- Link new repos or push updates
- Done!

---

## 🪄 Future Enhancements (Post-MVP)

- Markdown preview for template editor
- Support for multiple templates per repo (`.github/PULL_REQUEST_TEMPLATE/`)
- Slack or webhook notifications for PRs opened or merged
- GitHub App installation for org-wide access