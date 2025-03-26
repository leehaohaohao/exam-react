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
    { label: "关于", icon: "ℹ️", path: "/about" },
    { label: "问卷", icon: "📝", path: "/survey" },
    { label: "嗯嗯", icon: <HeartIcon />, path: "/love", needConfirm: true },
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
                message="其他页面有没有看过呀，看过再来这个页面哦。然后想清楚哦，准备好在点进来好嘛，我想我这么说你因该也知道里面会是什么吧？网站不会关，一直运行的，我想让你想清楚了在进来。当然如果只是想进来看看那就看吧，因为你看不看我也不知道呢。"
            />
        </>
    );
};

export default FloatingMenu;
