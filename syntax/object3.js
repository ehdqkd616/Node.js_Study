var v1 = 'v1';
// 10000 줄의 code
v1 = 'Rudy';
// 중간에 v1 값이 변경될 경우 시스템에 큰 오류를 줄 수 있음
// 때문에 객체를 사용하여 연관된 필드를 묶어서 관리한다.

var v2 = 'v2';

var o = {
    v1:'v1',
    v2:'v2',
    f1:function(){
        console.log(o.v1);
        console.log(this.v1); // 자기 자신을 참조하는 경우 this라는 키워드를 사용한다.
    },
    f2:function(){
        console.log(o.v2);
        console.log(this.v2);
    }
}

function f1(){
    console.log(o.v1);
}
function f1(){
    console.log(o.v2);
}
// 같은 이름으로 함수를 만들면 이전에 선언된 함수는 무시되고 새로운 함수로 대체된다.
// 객체의 키값에 함수를 넣는 것을 통해 이러한 문제를 해결할 수 있다.

function f2(){
    console.log(o.v2);
}

f1();
f2();




