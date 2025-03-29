/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:44
 */
import React, { useState, useEffect } from "react";
import "./Barrage.css";
import { Barrage } from "../define/types";

const messages: string[] = [
    "美 的 不 像 话",
    "亿点漂亮，亿点迷人",
    "温柔善良，美若天仙",
    "沉鱼落雁，闭月羞花，倾城倾国，国色天香",
    "蒹葭苍苍，白露为霜。所谓伊人，在水一方",
    "九  天  玄  女",
    "秀  色  可  餐",
    "你是人间限量款，独一无二",
    "风  华  绝  代",
];
const BarrageComponent: React.FC = () => {
    const [barrages, setBarrages] = useState<Barrage[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const randomTop = Math.floor(Math.random() * 80) + 10;
            const duration = Math.random() * 4 + 4; // 动画时长在 4 到 8 秒之间

            setBarrages((prev) => [
                ...prev,
                { id, text: randomMessage, top: randomTop,  duration },
            ]);

            // 在弹幕移出屏幕后移除
            setTimeout(() => {
                setBarrages((prev) => prev.filter(b => b.id !== id));
            }, duration * 1000); // 使用动画时长来延迟移除
        }, 800); // 每 0.8 秒生成一条弹幕

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="barrage-container">
            {barrages.map((barrage) => (
                <div
                    key={barrage.id}
                    className="barrage"
                    style={{
                        top: `${barrage.top}%`,
                        right: "0", // 从最右边开始
                        animation: `moveLeft ${barrage.duration}s linear forwards, fadeInOut ${barrage.duration}s ease-in-out`
                    }}
                >
                    {barrage.text}
                </div>
            ))}
        </div>
    );
};

export default BarrageComponent;


