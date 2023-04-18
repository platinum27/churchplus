import { useRouter } from 'next/router';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Input from '../../components/Input';

const CreateMember = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [marriageDate, setMarriageDate] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [memberStatus, setMemberStatus] = useState('');
  const [dept, setDept] = useState('');
  const [cellGroup, setCellGroup] = useState('');

  const handleGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setGender(value)
  };
  const handleMarital = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setMaritalStatus(value)
  };

  const handleDept = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setDept(value)
  };

  const handleCell = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setCellGroup(value)
  };

  const handleMemberStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setMemberStatus(value)
  };
  

  const register = useCallback(async () => {
    try {
      await axios.post('/api/operations/memberadd', {
        email, 
        firstName, 
        lastName,
        middleName,
        maidenName,
        dob,
        gender,
        maritalStatus,
        marriageDate,
        address,
        phone,
        memberStatus,
        dept,
        cellGroup
      });
      router.push('/membership/memberlist');
      
    } catch (error) {
        console.log(error);
    }
  }, [email, 
    firstName, 
    lastName,
    middleName,
    maidenName,
    dob,
    gender,
    maritalStatus,
    marriageDate,
    address,
    phone,
    memberStatus,
    dept,
    cellGroup]);


  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <nav className="px-12 py-5">
        <img src="/images/logo.png" className="h-12" alt="Logo" />
      </nav>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            New Member
          </h2>
          <div className="flex flex-col gap-4">
          <Input
              id="firstName"
              type="text"
              label="First Name"
              value={firstName}
              onChange={(e: any) => setFirstName(e.target.value)} 
          />
          <Input
              id="lastName"
              type="text"
              label="Last Name"
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)} 
          />

            <Input
              id="middleName"
              type="text"
              label="Middle Name"
              value={middleName}
              onChange={(e: any) => setMiddleName(e.target.value)} 
             />

             <Input
              id="maidenName"
              type="text"
              label="Maiden Name"
              value={maidenName}
              onChange={(e: any) => setMaidenName(e.target.value)} 
             />
             
             <label>
         Gender:
        <select name="gender" 
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
        onChange={handleGender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
          



             <Input
              id="dob"
              type="date"
              label="Date of birth"
              value={dob}
              onChange={(e: any) => setDob(e.target.value)} 
             />

            
       <label>
          Marital  Status:
        <select name="maritalStatus" 
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
        onChange={handleMarital}
        >
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
      </label>



             <Input
              id="mariageDate"
              type="date"
              label="Marriage Date"
              value={marriageDate}
              onChange={(e: any) => setMarriageDate(e.target.value)} 
             />
             <Input
              id="email"
              type="email"
              label="Email address or phone number"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)} 
            />
            <Input
              id="address"
              type="text"
              label="Physical Address"
              value={address}
              onChange={(e: any) => setAddress(e.target.value)} 
             />

             <Input
              id="phone"
              type="text"
              label="Phone"
              value={phone}
              onChange={(e: any) => setPhone(e.target.value)} 
             />
             
           
        <label>
          Department:
        <select name="dept" 
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
        onChange={handleDept}
        >
          <option value="Hospitality">Hospitality</option>
          <option value="Evangelism">Evangelism</option>
          <option value="Finance">Finance</option>
          <option value="Childrens">Childrens</option>
        </select>
      </label>


       <label>
          Cell Group:
        <select name="cellGroup" 
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
        onChange={handleCell}
        >
          <option value="Kazembe">Kazembe</option>
          <option value="Muchinga">Muchinga</option>
          <option value="Kizito">Kizito</option>
        </select>
      </label>

         <label>
         Member Status:
        <select name="memberStatus" 
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
        onChange={handleMemberStatus}
        >
          <option value="Reception">Reception</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </label>
            
           
          </div>
          <button onClick={ register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Create Member
          </button>
          
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateMember