
// 함수 선언
// 1) 선언적 함수
function test1(){
    alert('test1() 함수 실행');
}

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    alert('익명 함수 실행(이벤트 핸들러를 통해 실행)');
});

// 3) 스스로 실행하는 함수
// (
//     function(a,b){
//         document.getElementById('p1').innerHTML = `a : ${a}, b: ${b} (자동으로 혼자 실행)`;
//     } (10, 20)
// )

(
    function(a,b){
        document.getElementById('p1').innerHTML = `a : ${a}, b: ${b} (자동으로 혼자 실행)`;
    } 
) (30, 70);


// 함수의 매개 변수
// 1) 매개 변수
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', (e) => {
    console.log(this);  // 윈도우 객체를 찍어준다.
    console.log(e.target);

    argTest();
    // argTest('안녕하세요.');
    // argTest(); 매개값 전달해주지 않아도 에러 발생하지는 않고 alert에 undefined가 나온다.
    // argTest('안녕하세요.', '반갑습니다.') 매개값보다 많은 값을 전달해도 에러 발생은 안하고 앞에꺼 하나만 나온다.
});

// 매개값이 없으면 아래 함수에 디폴트로 적어놓은 '매개값 없음'이 출력되고
// 매개값이 있으면 작성항 매개값이 alert에 출력된다.
// --> 매개변수 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다. (ES6 부터 도입)

function argTest(value='매개값 없음'){
    alert(value);
};


// 2) arguments
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let result = 0;
    // result = sum(11, 22, 33, 44);
    result = sum(125, 600);

    alert(`sum : ${result}`);
});

function sum(){
    let result = 0;

    console.log(arguments);
    console.log(arguments.length);
    console.log(typeof(arguments));

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
        
    }

    return result;
}

// 3) 매개변수에 this 요소 전달하기
function thisTest(element){
    console.log(this);  // 페이지 내에서 생성된 함수나 전역변수는 윈도우 안에 포함된다. 따라서 함수에서 사용하는 여기에서 this는 윈도우 객체를 가르킨다.
    console.log(element); // 이벤트가 발생했을 때의 이벤트가 발생한 요소
}

// 함수의 리턴
// 1) 일반적인 값 리턴 
function returnTest(){
    let random = ran();

    alert(`random : ${random}`)
}

function ran(){

    return parseInt(Math.random() * 100 + 1);
}

// 2) 익명 함수를 리턴하는 함수

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    let func = returnTest2();

    func();

    // 위는 함수를 변수에 담아서 호출하는 방법
    
    // returnTest2()(); // 익명 함수를 호출하는 방법(직접 호출)
});

function returnTest2(){

    // [클로저]
    // - 내부 함수가 사용하는 외부 함수의 지역변수는 내부 함수가 소멸 할 때까지 소멸되지 않는 특성을 말한다.

    let userName = document.getElementById('userName').value;

    return function(){
        alert(userName + '님 환영합니다.');
    }
}

// 내장 함수
// 1) eval()
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let p2 = document.getElementById('p2');
    let calc = document.getElementById('calc');

    p2.innerHTML += `실제 입력된 값 : ${calc.value} <br>`
    p2.innerHTML += `val() 후 : ${eval(calc.value)} <br>`
});