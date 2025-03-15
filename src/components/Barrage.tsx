/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:44
 */
import React, { useState, useEffect } from "react";
import "./Barrage.css";
import { Barrage } from "../define/types";

const messages: string[] = [
    "加油！你是最棒的！",
    "相信自己，一定能行！",
    "考试顺利，梦想成真！",
    "祝你超常发挥！",
    "放松心情，轻松应考！",
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


