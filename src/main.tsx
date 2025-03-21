import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ArtText from "./components/ArtText.tsx";
import Meteor from "./components/Meteor.tsx";
import EasterEgg from "./components/EasterEgg.tsx";
import Barrage from "./components/Barrage.tsx";
import OpeningAnimation from "./components/OpeningAnimation.tsx";

const App = () => {
    const [showOpening, setShowOpening] = useState<boolean>(true);
    const [showArtTextAnimation, setShowArtTextAnimation] = useState<boolean>(false);

    return (
        <>
            <Barrage />
            {/* ✅ 传递 showArtTextAnimation，控制 ArtText 动画播放 */}
            <ArtText animate={showArtTextAnimation} />

            <Meteor />
            <EasterEgg />

            {showOpening && (
                <OpeningAnimation
                    onComplete={() => setShowOpening(false)}
                    onStartArtText={() => setShowArtTextAnimation(true)} // ✅ 开幕式触发 ArtText 动画
                />
            )}
        </>
    );
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
