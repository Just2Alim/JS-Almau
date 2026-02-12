export function mountLazyComponent(container) {
  container.innerHTML = `
    <div>
      <h3>Lazy Component</h3>
      <p>Loaded when visible using IntersectionObserver.</p>
    </div>
  `;
}
