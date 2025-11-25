# Archit Jain — Personal Blog

This repository is a tiny, static personal blog for Archit Jain. It uses plain HTML and CSS and is intended to be fast and easy to host (GitHub Pages, Netlify, GCS, etc.).

Files in this repo
- `index.html` — homepage that lists posts
- `about.html` — short about page
- `posts/post1.html` — sample post
- `404.html` — simple 404 page
- `assets/style.css` — styles

Preview locally
- Run a simple static server from the project root to preview (recommended). From the project root run:

```bash
# from project root (/Users/architjain/src/archit1jain.github.io)
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy to GitHub Pages
1. Create a GitHub repository and push the project files from this folder.
2. On GitHub, enable Pages for the repository (branch `main` and root `/`). Your site will publish at `https://<your-username>.github.io/<repo-name>/`.

Notes & next steps
- To author posts in Markdown, add a small build step (e.g., a script using `pandoc` or a static site generator like Hugo/Jekyll) to render Markdown into `posts/*.html`.
- I can help add a tiny Markdown -> HTML generator script, convert to a simple Jekyll scaffold, or wire up nicer navigation if you'd like.
