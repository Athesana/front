// [배열]
function test1(){
    let area = document.getElementById('area1');
    let arr = [
        '이산아',        // 문자
        20,             // 숫자
        true,           // 불린
        [1, 2, 3, 4],   // 배열
        function(){     // 함수
            return 1;
        },
        {}              // 객체
    ];

    console.log(arr);

    area.innerHTML = arr;
}

// 배열 선언 및 초기화
function test2(){
    let arr1 = new Array();
    let arr2 = new Array(3);
    let arr3 = new Array('빨강', '파랑', '노랑', '초록');  // 값의 나열을 해주면 값 목록으로 배열을 초기화 한다.
    let arr4 = ['java', 'oracle', 'html5', 'css', 'javascript'];
    let area = document.getElementById('area2');

    arr1[0] = '귤';
    arr1[1] = '사과';
    arr1[2] = '딸기';

    area.innerHTML = `arr1에 값 대입 : [${arr1}]<br> arr1.length : ${arr1.length}`;
    area.innerHTML += '<br><br>';

    arr2[0] = '자동차';
    arr2[1] = '비행기';
    arr2[2] = '기차';
    arr2[3] = '배(타는배)';

    area.innerHTML += `arr2에 값 대입 : [${arr2}]<br> arr2.length : ${arr2.length}`;
    area.innerHTML += '<br><br>';

    area.innerHTML += `arr3에 값 대입 : [${arr3}]<br> arr3.length : ${arr3.length}`;
    area.innerHTML += '<br><br>';

    area.innerHTML += `arr4에 값 대입 : [${arr4}]<br> arr4.length : ${arr4.length}`;
    area.innerHTML += '<br><br>';

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

}

// 배열 메소드 테스트
// 1) indexOf() // 값 = 요소, 요소들은 각각 인덱스를 가지고 있다. 
function test3(){
    let arr = ['귤', '복숭아', '딸기', '맹고', '포도'];
    let area = document.getElementById('area3');

    area.innerHTML = `arr : [${arr}] <br><br>`;
    area.innerHTML += `복숭아가 있는 배열의 인덱스 : [${arr.indexOf('복숭아')}] <br>`;
    area.innerHTML += `맹고가 있는 배열의 인덱스 : [${arr.indexOf('맹고')}] <br>`;
    area.innerHTML += `수박이 있는 배열의 인덱스 : [${arr.indexOf('수박')}] <br>`; // 없는 값 : -1 리턴 
}

// 2) concat()
function test4(){
    let arr1 = ['귤', '복숭아', '딸기', '맹고', '포도'];
    let arr2 = ['메론', '키위', '두리안', '망고스틴', '리치', '용안'];
    let area = document.getElementById('area4');

    area.innerHTML = `arr1 : [${arr1}]<br>`;
    area.innerHTML += `arr2 : [${arr2}]<br><br>`;

    area.innerHTML += `arr1 기준으로 배열을 결합 : [${arr1.concat(arr2)}]<br>`;
    area.innerHTML += `원본 arr1 : [${arr1}]<br><br>`; // 원본 배열에는 영향을 미치지 않는다. (원본 배열을 변형시키는 것이 아니라 새로운 배열을 반환해준다.)
    area.innerHTML += `arr2 기준으로 배열을 결합 : [${arr2.concat(arr1)}]<br>`;
    area.innerHTML += `원본 arr2 : [${arr2}]<br>`;
}

// 3) join()
function test5(){
    let arr = ['강남', '역삼', '선릉', '삼성'];
    let area = document.getElementById('area5');

    area.innerHTML += `arr : [${arr}]<br><br>`;
    area.innerHTML += `arr의 자료형 : [${typeof(arr)}]<br><br>`;
    area.innerHTML += `arr.join() : [${arr.join('|')}]<br><br>`; // 값을 넘겨주면 구분자의 용도로 사용한다.
    area.innerHTML += `arr.join()의 자료형 : [${typeof(arr.join())}]<br><br>`;

}


// 4) reverse()
function test6(){
    let arr = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  // ES6부터 추가된 배열 생성 메소드이다.
    let area = document.getElementById('area6');
    
    area.innerHTML += `arr : [${arr}]<br><br>`;
    area.innerHTML += `arr.reverse() : [${arr.reverse()}]<br><br>`;  // 원본 배열에 영향을 미치는 메소드이다.
    area.innerHTML += `arr : [${arr}]<br><br>`;  // 원본 배열이 reverse() 되어있다.
    console.log(arr);
}


