import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="py-10 bg-gray-600 text-white">
      <div className="container">
        <div className="grid grid-cols-4 gap-10">
          <div className="flex items-center gap-3">
            <img
              src="/images/icon-24hr.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="font-medium">Customer Support 24/7</h2>
              <div className="text-sm">
                <p className="text-gray-400 py-1">
                  Have a question? Speak to our agent online.
                </p>
                <Link
                  to=""
                  className="hover:text-red-600 hover:underline duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/images/icon-book.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="font-medium">New Member Guide</h2>
              <div className="text-sm">
                <p className="text-gray-400 py-1">5 mins guide</p>
                <Link
                  to=""
                  className="hover:text-red-600 hover:underline duration-300"
                >
                  Check Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/images/icon-win.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="font-medium">Live Streaming</h2>
              <div className="text-sm">
                <p className="text-gray-400 py-1">
                  Watch worldwide live broadcast.
                </p>
                <Link
                  to=""
                  className="hover:text-red-600 hover:underline duration-300"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/images/icon-license.png"
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="font-medium">Marvelbet Blog</h2>
              <div className="text-sm">
                <p className="text-gray-400 py-1">
                  Check out the latest Marvelbet matches and news.
                </p>
                <Link
                  to=""
                  className="hover:text-red-600 hover:underline duration-300"
                >
                  Check now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
