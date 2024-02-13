import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import SidebarSubItems from "./SidebarSubItems";

export default function SidebarItems({ item }) {
  const [dropdown, setDropdown] = useState(false);

  if (item?.subMenu) {
    return (
      <li>
        <button onClick={() => setDropdown(!dropdown)}>
          <div className="flex items-center gap-1.5">
            {item.icon} {item.title}
          </div>

          {dropdown ? (
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          ) : (
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          )}
        </button>

        <nav className={`dropdown ${dropdown && "dropdown_show"}`}>
          <ul>
            {item?.subMenu?.map((subItems, i) => (
              <SidebarSubItems key={i} subItems={subItems} />
            ))}
          </ul>
        </nav>
      </li>
    );
  } else {
    return (
      <li>
        <NavLink to={item?.path}>
          {item.icon}
          {item.title}
        </NavLink>
      </li>
    );
  }
}
