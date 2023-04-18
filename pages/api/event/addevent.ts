import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../../models/eventModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    await connectMongo();
    const { startDate, 
        endDate,
        eventName
       } = req.body;


    // const existingMember = await Member.findOne({ firstName,lastName,middleName })

    // if (existingMember) {
    //   return res.status(422).json({ error: 'Member Already Registered' });
    // }

    

    const event = await Event.create({
        startDate, 
        endDate,
        eventName
    })

    return res.status(200).json(event);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}