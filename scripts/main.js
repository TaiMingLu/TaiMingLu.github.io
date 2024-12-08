import { initializeThemeController, setupThemeController } from './theme-controller.js';
// If you load favicon-controller.js and paper-split-controller.js via script tags in HTML, no need to import here.
// If you prefer to load them as modules, you could do:
// import './favicon-controller.js';
// import './paper-split-controller.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeThemeController();
    setupThemeController();
});
