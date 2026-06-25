# Portfolio – Frontend (React + Vite)

Personal portfolio website frontend built with React 18 and Vite.

## 🗂️ Folder Structure

```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav with mobile menu
│   │   ├── Hero.jsx          # Landing with typewriter animation
│   │   ├── About.jsx         # Bio, stats, resume link
│   │   ├── Skills.jsx        # Grouped skill chips
│   │   ├── Experience.jsx    # Timeline of internships
│   │   ├── Projects.jsx      # Project cards with links
│   │   ├── Achievements.jsx  # Awards + certifications
│   │   ├── Contact.jsx       # Contact form → backend API
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── AdminLogin.jsx    # /admin/login
│   │   └── AdminDashboard.jsx # /admin/dashboard
│   ├── context/
│   │   └── AuthContext.jsx   # JWT auth state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Local Setup

```bash
cd client
npm install
npm run dev
# Runs on http://localhost:5173
```

Make sure the backend server is running on port 5000 — Vite proxies `/api` requests to it automatically.

## ➕ How to Add New Content

All data lives in simple arrays inside each component — no database or CMS needed for static content.

| What to add | File to edit | What to do |
|---|---|---|
| New project | `src/components/Projects.jsx` | Add object to `projects[]` array |
| New internship | `src/components/Experience.jsx` | Add object to `experiences[]` array |
| New achievement | `src/components/Achievements.jsx` | Add to `achievements[]` array |
| New certification | `src/components/Achievements.jsx` | Add to `certifications[]` array |
| New skill | `src/components/Skills.jsx` | Add string to the right category in `skillGroups[]` |

### Example — adding a new project:
```js
// In Projects.jsx, inside the projects array:
{
  title: 'My New Project',
  subtitle: 'What it does in one line',
  description: 'Longer description here.',
  tech: ['React', 'Node.js', 'MongoDB'],
  live: 'https://yourapp.com',
  github: 'https://github.com/yourrepo',
  color: '#22c55e',   // pick any accent color
  highlights: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
}
```

## 🌐 Deployment (Vercel)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** | Build: `npm run build` | Output: `dist`
4. Add environment variable:
   - `VITE_API_URL` = your Render backend URL (e.g. `https://portfolio-server-xxxx.onrender.com`)
5. Click Deploy

## 🔧 Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL (empty = uses Vite proxy locally) |

## 📦 Tech Stack

- React 18
- React Router v6
- Axios
- Lucide React (icons)
- Vite
