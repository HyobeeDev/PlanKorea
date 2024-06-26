$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 400) {
            $('.quick_btns').fadeIn('fast')
        } else {
            $('.quick_btns').fadeOut('fast')
        } // quick_btns
    })

    $(".ham_btn").click(function(){
        $(".menu_sheet_mobile").animate({left: "0%"})
    }); // ham_btn 클릭시 메뉴 보이기

    $(".ham_close_btn").click(function(){
        $(".menu_sheet_mobile").animate({left: "100%"})
    });

    $('.search_m').on('click', function(){
        $('.search_m_bar').slideToggle()
    }) // search_m
    $('.search_bar_close').on('click', function(){
        $('.search_m_bar').slideUp()
    }) // search_bar_close

    $('.menu1').click(function(){
        $('.menu2').slideUp()
        if($(this).children('.menu2').is(':hidden')) {
           $(this).children('.menu2').slideDown()
        } else {
           $(this).children('.menu2').slideUp()
        }
     });

    $('.main_visual').slick({
        // lazyLoad: 'ondemand', // 사용자가 안보고 있는 것들은 로딩되지 않도록하여 데이터낭비 줄임
        slide: 'li',
        infinite : true, //무한 반복
        arrows : true, // 옆으로 이동하는 화살표 표시
        dots : true, // 스크롤바 아래 인디케이터 표시
        dotsClass : "main_visual_dots", //아래 나오는 페이지네이션 css class 지정
        autoplay : true, // 자동 스크롤
        autoplaySpeed : 3000, // 자동 스크롤 넘어가는 빠르기
        // pauseOnHover : true, // 마우스 호버시 슬라이더 일시정지
        prevArrow : '<div class="main_visual_prev"></div>', // 이전 화살표 모양 설정
        nextArrow : '<div class="main_visual_next"></div>', // 다음 화살표 모양 설정
        draggable : true, //드래그 가능 여부
        autoplaySpeed:5000, //슬라이드 보여주는 시간
    })

    $('.main_news_container').slick({
        slide: 'a',
        infinite : true,
        autoplay : true,
        autoplaySpeed : 3000,
        pauseOnHover : true,
        draggable : true,
        autoplaySpeed:3000,
        prevArrow : '<div class="news-prev"></div>',
        nextArrow : '<div class="news-next"></div>',
    }) // main_news_container

    $('.pertner_logo').slick({
        slide: 'img',
        infinite : true,
        autoplay : true,
        autoplaySpeed : 3000,
        draggable : true,
        autoplaySpeed:3000,
        prevArrow : '<div class="partner-prev"></div>',
        nextArrow : '<div class="partner-next"></div>',
        slidesToShow: 6,
        slidesToScroll: 6,

        responsive: [
            { 
                breakpoint: 768, // max768px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                } 
            }
        ]
    }) //pertner_logo_mobile
}) //jQuery_function