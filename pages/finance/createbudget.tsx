import { useRouter } from 'next/router';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Input from '../../components/Input';

const CreateBudget = () => {
  const router = useRouter();
  const [budgetName, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  
  const handleSubmit = useCallback(async () => {
    try {
      await axios.post('/api/budget/addbudget', {
        budgetName, 
        budgetAmount  
      });
      router.push('/finance/budgets');
      
    } catch (error) {
        console.log(error);
    }
  }, [budgetName, 
    budgetAmount
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
            New Budget Line
          </h2>
          <div className="flex flex-col gap-4">
          <Input
              id="budgetName"
              type="text"
              label="Budget Name"
              value={budgetName}
              onChange={(e: any) => setBudgetName(e.target.value)} 
          />
          <Input
              id="budgetAmount"
              type="number"
              label="Budget Amount"
              value={budgetAmount}
              onChange={(e: any) => setBudgetAmount(e.target.value)} 
          />
    
          </div>
          <button onClick={ handleSubmit} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Create Budget
          </button>
          
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateBudget