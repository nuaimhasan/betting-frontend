import Banner from "../../components/HomeComponents/Banner/Banner";
import Headline from "../../components/HomeComponents/Headline/Headline";
import Services from "../../components/HomeComponents/Services/Services";
import UpcomingMatch from "../../components/HomeComponents/UpcomingMatch/UpcomingMatch";

export default function Home() {
  return (
    <>
      <Banner />
      <Headline />
      <UpcomingMatch />
      <Services />
    </>
  );
}
