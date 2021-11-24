$(document).ready(() => {
    // 1. Filtering 메소드
    // - Filtering 방법으로는 선택자와 메소드를 제공한다.

    // * 필터링 관련 선택자
    //  선택자:first        - 첫 번째 위치한 요소를 선택(메소드)
    //  선택자:last         - 마지막 위치한 요소를 선택 (메소드)
    //  선택자:odd          - 홀수 번재에 위치한 요소를 선택 
    //  선택자:even         - 짝수 번째 인덱스에 위치한 요소를 선택 
    //  선택자:eq(인덱스)    - 인덱스에 해당하는 요소를 선택 
    //  선택자:not(인자)     - 인자 값과 일치하지 않는 요소를 선택 

    // <선택된 요소들 중 (h4) 첫 번째 요소를 가져와서 스타일을 변경>
    $('h4').first().css('font-size', '20pt');
    // $('h4:first').css('font-size', '20pt');
    
    // <선택된 요소들 중 (h4) 마지막 요소를 가져와서 스타일을 변경>
    $('h4').last().css('font-size', '20pt');
    // $('h4:last').css('font-size', '20pt');

    // <인덱스 기준으로 선택된 요소들 중 홀수 인덱스의 요소를 가져와서 스타일을 변경>> filtering2, filtering4 가 변경된다.
    $('.test').filter(':odd').css({backgroundColor: 'seagreen', color: 'white'});
    // $('.test:odd').css({backgroundColor: 'seagreen', color: 'white'});
    
    // <인덱스 기준으로 선택된 요소들 중 짝수 인덱스의 요소를 가져와서 스타일을 변경> filtering1, filtering3, filtering6 가 변경된다.
    $('.test').filter(':even').css({backgroundColor: 'yellow', color: 'white'});
    // $('.test:even').css({backgroundColor: 'yellow', color: 'white'});
    
    // 콜백함수를 지정해서 내가 원하는대로 커스텀을 해보자. 
    // index를 매개변수로 주고 return 결과가 true인 요소만 걸러내서 css를 적용한다.
    $('.test').filter((index) => {

        if(index === 0){
            return false;
        }

        return index % 3 === 0;


    }).css({backgroundColor: 'skyblue', color: 'white'}); 
    // filtering1(0번 index), filtering4(3번 index)


    // <선택된 요소들 중 인덱스에 해당하는 요소를 가져와서 텍스트를 변경>
    $('h4').eq(4).text('eq()에 의해서 선택되었습니다.')
    // $('h4:eq(4)').text('eq()에 의해서 선택되었습니다.')

    // <인자 값과 일치하지 않는 요소를 가져와서 스타일을 변경>
    $('h4').not('.test').css({backgroundColor: 'orange', color: 'white'});
    // $('h4:not(.test)').css({backgroundColor: 'orange', color: 'white'});

    $('h4').filter('.test').text('ㅋㅋㅋㅋㅋ');

    // 2. Ancestors 메소드
    // 선택된 요소의 바로 상위에 있는 부모 요소
    console.log($('span').parent());
    // 선택된 요소의 모든 상위 조상 요소
    console.log($('span').parents());

    //콘솔에 $('span').parents() 찍어보면
    //jQuery.fn.init(8) [p, div, li, ul, div, div.wrap, body, html, prevObject: jQuery.fn.init(2)]
    // $('span').parents('span' 이나 'p', 'div' 등 검색 가능)

    // span 태그의 부모 요소에 스타일을 설정해보자.
    // $('span').parent().css({color: 'red', border: '2px solid red'});
    
    // li 태그의 모든 상위 요소에 스타일 설정
    // $('li').parents().css('color', 'blue');

    // li 태그의 상위 요소 중 div만 스타일 설정
    // $('li').parents('div').css('border', '2px dashed violet');

    // span 태그부터 div 태그 이전까지 상위 요소 스타일을 설정해보자.
    // 콘솔에서 찍어보면,
    // $('span').parentsUntil('div');
    // jQuery.fn.init(3) [p, li, ul, prevObject: jQuery.fn.init(2)]

    // $('span').parentsUntil('div').css('background-color', 'lightgreen');


    // 3. Descendants 메소드
    // 선택된 요소의 바로 하위에 있는 자식 요소
    console.log($('.wrap').children());
    // jQuery.fn.init(2) [div, div, prevObject: jQuery.fn.init(1)]

    // $('.wrap').children().children().children(); 을 찍으면
    // jQuery.fn.init(2) [li, span, prevObject: jQuery.fn.init(2)] 이 나온다.

    // 모든 요소들 중에서 인자로 준 내가 찾고 싶은 것만 검색해서 준다.
    console.log($('.wrap').find('span'));
    

    // 클래스 명이 wrap인 요소의 자손(바로 하위)의 스타일 변경
    $('.wrap').children().css({color: 'red', border: '2px solid'});
    
    // 클래스 명이 wrap인 태그의 자손의 자손들의 스타일 변경 // ul, p
    $('.wrap').children().children().css({color: 'blue', border: '2px solid'});
    
    // 클래스 명이 wrap인 태그의 자손의 자손들 중에 ul 요소의 스타일 변경
    $('.wrap').children().children('ul').css({color: 'yellow', border: '2px solid'});
    
    // 클래스 명이 wrap인 태그의 자손의 자손의 자손들 중에 li 요소의 스타일 변경
    $('.wrap').children().children().children('li').css({color: 'seagreen', border: '2px solid'});
    
    // 클래스 명이 wrap인 태그의 모든 후손 중 span 태그의 스타일 변경
    $('.wrap').find('span').css({color: 'purple', border: '2px solid'});
    


    // 4. Sideways 메소드
    console.log($('.wrap1>h2').siblings()); // p, span, h3, p

    // h2 태그의 형제 요소들에 스타일 적용
    $('.wrap1>h2').siblings().css({color: 'red', border: '2px solid'});

    // h2 태그의 형제 요소 중 p 태그에 스타일 적용
    $('.wrap1>h2').siblings('p').css({color: 'blue', border: '2px solid'});
    
    // h2 태그의 바로 다음 형제 요소에 스타일 적용
    $('.wrap1>h2').next().css({color: 'green', border: '2px solid'});
    
    // h2 태그의 다음에 오는 모든 형제 요소에 스타일 적용
    $('.wrap1>h2').nextAll().css({backgroundColor: 'aqua'});
    
    // h2 태그 이후부터 p 태그 이전의 모든 형제 요소에 스타일 적용 
    $('.wrap1>h2').nextUntil('p').css('font-size', '3em');
    $('.wrap1>h2').nextUntil('p').css('border', 'dashed');
    
    // h2 태그의 이전 형제 요소에 스타일 적용 // span
    $('.wrap1>h2').prev().css('backgroundColor', 'orange');

    // h2 태그의 이전에 있는 모든 형제 요소에 스타일 적용 // p, span
    $('.wrap1>h2').prevAll().css('backgroundColor', 'hotpink');
    
    // h2 태그 이전부터 p 태그 이후까지의 모든 형제 요소에 스타일 적용
    $('.wrap1>h2').prevUntil('p').css('border', 'dotted');


    // 요소가 있는지 찾는 메소드
    // 선택자로 지정된 범위에 특정한 요소가 존재하는지 찾을 때 사용한다.
    // $('요소 명').is(인자)
    // 선택된 요소의 범위 내에 인자와 동일한 요소가 있으면 true, 없으면 false
    console.log(`$('.wrap1>span').nextAll().is('h4') : ${$('.wrap1>span').nextAll().is('h4')}`); //false
    console.log(`$('.wrap1>span').is('.class1') : ${$('.wrap1>span').is('.class1')}`); // true







});