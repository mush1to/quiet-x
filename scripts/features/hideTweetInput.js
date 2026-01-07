(function() {
  const featureId = 'hideTweetInput';
  
  // Targeting the compose box at the top of the timeline
  // We want to avoid hiding the reply modal or the reply box in tweet details.
  
  const css = `
    /* Hiding the container that has the tweet input ONLY in the primary column timeline */
    /* Structure: primaryColumn > (scroll wrapper) > (header + input + timeline) */
    [data-testid="primaryColumn"] > div > div > div > div:has([data-testid="tweetTextarea_0"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
    }
  };
})();
