import Banner from "../../components/HomeComponents/Banner/Banner";
import MobileCategory from "../../components/HomeComponents/Category/MobileCategory/MobileCategory";
import Headline from "../../components/HomeComponents/Headline/Headline";
import Services from "../../components/HomeComponents/Services/Services";
import UpcomingMatch from "../../components/HomeComponents/UpcomingMatch/UpcomingMatch";

export default function Home() {
  return (
    <>
      <Banner />
      <Headline />
      <MobileCategory />
      <UpcomingMatch />
      <Services />
    </>
  );
}
