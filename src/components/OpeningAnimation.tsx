import React, { useState, useEffect, useRef } from "react";
import "./OpeningAnimation.css";

interface OpeningAnimationProps {
    onComplete: () => void; // 开幕动画完成后的回调函数
}

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(true); // 控制按钮的显示
    const leftBarsRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightBarsRef = useRef<(HTMLDivElement | null)[]>([]);

    // 祝福语
    const leftTexts = [
        "愿你前程似锦",
        "愿你心想事成",
        "愿你健康平安愿你学业有成愿你学业有成愿你学业有成愿你学业有成",
        "愿你笑口常开",
        "愿你幸福美满",
        "愿你永远年轻",
        "愿你永远美丽愿你学业有成愿你学业有成愿你学业有成",
        "愿你永远快乐",
        "愿你永远幸福愿你学业有成愿你学业有成",
        "愿你永远被爱",
    ];
    const rightTexts = [
        "愿你学业有成愿你学业有成愿你学业有成愿你学业有成愿你学业有成愿你学业有成",
        "愿你事业辉煌愿你学业有成愿你学业有成愿你学业有成愿你学业有成",
        "愿你爱情甜蜜",
        "愿你财源广进",
        "愿你万事如意愿你学业有成愿你学业有成愿你学业有成愿你学业有成",
        "愿你永远被珍惜",
        "愿你永远被呵护",
        "愿你永远被宠爱",
        "愿你永远被守护",
        "愿你永远被祝福愿你学业有成",
    ];

    // 初始化竖条的文字和动画
    useEffect(() => {
        const leftBars = leftBarsRef.current;
        const rightBars = rightBarsRef.current;

        // 左边竖条向上滑动
        leftBars.forEach((bar, index) => {
            if (bar) {
                const speed = 2 + Math.random() * 3; // 随机速度
                bar.style.animation = `slideUp ${speed}s linear infinite`;
            }
        });

        // 右边竖条向下滑动
        rightBars.forEach((bar, index) => {
            if (bar) {
                const speed = 2 + Math.random() * 3; // 随机速度
                bar.style.animation = `slideDown ${speed}s linear infinite`;
            }
        });
    }, []);

    // 点击圆形按钮触发开幕动画
    const handleOpen = () => {
        setIsOpen(true);
        setShowButton(false); // 隐藏按钮
        // 等待竖条回到中间后再展开
        setTimeout(() => {
            const leftContainer = document.querySelector(".left-container") as HTMLElement;
            const rightContainer = document.querySelector(".right-container") as HTMLElement;

            leftContainer.style.transition = "transform 1s ease-in-out";
            rightContainer.style.transition = "transform 1s ease-in-out";
            leftContainer.style.transform = "translateX(-100%)";
            rightContainer.style.transform = "translateX(100%)";
        }, 1600); // 1.5秒回到中间 + 0.1秒停顿

        // 动画完成后调用回调函数
        setTimeout(() => {
            onComplete();
        }, 1600); // 2.5秒左右展开后移除组件
    };

    return (
        <div className={`opening-container ${isOpen ? "open" : ""}`}>
            {/* 左边区域 */}
            <div className="left-container">
                {leftTexts.map((text, index) => (
                    <div
                        key={`left-${index}`}
                        className="bar"
                        ref={(el) => {
                            leftBarsRef.current[index] = el; // 将元素赋值给对应的引用
                        }}
                    >
                        <div className="text">
                            {text.split("").map((char, i) => (
                                <span key={i}>{char}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 右边区域 */}
            <div className="right-container">
                {rightTexts.map((text, index) => (
                    <div
                        key={`right-${index}`}
                        className="bar"
                        ref={(el) => {
                            rightBarsRef.current[index] = el; // 将元素赋值给对应的引用
                        }}
                    >
                        <div className="text">
                            {text.split("").map((char, i) => (
                                <span key={i}>{char}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 圆形按钮 */}
            {showButton && (
                <div className="circle-button" onClick={handleOpen}>
                    <span>点击开启<br />你的祝福</span>
                </div>
            )}
        </div>
    );
};

export default OpeningAnimation;