import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
    </>
  );
}
