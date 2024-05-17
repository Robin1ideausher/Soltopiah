import React from "react";

import SearchBar from "@/components/SearchBar";
import GreenDot from "../../../../icons/GreenDot";
import MenuDots from "../../../../icons/MenuDots";
import Link from "next/link";
import RedDot from "../../../../icons/RedDot";

function page() {
  return (
    <div className="flex flex-col gap-7">
      <p className="text-userblack font-semibold text-xl2 font-sans">Users</p>

      <div>
        <SearchBar />
        <div className="overflow-x-scroll ">
          <div className="grid grid-cols-userTable  xl:w-fit midxl:w-full 2xl:w-full  p-4 items-center bg-[#F0F2F5]">
            <span className="text-sm font-normal text-[#595C69] font-sans">
              Users
            </span>
            <span className="text-sm font-normal text-[#595C69] font-sans">
              User ID
            </span>
            <span className="text-sm font-normal text-[#595C69] font-sans">
              Account created
            </span>
            <span className="text-sm font-normal text-[#595C69] font-sans">
              User Type
            </span>
            <span className="text-sm font-normal text-[#595C69] font-sans">
              Status
            </span>
            <span className="text-sm font-normal text-[#595C69] font-sans">
              Action
            </span>

            <span className="text-sm font-normal text-[#F0F2F5] font-sans">
              .
            </span>
          </div>
          <div className="grid grid-cols-userTable border-b-[0.5px] border-[#E9E9EC] xl:w-fit midxl:w-full 2xl:w-full  p-4  items-center bg-white">
            <div className="flex flex-row gap-2 ">
              <div>
                <img src="/Profile.png" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-userblack">
                  Henry Fiat
                </p>
                <p className="text-sm font-sans font-normal text-[#666576]">
                  (406) 555-0120
                </p>
              </div>
            </div>
            <span className="text-sm font-normal text-userblack ">012364</span>
            <span className="text-sm font-normal text-userblack ">
              Feb 27, 2022, 23:57
            </span>
            <span className="text-sm font-normal text-userblack ">
              Subscribed
            </span>
            <div className="">
              <div className="border border-[#B9F4C8] py-1 px-3 w-[80px]  rounded-md flex flex-row items-center gap-1">
                <GreenDot />
                <p className="text-sm font-sans font-normal text-[#2BAB4B]">
                  Active
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <p>Block</p>
              <p>Unblock</p>
            </div>
            <button className="flex justify-end">
              <MenuDots />
            </button>
          </div>
          <div className="grid grid-cols-userTable border-b-[0.5px] border-[#E9E9EC] xl:w-fit midxl:w-full 2xl:w-full  p-4  items-center bg-white">
            <div className="flex flex-row gap-2 ">
              <div>
                <img src="/Profile.png" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-userblack">
                  Henry Fiat
                </p>
                <p className="text-sm font-sans font-normal text-[#666576]">
                  (406) 555-0120
                </p>
              </div>
            </div>
            <span className="text-sm font-normal text-userblack ">012364</span>
            <span className="text-sm font-normal text-userblack ">
              Feb 27, 2022, 23:57
            </span>
            <span className="text-sm font-normal text-userblack ">
              Non-Subscribed
            </span>
            <div className="">
              <div className="border border-[#E43A42] py-1 px-3 w-[80px] rounded-md flex flex-row items-center gap-1">
                <RedDot />
                <p className="text-sm font-sans font-normal text-[#E43A42]">
                  Expired
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <p>Block</p>
              <p>Unblock</p>
            </div>
            <button className="flex justify-end">
              <MenuDots />
            </button>
          </div>
          <div className="grid grid-cols-userTable border-b-[0.5px] border-[#E9E9EC] xl:w-fit midxl:w-full 2xl:w-full  p-4  items-center bg-white">
            <div className="flex flex-row gap-2 ">
              <div>
                <img src="/Profile.png" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-userblack">
                  Henry Fiat
                </p>
                <p className="text-sm font-sans font-normal text-[#666576]">
                  (406) 555-0120
                </p>
              </div>
            </div>
            <span className="text-sm font-normal text-userblack ">012364</span>
            <span className="text-sm font-normal text-userblack ">
              Feb 27, 2022, 23:57
            </span>
            <span className="text-sm font-normal text-userblack ">
              Non-Subscribed
            </span>
            <div className="">
              <div className="border border-[#3090E9] py-1 px-3 w-[120px] rounded-md flex flex-row items-center gap-1">
                <GreenDot />
                <p className="text-sm font-sans font-normal text-[#3090E9]">
                  Non-Active
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <p>Block</p>
              <p>Unblock</p>
            </div>
            <button className="flex justify-end">
              <MenuDots />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
