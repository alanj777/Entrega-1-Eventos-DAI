import express from "express";
import userService from "../servicios/user-service.js";
import { AuthMiddleware } from "../auth/authMiddleware.js";

const UserService = new userService();

const router = express.Router();

router.post("/login", AuthMiddleware, (request, response) => {
  const { username, password } = request.body;

  if (typeof username === "string" && typeof password === "string") {
    const crypto = require('crypto');
    const token = crypto.randomBytes(64).toString('hex');
    const loginToken = UserService.autenticacionUser(username, password, token);
    return response.json(loginToken);
  } else {
    return response.status(400).json("El nombre de usuario y la contraseña deben ser strings.");
  }
});

router.post("/register", (request, response) => {
  const { first_name, last_name, username, password } = request.body;

  if (typeof first_name === "string" && typeof last_name === "string" && typeof username === "string" && typeof password === "string") {
    const registerUser = UserService.registrarseUser(first_name, last_name, username, password);
    return response.json(registerUser);
  } else {
    return response.status(400).json("Todos los campos del registro deben ser strings.");
  }
});

export default router;