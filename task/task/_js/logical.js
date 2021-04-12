$(document).ready(function(){

    //標題bar隱藏英文
    var barTitle = $("#barTitle");

    barTitle.hover(function(){ //鼠標樣式
        barTitle.css("cursor","pointer");
    },function(){
        barTitle.css("cursor","default");
    });

    barTitle.click(function(){ 
        if(barTitle.text() == '元智周邊美食介紹'){
            barTitle.text('Introduction the Food Around YZU');
        }
        else{
            barTitle.text('元智周邊美食介紹');
        }
    });


    //bar underBarBtn 鼠標樣式
    var barbtn = $("#underBarBtn");
    
    barbtn.hover(function(){
        barbtn.css("color","lightgoldenrodyellow");
        barbtn.css("font-size","30px");
        barbtn.css("cursor","pointer");
    },function(){
        barbtn.css("color","lightgray");
        barbtn.css("font-size","25px");
        barbtn.css("cursor","default");
    });


    //下拉式選單
    var underBar = $("#underBar");
    var underBarBtn = $("#underBarBtn");

    underBarBtn.click(function(){
        underBar.slideToggle('slow');
    });


    //輪播div高度設定
    var slideShowDivWidth = $("#heightImg").height();
    $("#titleImg").css("height",slideShowDivWidth);
    $("#titleImg img").css("height", slideShowDivWidth);

    

    //home 輪播
    var slideShow = $("#titleImg");
    var ul = slideShow.find("ul");
    var showNumber = slideShow.find(".showNav span");
    var imgWidth = $("#heightImg").width();
    var imgWidth2 = slideShow.find("ul li").eq(0).width();
    var timer = null;
    var iNow = 0;

    $(window).resize(function(){
        imgWidth = $("#heightImg").width();
    });

    showNumber.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        iNow = index;
        ul.animate({
            "left": -imgWidth*iNow,
        })
    });

    timer = setInterval(function(){
        iNow++;
        if(iNow > showNumber.length-1){
            iNow = 0;
        }
        showNumber.eq(iNow).trigger("click");
    },3500);

    //home文章 div 變化
    $("#news1").mouseover(function(){
        $("#news1").removeClass("newsBefore");
        $("#news1").addClass("newsAfter");
    });
    $("#news1").mouseout(function(){
        $("#news1").removeClass("newsAfter");
        $("#news1").addClass("newsBefore");
    });
    $("#news2").mouseover(function(){
        $("#news2").removeClass("newsBefore");
        $("#news2").addClass("newsAfter");
    });
    $("#news2").mouseout(function(){
        $("#news2").removeClass("newsAfter");
        $("#news2").addClass("newsBefore");
    });
    $("#news3").mouseover(function(){
        $("#news3").removeClass("newsBefore");
        $("#news3").addClass("newsAfter");
    });
    $("#news3").mouseout(function(){
        $("#news3").removeClass("newsAfter");
        $("#news3").addClass("newsBefore");
    });

    //click
    /*var textClick = $(".text2");

    textClick.hover(function(){
        $(this).css("color","lightgoldenrodyellow");
        $(this).css("cursor","pointer");
    },function(){
        $(this).css("color","lightgray");
        $(this).css("cursor","default");
    });*/

    $("#ex1").zoom({ on:'grab' });
    $("#ex2").zoom({ on:'grab' });
    $("#ex3").zoom({ on:'grab' });
    $("#ex4").zoom({ on:'grab' });
});