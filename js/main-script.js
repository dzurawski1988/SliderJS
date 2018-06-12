$(document).ready(function(){
    $('.menu-content > a').mouseover(function(){
        $(this).css({
    'border-bottom: 4px solid': '#50e590',
    'color' : '#50e590',
    'transition': '0.2s ease-in-out',
    'border-bottom-right-radius': '10px',
    'border-style': 'inset',
    'padding': '30px;',
        });
    });
    $('.menu-content > a').mouseleave(function(){
        $(this).css({
            'color': '#25252c',
    'padding': '20px',
    'font-size': '22px',
    'font-weight': '900',
    'text-decoration': 'none',
    'text-transform': 'uppercase', 
'border': 'none' });
    });



});

$(window).scroll(function () { 
    $('.skill-block').each(function () { 
         var pos = $(this).offset().top;
         var winTop = $(window).scrollTop();
         if (pos < winTop + 600) {
             $(this).addClass('animation-wwd');
             console.log('Animacja działa!')
         }
    });
});

$(document).ready(function () {
    i = 0;



   setInterval(function(){
             if (i <= 36 )  {
                $('.counter1').text(i);
                i++
            }
        });
   
    
   
   setInterval(function(){
    if (i <= 136 ){
        $('.counter2').text(i);
        i++
    }
   })  

   setInterval(function(){
    if (i <= 76 ){
        $('.counter3').text(i);
        i++
    }
   })  


   setInterval(function(){
    if (i <= 44 ){
        $('.counter4').text(i);
        i++
    }
   })  
});

        var slideIndex = 1;
        showSlides(slideIndex);
        
        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("slider");
        //   var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none"; 
          }
          slides[slideIndex-1].style.display = "block"; 
        //   console.log(showSlides)
        //   setTimeout(showSlides, 2000 )
        }


        var slideIndex = 0;
        sliderInterval();


        
        
        function sliderInterval(){
        var i;
        var slides = document.getElementsByClassName('slider')
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block"; 
        setInterval(sliderInterval, 3000)
        }
       
        
        
     




        




   













