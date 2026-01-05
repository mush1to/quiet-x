// Translation Dictionary
const translations = {
  ja: {
    header_settings: "設定",
    category_leftSidebar: "左サイドバー",
    category_navItems: "ナビゲーション項目の非表示",
    category_rightSidebar: "右サイドバー",
    category_timeline: "タイムライン",
    category_language: "言語",
    setting_hideLeftSidebarText: "テキストを非表示",
    note_reload_required: "※設定変更後はページの再読み込みが必要です",
    setting_hideRightSidebar: "トレンド・おすすめ等を非表示",
    setting_hideSearchBar: "検索窓を非表示",
    setting_hideTweetInput: "投稿欄を削除",
    nav_logo: "X ロゴ",
    nav_home: "ホーム",
    nav_explore: "話題を検索",
    nav_notifications: "通知",
    nav_messages: "メッセージ",
    nav_grok: "Grok",
    nav_lists: "リスト",
    nav_bookmarks: "ブックマーク",
    nav_communities: "コミュニティ",
    nav_premium: "プレミアム",
    nav_profile: "プロフィール",
    nav_more: "もっと見る",
    nav_tweetButton: "ポストするボタン",
    nav_accountSwitcher: "アカウント切り替え",
    footer_donate: "寄付 (Streamlabs)",
    footer_github: "GitHub (ソースコード)"
  },
  en: {
    header_settings: "Settings",
    category_leftSidebar: "Left Sidebar",
    category_navItems: "Hide Navigation Items",
    category_rightSidebar: "Right Sidebar",
    category_timeline: "Timeline",
    category_language: "Language",
    setting_hideLeftSidebarText: "Hide Text",
    note_reload_required: "*Reload required after changing",
    setting_hideRightSidebar: "Hide Trends & Suggestions",
    setting_hideSearchBar: "Hide Search Bar",
    setting_hideTweetInput: "Remove Tweet Input",
    nav_logo: "X Logo",
    nav_home: "Home",
    nav_explore: "Explore",
    nav_notifications: "Notifications",
    nav_messages: "Messages",
    nav_grok: "Grok",
    nav_lists: "Lists",
    nav_bookmarks: "Bookmarks",
    nav_communities: "Communities",
    nav_premium: "Premium",
    nav_profile: "Profile",
    nav_more: "More",
    nav_tweetButton: "Post Button",
    nav_accountSwitcher: "Account Switcher",
    footer_donate: "Donate (Streamlabs)",
    footer_github: "GitHub (Source)"
  }
};

document.addEventListener('DOMContentLoaded', () => {
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

  // Language Handling
  const langSelect = document.getElementById('ui_language');

  function getTargetLang(setting) {
    if (setting === 'system' || !setting) {
      const uiLang = chrome.i18n.getUILanguage();
      return uiLang.startsWith('ja') ? 'ja' : 'en';
    }
    return setting; // 'ja' or 'en'
  }

  function updateUIText(langSetting) {
    const targetLang = getTargetLang(langSetting);
    const t = translations[targetLang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });
  }

  // Load language setting
  chrome.storage.local.get('ui_language', (result) => {
    const currentSetting = result.ui_language || 'system';
    langSelect.value = currentSetting;
    updateUIText(currentSetting);
  });

  // Language change listener
  langSelect.addEventListener('change', (e) => {
    const newSetting = e.target.value;
    chrome.storage.local.set({ 'ui_language': newSetting });
    updateUIText(newSetting);
  });


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
