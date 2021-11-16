// 이벤트 모델의 종류
// 1) 고전 이벤트 모델
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.onclick = () => {
    alert('btn1이 클릭되었습니다.');
};

btn2.onclick = () => {
    alert('btn2이 클릭되면서 btn1의 이벤트를 제거하였습니다.');

    btn1.onclick = null;
};

// 2) 인라인 이벤트 모델
function test1(){
    alert('안녕!');
};

// 3) 표준 이벤트 모델
let btn3 = document.getElementById('btn3');


// btn3.addEventListener('click', clickEventHandler()); 
// 웹 브라우저 키자마자 alert('ㅎㅎ') 출력된다.
// 이벤트를 지정하지 않고 함수만 호출한다. 함수 호출이 먼저 되고 반환값이 없어서 결과 값은 undefined 나옴. 
// 이거를 두번째 파라미터 값으로 addEventListener에 전달해줌.
// 반환되는 값이 없어도 매개값 위치에 있으니까 clickEventHandler()가 먼저 실행된다.
// 즉, 매개값이 undefined가 되는 것

btn3.addEventListener('click', clickEventHandler); 
// 함수 자체를 콜백함수로 지정하려면 함수 이름만 적어주면 매개값으로 넘겨주면서 함수의 내용, 함수에 대한 정보를 전달한다.
// 함수명 자체가 레퍼런스 값으로써 함수에 대한 정보이기 때문이다.
// 함수명으로 받아서 내부에서 함수를 호출한다.


// CSS에서의 hover와 같은 역할
btn3.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

btn3.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'green';
});

function clickEventHandler(){
    alert('ㅎㅎ');
    // 반환값이 undefined가 나오는 이유!
    // 함수 정의에서는 return이 있어야 함수를 호출한 구문으로 돌아갈 수 있는데
    // return을 생략하면 undefined가 나온다.
};




// 이벤트가 발생한 해당 요소 객체에 접근하는 방법
// 1) 고전 이벤트 방식
// let btn4 = document.getElementById('btn4');
// btn4.onclick = function(event){
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this);
// };

// 셋다 콘솔에서는 <button id="btn4">고전 이벤트 방식</button> 동일하게 나온다.
// this는 객체 내부에 있는 메소드(function)에서 호출하는 것이기 때문에 객체 자체가 나온다.

// 애로우 펑션으로 바꿔보자.
let btn4 = document.getElementById('btn4');
btn4.onclick = (event) => {
    console.log(event.target); 
    console.log(window.event.target);
    // console.log(this);
};

// 1,2 는 콘솔에서 window 객체로 나온다. 3 객체 내부에 있는 메소드가 아니기 때문에, 애로우 펑션이 정의하고 있는 전체로써 window가 나온다.

// 2) 인라인 방식
function test2(event){
    console.log(event); // 매개값으로 이벤트 객체를 가져올 수 없다.
    console.log(window.event.target);
    console.log(this); // window 객체를 가리킨다.
;}

// 3) 표준 이벤트 방식
let btn5 = document.getElementById('btn5');

// btn5.addEventListener('click', function(event){
//         console.log(event.target);
//         console.log(window.event.target);
//         console.log(this);
// }); 


btn5.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(window.event.target);
    console.log(this);
}); 

// 애로우 펑션에서 this는 윈도우가 나온다.



// 태그별 기본적으로 가지고 있는 이벤트 제거
// 1) 기본 이벤트 제거
// 유효성 validation check!
function test3(){
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    console.log(pass1);
    console.log(pass2);

    // alert('test3()');  // alert 누르면 submit 되어서 console에 찍히는 상태

    if(pass1 !== pass2){
        alert('비밀번호가 일치하지 않습니다.');

        return false;  // 적어주지 않으면 alert은 뜨지만 서버로 값들이 넘어가버림
    }
};

// 기본 이벤트 실행하기 전에 특정 조건을 만족해야 하는 경우 validation check 할 때,
// onclick에서 기본 이벤트 동작하지 않도록 하려면 이벤트 처리 핸들러에서 return false하면 된다.

// 2) 기본 이벤트 제거 2
let submit = document.getElementById('submit');

// 고전 방식
// submit.onclick = () => {
//     alert('아이디를 정상적으로 입력해 주세요.');

//     return false;
// }

// 인라인 방식
// submit.addEventListener('click', () => {
//     alert('아이디를 정상적으로 입력해 주세요.');
    
//     return false;
// });

submit.addEventListener('click', (event) => {
    let userId = document.getElementById('userId').value;
    let regExp = /^[a-zA-z0-9]{5,12}$/;

    console.log(userId);
    // 영문자, 숫자로만 총 5 ~ 12자리 사이로 입력해주세요.

    if (!regExp.test(userId)){
        alert('아이디를 정상적으로 입력해 주세요.');

        event.preventDefault();  // 기본 이벤트를 지워주는 메소드
    }
});
