import FilterBar from '@/components/FilterBar'
import SingleSession from '@/components/SingleSession'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full flex flex-col'>
        <div className='flex items-center justify-between'>
            <h2 className='text-xl2 font-semibold text-[#17161D]'>Session Records</h2>
        </div>
        <div className='w-full bg-white border border-solid border-[#E7E8EA] rounded-lg mt-4'>
            <FilterBar/>
            <div className='w-full flex items-center justify-between bg-[#F0F2F5] py-2 px-5'>
                <h6 className='text-[#595C69] font-normal w-2/12 text-sm'>User name</h6>
                <h6 className='text-[#595C69] font-normal w-1/12 text-sm text-center'>User ID</h6>
                <h6 className='text-[#595C69] font-normal w-2/12 text-center text-sm'>No of sessions</h6>
                <h6 className='text-[#595C69] font-normal w-2/12 text-center text-sm'>Average session cost</h6>
                <h6 className='text-[#595C69] font-normal w-10'></h6>
            </div>
            <SingleSession/>
            <SingleSession/>
            <SingleSession/>
            <SingleSession/>
            <SingleSession/>
            <SingleSession/>
            <SingleSession/>
            <SingleSession/>
        </div>
    </div>
  )
}
