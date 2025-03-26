import React, { useState, useEffect, useRef } from "react";
import "./OpeningAnimation.css";

interface OpeningAnimationProps {
    onComplete: () => void; // 开幕动画完成后的回调
    onStartArtText: () => void; // 立即触发 ArtText 动画
}


const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete, onStartArtText }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(true); // 控制按钮的显示
    const leftBarsRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightBarsRef = useRef<(HTMLDivElement | null)[]>([]);

    // 左侧祝福语 - 温暖版
    const leftTexts = [
        "愿你眼里总有光芒，生活充满希望",
        "愿你的路上总有花开，身边常有陪伴",
        "愿你笑容温暖如阳光，照亮每个日子",
        "愿你的生活像本书，每天都有新故事",
        "愿你想的都能实现，做的都有收获",
        "愿你聪明又善良，永远被生活厚待",
        "愿你的好心情，能感染身边每个人",
        "愿你的人生像首歌，唱着快乐旋律",
        "愿世界对你温柔，就像你对别人一样",
        "愿你每天都有进步，每晚都能安睡"
    ];

// 右侧祝福语 - 贴心版
    const rightTexts = [
        "愿你在图书馆找到，最想读的那本书",
        "愿下雨忘带伞时，总能遇见好心人",
        "愿你独自走路时，也能发现小美好",
        "愿你喝的每杯咖啡，都刚好合你口味",
        "愿你睡不着时，能看到美丽的星空",
        "愿你回头看看，生活总给你惊喜",
        "愿你等的每班车，都准时又舒适",
        "愿你翻开的日历，记满开心的事",
        "愿你随口哼的歌，都有人跟着唱",
        "愿你相信明天，会比今天更好"
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
                console.log(index);
            }
        });

        // 右边竖条向下滑动
        rightBars.forEach((bar, index) => {
            if (bar) {
                const speed = 2 + Math.random() * 3; // 随机速度
                bar.style.animation = `slideDown ${speed}s linear infinite`;
                console.log(index);
            }
        });
    }, []);

    // 点击圆形按钮触发开幕动画
    const handleOpen = () => {
        setIsOpen(true);
        setShowButton(false); // 隐藏按钮
        // ✅ 立即触发 ArtText 动画
        onStartArtText();
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
                    <span>公主请签收</span>
                </div>
            )}
        </div>
    );
};

export default OpeningAnimation;