var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M; // 객체 M을 모듈화 시켜서 외부에서 실행할 수 있게 만드는 것