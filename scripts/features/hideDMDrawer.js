(function() {
  const featureId = 'hideDMDrawer';
  
  /*
   * Hide the DM Drawer (Message Box) at the bottom right.
   * Based on user feedback, the top-level container has data-testid="chat-drawer-main".
   */
  
  const css = `
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

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
    }
  };
})();
