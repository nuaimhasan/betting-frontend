import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Categories</h1>
          <Link
            to="/admin/category/sport/add-category"
            className="px-4 py-1 rounded bg-red-600 text-sm text-white"
          >
            Add New Category
          </Link>
        </div>

        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Order</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cricket</td>
                <td className="flex items-center gap-2">
                  <Link
                    to={`/admin/category/sport/edit-category/1`}
                    className="text-lg"
                  >
                    <FiEdit3 />
                  </Link>
                  <button className="text-lg">
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
