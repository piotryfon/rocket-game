$(document).ready(function() {

function moveRocket(){
    setInterval(function(){
        var positionOfRocket = $("#rocket").position();
      
        console.log(positionOfRocket);
        if(positionOfRocket.top < -450) {
            
            $('h1').text("Super! Doleciałeś na Księżyc !").toggle("slow");
            
        }
    },1000)

    $("#rocket").mouseover(function(){
        $("#rocket").stop().animate({'top': '-=200px'},1500)
        
    })
    
    $("#rocket").mouseout(function(){
        $("#rocket").stop().animate({'top': '0px'}, 1500)
    })
    
   
}
moveRocket();
    
    function moveBackground() {
        var y = 0;
        setInterval(function () {
          y += 1;
          $('#gameBoard').css('background-position', '0 ' + y + 'px');
        }, 30);
      }
      moveBackground();
     
      //from left to right
     /*
     $(function moveBackground(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('#gameBoard').css('background-position', x + 'px 0');
        }, 20);
    })
    */
    
});