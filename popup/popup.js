document.addEventListener('DOMContentLoaded', () => {
  // Apply i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const message = chrome.i18n.getMessage(key);
    if (message) {
      el.textContent = message;
    }
  });

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
    'icon_logo',
    'icon_home',
    'icon_explore',
    'icon_notifications',
    'icon_messages',
    'icon_grok',
    'icon_lists',
    'icon_bookmarks',
    'icon_communities',
    'icon_premium',
    'icon_profile',
    'icon_more',
    'icon_tweetButton',
    'icon_accountSwitcher'
  ];

  // Feature Settings Handling
  chrome.storage.local.get(featureKeys, (result) => {
    featureKeys.forEach(key => {
      const checkbox = document.getElementById(key);
      if (checkbox) {
        checkbox.checked = result[key] || false;
      }
    });
  });

  featureKeys.forEach(key => {
    const checkbox = document.getElementById(key);
    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        const value = e.target.checked;
        chrome.storage.local.set({ [key]: value });
      });
    }
  });
});
