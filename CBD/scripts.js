$(function(){

    var interval = 3000;
    // 간격은 3초
    
    $('.list').each(function(){
    // slideshow 안에 있는 요소를 반복적으로 사용
        var container = $(this);
    
        function switchImg(){
    // 페이드 전환 1회분
            var imgs = container.find('img');
            // img 요소를 전부 취득
            var first = imgs.eq(0);
            // 선두의 img요소
            var second = imgs.eq(1);
            // 두번째의 img요소
            first.appendTo(container).fadeOut();
            // 처음의 img요소를 페이드아웃시켜, 가장 뒤로 이동
            second.fadeIn();
            // 두번째의 img요소를 페이드인 시킨다
        };
    
        setInterval(switchImg, interval);
        // 3초마다 switchImg를 실행
    });
    
    });


    $(function(){

        var now = 1;
        var max = 2;
        var h = 1920;
        var slide;
    
        slide = setInterval(function(){
            $('#slide .container > div:nth-child(1)').animate({'margin-left':(h*(-1))+'px'},300,function(){
               
                $('#slide .container').append($('#slide .container > div:nth-child(1)'));
                $('#slide .container > div:nth-child(2)').css('margin-left','0px');
            });
        },2500);
    
    });