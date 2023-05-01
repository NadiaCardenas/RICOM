// boton enviar correo
$(document).ready(function(){
    $("#enviarcorreo").click(function(){
      $("p").click();
      });
  });

// ingredientes
$(document).ready(function() {
    var toggle = true; 
     // Toggle state
        $("#ingrediente").on({
        dblclick: function () {
            if (toggle) {

            // Add class toggle to the paragraph
            $(this).addClass("toggle");
            toggle = false;
            } else {

            // Remove class toggle to the paragraph
            $(this).removeClass("toggle");
            toggle = true;
            }
        }
    });
});

// preparacion
$(document).ready(function() {
    var toggle = true; 
  
    // Toggle state
        $("#preparacion").on({
         dblclick: function () {
            if (toggle) {

            // Add class toggle to the paragraph
            $(this).addClass("toggle");
            toggle = false;
            } else {

            // Remove class toggle to the paragraph
            $(this).removeClass("toggle");
            toggle = true;
            }
        }
    });
});

// card 1
$(document).ready(function(){ 
    $('#titulo1').on('click',function(){
       $('#text1').toggle();
    });
 });

// card 2
$(document).ready(function(){ 
    $('#titulo2').on('click',function(){
       $('#text2').toggle();
    });
 });

// card 3
$(document).ready(function(){ 
    $('#titulo3').on('click',function(){
       $('#text3').toggle();
    });
 });
