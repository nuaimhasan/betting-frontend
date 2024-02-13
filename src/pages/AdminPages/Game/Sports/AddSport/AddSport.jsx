import { Link } from "react-router-dom";

export default function AddSport() {
  return (
    <section className="shadow rounded p-4 ">
      <h2 className="font-medium text-gray-600 text-lg">Add Sport Game</h2>

      <form className="mt-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="form_control">
            <label>League Name</label>
            <input type="text" />
          </div>

          <div className="form_control">
            <label>Match Type</label>
            <select name="">
              <option value="ODI">ODI</option>
              <option value="T20">T20</option>
              <option value="TEST">TEST</option>
            </select>
          </div>

          <div className="form_control">
            <label>Start Date</label>
            <input type="date" />
          </div>

          <div className="form_control">
            <label>Start Time</label>
            <input type="time" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="form_control">
            <label>Category</label>
            <select name="">
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
              <option value="kabaddi">Kabaddi</option>
            </select>
          </div>

          <div className="form_control">
            <label>Match Status</label>
            <input type="text" />
          </div>

          <div className="form_control">
            <label>Match Venue</label>
            <input type="text" />
          </div>
        </div>

        {/* team 1 Info */}
        <div className="mt-2 border rounded p-4">
          <h2 className="text-lg">Team 1</h2>

          <div className="mt-2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="form_control">
                <label>Icon</label>
                <input type="file" accept="image/png, image/jpg, image/jpeg" />
              </div>

              <div className="form_control">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="form_control">
                <label>Short Name</label>
                <input type="text" />
              </div>

              <div className="form_control">
                <label>Win Offer %</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* team 2 Info */}
        <div className="mt-2 border rounded p-4">
          <h2 className="text-lg">Team 2</h2>

          <div className="mt-2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="form_control">
                <label>Icon</label>
                <input type="file" accept="image/png, image/jpg, image/jpeg" />
              </div>

              <div className="form_control">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="form_control">
                <label>Short Name</label>
                <input type="text" />
              </div>

              <div className="form_control">
                <label>Win Offer %</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <Link
            to="/admin/game/sports"
            className="px-5 py-1 rounded bg-gray-200"
          >
            Cancel
          </Link>
          <button className="px-5 py-1 rounded bg-red-500 text-white">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
