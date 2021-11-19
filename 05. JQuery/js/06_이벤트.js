$(() => {

    // 1. 이벤트 연결
    // 1) on()와 off()

    // 방법 1번
    // $('#area1').on('mouseenter', () => {
    //     $('#area1').css('background', 'red').text('마우스가 올라감');
    // });

    // $('#area1').on('mouseleave', () => {
    //     $(window.event.target).css('background', 'seagreen').text('마우스가 내려감');
    // });

    // 방법 2번
    $('#area1').on('mouseenter mouseleave', (event) => {
        console.log(event);

        if (event.type === 'mouseenter') {
            $('#area1').css('background', 'red').text('마우스가 올라감');
            
        } else if (event.type === 'mouseleave'){
            $(window.event.target).css('background', 'seagreen').text('마우스가 내려감');
        }
    });

    /*
    console에서는
    jQuery.Event {originalEvent: MouseEvent, type: 'mouseenter', target: div#area1.area, currentTarget: div#area1.area, isDefaultPrevented: ƒ, …}
    jQuery.Event {originalEvent: MouseEvent, type: 'mouseleave', target: div#area1.area, currentTarget: div#area1.area, isDefaultPrevented: ƒ, …}
    가 나오기 때문에 type을 가지고 if문 을 만들수도 있다.
    */

    $('#area1').on('click', (event) => {
        $(event.target)
                .css('background', 'white')
                .text('')
                .off('mouseenter mouseleave')
                // .off('mouseleave');
    });


    // 방법 3번
    $('#area1').on({
        mouseenter: () => {
            $('#area1').css('background', 'red').text('마우스가 올라감');
        },
        mouseleave: () => {
            $(window.event.target).css('background', 'seagreen').text('마우스가 내려감');
        },
        click: (event) => {
            $(event.target)
                .css('background', 'white')
                .text('')
                .off('mouseenter mouseleave');
        }
    });

    // 2) one()
    $('#area2').one('click', () => {
        alert('처음이자 마지막으로 이벤트 핸들러 실행');
    }).css('cursor', 'pointer');


    // 2. 키보드 이벤트
    // 1) keydown(), keypress(), keyup()
    $('#tarea1').on({
        // 키보드가 눌려질 때 이벤트 발생
        keydown: (event) => {
            console.log(`keydown > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
            // keydown > event.key : a, event.keyCode : 65 출력
            // keydown > event.key : ArrowLeft, event.keyCode : 37
            // keydown > event.key : Process, event.keyCode : 229 // 한글의 경우
        },
        // 글자가 입력될 때 이벤트 발생(한글, 펑션키, 기능키 사용 불가능(인식 불가))
        keypress: (event) => {
            console.log(`keypress > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
        },
        // 키보드가 떼어질 때 이벤트가 발생
        keyup: (event) => {
            console.log(`keyup > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
        },
    });

    // 2) 동적으로 글자 수 세기
    $('#tarea2').on('keyup', (event) => {
        let target = $(event.target);
        let counter = $('#counter');
        let maxLength = parseInt($('#maxLength').text());

        if ((maxLength - target.val().length) < 0) {
            counter.css('color', 'red');

            target.val(target.val().substr(0, maxLength));

        } else {
            counter.css('color', 'black');
        }

        console.log(target.val().length);
        counter.text(target.val().length);
    });


    // 3) 동적으로 아이디 조건 확인
    let regExp = /^[a-z][a-z\d]{3,11}$/;

    $('#userId').keyup((event) => {
        let userId = $(event.target).val();

        if(userId === null || userId === '') {
            $('#idCheck').css({'color': 'white'}).text('');
        } else if(regExp.test(userId)){
            $('#idCheck').css({'color': 'green', 'font-weight': 'bold'}).text('사용 가능한 아이디 형식입니다.');
        } else {
            $('#idCheck').css({'color': 'red', 'font-weight': 'bold'}).text('사용할 수 없는 아이디 형식입니다.');
        }
    });















});