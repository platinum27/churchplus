import { NextApiRequest, NextApiResponse } from 'next';
import { Attendance } from '../../../models/attendanceModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    await connectMongo();
    const { attDate, 
        eventType,
        male,
        female
       } = req.body;


    // const existingMember = await Member.findOne({ firstName,lastName,middleName })

    // if (existingMember) {
    //   return res.status(422).json({ error: 'Member Already Registered' });
    // }

    

    const attendance = await Attendance.create({
        attDate, 
        eventType,
        male,
        female
    })

    return res.status(200).json(attendance);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}