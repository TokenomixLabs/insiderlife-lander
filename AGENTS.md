# AGENTS.md

- Serve brand images (logos, marks) as bundled `src/assets` imports, not `.asset.json` CDN pointers — the production site is hosted on Netlify, where Lovable's `/__l5e/` asset paths do not resolve.
