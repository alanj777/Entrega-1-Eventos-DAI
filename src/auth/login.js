import jwt from "jsonwebtoken"
import "dotenv/config"

export default async function (Usuario){
    const options={ //opciones token
    expiresIn:"3h",
    issuer:"jolo"
}   
    const payload = {"id":Usuario.id}
    const token=jwt.sign(payload,process.env.SECRET_KEY,options); 
    return token; //obtengo Token
}
