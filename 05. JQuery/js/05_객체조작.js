$(document).ready(() => {
    
    // 1. Content 관련 메소드
    //  1) html() 메소드

    // content 영역의 태그와 텍스트를 모두 가져온다.
    console.log(`$('#content1').html() : ${$('#content1').html()}`);  // $('#content1').html() : <a>네이버로</a>
    
    $('#content2').html($('#content1').html());
    
    $('#content2').children('a').attr('href', 'http://www.naver.com');
    
    console.log(`$('.content').html() : ${$('.content').html()}`);

    /*
    console에서
    - $('.content').html('zzzz'); 하면 3개 다 바뀌고
    - $('.content:first').html('신기하다'); : 첫 번째만 바뀌고
    - $('.content:eq(1)').html('바뀌네?'); : 가운데만 바뀌고
    - $('.content:last').html('히히'); : 마지막 것만 바뀐다.
    */


    $('.content').html((index, content) => {

        console.log(index, content)

        return `<h1>인덱스 ${index}, 내용 : ${content}</h1>`;

    });

    // $('.content').html('zzzzzz'); 

    //  2) text() 메소드
    // content 영역의 태그는 무시하고 텍스트만 가져온다.
    console.log(`$('#content3').text() : ${$('#content3').text()}`); // $('#content3').text() : 네이버로

    $('#content4').html($('#content3').text());

    /* 
    console에서
    - $('#content4').text('<b>안녕</b>');
    */

    console.log(`$('.content2).text() : ${$('.content2').text()}`);

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
    console에
    - $('p') : jQuery.fn.init(4) [p, p, p, p, prevObject: jQuery.fn.init(1)]
    - $('<p>') : jQuery.fn.init [p]
    - $('<p>').text('jQuery로 요소를 생성') : jQuery.fn.init(1)
    */

    console.dir(p1);
    console.dir(p2);
    console.dir(p3);
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
    //     () => {
    //         // 선택된 요소에 클래스 속성값을 추가하는 메소드
    //         $('#item1').addClass('bg-red');
    //     }, 
    //     () => {
    //         // 선택된 요소에 클래스 속성값을 제거하는 메소드
    //         $('#item1').removeClass('bg-red');
    //     });

        (event) => {
            console.log(event);

            // 선택된 요소에 클래스 속성 값이 있으면 추가 없으면 제거하는 메소드 
            $(event.target).toggleClass('bg-red');
        }

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
    // 요소.empty() : 선택된 요소의 자식 요소들을 제거한다.

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
    })

});