// 5) sort()
function test7(){
    let arr1 = [10, 543, 34, 450, 123, 885];
    let arr2 = ['Cherry', 'Apple', 'Banana'];
    let area = document.getElementById('area7');

    area.innerHTML += `arr1 : [${arr1}]<br>`;
    area.innerHTML += `arr2 : [${arr2}]<br><br>`;
    area.innerHTML += `arr1 : [${arr1.sort()}]<br>`; // 원본 배열에 영향을 미치는 메소드이다.
    area.innerHTML += `arr1 : [${arr2.sort()}]<br><br>`; // 원본 배열에 영향을 미치는 메소드이다.
    area.innerHTML += `arr1 : [${arr1}]<br>`;
    area.innerHTML += `arr2 : [${arr2}]<br><br>`;

    // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
    arr1.sort(function(left, right){
        return left - right;  // 함수명이 없는 함수 사용, 오름차순
    });
    area.innerHTML += `arr1 오름차순으로 정렬 : [${arr1}]<br>`;
    
    arr1.sort((left, right) => right - left);  // Arrow Function, 내림차순
    area.innerHTML += `arr1 내림차순으로 정렬 : [${arr1}]<br><br>`;
    area.innerHTML += `arr2 내림차순으로 정렬(arr2.sort().reverse()) : [${arr2.sort().reverse()}]<br><br>`;
    
    // - 한 값이 마이너스면 right가 더 큰 값이라고 인식, left가 더 앞이다. || - 한 값이 플러스면 left가 더 큰 값이라고 인식
    // 함수에서 리턴하는 값을 기준으로 하는데 0보다 작은 값이면 첫번째 매개값이 두번째 매개값보다 앞에 있다. = 오름차순
    // 0보다 큰 값이면 첫번재 매개변수가 두번째 매개변수보다 뒤에 있다고 생각한다. = 내림차순
}


// 6) push(), pop()
function test8(){
    let arr = ['잇지', 'NCT', '방탄소년단', '소녀시대', '아이유'];
    let area = document.getElementById('area8');

    area.innerHTML = `arr : [${arr}]<br><br>`;
    arr.push('레드벨벳');  // push 후 총 요소의 개수를 리턴한다.
    area.innerHTML += `arr의 push 후 : [${arr}]<br><br>`;
    arr.push('박명수');  // push 후 총 요소의 개수를 리턴한다.
    area.innerHTML += `arr의 push 후 : [${arr}]<br><br>`;
    
    arr.pop('박명수');
    area.innerHTML += `arr의 pop 후 : [${arr}]<br><br>`;
    area.innerHTML += `arr의 pop 후 : [${arr.pop()}]<br><br>`;
    area.innerHTML += `arr의 pop 후 : [${arr}]<br><br>`;
}


// 7) shift(), unshift()
function test9(){
    let arr = ['잇지', 'NCT', '방탄소년단', '소녀시대', '아이유'];
    let area = document.getElementById('area9');

    area.innerHTML = `arr : [${arr}]<br><br>`;
    arr.unshift('레드벨벳');  // unshift 후 총 요소의 개수를 리턴한다.
    area.innerHTML += `arr의 unshift 후 : [${arr}]<br><br>`;
    arr.unshift('박명수'); // unshift 후 총 요소의 개수를 리턴한다.
    area.innerHTML += `arr의 unshift 후 : [${arr}]<br><br>`;
    

    area.innerHTML += `arr.shift() : [${arr.shift()}]<br><br>`;
    area.innerHTML += `arr의 shift 후 : [${arr}]<br><br>`;
    area.innerHTML += `arr.shift() : [${arr.shift()}]<br><br>`;
    area.innerHTML += `arr의 shift 후 : [${arr}]<br><br>`;
}

// 8) slice(), splice()
function test10(){
    let arr = ['java', 'db', 'html5', 'css', 'js'];
    let area = document.getElementById('area10');

    area.innerHTML += `arr : [${arr}]<br><br>`;
    area.innerHTML += `arr.slice(2,4) : [${arr.slice(2,4)}]<br><br>`; // 새로운 배열을 만들어서 반환한다.
    area.innerHTML += `arr : [${arr}]<br><br>`; // 원본 배열에는 변화가 없다.
    
    // area.innerHTML += `arr.splice(2, 2) : [${arr.splice(2, 2)}]<br><br>`;
    
    // area.innerHTML += `arr.splice(2, 2, [추가값]) : [${arr.splice(2, 2, 'spring')}]<br><br>`;
    area.innerHTML += `arr.splice(2, 2, [추가값]) : [${arr.splice(2, 0, 'spring')}]<br><br>`;
    // 원하는 위치에 deleteCount 를 0으로 하면 추가값이 삽입되고 하나씩 밀린다.
    area.innerHTML += `arr : [${arr}]<br><br>`; // 원본 배열에 영향을 미치는 메소드이다.
}

//* reduce()

class Student{
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
};

let students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

{
    const result = students.reduce((prev, curr) => {
        console.log('------------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    //const result = students.reduce((prev, curr) => prev + curr.score, 0); 과 같다.
    console.log(result / students.length);
};
