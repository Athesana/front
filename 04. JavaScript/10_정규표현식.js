// 정규 표현식
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let area = document.getElementById('area1');
    // 생성자 함수를 이용한 정규 표현식 객체 생성
    let regExp = new RegExp('script'); // 생성자의 매개값으로 패턴을 문자열로 지정한다.

    // 리터럴을 이용한 정규 표현식 객체 생성
    let regExp2 = /script/;  // 패턴 양쪽에 / 로 작성한다. (시작 기호, 종료 기호)
    let str = 'javascript jqueryscript ajax';
    let str2 = 'java jquery ajax';

    console.log(regExp, typeof(regExp)); // /script/'object' 객체이다.
    console.dir(regExp, typeof(regExp));
    console.log(regExp2, typeof(regExp2)); // /script/'object' 객체이다.
    console.dir(regExp2, typeof(regExp2));

    /*
        RegExp 객체에서 제공하는 메소드
            - 객체.test(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false 리턴
            - 객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열을 리턴, 없으면 null 리턴

        String 객체에서 정규 표현식 객체를 이용하는 메소드
            - 문자열.match(정규식) : 문자열에 정규식 패턴의 값과 일치하는 값을 리턴한다.
            - 문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀값으로 변경한다.
            - 문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 리턴한다.
            - 문자열.split(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 간주하여 배열을 생성하고 리턴한다.       
    */ 

            area.innerHTML = '<h3>정규 표현식 객체 생성</h3>';

    // <RegExp 객체에서 제공하는 메소드>

    // 문자열에 패턴으로 지정한 값이 들어가서 만족하면 true, 없으면 false
    area.innerHTML += `regExp.test(str) : ${regExp.test(str)} <br>`; // true
    area.innerHTML += `regExp.test(str2) : ${regExp.test(str2)} <br>`; // false
    
    // 매개값으로 들어오는 문자열에 내가 지정한 패턴 값이 만족하는 값이 있으면 첫번째 만족하는 값을 리턴, 없으면 null
    area.innerHTML += `regExp.exec(str) : ${regExp.exec(str)} <br>`;  // script  
    area.innerHTML += `regExp.exec(str2) : ${regExp.exec(str2)} <br>`; // null

    // <String 객체에서 정규 표현식 객체를 이용하는 메소드>

    area.innerHTML += `str.match(regExp) : ${str.match(regExp)} <br>`
    area.innerHTML += `str.replace(regExp, '스크립트') : ${str.replace(regExp, '스크립트')} <br>`
    area.innerHTML += `str.search(regExp) : ${str.search(regExp)} <br>`
    area.innerHTML += `str.split(regExp) : ${str.split(regExp)} <br>`

    console.log(str.split(regExp));

});

// 플래그 문자
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let area = document.getElementById('area2');
    let str = 'JAvaScript jQuery Ajax';
    let regExp = /a/;
    let regExp1 = /a/i;
    let regExp2 = /a/g;
    let regExp3 = /a/ig;
    let regExp4 = /a/gi;

    area.innerHTML = '<h3>플래그 문자</h3>';

    // '$&'는 패턴을 만족하는 문자열을 가리킨다.
    // 패턴으로 지정한 소문자 a를 찾을거고 = $& 그의 앞 뒤로 () 를 씌워서 총 '($&)' 의 형태로 replace 시켜보자.
    area.innerHTML += `/a/ : ${str.replace(regExp, '($&)')} <br>`
    area.innerHTML += `/a/i : ${str.replace(regExp1, '($&)')} <br>`
    area.innerHTML += `/a/g : ${str.replace(regExp2, '($&)')} <br>`
    area.innerHTML += `/a/ig : ${str.replace(regExp3, '($&)')} <br>`
    area.innerHTML += `/a/gi : ${str.replace(regExp4, '($&)')} <br>`

    // let str2 = str.replace(regExp4, (match) => {
    //     return '+' + match + '+';
    // });

    // console.log(str2);    
});

