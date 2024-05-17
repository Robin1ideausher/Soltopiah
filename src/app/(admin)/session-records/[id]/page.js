import Link from 'next/link'
import React from 'react'

export default function ViewPage() {
  return (
    <div className='w-full'>
        <div className='w-full flex items-center gap-3 pb-5 border-b border-solid border-[#CDCDCD]'>
            <Link href="/session-records" className='btn-back'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.21894 7.33327H13.3333V8.6666H5.21894L8.79492 12.2425L7.85212 13.1853L2.66666 7.99993L7.85212 2.81445L8.79492 3.75726L5.21894 7.33327Z" fill="#252322"/>
                </svg>
                <h6 className='text-[#252322] font-semibold text-sm'>Back</h6>
            </Link>
            <h2 className='text-xl2 font-semibold text-[#17161D]'>View Session Records</h2>
        </div>
        <h6 className='text-sm font-semibold text-[#121616] mt-5'>User name</h6>
        <h5 className='text-[#414554] font-normal text-lg'>Jack Leach</h5>
        
        <h6 className='text-sm font-semibold text-[#121616] mt-5'>No: of sessions</h6>
        <h5 className='text-[#414554] font-normal text-lg'>2</h5>

        <h6 className='text-sm font-semibold text-[#121616] mt-5'>1st session type</h6>
        <h5 className='text-[#414554] font-normal text-lg'>Public</h5>

        <h6 className='text-sm font-semibold text-[#121616] mt-5'>1st session cost</h6>
        <h5 className='text-[#414554] font-normal text-lg'>$15</h5>

        <h6 className='text-sm font-semibold text-[#121616] mt-5'>1st Session Notes</h6>
        <h5 className='text-[#414554] font-normal text-lg'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, 
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor 
                purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur 
                vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </h5>
        <h6 className='text-sm font-semibold text-[#121616] mt-5'>Document Uploaded</h6>
        <h5 className='text-[#414554] font-normal text-lg underline'>Abcd.pdf</h5>
        
    </div>
  )
}
