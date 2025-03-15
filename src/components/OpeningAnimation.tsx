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
        "愿你健康平安",
        "愿你笑口常开",
        "愿你幸福美满",
    ];
    const rightTexts = [
        "愿你学业有成",
        "愿你事业辉煌",
        "愿你爱情甜蜜",
        "愿你财源广进",
        "愿你万事如意",
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

        // 竖条回到正中间
        const leftBars = leftBarsRef.current;
        const rightBars = rightBarsRef.current;

        leftBars.forEach((bar) => {
            if (bar) {
                bar.style.animation = "none";
                bar.style.transition = "transform 1s ease-in-out";
                bar.style.transform = "translateY(0)";
            }
        });

        rightBars.forEach((bar) => {
            if (bar) {
                bar.style.animation = "none";
                bar.style.transition = "transform 1s ease-in-out";
                bar.style.transform = "translateY(0)";
            }
        });

        // 左右两块区域分别向左右打开
        setTimeout(() => {
            const leftContainer = document.querySelector(".left-container") as HTMLElement;
            const rightContainer = document.querySelector(".right-container") as HTMLElement;
            leftContainer.style.transform = "translateX(-100%)";
            rightContainer.style.transform = "translateX(100%)";
        }, 1000); // 1秒后开始打开

        // 动画完成后调用回调函数
        setTimeout(() => {
            onComplete();
        }, 2500); // 2.5秒后移除组件
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
                    <span>点击开幕</span>
                </div>
            )}
        </div>
    );
};

export default OpeningAnimation;