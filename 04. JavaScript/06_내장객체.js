// Object 객체

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    // Object 객체 생성하는 방법
    let obj1 = {};   // 리터럴 형태로 만드는객체
    let obj2 = new Object();  // Object 생성자 함수로 만드는 객체
    let obj3 = {name: '홍길동', height: 165};

    console.log(obj1);
    console.log(obj2);

    console.log('---------------------------------------')
    console.log(obj1 instanceof Object);  // true
    console.log(obj2 instanceof Object);  // true 

    // 매개값으로 전달되는 속성을 가지고 있는지 확인하는 메소드로 true, false를 리턴한다.
    console.log('---------------------------------------')
    console.log(obj3.hasOwnProperty('name'));  // true
    console.log(obj3.hasOwnProperty('height'));  // true
    console.log(obj3.hasOwnProperty('weight'));  // false

    // for in 반복문을 통해서 속성에 접근이 가능하고 나열이 가능한지 여부
    console.log('---------------------------------------')
    console.log(obj3.propertyIsEnumerable('name'));  // true

    for(const key in obj3){
        console.log(`key : ${key}, value : ${obj3[key]}`);
    }

    // 아래의 구문 실행 시 for in 반복문을 통해 접근이 불가능하게 만든다. (쓸 일 거의 없음)
    Object.defineProperty(obj3, 'name', { enumerable: false});

    console.log('---------------------------------------')
    console.log(obj3.propertyIsEnumerable('name'));
    for(const key in obj3){
        console.log(`key : ${key}, value : ${obj3[key]}`);
    }

});


// Number 객체
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let area = document.getElementById('area1');
    let num1 = 3141592;
    let num2 = Number(3.141592); // Number() 생성자를 쓰긴 했어도 new 키워드 쓰지 않아서 그냥 숫자값 반환됨 
    let num3 = new Number(3.141592);

    area.innerHTML += `num1의 값 : ${num1}, num1 instanceof Number : ${num1 instanceof Number}, typeof(num1) : ${typeof(num1)} <br>`;
    area.innerHTML += `num2의 값 : ${num2}, num2 instanceof Number : ${num2 instanceof Number}, typeof(num2) : ${typeof(num2)} <br>`;
    area.innerHTML += `num3의 값 : ${num3}, num3 instanceof Number : ${num3 instanceof Number}, typeof(num3) : ${typeof(num3)} <hr>`;

    // 지수 표기법으로 변경한 문자열을 리턴한다.
    area.innerHTML += `num1.toExponential() : ${num1.toExponential()}, <br> typeof(num1.toExponential()) : ${typeof(num1.toExponential())} <hr>`;

    // 숫자를 반올림하여 문자열로 리턴한다.
    area.innerHTML += `num2.toFixed(2) : ${num2.toFixed(2)}, typeof(num2.toFixed(2) : ${typeof(num2.toFixed(2))})<br>`
    area.innerHTML += `num2.toFixed(2) : ${num2.toFixed()}<hr>`; // 매개값 주지 않으면 소수점 기준으로 반올림해서 정수만 나온다.

    // 매개값으로 전달받은 자리수까지 유효하도록 나머지 자리수를 반올림하여 문자열로 리턴한다.
    area.innerHTML += `num3.toPrecision() : ${num3.toPrecision()}, typeof(num3.toPrecision()) : ${typeof(num3.toPrecision())}<br>`;
    area.innerHTML += `num3.toPrecision(4) : ${num3.toPrecision(4)}, typeof(num3.toPrecision(4)) : ${typeof(num3.toPrecision(4))}<br>`;
    area.innerHTML += `num3.toPrecision(2) : ${num3.toPrecision(2)}, typeof(num3.toPrecision(2)) : ${typeof(num3.toPrecision(2))}<br>`;
    area.innerHTML += `num3.toPrecision(1) : ${num3.toPrecision(1)}, typeof(num3.toPrecision(1)) : ${typeof(num3.toPrecision(1))}<br>`;
    area.innerHTML += `num1.toPrecision(1) : ${num1.toPrecision(1)}, typeof(num1.toPrecision(1)) : ${typeof(num1.toPrecision(1))}<hr>`;
});

