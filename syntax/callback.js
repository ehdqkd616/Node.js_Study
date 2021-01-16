// function a(){
//     console.log('A');
// }

var a = function(){ // 익명 함수
    console.log('A');
}

// a();

function slowfunc(callback) {
    callback();
}

slowfunc(a); 
// slowfunc의 인자로 a를 전달하였고, a() 함수를 실행하게 된다.
// slowfunc(a)는 결국 a()와 같다.

// JavaScript에서 함수는 곧 값이다.

// callback 함수 : 인자로 함수를 전달하는 것.
// 함수는 곧 값이기 때문에 인자값으로 함수를 전달하면 값을 전달하는 것과 동일한 모양이 된다.
// callback 함수는 함수형태의 매개변수이다.