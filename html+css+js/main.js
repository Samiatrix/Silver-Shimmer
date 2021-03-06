

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$(document).ready(function(){
  $('#dropDown').click(function(){
    $('.drop-down').toggleClass('drop-down--active');
  });
});


window.addEventListener("DOMContentLoaded", function(e) {

  var stage = document.getElementById("firstgrid");
  var fadeComplete = function(e) { stage.appendChild(arr[0]); };
  var arr = stage.getElementsByTagName("img");
  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }

}, false);

// function([string1, string2],target id,[color1,color2])    
consoleText(['Explore our work', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

consoleText(['About Us'], 'text2',['tomato']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

$(".vid").ready(function(){
  var playersrc = $('iframe').attr('src');

      $('.vid').hover(function(){
           $(this).find('iframe').attr('src',playersrc+'&autoplay=1');
      }, function(){
          $(this).find('iframe').attr('src',playersrc);
      });
});

$('.owl-carousel').owlCarousel({
  stagePadding: 200,
  loop:true,
  margin:10,
  nav:false,
  items:1,
  lazyLoad: true,
  nav:true,
responsive:{
      0:{
          items:1,
          stagePadding: 60
      },
      600:{
          items:1,
          stagePadding: 100
      },
      1000:{
          items:1,
          stagePadding: 200
      },
      1200:{
          items:1,
          stagePadding: 250
      },
      1400:{
          items:1,
          stagePadding: 300
      },
      1600:{
          items:1,
          stagePadding: 350
      },
      1800:{
          items:1,
          stagePadding: 400
      }
  }
})

