// 1. 변수와 자료형
// 1)변수 테스트
// 전역 변수 선언

str1 = '전역변수';
// 함수 외부에 선언한 변수는 var를 붙여도 전역변수이다.
var str2 = 'var 전역변수';

/*
    [onload] ***** 다시 정리!
    브라우저가 위->아래로 그릴 때 script를 만나면 포함시키면서 실행시킨다.
    head에 있으면 body를 그리기도 전에 스크립트 내용을 그려야 해서 오류가 난다.
    그래서 보통 <script>를 <body>의 마지막에 기재를 하지만, 
    script도 여러 개 일수도 있고 포함되는 순서에 따라서 동작이 안될수도 있고 하기 때문에
    더욱 확실하게 하기 위해서 onload를 사용하는 것이다.

    함수를 정의해서 onload에 담아놓고
    <body> ~ </html> 끝나면 window.onload의 내용을 실행시킨다.
    즉, html 문서 -> css 다 읽어서 화면을 그린 다음 onload의 내용을 실행시킨다.

    스타일 다 가져오고 나면 브라우저가 변수들을 알기 때문에 onload에 담겨 있던 변수들을 
    load가 다 되고 나서 실행하도록 만드는 이벤트 핸들러이다.
*/
// window : 웹 브라우저 창에 대한 내용을 담고 있는 객체
// onload : 이벤트 핸들러 , 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 함수를 구현 할 때 사용한다.
// 사용자 입력하는 것 제외하고도 페이지에 대한 이벤트가 발생할 경우 이벤트 핸들러=함수를 등록해서 처리할 수 있다.
window.onload = function(){
    var str1 = '지역변수1';
    var str3 = '지역변수2';
    var str4;

    console.log(str1); // 지역변수1
    console.log(this.str1); // 전역변수
    console.log(window.str1); // 전역변수

    console.log(str2); // var 전역변수
    console.log(this.str2); // var 전역변수
    console.log(window.str2); // var 전역변수

    console.log(str3); // 지역변수2
    console.log(this.str3); // undefined
    console.log(window.str3); // undefined

    console.log(str4); // undefined

    console.log('-------------------------------------------------');
    // var, let, const
    // 1) 중복 선언 가능 여부
    var num = 0;
    console.log(num);

    var num = 10;
    console.log(num);

    var num = 20;
    console.log(num);

    // var는 중복선언이 가능하고, 가장 마지막에 선언된 값으로 출력된다.

    let num2 = 10;
    console.log(num2);

    // let num2 = 20;
    // console.log(num2);

    // let은 중복선언이 불가능하다.(SyntaxError: Identifier ~ has already beed declared 오류)
    // var에 비해서 안정성이 있다.

    const num3 = 10;
    console.log(num3);

    // const num3 = 20;
    // console.log(num3);

    // const는 중복선언이 불가능하다.(SyntaxError: Identifier ~ has already beed declared 오류)
    // var에 비해서 안정성이 있다.


    // num3 = 20; // (Assignment to constant variable.) 상수이기 때문에 값의 재할당이 불가능하다.

    console.log('-------------------------------------------------');

    // 2) 유효 범위(스코프)
    // 함수 안에서 선언된 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다. (크게는 window의 하위)
    // if 밖에서 호출해도 큰 function 안에 있기 때문에 함수 안에서 사용/호출이 가능하다.
    if(true){
        var num4 = 10;

        console.log(num4);
    }

    console.log(num4);

    // 함수 안에서 let, const 키워드로 선언된 변수는 블록 레벨 스코프, 블록 유효 범위를 갖는다.
    // 유효 블록이 if블록 이기 때문에 이 {}블록을 빠져나가면 사용할 수 없는 변수가 된다.
    if(true){
        let num5 = 20;
        const num6 = 30;

        console.log(num5);
        console.log(num6);
    }

    // console.log(num5); Uncaught ReferenceError: num5 is not defined
    // console.log(num6); Uncaught ReferenceError: num6 is not defined
}

