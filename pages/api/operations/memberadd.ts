import { NextApiRequest, NextApiResponse } from 'next';
import { Member } from '../../../models/memberModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    await connectMongo();
    const { firstName, 
        middleName, 
        maidenName,
        lastName,
        gender,
        dob,
        maritalStatus,
        marriageDate,
        address,
        phone, 
        email,
        memberStatus,
        dept,
        cellGroup,
        regNumber } = req.body;


    // const existingMember = await Member.findOne({ firstName,lastName,middleName })

    // if (existingMember) {
    //   return res.status(422).json({ error: 'Member Already Registered' });
    // }

    

    const member = await Member.create({
        firstName, 
        middleName, 
        maidenName,
        lastName,
        gender,
        dob,
        maritalStatus,
        marriageDate,
        address,
        phone, 
        email,
        memberStatus,
        dept,
        cellGroup,
        regNumber
        
    })

    return res.status(200).json(member);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}