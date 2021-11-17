$(document).ready(() => {
    // 1. 자손 선택자와 후손 선택자
    //  1) 자손 선택자 : 부모>자손
    $('div>h3').css('color', 'violet');
    $('div>li').css('color', 'red');
    $('div>ul h3').css('color', 'green');

    //  2) 후손 선택자 : 부모 후손
    $('div h3').css('backgroundColor', 'skyblue');
    $('div .test').css('background', 'tomato');

    // 2. 기본 속성 선택자
    // $('input[class]').css('background-color', 'tomato');
    // $('input[type=text]').val('Change value');
    // $('input[class~=test]').val('123456');
    // class 안에 test가 포함(정확히 똑같아야 한다.)되어 있고 속성값이 여러 개 일 때 공백으로 구분된 해당 값에 value 기본 값 넣기
    // $('input[type^=ra]').prop('checked', 'true');
    // type이 ra 로 시작하는 속성만 지정한다. prop : 프로퍼티 
    // $('input[type$=box]').prop('checked', 'true');
    // type이 box로 끝나는 속성만 지정한다. 
    // $('input[class*=st2]').css('width', '100px').css('height', '100px');
    // class명이 지정하는 속성값 st2가 포함되는 속성만 지정한다. + 메소드 체이닝 가능

    // 3. 입력 양식 선택자
    // $(':text').css('background-color', 'pink');
    // $(':button').val('왕버튼').css({width: '200px', height: '200px', backgroundColor: 'red'}); // 자바스크립트 객체 리터럴 속성:값 만들어서 넘겨주기
    // $(':checkbox').prop('checked', true).css({width: '50px', height: '50px'});
    // $(':file').css('background-color', 'yellow');

    // $(':image').mouseenter((event) => {
    //     console.log(event);
    //     console.log(event.target);  // 이거는 event가 발생한 DOM 요소 객체

    //     $(event.target).attr('src', '../resources/image/flower2.PNG');
    // });
    
    // $(':image').mouseout((event) => {
    //         console.log(event);
        
    //         $(event.target).attr('src', '../resources/image/flower1.PNG');
    //     });
    
    // hover(): mouseenter() + mouseout()
    // $(':image').hover(
    //     (event) => {
    //         $(event.target).attr('src', '../resources/image/flower2.PNG');
    //     }, 
    //     (event) => {
    //         $(event.target).attr('src', '../resources/image/flower1.PNG');
    //     }
    // );

    /*
        console에서 event.target -> input이 나온다.

        $(event.target)처럼 제이쿼리로 감싸주면 제이쿼리에서 제공하는 메소드를 사용할 수 있다. (ex. attr, css)
        즉, 일반 DOM 객체를 제이쿼리에서 제공하는 함수를 사용할 수 있도록 감싸준다.
    */

    // 4. checkbox 상태에 대한 선택자
    // input 태그 중에 체크가 된 객체 선택
    $('input:checked').css({width: '50px', height: '50px'});
    // 상태가 바뀔때마다 발생하는 event라는 이벤트를 처리하는 이벤트 핸들러(메소드)이고 콜백함수를 지정하면 된다.
    $('input:checkbox').change((event) => {
        let target = $(event.target); // if문의 조건 안에서 자꾸 반복되니까 그냥 변수로 뺀 것

        console.log(event.target);
        console.log(target);

        if(target.prop('checked')) {
            target.css({width: '50px', height: '50px'});
        } else {
            target.css({width: '15px', height: '15px'});
        }
    });

    // 5. select, option 태그의 상태에 대한 선택자
    // id가 national인 태그에 change 메소드를 발생하게 설정 -> 지정된 콜백 함수가 실행된다.
    $('#national').change(() => {
        // select 태그의 option 태그 중 선택된(selected) 객체를 선택 -> value 값을 가져온다.
        let value = $('#national>option:selected').val();

        // id가 result인 요소에 값을 value로 변경
        $('#result').val(value);
    });

    // 6. input 상태에 대한 선택자
    // $('input:enabled').css('background-color', 'tomato'); // 활성화 된 input 은 다 바뀜
    $('input:disabled').css('background-color', 'tomato'); // 활성화 된 input 은 다 바뀜
    
    // 7. attr()와 prop()
    let cb1 = $('#cb1');
    let cb2 = $('#cb2');

    console.log(`cb1.attr('checked') : ${cb1.attr('checked')}`); // checked
    console.log(`cb2.attr('checked') : ${cb2.attr('checked')}`); // undefined

    console.log(`cb1.prop('checked') : ${cb1.prop('checked')}`); // true
    console.log(`cb2.prop('checked') : ${cb2.prop('checked')}`); // false

    // 값을 추가해서 지정할 때 하는 방법
    // cb2.attr('checked', 'checked');  // 속성 값을 명시
    // cb2.prop('checked', true);  // true, false를 명시

});