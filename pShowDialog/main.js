$(function(){

    $("#btn_show").on("click", function(){
        $(".p-cover").show();
        $(".p-dialog").addClass("t-show");
    });

    $(".p-cover").on("click", function(){
        console.log(123);
        $(this).hide();
        //$(".p-dialog").hide();
        $(".p-dialog").removeClass("t-show");
    });
    $(".p-dialog").mousedown(function(){
        $(".p-cover").one("mouseup", function(e){
            if($(e.target).is($(".p-cover"))){
                $(".p-cover").click();
            }
        });
    });
});