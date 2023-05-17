let http = require('http')
let url=require('url')
let StringDecoder=require('string_decoder').StringDecoder;
let server = http.createServer(function (req, res) {
    let decoder=new StringDecoder('utf-8')
    let buffer=''
    req.on('data',function (data) {
        buffer+=decoder.write(data)
    })
    req.on('end',function (end) {
        buffer+=decoder.end()
        res.end('hello node js')
        console.log(buffer)
    })


})
server.listen(3000,()=>{
    console.log('server running')
})