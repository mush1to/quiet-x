(function() {
  {
    /*
     * Feature: hideRightSidebarSearchBar
     * Hide the search bar in the right sidebar.
     */
    const featureId = 'hideRightSidebarSearchBar';

    const css = `
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

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }

  {
    /*
     * Feature: hideRightSidebarPremium
     * Hide the Premium sign-up module in the right sidebar.
     */
    const featureId = 'hideRightSidebarPremium';
    const css = `
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:has(a[href^="/i/premium_sign_up"]) {
      display: none !important;
    }

    [data-testid="sidebarColumn"] aside[role="complementary"]:has(a[href^="/i/premium_sign_up"]) {
      display: none !important;
    }
    `;

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }

  {
    /*
     * Feature: hideRightSidebarNews
     * Hide the News module in the right sidebar.
     */
    const featureId = 'hideRightSidebarNews';
    const css = `
    [data-testid="sidebarColumn"] [data-testid="news_sidebar"] {
      display: none !important;
    }

    [data-testid="sidebarColumn"] div:has(> [data-testid="news_sidebar"]) {
      display: none !important;
      height: 0 !important;
      min-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    `;

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }

  {
    /*
     * Feature: hideRightSidebarTrends
     * Hide the Trends module in the right sidebar.
     */
    const featureId = 'hideRightSidebarTrends';
    const css = `
    [data-testid="sidebarColumn"] div:has(> section[role="region"]),
    [data-testid="sidebarColumn"] section[role="region"] {
      display: none !important;
    }
    `;

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }

  {
    /*
     * Feature: hideRightSidebarWhoToFollow
     * Hide the Who to follow module in the right sidebar.
     */
    const featureId = 'hideRightSidebarWhoToFollow';
    const css = `
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:has(aside[role="complementary"] [data-testid="UserCell"]) {
      display: none !important;
    }

    [data-testid="sidebarColumn"] aside[role="complementary"]:has([data-testid="UserCell"]) {
      display: none !important;
    }
    `;

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }

  {
    /*
     * Feature: hideRightSidebarFooter
     * Hide the footer area in the right sidebar.
     */
    const featureId = 'hideRightSidebarFooter';
    const css = `
    nav:has(a[href*="/tos"], a[href*="/privacy"]) {
      display: none !important;
    }
    `;

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }


})();
