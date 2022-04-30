console.log("JavaScript Active")

$("#portfolioButton").on("click", function(){
    if ($(this).hasClass("active")){
        console.log("You are already here")
    } else {
        $(".navItem").removeClass("active");
        $("#portfolioButton").addClass("active");
        $(".sideAccent").addClass("inactive");
        $("#portfolioSide").removeClass("inactive");
    }
});
$("#moreMeButton").on("click", function(){
    if ($(this).hasClass("active")){
        console.log("You are already here")
    } else {
        $(".navItem").removeClass("active");
        $("#moreMeButton").addClass("active");
        $(".sideAccent").addClass("inactive");
        $("#moreMeSide").removeClass("inactive");
    }
});
$("#contactButton").on("click", function(){
    if ($(this).hasClass("active")){
        console.log("You are already here")
    } else {
        $(".navItem").removeClass("active");
        $("#contactButton").addClass("active");
        $(".sideAccent").addClass("inactive");
        $("#contactSide").removeClass("inactive");
    }
});