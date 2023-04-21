import { NextApiRequest, NextApiResponse } from 'next';
import { Member } from '../../../models/memberModel';
import connectMongo from '../../../utils/connectMongo';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const  { memberid }  = req.query;
    if (typeof memberid !== 'string') {
        throw new Error('Invalid Id');
    }

    if (!memberid) {
        throw new Error('Missing Id');
    }
   
    switch (req.method) {
        case 'GET':
            return getMemberById(memberid );
        case 'PUT':
            return updateMember(memberid);
        case 'DELETE':
            return deleteMember(memberid);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    async function getMemberById(id:string){
        try {
        console.log(id);
        await connectMongo();
        const member = await Member.findById({_id:id});
        return res.status(200).json(member);
       }
       catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    }

    async function updateMember(id:string){
        try {
            await connectMongo();

            await Member.findOneAndUpdate({_id:id}, req.body);
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }

    }

    async function deleteMember(id:string){
        try {
            await connectMongo();

            await Member.deleteOne({_id:id});
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }
    }

}
