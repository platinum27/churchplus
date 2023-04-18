import { useRouter } from 'next/router';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Input from '../../components/Input';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';




const CreateReg = () => {
  const router = useRouter();
  const [attDate, setAttDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [male, setMale] = useState('');
  const [female, setFemale] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEventType(value)
  };

  const handleSubmit = useCallback(async () => {
    try {
      await axios.post('/api/attend/addattend', {
        attDate, 
        eventType,
        male,
        female  
      });
      router.push('/attendance/regs');
      
    } catch (error) {
        console.log(error);
    }
  }, [attDate, eventType,male,female]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <nav className="px-12 py-5">
        <img src="/images/logo.png" className="h-12" alt="Logo" />
      </nav>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            Take Attendacnce
          </h2>
          <div className="flex flex-col gap-4">
          <Input
              id="attDate"
              type="date"
              label="Attendance Date"
              value={attDate}
              onChange={(e: any) => setAttDate(e.target.value)} 
          />
          {/* <Input
              id="eventType"
              type="text"
              label="Event Type"
              value={eventType}
              onChange={(e: any) => setEventType(e.target.value)}
        /> */}

        <label>
         Event Type:
        <select name="eventType" 
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
          <option value="Sunday Church Service">Sunday Church Service</option>
          <option value="Wednesday Service">Wednesday Service</option>
          <option value="Women Fellowship">Women Fellowship</option>
          <option value="Men Fellowship">Men Fellowship</option>
          <option value="Youth Fellowship">Youth Fellowship</option>
        </select>
      </label>


        <Input
              id="male"
              type="number"
              label="Number of Males"
              value={male}
              onChange={(e: any) => setMale(e.target.value)} 
        />

        <Input
              id="female"
              type="number"
              label="Number of Females"
              value={female}
              onChange={(e: any) => setFemale(e.target.value)} 
          />
    
          </div>
          <button onClick={ handleSubmit} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateReg

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
  }
  