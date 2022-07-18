$(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                nav:true,
                navContainer: '.owl-nav',
                navText: ["<img src='https://raw.githubusercontent.com/Ruben-Vardanyan/Carousel/main/arrL.png'>","<img src='https://raw.githubusercontent.com/Ruben-Vardanyan/Carousel/main/arrR.png'>"],
                rtl: false,
                loop:true,
                
              
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
               
                dots: true,
                dotsEach:true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        // nav:true
                    },
                    600:{
                        items:3,
                        
                       
                    },
                    1000:{
                        items:5,
                        // nav:true,
                        
                    }
                }
            });
        });