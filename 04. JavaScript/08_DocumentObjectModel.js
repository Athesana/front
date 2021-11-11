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