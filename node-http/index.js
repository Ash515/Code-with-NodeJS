const http=require('http');
const fs=require('fs');
const path=require('path');

const hostname='localhost';
const port=5000;

const server=http.createServer((req,res)=>{
    console.log("Request for "+req.url+'by method'+req.method);
    
    if(req.method=='GET'){
        var fileUrl;
        if(req.url=='/') fileUrl='/index.html'; // im not giving any filename so it will defaultly assume tht index.html
        else fileUrl=req.url;
        var filepath=path.resolve('./public'+fileUrl);
        const fileext=path.extname(filepath);
        if(fileext=='.html'){
            fs.exists(filepath,(exists)=>{
                    if(!exists){
                        res.statuscode=202;
                        res.setHeader('content-Type','text/html');
                        res.end('<html><body><h1>Error 404:'+fileUrl+' not found </h1></body></html>');

                        return;
                    }
                    else{
                        res.statuscode=202;
                        res.setHeader('contemt-type','text/html');
                        fs.createReadStream(filepath).pipe(res);

                    }
                    
            })
        }else{
            res.statuscode=404;
            res.setHeader('content-Type','text/html');
            res.end('<html><body><h1>Error 404:'+fileUrl+' not an html file </h1></body></html>');
            return;
        }


    }else{
        res.statuscode=404;
        res.setHeader('content-Type','text/html');
        res.end('<html><body><h1>Error 404:'+req.method+' not supported </h1></body></html>');
    }
    
})
server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);

})