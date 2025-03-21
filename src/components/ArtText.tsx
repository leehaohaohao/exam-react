/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:43
 */
import React, { useEffect, useState } from "react";
import "./ArtText.css";
import logo from "../assets/logo1.png";

interface ArtTextProps {
    animate: boolean; // ✅ 控制动画是否播放
}

const ArtText: React.FC<ArtTextProps> = ({ animate }) => {
    const [playAnimation, setPlayAnimation] = useState<boolean>(false);

    useEffect(() => {
        if (animate) {
            setPlayAnimation(true);
        }
    }, [animate]);

    return (
        <div className="art-text">
            <div className="image-container">
                <img src={logo} alt="透明背景图片" className={playAnimation ? "fade-in-bounce" : ""} />
            </div>
        </div>
    );
};

export default ArtText;
