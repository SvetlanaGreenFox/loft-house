import Benefits from "./Benefits";
import Apartments from "./Apartments";
import Cta from "./Cta";
import Feedback from "./Feedback";
import Video from "./Video";
import Map from "./Map";

const Main = () => {
    return (
        <main className="main">
            <Benefits />
            <Apartments />
            <Cta />
            <Video />
            <Map />
            <Feedback />
        </main>

    );
}

export { Main };