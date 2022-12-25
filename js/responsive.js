var list_menu = $( ".menu-primary" ).clone();
// $( ".menu-primary ul li:not(:first-child)" ).remove();
$( "#menu-responsive-area" ).append(list_menu);
$( ".menu-primary:last ul li:first-child" ).remove();
$(window).on('resize load', function(){
    if($( window ).width() < 600) {
        var list_social = $(".list-social").clone();
        $(".list-social").remove();
        $( ".wrapper" ).append(list_social);
        
    }else{
        var list_social = $(".list-social").clone();
        $(".list-social").remove();
        $( list_social ).prependTo( ".wrapper" );

    }
});
$("#btn-menu-responsive, #btn-menu-responsive-close").on('click', function(){
    if($("#menu-responsive-area").css("display") == "none"){
        $("#menu-responsive-area").show()
        $("#menu-responsive-area").animate({
            width: "100%"
        })
    }
    else{
        $("#menu-responsive-area").animate({
            width: "20%"
        },500,function(){
            $("#menu-responsive-area").hide()
        })
    }
});