import React, { useState} from 'react'
import Link from 'next/link';
import axios from 'axios';


const MemberList = ({list}) => {

  const [members, setMembers] = useState(list);

  const handleDelete = async (_id) => {
    await axios.delete('/api/operations/' + _id)
    setMembers(members.filter((dataEach) => dataEach._id !== _id));
    console.log(members)
  };

  return (
  <div className="flex items-center justify-center min-h-screen bg-white">
  <div className="col-span-12">
    <div className="overflow-auto lg:overflow-visible">
      <div className="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 className="text-2xl text-gray-500 font-bold">All Members</h2>
        <div className="text-center flex-auto">
          <input
            type="text"
            name="name"
            placeholder="Search..."
            className="
              w-1/3
              py-2
              border-b-2 border-blue-600
              outline-none
              focus:border-yellow-400
            "
          />
        </div>

        <div>
          
          <Link href="/membership/createmember">
            <button
              className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              New Member
            </button></Link
          >
        </div>
      </div>
      <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3 text-left">Address</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Cell Group</th>

            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
        {members.map((member) => (
          <tr key={member._id} className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">{member.firstName} {member.lastName}</td>
            <td className="p-3">{member.address}</td>
            <td className="p-3">{member.phone}</td>
            <td className="p-3 uppercase">{member.cellGroup}</td>

            <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2"
                >{member.memberStatus}</span
              >
            </td>
            <td className="p-3">
              <Link href={`/membership/show/${member._id}`} className="text-gray-500 hover:text-gray-100 mr-2">
                <i className="material-icons-outlined text-base">details</i>
              </Link>
              <Link href={`/membership/edit/${member._id}`} className="text-yellow-400 hover:text-gray-100 mx-2">
                <i className="material-icons-outlined text-base">edit</i>
              </Link>
              <button onClick={(e) => handleDelete(member._id)}  className="text-red-400 hover:text-gray-100 ml-2">Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}
export default MemberList

export async function getServerSideProps() {

  const response = await fetch('http://localhost:3000/api/operations/getmembers');
  const data = await response.json();
  return { props: { 
           list: data
         } 
    };
};
