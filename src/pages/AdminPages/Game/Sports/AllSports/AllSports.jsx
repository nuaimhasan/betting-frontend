import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

export default function AllSports() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <p>AllSports</p>
        <Link
          to="/admin/game/sports/add"
          className="px-4 py-1 rounded bg-red-600 text-sm text-white"
        >
          Add New
        </Link>
      </div>

      <div className="mt-6 relative overflow-x-auto shadow">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Team</th>
              <th>Category</th>
              <th>Start Match</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Durdanto Dhaka VS Comilla Victorians</td>
              <td>Cricket</td>
              <td>05:00, 24-02-12</td>
              <td>Match not start</td>
              <td>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <Link to={`/admin/game/sports/edit/1`}>
                    <MdEdit />
                  </Link>
                  <button>
                    <MdDelete className="text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Durdanto Dhaka VS Comilla Victorians</td>
              <td>Cricket</td>
              <td>05:00, 24-02-12</td>
              <td>Durdanto Dhaka win 4 wickets</td>
              <td>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <Link to={`/admin/game/sports/edit/1`}>
                    <MdEdit />
                  </Link>
                  <button>
                    <MdDelete className="text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
