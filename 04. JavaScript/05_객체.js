// 객체 선언

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let area = document.getElementById('area1');

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

    area.innerHTML += '객체명 ["속성명"]으로 접근하는 방법<br>';
    // area.innerHTML += `product[0] : ${product['0']}`;
    area.innerHTML += `product[0] : ${product[0]} <br>`;
    area.innerHTML += `product['pName'] : ${product['pName']} <br>`;
    area.innerHTML += `product['price'] : ${product['price']} <br>`;
    area.innerHTML += `product['price'] : ${product['brand']} <br>`;
    area.innerHTML += `product['spec'][0] : ${product['spec'][0]} <br>`;
    area.innerHTML += `product['spec'][1] : ${product['spec'][1]} <hr>`;

    area.innerHTML += '객체명.속성명 으로 접근하는 방법<br>';
    // area.innerHTML +=  `product.0 : ${product.0}`; 에러 발생
    area.innerHTML +=  `product.pName : ${product.pName}<br>`;
    area.innerHTML +=  `product.price : ${product.price}<br>`;
    area.innerHTML +=  `product.brand : ${product.brand}<br>`;
    area.innerHTML +=  `product.spec[0] : ${product.spec[0]}<br>`;
    area.innerHTML +=  `product.spec[1] : ${product.spec[1]}<hr>`;

    // 공백이나 특수문자가 속성명에 포함되어 있는 경우 대괄호를 이용해서 값을 가져올 수 있다.
    // area.innerHTML += `user.user name : ${user."user name"}` 에러 발생
    area.innerHTML += `user['user name'] : ${user["user name"]}<br>`
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
            console.log(this.name);
            console.log(`${this.kind} 종류인 ${this.name}가 ${food}을 먹고 있네요~!`);
            console.log(food);
        }
    };

    puppy.eat('닭가슴살');
});

// 객체에 메소드를 속성으로 지정할 수 있는데 (왜냐 함수도 데이터 타입으로 사용할 수 있으니까 이때는 메소드라고 불리게 됨)
// 객체 내부에 있는 메소드에서 속성에 접근하려면 this를 명시적으로 꼭 붙일 것! => 'this.속성명' 안 붙이면 백구 아니고 내 이름 나옴


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

    // 빈 객체 선언
    let student = {};

    // 객체에 속성 추가
    student.name = '홍길동';
    student.age = 20;
    student['job'] = '의적';

    // 객체에 메소드 추가
    student.whoAreYou = function() {
        let str = '';

        for (const key in this) {
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