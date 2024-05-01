import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="flex justify-center items-center p-5">
        <img src="/public/acuntozlogo.svg" className="w-5 h-5" alt="" />
        <span className="text-customBrown text-xl font-bold">CUNTOZ </span>
      </div>
      <div class=" w-16 h-16 bg-customGray rounded-full flex justify-center items-center text-black mx-auto">
        Logo
      </div>
      <h1 className="font-semibold text-xl text-center mt-3 mb-5">
        The Example
      </h1>
      <div className="flex flex-col space-y-[11px]">
        <h1 className="text-customWhite text-xs ml-2 mt-2">Main menu</h1>
        <div className="flex flex-col space-y-4 p-4">
          <div class="flex items-center">
            <img src="/public/dashboard.svg" class="w-6 h-6 mr-2" alt="Logo" />
            <p class="">Dashboard</p>
          </div>
          <div class="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                src="/public/contract_edit.png"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="">Contracts</p>
            </div>

            <div>
              <img src="dropdown.png" alt="" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                src="/public/folder_shared.svg"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="  ">Tenders</p>
            </div>

            <div>
              <img src="/public/dropdown.png" alt="" />
            </div>
          </div>
          <div class="flex items-center">
            <img src="/public/bar_chart.svg" class="w-6 h-6 mr-2" alt="Logo" />
            <p class="">Reports</p>
          </div>
        </div>
        <h1 className="text-customWhite text-xs ml-2">Manage</h1>
        <div>
          <div className="flex flex-col space-y-4 p-4">
            <div class="flex items-center bg-customBrown">
              <img
                src="/public/group.svg"
                class="w-6 h-6 font-black mr-2 text-black"
                alt="Logo"
              />
              <p class="">Client Users</p>
            </div>

            <div class="flex items-center">
              <img
                src="/public/tenderers.svg"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="">Tenderers</p>
            </div>
          </div>
        </div>
        <h1 className="text-customWhite text-xs ml-2 mt-2">Support</h1>
        <div>
          <div className="flex flex-col space-y-4 p-4">
            <div class="flex items-center">
              <img
                src="/public/support_agent.svg"
                class="w-6 h-6 font-black mr-2 text-black"
                alt="Logo"
              />
              <p class="">Technical Support</p>
            </div>

            <div class="flex items-center">
              <img src="/public/article.svg" class="w-6 h-6 mr-2" alt="Logo" />
              <p class="">Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
