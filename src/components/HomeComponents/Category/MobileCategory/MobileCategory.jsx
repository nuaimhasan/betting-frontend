import "./MobileCategory.css";
import { Link } from "react-router-dom";

export default function MobileCategory() {
  return (
    <section className="lg:hidden mobile_category pb-2">
      <div className="overflow-x-auto">
        <div className="inline-flex bg-gray-900">
          <Link to="/sports" className="active">
            <img
              src="/images/category_icons/sport.png"
              alt=""
              className="w-9"
            />
            <p className="text-white text-xs font-medium">All Sports</p>
          </Link>
          <Link to="/sports">
            <img
              src="/images/category_icons/sport.png"
              alt=""
              className="w-9"
            />
            <p className="text-white text-xs font-medium">Cricket</p>
          </Link>
          <Link to="/sports">
            <img
              src="/images/category_icons/sport.png"
              alt=""
              className="w-9"
            />
            <p className="text-white text-xs font-medium">Football</p>
          </Link>
          <Link to="/sports">
            <img
              src="/images/category_icons/sport.png"
              alt=""
              className="w-9"
            />
            <p className="text-white text-xs font-medium">Kabbadi</p>
          </Link>
          <Link to="/sports">
            <img
              src="/images/category_icons/sport.png"
              alt=""
              className="w-9"
            />
            <p className="text-white text-xs font-medium">Sportsbook</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
