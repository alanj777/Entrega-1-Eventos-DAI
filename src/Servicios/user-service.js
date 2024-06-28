import { query } from "express";

import userRepository from "../repositories/user-repositories.js"
import login from "../auth/login.js";
const UserRepository= new userRepository();

export default class userService {

    async login(user, pass) {
    try{
    const Usuario= await this.getUserByPayload(user,pass)
    console.log(Usuario)
    if(Usuario!=null){
      const token =await login(Usuario)
      return token;
    }else{
      return "Usuario o Contraseña no existen";
    }
    }catch(error){
      console.log(error);
      return res.json(error);
    }
}

async register(first_name,last_name,username,password)
{
  await UserRepository.registrarse(first_name,last_name,username,password);
  return "Insertado";
}
 async getUserByPayload(user,pass){
    return await UserRepository.getUserByName(user,pass)
  }

}