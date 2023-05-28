$(window).scroll(function () {            
    if($(document).scrollTop()>10){                
        $('#menuStiky').addClass("banner-background");
    }else{
        $('#menuStiky').removeClass("banner-background");
    }
})