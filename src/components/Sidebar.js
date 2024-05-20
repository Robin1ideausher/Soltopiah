"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserIcon from "../../icons/UserIcon";
import GuideIcon from "../../icons/GuideIcon";
import ContentManage from "../../icons/ContentManage";
import Category from "../../icons/Category";
import Quickreads from "../../icons/Quickreads";
import Challenge from "../../icons/Challenge";
import Calmess from "../../icons/Calmess";
import Subscriptions from "../../icons/Subscriptions";
import Community from "../../icons/Community";
import PlatformEarnings from "../../icons/PlatformEarnings";
import NotificationManagement from "../../icons/NotificationManagement";
import BadgesandRewards from "../../icons/BadgesandRewards";
export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="flex flex-col lg:p-3 xl:p-3 2xl:p-3 bg-primary justify-between h-screen ">
      <div className="flex flex-col p-3 justify-center h-full w-full gap-1">
        <Image src="/logo.svg" width="200" height="100" />

        <div className="flex  flex-col gap-1  overflow-y-scroll booking-table-wrapper">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/dashboard" && "bg-pink on"
            }`}
          >
            <svg
              className="hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M14.3357 6.71381C14.5052 6.36815 14.3624 5.95049 14.0167 5.78093C13.6711 5.61138 13.2534 5.75414 13.0838 6.0998L11.7265 8.86692C11.3058 9.72465 10.0692 9.68273 9.70755 8.79851C8.89034 6.80102 6.09681 6.70639 5.14635 8.64402L3.78899 11.4111C3.61943 11.7568 3.76219 12.1745 4.10785 12.344C4.45351 12.5136 4.87117 12.3708 5.04073 12.0251L6.3981 9.25804C6.81881 8.40031 8.05538 8.44223 8.41705 9.32645C9.23425 11.3239 12.0277 11.4185 12.9782 9.48094L14.3357 6.71381Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2113 0.115006C12.1497 -9.18284e-06 10.8116 -9.12997e-06 9.10451 1.64902e-07H9.02049C7.31339 -9.12997e-06 5.97531 -9.18284e-06 4.91372 0.115006C3.83036 0.232381 2.95257 0.476195 2.20311 1.02072C1.74938 1.35037 1.35037 1.74938 1.02072 2.20311C0.476195 2.95257 0.232381 3.83036 0.115006 4.91372C-9.18284e-06 5.97531 -9.12997e-06 7.31339 1.64902e-07 9.02049V9.10451C-9.12997e-06 10.8116 -9.18284e-06 12.1497 0.115006 13.2113C0.232381 14.2947 0.476195 15.1724 1.02072 15.9219C1.35037 16.3756 1.74938 16.7746 2.20311 17.1042C2.95257 17.6488 3.83036 17.8926 4.91372 18.01C5.97529 18.125 7.31339 18.125 9.02039 18.125H9.10461C10.8116 18.125 12.1497 18.125 13.2113 18.01C14.2947 17.8926 15.1724 17.6488 15.9219 17.1042C16.3756 16.7746 16.7746 16.3756 17.1042 15.9219C17.6488 15.1724 17.8926 14.2947 18.01 13.2113C18.125 12.1497 18.125 10.8116 18.125 9.10461V9.02039C18.125 7.31339 18.125 5.97529 18.01 4.91372C17.8926 3.83036 17.6488 2.95257 17.1042 2.20311C16.7746 1.74938 16.3756 1.35037 15.9219 1.02072C15.1724 0.476195 14.2947 0.232381 13.2113 0.115006ZM3.02261 2.14868C3.4948 1.80561 4.09916 1.60564 5.06388 1.50112C6.04166 1.39519 7.30428 1.39423 9.0625 1.39423C10.8207 1.39423 12.0833 1.39519 13.0612 1.50112C14.0259 1.60564 14.6302 1.80561 15.1024 2.14868C15.4378 2.39233 15.7327 2.68725 15.9763 3.02261C16.3194 3.4948 16.5193 4.09916 16.6239 5.06388C16.7298 6.04166 16.7308 7.30428 16.7308 9.0625C16.7308 10.8207 16.7298 12.0833 16.6239 13.0612C16.5193 14.0259 16.3194 14.6302 15.9763 15.1024C15.7327 15.4378 15.4378 15.7327 15.1024 15.9763C14.6302 16.3194 14.0259 16.5193 13.0612 16.6239C12.0833 16.7298 10.8207 16.7308 9.0625 16.7308C7.30428 16.7308 6.04166 16.7298 5.06388 16.6239C4.09916 16.5193 3.4948 16.3194 3.02261 15.9763C2.68725 15.7327 2.39233 15.4378 2.14868 15.1024C1.80561 14.6302 1.60564 14.0259 1.50112 13.0612C1.39519 12.0833 1.39423 10.8207 1.39423 9.0625C1.39423 7.30428 1.39519 6.04166 1.50112 5.06388C1.60564 4.09916 1.80561 3.4948 2.14868 3.02261C2.39233 2.68725 2.68725 2.39233 3.02261 2.14868Z"
                fill="white"
              />
            </svg>
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base font-sans text-white font-normal group-hover:text-primary">
              Dashboard
            </h6>
          </Link>
          <Link
            href="/user-management"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/user-management" && "bg-pink on"
            }`}
          >
            <UserIcon />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary">
              User Management
            </h6>
          </Link>
          <Link
            href="/guide-management"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/guide-management" && "bg-pink on"
            }`}
          >
            <GuideIcon />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary">
              Guide Management
            </h6>
          </Link>
          <Link
            href="/content-manage"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/content-manage" && "bg-pink on"
            }`}
          >
            <ContentManage />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Content Management
            </h6>
          </Link>
          <Link
            href="/category-management"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/category-management" && "bg-pink on"
            }`}
          >
            <Category />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Category Management
            </h6>
          </Link>
          <Link
            href="/quickreads"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/quickreads" && "bg-pink on"
            }`}
          >
            <Quickreads />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Quick Reads
            </h6>
          </Link>
          <Link
            href="/live-manage"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/live-manage" && "bg-pink on"
            }`}
          >
            <Quickreads />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Live Management
            </h6>
          </Link>
          <Link
            href="/challenge-module"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/challenge-module" && "bg-pink on"
            }`}
          >
            <Challenge />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Challenge Module
            </h6>
          </Link>
          <Link
            href="/calmness-feedback"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/calmness-feedback" && "bg-pink on"
            }`}
          >
            <Calmess />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Calmess Feedback
            </h6>
          </Link>
          <Link
            href="/subscriptions"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/subscriptions" && "bg-pink on"
            }`}
          >
            <Subscriptions />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Subscriptions
            </h6>
          </Link>
          <Link
            href="/community-management"
            className={`flex items-center gap-2 lg:p-2 2xl:p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/community-management" && "bg-pink on"
            }`}
          >
            <Community />
            <h6 className="lg:text-xs xl:text-sm 2xl:text-base text-white font-normal font-sans group-hover:text-primary whitespace-nowrap">
              Community Management
            </h6>
          </Link>
          <Link
            href="/platform-earnings"
            className={`flex items-center gap-2 p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/platform-earnings" && "bg-pink on"
            }`}
          >
            <PlatformEarnings />
            <h6 className="text-sm text-white font-normal group-hover:text-primary">
              Platform Earnings
            </h6>
          </Link>
          <Link
            href="/notification-management"
            className={`flex items-center gap-2 p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/notification-management" && "bg-pink on"
            }`}
          >
            <NotificationManagement />
            <h6 className="text-sm text-white font-normal whitespace-nowrap group-hover:text-primary">
              Notifications Management
            </h6>
          </Link>
          <Link
            href="/badges&rewards"
            className={`flex items-center gap-2 p-4 rounded-lg w-full hover:bg-pink group cursor-pointer sidebar-link mt-3 ${
              pathName == "/badges&rewards" && "bg-pink on"
            }`}
          >
            <BadgesandRewards />
            <h6 className="text-sm text-white font-normal group-hover:text-primary">
              Badges and Rewards
            </h6>
          </Link>
        </div>
      </div>
      {/* <div className="flex items-center justify-center gap-2 p-4 rounded-lg w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <mask
            id="mask0_123_1169"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_123_1169)">
            <path
              d="M16.7917 10.8333H6.66667V9.16667H16.7917L15.5 7.875L16.6667 6.66667L20 10L16.6667 13.3333L15.5 12.125L16.7917 10.8333ZM12.5 7.5V4.16667H4.16667V15.8333H12.5V12.5H14.1667V15.8333C14.1667 16.2917 14.0035 16.684 13.6771 17.0104C13.3507 17.3368 12.9583 17.5 12.5 17.5H4.16667C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H12.5C12.9583 2.5 13.3507 2.66319 13.6771 2.98958C14.0035 3.31597 14.1667 3.70833 14.1667 4.16667V7.5H12.5Z"
              fill="white"
            />
          </g>
        </svg>
        <h6 className="text-sm text-white font-normal group-hover:text-primary">
          Logout
        </h6>
      </div> */}
    </div>
  );
}
