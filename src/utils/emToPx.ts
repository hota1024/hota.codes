export function emToPx(em: number, el: HTMLElement): number {
  if (el.parentElement) {
    return em * parseFloat(getComputedStyle(el.parentElement).fontSize);
  } else {
    return em * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
}
