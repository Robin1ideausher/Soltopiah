import React from "react";
import Export from "../../../../icons/Export";
import SearchBar from "@/components/SearchBar";
import MenuDots from "../../../../icons/MenuDots";
import StarRating from "../../../../icons/StarRating";
import Pagination from "@/components/Pagination";

function page() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl2 font-semibold text-userblack font-sans">
          Calmness Feedback
        </p>
        <div className="flex flex-row items-center gap-5">
          <select className="py-[10px] px-3 border border-[#DCDBE1] rounded-lg text-sm font-sans font-normal text-userblack focus:outline-none">
            <option value="1">Feb 10 - Feb 16, 22</option>
          </select>
          <div className="bg-white border border-[#DCDBE1] py-[10px] px-3 rounded-lg flex flex-row items-center gap-2">
            <Export />
            <p className="text-sm font-sans font-normal text-userblack">
              Export
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <SearchBar />
        <div className="w-full overflow-x-scroll booking-table-wrapper">
          <div className="bg-[#F0F2F5] min-w-fit w-full">
            <div className="items-center grid grid-cols-calmnessTable justify-between p-4">
              <span className="text-[#666576] font-sans font-normal text-sm">
                Content
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Category
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Created by
              </span>

              <span className="text-[#666576] font-sans font-normal text-sm">
                Type
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Date
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Avg. Rating
              </span>

              <span className="text-[#666576] font-sans font-normal text-sm"></span>
            </div>
          </div>
          <div className="flex flex-col bg-white min-w-fit w-full ">
            <div className=" grid grid-cols-calmnessTable justify-between border-b border-[#E9E9EC] items-center p-4">
              <div className="text-[#252322] font-sans font-semibold text-base flex flex-row items-center gap-2">
                <img src="newImage.png" alt=""/>
                <p>Designed to give you mental peace </p>
              </div>
              <span className="text-userblack font-sans font-semibold text-sm">
              Meditation
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              John
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              Blog
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              Feb 27, 2022, 23:57
              </span>
              <span className="text-userblack font-sans font-semibold text-sm flex flex-row items-center gap-2">
              <StarRating/>
              <p>4.5</p>
              </span>

              <button className="text-[#08A03C] font-sans font-semibold text-sm">
                <MenuDots />
              </button>
            </div>
            <div className=" grid grid-cols-calmnessTable justify-between border-b border-[#E9E9EC] items-center p-4">
              <div className="text-[#252322] font-sans font-semibold text-base flex flex-row items-center gap-2">
                <img src="newImage.png" alt=""/>
                <p>Designed to give you mental peace </p>
              </div>
              <span className="text-userblack font-sans font-semibold text-sm">
              Meditation
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              John
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              Blog
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              Feb 27, 2022, 23:57
              </span>
              <span className="text-userblack font-sans font-semibold text-sm flex flex-row items-center gap-2">
              <StarRating/>
              <p>4.5</p>
              </span>

              <button className="text-[#08A03C] font-sans font-semibold text-sm">
                <MenuDots />
              </button>
            </div>
            <div className=" grid grid-cols-calmnessTable justify-between border-b border-[#E9E9EC] items-center p-4">
              <div className="text-[#252322] font-sans font-semibold text-base flex flex-row items-center gap-2">
                <img src="newImage.png" alt=""/>
                <p>Designed to give you mental peace </p>
              </div>
              <span className="text-userblack font-sans font-semibold text-sm">
              Meditation
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              John
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              Blog
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
              Feb 27, 2022, 23:57
              </span>
              <span className="text-userblack font-sans font-semibold text-sm flex flex-row items-center gap-2">
              <StarRating/>
              <p>4.5</p>
              </span>

              <button className="text-[#08A03C] font-sans font-semibold text-sm">
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
