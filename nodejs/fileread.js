var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function(err, data){
    console.log(data);
});


// F:\PC Study\2020 PC Study\GitHub\Node.js_Study>에서 node nodejs\fileread.js 를 했을 때
// 'sample.txt' 파일을 node 명령어를 한 디렉토리에서 찾기 때문에 undefined 이다.
// sample.txt 를 실행하기 위해서는 현재 디렉토리를 sample.txt 파일이 있는 디렉토리로 위치시켜줘야 한다.