// var M = {
//     v:'v',
//     f:function(){
//         console.log(this.v);
//     }
// }

var part = require('./mpart.js'); // 모듈을 변수에 넣음
console.log(part);

// M.f();
part.f(); // 모듈에 있는 객체의 키 값을 이용해 실행.