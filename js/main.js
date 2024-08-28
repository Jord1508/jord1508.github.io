
function Contador(selector){
    $(selector).each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 900,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });  
    });
}

$(document).ready(function(){
  let boxContainerViews = document.getElementById('boxNumberOfViews').offsetHeight;
  let heightScreen = window.innerHeight;
  heightScreen = (heightScreen - heightScreen) + (boxContainerViews / 2 )

  window.onscroll = () => {
      let windowScrollAction = window.pageYOffset;
      if(heightScreen < windowScrollAction){
          Contador(document.getElementById('valNumbOfViews'));
      }
  }

  $(".CarouselAmericanBullies").owlCarousel({
    responsive : {
      0:{
        items: 1
      },
      576:{
        items: 2
      },
      768:{
        items: 3
      }
    },
    margin: 15,
    nav: true,
    dots : false
  });
  $(".CarouselFutureProducts").owlCarousel({
    responsive : {
      0:{
        items: 1
      },
      576:{
        items: 2
      },
      768:{
        items: 3
      }
    },
    margin: 15,
    nav: true,
    dots : false
  })

});