import React from 'react'

export default function AddSlotModal(props) {
  return (
    <div className='modal-container'>
        <div className='bg-white rounded-lg py-10 px-8 w-5/12 mx-auto'>
            <div className='w-full items-center justify-between flex'>
                <h3 className='text-[#232946] text-xl2 font-semibold'>Add new slot</h3>
                <div className='flex items-center cursor-pointer' onClick={props.callback}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_126_5382" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_126_5382)">
                            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#1C1B1F"/>
                        </g>
                    </svg>
                </div>
            </div>
            <h6 className='text-[#252322] font-semibold text-sm mt-5 mb-1'>Service</h6>
            <input type="text" placeholder='Enter title' className='bg-white border border-solid border-[#E7E5E4] w-full rounded-lg py-3 px-4'/>
            <h6 className='text-[#252322] font-semibold text-sm mt-5 mb-1'>Date</h6>
            <input type="date" placeholder='Enter title' className='bg-white border border-solid border-[#E7E5E4] w-full rounded-lg py-3 px-4'/>
            <h6 className='text-[#252322] font-semibold text-sm mt-5 mb-1'>Time</h6>
            <input type="time" placeholder='Enter title' className='bg-white border border-solid border-[#E7E5E4] w-full rounded-lg py-3 px-4'/>
            <div className='w-full grid grid-cols-2 gap-3 mt-6'>
                <button className='text-base font-black text-[#AE445A] p-3 border bg-white border-solid border-[#AE445A] rounded-lg' onClick={props.callback}>Cancel</button>
                <button className='text-base font-black p-3 text-white border bg-[#AE445A] border-solid border-[#AE445A] rounded-lg' onClick={props.callback}>Save</button>
            </div>
        </div>
    </div>
  )
}
