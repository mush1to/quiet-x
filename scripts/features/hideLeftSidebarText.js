(function() {
  const featureId = 'hideLeftSidebarText';
  
  // Provided SVG path for the post button
  const featherPath = "M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z";
  
  // Helper to update the main background color variable
  function updateMainBgColor() {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    document.documentElement.style.setProperty('--quiet-x-main-bg', bgColor);
  }

  // Initial update
  updateMainBgColor();

  // Observer to update color if theme changes
  const observer = new MutationObserver(() => {
    updateMainBgColor();
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });


  const css = `
    /* 
       Refined Strategy: 
       1. Do NOT constrain the width of the header.
       2. Hide text containers specifically.
       3. REPURPOSE the text span in the Tweet button to become the icon.
    */
    
    /* --- 1. Navigation Items --- */
    /* Hide text container */
    header[role="banner"] nav[role="navigation"] a[role="link"] div[dir="ltr"]:not(:has(svg)) {
      display: none !important;
    }
    header[role="banner"] nav[role="navigation"] a[role="link"] > div > div > div:not(:first-child) {
       display: none !important;
    }
    
    /* Ensure icon container is visible */
    header[role="banner"] nav[role="navigation"] a[role="link"] div:has(svg) {
       display: flex !important;
       visibility: visible !important;
       opacity: 1 !important;
    }


    /* --- 2. "More" Menu --- */
    [data-testid="AppTabBar_More_Menu"] div[dir="ltr"]:not(:has(svg)) {
      display: none !important;
    }
    [data-testid="AppTabBar_More_Menu"] div:has(svg) {
       display: flex !important;
    }


    /* --- 3. Account Switcher --- */
    [data-testid="SideNav_AccountSwitcher_Button"] > div:not(:first-child) {
      display: none !important;
    }


    /* --- 4. Tweet Button Styling --- */
    [data-testid="SideNav_NewTweet_Button"],
    a[href="/compose/post"] {
      width: 50px !important;
      height: 50px !important;
      min-width: 50px !important;
      border-radius: 50% !important;
      padding: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin-left: auto !important; 
      margin-right: 0 !important;
      position: relative !important; 
    }

    /* 
       TRANSFORM THE TEXT SPAN INTO THE ICON 
       Instead of hiding the span, we make it the container for our icon.
    */
    [data-testid="SideNav_NewTweet_Button"] span,
    a[href="/compose/post"] span {
      display: block !important; /* Force display */
      font-size: 0 !important;   /* Hide text content */
      width: 24px !important;    /* Fixed size for icon */
      height: 24px !important;
      min-width: 24px !important;
      margin: 0 !important;
      padding: 0 !important;
      position: absolute !important; /* Center it */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Apply the icon to the span's ::after */
    [data-testid="SideNav_NewTweet_Button"] span::after,
    a[href="/compose/post"] span::after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      
      background-color: var(--quiet-x-main-bg, white) !important; 
      
      -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${featherPath}"/></svg>') no-repeat center;
      mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${featherPath}"/></svg>') no-repeat center;
    }
    
    /* 
       Hide other non-icon containers just in case, 
       BUT ensure the parent of the span is visible.
    */
    [data-testid="SideNav_NewTweet_Button"] div:has(> span),
    a[href="/compose/post"] div:has(> span) {
       display: flex !important;
       width: 100% !important;
       height: 100% !important;
       align-items: center !important;
       justify-content: center !important;
    }

    /* Hide the original SVG icon if it exists (we use the span now) */
    [data-testid="SideNav_NewTweet_Button"] svg,
    a[href="/compose/post"] svg {
      display: none !important;
    }


    /* --- 5. Sidebar Layout Adjustment --- */
    header[role="banner"] nav[role="navigation"] {
      align-items: flex-end !important;
    }
    
    header[role="banner"] nav[role="navigation"] a {
      width: auto !important; 
    }
    
    header[role="banner"] h1[role="heading"] {
      display: flex !important;
      justify-content: flex-end !important;
      align-items: center !important;
    }
    
    header[role="banner"] h1[role="heading"] a {
       margin-right: 0 !important;
       margin-left: auto !important;
    }
    
    header[role="banner"] > div > div > div {
       align-items: flex-end !important;
    }
    
    [data-testid="SideNav_AccountSwitcher_Button"] {
       margin-left: auto !important;
       margin-right: 0 !important;
       width: auto !important;
    }

  `;

  window.QuietX.features[featureId] = {
    apply: (active) => {
      window.QuietX.utils.updateStyle(featureId, css, active);
      if (active) {
          updateMainBgColor();
      }
    }
  };
})();
