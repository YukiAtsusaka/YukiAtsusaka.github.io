# Yuki Atsusaka — Academic website

A static academic website designed for `https://yukiatsusaka.github.io/`.

## Local preview

1. Install Node.js 22 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Review checklist

- Replace the Teaching placeholder with current course titles, terms, and links.
- Confirm all publication metadata and destination links.
- Confirm the current CV link.
- Decide whether `atsusaka.org` will redirect to the GitHub Pages address or use it as a custom domain.
- Add any working papers that should appear on the public site.

## Deployment

Deployment is intentionally manual during the review period. In GitHub, open **Actions → Deploy to GitHub Pages → Run workflow**. To deploy automatically after every update to `main`, uncomment the `push` block in `.github/workflows/deploy.yml`.
