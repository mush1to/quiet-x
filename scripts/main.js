(function() {
  const featureKeys = [
    'hideLeftSidebarText',
    'hideRightSidebarSearchBar',
    'hideRightSidebarPremium',
    'hideRightSidebarNews',
    'hideRightSidebarTrends',
    'hideRightSidebarWhoToFollow',
    'hideRightSidebarFooter',
    'hideTimelineTweetInput',
    'hideTimelineGrok',
    'hideOverlayDMDrawer',
    'hideOverlayGrokDrawer',
    // Icons
    'icon_logo',
    'icon_home',
    'icon_explore',
    'icon_notifications',
    'icon_messages',
    'icon_grok',
    'icon_bookmarks',
    'icon_creatorsStudio',
    'icon_communities',
    'icon_premium',
    'icon_profile',
    'icon_more',
    'icon_tweetButton',
    'icon_accountSwitcher'
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
