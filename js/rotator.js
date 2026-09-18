export function createRotator(element, messages, interval = 3000) {
  if (!element || !messages?.length) return { stop() {}, start() {} };
  let index = 0; let timer; let paused = false;
  element.textContent = messages[0]; element.setAttribute("aria-live", "off");
  const next = () => { if (paused) return; index = (index + 1) % messages.length; element.classList.remove("is-changing"); void element.offsetWidth; element.textContent = messages[index]; element.classList.add("is-changing"); };
  const start = () => { clearInterval(timer); if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(next, interval); };
  const stop = () => clearInterval(timer);
  element.addEventListener("mouseenter", () => { paused = true; }); element.addEventListener("mouseleave", () => { paused = false; }); element.addEventListener("focusin", () => { paused = true; }); element.addEventListener("focusout", () => { paused = false; });
  document.addEventListener("visibilitychange", () => { paused = document.hidden; if (!paused) start(); }); start(); return { start, stop };
}