let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let regExp;
    let str = '';
    let area = document.getElementById('area3');

    // 반복 검색
    // {m, n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
    // + 는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다.
    // ? 는 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다.

    str = 'a aa aaa aaaa';
    regExp = /a{1,2}/g;

    area.innerHTML = '<h3>반복 검색</h3>';
    area.innerHTML += `/a{1,2}/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /a{3}/g;  // 사실상 {3, 3}이라는 뜻과 같다. 최소 3번 반복되어야 한다.
    area.innerHTML += `/a{3}/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /a{2,}/g; // 앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다. 
    area.innerHTML += `/a{2,}/g : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /a+/g; // {1,} 하나 이상 반복되는 문자열을 모두 바꿔준다. 
    area.innerHTML += `/a+/g : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /a?/g; // {0,1} 최대 1번 이상 반복되는 문자열
    area.innerHTML += `/a?/g : ${str.replace(regExp, '($&)')}<hr>`;
    
    // 앵커 문자 (반복이랑은 별개)
    // 문자열의 앞과 뒤를 구분해 주는 정규 표현식 기호
    // ^ 는 문자열의 시작을 의미한다.
    // $ 는 문자열의 마지막을 의미한다. 
    
    str = 'Javascript\nJquery\nShellscript\nAjax';
    
    area.innerHTML += `<h3>문자열의 앞,뒤 구분</h3>`;
    
    regExp = /^j/ig; // 문자열의 시작이 J인 조건을 만족하는 값들만 찾아서 치환해준다.
    area.innerHTML += `/^j/ig : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /^j/igm; // 문자열의 시작이 J인 조건을 만족하는 값들만 찾아서 치환해준다.
    area.innerHTML += `/^j/ig : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /ipt$/igm;  // ipt로 끝나는 문자열을 선택해서 치환해준다.
    area.innerHTML += `/ipt$/igm : ${str.replace(regExp, '($&)')}<hr>`;

    // OR 검색
    // [...] 내의 문자 중 하나라도 만족, 존재할 경우 

    str = 'Javascript\nJquery\nAjax';
    regExp = /[aj]/ig;
    
    area.innerHTML += `<h3>OR 검색</h3>`;
    area.innerHTML += `/[aj]/ig : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /[^aj]/ig;  // [...] 내의 ^은 not의 의미를 가진다. (주의!) a와 j만 빼고 모두 치환됨 = a, j가 "~아닌" 이라는 뜻
    area.innerHTML += `/[^aj]/ig : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /^[aj]/igm;  // a나 j로 시작하는 문자열을 찾으려면 ^[...] 처럼 대괄호 밖에 작성한다.
    area.innerHTML += `/^[aj]/igm : ${str.replace(regExp, '($&)')}<hr>`;
    
    str = '123 Javascript'; // a~z까지를 의미한다. [...] 내에 - 를 사용해서 범위를 지정한다. 123과 대문자J 제외하고 치환됨, 전역에서 찾는다=g, 대소문자 구분 안한다=ig
    regExp = /[a-z]/g;
    area.innerHTML += `/[a-z]/g : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /[A-Z]/g;
    area.innerHTML += `/[A-Z]/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /[0-9]/g;
    area.innerHTML += `/[0-9]/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /[0-9A-Z]/g;
    area.innerHTML += `/[0-9A-Z]/g : ${str.replace(regExp, '($&)')}<hr>`;

    //임의의 문자열 검색
    // .은 임의의문자 한개를 의미하고, 문자 내용은 무엇이든 상관없다.
    regExp = /..../g;
    area.innerHTML += `<h3>임의의 문자열 검색</h3>`;
    area.innerHTML += `/..../g : ${str.replace(regExp, '($&)')}<br>`;
    
    
});


// 추가 메타 문자
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    let regExp;
    let str = '';
    let area = document.getElementById('area4');

    /* 
        \d : 숫자를 의미한다.
        \D : 숫자가 아닌 문자를 의미한다.
        \w : 영문자 알파벳, 숫자, 언더 스코어(_) 를 의미한다. 
        \W : 영문자 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다. (공백같은 것)
        \s : 공백 문자를 의미한다.(띄어쓰기, 탭, 줄바꿈)
    */
    
    str = 'A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\n나\n다';
    
    regExp = /\d/g;  // /[0-9]/g 와 결과가 같다.
    
    area.innerHTML = `<h3>추가 메타 문자</h3>`
    area.innerHTML += `/\\d/g : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp = /\D/g;  // /[^0-9]/g 와 결과가 같다.
    area.innerHTML += `/\\D/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /\w/g;  // /[a-zA-Z0-9_]/g 와 결과가 같다.
    area.innerHTML += `/\\w/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /\W/g;  // /[^a-zA-Z0-9_]/g 와 결과가 같다.
    area.innerHTML += `/\\W/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /\s/g;  // /[ \n\t]/g 와 결과가 같다. 공백 문자들을 선택한 것
    area.innerHTML += `/\\s/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp = /\S/g;  // /[^ \n\t]/g 와 결과가 같다. 모든 문자 선택
    area.innerHTML += `/\\S/g : ${str.replace(regExp, '($&)')}<br>`;
});