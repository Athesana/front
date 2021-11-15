// 객체 선언

// 자바 스크립트에서 객체 만드는 방법 여러 개 중 - 01. 객체 리터럴을 사용하는 방법 (02. 생성자 함수 03. Object 생성자 함수 04. 클래스로 생성)

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let area = document.getElementById('area1');

    // product라는 객체를 만들어 보자. {} 내에 0개 이상의 속성을 지정하면된다. 할당하는 시점에 객체 리터럴을 보고 객체를 생성한다.
    /*
        속성을 여러 개를 적을 때는 , 로 구분한다. 키는 항상 문자열이고 어떤 조건을 만족하면 ,를 생략할 수 있다. 
        키 값에 문자열이 아닌 숫자형태로 넣을 수도 있는데 실제로는 문자열처럼 변환되어진다.
        값에 숫자를 적어도 실제로는 문자 형태로 저장된다.
    */
    let product = {
        0: '배열 흉내',
        pName: '아이폰 12 미니',
        price: 1000000,
        brand: '삼성',
        brand: '애플',
        spec: ['OLED', 'IOS15']
    };

    // 속성명을 제시할 때 공백이나 특수문자가 들어가야 하는 경우 '', "" 로 묶어야 한다. 
    let user = {
        'user name' : '이산아',
        'age!!' : 20
    }
    
    console.log(product);

    area.innerHTML += `product : ${product} <br><br>`;

    // "속성명", '속성명' 둘 다 가능, [] 대괄호 안에 문자열 형태로 속성을 주니까~
    area.innerHTML += '1. 객체명 ["속성명"]으로 접근하는 방법<br>';
    // area.innerHTML += `product[0] : ${product['0']}`;
    area.innerHTML += `product[0] : ${product[0]} <br>`;
    area.innerHTML += `product['pName'] : ${product['pName']} <br>`;
    area.innerHTML += `product['price'] : ${product['price']} <br>`;
    area.innerHTML += `product['price'] : ${product['brand']} <br>`;
    area.innerHTML += `product['spec'][0] : ${product['spec'][0]} <br>`;
    area.innerHTML += `product['spec'][1] : ${product['spec'][1]} <hr>`;

    area.innerHTML += '2. 객체명.속성명 으로 접근하는 방법<br>';
    // area.innerHTML +=  `product.0 : ${product.0}`; 에러 발생
    // area.innerHTML +=  `product.0 : ${product.'0'}`; 에러 발생
    area.innerHTML +=  `product.pName : ${product.pName}<br>`;
    area.innerHTML +=  `product.price : ${product.price}<br>`;
    area.innerHTML +=  `product.brand : ${product.brand}<br>`;
    area.innerHTML +=  `product.spec[0] : ${product.spec[0]}<br>`;
    area.innerHTML +=  `product.spec[1] : ${product.spec[1]}<hr>`;

    // 공백이나 특수문자가 속성명에 포함되어 있는 경우 대괄호를 이용해서 값을 가져올 수 있다.
    // area.innerHTML += `user.user name : ${user."user name"}` 에러 발생
    // area.innerHTML += `user.user name : ${user.user name}` 에러 발생
    area.innerHTML += `user["user name"] : ${user["user name"]}<br>`
    area.innerHTML += `user['age!!'] : ${user['age!!']}<br>`

});

// 객체의 메소드
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let name = '이산아';

    let puppy = {
        name: '백구',
        kind: '진돗개',
        eat: function(food){
            // 여기는 객체 내부에 있는 메소드, 여기에서 객체의 속성에 접근하려면 this를 사용해야 한다.
            console.log(this.name);
            console.log(`${this.kind} 종류인 ${this.name}가 ${food}을 먹고 있네요~!`);
            console.log(food);
        }
    };

    puppy.eat('닭가슴살');  // 메소드를 호출하는 부분
});

