$(function() {
    $(".carousel").carousel( { interval: 5000, pause: "false" } ); //sets carousel rotation interval to 2 secs per image
    $("#carouselButton").click(function(){ //runs code within to pause carousel on click
        if ($("#carouselButton").children("i").hasClass("fa-pause")){ //when clicked jQuery function will check if there is a child node (i) with fa-pause
            $(".carousel").carousel("pause"); //if it finds it, it knows the carousel is playing and will instead pause it
            $("#carouselButton").children("i").removeClass("fa-pause"); //switch the font awesome icon from pause --
            $("#carouselButton").children("i").addClass("fa-play"); //--to play
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play"); //switch the font awesome icon from pause --
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});