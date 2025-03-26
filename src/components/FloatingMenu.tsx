/**
 * @description
 * @author lihao
 * @date 2025/3/23 22:32
 */
import React from "react";
import { Link } from "react-router-dom";
import "./FloatingMenu.css";

const HeartIcon = () => (
    <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);

const menuItems = [
    { label: "照片", icon: "📸", path: "/photo" },
    { label: "关于", icon: "ℹ️", path: "/about" },
    { label: "问卷", icon: "📝", path: "/survey" },
    { label: "嗯嗯", icon: <HeartIcon />, path: "/love" },
];

const FloatingMenu: React.FC = () => {
    return (
        <div className="floating-menu">
            {menuItems.map((item, index) => (
                <Link key={index} to={item.path} className="menu-item">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default FloatingMenu;
