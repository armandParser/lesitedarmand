let timer: number | undefined;

/** Show the shared status toast (rendered once in HomeLayout). */
export function toast(message: string) {
  const el = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if (!el || !text) return;
  text.textContent = message;
  el.classList.add('is-on');
  clearTimeout(timer);
  timer = window.setTimeout(() => el.classList.remove('is-on'), 2200);
}
