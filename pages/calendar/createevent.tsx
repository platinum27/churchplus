import { useState, useCallback } from "react";
import { useRouter } from "next/router";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from "axios";
//@ts-ignore
import { DateRangePicker } from 'react-date-range';
import Input from '../../components/Input';

const CreateEvent = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState( new Date());
  const [endDate, setEndDate] = useState( new Date());
  const [eventName, setEventName] = useState('');
  const selectionRange = {
    startDate,
    endDate,
    key:'selection'
  }
  const handleSelect = (ranges:any) =>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  };
  const handleSubmit = useCallback( async() => {
    // const data  = { startDate, endDate, eventName }
    // console.log(data);
    try {
        await axios.post('/api/event/addevent', {
            startDate, 
            endDate,
            eventName
          });
          router.push('/calendar/events');
        
    } catch (error) {
        
    }
  }, [startDate, endDate, eventName]);
  return (
    <div className="flex flex-col col-span-3 mx-100">
        <DateRangePicker 
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
        />

       <div className="flex flex-col gap-4">
       <Input
              id="eventName"
              type="text"
              label="Event Name"
              value={eventName}
              onChange={(e: any) => setEventName(e.target.value)} 
          />
         <button onClick={ handleSubmit} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Create Expense
          </button>
       </div>
    </div>
  )
}

export default CreateEvent