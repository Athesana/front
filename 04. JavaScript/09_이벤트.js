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


// btn3.addEventListener('click', clickEventHandler() ); 
// 이벤트를 지정하지 않고 함수만 호출한다. 함수 호출이 먼저 되고 반환값이 없어서 undefined 나옴. 이거를 전달해줌.
btn3.addEventListener('click', clickEventHandler); 
// 함수 자체를 콜백함수로 지정하려면 함수 이름만 적어주면 매개값으로 넘겨주게되고 레퍼런스 값이기 때문에 함수의 내용, 함수에 대한 정보를 전달해야 한다.

btn3.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

btn3.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'green';
});

function clickEventHandler(){
    alert('ㅎㅎ');
};

// 이벤트가 발생한 해당 요소 객체에 접근하는 방법
// 1) 고전 이벤트 방식
// let btn4 = document.getElementById('btn4');
// btn4.onclick = function(event){
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this);
// };

let btn4 = document.getElementById('btn4');
btn4.onclick = (event) => {
    console.log(event.target); 
    console.log(window.event.target);
    // console.log(this);
};

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

        return false;
    }
};

// 2) 기본 이벤트 제거 2
let submit = document.getElementById('submit');

// 인라인 방식
// submit.onclick = () => {
//     alert('아이디를 정상적으로 입력해 주세요.');

//     return false;
// }

// 고전 방식
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

        event.preventDefault();
    }
});
