if(process.env.NODE_ENV === 'production'){
    //개발 환경일 때는 prod 파일을
    module.exports = require('./prod')
}else {
    //개발 환경이 아닐, 배포환경일 떄는 dev 파일을
    module.exports = require('./dev')
}