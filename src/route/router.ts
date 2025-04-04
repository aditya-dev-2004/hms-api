import express from 'express';
import {
    ForgetPassswordController,
    resetPassswordController,
    userLoginController,
    userRegisterController
} from '../Contollers/CommonController/LoginFunctionController';

export const route = express.Router();
//common route
route.post("/login", userLoginController)
route.post("/register", userRegisterController);
route.post('/forget-password', ForgetPassswordController);
route.post('/reset-password', resetPassswordController);
//admin route


//doctor route


//pate route\
