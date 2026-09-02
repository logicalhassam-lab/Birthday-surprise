const GLYPHS = ["❤️", "💖", "✨", "💗", "🌸", "💫"];

/** Bursts a small cloud of hearts/sparkles from a screen coordinate. */
export function heartBurst(x: number, y: number, amount = 14) {
  if (typeof document === "undefined") return;

  for (let i = 0; i < amount; i++) {
    const el = document.createElement("span");
    el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "❤️";
    const angle = (Math.PI * 2 * i) / amount + Math.random() * 0.5;
    const dist = 60 + Math.random() * 130;
    el.style.cssText = `
      position:fixed;left:${x}px;top:${y}px;z-index:60;pointer-events:none;
      font-size:${12 + Math.random() * 18}px;will-change:transform,opacity;
      --dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist - 40}px;
      animation: burst ${700 + Math.random() * 600}ms cubic-bezier(.2,.7,.2,1) forwards;
    `;
    document.body.appendChild(el);
    window.setTimeout(() => el.remove(), 1500);
  }
}

export function burstFromEvent(e: { clientX: number; clientY: number }, amount = 14) {
  heartBurst(e.clientX, e.clientY, amount);
}
