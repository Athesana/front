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


}
