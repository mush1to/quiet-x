(function() {
  const featureKeys = [
    'hideLeftSidebarText',
    'hideSearchBar',
    'hideRightSidebar',
    'hideTweetInput',
    'hideTimelineGrok',
    'hideDMDrawer',
    'hideGrokDrawer',
    // Nav items
    'nav_logo',
    'nav_home',
    'nav_explore',
    'nav_notifications',
    'nav_messages',
    'nav_grok',
    'nav_lists',
    'nav_bookmarks',
    'nav_communities',
    'nav_premium',
    'nav_profile',
    'nav_more',
    'nav_tweetButton',
    'nav_accountSwitcher'
  ];

  function applySettings(settings) {
    featureKeys.forEach(key => {
      const active = settings[key] || false;
      if (window.QuietX.features[key]) {
        window.QuietX.features[key].apply(active);
      }
    });
  }

  // Initial load
  chrome.storage.local.get(featureKeys, (settings) => {
    applySettings(settings);
  });

  // Listen for changes
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
      // Re-fetch all settings to ensure consistency
      chrome.storage.local.get(featureKeys, (settings) => {
        applySettings(settings);
      });
    }
  });
})();
