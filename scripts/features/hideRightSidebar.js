(function() {
  const featureId = 'hideRightSidebar';
  
  // Hide everything in sidebar column EXCEPT the search bar
  // Using :has() to identify the container with the search form and exclude it from hiding
  // Also targeting specific known sections like Trends and Who to follow
  
  const css = `
    /* General approach: Hide direct children of the main sidebar container that don't contain the search bar */
    /* This path is brittle, so we combine it with specific element hiding */
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:not(:has(form[role="search"])) {
      display: none !important;
    }
    
    /* Specific targeting for robustness */
    [data-testid="sidebarColumn"] section[role="region"],
    [data-testid="sidebarColumn"] aside[role="complementary"],
    [data-testid="sidebarColumn"] nav[aria-label="Footer"] {
      display: none !important;
    }
  `;

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
    }
  };
})();
