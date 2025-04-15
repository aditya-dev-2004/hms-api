import { AppointmentTbl } from "../../Entities/AppointmentTbl";
import { Department } from "../../Entities/DepartmentTbl";
import { Doctor } from "../../Entities/DoctorTbl";
import { Patient } from "../../Entities/PatientTbl";

export const getAppoinmentByDoctor = async (req: any, res: any) => {
  const {doctorId}=req.query;
  const queryBuilder = AppointmentTbl.createQueryBuilder('apptbl')
    .select([
      "patient.name","patient.email",  "patient.profile", "patient.gender", "patient.age","patient.bloodGroup", //Patient ka data nikal rhe hai
      "department.name", "department.name",//Department ka data nikal rhe hai
      "doctor.name", "doctor.fees", "doctor.profile", "doctor.specialist",
      "apptbl.id", "apptbl.disease", "apptbl.symptoms", "apptbl.status", "apptbl.appointmentType", "apptbl.date", "apptbl.startTime", "apptbl.payment", "apptbl.createdAt"
    ])
    .leftJoin(Patient, "patient", `apptbl.patientId=patient.id::varchar`)
    .leftJoin(Department, "department", `apptbl.departmentId=department.id::varchar`)
    .leftJoin(Doctor, "doctor", `apptbl.doctorId=doctor.id::varchar`)
    .where('apptbl.doctorId=:doctorId',{doctorId})
    // .orWhere()
    // .limit(1)
    // .offset(2)
    // .orderBy('apptbl.createdAt',"ASC")
    // .addOrderBy
  const result = await queryBuilder.getRawMany()


  res.send(result)
};