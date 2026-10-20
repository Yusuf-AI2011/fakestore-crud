import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div>
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
