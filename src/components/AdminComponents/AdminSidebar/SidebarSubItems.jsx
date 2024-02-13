import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SidebarSubItems({ subItems }) {
  const [subDropdown, setSubDropdown] = useState(false);

  if (subItems?.subSubMenu) {
    return (
      <li>
        <button onClick={() => setSubDropdown(!subDropdown)}>
          <div className="flex items-center gap-1.5">
            {subItems.icon} {subItems.title}
          </div>

          {subDropdown ? (
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          ) : (
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          )}
        </button>

        <nav className={`subDropdown ${subDropdown && "subDropdown_show"}`}>
          <ul>
            {subItems?.subSubMenu?.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </li>
    );
  } else {
    return (
      <li>
        <NavLink to={subItems?.path}>
          <h6>{subItems.title}</h6>
        </NavLink>
      </li>
    );
  }
}
