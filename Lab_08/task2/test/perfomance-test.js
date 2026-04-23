export function testIndividualListeners(containerId, itemCount) {
    const container = document.getElementById(containerId);
    const start = performance.now();
    for (let i = 1; i <= itemCount; i++) {
        const item = container.querySelector(`[data-id="todo-${i}"]`);
        if (item) {
            item.querySelector('input').addEventListener("change", () => { });
        }
    }
    return performance.now() - start;
}

export function testEventDelegation(containerId) {
    const container = document.getElementById(containerId);
    const start = performance.now();
    container.addEventListener("change", (e) => { if (e.target.type === "checkbox") { } });
    return performance.now() - start;
}
