$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

    $(document).ready(function(){
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
            var slide_count = 0;
            var activeTab = $(e.target).text(); // Get the name of active tab
            var slide_images = ["multimedia/images/nachos.jpg","multimedia/images/menu_background.jpg","multimedia/images/beer.jpg", "multimedia/images/pancakes.jpg"];
            switch(activeTab) {
              case "Entrantes":
                slide_count = 0;
                break;
              case "Menú":
                slide_count = 1;
                break;
              case "Bebidas":
                slide_count = 2;
                break;
              case "Postres":
                slide_count = 3;
                break;
              default:
                alert("No deberías poder ver esto jaja");
            }
            $('.wrapper_pill').css('background-image', 'linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(\''+slide_images[slide_count]+'\')');
            var previousTab = $(e.relatedTarget).text(); // Get the name of previous tab
            $(".active-tab span").html(activeTab);
            $(".previous-tab span").html(previousTab);
        });
    });
