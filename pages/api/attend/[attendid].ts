import { NextApiRequest, NextApiResponse } from 'next';
import { Attendance } from '../../../models/attendanceModel';
import connectMongo from '../../../utils/connectMongo';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const  {attendid }  = req.query;
    if (typeof attendid !== 'string') {
        throw new Error('Invalid Id');
    }

    if (!attendid) {
        throw new Error('Missing Id');
    }
   
    switch (req.method) {
        case 'GET':
            return getAttendanceById(attendid );
        case 'PUT':
            return updateAttendance(attendid);
        case 'DELETE':
            return deleteAttendance(attendid);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    async function getAttendanceById(id:string){
        try {
        console.log(id);
        await connectMongo();
        const attendance = await Attendance.findById({_id:id});
        return res.status(200).json(attendance);
       }
       catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    }

    async function updateAttendance(id:string){
        try {
            await connectMongo();

            await Attendance.findOneAndUpdate({_id:id}, req.body);
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }

    }

    async function deleteAttendance(id:string){
        try {
            await connectMongo();

            await Attendance.deleteOne({_id:id});
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }
    }

}
