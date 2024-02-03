import Marquee from "react-fast-marquee";
import { MdCampaign } from "react-icons/md";

export default function Headline() {
  return (
    <section className="lg:bg-red-500 lg:text-white text-[15px] py-1">
      <div className="container">
        <div className="flex items-center">
          <p className="sm:px-3 pr-2">
            <MdCampaign className="text-2xl text-red-600 lg:text-white" />
          </p>
          <Marquee>
            <p>
              eManager is Bangladesh&apos;s Best Cricket Betting Exchange
              Platform.
            </p>
            <p>Sign Up For Your Free ID Today.</p>
            <p>Bkash, Nagad & Rocket Accepted. More Ways to Win Big !!</p>
            <p>
              eManager is now a partner with Jilli, Stay tuned for more
              exclusive offers, tournaments, and events on your favourite Jilli
              games.
            </p>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
