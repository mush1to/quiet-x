(function() {
  const featureId = 'hideSidebarItems';
  
  // Map of config keys to CSS selectors
  const itemSelectors = {
    // Top Logo: The link to /home inside the h1 header
    'nav_logo': 'h1[role="heading"] a[href="/home"]',
    
    // Home Nav Item: The link to /home inside the navigation role
    // Crucial: Use nav[role="navigation"] to distinguish from the logo
    'nav_home': 'nav[role="navigation"] a[href="/home"]',
    
    'nav_explore': 'a[href="/explore"]',
    'nav_notifications': 'a[href="/notifications"]',
    'nav_messages': 'a[href="/i/chat"], a[href^="/messages"]',
    'nav_grok': 'a[href="/i/grok"]',
    'nav_lists': 'a[href$="/lists"][role="link"]',
    'nav_bookmarks': 'a[href="/i/bookmarks"]',
    'nav_communities': 'a[href$="/communities"][role="link"]',
    'nav_premium': 'a[href="/i/premium_sign_up"], [data-testid="premium-signup-tab"]',
    'nav_profile': '[data-testid="AppTabBar_Profile_Link"]',
    'nav_more': '[data-testid="AppTabBar_More_Menu"]',
    'nav_tweetButton': '[data-testid="SideNav_NewTweet_Button"], a[href="/compose/post"]',
    'nav_accountSwitcher': '[data-testid="SideNav_AccountSwitcher_Button"]'
  };

  const items = Object.keys(itemSelectors);
  
  items.forEach(key => {
    const selector = itemSelectors[key];
    const css = `
      header[role="banner"] ${selector} {
        display: none !important;
      }
    `;
    
    window.QuietX.features[key] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(key, css, active);
      }
    };
  });

})();
