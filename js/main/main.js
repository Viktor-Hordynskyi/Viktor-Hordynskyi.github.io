//IE10 Viewport hack
(function() {
  'use strict'
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.head.appendChild(msViewportStyle)
  }
}());

//Outdated Browsers
$(function() {
  outdatedBrowser({
    bgColor: '#f25648',
    color: '#ffffff',
    lowerThan: 'transform' //IE10
  });
});

//Select Picker
$(function() {
  $('.selectpicker').selectpicker();
});

//Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

//Nav toggle button
$(function() {
  $('#navbar-toggler').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#navbar-collapse').slideToggle(300);
  });
});

//Nav Active
$(function() {
  var $pageID = $('.hl_wrapper--inner').attr('id');
  $('#nav-links').find('#nav-'+$pageID).addClass('active').siblings('li').removeClass('active');
});


//Recent Activities
$(function () {
  $('#recent_activities-toggle').on('click', function(e) {
    e.preventDefault();
    $('.hl_recent-activities').toggleClass('--open');
  });
});


//Reviews Filter
$(function () {
  $('#hl_reviews--filter-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('--open');
    if ($(this).hasClass('--open')) {
      $(this).find('.icon').removeClass('icon-settings-2').addClass('icon-close');
    } else {
      $(this).find('.icon').removeClass('icon-close').addClass('icon-settings-2');
    }
    $('#hl_reviews--filter-group').toggleClass('--open');
    $('#hl_reviews--filter').toggleClass('--open');
  });
});


//RWD Table
$(function() {
  $(".table-wrap").each(function() {
    var nmtTable = $(this);
    var nmtHeadRow = nmtTable.find("thead tr");
    nmtTable.find("tbody tr").each(function() {
      var curRow = $(this);
      for (var i = 0; i < curRow.find("td").length; i++) {
        var rowSelector = "td:eq(" + i + ")";
        var headSelector = "th:eq(" + i + ")";
        curRow.find(rowSelector).attr('data-title', nmtHeadRow.find(headSelector).text());
      }
    });
  });
});

//Table Sorting
$(function() {
  $(".table-sort").stupidtable();
});

//Sentiment Graph
$(function() {
  var $positiveReview = $('#sentiment_positive-review').find('.percentage');
  var $positiveReviewData = $('#sentiment_positive-review').find('.percentage').data('percentage');
  var $negativeReview = $('#sentiment_negative-review').find('.percentage');
  var $negativeReviewData = $('#sentiment_negative-review').find('.percentage').data('percentage');
  function getHeight(percentage) {
    return (100 - percentage);
  }
  $positiveReview.css('height', getHeight($positiveReviewData) + '%');
  $negativeReview.css('height', getHeight($negativeReviewData) + '%');
});

//Semi-Circle Progress
$(function() {
  $(".semi-progress").each(function(){
    var $bar = $(this).find(".bar");
    var $val = $(this).data('progress');
    var perc = parseInt( $val, 10);
    $({p:0}).animate({p:perc}, {
      duration: 0,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)"
        });
      }
    });
  });
});

//Reviews Comment Collapse
$(function() {
  $('.respond-toggle').on('click', function() {
    $(this).toggleClass('active');
    $(this).closest('.hl_reviews--item').toggleClass('comment-active');
  });
});

//Object fit images
$(function () {
  objectFitImages();
});

//
$(function () {
  if ($('.hl_wrapper--inner').is("#settings")) {
    $('.hl_header').addClass('--no-shadow');
    $('.hl_recent-activities').addClass('--settings');
  }
});

//
$(function () {
  $('.hl_settings--sms-color .option label').on('click', function() {
    var $this = $(this);
    var $input = $this.siblings('input');
    if ($input.is(':checked')) {
      $this.closest('.box').removeClass('active');
    } else {
      $this.closest('.box').addClass('active');
    }
  });
});