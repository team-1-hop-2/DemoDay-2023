import React from 'react'

export const AccountOptions1 = () => {
  return (
    <div className='w-full h-1/4 bg-[#FFFFFF]/[.25] rounded-lg grid grid-rows-2 grid-cols-9 items-center'>
        <h1 className='text-white order-1 col-span-6'>Webpage_Name_Placeholder</h1>
        <button className='order-10 col-span-2 border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem] px-6 py-3 outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex z-10'>Undeploy</button>
        <button className='order-13 col-span-2 border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem] px-8 py-3 outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex'>Manage</button>
        <button className='order-16 col-span-2 border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem] px-7 py-3 outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex'>View Site</button>
    </div>
  )
}
