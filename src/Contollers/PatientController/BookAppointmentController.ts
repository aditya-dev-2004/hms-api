import { AppointmentTbl } from "../../Entities/AppointmentTbl";
import { createResponse } from "../../Helpers/createResponse";

export const bookAppointmentController = async (req: any, res: any) => {
    try {
        const { patientId,departmentId,doctorId,disease,symptoms,payment,appointmentType,date,startTime }=req.body;
        
       const result= await  AppointmentTbl.save({ patientId,departmentId,doctorId,disease,symptoms,payment,appointmentType,date ,startTime}) 
       return createResponse(res, 201, "Appointment Booked Successfully !", result, true, false)
    } catch (err: any) {
        return createResponse(res, 500, "Internal server error", [], false, true)
    }  ///dfgfd
}
 
//http://localhost:8000/v1/api/doctor-appointment-book

// {
//     "patientId":"8b68df72-4bf4-4102-9f5a-db5ca40f0436",
//     "departmentId":"182dcabb-6022-437c-8acc-595363f0ff9d",
//     "doctorId":"2e1368a5-ab79-42b9-aef1-ce0ea926c32e",
//     "disease":"fever",
//     "symptoms":"feeling cool",
//     "payment":"100",
//     "appointmentType":"General",
//     "date" :"2025-04-10",
//     "startTime":"10:00"
//     }