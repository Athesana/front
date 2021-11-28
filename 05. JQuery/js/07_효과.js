$(document).ready(() => {

    // 효과
    // 1. show()와 hide()
    $('#show').on('click', () => {
        $('#imgFlower').show(1500, 'linear');
    });

    $('#hide').on('click', () => {
        $('#imgFlower').hide(1500, 'swing');
    });

    $('#toggle').on('click', () => {
        // toggle 없이 효과를 구현하는 방법

        // if($('#imgFlower').css('display') === 'none'){
        //     $('#imgFlower').show(1500, 'linear');
        // } else {
        //     $('#imgFlower').hide(1500, 'swing');
        // }

        $('#imgFlower').toggle(1500, 'swing');
    });

    // 2. slideDown()와 slideUp()
    $('.menu').on('click', (event) => {
        // let content = $(event.target).next();

        // if (content.css('display') === 'none'){
        //     content.slideDown(500, 'swing');
        
        // } else {
        //     content.slideUp(500, 'swing');
        // }

        // slidetoggle()을 사용하여 slideDown(), slideUp을 실행
        // $(event.target).next().slideToggle(1000, 'swing');

        // 하나의 컨텐츠만 slidedown 되도록 만들어보자.
        // 클릭하면 일단 열려있는 contents들은 다 닫고,
        // 내가 클릭한 event.target이 되는 메뉴의 다음에 있는 것 = 즉 contents가 열린다.
        $('.contents').slideUp(500, 'swing');
        $(event.target).next().slideDown(500, 'swing');

    });


    // 3. fadeIn()와 fadeOut()
    $('#fadeIn').on('click', () => {
        // $('#imgForest').fadeIn('slow');
        $('#imgForest').fadeIn(1000, 'linear');
    });

    $('#fadeOut').on('click', () => {
        $('#imgForest').fadeOut('fast');
    });

    $('#fadeToggle').on('click', () => {
        $('#imgForest').fadeToggle(1000, 'swing');
    });

    $('#imgForest').hover(
        (event) => {
            if(event.type === 'mouseenter'){
                $(event.target).fadeTo(500, 0.5);
            } else if (event.type === 'mouseleave'){
                $(event.target).fadeTo(500, 1);
            }
        }
    );




});