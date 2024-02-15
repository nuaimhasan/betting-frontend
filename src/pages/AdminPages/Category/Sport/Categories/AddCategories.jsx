export default function AddCategories() {
  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Add Category</h3>
      </div>

      <form className="p-4 sm:w-1/2">
        <div className="form_control">
          <label>Category</label>
          <input type="text" name="name" placeholder="Enter Category Name" />
        </div>

        <div className="form_control">
          <label>Order</label>
          <input type="number" name="order" />
        </div>

        <div className="mt-2">
          <div className="flex gap-2">
            <button className="px-5 py-1 rounded bg-red-500 text-white">
              Add Category
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
