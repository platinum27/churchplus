import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../../models/eventModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
      await connectMongo();
      const event = await Event.find();
 
      return res.status(200).json(event);
    } catch (error) {
      console.log({ error })
      return res.status(500).end();
    }
  }
  