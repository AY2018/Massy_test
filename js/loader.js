window.onload = function() {
    // Check if the loader has already been shown
    if (sessionStorage.getItem('loaderShown') === null) {
        document.getElementById('loader').style.display = 'flex';
        // Wait for 3 seconds before hiding the loader
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 3000);
        // Mark the loader as shown
        sessionStorage.setItem('loaderShown', 'true');
    } else {
        // If loader has already been shown, hide it immediately
        document.getElementById('loader').style.display = 'none';
    }
  };