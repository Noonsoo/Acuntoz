import React from "react";

function Footer() {
  return (
    <div className="flex justify-between items-center p-4">
      <p className="text-gray-500 text-xs text-center mt-4">
        Privacy Statement
      </p>
      <img src="/public/Logo.svg" alt="" />
      <p className="text-gray-500 text-xs text-center mt-4">
        ©2023 - Acuntoz | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
