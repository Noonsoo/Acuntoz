import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function MainSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Form />
      </div>

      <Footer />
    </div>
  );
}

export default MainSection;
