var a = 1;

// literal은 정보를 표현하는 방법
// 리터럴은 데이터 그 자체를 뜻 한다. 
// 변수에 넣는 변하지 않는 데이터를 의미하는 것이다. 
// int 앞에 final를 붙일 시 , a는 상수가 된다. 여기서의 리터럴은 1이다.
// 즉, 1과 같이 변하지 않는 데이터(boolean, char, double, long, int, etc...)를 리터럴(literal)이라고 부른다.


var name = 'Rudy';

// 코드 상에서만 줄바꿈
var letter = "Dear "+name+"\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + name + " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa Rudy qui officia deserunt mollit anim id est laborum. " + name;
console.log("(코드 상에서만 줄바꿈) \n" + letter);

console.log('\n');

// \n을 이용하여 줄바꿈
var letter = "Dear "+name+"\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + name + " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa Rudy qui officia deserunt mollit anim id est laborum. " + name;
console.log("(\\n을 이용하여 줄바꿈) \n" + letter);

console.log('\n');

// literal Template를 이용하여 줄바꿈
var letter = `Dear ${name} 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa Rudy qui officia deserunt mollit anim id est laborum. ${name}`;
console.log("(literal Template를 이용하여 줄바꿈) \n" + letter);

console.log('\n');