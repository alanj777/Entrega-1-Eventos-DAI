import DecryptToken from "../auth/jwt.js"

export default async function (req,res,next){
    if(!req.headers.authorization){
        res.status(401).send("No tenes acceso a la informaccion");
    }else{
        const token =req.headers.authorization.split(' ')[1]; //Kick innecesidades
        const payload=await DecryptToken(token); //manda tk a jwt, devuelve el payload
        if(payload!=null){
            req.user=payload; //Pide el id del user por request
            next();
        }else{
            res.status(401).send("error en el token") ;
        }
    }
}

//Verify token, si hay = + id token