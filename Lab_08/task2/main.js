import { TodoList } from './todo/TodoList.js';
import { testIndividualListeners, testEventDelegation } from './test/performance-test.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoList = new TodoList('todo-list');
    todoList.generateItems(1000);

    const timeInd = testIndividualListeners('todo-list', 1000);
    const timeDel = testEventDelegation('todo-list');

    document.getElementById('perf-results').innerHTML = `
        Individual: ${timeInd.toFixed(2)}ms | Delegation: ${timeDel.toFixed(2)}ms
    `;
});
