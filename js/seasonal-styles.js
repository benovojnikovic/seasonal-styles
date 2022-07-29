$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

    if(season == 'Spring'){
            $("html").css("background-color", "#2B7129");
            $("#wear").attr("src","images/spring-wear.jpg");
            $("#logo").attr("src","images/spring.gif");
            $("header h3").text("Spring out the house")
    }
    if(season == 'Summer'){
            $("html").css("background-color", "#EBA52B");
            $("#wear").attr("src","images/summer-wear.jpg");
            $("#logo").attr("src","images/summer.gif");
            $("header h3").text("Sausetastic Summer!!!")
    }
    if(season == 'Fall'){
            $("html").css("background-color", "#A81124");
            $("#wear").attr("src","images/fall-wear.jpg");
            $("#logo").attr("src","images/fall.gif");
            $("header h3").text("fall into the leaves")
        }
    if(season == 'Winter'){
            $("html").css("background-color", "#005393");
            $("#wear").attr("src","images/winter-wear.jpg");
            $("#logo").attr("src","images/winter.gif");
            $("header h3").text("win her in the winter")
}
    if(season == 'Default'){
            $("html").css("background-color", "#000000");
            $("#wear").attr("src","images/seasons.jpg")
            $("#logo").attr("src","images/seasons.jpg")
            $("header h3").text("Default")
    }
    });
});