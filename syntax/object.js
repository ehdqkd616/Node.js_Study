var members = ['Rudy', 'Useop', 'HotGarlic'];
console.log(members[1]); // Useop
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer' : 'Rudy',
    'designer' : 'Useop',
    'manager' : 'HotGarlic'
}
console.log(roles.programmer); // Rudy
console.log(roles['programmer']); // Rudy

for(var name in roles){
    console.log('object => ', name, 'value => ', roles[name]); // 객체 필드명, 객체 필드별 값 Or 키, 값
}