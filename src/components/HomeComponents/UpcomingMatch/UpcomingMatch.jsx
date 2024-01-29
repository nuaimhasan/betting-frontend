import Slider1 from "./Slider1";

export default function UpcomingMatch() {
  return (
    <section className="py-5 bg-gray-500">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <Slider1 />
          <Slider1 />
        </div>
      </div>
    </section>
  );
}
