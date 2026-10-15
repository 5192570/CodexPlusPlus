/**
 * No Rounded Corners — Codex++ user-script starter
 *
 * Purpose: force border-radius to zero across the renderer for a brutally
 * square UI. This is a CSS-only visual tweak; it does not inspect or change
 * conversation data.
 *
 * Install: copy this file to %APPDATA%\\Codex++\\user_scripts\\no-rounded-corners.js,
 * then enable/reload it in the Codex++ manager's User Scripts section.
 *
 * Disable: turn this script off and reload the renderer/app. Removing the
 * injected stylesheet is not automatic when a script is merely disabled.
 */
(() => {
  'use strict';

  const STYLE_ID = 'user-script-no-rounded-corners';
  const CSS = `
    *,
    *::before,
    *::after {
      border-radius: 0 !important;
    }
  `;

  // Idempotent: repeated script reloads update the same stylesheet instead
  // of accumulating duplicate <style> elements.
  let style = document.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    (document.head || document.documentElement).appendChild(style);
  }
  style.textContent = CSS;
})();
