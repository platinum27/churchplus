import React, { useState} from 'react'
import Link from 'next/link';
import axios from 'axios';

// @ts-ignore
const Expenses = ({list}) => {
  const [expenses, setExpenses] = useState(list);

  const handleDelete = async (_id:string) => {
    await axios.delete('/api/expense/' + _id)
    // @ts-ignore
    setExpenses(expenses.filter((dataEach) => dataEach._id !== _id));
    console.log(expenses)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible">
        <div className="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
          <h2 className="text-2xl text-gray-500 font-bold">All Expenses</h2>
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
            
            <Link href="/cost/createcost">
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
                New Expense
              </button></Link
            >
          </div>
        </div>
       {/* Table to be inserted here */}
       <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3">Expense Description</th>
            <th className="p-3 text-left">Budget Line</th>
            <th className="p-3 text-left">Amount </th>
            <th className="p-3 text-left">Expense Date </th>
            {/* <th className="p-3 text-left">Status</th> */}
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* @ts-ignore */}
        {expenses.map((expense) => (
          <tr key={expense._id} className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">{expense.expenseName} </td>
            <td className="p-3">{expense.budgetLine}</td>
            <td className="p-3">{expense.expenseAmount}</td>
            <td className="p-3">{expense.expenseDate}</td>
            
            {/* <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2"
                >{budget.itemStatus}</span
              >
            </td> */}
            <td className="p-3">
              <Link href={`/cost/show/${expense._id}`} className="text-gray-500 hover:text-gray-100 mr-2">
                <i className="material-icons-outlined text-base">details</i>
              </Link>
              <Link href={`/cost/edit/${expense._id}`} className="text-yellow-400 hover:text-gray-100 mx-2">
                <i className="material-icons-outlined text-base">edit</i>
              </Link>
              <button onClick={(e) => handleDelete(expense._id)}  className="text-red-400 hover:text-gray-100 ml-2">Delete</button>
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

export default Expenses

export async function getServerSideProps() {

  const response = await fetch('http://localhost:3000/api/expense/getexpenses');
  const data = await response.json();
  return { props: { 
           list: data
         } 
    };
};