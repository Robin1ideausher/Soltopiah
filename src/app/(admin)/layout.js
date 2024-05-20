import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <div className="flex ">
      <div className="w-[300px] ">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full overflow-x-hidden h-screen flex flex-col">
        <Header />
        <div className="py-7 px-6 w-full">{children}</div>
      </div>
    </div>
    // <div className='flex w-full h-scree justify-en'>
    //     <Sidebar/>
    //     <div className='w-10/12'>
    //         <Header/>

    //         <div className='py-7 px-6 w-full'>
    //             {children}
    //         </div>
    //     </div>
    // </div>
  );
}
