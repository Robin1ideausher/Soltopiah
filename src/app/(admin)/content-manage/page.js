import React from "react";
import AddSearchBar from "../../../components/AddSearchBar";
import MenuDots from "../../../../icons/MenuDots";
import Pagination from "@/components/Pagination";

function page() {
  return (
    <div className="flex flex-col gap-7">
      <p className="text-userblack font-semibold text-xl2 font-sans">
        Content Management
      </p>
      <div className="flex flex-col">
        <AddSearchBar />
        <div className="w-full overflow-x-scroll booking-table-wrapper">
          <div className="bg-[#F0F2F5] min-w-fit w-full">
            <div className="items-center grid grid-cols-contentTable justify-between p-4">
              <span className="text-[#666576] font-sans font-normal text-sm">
                Course
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Description
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Created by
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Category
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Type
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Date Created
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm">
                Access type
              </span>
              <span className="text-[#666576] font-sans font-normal text-sm"></span>
            </div>
          </div>
          <div className="flex flex-col bg-white min-w-fit w-full ">
            <div className=" grid grid-cols-contentTable border-b justify-between border-[#E9E9EC] items-center p-4">
              <div className="flex flex-row items-center gap-4">
                <img src="image1.png" alt="" />
                <p className="text-sm font-sans font-semibold text-[#252322]">
                  Designed to give you mental peace{" "}
                </p>
              </div>
              <span className="text-userblack font-sans font-semibold text-sm">
                {" "}
                Successful people make their decisions based on where they want
                to be.”
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Soltopiah
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Mental Health
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Blog
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Feb 27, 2024
              </span>
              <span className="text-[#08A03C] font-sans font-semibold text-sm">
                Subscribed
              </span>
              <button className="text-[#08A03C] font-sans font-semibold text-sm">
                <MenuDots />
              </button>
            </div>
            <div className=" grid grid-cols-contentTable border-b border-[#E9E9EC] items-center justify-between p-4">
              <div className="flex flex-row items-center gap-4">
                <img src="image1.png" alt="" />
                <p className="text-sm font-sans font-semibold text-[#252322]">
                  Designed to give you mental peace{" "}
                </p>
              </div>
              <span className="text-userblack font-sans font-semibold text-sm">
                {" "}
                Successful people make their decisions based on where they want
                to be.”
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Soltopiah
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Mental Health
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Blog
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Feb 27, 2024
              </span>
              <span className="text-[#08A03C] font-sans font-semibold text-sm">
                Subscribed
              </span>
              <button className="text-[#08A03C] font-sans font-semibold text-sm">
                <MenuDots />
              </button>
            </div>
            <div className=" grid grid-cols-contentTable border-b border-[#E9E9EC] items-center justify-between p-4">
              <div className="flex flex-row items-center gap-4">
                <img src="image1.png" alt="" />
                <p className="text-sm font-sans font-semibold text-[#252322]">
                  Designed to give you mental peace{" "}
                </p>
              </div>
              <span className="text-userblack font-sans font-semibold text-sm">
                {" "}
                Successful people make their decisions based on where they want
                to be.”
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Soltopiah
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Mental Health
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Blog
              </span>
              <span className="text-userblack font-sans font-semibold text-sm">
                Feb 27, 2024
              </span>
              <span className="text-[#08A03C] font-sans font-semibold text-sm">
                Subscribed
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
