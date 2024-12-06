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
    // setTheme(initialPreference);
    setTheme('light');

    // Save the system preference in case the user toggles themes
    localStorage.setItem('systemTheme', initialPreference);
}

// This function is defined but not used yet
function setupThemeController() {
    const controllerButton = document.getElementById('theme-controller');

    // Future functionality: Uncomment this when the button is added
    // if (controllerButton) {
    //   controllerButton.addEventListener('click', () => {
    //     const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    //     // Apply the new theme (user override)
    //     setTheme(newTheme);

    //     // Save the new theme preference for the session
    //     localStorage.setItem('sessionTheme', newTheme);
    //   });
    // } else {
    //   console.warn('Theme controller button not found. Skipping event listener setup.');
    // }
}

// Initialize the theme controller on page load
initializeThemeController();

// Call this function only when the button is added in the future
// setupThemeController();
