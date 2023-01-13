const http = require ('http');
const fs = require ('fs');
let qs = require('qs')

const server = http.createServer(function (req, res){
    if(req.method === 'Get') {
        fs.readFile('./view/register.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else {
        let data='';
        req.on('data',chunk => {
            data += chunk;
        })
        req.on('end',()=>{
            console.log(qs.parse(data));
            return res.end('Register success!');
        })
        req.on('error',()=>{
            console.log('error')
        })
    }
});

server.listen(8080,function (){
    console.log('Server running at localhost:8080')
});