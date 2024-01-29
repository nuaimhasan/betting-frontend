import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="min-h-[70vh]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
