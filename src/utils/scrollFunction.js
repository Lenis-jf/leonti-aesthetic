export function scrollFunction(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = window.innerHeight / 2 - el.offsetHeight / 2;
  window.scrollTo({ top: yCoordinate - yOffset, behavior: 'smooth' });
}
