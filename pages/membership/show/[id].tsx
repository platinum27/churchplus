import { useRouter } from 'next/router'
import React from 'react'



const MemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='text-4xl text-green-400 flex flex-items-center flex-justify-center'>MemberDetails: {id}</div>
  )
}

export default MemberDetails