$(function(){
    //tab1
    var swiper = new Swiper(".swiper", {
        observer:true,
        observeParents:true,
        mousewheel:true,
        direction:"vertical",
        effect: "cube",
        speed:600,
        cursor:true,
        cubeEffect: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper.swiper-pagination",
            clickable: true,
            type : 'bullets',
        },
        navigation: {
            nextEl: '.swiper .swiper-button-next',
            prevEl: '.swiper .swiper-button-prev',
        },
        on: {
            slideChange: function () {
                var activeIndex = this.activeIndex;
                if(activeIndex===0) {
                    $(".swiper-button-prev").hide();
                    $(".swiper-button-next").show();
                }
                if(activeIndex===2) {
                    $(".swiper-button-next").hide();
                    $(".swiper-button-prev").show();
                }
            }
        },
    });
    
    //탭제목 마우스클릭 이벤트
    $(".tab_title a").click(function(){
        let idx=$(this).index();
        $(".tab_title a").removeClass("active");
        $(this).addClass("active");

        $(".tabon").css("display","none").removeClass("active");
        $(".tabon").eq(idx).css("display","block").addClass("active");

        let index=idx+1;
        let thisSwiper = document.getElementById("swiper"+index);
        thisSwiper.swiper.update();
    });
    



    // gif 재생, 멈춤
    const imgFiles = {
        "uq1": {
            static: "../img/denby2_1.jpg",
            gif: "../img/denby2_1.gif"
        },
        "uq2": {
            static: "../img/denby2_2.jpg",
            gif: "../img/denby2_2.gif"
        },
        "uq3": {
            static: "../img/denby2_3.jpg",
            gif: "../img/denby2_3.gif"
        },
        "uq4": {
            static: "../img/denby2_4.jpg",
            gif: "../img/denby2_4.gif"
        },
        "uq5": {
            static: "../img/touslesjours2_1.png",
            gif: "../img/touslesjours2_1.gif"
        },
        "uq6": {
            static: "../img/touslesjours2_2.png",
            gif: "../img/touslesjours2_2.gif"
        },
        "uq7": {
            static: "../img/touslesjours2_3.png",
            gif: "../img/touslesjours2_3.gif"
        },
        "uq8": {
            static: "../img/touslesjours2_4.png",
            gif: "../img/touslesjours2_4.gif"
        },
        "uq9": {
            static: "../img/star2_1.png",
            gif: "../img/star2_1.gif"
        },
        "uq10": {
            static: "../img/star2_2.png",
            gif: "../img/star2_2.gif"
        },
        "uq11": {
            static: "../img/star2_3.png",
            gif: "../img/star2_3.gif"
        },
        "uq12": {
            static: "../img/star2_4.png",
            gif: "../img/star2_4.gif"
        }
    };

    const images = document.querySelectorAll('.g');
    
    images.forEach(image => {
        // const classes = image.classList;
        // const uniqueClass = Array.from(classes).find(cls => cls.startsWith('uq'));
        // const { static: staticImg, gif: gifImg } = imgFiles[uniqueClass];

        // image.addEventListener("mouseenter", function() {
        //     image.src = gifImg;
        // });
        // image.addEventListener("mouseleave", function() {
        //     image.src = staticImg;
        // });

        const src = image.getAttribute('src');
        const str = src.split('.');
        const newSrc = str[0]+".gif";

        image.addEventListener("mouseenter",function(){
            image.src = newSrc
        });
        image.addEventListener("mouseleave", function() {
            image.src = src;
        });
    });
});
