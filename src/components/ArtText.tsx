/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:43
 */
import React, { useEffect, useState } from "react";
import "./ArtText.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

interface ArtTextProps {
    animate: boolean; // ✅ 控制动画是否播放
}

const ArtText: React.FC<ArtTextProps> = ({ animate }) => {
    const [playAnimation, setPlayAnimation] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [backgroundGradient, setBackgroundGradient] = useState<string>(
        "linear-gradient(to left, #a18cd1 0%, #fbc2eb 100%)"
    );
    const logos = [logo1, logo2,logo3]; // 多个 logo 图片
    const gradients = [
        "linear-gradient(to left, #fad0c4 0%, #ffd1ff 100%)",
        "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        "linear-gradient(to left, #a18cd1 0%, #fbc2eb 100%)",
        // "linear-gradient(to left, #ff9a9e 0%, #fad0c4 100%)",
    ]; // 多个背景渐变

    useEffect(() => {
        if (animate) {
            setPlayAnimation(true);

            const interval = setInterval(() => {
                // 先移除动画类
                setPlayAnimation(false);

                // 延迟一段时间后切换图片和背景，并重新添加动画类
                setTimeout(() => {
                    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logos.length);
                    setBackgroundGradient(gradients[(currentImageIndex + 1) % gradients.length]);
                    setPlayAnimation(true); // 重新触发动画
                }, 50); // 50ms 的延迟确保类名被移除后再添加
            }, 4000); // 每 3 秒切换一次图片和背景

            return () => clearInterval(interval); // 清除定时器
        }
    }, [animate, currentImageIndex, logos.length, gradients.length]);

    return (
        <>
            <div className="art-text-wrapper" style={{ background: backgroundGradient }}>
            </div>
            <div className="art-text">
                <div className="image-container">
                    <img
                        src={logos[currentImageIndex]}
                        alt="透明背景图片"
                        className={playAnimation ? "fade-in-bounce" : ""}
                    />
                </div>
            </div>
        </>
    );
};

export default ArtText;
