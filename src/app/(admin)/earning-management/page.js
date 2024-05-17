import FilterBar from '@/components/FilterBar'
import SingleCM from '@/components/SingleCM'
import SingleEM from '@/components/SingleEM'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex items-center'>
        <h2 className='text-xl2 font-semibold text-[#17161D]'>Earning Management</h2>
      </div>
      <div className='w-full grid grid-cols-5 gap-3 mt-5'>
        <div className='bg-white rounded-xl px-5 py-4'>
            <h6 className='font-normal text-[#606B6C] text-xs'>Total Sessions earnings</h6>
            <h4 className='text-xl text-[#121616] font-bold mt-3'>$90k</h4>
        </div>
        <div className='bg-white rounded-xl px-5 py-4'>
            <h6 className='font-normal text-[#606B6C] text-xs'>Total earnings</h6>
            <h4 className='text-xl text-[#121616] font-bold mt-3'>$90k</h4>
        </div>
        <div className='bg-white rounded-xl px-5 py-4'>
            <h6 className='font-normal text-[#606B6C] text-xs'>Total earnings</h6>
            <h4 className='text-xl text-[#121616] font-bold mt-3'>$90k</h4>
        </div>
        <div className='bg-white rounded-xl px-5 py-4'>
            <h6 className='font-normal text-[#606B6C] text-xs'>Audio track earning</h6>
            <h4 className='text-xl text-[#121616] font-bold mt-3'>$90k</h4>
        </div>
        <div className='bg-white rounded-xl px-5 py-4'>
            <h6 className='font-normal text-[#606B6C] text-xs'>Support  earning</h6>
            <h4 className='text-xl text-[#121616] font-bold mt-3'>$90k</h4>
        </div>
      </div>
      <div className='w-full bg-white border border-solid border-[#E7E8EA] rounded-lg mt-4'>
        <FilterBar/>
        <div className='w-full flex items-center justify-between bg-[#F0F2F5] py-2 px-5'>
          <h6 className='text-[#595C69] font-normal w-1/12 text-sm'>Transaction id</h6>
          <h6 className='text-[#595C69] font-normal w-2/12 text-sm text-center'>Username</h6>
          <h6 className='text-[#595C69] font-normal w-1/12 text-center text-sm'>Date</h6>
          <h6 className='text-[#595C69] font-normal w-1/12 text-center text-sm'>Time</h6>
          <h6 className='text-[#595C69] font-normal w-1/12 text-center text-sm'>Type</h6>
          <h6 className='text-[#595C69] font-normal w-1/12 text-center text-sm'>Cost</h6>
          <h6 className='text-[#595C69] font-normal w-48 text-center text-sm'>Soltopiah commision</h6>
          <h6 className='text-[#595C69] font-normal w-32 text-center text-sm'>Total Earnings</h6>
          <h6 className='text-[#595C69] font-normal w-1/12 text-center text-sm'>Source</h6>
        </div>
        <SingleEM/>
        <SingleEM/>
        <SingleEM/>
        <SingleEM/>
        <SingleEM/>
        <SingleEM/>

      </div>
    </div>
  )
}
