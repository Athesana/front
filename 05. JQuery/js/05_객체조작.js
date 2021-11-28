$(document).ready(() => {
    
    // 1. Content 관련 메소드
    //  1) html() 메소드

    // content 영역의 태그와 텍스트를 모두 가져온다.
    // 선택된 요소 내부에 있는 자식 요소들을 태그와 텍스트 모두 가져온다.
    console.log(`$('#content1').html() : ${$('#content1').html()}`);  // $('#content1').html() : <a>네이버로</a>
    
    $('#content2').html($('#content1').html());
    
    $('#content2').children('a').attr('href', 'http://www.naver.com');
    
    console.log(`$('.content').html() : ${$('.content').html()}`);

    /*
    변경하는 방법
    console에서
    - $('.content').html()); 찍으면 가장 첫 번째 "html() 테스트 1" 을 찍어준다.
    - $('.content').html('zzzz'); 하면 3개 다 바뀌고
    - $('.content:first').html('신기하다'); : 첫 번째만 바뀌고
    - $('.content:eq(1)').html('바뀌네?'); : 가운데만 바뀌고
    - $('.content:last').html('히히'); : 마지막 것만 바뀐다.
    */

    // 전체 읽어 오고 싶으면 안에 콜백 함수를 지정해준다.
    $('.content').html((index, content) => {

        console.log(index, content)

        return `<h1>인덱스 ${index}, 내용 : ${content}</h1>`;

    });

    // $('.content').html('zzzzzz'); 

    //  2) text() 메소드
    // content 영역의 태그는 무시하고(제외하고) 텍스트만(문자열 정보만) 가져온다.
    console.log(`$('#content3').text() : ${$('#content3').text()}`); // $('#content3').text() : 네이버로

    $('#content4').html($('#content3').text());

    // html() 메소드 테스트때와 달리 <a></a> 앵커 태그로 감싸져있지 않고 태그 사이에 그냥 텍스트로 '네이버로' 만 들어가 있다.

    /* 
    console에서
    - $('#content4').text('<b>안녕</b>'); 실행시켜보면
        웹페이지에는 굵은 글씨로 <b>안녕</b>이 그대로 태그까지 다 보인다. why? 변경할 문구에 html태그가 있어도 문자열로 인식해서 출력하니까
    */

    console.log(`$('.content2).text() : ${$('.content2').text()}`);
    // 콘솔에는 text() 테스트 1text()테스트 2text() 테스트 3 이 출력된다. (리턴 시 전체 요소 텍스트 노드 출력)

    $('.content2').text((index, content) => {
        
        console.log(index, content);

        return `<h1>인덱스 ${index}, 내용 : ${content}</h1>`

    });

    // 2. 요소 생성 및 제거 메소드
    // 1) 요소 생성

    // 문자열로 요소를 생성하는 방법
    let p1 = '<p>문자열로 요소를 생성</p>';

    // 자바 스크립트 DOM 메소드로 생성하는 방법
    let p2 = document.createElement('p');
    let textNode = document.createTextNode('DOM 메소드로 요소를 생성');

    p2.appendChild(textNode);

    // jQuery로 요소를 생성하는 방법 1
    let p3 =  $('<p>').text('jQuery로 요소를 생성 1');

    // jQuery로 요소를 생성하는 방법 2  (태그로 감싼 문자열 형태로 만들어서 넘겨보자.)
    let p4 = $('<p>jQuery로 요소를 생성 2</p>')

    /*
    <console 결과>
    - $('p') : jQuery.fn.init(4) [p, p, p, p, prevObject: jQuery.fn.init(1)]
    - $('<p>') : jQuery.fn.init [p]
    - $('<p>').text('jQuery로 요소를 생성') : jQuery.fn.init(1)
    */

    console.dir(p1);  // 단순한 문자열
    console.dir(p2);  // DOM 객체
    console.dir(p3);  // jQuery 객체
    console.dir(p4);  

    $('#area1').append(p1, p2, p3, p4);

    // 2-1) 요소 추가1
    // $(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷부분에 추가한다.
    
    $('#add1').append('<span>B</span>');
    
    // $(A).prepend(B) : A 요소의 자식 요소로 B 요소를 앞부분에 추가한다.
    
    $('#add2').prepend('<span>B</span>');
    
    // $(A).after(B) : A 요소의 형제 요소로 B 요소를 뒷부분에 추가한다.
    $('#add3').after('<span>B</span>');
    
    // $(A).before(B) : A 요소의 형제 요소로 B 요소를 앞부분에 추가한다.
    $('#add4').before('<span>B</span>');


    // 2-2) 요소 추가2
    // $(A).appendTo(B) : A 요소를 B 요소의 자식 요소로 뒷부분에 추가한다.
    $('<span>B</span>').appendTo('#add5');
    
    // $(A).prependTo(B) : A 요소를 B 요소의 자식 요소로 앞부분에 추가한다.
    $('<span>B</span>').prependTo($('#add6'));

    // $(A).insertAfter(B): A 요소를 B 요소의 형제 요소로 뒷부분에 추가한다.
    $('<span>B</span>').insertAfter('#add7');
    
    // $(A).insertBefore(B): A 요소를 B 요소의 형제 요소로 앞부분에 추가한다.
    $('<span>B</span>').insertBefore($('#add8'));


    // 3. 요소 복제 메소드
    // 복제할 요소에 이벤트를 추가해보자.
    $('#item1').hover(
        () => {
            // 선택된 요소에 클래스 속성값을 추가하는 메소드
            $('#item1').addClass('bg-red');
        }, 
        () => {
            // 선택된 요소에 클래스 속성값을 제거하는 메소드
            $('#item1').removeClass('bg-red');
        }

        // (event) => {
        //     console.log(event);

        //     // 선택된 요소에 클래스 속성 값이 없으면 추가, 있으면 제거하는 메소드 
        //     $(event.target).toggleClass('bg-red');
        // }

        /*
        하나의 콜백 함수만 주면 하나의 콜백 함수에서 
        console 에서 마우스 올리고 내리면 
        jQuery.Event {originalEvent: MouseEvent, type: 'mouseenter', target: div#item1.item, currentTarget: div#item1.item, isDefaultPrevented: ƒ, …}
        jQuery.Event {originalEvent: MouseEvent, type: 'mouseleave', target: div#item1.item, currentTarget: div#item1.item, isDefaultPrevented: ƒ, …}
        계속 출력됨
        */
    );


    /* 
        $는 window 최상위 객체 안에 속해져 있기 때문에 콜백 함수 내부에서 굳이 event.target 하지않고 본인을 호출해서 사용하는게 가능하다.
        이벤트 객체를 $() 로 덮어 씌워서 사용하는데, 일반 요소에서는 메소드를 사용할 수 없어서 마치 javascript를 사용하는 것처럼 해준다.
        jQuery에서 제공해주는 메소드를 사용할 수 있게된다.
        event.target.attr() -> 이런식은 불가능 왜냐하면 그냥 DOM 객체일 뿐이기 때문이다.
        console에서
        $('#item1') 을 찍으나 $(event.target)이나 같은 결과로 '객체' 구조를 보여준다.
    */
        
    // 이제 마우스 hover 하면 clone-result 공간에 복제되는지 확인해보자.

    // 버튼 클릭 시 요소를 복제해서 append 시켜보자!
    $('#btn1').click(() => {
            // clone( ) 생략시 false가 기본이고 clone(true)로 매개값을 전달하면 이벤트까지 복제된다.
            let copyItem = $('#item1').clone(true);

            $('#clone-result').append(copyItem);

            // $('#item1')의 요소의 위치가 이동된다.
        // $('#clone-result').append($('#item1'));

    });


    // 4. 요소 제거 메소드
    // 제거할 요소에 이벤트 추가
    $('#item2').hover(() => {
        $('#item2').toggleClass('bg-red');
    });

    // empty 테스트
    // 요소.empty() : 요소 = jQuery 객체, 선택된 요소의 자식 요소들을(여기에서는 span) 제거한다.

    $('#empty').click(() => {
        $('#item2').empty();
        $('#remove-test').empty();
    });

    // remove 테스트
    // 요소.remove() : 선택된 요소를 제거 후 제거된 요소를 리턴해준다. 단, 리턴되는 요소의 이벤트도 삭제된다.
    $('#remove').click(() => {
        let el = $('#item2').remove();

        console.log(el);

        $('#remove-result').append(el);
    });

    // detach 테스트
    // 요소.detach() : 선택된 요소를 제거 후 제거된 요소를 리턴해준다. 단, 리턴되는 요소의 이벤트는 삭제하지 않는다.
    $('#detach').click(() => {
        let el = $('#item2').detach();

        console.log(el);
        // jQuery.fn.init [div#item2.item] 출력

        $('#remove-result').append(el);
    });

    // 5. 추가적인 메소드
    // 1) each 메소드
    // 객체 배열 생성
    let output = '';
    let arr = [
        {name: '네이버', link: 'http://www.naver.com'},
        {name: '구글', link: 'http://www.google.com'},
        {name: 'w3schools', link: 'http://www.w3schools.com'}
    ];

    // $.each(arr, (index, item) => {
    //     console.log(`index: ${index}, item.name: ${item.name}, item.link: ${item.link}`);

    //     output += `<h4><a href=${item.link}>${item.name}</a></h4>`;
    // });

    // $('#each-test').append(output);

    // arr 객체(배열)을 0부터 자동으로 불러와서 순번과 값을 각각 index와 item에 넣겠다.


    $(arr).each((index, item) => {
        console.log(`index: ${index}, item.name: ${item.name}, item.link: ${item.link}`);

        output += `<h4><a href=${item.link}>${item.name}</a></h4>`;
    });

    $('#each-test').html(output);
    // $('#each-test').append(output);
    // text는 안됨.

    $('#each-test>h4').each((index, item) => {
        console.log(index, item);

        $(item).addClass('bg-red');
    });

    // 자바스크립트에서도 동일한 기능을 하는 메소드가 추가되었다..
    arr.forEach(function(item, index, originarr) {
        // console.log(arguments);
        console.log(item, index, originarr);
    });


    // 2) extend 메소드
    let user1 = {
        name: '이산아',
        age: 21
    };

    console.log(user1);
    
    // 추가하고 싶은 값이 있으면 전달하면 된다. 전달하는 값이 객체니까 두 개의 객체가 합쳐지게 된 꼴

    $.extend(user1, {job: '학생'});
    
    console.log(user1);
    
    let user2 = {
        name: '홍길동',
        hobby: ['음악듣기', '달리기', '국밥먹기'],
    };

    let result = $.extend(user1, user2);
    // 특정 값을 반환하는데 실제 합쳐진 객체를 반환해준다.

    console.log(user1);
    console.log(user2);
    console.log(result);  // user1 리턴값과 같다.

    // conlose에서 user1을 보면,
    // "동일한 속성 값이 있으면, 반복되는 속성이 있으면" 나중에 전달한 값으로 덮어 씌워진다.
    // {name: '홍길동', age: 21, job: '학생', hobby: Array(3)}

    // console에서 user2를 보면,
    // 변하지 않았다.


    // 3. noConflict 메소드
    // $('#ncTest').css('color', 'red');
    let jq = $.noConflict();

    jq('#ncTest').css('color', 'orange');

    // 이 jq는 지역변수이기 때문에 가장 바깥에 있는 ready() 콜백 함수가 종료되면 소멸된다.
    // 계속 사용하고 싶으면 이 함수 바깥에 선언하시오.
});