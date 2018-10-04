$(document).ready(function() {
    $("#addtlInfo").hide(); //Don't display this at the start
    
    $("#forAddtlInfo").click( function(evt) {
        $("#addtlInfo").show("blind",1000, function(){
            $("#forAddtlInfo").hide("blind",500); //Hide activatable text after showing the previous text
        }); //Show our hidden text
        $("#update").animate({
            backgroundColor: "rgba(255,255,255,.95)" //Make the background color solid
        }, 1500); //end animate, same duration as the show/hide effects
    }); //end click
    
    $("#hideAddtlInfo").click( function(evt) {
        $("#forAddtlInfo").show("blind",500, function(){
            $("#addtlInfo").hide("blind",1000); //Hide activatable text after showing the previous text
        }); //Show our hidden text
        $("#update").animate({
            backgroundColor: "rgba(255,255,255,.7)" //Make the background color muted
        }, 1500); //end animate, same duration as the show/hide effects
        
    }); //end click
});