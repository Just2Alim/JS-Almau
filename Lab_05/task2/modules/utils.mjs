export default function qs(selector) {
  return document.querySelector(selector);
}

export const setText = (el, text) => {
  el.textContent = text;
};
