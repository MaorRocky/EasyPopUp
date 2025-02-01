(function () {
  // Function to create and display the popup
  function createPopup(config) {
    console.log('✅ createPopup() is running with config:', config); // Debug log
    if (!config) {
      console.error('❌ No config provided!');
      return;
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = 9998;
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    // Create popup container
    const popup = document.createElement('div');
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.maxWidth = '500px';
    popup.style.width = '100%';
    popup.style.position = 'relative';
    popup.style.zIndex = 9999;

    // Create icon
    if (config.icon) {
      const icon = document.createElement('img');
      icon.src = config.icon;
      icon.alt = 'Popup Icon';
      icon.style.width = '50px';
      icon.style.height = '50px';
      icon.style.display = 'block';
      icon.style.margin = '0 auto 10px';
      popup.appendChild(icon);
    }

    // Create title
    const title = document.createElement('h2');
    title.innerText = config.title || 'Default Title';
    title.style.margin = '0 0 10px';
    title.style.textAlign = 'center';
    popup.appendChild(title);

    // Create body
    const body = document.createElement('p');
    body.innerText = config.body || 'Default body content.';
    body.style.margin = '0 0 20px';
    body.style.textAlign = 'center';
    popup.appendChild(body);

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      document.body.removeChild(overlay);
    };
    popup.appendChild(closeButton);

    // Append popup to overlay
    overlay.appendChild(popup);

    // Append overlay to body
    document.body.appendChild(overlay);

    console.log('✅ Popup should now be visible in the DOM');
  }

  // Expose the init function globally
  window.PopupSDK = {
    init: function (config) {
      console.log('✅ PopupSDK.init() called'); // Debug log
      if (!config) {
        console.error('❌ PopupSDK.init() called without config!');
        return;
      }

      createPopup(config);
    },
  };
})();
