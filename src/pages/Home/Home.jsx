import Banner from "../../components/HomeComponents/Banner/Banner";
import MobileCategory from "../../components/HomeComponents/Category/MobileCategory/MobileCategory";
import CategoryWiseGame from "../../components/HomeComponents/CategoryWiseGame/CategoryWiseGame";
import Headline from "../../components/HomeComponents/Headline/Headline";
import Matches from "../../components/HomeComponents/Matches/Matches";
import Services from "../../components/HomeComponents/Services/Services";
import UpcomingMatch from "../../components/HomeComponents/UpcomingMatch/UpcomingMatch";

export default function Home() {
  window.scroll(0, 0);

  return (
    <>
      <Banner />
      <Headline />
      <MobileCategory />
      <Matches />
      <UpcomingMatch />
      <CategoryWiseGame />
      <Services />
    </>
  );
}
