import React from 'react'

const UserList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible">
        <div className="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
          <h2 className="text-2xl text-gray-500 font-bold">All Users</h2>
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
            <a href="#">
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
                All
              </button>
            </a>
            <a href="#">
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
                Admin
              </button>
            </a>
            <a href="#">
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
                User
              </button></a
            >
          </div>
        </div>
        <table className="table text-gray-400 border-separate space-y-6 text-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3 text-left">Mail</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Role</th>
  
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
        
            <tr className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">Gazi Rahad</td>
              <td className="p-3">gazi.rahad871@gmail.com</td>
              <td className="p-3">01648349009</td>
              <td className="p-3 uppercase">admin</td>
  
              <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2"
                  >ACTIVE</span
                >
              </td>
              <td className="p-3">
                <a href="#" className="text-gray-500 hover:text-gray-100 mr-2">
                  <i className="material-icons-outlined text-base">visibility</i>
                </a>
                <a href="#" className="text-yellow-400 hover:text-gray-100 mx-2">
                  <i className="material-icons-outlined text-base">edit</i>
                </a>
                <a
                  href="#"
                  className="text-red-400 hover:text-gray-100 ml-2"
                >
                  <i className="material-icons-round text-base">delete_outline</i>
                </a>
              </td>
            </tr>
         <tr className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">Arif Uddin</td>
              <td className="p-3">gazi.rahad871@gmail.com</td>
              <td className="p-3">01648349009</td>
              <td className="p-3 uppercase">user</td>
  
              <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2"
                  >ACTIVE</span
                >
              </td>
              <td className="p-3">
                <a href="#" className="text-gray-500 hover:text-gray-100 mr-2">
                  <i className="material-icons-outlined text-base">visibility</i>
                </a>
                <a href="#" className="text-yellow-400 hover:text-gray-100 mx-2">
                  <i className="material-icons-outlined text-base">edit</i>
                </a>
                <a
                  href="#"
                  className="text-red-400 hover:text-gray-100 ml-2"
                >
                  <i className="material-icons-round text-base">delete_outline</i>
                </a>
              </td>
            </tr>
               <tr className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">Rubel Amin</td>
              <td className="p-3">gazi.rahad871@gmail.com</td>
              <td className="p-3">01648349010</td>
              <td className="p-3 uppercase">admin</td>
  
              <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2"
                  >ACTIVE</span
                >
              </td>
              <td className="p-3">
                <a href="#" className="text-gray-500 hover:text-gray-100 mr-2">
                  <i className="material-icons-outlined text-base">visibility</i>
                </a>
                <a href="#" className="text-yellow-400 hover:text-gray-100 mx-2">
                  <i className="material-icons-outlined text-base">edit</i>
                </a>
                <a
                  href="#"
                  className="text-red-400 hover:text-gray-100 ml-2"
                >
                  <i className="material-icons-round text-base">delete_outline</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default UserList