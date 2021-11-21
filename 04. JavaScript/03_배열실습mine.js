// 1번
function test1(){
    let text1 = document.getElementById('text').value;
    let la1 = document.getElementById('la1').textContent;
    let la2 = document.getElementById('la2').textContent;
    let la3 = document.getElementById('la3').textContent;
    let la4 = document.getElementById('la4').textContent;

    console.log(la1);
    console.log(la2);
    console.log(la3);
    console.log(la4);

    let str1 = la1 + ","+ la2 + ","+ la3 + ","+ la4;
    let str1List = str1.split(',');

    console.log(str1List);

    if (str1List.indexOf(text1) != -1) {
        alert(`입력하신 ${text1}의 위치는 ${str1List.indexOf(text1)} 번째 입니다.`);
    } else {
        alert('존재하지 않습니다.');
    }
};

/*
1번 답안
    <button onclick="arrayTest1();"> 전송 및 처리 </button>

    <script>
        function arrayTest1() {
            var la1 = document.getElementById('la1').innerHTML.split(',');
            var la2 = document.getElementById('la2').innerHTML.split(',');
            var la3 = document.getElementById('la3').innerHTML.split(',');
            var la4 = document.getElementById('la4').innerHTML.split(',');

            var arr = la1.concat(la2, la3, la4);

            var text = document.getElementById('text').value;
            var index = arr.indexOf(text);

            if(index >= 0) {
                alert(`${text}는 배열 index ${index}번째에 존재합니다.`);
            } else {
                alert('존재하지 않습니다.');
            }
        }
    </script>
*/

// 2번
function test2(){
    let stringla1 = document.getElementById('stringla1').textContent;
    let stringla2 = document.getElementById('stringla2').textContent;

    console.log(stringla1);
    console.log(stringla2);
    
    // let la1List = stringla1.split("").reverse();
    let la1List = stringla1.split(' ').join('');
    let arr1 = la1List.split("").reverse();
    // let reverseArr1 = arr1.reverse();

    console.log(la1List);
    console.log(arr1);
    // console.log(reverseArr1);
    
    // let la2List = stringla2.split("").reverse();
    let la2List = stringla2.split(' ').join('');
    let arr2 = la2List.split("").reverse();

    console.log(la2List);
    console.log(arr2);

    // let result = la1List.concat(la2List);
    let result = arr1.concat(arr2);

    console.log(result);
    console.log(typeof(result));  // string

    // p1.innerHTML = `정답 : "${result.join()}"`;
    p1.innerHTML = `정답 : "${result.join("")}"`;


};


/*
2번 답안
    <button onclick="reverseTest();">처리</button>
    
    <script>
        function reverseTest(){
                var stringla1 = document.getElementById("stringla1").innerHTML.split(' ');
                var stringla2 = document.getElementById("stringla2").innerHTML.split(' ');
        
                var data1 = stringla1.reverse();
                var data2 = stringla2.reverse();
        
                var arr = data1.concat(data2);
                var str = arr.join('');
                
                document.getElementById("print").innerHTML = str;
        }
    </script> 

*/


// 3번
let strInputList = new Array();

function input(){
    
    let strInput = document.getElementById('strInput');
    
    strInputList.push(strInput.value);
    
    strInput.value = '';
    
    console.log(strInputList);
};

function test3(){
    let p2 = document.getElementById('p2');
    p2.innerHTML = `출력 : "${strInputList.sort().reverse()}"`;

};

/*
3번 답안
<button onclick="print()">출력</button>

    <script>
        var data = [];

        function input() {
            var strInput = document.getElementById("strInput");

            data.push(strInput.value);

            strInput.value = '';
        }

        function print() {
            var str = '';
            var print2 = document.getElementById("print2");

            data.sort().reverse();

            str = data.join(', ');
            print2.innerHTML = str;
        }
    </script>
*/


// 4번
function test4(){
    let stringla4 = document.getElementById('stringla4').innerHTML;
    console.log(stringla4);
    let la4List = stringla4.split(' ');
    console.log(la4List);
    
    let remove = document.getElementById('remove').value;
    let add = document.getElementById('add').value;

    // let d = la4List.indexOf(remove);
    // let p = la4List.indexOf(add);

    // console.log(la4List[2]); // 당근

    for(let i = 0; i < la4List.length; i++){
        if (la4List[i] === remove){
            la4List.splice(i,1);

            break;
        }
    }
        la4List.push(add);

    p3.innerHTML = `결과-> ${la4List.join(' ')}`;
    // document.getElementById('p3').innerHTML = la4List.join(' ');
};

/*
4번 답안
<script>
    function arrayTest3() {
        var str = document.getElementById("stringla4").innerHTML;
        var arr = str.split(' ');
        var remove = document.getElementById("remove").value;
        var add = document.getElementById("add").value;

        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === remove) {
                arr.splice(i, 1);

                break;
            }
        }

        arr.push(add);

        document.getElementById("print4").innerHTML = arr.join(' ');
    }
</script>
*/