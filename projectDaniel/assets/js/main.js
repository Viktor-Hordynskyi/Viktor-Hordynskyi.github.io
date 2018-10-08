"use strict";

(function() {

  // method to handle loading css and js files
  let loadFile = function(file, type = 'js') {
    return new Promise(function(resolve, reject) {
      let l;
      switch (type) {
        case 'js':
          l = document.createElement('script')
          l.src = file;
          l.type = 'text/javascript';
          document.body.appendChild(l);
          break;
        case 'css':
          l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = file;
          document.head.appendChild(l);
          break;
      }

      // wait for the file to finish loading
      l.addEventListener('load', function() {
        resolve();
      });
    });
  };

  // Remove the # from the hash, as different browsers may or may not include it
  var hash = location.hash.replace('#', '');
  if (hash != '') {
    location.hash = '';
  }

  // Lazy-load plugins JS file
  loadFile('./assets/js/plugins.min.js').then(() => {

    // Lazy-load images/videos
    new LazyLoad({
      elements_selector: ".lazy",
      callback_set: function() {
        AOS.refresh();
      }
    });

    // Sections animation
    AOS.init({
      anchorPlacement: "top-bottom"
    });

    /*
     *  College slider
     */
    let $window = $(window),
      flexslider = {
        vars: {}
      };

    // tiny helper function to add breakpoints
    function getGridSize() {
      return (window.innerWidth < 600) ? 2 :
        (window.innerWidth < 900) ? 4 : 6;
    }

    // Initiate the slider plugin
    $('.flexslider').flexslider({
      animation: "slide",
      direction: "horizontal",
      controlNav: false,
      animationLoop: true,
      slideshow: false,
      itemWidth: 200,
      itemMargin: 0,
      minItems: getGridSize(),
      maxItems: getGridSize()
    });

    // Check grid size on resize event
    $window.resize(function() {
      let gridSize = getGridSize();
      flexslider.vars.minItems = gridSize;
      flexslider.vars.maxItems = gridSize;
    });
    // End of college slider

  });

  /*
   * First section video
   */
  let video = document.getElementById('video'),
    $videoModal = $('#fullScreenVideo'),
    $modalDialog = $videoModal.find('.modal-dialog');

  // re-play video on closing the modal
  $videoModal.on('hidden.bs.modal', function() {
    video.play();
  })

  // Show video modal on click
  video.addEventListener('click', function() {
    video.pause();
    $videoModal.modal('show');
  });
  // End of video section

  // Open solar panels iframe modal
  let $solarModal = $('#solarModal');
  document.getElementById('solar').addEventListener('click', function() {
    $solarModal.modal('show');
  });

  /*
   * Academics section cards description
   */
  let academics = document.getElementById("academics"),
    cards = academics.querySelectorAll('.box');

  // Add event listener to each card
  cards.forEach((card) => {

    // add class `active` on letter click
    card.addEventListener('click', () => {card.classList.toggle('active')});

  });

})();


