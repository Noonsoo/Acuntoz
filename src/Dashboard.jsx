import React from "react";

function Dashboard() {
  return (
    <div className="w-[85%] mx-auto">
      <p className=" text-gray-700 mt-6">Summary</p>
      <div className="flex flex-wrap   justify-between gap-4 ">
        <div className="flex gap-3 items-center rounded-xl px-4 py-2 bg-customPink">
          <img className="w-14 h-14" src="/public/contract_edit.png" alt="" />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-0">
              <p className=" text-xs font-bold">Awarded</p>
              <p className="text-xs font-bold -mt-[3px]">Contracts</p>
            </div>
            <span className="text-customBrown text-2xl">38</span>
          </div>
        </div>

        <div className="flex gap-3 items-center rounded-xl px-2 py-2 bg-customPink">
          <img
            className="w-14 h-14"
            src="/public/legal_13794759 1.svg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-0">
              <p className=" text-xs font-bold">Draft</p>
              <p className="text-xs font-bold -mt-[3px]">Tenders</p>
            </div>
            <span className="text-customBrown text-2xl">38</span>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-xl px-2 py-2 bg-customPink">
          <img
            className="w-14 h-14"
            src="/public/envelope-marker_5074130 1.svg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-0">
              <p className=" text-xs font-bold">Un-replied</p>
              <p className="text-xs font-bold -mt-[3px]">letters</p>
            </div>
            <span className="text-customBrown text-2xl">38</span>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-xl px-2 py-2 bg-customPink">
          <img className="w-14 h-14" src="/public/tenders.svg" alt=" " />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-0">
              <p className=" text-xs font-bold">Registered</p>
              <p className="text-xs font-bold -mt-[3px]">Tenderers</p>
            </div>
            <span className="text-customBrown text-2xl">38</span>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-xl px-2 py-2 bg-customPink">
          <img
            className="w-14 h-14"
            src="/public/certificate_issued.svg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-0">
              <p className=" text-xs font-bold">Certificate</p>
              <p className="text-xs font-bold -mt-[3px]">Issued</p>
            </div>
            <span className="text-customBrown text-2xl">38</span>
          </div>
        </div>
      </div>
      <p className=" text-gray-700 mt-6">Shortcuts</p>
      <div className="flex gap-2 ">
        <div className="  w-[30%]     border  rounded-lg  border-customBrown ">
          <div className="flex flex-wrap items-center justify-center gap-3  py-3 ">
            <div className="flex flex-col gap-1 justify-center items-center py-1 px-3   bg-customBrown2 rounded-lg ">
              <img
                className="w-10 h-10"
                src="/public/event_FILL0_wght400_GRAD0_opsz24 1.svg"
                alt=""
              />
              <p className="text-xs text-white px-3">Create{""} Event</p>
            </div>
            <div className="flex flex-col gap-1 px-3  justify-center items-center py-1   bg-customBrown2 rounded-lg">
              <img className="w-10 h-10" src="/public/contract.svg" alt="" />
              <p className="text-xs text-white px-2">Award Contract</p>
            </div>

            <div className="flex flex-col px-3 gap-1 justify-center items-center py-1   bg-customBrown2 rounded-lg ">
              <img
                className="w-10 h-10"
                src="/public/ballot_7653156 1.svg"
                alt=""
              />
              <p className="text-xs text-white px-5">Query List</p>
            </div>
            <div className="flex flex-col px-3 gap-1 justify-center items-center py-1   bg-customBrown2 rounded-lg">
              <img
                className="w-10 h-10"
                src="/public/legal_13794759 1.png"
                alt=""
              />
              <p className="text-xs text-white px-3">Create Tender</p>
            </div>
          </div>
        </div>

        <div className=" w-[30%] flex flex-col gap-2 p-2 border border-customBrown rounded-lg">
          <div className="bg-customGray2 flex space-x-1  rounded-xl items-center">
            <p className="font-bold text-5xl">23</p>
            <img className="w-12 h-16" src="/public/Vector (16).svg" alt="" />
            <p className="text-xs font-bold">
              Queries without <br /> any response
            </p>
          </div>
          <div className="bg-customGray2 flex space-x-2 px-2 py-2 rounded-xl items-center">
            <p className="font-bold text-5xl">0</p>
            <img className="w-12 h-16" src="/public/Vector (17).svg" alt="" />
            <p className="text-xs font-bold">
              Users waiting for <br /> account approval
            </p>
          </div>
        </div>
        <div className=" h-[170px] flex flex-1 bg-customGray3 rounded-md "></div>
      </div>
      <p className=" text-gray-700 mt-6">Calendar</p>
      <div className="flex flex-grow h-[655px] bg-white rounded-[20px] shadow border-2 border-zinc-300" />
    </div>
  );
}

export default Dashboard;
