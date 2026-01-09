(function() {
  /*
   * Feature: hideTweetInput
   * Hide the compose box at the top of the timeline.
   */
  const inputFeatureId = 'hideTweetInput';
  const inputCss = `
    /* Hiding the container that has the tweet input ONLY in the primary column timeline */
    /* Structure: primaryColumn > (scroll wrapper) > (header + input + timeline) */
    [data-testid="primaryColumn"] > div > div > div > div:has([data-testid="tweetTextarea_0"]) {
      display: none !important;
    }
  `;

  window.QuietX.features[inputFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(inputFeatureId, inputCss, active);
    }
  };

  /*
   * Feature: hideTimelineGrok
   * Hide Grok-related UI elements in timeline posts.
   */
  const grokFeatureId = 'hideTimelineGrok';
  const grokCss = `
    article div:has(> div:nth-child(2) button[data-testid="caret"]) > div:nth-child(1):has(button[type="button"] svg[viewBox="0 0 33 32"]),
    article div:has(> div:nth-child(2) button[data-testid="caret"]) > div:nth-child(1):has(button[type="button"] svg[viewBox="0 0 32 32"]),
    article div:has(> div:nth-child(2) button[data-testid="caret"]) > div:nth-child(1) button[type="button"][aria-label*="Grok"] {
      display: none !important;
    }
  `;

  window.QuietX.features[grokFeatureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(grokFeatureId, grokCss, active);
    }
  };

})();
