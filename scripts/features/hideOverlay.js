(function() {
  /*
   * Feature: hideDMDrawer
   * Hide the DM Drawer (Message Box) at the bottom right.
   */
  const dmFeatureId = 'hideDMDrawer';
  const dmCss = `
    /* Primary Target: The main drawer container provided by user */
    [data-testid="chat-drawer-main"],
    
    /* Secondary Target: Standard/Previous testid for the drawer */
    [data-testid="DMDrawer"],
    [data-testid="DMDrawerHeader"],
    
    /* Accessible Labels */
    div[role="complementary"][aria-label="Direct Messages"],
    div[role="complementary"][aria-label="Messages"],
    div[role="complementary"][aria-label="メッセージ"],
    
    /* Fallback: Structure-based hiding for the collapsed button state */
    /* Matches a div that contains the specific SVG icon within an absolute positioned wrapper */
    div:has(> div > div.absolute > svg[data-icon="icon-messages-stroke"]),
    
    /* Fallback: Catch-all for the fixed container if the above are nested inside it */
    div[style*="position: fixed"][style*="bottom:"][style*="right:"]:has([data-testid="chat-drawer-main"]),
    div[style*="position: fixed"][style*="bottom:"][style*="right:"]:has(svg[data-icon="icon-messages-stroke"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[dmFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(dmFeatureId, dmCss, active);
    }
  };

  /*
   * Feature: hideGrokDrawer
   * Hide only the Grok Drawer/Button at the bottom right.
   */
  const grokFeatureId = 'hideGrokDrawer';
  const grokCss = `
    /* 1. Explicit Grok Drawer ID */
    [data-testid="GrokDrawer"],
    
    /* 2. Grok Drawer by position and icon content (Strict Fallback) */
    /* Only targets fixed positioned elements at the bottom right containing the Grok icon */
    div[style*="position: fixed"][style*="bottom:"][style*="right:"]:has(svg path[d^="M12.745 20.54"]),
    
    /* 3. Handle the specific structure provided by user if it applies to Grok too (chat-drawer-main style) */
    /* If Grok uses the same drawer structure but with its own icon */
    [data-testid="chat-drawer-main"]:has(svg path[d^="M12.745 20.54"]),
    div[style*="position: fixed"][style*="bottom:"][style*="right:"]:has([data-testid="chat-drawer-main"] svg path[d^="M12.745 20.54"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[grokFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(grokFeatureId, grokCss, active);
    }
  };

})();
