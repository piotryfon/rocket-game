$(document).ready(function() {
    
    $("#rocket").mouseover(function(){
        $("#rocket").stop().animate({'top': '-=200px'},1500)
        
    })
    
    $("#rocket").mouseout(function(){
        $("#rocket").stop().animate({'top': '0px'}, 1500)
    })
    /*
    function moveBackground() {
        var y = 0;
        setInterval(function () {
          y += 1;
          $('#gameBoard').css('background-position', '0 ' + y + 'px');
        }, 30);
      }
      moveBackground();
      */
     $(function moveBackground(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('#gameBoard').css('background-position', x + 'px 0');
        }, 20);
    })

});