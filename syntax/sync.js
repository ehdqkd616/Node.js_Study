var fs = require('fs');

/*
// readFileSync 동기적 실행
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/


// asyncronous 비동기적 실행
console.log('A');
var result = fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});

console.log('C');

// syncronous : 동기
// 하나의 프로세스가 끝난 후 다음 프로세스를 진행한다.


// asyncronous : 비동기
// 어떠한 프로세스가 실행되는 것과 별개로 실행된다.
// Nodejs는 비동기적인 프로그래밍에 최적화 되어있다.