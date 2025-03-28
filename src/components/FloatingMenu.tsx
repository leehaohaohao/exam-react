/**
 * @description
 * @author lihao
 * @date 2025/3/23 22:32
 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FloatingMenu.css";
import ConfirmDialog from "./ConfirmDialog";

const HeartIcon = () => (
    <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);

const menuItems = [
    { label: "照片", icon: "📸", path: "/photo" },
    { label: "问卷", icon: "📝", path: "/survey" },
    { label: "关于", icon: "ℹ️", path: "/about" },
    { label: "神秘", icon: <HeartIcon />, path: "/love", needConfirm: true },
];

const FloatingMenu: React.FC = () => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleMenuClick = (path: string, needConfirm: boolean) => {
        if (needConfirm) {
            setSelectedPath(path);
            setShowConfirm(true);
        } else {
            navigate(path);
        }
    };

    const handleConfirm = () => {
        if (selectedPath) {
            navigate(selectedPath);
            setShowConfirm(false);
            setSelectedPath(null);
        }
    };

    return (
        <>
            <div className="floating-menu">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="menu-item"
                        onClick={() => handleMenuClick(item.path, item.needConfirm || false)}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </div>
                ))}
            </div>
            <ConfirmDialog
                isOpen={showConfirm}
                onClose={() => {
                    setShowConfirm(false);
                    setSelectedPath(null);
                }}
                onConfirm={handleConfirm}
                message="✨ 「接下来的内容，可能需要一点点心理准备哦。」     这个页面会一直在这里，不会消失，也不会过期——所以，不用急着点进来。                                                               如果你准备好了，或者只是单纯好奇……都可以随时打开它。毕竟，这是写给你的。                                                当然，你看或不看，我都不会知道。但如果你愿意，我希望它能成为故事里的开头。"
                confirmText="我想好啦！"
                cancelText="再想想~"
            />
        </>
    );
};

export default FloatingMenu;
