




$(document).ready(function(){

    $("#loading , .spinner" ).fadeOut(1000 , function(){
        $("#loading").addClass("d-none")
    })

})




$(window).scroll(function(){
    


    let scrollVal = $(".navbar").offset()
    console.log(scrollVal.top)


    if( scrollVal.top > 250){

    $(".navbar").removeClass("bg-transparent , pt-3")

    $(".navbar").addClass("bg-dark , shadow-sm")
    

    }
    else{

        $(".navbar").removeClass("bg-dark , shadow-sm")

        $(".navbar").addClass("bg-transparent , pt-3")

    }

    

})

$(".nav-link").click(function(){
    $(this).addClass("mainColor")
    $(".nav-link").not($(this)).removeClass("mainColor")
})