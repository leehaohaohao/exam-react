/**
 * @description
 * @author lihao
 * @date 2025/3/23 22:32
 */
import React from "react";
import { Link } from "react-router-dom";
import "./FloatingMenu.css";

const menuItems = [
    { label: "图片", icon: "🏠", path: "/photo" },
    { label: "祝福", icon: "🎉", path: "/birthday" },
    { label: "相册", icon: "📸", path: "/gallery" },
    { label: "留言", icon: "✍️", path: "/messages" },
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
