(function() {
  const featureId = 'hideTweetInput';
  
  // Targeting the compose box at the top of the timeline
  // [data-testid="tweetTextarea_0"] is the input.
  // We want to hide its container.
  
  const css = `
    /* Hiding the container that has the tweet input */
    [data-testid="primaryColumn"] > div > div:not([data-testid]) > div:has([data-testid="tweetTextarea_0"]) {
      display: none !important;
    }
    
    /* Fallback/Alternative if the above structure changes */
    /* Often the compose box is in a div with border-bottom */
    div:has(> div > div > div > [data-testid="tweetTextarea_0"]) {
       display: none !important;
    }
  `;

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
    }
  };
})();
