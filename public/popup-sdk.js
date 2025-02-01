(function () {
  function createToast(config) {
    console.log('✅ createToast() is running with config:', config);

    // Determine the position (default: "bottom-right")
    const position = config.position || 'bottom-right';

    // Ensure container exists
    let toastContainer = document.getElementById('toast-container-' + position);
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container-' + position;
      toastContainer.style.position = 'fixed';
      toastContainer.style.width = '320px';
      toastContainer.style.display = 'flex';
      toastContainer.style.flexDirection = 'column';
      toastContainer.style.gap = '10px';
      toastContainer.style.zIndex = '10000';

      // Apply position styles
      if (position.includes('top')) {
        toastContainer.style.top = '20px';
      } else {
        toastContainer.style.bottom = '20px';
      }
      if (position.includes('right')) {
        toastContainer.style.right = '20px';
      } else {
        toastContainer.style.left = '20px';
      }

      document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.justifyContent = 'space-between';
    toast.style.backgroundColor = '#fff';
    toast.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.1)';
    toast.style.borderRadius = '12px';
    toast.style.padding = '12px';
    toast.style.gap = '10px';
    toast.style.fontFamily = 'Arial, sans-serif';
    toast.style.animation = 'fadeIn 0.5s ease-in-out';
    toast.style.position = 'relative';

    // Icon
    if (config.icon) {
      const icon = document.createElement('img');
      icon.src = config.icon;
      icon.style.width = '32px';
      icon.style.height = '32px';
      icon.style.borderRadius = '50%';
      toast.appendChild(icon);
    }

    // Content container
    const content = document.createElement('div');
    content.style.flex = '1';

    // Title
    const title = document.createElement('strong');
    title.innerText = config.title || 'Notification';
    content.appendChild(title);

    // Body
    const body = document.createElement('p');
    body.innerText = config.body || 'This is a toast notification.';
    body.style.margin = '4px 0 0';
    body.style.fontSize = '12px';
    body.style.color = '#555';
    content.appendChild(body);

    toast.appendChild(content);

    // Close button
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';
    closeButton.onclick = () => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    };
    toast.appendChild(closeButton);

    // Append to container
    if (position.includes('top')) {
      toastContainer.prepend(toast); // Newest toast at the top
    } else {
      toastContainer.appendChild(toast); // Newest toast at the bottom
    }

    // Auto-dismiss
    if (config.duration) {
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
      }, config.duration);
    }
  }

  // Expose the init function globally
  window.PopupSDK = {
    init: function (config) {
      console.log('✅ PopupSDK.init() called');
      if (!config) {
        console.error('❌ PopupSDK.init() called without config!');
        return;
      }
      createToast(config);
    },
  };
})();