// 객체에 메소드를 속성으로 지정할 수 있는데 (왜냐 함수도 데이터 타입으로 사용할 수 있으니까 이때는 메소드라고 불리게 됨)
// 객체 내부에 있는 메소드에서 속성에 접근하려면 this를 명시적으로 꼭 붙일 것! => 'this.name'이라고 안하고 'name'이라고 하면 백구 아니고 내 이름 나옴
// 동일한 이름의 변수가 있으면 내가 원하는 대로 동작하지 않을 수 있기 때문에 this를 붙일지 말지 잘 확인할 것


// 객체와 반복문
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let game = {
        title: '디아블로2',
        price: 40000,
        supportOS: ['win32', 'win64'],
        service: true
    }

    console.log(game);

    for (const key in game) {
        // console.log(game[key]); // 속성명에 해당하는 값이 문자열로 나온다.
        // console.log(key); // 속성명이 문자열로 나온다.
        console.log(`key: ${key}, game[key] : ${game[key]}`);
    }
});

// 객체의 속성 후가 및 삭제
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {

    // 빈 객체 선언 (객체 안에 name, age, job, whoAreYou 포함하게 됨)
    let student = {};

    // 객체에 속성 추가
    student.name = '홍길동';
    student.age = 20;
    student['job'] = '의적';

    // 객체에 메소드 추가
    // function() 이라고 적은 것은 객체의 메소드를 가르킬 때는 화살표 함수 사용하지 말기 why? window 객체를 가르키기 때문이다.
    student.whoAreYou = function() {
        let str = '';

        for (const key in this) {  // this는 student 객체 자기 자신
            // if(key !== 'whoAreYou'){
            if(typeof(this[key]) !== 'function'){
                str += `${key} : ${this[key]} `; 
            }
        }

        return str;
    }

    console.log(student);
    console.log(student.whoAreYou());
    console.log('job' in student);

    delete(student.job);

    
    console.log(student);
    console.log(student.whoAreYou());
    console.log('job' in student);
});

// 함수(메소드) 내부에서는 객체 자기자신의 속성한테 접근할 때는 this 를 사용합니다.
// 메소드 일 때는 제외하고 다른 속성일 때만 하나의 문자열으로 만들어서 리턴해줘라~

//객체 배열
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let area = document.getElementById('area2');

    // 배열을 사용하지 않았을 경우
    let student1 = {name : '이산아', java : 100, oracle: 100};
    let student2 = {name : '홍길동', java : 70, oracle: 600};
    let student3 = {name : '백구', java : 80, oracle: 90};
    let student4 = {name : '누렁이', java : 70, oracle: 80};
    let student5 = {name : '이몽룡', java : 20, oracle: 20};

    // console.log(student1);
    // console.log(student2);
    // console.log(student3);
    // console.log(student4);
    // console.log(student5);

    // 배열 선언 및 초기화
    let students = [
        {name: '이산아', java: 100, oracle: 100},
        {name: '홍길동', java: 70, oracle: 60}

    ];

    // 배열에 요소 추가

    students.push({name : '백구', java : 80, oracle: 90});
    students.push(student4);
    students.push(student5);
    
    // 배열에 담겨있는 모든 객체에 메소드를 추가(메소드 입장에서는 객체의 속성에 접근하는거기 때문에 this를 붙여야 한다.)
    for (let i = 0; i < students.length; i++) {
        students[i].getSum = function(){
            return this.java + this.oracle;
        };

        students[i].getAvg = function(){
            return this.getSum() / 2;
        };
    }

    console.log(students);

    // 모든 학생의 정보가 담긴 배열을 출력해보자 (이름, 총점, 평균)
    for (const index in students) {
        with(students[index]){
            area.innerHTML += `이름 : ${name}, 총점 : ${getSum()}, 평균 : ${getAvg()} <br><br>`;
            // with 구문 삭제하면 밑에 처럼 이렇게 써야 된다.
            // area.innerHTML += `이름 : ${student[index].name}, 총점 : ${student[index].getSum()}, 평균 : ${student[index].getAvg()} <br><br>`; 
        }
            
        // console.log(this);  여기에서 this는 윈도우를 가르킨다.
    }
    

});


