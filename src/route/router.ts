import express from 'express';
import { userLoginController } from '../Contollers/CommonController/LoginFunctionController';
export const route=express.Router();
 //common route
route.post("/login",userLoginController)
route.post("/register",userLoginController)
 //admin route


  //doctor route


   //pate route\
   