// 2) 자료형 테스트
function typeTest(){
    let name = '이산아'; // 문자열
    let age = 20; // 숫자
    let height = 158.8; // 숫자
    let check = false;
    let hobbies = ['축구', '야구', '농구']; // 배열 = 객체
    // 리터럴로 생성한 객체 만들어서 user에 대입
    let user = {
        name: '이산아',
        age: 20,
        height: 158.8,
        id: 'justsnaa',
        // hobbies: ['축구', '야구', '농구']
        // hobbies: hobbies
        hobbies
    }; 
    // 함수를 만들어서 변수에 대입
    let testFunction = function(num1, num2){
        alert(num1 + num2);
    };

    // testFunction(10,20);
    // testFunction(); // NaN 팝업창 뜬다.

    // console.log(hobbies);
    // console.log(user);
    // console.log(testFunction); // 함수 내용을 콘솔에 출력하는 것, X 함수 호출 X

    let area = document.getElementById('area1');

    // typeof()는 함수 아니고 연산자임, 값의 자료형을 확인한다.
    // 변수 선언 시 자료형을 지정하지 않기 때문에 변수명만으로는 데이터의 자료형을 확인할 수 없다.
    // 따라서 변수의 자료형을 확인 하려면 typeof() 연산자를 사용해야 한다.
    area.innerHTML = '<h4>안녕하세요.</h4>'
    area.innerHTML += `${name}, ${typeof(name)} <br>`
    area.innerHTML += `${age}, ${typeof(age)} <br>`
    area.innerHTML += `${height}, ${typeof(height)} <br>`
    area.innerHTML += `${check}, ${typeof(check)} <br>`
    area.innerHTML += `${hobbies}, ${typeof(hobbies)} <br>`
    area.innerHTML += `${user}, ${typeof(user)} <br>`
    area.innerHTML += `${testFunction}, ${typeof(testFunction)} <br>`
}

function opTest(){
    let num1 = 10 / 0; // Infinity = 양의 무한대, -Infinity = 의 무한대, 인피니티도 숫자를 표현하는 값 중의 하나
    let num2 = 10 / 'a'; // NaN : 산술 연산이 불가능
    let area = document.getElementById('area2');

    area.innerHTML = `10 / 0 : ${num1} <br>`; 
    area.innerHTML += `10 / a : ${num2} <br>`; 
    area.innerHTML += `num1 == Infinity : ${num1 === Infinity} <br>`; 
    area.innerHTML += `isFinite(num1) : ${isFinite(num1)} <br>`;
    // area.innerHTML += `num2 == NaN : ${num2 === NaN} <br>`; isNaN으로 판별해야 한다.
    area.innerHTML += `isNaN(num2) : ${isNaN(num2)} <br>`; 
}

//-----------------------------------------------------

// 2. 데이터 형변환
// 1) 문자열과 숫자의 '+' 연산
function testPlus(){
    let test1 = 7 + 7;  // 14
    let test2 = 7 + '7'; // '77'
    let test3 = '7' + 7;  // '77'
    let test4 = '7' + '7'; // '77'
    let test5 = 7 + 7 + '7';  // '147'
    let test6 = 7 + '7' + 7;  // '777' 
    let test7 = '7' + 7 + 7;  // '777'
    let test8 = '7' + (7 + 7);  // '714'
    // 더하기 연산자를 제외한 나머지 연산자들은 산술연산자의 역할만 한다. 따라서 피연산자는 무조건 숫자형태다라고 생각하고 형변환해버림
    let test9 =  7 * '7';  // 49 
    let test10 = '7' - 3;  // 4
    let test11 = 4 / '2' + 3;  // 5
    let test12 = '3' * '7';  // 21
    let test13 = '3' * 'a'; // NaN

    let area = document.getElementById('area3');

    area.innerHTML = `test1 : ${test1} <br>`;
    area.innerHTML += `test2 : ${test2} <br>`;
    area.innerHTML += `test3 : ${test3} <br>`;
    area.innerHTML += `test4 : ${test4} <br>`;
    area.innerHTML += `test5 : ${test5} <br>`;
    area.innerHTML += `test6 : ${test6} <br>`;
    area.innerHTML += `test7 : ${test7} <br>`;
    area.innerHTML += `test8 : ${test8} <br>`;
    area.innerHTML += `test9 : ${test9} <br>`;
    area.innerHTML += `test10 : ${test10} <br>`;
    area.innerHTML += `test11 : ${test11} <br>`;
    area.innerHTML += `test12 : ${test12} <br>`;
    area.innerHTML += `test13 : ${test13} <br>`;
}


// 2) 강제 형변환
function castingTest(){
    let area = document.getElementById('area4');

    area.innerHTML = `${2 + '3'} <br>`;  // 23
    area.innerHTML += `${2 + Number('3')} <br>`;  //5
    area.innerHTML += `${String(2) + Number('3')} <br>`;  23
    area.innerHTML += `${2 + parseInt('3')} <br>`;  // 5
    area.innerHTML += `${2 + parseFloat('3')} <br>`;  // 5
    area.innerHTML += `${parseInt('0xff', 16)} <br>`;  // 255
}










// ----------------------------------------------------