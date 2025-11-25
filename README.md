# CodexDemo — Minimal Static Blog

This is a tiny, static blog scaffold. It contains plain HTML and CSS so you can host it on GitHub Pages, Netlify, or Google Cloud Storage.

Files created
- `index.html` — homepage that lists posts
- `about.html` — short about page
- `posts/post1.html` — sample post
- `404.html` — simple 404 page
- `assets/style.css` — styles

Preview locally
- Recommended: run a local static server so fonts, relative paths and some browser features behave correctly. From the project root run:

```bash
# from project root (/Users/architjain/src/CodexDemo)
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

- If you prefer opening files directly (double-click / file://), the styles will now load because stylesheet links were changed to relative paths. Note: some browsers block external fonts when using file:// — use the server for the best experience.

Deploy to GitHub Pages
1. Create a repo and push the project files.
2. On GitHub, enable Pages for the repository (branch `main` or `gh-pages`, and `/` root). GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

Deploy to Google Cloud Storage (static site)
1. Create a GCS bucket named after the site or any name.
2. Make the bucket a static website and upload files. Example using `gsutil`:

```bash
# replace <bucket-name>
gsutil mb gs://<bucket-name>
# set public read access (careful: this makes the site public)
gsutil iam ch allUsers:objectViewer gs://<bucket-name>
# upload files
gsutil -m rsync -r . gs://<bucket-name>
# configure website main page
gsutil web set -m index.html -e 404.html gs://<bucket-name>
```

Notes & next steps
- To author posts in Markdown, add a small build step (e.g., a script using `pandoc` or a static site generator like Hugo/Jekyll) to render Markdown into `posts/*.html`.
- For pretty URLs with GitHub Pages, consider configuring a `404.html` fallback or using a static site generator that outputs directory-based pages.

Enjoy! If you'd like, I can:
- Add a simple static index generator script (Markdown -> HTML), or
- Convert this to a basic Jekyll/Hugo scaffold for nicer authoring.
