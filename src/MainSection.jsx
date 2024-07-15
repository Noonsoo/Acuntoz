import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

function MainSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        {/* <Form /> */}
        <Dashboard />
      </div>

      <Footer />
    </div>
  );
}

export default MainSection;
