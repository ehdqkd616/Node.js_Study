// library란 재사용 가능한 로직들 혹은 작은 프로그램들

module.exports = {
    // html:function templateHTML(title, list, body, controll){ // HTML 내용을 return 하는 함수
    html:function(title, list, body, controll){ // HTML 내용을 return 하는 함수
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB - ${title}</title>
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
    // },list:function templateList(filelist){ 
    },list:function(filelist){ // list 불러오는 함수
      var list = '<ul>';      
      var i = 0;
      while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        i = i + 1;
      }
      list = list + '</ul>';
      return list;
    }
}