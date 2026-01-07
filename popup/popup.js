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
    'hideSearchBar',
    'hideRightSidebar',
    'hideTweetInput',
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
