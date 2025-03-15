/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:44
 */
import React from "react";
import "./EasterEgg.css";

const EasterEgg: React.FC = () => {
    const handleClick = () => {
        window.location.href = "https://your-birthday-website.com"; // 替换为你的生日祝福网站链接
    };

    return (
        <div className="easter-egg" onClick={handleClick}>
            🎁
        </div>
    );
};

export default EasterEgg;