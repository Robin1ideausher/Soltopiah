import SearchBar from "@/components/SearchBar";
import React from "react";
import MenuDots from "../../../../icons/MenuDots";

import Pagination from "@/components/Pagination";

function page() {
  return (
    <div className="flex flex-col gap-7">
      <p className="text-userblack font-semibold text-xl2 font-sans">
        Guide Management
      </p>
      <div>
        <SearchBar />
        <div className="w-full overflow-x-scroll booking-table-wrapper">
          <div className="bg-[#F0F2F5] w-fit">
            <div className="items-center grid grid-cols-guideTable p-4">
              <span className="text-[#666576] font-sans font-normal text-sm">
                User Id
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Guide Name
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Account Created
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Type
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Revenue
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Total bookings
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm"></span>
            </div>
          </div>
          <div className="flex flex-col bg-white w-fit ">
            <div className=" grid grid-cols-guideTable border-b border-[#E9E9EC] items-center p-4">
              <span className="text-userblack text-base font-semibold font-sans">
                1231
              </span>
              <div className="flex flex-row gap-2">
                <img src="Profile2.png" alt="" />
                <div className="flex flex-col">
                  <p className="text-base font-semibold font-sans text-userblack">
                    Albert Flores
                  </p>
                  <p className="text-base font-sans font-normal text-[#666576]">
                    (406) 555-0120
                  </p>
                </div>
              </div>
              <span className="text-base font-sans font-semibold text-userblack">
                Feb 27, 2024
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                Subscribed
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                $1200
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                32
              </span>
              <button className="text-base font-sans font-semibold text-userblack">
                <MenuDots />
              </button>
            </div>
            <div className=" grid grid-cols-guideTable border-b border-[#E9E9EC] items-center p-4">
              <span className="text-userblack text-base font-semibold font-sans">
                1231
              </span>
              <div className="flex flex-row gap-2">
                <img src="Profile2.png" alt="" />
                <div className="flex flex-col">
                  <p className="text-base font-semibold font-sans text-userblack">
                    Albert Flores
                  </p>
                  <p className="text-base font-sans font-normal text-[#666576]">
                    (406) 555-0120
                  </p>
                </div>
              </div>
              <span className="text-base font-sans font-semibold text-userblack">
                Feb 27, 2024
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                Subscribed
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                $1200
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                32
              </span>
              <button className="text-base font-sans font-semibold text-userblack">
                <MenuDots />
              </button>
            </div>
            <div className=" grid grid-cols-guideTable border-b border-[#E9E9EC] items-center p-4">
              <span className="text-userblack text-base font-semibold font-sans">
                1231
              </span>
              <div className="flex flex-row gap-2">
                <img src="Profile2.png" alt="" />
                <div className="flex flex-col">
                  <p className="text-base font-semibold font-sans text-userblack">
                    Albert Flores
                  </p>
                  <p className="text-base font-sans font-normal text-[#666576]">
                    (406) 555-0120
                  </p>
                </div>
              </div>
              <span className="text-base font-sans font-semibold text-userblack">
                Feb 27, 2024
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                Subscribed
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                $1200
              </span>
              <span className="text-base font-sans font-semibold text-userblack">
                32
              </span>
              <button className="text-base font-sans font-semibold text-userblack">
                <MenuDots />
              </button>
            </div>
            
          </div>
        </div>
        <Pagination/>

      </div>
    </div>
  );
}

export default page;
