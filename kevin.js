$(document).ready(function(){

      $( 'div.relative' ).show(800, function(){
             $( 'div.fix' ).slideDown(800);
            $( 'div.aboutme' ).slideDown(800);
      });
   



});


$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator1 =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 900;
        
            //interval between items (in milliseconds)
            var itemInterval = 5200;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2600;
            
            //count number of items
            var numberOfItems = $('.rotating-item').length;
        
            //set current item
            var currentItem = 0;
          
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
            $('h2').eq(currentItem).fadeIn(initialFadeIn);
            
           
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
                $('h2').eq(currentItem).fadeOut(fadeTime);
               
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
              
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
                $('h2').eq(currentItem).fadeIn(fadeTime);
           
            }, itemInterval);
        }
    };

     InfiniteRotator1.init();
      
 
});

$(window).load(function(){
    $(".slide").animate({
        left: "+=700px",
        fontSize: "130px",
    }, 3000, function(){

        $(".disappear").show(2000);
        $(this).css("color","rgb(0,0,51)");
    });


 

});

