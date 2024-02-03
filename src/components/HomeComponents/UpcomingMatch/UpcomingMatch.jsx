import ForMobile from "./ForMobile/ForMobile";
import Slider1 from "./Slider1";

export default function UpcomingMatch() {
  return (
    <>
      <section className="py-5 lg:bg-gray-800">
        <div className="container">
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-5">
              <Slider1 />
              <Slider1 />
            </div>
          </div>

          <div className="lg:hidden">
            <ForMobile />
          </div>
        </div>
      </section>
    </>
  );
}
