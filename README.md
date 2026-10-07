# Realms of the Ring — Battle Board (Next.js)

    npm install
    npm run dev      # http://localhost:3000

Deploy: push to GitHub -> Import in Vercel (framework auto-detected: Next.js). No env vars required.
The game API (http://3.110.222.67:8000) is called server-side through /api/initial-state and /api/play,
so the https Vercel site never hits browser mixed-content blocking. Override with GAME_API_BASE if needed.
