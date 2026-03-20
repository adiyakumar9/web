'use client'

// Inline script injected into <head> — runs synchronously before paint
// to prevent flash of wrong theme
export const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : '');
  } catch(e) {}
})();
`

export function useTheme() {
  const toggle = () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? '' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next === 'dark' ? 'dark' : 'light') } catch { }
    window.dispatchEvent(new CustomEvent('theme-change', { detail: next === 'dark' }))
  }
  return { toggle }
}
