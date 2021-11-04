function external(){
    var result = add(10,20);

    console.log('result : ' + result)
}



function add(x,y){
    console.log('01_개요.js의 add() 호출');
    return x + y;
}

// 변수의 타입은 실제 데이터가 변수에 대입될 때 타입이 결정된다.