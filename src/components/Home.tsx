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

const Home = () => {
    const [showOpening, setShowOpening] = useState<boolean>(true);
    const [showArtTextAnimation, setShowArtTextAnimation] = useState<boolean>(false);

    return (
        <>
            <Barrage />
            <ArtText animate={showArtTextAnimation} />
            <FloatingMenu/>
            <Meteor />
            {showOpening && (
                <OpeningAnimation
                    onComplete={() => setShowOpening(false)}
                    onStartArtText={() => setShowArtTextAnimation(true)} // ✅ 开幕式触发 ArtText 动画
                />
            )}
        </>
    );
};
export default Home;