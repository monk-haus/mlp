let locked = false;
let savedY = 0;

export function lockBodyScroll() {
  if (locked) return;
  locked = true;
  savedY = window.scrollY;
  const b = document.body.style;
  b.position = "fixed";
  b.top = `-${savedY}px`;
  b.left = "0";
  b.right = "0";
  b.width = "100%";
  b.overflow = "hidden";
}

export function unlockBodyScroll() {
  if (!locked) return;
  locked = false;
  const b = document.body.style;
  b.position = "";
  b.top = "";
  b.left = "";
  b.right = "";
  b.width = "";
  b.overflow = "";
  window.scrollTo(0, savedY);
}
