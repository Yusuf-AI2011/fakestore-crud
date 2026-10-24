import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const layout = ({ children }: any) => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-start items-start">
      <div className="w-[10%] h-[100vh] bg-mist-700">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