// 생성자 함수

function Student(name, java, oracle) {
    // 속성 정의
    this.name = name;
    this.java = java;
    this.oracle = oracle;

    // // 메소드 정의 (메소드 역시 속성이다.)
    // this.getSum = function(){
    //     return this.java + this.oracle;
    // };

    // this.getAvg = function(){
    //     return this.getSum() / 2;
    // }
}

Student.prototype.getSum = function(){
        return this.java + this.oracle;
    };

Student.prototype.getAvg = function(){
    return this.getSum() / 2;
};


/*
    자바 스크립트는 프로토타입 기반의 객체 지향 언어이다. 
    모든 자바스크립트 객체는 하나의 프로토타입을 상속받을 수 있고, 참조하고 있으며 상위 프로토타입을 가질 수 있다. (프로토타입 체이닝)
    프로토타입은 최종적으로 또 오브젝트 객체를 참조한다.
    중복되는 메소드는 프로토타입 객체로 선언해서 가질 수 있게한다.
    프로토타입은 상위객체 역할을 하고 공유되는 메소드와 속성이 있으면 등록해놓으면 된다.
    특정 생성자로 만드는 함수는 그것으로 만든 생성자에 해당하는 프로토타입 객체를 상속하고 있고, 또 다른 오브젝트의 프로토타입 객체를 참조하는 구조를 가진다.
    공통적으로 사용하는 함수(메소드)를 프로토타입 객체에 추가시켜서 공유하도록 사용하면, 객체를 만들 때마다 함수들이 추가될 일이 없다.
    따라서 불필요한 중복을 제거할 수 있다. 
*/

let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', () => {

    let area = document.getElementById('area3');
    let student = new Student('이산아', 80, 80);
    let students = [];

    students.push(student);
    students.push(new Student('차은우', 100, 100));
    students.push(new Student('김준수', 100, 100));
    students.push(new Student('이몽룡', 40, 40));

    // 생성자 함수로 만들어진 객체의 경우 해당 객체가 어떤 생성자 함수로 생성되었는지 instanceof 연산자로 검사할 수 있다.
    console.log(student instanceof Student);
    console.log(students instanceof Student);

    // 모든 학생의 정보가 담긴 배열을 출력해보자. (이름, 총점, 평균)
    for (const index in students) {
        area.innerHTML +=  `이름 : ${students[index].name}, 총점 : ${students[index].getSum()}, 평균 : ${students[index].getAvg()} <br><br>` 
        
    }

});

// 캡슐화

// 먼저 생성자 함수를 만들자
function IdolGroup(n, m){
    let name = n;
    let members = m;

    // 객체 소멸시까지 let 변수들은 사라지지 않는다. (객체마다 name, members를 참조하고 있기 때문에)

    this.getGroupName = function(){
        return name;
    }

    this.getMembers = function(){
        return members;
    }

    this.getMemberCount = function(){
        return members.length;
    }

    this.setGroupName = function(n){
        name = n;
    }

    this.setMembers = function(m){
        members = m;
    }
}

let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => {
    // 생성자 함수를 이용하여 객체 생성
    let bts = new IdolGroup('방탄소년단', ['지민', '뷔', '정국', 'RM', '슈가', '진', '제이홉']);
    let area = document.getElementById('area4');

    // console.log(bts);
    // console.log(bts.name, bts.members); // undefined 지역 변수로 만들었기 때문에 속성이 아니다! 그래서 정의가 안되서 에러 발생
    console.log(bts.getGroupName(), bts.getMembers(), bts.getMemberCount());
    
    bts.setGroupName('에스파');
    bts.setMembers(['카리나', '지젤', '윈터', '닝닝']);

    area.innerHTML += `그룹명 : ${bts.getGroupName()}, 멤버 : ${bts.getMembers()}, 멤버 수 : ${bts.getMemberCount()} <br><br>` 
});