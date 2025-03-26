/**
 * @description
 * @author lihao
 * @date 2025/3/23 22:41
 */
import {useState} from "react";
import ArtText from "./ArtText.tsx";
import FloatingMenu from "./FloatingMenu.tsx";
import Meteor from "./Meteor.tsx";
import OpeningAnimation from "./OpeningAnimation.tsx";
import Barrage from "./Barrage.tsx";
import Introduction from "./Introduction.tsx";

const Home = () => {
    const [showIntroduction, setShowIntroduction] = useState<boolean>(true);
    const [showOpening, setShowOpening] = useState<boolean>(false);
    const [showArtTextAnimation, setShowArtTextAnimation] = useState<boolean>(false);

    return (
        <>
            <Barrage />
            <ArtText animate={showArtTextAnimation} />
            <FloatingMenu/>
            <Meteor />
            <OpeningAnimation
                onComplete={() => setShowOpening(false)}
                onStartArtText={() => setShowArtTextAnimation(true)}
            />
            {showIntroduction && (
                <Introduction onStart={() => {
                    setShowIntroduction(false);
                    setShowOpening(true);
                }} />
            )}
            {showOpening&&<></>}
        </>
    );
};
export default Home;