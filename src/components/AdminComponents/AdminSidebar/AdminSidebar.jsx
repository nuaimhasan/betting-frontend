import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdCategory } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import SidebarItems from "./SidebarItems";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },
  {
    icon: <MdCategory />,
    title: "Category",
    subMenu: [
      {
        title: "Sports",
        path: "/admin/category/sport/all-categories",
      },
    ],
  },
  {
    icon: <GrGamepad />,
    title: "Game",
    subMenu: [
      {
        title: "Sports",
        path: "/admin/game/sports",
      },
    ],
  },
];

export default function AdminSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <nav className="admin_siderbar">
          <Link to="/admin/dashboard" className="py-5 block">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="w-1/2 mx-auto"
            />
          </Link>

          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-accent p-2 flex justify-between items-center font-light">
        <p>Visit Front-End</p>
        <Link to="/" target="_blank" className="text-primary hover:underline">
          BET<span className="text-red-600">X</span>FIRE
        </Link>
      </div>
    </div>
  );
}
