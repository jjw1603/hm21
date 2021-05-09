$(document).ready(function(){
    setInterval(function(){
      var seconds = new Date().getSeconds();
      var sdegree = seconds * 6;
      $('.second').css({
         'transform': 'rotate('+ sdegree + 'deg)'
      });
    }, 1000);
      
    setInterval( function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      $('.minute').css({
        'transform': 'rotate('+ mdegree + 'deg)'
      });
    }, 1000);
    
    setInterval( function() {
      var hours = new Date().getHours();   
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);    
      
      $('.hour').css({
        'transform': 'rotate('+ hdegree + 'deg)'
      });
      
  }, 1000); 
    
  });