// String 객체
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let area = document.getElementById('area2');
    let str1 = 'javascript';  // 문자열
    let str2 = new String('javascript');  // String 객체, 글자 하나하나가 배열 index[0]~ 부터 담긴다.
    
    console.log(str1);
    console.log(str2);
    
    // 문자열을 태그로 감싸는 메소드
    area.innerHTML += `기본값 : ${str1}<br><br>`;
    area.innerHTML += `str1.bold() : ${str1.bold()}<br>`
    area.innerHTML += `str1.italics() : ${str1.italics()}<br>`
    area.innerHTML += `str1.fontcolor('red') : ${str1.fontcolor('red')}<br>`
    area.innerHTML += `str1.link('주소') : ${str1.link('http://www.naver.com')}<br>`
});


// Date 객체
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    let area = document.getElementById('area3');

    // Date 객체를 생성하는 방법
    let date1 = new Date();
    let date2 = new Date(1636591301452); // 밀리세컨 단위로 날짜를 표시해준다. 1970년 1월 1일 00시 기준으로 매개값 (= 1)으로 전달한 밀리초 단위로 계산한다. 내부 값을 갖고 출력은 날짜 시간 정보로 출력됨
    let date3 = new Date('2021/11/11/09:28:00'); // 날짜와 시간 정보를 문자열로 전달 시 -> 지정된 날짜와 시간을 받는 date 객체 생성, 해석 가능한 형식으로 작성할 것
    let date4 = new Date(2021, 10, 11, 9, 31, 59); // 월은 0부터 시작이라서 출력하고 싶은 월-1 해야함.

    console.log(date1);

    area.innerHTML = '';
    area.innerHTML += `date1 : ${date1}<br>`;
    area.innerHTML += `date2 : ${date2}<br>`;
    area.innerHTML += `date3 : ${date3}<br>`;
    area.innerHTML += `date4 : ${date4}<hr>`;

    // Date 객체의 메소드 호출
    area.innerHTML += `${date1.getFullYear()}<br>`;
    area.innerHTML += `${date1.getMonth() + 1}<br>`; // 월은 0부터 시작
    area.innerHTML += `${date1.getDate()}<br>`;
    area.innerHTML += `${date1.getDay()}<br>`; // 0부터 시작, 0 : 일요일, 6 : 토요일
    area.innerHTML += `${date1.getHours()}<br>`;
    area.innerHTML += `${date1.getMinutes()}<br>`;
    area.innerHTML += `${date1.getSeconds()}<br>`;
    area.innerHTML += `${date1.getMilliseconds()}<hr>`;

    // 1970년 1월 1일 00시를 기준으로 현재 시간에 대한 밀리 세컨드 값을 반환한다.
    area.innerHTML += `${date1.getTime()}<br>`;
    area.innerHTML += `${date1.getTimezoneOffset() / 60}<br>`; // UTC 표준시 - 로컬로 표시된 시간 = 시간차이를 분단위로 반환
    area.innerHTML += `${date1.toDateString()}<br>`;
    area.innerHTML += `${date1.toTimeString()}<br>`;
    area.innerHTML += `${date1.toUTCString()}<br>`;
    area.innerHTML += `${date1.toISOString()}<br>`;
    area.innerHTML += `${date1.toLocaleString()}<br>`;
    area.innerHTML += `${date1.toLocaleDateString()}<br>`;
    area.innerHTML += `${date1.toLocaleTimeString()}<br>`; // 시간 정보만
    area.innerHTML += `${date1.toLocaleString('en-US')}<br>`;
    area.innerHTML += `${date1.toLocaleDateString('en-US')}<br>`;
    area.innerHTML += `${date1.toLocaleTimeString('en-US')}<br>`;



});