window.addEventListener('scroll', function() {
    var button = document.getElementById('topPage');
    if (window.scrollY >= 600) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });



// Get all .item elements
var items = document.querySelectorAll('.item');

// Add a click event listener to each .item
items.forEach(function(item) {
  item.addEventListener('click', function(e) {
    // Remove the 'active' class from all .item elements
    items.forEach(function(el) {
      el.classList.remove('active');
    });

    // Add the 'active' class to the clicked .item
    this.classList.add('active');
  });
});


// Make sections appear 
// From menu 

let menuItems = document.querySelectorAll("#menu .item");
let sections = document.querySelectorAll(".dimension_section");
let selectors = document.querySelectorAll(".dimensions_selectDimension .select");

menuItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        // Hide menu
        document.querySelector("#menu").style.display = "none";

        // Hide all sections
        sections.forEach(section => {
            section.style.display = "none";
            section.classList.remove("sectionAppear");
        });

        // Show corresponding section and selector
        sections[index].style.display = "flex";
        setTimeout(() => sections[index].classList.add("sectionAppear"), 50);
        
        document.querySelector(".dimensions_selectDimension").style.display = "flex";

        // Add selected class to the right selector
        selectors.forEach(selector => {
            selector.classList.remove("selected");
        });
        selectors[index].classList.add("selected");
    });
});


// From the select items at the bottom
selectors.forEach((select, index) => {
    select.addEventListener("click", function() {
        // Hide all sections
        sections.forEach(section => {
            section.style.display = "none";
            section.classList.remove("sectionAppear");
        });

        // Show corresponding section
        sections[index].style.display = "flex";
        setTimeout(() => sections[index].classList.add("sectionAppear"), 50);

        // Add selected class to the right selector
        selectors.forEach(selector => {
            selector.classList.remove("selected");
        });
        select.classList.add("selected");
    });
});


// mobile and tablette maintenance

function checkViewportWidth() {
  // Get the width of the viewport
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Get the element with id "sry"
  var element = document.getElementById('sry');

  // Check if the viewport width is smaller than 768 pixels
  if (viewportWidth < 968) {
    // Set the display property to "flex"
    element.style.display = 'flex';
  } else {
    // Set the display property to its default value (you can change it to 'block' if needed)
    element.style.display = 'none';
  }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', checkViewportWidth);
window.addEventListener('resize', checkViewportWidth);


function toggleMutedClass() {
  var divElement = document.querySelector('.mute_container');
  var videoElement = document.getElementById('videoPlayer');

  // Toggle the "muted" class on the div
  divElement.classList.toggle('muted');

  // Check if the div has the "muted" class
  if (divElement.classList.contains('muted')) {
    // If the div has the "muted" class, mute the video
    videoElement.muted = true;
  } else {
    // If the div does not have the "muted" class, unmute the video
    videoElement.muted = false;
  }
}


// Home nav mobile 
function navAppear() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.add('menuAppear');
}

function navDisappear() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('menuAppear');
}


// Fixing pb with the slideshow 

window.onload = function() {
  setTimeout(function() {
    document.getElementById('videoPlayer').play();
  }, 4000);
  
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





