(function() {
  const featureId = 'hideGrokDrawer';
  
  /*
   * Hide only the Grok Drawer/Button at the bottom right.
   * Avoid hiding inline Grok buttons in tweets or composer.
   */
  
  const css = `
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

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
    }
  };
})();
