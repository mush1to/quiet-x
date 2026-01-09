(function() {
  /*
   * Feature: hideRightSidebarSearchBar
   * Hide the search bar in the right sidebar.
   */
  const searchBarFeatureId = 'hideRightSidebarSearchBar';

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
   * Feature: hideRightSidebarPremium
   * Hide the Premium sign-up module in the right sidebar.
   */
  const rightSidebarPremiumFeatureId = 'hideRightSidebarPremium';
  const rightSidebarPremiumCss = `
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:has(a[href^="/i/premium_sign_up"]) {
      display: none !important;
    }

    [data-testid="sidebarColumn"] aside[role="complementary"]:has(a[href^="/i/premium_sign_up"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[rightSidebarPremiumFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(rightSidebarPremiumFeatureId, rightSidebarPremiumCss, active);
    }
  };

  /*
   * Feature: hideRightSidebarNews
   * Hide the News module in the right sidebar.
   */
  const rightSidebarNewsFeatureId = 'hideRightSidebarNews';
  const rightSidebarNewsCss = `
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

  window.QuietX.features[rightSidebarNewsFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(rightSidebarNewsFeatureId, rightSidebarNewsCss, active);
    }
  };

  /*
   * Feature: hideRightSidebarTrends
   * Hide the Trends module in the right sidebar.
   */
  const rightSidebarTrendsFeatureId = 'hideRightSidebarTrends';
  const rightSidebarTrendsCss = `
    [data-testid="sidebarColumn"] div:has(> section[role="region"]),
    [data-testid="sidebarColumn"] section[role="region"] {
      display: none !important;
    }
  `;

  window.QuietX.features[rightSidebarTrendsFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(rightSidebarTrendsFeatureId, rightSidebarTrendsCss, active);
    }
  };

  /*
   * Feature: hideRightSidebarWhoToFollow
   * Hide the Who to follow module in the right sidebar.
   */
  const rightSidebarWhoToFollowFeatureId = 'hideRightSidebarWhoToFollow';
  const rightSidebarWhoToFollowCss = `
    [data-testid="sidebarColumn"] > div > div > div > div > div > div:has(aside[role="complementary"] [data-testid="UserCell"]) {
      display: none !important;
    }

    [data-testid="sidebarColumn"] aside[role="complementary"]:has([data-testid="UserCell"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[rightSidebarWhoToFollowFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(rightSidebarWhoToFollowFeatureId, rightSidebarWhoToFollowCss, active);
    }
  };

  /*
   * Feature: hideRightSidebarFooter
   * Hide the footer area in the right sidebar.
   */
  const rightSidebarFooterFeatureId = 'hideRightSidebarFooter';
  const rightSidebarFooterCss = `
    nav:has(a[href*="/tos"], a[href*="/privacy"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[rightSidebarFooterFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(rightSidebarFooterFeatureId, rightSidebarFooterCss, active);
    }
  };


})();
