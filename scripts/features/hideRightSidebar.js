(function() {
  /*
   * Feature: hideSearchBar
   * Hide the search bar in the right sidebar.
   */
  const searchBarFeatureId = 'hideSearchBar';

  const searchBarCss = `
    [data-testid="sidebarColumn"] form[role="search"] {
      display: none !important;
    }

    [data-testid="sidebarColumn"] div:has(> form[role="search"]) {
       display: none !important;
       height: 0 !important;
       min-height: 0 !important;
       margin: 0 !important;
       padding: 0 !important;
    }

    [data-testid="sidebarColumn"] > div > div > div > div > div > div:first-child:has(form[role="search"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[searchBarFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(searchBarFeatureId, searchBarCss, active);
    }
  };

  /*
   * Feature: hideRightSidebar
   * Hide right sidebar sections like Trends and Who to follow (while keeping the search bar unless disabled separately).
   */
  const rightSidebarFeatureId = 'hideRightSidebar';

  const rightSidebarCss = `
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:not(:has(form[role="search"])) {
      display: none !important;
    }

    [data-testid="sidebarColumn"] section[role="region"],
    [data-testid="sidebarColumn"] aside[role="complementary"],
    [data-testid="sidebarColumn"] nav[aria-label="Footer"] {
      display: none !important;
    }
  `;

  window.QuietX.features[rightSidebarFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(rightSidebarFeatureId, rightSidebarCss, active);
    }
  };
})();
