(function() {
  {
    /*
     * Feature: hideTimelineTweetInput
     * Hide the compose box at the top of the timeline.
     */
    const featureId = 'hideTimelineTweetInput';
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
  }

  {
    /*
     * Feature: hideTimelineGrok
     * Hide Grok-related UI elements in timeline posts.
     */
    const featureId = 'hideTimelineGrok';
    const css = `
    article div:has(> div:nth-child(2) button[data-testid="caret"]) > div:nth-child(1):has(button[type="button"] svg[viewBox="0 0 33 32"]),
    article div:has(> div:nth-child(2) button[data-testid="caret"]) > div:nth-child(1):has(button[type="button"] svg[viewBox="0 0 32 32"]),
    article div:has(> div:nth-child(2) button[data-testid="caret"]) > div:nth-child(1) button[type="button"][aria-label*="Grok"] {
      display: none !important;
    }
    `;

    window.QuietX.features[featureId] = {
      apply: (active) => {
        window.QuietX.utils.updateStyle(featureId, css, active);
      }
    };
  }

})();
