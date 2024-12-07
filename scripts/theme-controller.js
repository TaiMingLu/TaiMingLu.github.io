function setTheme(preference) {
    const body = document.body;

    if (preference === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
}

function initializeThemeController() {
    // Always detect the system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialPreference = systemPrefersDark ? 'dark' : 'light';
    console.log(`Current theme detected: ${initialPreference}`); // Log the current theme for debugging

    // Apply the system theme on load
    const savedTheme = localStorage.getItem('sessionTheme') || initialPreference;
    // setTheme(savedTheme);
    setTheme('light');

    // Save the system preference in case the user toggles themes
    localStorage.setItem('systemTheme', initialPreference);
}

function setupThemeController() {
    const controllerButton = document.querySelector('.theme-toggle');

    if (controllerButton) {
        // Load SVG dynamically into the button
        loadSvgIntoButton('.theme-toggle', 'pics/bottons/theme-toggle.svg').then(() => {
            // Add event listener after SVG is loaded
            controllerButton.addEventListener('click', () => {
                const body = document.body;

                // Check current theme and toggle it
                const isDarkTheme = body.classList.contains('dark');
                const newTheme = isDarkTheme ? 'light' : 'dark';

                // Toggle the theme class on the body
                body.classList.toggle('dark', !isDarkTheme);

                // Add/remove toggled class for button animation
                controllerButton.classList.toggle('theme-toggle--toggled', !isDarkTheme);

                // Save the new theme preference in localStorage
                localStorage.setItem('sessionTheme', newTheme);
            });
        });
    } else {
        console.warn('Theme controller button not found. Skipping event listener setup.');
    }
}

function loadSvgIntoButton(buttonSelector, svgPath) {
    const button = document.querySelector(buttonSelector);

    return fetch(svgPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load SVG: ${response.statusText}`);
            }
            return response.text();
        })
        .then((svgContent) => {
            button.innerHTML = svgContent; // Embed SVG inline
        })
        .catch((err) => console.error('Error loading SVG:', err));
}

// Initialize the theme controller on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeController();
    setupThemeController();
});



// function setTheme(preference) {
//     const body = document.body;

//     if (preference === 'dark') {
//         body.classList.add('dark');
//         body.classList.remove('light');
//     } else {
//         body.classList.add('light');
//         body.classList.remove('dark');
//     }
// }

// function initializeThemeController() {
//     // Always detect the system preference
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialPreference = systemPrefersDark ? 'dark' : 'light';
//     console.log(`Current theme detected: ${initialPreference}`); // Log the current theme for debugging

//     // Apply the system theme on load
//     // setTheme(initialPreference);
//     setTheme('light');

//     // Save the system preference in case the user toggles themes
//     localStorage.setItem('systemTheme', initialPreference);
// }

// function setupThemeController() {
//     const controllerButton = document.querySelector('.theme-toggle');

//     if (controllerButton) {
//         controllerButton.addEventListener('click', () => {
//             const body = document.body;

//             // Check current theme and toggle it
//             const isDarkTheme = body.classList.contains('dark');
//             const newTheme = isDarkTheme ? 'light' : 'dark';

//             // Toggle the theme class on the body
//             body.classList.toggle('dark', !isDarkTheme);

//             // Add/remove toggled class for button animation
//             controllerButton.classList.toggle('theme-toggle--toggled', !isDarkTheme);

//             // Save the new theme preference in localStorage
//             localStorage.setItem('sessionTheme', newTheme);
//         });
//     } else {
//         console.warn('Theme controller button not found. Skipping event listener setup.');
//     }
// }


// // Initialize the theme controller on page load
// initializeThemeController();

// // Call this function only when the button is added in the future
// setupThemeController();


