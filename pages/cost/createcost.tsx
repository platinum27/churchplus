import { useRouter } from 'next/router';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Input from '../../components/Input';
import getBasePath from '../../libs/getBasePath';
// @ts-ignore
const CreateBudget = ({buds}) => {
  const router = useRouter();
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [budgetLine, setBudgetLine] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setBudgetLine(value)
  };

  
  
  const handleSubmit = useCallback(async () => {
    try {
      await axios.post('/api/expense/addexpense', {
        expenseName, 
        expenseAmount,
        budgetLine,
        expenseDate  
      });
      router.push('/cost/expenses');
      
    } catch (error) {
        console.log(error);
    }
  }, [expenseName, 
    expenseAmount,
    budgetLine,
    expenseDate
    ]);


  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <nav className="px-12 py-5">
        <img src="/images/logo.png" className="h-12" alt="Logo" />
      </nav>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            New Expense
          </h2>
          <div className="flex flex-col gap-4">
          <Input
              id="expenseName"
              type="text"
              label="Expense Name"
              value={expenseName}
              onChange={(e: any) => setExpenseName(e.target.value)} 
          />
          <Input
              id="expenseAmount"
              type="number"
              label="Expense Amount"
              value={expenseAmount}
              onChange={(e: any) => setExpenseAmount(e.target.value)}
        />

        {/* <Input
              id="budgetLine"
              type="text"
              label="Budget Line"
              value={budgetLine}
              onChange={(e: any) => setBudgetLine(e.target.value)} 
        /> */}

       <label>
        BudgetLine:
        <select name="budgetLine" 
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        onChange={handleChange}
        >
          <option value="">-- Please select budget Line --</option>
          {/* @ts-ignore */}
          {buds.map(option => (
            <option key={option._id} value={option.budgetName}>
              {option.budgetName}
            </option>
          ))}
        </select>
      </label>

        <Input
              id="expenseDate"
              type="date"
              label="Expense Date"
              value={expenseDate}
              onChange={(e: any) => setExpenseDate(e.target.value)} 
          />
    
          </div>
          <button onClick={ handleSubmit} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Create Expense
          </button>
          
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateBudget

export async function getServerSideProps() {

  const response = await fetch(`${getBasePath()}/api/budget/getbudgets`);
  const data = await response.json();
  return { props: { 
           buds: data
         } 
    };
};