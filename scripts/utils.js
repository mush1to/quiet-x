window.QuietX = window.QuietX || {};
window.QuietX.features = window.QuietX.features || {};

window.QuietX.utils = {
  // id: unique identifier for the style tag
  // css: css string
  // active: boolean
  updateStyle: (id, css, active) => {
    const styleId = `quiet-x-style-${id}`;
    let styleEl = document.getElementById(styleId);
    
    if (active) {
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }
      // Always update content to ensure latest CSS is applied
      // Removing the check (styleEl.textContent !== css) to force update if needed,
      // though browser optimizes this anyway. 
      // The main issue might be that if the element exists, we just update it.
      styleEl.textContent = css;
    } else {
      if (styleEl) {
        styleEl.remove();
      }
    }
  }
};
