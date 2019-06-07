//functionality to add auto scrolling to vows

var autoscroll = setInterval(function(){
    vows.scrollTop += 1;
},100)

$(function () {
    var main = $('#image');
    var backgrounds = [
      'url(images/wedding.jpg)',
      'url(images/honeymoon.jpg)',
      'url(images/maverick_wife.jpg)',
      'url(images/sleeping_maverick.jpg)'
    ];
    var current = 0;

    function nextBackground() {
      main.fadeTo('slow', 0.8, function () {
        main.css(
          'background-image',
          backgrounds[current = ++current]
        );
      }).fadeTo('slow', 1);
      console.log(current);
      if(current < 2){
        setTimeout(nextBackground, 5000);
      }
    }
    setTimeout(nextBackground, 5000);
    main.css('background-image', backgrounds[0]);
  });