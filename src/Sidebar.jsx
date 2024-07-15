import React, { useState } from "react";

function Sidebar() {
  const [isTenderOpen, setIsTenderOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);

  const toggleTenderDropdown = () => {
    setIsTenderOpen(!isTenderOpen);
  };
  const toggleContractDropdown = () => {
    setIsContractOpen(!isContractOpen);
  };
  const toggleEventDropdown = () => {
    setIsEventOpen(!isEventOpen);
  };
  return (
    <div className="">
      <div className=" flex justify-center items-center p-5">
        <img src="/public/acuntozlogo.svg" className="w-5 h-5" alt="" />
        <span className="text-customBrown text-xl font-bold">CUNTOZ </span>
      </div>
      <div class=" w-16 h-16 bg-customGray rounded-full flex justify-center items-center text-black mx-auto">
        Logo
      </div>
      <h1 className="font-semibold text-xl text-center mt-3 mb-5">
        The Example
      </h1>
      <div className="flex flex-col space-y-[5px]">
        <h1 className="text-customWhite text-xs ml-2 mt-2">Main menu</h1>
        <div className="flex flex-col gap-2 p-4">
          <div class="flex items-center ">
            <img
              src="/public/dashboard (1).svg"
              class="w-6 h-6 mr-2"
              alt="Logo"
            />
            <p class=" bg-customBrownieS">Dashboard</p>
          </div>
          <div class="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                src="/public/legal_13794759 1 (4).svg"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="  ">Tenders</p>
            </div>

            <div>
              <button onClick={toggleTenderDropdown}>
                <img
                  src="/public/Path 4.svg"
                  className={`transform transition-transform duration-200 ${
                    isTenderOpen ? "rotate-180" : "rotate-0"
                  }`}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className={`transition duration-300 ease-in-out `}>
            {isTenderOpen && (
              <div className=" flex flex-col ml-8 gap-2 transition-all duration-1000 ease-in-out ">
                <p className="">Tender Log</p>
                <p>Clarification</p>
                <p>Query</p>
              </div>
            )}
          </div>

          <div class=" flex items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                src="/public/contract_edit (1).svg"
                className="w-6 h-6 mr-2 text-customBrown "
                fill="currentColor"
                alt="Logo"
              />
              <p class="">Contracts</p>
            </div>
            <div>
              <button onClick={toggleContractDropdown}>
                <img
                  src="/public/Path 4.svg"
                  className={`transform transition-transform duration-300 ${
                    isContractOpen ? "rotate-180" : "rotate-0"
                  }`}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className={`transition duration-300 ease-in-out `}>
            {isContractOpen && (
              <div className=" flex flex-col ml-8 gap-2 ">
                <p>Contract List</p>
                <p>Issue Certificate</p>
              </div>
            )}
          </div>
          <div class=" flex items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                src="/public/Vector (18).svg"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="">Events</p>
            </div>
            <div>
              <button onClick={toggleEventDropdown}>
                <img
                  src="/public/Path 4.svg"
                  className={`transform transition-transform duration-300 ${
                    isEventOpen ? "rotate-180" : "rotate-0"
                  }`}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className={`transition duration-300 ease-in-out `}>
            {isEventOpen && (
              <div className=" flex flex-col ml-8 gap-2 ">
                <p>Raise Inspection</p>
                <p>Verify Event</p>
              </div>
            )}
          </div>
          <div class="flex items-center">
            <img
              src="/public/bar_chart (1).svg"
              class="w-6 h-6 mr-2"
              alt="Logo"
            />
            <p class="">Analytics</p>
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
                src="/public/settings_3917058 1.svg"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="">Settings</p>
            </div>
          </div>
        </div>
        <h1 className="text-customWhite text-xs ml-2 mt-2">Support</h1>
        <div>
          <div className="flex flex-col space-y-4 p-4">
            <div class="flex items-center">
              <img
                src="/public/support_agent (2).svg"
                class="w-6 h-6 font-black mr-2 text-black"
                alt="Logo"
              />
              <p class="">Tech Support</p>
            </div>

            <div class="flex items-center">
              <img
                src="/public/article (1).svg"
                class="w-6 h-6 mr-2"
                alt="Logo"
              />
              <p class="">Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
