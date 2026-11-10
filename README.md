# 💻 IT Club Website

The website team's project for introducing the IT Club, its activities, and its community.

## 📚 Contents

1. [Introduction](#-introduction)
2. [Project structure](#-project-structure)
3. [Technology stack](#-technology-stack)
4. [Team members](#-team-members)
5. [Branch naming rules](#-branch-naming-rules)
6. [Commit message conventions](#-commit-message-conventions)
7. [Collaboration and code review](#-collaboration-and-code-review)
8. [Getting started](#-getting-started)
9. [Deployment](#-deployment)
10. [Former team members](#-former-team-members)

## 🧭 Introduction

This repository contains the IT Club website, built by the website team. It gives visitors an overview of the club, its activities, its teams, and frequently asked questions.

The home page is the most developed part of the current project. The About, Staff, and Activities routes exist, but their pages still contain placeholder content. The site supports light and dark themes, with the selected theme saved in the browser.

## 🗂️ Project structure

```text
.
├── .github/workflows/     # GitHub Pages deployment workflow
├── public/                # Public static assets
├── src/
│   ├── app/
│   │   ├── components/    # Shared layouts and home page sections
│   │   ├── pages/         # Page components
│   │   └── routes/        # Route definitions
│   ├── assets/            # Images and other imported assets
│   ├── styles/            # Global styles and theme configuration
│   ├── App.tsx            # Router and theme state
│   └── main.tsx           # Application entry point
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml         # pnpm dependency lockfile
└── vite.config.ts         # Vite configuration
```

## 🧰 Technology stack

| Part | Technologies / current status |
| --- | --- |
| Frontend | HTML, CSS, React 19, TypeScript 6, Tailwind CSS 4, React Router 7 |
| Backend | Not implemented in this repository. |
| Database | Not implemented in this repository. |
| Media and icons | Cloudinary, browser Fetch API, Lucide React |
| Development and build tools | Vite 8, React Compiler, pnpm |
| Code quality | TypeScript, ESLint |
| CI/CD and hosting | GitHub Actions, GitHub Pages |

Some home page images depend on Cloudinary being reachable. Update the table if the team adds a backend, database, or other technologies.

## 👥 Team members

Add the current website team here. Confirm names, usernames, and roles with the team before publishing them.

| Name | GitHub | Role | Responsibilities |
| --- | --- | --- | --- |
| To be added | To be added | To be added | To be added |

## 🔀 Branch naming rules

The following convention is a **proposal for this repository**. The team can agree on it before adopting it as its shared rule.

### Format

```text
type/short-description
```

- `type` describes the main kind of work; choose one from the table below.
- Separate the type and description with one `/`.
- Write the description in lowercase, using hyphens between words. Use only letters, numbers, and hyphens in the description.
- Describe the change clearly and keep the name short. Avoid spaces, underscores, and vague names such as `update` or `my-branch`.
- If there is a related issue, optionally put its number at the beginning of the description: `feature/42-home-page-carousel`. Do not include the `#` character.
- Create one working branch for a focused change. `main` is the shared deployment branch and does not follow the working-branch format.

| Type | Use it for | Example |
| --- | --- | --- |
| `prototype` | An experimental version for the team to review. | `prototype/html-css-frontend` |
| `feature` | New functionality or a new page. | `feature/staff-page` |
| `fix` | A non-urgent bug fix. | `fix/mobile-navigation` |
| `hotfix` | An urgent fix for a production problem. | `hotfix/broken-home-page` |
| `docs` | Documentation changes. | `docs/setup-instructions` |
| `style` | Code formatting that does not change behavior. | `style/format-header` |
| `refactor` | Code restructuring without an intended behavior change. | `refactor/page-routes` |
| `test` | Adding or updating tests. | `test/theme-toggle` |
| `chore` | Maintenance or tooling updates. | `chore/update-dependencies` |

Examples that do **not** follow the convention:

| Branch | Problem | Better example |
| --- | --- | --- |
| `StaffPage` | Missing a type; uses uppercase. | `feature/staff-page` |
| `fix/mobile menu` | Contains a space. | `fix/mobile-menu` |
| `feature/update` | Does not explain the change. | `feature/activity-gallery` |

## 📝 Commit message conventions

A consistent commit message makes the project history easier to read. The team can use this format:

```text
type(optional-scope): short description
```

Use an action verb in the description, such as `add`, `fix`, or `update`. The scope identifies the affected area and can be omitted. For a new feature, use `feat` in the commit message even though the branch type is `feature`.

| Type | Purpose | Example |
| --- | --- | --- |
| `feat` | Add a feature. | `feat(staff): add member cards` |
| `fix` | Correct a bug. | `fix(header): close mobile menu after navigation` |
| `docs` | Change documentation. | `docs(readme): explain branch names` |
| `style` | Change formatting without changing behavior. | `style(header): format navigation markup` |
| `refactor` | Restructure existing code. | `refactor(routes): group page routes` |
| `test` | Add or update tests. | `test(theme): cover the theme toggle` |
| `chore` | Update maintenance or development tooling. | `chore(deps): update vite` |

Keep each commit focused on a related set of changes. CSS changes that alter the site's appearance or behavior should use a type such as `feat` or `fix`; `style` is for formatting-only changes.

## 🤝 Collaboration and code review

### Before opening a pull request

1. Check for existing issues or work in progress, and discuss changes that affect shared components or the project's direction.
2. Create a focused branch and make commits that explain your work.
3. Run the checks in [Getting started](#-getting-started) that apply to your change. Check the interface on different screen sizes and in both themes when relevant.
4. Open a pull request describing what changed, why it changed, and how you checked it. Include screenshots for visible interface changes and link any related issue.

### Reviewing and responding

- Review the behavior, readability, accessibility, and any effects on existing pages.
- Explain concerns clearly and suggest improvements; distinguish required fixes from optional ideas.
- Keep feedback respectful and discuss the code, not the person.
- Respond to review comments, make agreed changes, and request another review when needed.
- Merge after the required reviews and checks are complete, following the team's agreed process. Remove the working branch when it is no longer needed.

## 🚀 Getting started

### Prerequisites

- Git.
- Node.js 24.x. The locked build dependencies require a newer Node version than the Node 20 currently specified in the deployment workflow.
- pnpm 10, matching the deployment workflow.

### Run locally

Clone the repository, open a terminal in the project directory, and run:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Vite. The project also contains an npm lockfile; the commands above use pnpm to match the deployment workflow.

### Available checks and commands

| Command | Purpose |
| --- | --- |
| `pnpm lint` | Run ESLint. |
| `pnpm build` | Run the TypeScript build and create a production build in `dist/`. |
| `pnpm preview` | Preview an existing production build locally. Run `pnpm build` first. |

No automated test script is currently defined in `package.json`.

## 🌐 Deployment

The workflow in `.github/workflows/deploy.yml` builds the website and publishes `dist/` to GitHub Pages when changes are pushed to `main`; it can also be started manually from GitHub Actions. The application uses hash-based routes for GitHub Pages compatibility.

**Workflow version mismatch:** The workflow currently selects Node 20, but the locked `@rolldown/plugin-babel` package declares Node 22.12 or newer. Update the workflow to Node 24 to match the recommended local environment before relying on deployment.

## 🎓 Former team members

This section recognizes people who previously contributed to the website team. Add confirmed details when they are available.

| Name | GitHub | Former role | Contributions | Active period |
| --- | --- | --- | --- | --- |
| To be added | To be added | To be added | To be added | To be added |
