import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-mist-200">
      <div className="w-[20%] h-[100vh] bg-mist-700">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
