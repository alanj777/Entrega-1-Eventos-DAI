import express from "express";
import userService from "../Servicios/user-service.js";
import { AuthMiddleware } from "../auth/authMiddleware.js";

const UserService = new userService();

const router = express.Router();

export default router;