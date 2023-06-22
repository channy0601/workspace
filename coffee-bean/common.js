 $(document).ready(function(){
    // 메뉴 호버 시 서브메뉴 등장
    $('.depth1 > li').mouseover(function(){
        $(this).find('.depth2').stop().slideDown();        
    });
    $('.depth1 > li').mouseleave(function(){
        $(this).find('.depth2').stop().slideUp();
    });



    // prd-슬라이더
    $('.prd_list').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        dots: true,
        arrows : false,
        autoplaySpeed: 2000,
        speed: 1000,
      });

    $('.news_list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows : false,
        autoplaySpeed: 2000,
        speed: 2000,
    });
});



    // 검색 버튼 클릭 시 검색창 등장
    // case1(기본)
    // $(document).on("click", ".btn_search", function(){
    //     if($(".search_box").hasClass("on")){            
    //         $(".search_box").slideUp(500, function(){
    //             $(".search_box").removeClass("on");
    //         });
    //     }else{
    //         $(".search_box").slideDown(500, function(){
    //             $(".search_box").addClass("on");
    //         });
    //     }
    // });

    // case2(변수사용)
    // var abc = function(){
    //     if($(".search_box").hasClass("on")){            
    //         $(".search_box").slideUp(500, function(){
    //             $(".search_box").removeClass("on");
    //         });
    //     }else{
    //         $(".search_box").slideDown(500, function(){
    //             $(".search_box").addClass("on");
    //         });
    //     }
    // }

    // $(document).on("click", ".btn_search", function(){
    //     abc();
    // });
    
    // case3(선기능구현 후 조건-함수사용)
    var abc = function(opt){
        if(opt=="open"){
            $(".search_box").slideDown(500, function(){
                $(".search_box").addClass("on");
                $(".btn_search").addClass("test");
            });
        }
        if(opt=="close"){
            
            $(".search_box").slideUp(500, function(){
                $(".search_box").removeClass("on");
                $(".btn_search").removeClass("test");
            });
        }
    }

    $(document).on("click", ".btn_search", function(){
    
        if($(".search_box").hasClass("on")){            
            abc("close")
        }else{
            abc("open")
        }
    }
    );