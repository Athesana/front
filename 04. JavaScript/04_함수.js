
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
) (10, 20);