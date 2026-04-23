import { EventDelegator } from "../delegate/EventDelegator.js";

export class TodoList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = new Map();
        this.idCounter = 0;
        this.delegator = new EventDelegator(`#${containerId}`);
        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.delegator.on("toggle", ({ id, completed }) => this.toggleItem(id, completed));
        this.delegator.on("delete", ({ id }) => this.deleteItem(id));
        this.delegator.on("priority", ({ id, priority }) => this.setPriority(id, priority));
    }

    addItem(text, priority = "normal") {
        const id = `todo-${++this.idCounter}`;
        const item = { id, text, completed: false, priority, editing: false };
        this.items.set(id, item);
        this.renderItem(item);
    }

    renderItem(item) {
        const div = document.createElement("div");
        div.className = `todo-item priority-${item.priority}`;
        div.dataset.id = item.id;
        div.innerHTML = `
            <input type="checkbox" data-action="toggle">
            <span class="todo-text">${item.text}</span>
            <button data-action="priority" data-priority="high">High</button>
            <button data-action="delete">Delete</button>
        `;
        this.container.appendChild(div);
    }

    toggleItem(id, completed) {
        const element = this.container.querySelector(`[data-id="${id}"]`);
        if (element) element.classList.toggle("completed", completed);
    }

    deleteItem(id) {
        this.items.delete(id);
        this.container.querySelector(`[data-id="${id}"]`)?.remove();
    }

    setPriority(id, priority) {
        const element = this.container.querySelector(`[data-id="${id}"]`);
        if (element) element.className = `todo-item priority-${priority}`;
    }

    generateItems(count = 1000) {
        for (let i = 1; i <= count; i++) this.addItem(`Task #${i}`);
    }
}
