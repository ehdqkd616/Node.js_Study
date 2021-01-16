var http = require('http');
var fs = require('fs'); // File System 모듈
var url = require('url'); // url 모듈
var qs = require('querystring'); // querystring 모듈

function templateHTML(title, list, body, controll){ // HTML 내용을 return 하는 함수
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${controll}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){ // list 불러오는 함수
  var list = '<ul>';      
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  // console.log(url.parse(_url, true)); // url의 정보
  // console.log(url.parse(_url, true).pathname); // queryString을 제외한 경로

  // console.log("url : " + _url); // url 경로
  // console.log(queryData); // queryString 객체
  // console.log("queryData.id : " + queryData.id); // queryString 객체 중 Key 값이 id인 데이터의 값


  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir('./data', function(error, filelist){
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist);

        // var list = `<ul>
        //   <li><a href="/?id=HTML">HTML</a></li>
        //   <li><a href="/?id=CSS">CSS</a></li>
        //   <li><a href="/?id=JavaScript">JavaScript</a></li>
        // </ul>`;

        var template = templateHTML(title, list, 
          `<h2>${title}</h2>${description}`, 
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else { // id 값이 있는 경우
      fs.readdir('./data', function(error, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list, 
            `<h2>${title}</h2>${description}`, 
            ` <a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post" id="delete_btn">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>`);
          response.writeHead(200);
          response.end(template); 
        });
      });
    }
  } else if(pathname === '/create'){  // /create 글쓰기 폼
    fs.readdir('./data', function(error, filelist){
      var title = 'WEB - create';
      var description = 'Hello, Node.js';
      var list = templateList(filelist);
      var template = templateHTML(title, list, `
        <form action="/create_process" method="post">    
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
              <textarea name="description" placeholder="description" style="resize:none; width:500px; height:200px;"></textarea>
          </p>
          <p>
              <input type="submit">  
          </p>
        </form>
      `, '');
      response.writeHead(200);
      response.end(template);
    });
  } else if(pathname === '/create_process') { // /create_process 글쓰기
    var body = '';

    // request.on 은 웹브라우저가 post 방식으로 데이터를 전송할 때 데이터가 매우 클 수 있기 때문에 
    // 서버쪽에서 수신할 때마다 function(data) 콜백 함수를 호출하도록 권장된다.
    request.on('data', function(data){ 
      body = body + data; // callback 함수가 실행될 때마다 body에 데이터를 추가한다.
    });
    request.on('end', function(){ // 데이터 수신이 끝났을 때 실행되는 함수.
      var post = qs.parse(body);  // post로 전송된 데이터들
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location: `/?id=${title}`}); // 302는 redirect
        response.end('sucess');
      });
    });
  } else if(pathname === '/update') { // /update 폼
    fs.readdir('./data', function(error, filelist){
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var title = queryData.id;
        var list = templateList(filelist);
        var template = templateHTML(title, list, 
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="original_title" value="${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
                <textarea name="description" placeholder="description" style="resize:none; width:500px; height:200px;">${description}</textarea>
            </p>
            <p>
                <input type="submit">  
            </p>
          </form>
          `, 
          ` <a href="/create">create</a>
            <a href="/update?id=${title}">update</a>`);
        response.writeHead(200);
        response.end(template); 
      });
    });  
  } else if(pathname === '/update_process'){  // /update_process 업데이트
    var body = '';
    request.on('data', function(data){ 
      body = body + data; // callback 함수가 실행될 때마다 body에 데이터를 추가한다.
    });
    request.on('end', function(){ // 데이터 수신이 끝났을 때 실행되는 함수.
      var post = qs.parse(body);  // post로 전송된 데이터들
      var original_title = post.original_title;
      var title = post.title;
      var description = post.description;
      fs.rename(`data/${original_title}`, `data/${title}`, function(error){
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){ // 파일 이름의 내용을 변경 후 저장
          response.writeHead(302, {Location: `/?id=${title}`}); // 302는 redirect
          response.end('sucess');
        });
      });
      /*
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location: `/?id=${title}`}); // 302는 redirect
        response.end('sucess');
      });
      */
    });
  } else if(pathname === '/delete_process'){  // /delete_process 삭제
    var body = '';
    request.on('data', function(data){ 
      body = body + data; // callback 함수가 실행될 때마다 body에 데이터를 추가한다.
    });
    request.on('end', function(){ // 데이터 수신이 끝났을 때 실행되는 함수.
      var post = qs.parse(body);  // post로 전송된 데이터들
      var id = post.id;
      fs.unlink(`data/${id}`, function(error){
        response.writeHead(302, {Location: `/`}); // 302는 redirect
        response.end();
      });
    });
  }else{
    response.writeHead(200);
    response.end('Not Found'); 
  }
});
app.listen(3000);


// response.end(fs.readFileSync(__dirname + _url)); // 사용자가 접속한 url에 따라서 파일들을 읽어주는 코드
// response.end(queryData.id); // 화면에 표시되는 내용


// node js를 삳용함으로써 페이지 1개를 사용해서 여러 페이지를 표시할 수 있음.
// 페이지의 재사용, 동적인 페이지 생성으로 원하는 결과 도출해내기 쉬움.