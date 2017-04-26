/* jshint esversion: 6 */

$(function() {

  //Get current year and add to footer
  let dateToday = new Date();
  let currentYear = dateToday.getFullYear();
  $('#copyright-date').text(currentYear);

  //Scroll to top btn
  $('.scroll-to-top i').click(function(){
    $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
  });

  if($(window).scrollTop() > 1500 ) {
    $('.scroll-to-top').removeClass('slide-out').addClass('slide-in');
  } else {
    $('.scroll-to-top').removeClass('slide-in').addClass('slide-out');
  }

  function scrollToTop() {

    $(window).scroll(function() {
       if($(window).scrollTop() > 1500 ) {
         $('.scroll-to-top').removeClass('slide-out').addClass('slide-in');
       } else {
         $('.scroll-to-top').removeClass('slide-in').addClass('slide-out');
       }
     });
  }

  scrollToTop();

  $('.modal').modal();

 // Close side nav on tap for mobile but not wide screens
  let windowsize = $(window).width();
  let closeOnClickVal = false;
   if (windowsize < 992) {
     closeOnClickVal = true;
   }

  //Init side nav
  $(".button-collapse").sideNav({
    closeOnClick: closeOnClickVal,
    menuWidth: 300,
  });

  // Show sideNav
  $('.top-nav-links li').not('#top-nav-search').click(function () {
    let indexNum = $(this).attr('indexNum');
    $('.button-collapse').sideNav('show');
    $('.collapsible').collapsible('open', indexNum);
    $('#sidenav-overlay').click(function () {
      //collapse all side nav items
      $('.collapsible').collapsible('close', indexNum);
    });
  });

  $('.collapsible').collapsible();

// Top nav links array
 const linkArr = $('.top-nav-links li');
// Add index numbers as an attribute to top nav li's
 for (let i = 0; i < linkArr.length; i++) {
   $(linkArr[i]).attr('indexNum', i);
 }

 //Top nav search input
 $('nav .search-icon').click(function () {
   if($('#search-input').hasClass('open')) {
     // Do the search
     console.log('search');
   } else {
     $('#search-input').addClass('open');
     $('#search-input input').focus();

     //Close btn
     $('#search-input svg').click(function () {
       $('#search-input').removeClass();
     });
   }
 });


});
