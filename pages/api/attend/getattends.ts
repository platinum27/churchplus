import { NextApiRequest, NextApiResponse } from 'next';
import { Attendance } from '../../../models/attendanceModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
      await connectMongo();
      const attendance = await Attendance.find();
 
      return res.status(200).json(attendance);
    } catch (error) {
      console.log({ error })
      return res.status(500).end();
    }
  }
  