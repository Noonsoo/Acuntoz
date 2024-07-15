import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="border-t-2 border-l-2 border-r-2 border-b-2 border-customBrown w-[17%] h-full sticky">
        <Sidebar />
      </div>

      <div className="flex-1">
        <MainSection />
      </div>
    </div>
  );
}

export default App;
