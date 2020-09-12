$(".grid-item").hover(function(){
    $(this).find("a").addClass("active");
    }, 
    
    function(){
    $(this).find("a").removeClass("active");
  });