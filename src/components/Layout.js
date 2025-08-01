import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Header and Content */}
      <div className="">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
