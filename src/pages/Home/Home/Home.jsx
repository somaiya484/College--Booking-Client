import Collages from "../../Shared/Collages/Collages";
import Gallery from "../../Shared/Gallery/Gallery";
import Research from "../../Shared/Research/Research";
import Reviews from "../../Shared/Reviews/Reviews";
import SearchColl from "../../Shared/SearchColl/SearchColl";
import BannerSec from "./BannerSec/BannerSec";
import Faq from "../../Shared/Faq/Faq"
import About from "../../Shared/About/About";

const Home = () => {
    return (
        <div>
            <BannerSec></BannerSec>
            <SearchColl></SearchColl>
            <About></About>
            <Collages></Collages>
            <Gallery></Gallery>
            <Research></Research>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;