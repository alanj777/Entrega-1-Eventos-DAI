import jwt from "jsonwebtoken"
import "dotenv/config"

export default async function (Usuario){
    const options={ //options token
    expiresIn:"3h",
    issuer:"Reifut_Becher"
}   
    const payload = {"id":Usuario.id} //info token, id Payload user
    const token=jwt.sign(payload,process.env.SECRET_KEY,options); //Token info
    return token; //token back
    }