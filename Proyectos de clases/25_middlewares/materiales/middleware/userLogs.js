const fs=require('fs');


function userLogs(req,res,next){
    fs.appendFileSync('userLogs.txt',"El usuario ingresó a la ruta: " + req.url + "\n")// /n es para que ponga un dato abajo del otro

    next();
}

module.exports=userLogs;
