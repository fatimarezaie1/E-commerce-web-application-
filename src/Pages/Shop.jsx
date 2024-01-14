import NewCollections from "../Components/New Collections/NewCollections";
import NewLetter from "../Components/Newsletter/NewsLetter";
import Offer from "../Components/Offer/Offer";
import Populer from "../Components/Populer/Populer";
import Hero from "../Components/hero/hero";

export default function Shop(){
    return(
        <div>
            <Hero />
            <Populer />
            <Offer />
            <NewCollections />
            <NewLetter />
        </div>
    )
}