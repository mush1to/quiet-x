(function() {
  const featureId = 'hideSearchBar';
  
  const css = `
    /* Hide the search form */
    [data-testid="sidebarColumn"] form[role="search"] {
      display: none !important;
    }
    
    /* Hide the container that holds the search bar completely */
    /* Often X wraps the search bar in a fixed div or sticky div. */
    /* We try to hide the direct wrapper of the form to remove its height. */
    [data-testid="sidebarColumn"] div:has(> form[role="search"]) {
       display: none !important;
       height: 0 !important;
       min-height: 0 !important;
       margin: 0 !important;
       padding: 0 !important;
    }
    
    /* 
       If there is a parent container creating space (like the fixed header in sidebar), 
       we might need to hide that too if it ONLY contains the search bar.
       The structure is roughly: sidebarColumn > div > div > div > div > div (search container)
       Sometimes there is a spacer div.
    */
    
    /* Attempt to remove the top spacer if search is hidden */
    /* This is tricky without affecting other things, but usually the first child of sidebar is search */
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:first-child:has(form[role="search"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
    }
  };
})();
