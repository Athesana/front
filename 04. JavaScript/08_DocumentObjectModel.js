// 텍스트 노드가 있는 요소 노드 생성
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    
    // element 생성
    let title = document.createElement('h3');  // h3는 만들고 싶은 태그명
    
    // text node 생성
    let textNode = document.createTextNode('안녕하세요');

    // title.setAttribute('id', 'aa'); 이런식으로 각 태그에 텍스트 노드 속성같은 것을 프로그래밍 언어 적으로 관리할 수 있다.
    
    title.appendChild(textNode);
    document.getElementById('area1').appendChild(title);

    // document.getElementById('area1').innerHTML += '<h3>안녕하세요</h3>'; // 이렇게 작성하는 것과 같음
});


// 텍스트 노드가 없는 요소 노드 생성
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    // element 생성
    let img = document.createElement('img');

    // 속성 지정
    img.src = '../resources/image/flower1.PNG';
    img.setAttribute('width', '150px');
    img.setAttribute('height', '100px');  // 이 때, value도 string 타입이다.
    // img.setAttribute('myAttr', 'P123'); // 그냥 사용자가 필요한 속성 아무렇게나 지정해서도 가능

    document.getElementById('area2').appendChild(img);
    document.getElementById('area2').innerHTML += 
        '<img src="../resources/image/flower2.PNG" width="150px" height="100px" myAttr="P123">';
}); 


// Node 객체 삭제
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', (event) => {
    // 1. document 직접 불러와서 지우기, remove() 메소드 사용
    document.getElementById('area1').remove();

    // 2. 바디 태그 자식 요소 중에서 지우기 (removeChild(지우고 싶은 객체를 넘겨준다. 노드 객체를 전달))
    document.body.removeChild(document.getElementById('area2'));

    // 3. 버튼의 상위 노드한테 자식 노드를 지우라고 하기, 이벤트가 발생한 객체 정보 = 타겟은 버튼3, 버튼의 부모는 body
    // 부모인 body한테 너 자식 중에 있는 area3 없애고 싶어.
    // 제거할 객체를 기준으로 그 상위 객체로 가서 해당 객체를 삭제
    event.target.parentNode.removeChild(document.getElementById('area3'));

});