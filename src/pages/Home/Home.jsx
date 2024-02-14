import Banner from "../../components/HomeComponents/Banner/Banner";
import MobileCategory from "../../components/HomeComponents/Category/MobileCategory/MobileCategory";
import CricketBet from "../../components/HomeComponents/CricketBet/CricketBet";
import FootballBet from "../../components/HomeComponents/FootballBet/FootballBet";
import Headline from "../../components/HomeComponents/Headline/Headline";
import Matches from "../../components/HomeComponents/Matches/Matches";
import Services from "../../components/HomeComponents/Services/Services";
import UpcomingMatch from "../../components/HomeComponents/UpcomingMatch/UpcomingMatch";

export default function Home() {
  return (
    <>
      <Banner />
      <Headline />
      <MobileCategory />
      <Matches />
      <UpcomingMatch />
      <CricketBet />
      <FootballBet />
      <Services />
    </>
  );
}
