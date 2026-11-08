/**
 * Helper to ensure image URLs respect Vite's base path (e.g. `/zoonotic-lab/` on GitHub Pages).
 *
 * If a path starts with `/images/` or `/assets/`, this prefixes it with `import.meta.env.BASE_URL`
 * so it works seamlessly on both local development (`/`) and GitHub Pages (`/zoonotic-lab/`).
 */
export function getAssetUrl(path?: string): string | undefined {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If already prefixed with base URL, don't duplicate
  if (cleanBase && cleanPath.startsWith(cleanBase)) {
    return cleanPath;
  }

  return `${cleanBase}${cleanPath}`;
}
