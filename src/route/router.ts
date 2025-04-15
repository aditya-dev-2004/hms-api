import express from 'express';
import {
    ForgetPassswordController,
    resetPassswordController,
    userLoginController,
    userRegisterController
} from '../Contollers/CommonController/LoginFunctionController';
import { 
    addDepartmentController,
    getDepartmentController
 } from '../Contollers/AdminController/DepartmentController';
import { verifyToken } from '../middleware/Verifytoken';
import { getAppoinmentByDoctor } from '../Contollers/DoctorController/getAppoinmentByDoctor';
import { addapController, GetaddapByPatientController } from '../Contollers/PatientController/BookAppointmentController';
import { getAppByAdmin } from '../Contollers/AdminController/getAppoinmentByAdmin';

export const route = express.Router();
//common route
route.post("/login", userLoginController)
route.post("/register", userRegisterController);
route.post('/forget-password', ForgetPassswordController);
route.post('/reset-password', resetPassswordController);

//admin route
route.post('/admin-add-department',verifyToken, addDepartmentController);
route.get('/admin-get-department',verifyToken, getDepartmentController);
route.get('/get-appointment-by-admin',verifyToken, getAppByAdmin);  // saare appoinments


//doctor route
route.get('/get-appointment-by-doctorId',verifyToken, getAppoinmentByDoctor); // specific doctor ke saare appoinments

//patient route\
route.post('/doctor-appointment-book',verifyToken, addapController);
route.get('/get-appointment-by-patient',verifyToken, GetaddapByPatientController);   // specific patient ke saare appoinments