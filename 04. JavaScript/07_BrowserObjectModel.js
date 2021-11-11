let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    // window.open();  // about:blank 빈 페이지 오픈
    // window.open('http://www.naver.com');
    // window.open('http://www.naver.com', 'naver'); // 창 이름이 같은 경우 새 창을 띄우는 것이 아니라 같은 창에서 다른 페이지로 랜딩

    // 특성의 경우 브라우저마다 다르게 동작하기 때문에 정상적으로 동작하는지 꼭 확인할 것!
    window.open('http://www.naver.com', 'naver', 'width=500', 'height=600', 'resizeable=no');


});

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    let newWindow = window.open();  // 윈도우 오픈을 해서 나온 새 창 = 윈도우 객체 에서 얼럿 메소드를 활용해서 알림을 띄운다.
    let timerId = 0;
    
    newWindow.alert('3초 후에 이 페이지는 종료됩니다.');
    // alert은 사용자가 응답할 때까지 흐름이 멈춰있다.

    // newWindow.opener.close();  // 윈도우 객체를 오픈하게 해준 오프너(앞 탭의 페이지)를 닫게 한다.

    // 일정 시간 후에 콜백함수를 한 번 실행
    // setTimeout은 밀리초 단위로 작성한다. 생략하면 0으로 사용된다.
    timerId = window.setTimeout(() => {
                newWindow.close()
            }, 3000);

    console.log(timerId);

    // 타이머 id를 전달하면 해당 id의 타이머를 취소할 수 있다. 윈도우 창이 닫히지 않는다. 
    // clearTimeout(timerId);
});

// 3) window.setInterval()
let timerId = 0;
let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');

btnStart.addEventListener('click', () => {
    let area = document.getElementById('area1');
    
    // 일정 시간(1초)마다 콜백 함수를 반복 실행
    timerId = window.setInterval(() => {
        let date = new Date();
        
        area.innerHTML = `<span id='timer'>${date.getHours()} : ${date.getMinutes()} : 
                            <span id='second'>${date.getSeconds()}</span></span>`;
    }, 1000);
    
    
});


btnStop.addEventListener('click', () => {
    let area = document.getElementById('area1');
    console.log(timerId);

    window.clearInterval(timerId);
    area.innerHTML = '';
})


// BOM
// 1) location 객체
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let area = document.getElementById('area2');

    area.innerHTML = '<h4>location 객체</h4>';

    for (const key in location) {
        area.innerHTML += `<b>key</b> : ${key}<br><b>value</b> : ${location[key]}<br><br>`;
    }

});


// 3) navigator 객체
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
    let area = document.getElementById('area3');

    console.log(navigator);

    area.innerHTML = '<h4>navigator 객체</h4>';

    for (const key in navigator) {
        area.innerHTML += `<b>key</b> : ${key}<br><b>value</b> : ${navigator[key]}<br><br>`;
    }
});

// 4) screen 객체
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let area = document.getElementById('area4');

    console.log(screen);

    area.innerHTML = '<h4>screen 객체</h4>';

    for (const key in screen) {
        area.innerHTML += `<b>key</b> : ${key}<br><b>value</b> : ${screen[key]}<br><br>`;
    }
});
