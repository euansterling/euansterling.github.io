# Archived Comment Components

This folder contains previous iterations of the `Comments` component for integrating [`@giscus/react`](https://www.npmjs.com/package/@giscus/react). These versions are archived for reference, debugging, and documentation purposes.

Only the final version (`components/Comments.tsx`) is used in production.

---

## 📦 Files

### `Comments.legacy-author.tsx`

- ✅ **Original version** suggested by theme author.
- Uses `localStorage` and `prefers-color-scheme` to determine initial theme.
- Adds manual listener for `#theme-btn` click.
- Also listens to system theme changes (`matchMedia(...).addEventListener(...)`).
- ⚠️ Can cause **hydration mismatch** on first render.

---

### `Comments.hydration-safe.tsx`

- ✅ Fixes hydration mismatch.
- Initializes theme with fixed value (`"light"`), then corrects it on mount.
- Reads from `data-theme` attribute on `<html>`.
- Does not react to theme changes after initial render.
- Suitable when **Giscus only needs to match initial theme**.

---

### `Comments.with-theme-hook.tsx`

- ✅ Uses `useThemeFromHtml()` custom hook.
- Observes `data-theme` changes with `MutationObserver`.
- Updates Giscus theme reactively (e.g., when user toggles dark/light mode).
- Most robust and automatic version prior to extracting into reusable hook.
- Used as the base for the final production component.

---

## ✅ Final Component

The latest and active version is located at: components/Comments.tsx

It uses the extracted hook:

```ts
import { useThemeFromHtml } from "@/hooks/useThemeFromHtml";
```

## 🗂️ Notes

- These archived files are not imported in the app and are excluded from build output.

- You can rename, refactor, or remove these as needed.

- Safe to keep under **archive**/ for version tracking and future reference.
