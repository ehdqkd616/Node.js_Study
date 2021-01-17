// array, object
// JavaScript에서 처리방법을 그룹핑하는 함수 조차도 데이터 이기때문에 배열과 객체에 담을 수 있다.
// JavaScript에서 함수는 State 이면서, 처리방법을 담고 있으며, 값이 될 수 있다.
// 함수란 서로 연관된 데이터를 그룹핑하는 객체

var f = function(){
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f();

// 배열의 원소로서 함수가 존재할 수 있다.
var a = [f];
a[0]();

var o = {
    fucn:f
}
o.fucn();

// if 조건문은 값이 될 수 없다.
// var i = if(true){console.log(1)}

// while이라는 상태는 값이될 수 없다.
// var w = while(true){console.log(1)}