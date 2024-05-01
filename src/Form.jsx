import React, { useState } from "react";

function Form() {
  const [activeSection, setActiveSection] = useState("personal");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="flex justify-around mt-10 mb-4">
        <button
          className={`px-4 py-2 text-sm focus:outline-none ${
            activeSection === "personal"
              ? "bg-customBrown rounded-sm"
              : "bg-white"
          }`}
          onClick={() => handleSectionClick("personal")}>
          Personal Details
        </button>
        <button
          className={`${
            activeSection === "company"
              ? "bg-customBrown rounded-sm"
              : "bg-white"
          }`}
          onClick={() => handleSectionClick("company")}>
          Company Details
        </button>
        <button
          className={`px-4 py-2 text-sm focus:outline-none ${
            activeSection === "legal" ? "bg-customBrown rounded-sm" : "bg-white"
          }`}
          onClick={() => handleSectionClick("legal")}>
          Company Legal Information
        </button>
      </div>

      <hr className="border-t border-customBrown -mt-4" />
      {activeSection === "personal" && (
        <>
          <div className="grid  grid-cols-2 justify-items-center items-center px-16 pt-3 gap-4">
            <div className="grid grid-rows-4">
              <div className="flex justify-start">
                <label className="mr-2" htmlFor="firstName">
                  Firstname:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-black rounded  mb-4"
                />
              </div>
              <div className="flex">
                <label className="mr-2" htmlFor="lastName">
                  Lastname:
                </label>
                <input
                  type="text"
                  id="lastName"
                  className=" border w-full border-black rounded  mb-4"
                />
              </div>
              <div className="flex">
                <label
                  className="mr-2 w-[90px] text-right inline-block"
                  htmlFor="lastName">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  className="w-full border rounded border-black  mb-4"
                />
              </div>
              <div className="flex items-center">
                <label className="mr-2" htmlFor="firstName">
                  Phone No:
                </label>
                <div>
                  <select
                    id="countryCode"
                    className="border-b border-l border-t pb-[0.5px] border-black rounded-l  outline-none">
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                    {/* Add more country code options as needed */}
                  </select>

                  <input
                    type="tel"
                    id="phoneNumber"
                    className="border-b border-r border-t border-black rounded-r outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>
            <div className="grid col-span-1 grid-rows-4">
              <div className="flex">
                <label
                  className="mr-2 w-[120px] text-right"
                  htmlFor="firstName">
                  Position:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-black rounded  mb-4"
                />
              </div>
              <div className="flex">
                <label className="mr-2" htmlFor="lastName">
                  Department:
                </label>
                <input
                  type="text"
                  id="department"
                  className="w-full border border-black rounded  mb-4"
                />
              </div>
              <div class="flex  row-span-2 cursor-pointer">
                <p className="mr-2 text-xs w-[150px] text-right">
                  Profile Picture
                </p>
                <label
                  htmlFor="profilePictureInput"
                  className="mr-2 border border-black border-dotted rounded p-2 cursor-pointer ">
                  <div className="flex flex-col">
                    <div className="relative flex items-center justify-center">
                      <img
                        src="/public/Paper-Upload.svg"
                        alt=""
                        className="mx-auto w-5 h-5 inline z-100"
                      />
                      <input
                        id="profilePictureInput"
                        type="file"
                        className="hidden cursor-pointer absolute left-0 "
                        accept="image/png, image/jpeg"
                      />
                    </div>

                    <p className="text-xs font-bold mb-1">
                      Drag & Drop or
                      <span className="text-customBrown ml-1">Choose</span>{" "}
                      image to upload
                    </p>
                    <p className="text-gray-500 text-xs text-center">
                      Supports: png, jpg, jpeg
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="  flex  justify-end mr-[70px] mt-4  text-white text-xs">
            <button className="bg-customBrown rounded  px-5 py-2">
              Update
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Form;
