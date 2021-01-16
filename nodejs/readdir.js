var testFolder = 'data'; // node readdir.js 를 실행할 때 현재 디렉토리 기준으로 경로 지정
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});

// 지정한 디렉토리의 파일 리스트를 load 하여 배열로 return 해준다.