import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Circles */}
      <div className="absolute top-[15%] left-[60%] w-[300px] h-[300px] bg-gray-200 rounded-full opacity-40 z-0"></div>
      <div className="absolute top-[83%] right-[20%] w-[250px] h-[250px] bg-gray-200 rounded-full opacity-40 z-0"></div>

      {/* Header and Content */}
      <div className="relative z-10 px-20 py-3">
        <Header />
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
