import { ForestRenderer } from './forest/ForestRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
    const renderer = new ForestRenderer('forestCanvas');
    renderer.generateForest(100);
    const stats = renderer.render();

    document.getElementById('stats').innerHTML = `
        Trees: ${stats.totalTrees} | Unique Types: ${stats.uniqueFlyweights} | Memory Saved: ${stats.memorySaved.toFixed(2)}%
    `;
});
