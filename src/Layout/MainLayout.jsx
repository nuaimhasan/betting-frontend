import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopHeader from "../components/TopHeader/TopHeader";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import ToggleModalAdd from "../components/ToggleModalAdd/ToggleModalAdd";
import MobilebottomHeader from "../components/MobilebottomHeader/MobilebottomHeader";

export default function MainLayout() {
  return (
    <>
      <TopHeader />
      <Header />
      <MenuHeader />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />

      <ToggleModalAdd />
      <MobilebottomHeader />
    </>
  );
}
