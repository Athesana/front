// $('#id1').css('color', 'red'); 
// 이 부분은 html에서 라이브러리를 DOM이 다 그려지고 나서 하단부에 적혀있으면 적용되고
// <head> 부분에 있으면 적용되지 않는다.
// 따라서 제이쿼리는 DOM 요소 로드 된 후에 실행되어야 하고
// 그래서 3가지 방법으로 실행해야 한다. 위치가 중요하다.

$(document).ready(function(){
    // 1. 아이디 선택자
    // 애로우 펑션 가능
    // 1) 순수한 자바스크립트를 활용한 방식

    let id1 = document.getElementById('id1');

    id1.style.color = 'red';  // 요소의 속성을 통해서 접근 후 수정한다.

    // 2) jQuery를 활용한 방식
    let id2 = $('#id2');

    id2.css('color', 'hotpink');  // 메소드를 통해서 접근 후 수정한다.

    // 2. 태그 선택자
    // 1) 순수한 자바 스크립트를 활용한 방식
    let p = document.getElementsByTagName('p');  // 배열 객체(p 태그로 만들어진 요소를 담고 있는)를 리턴한다.

    // // 배열이기 때문에 반복문을 사용해서 각 요소에 접근한다.
    for (let index = 0; index < p.length; index++) {
        p[index].style.color = 'white';
        p[index].style.backgroundColor = 'tomato';
        
    }

    // 2) jQuery를 활용한 방식

    let h5 = $('h5');

    h5.css('color', 'white');
    // h5.css('background-color', 'yellowgreen'); // css 속성 가능
    h5.css('backgroundColor', 'yellowgreen'); // 카멜 가능

    // 3. 클래스 선택자
    // 1) 순수한 자바스크립트 활용한 방식
    let items = document.getElementsByClassName('item');  // 배열을 리턴한다.

    for (let index = 0; index < items.length; index++) {
        items[index].style.color = 'orange';
    }

    // 2) jQuery를 활용한 방식
    $('.item').css('color', 'yellow');


    let button = document.getElementById('btn');
    button.addEventListener('click', function(){
        button.innerHTML = '클릭 후';
        // button.innerText = '클릭 후';
        // $("#btn").text('클릭 후');
        button.style.color ='red'; 
    });


});