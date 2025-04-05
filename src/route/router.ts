import express from 'express';
import {
    ForgetPassswordController,
    resetPassswordController,
    userLoginController,
    userRegisterController
} from '../Contollers/CommonController/LoginFunctionController';
import { 
    addDepartmentController
 } from '../Contollers/AdminController/DepartmentController';
import { verifyToken } from '../middleware/Verifytoken';

export const route = express.Router();
//common route
route.post("/login", userLoginController)
route.post("/register", userRegisterController);
route.post('/forget-password', ForgetPassswordController);
route.post('/reset-password', resetPassswordController);

//admin route
route.post('/admin-add-department',verifyToken, addDepartmentController);

//doctor route


//pate route\
