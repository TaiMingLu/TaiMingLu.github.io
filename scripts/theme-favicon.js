function setFaviconBasedOnTheme() {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const favicon = document.getElementById('favicon');
    if (favicon) { // Check if the favicon element exists
      favicon.href = theme === 'dark' ? './pics/avatar/favicon.ico' : './pics/avatar/favicon_light.ico';
    } else {
      console.error('Favicon link element not found');
    }
  }
  
  setFaviconBasedOnTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFaviconBasedOnTheme);
  