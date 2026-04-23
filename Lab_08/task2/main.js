import { TodoList } from './todo/TodoList.js';
// import { testIndividualListeners, testEventDelegation } from './test/performance-test.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        const todoList = new TodoList('todo-list');
        todoList.generateItems(1000);

        const timeInd = testIndividualListeners('todo-list', 1000);
        const timeDel = testEventDelegation('todo-list');

        const resultsDiv = document.getElementById('perf-results');
        resultsDiv.innerHTML = `
            <p>Individual listeners (1000 items): <span>${timeInd.toFixed(2)} ms</span></p>
            <p>Event delegation: <span>${timeDel.toFixed(2)} ms</span></p>
        `;

        console.log("Task 2 успешно загружен и отрендерен!");

    } catch (error) {
        console.error("Ошибка при выполнении Task 2:", error);
        document.getElementById('perf-results').innerHTML =
            `<span style="color: red;">Произошла ошибка в коде: ${error.message}</span>`;
    }
});
