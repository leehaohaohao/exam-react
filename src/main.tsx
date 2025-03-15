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

    return (
        <>
            {/* 其他组件 */}
            <ArtText />
            <Barrage />
            <Meteor />
            <EasterEgg />

            {/* 遮罩层 */}
            {showOpening && (
                <OpeningAnimation
                    onComplete={() => setShowOpening(false)} // 动画完成后移除遮罩层
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