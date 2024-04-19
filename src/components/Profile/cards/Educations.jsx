import React from 'react'

const Educations = ({profileData}) => {
  return (
    <div className='mx-auto max-w-screen-lg pr-56 pl-32 h-[360px] '>
        <div className='relative h-[330px] border border-gray-300 rounded-sm shadow-inside'>
            <div className='flex justify-between'>
                <div className='p-10 font-bold text-xl'><h1 className=''>Educations</h1></div>
                <div className='p-10 pt-7'>
                <button className='px-4 py-1 border border-red-400 rounded-sm text-moto font-bold'>Edit</button>
                </div>
            </div>
            {Array.isArray(profileData.educations) && profileData.educations.map((education, index) => (
            <div key={index} className='p-6 pt-1 pl-8'>
                <p>Univeristy Name: {education.uniName}</p>
            </div>
             ))}
         </div>
    </div>
  )
}

export default Educations