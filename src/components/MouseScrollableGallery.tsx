import React, { useRef, useEffect, useState } from "react";
import "./MouseScrollableGallery.css";

// 彩蛋图片数据
const easterEggs = [
    {
        front: "🎮 游戏机",
        back: "🎲 骰子",
        color: "#FFB6C1" // 浅粉色
    },
    {
        front: "🎨 画笔",
        back: "🎭 面具",
        color: "#FFC0CB" // 粉红色
    },
    {
        front: "🎸 吉他",
        back: "🎹 钢琴",
        color: "#FFE4E1" // 浅玫瑰色
    },
    {
        front: "🌙 月亮",
        back: "☀️ 太阳",
        color: "#FFF0F5" // 薰衣草色
    },
    {
        front: "🐱 猫咪",
        back: "🐶 狗狗",
        color: "#FFE4B5" // 浅橙色
    }
];

// 预留图片数组接口
interface GalleryImage {
    id: string;
    frontImage: string;
    backImage: string;
    color: string;
}

// 示例图片数组（到时候可以替换成实际的图片）
const galleryImages: GalleryImage[] = [
    {
        id: "1",
        frontImage: "path/to/front1.jpg",
        backImage: "path/to/back1.jpg",
        color: "#FF6B6B"
    },
    // ... 更多图片
];

const MouseScrollableGallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [flippedItems, setFlippedItems] = useState<Set<string>>(new Set());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 初始化时将所有行移动到中间位置
        const rows = container.querySelectorAll('.gallery-row');
        rows.forEach((row) => {
            const content = row.querySelector('.gallery-content') as HTMLElement;
            if (!content) return;
            const totalWidth = content.scrollWidth;
            content.style.transform = `translateX(${-totalWidth / 2}px)`;
        });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const containerWidth = rect.width;
            
            const speeds = [1.2, 1.6, 2.0];
            
            rows.forEach((row, index) => {
                const content = row.querySelector('.gallery-content') as HTMLElement;
                if (!content) return;

                const moveX = (1 - mouseX / containerWidth) * 600 * speeds[index];
                const itemWidth = 300 + 24;
                const totalWidth = content.scrollWidth;
                
                if (Math.abs(moveX) >= totalWidth / 2) {
                    content.style.transform = `translateX(${-totalWidth / 2}px)`;
                } else {
                    content.style.transform = `translateX(${-totalWidth / 2 + moveX}px)`;
                }
            });
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleFlip = (rowIndex: number, itemIndex: number) => {
        const key = `${rowIndex}-${itemIndex}`;
        setFlippedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(key)) {
                newSet.delete(key);
            } else {
                newSet.add(key);
            }
            return newSet;
        });
    };

    // 渲染图片卡片
    const renderCard = (rowIndex: number, index: number) => {
        const imageIndex = index % galleryImages.length;
        const isFlipped = flippedItems.has(`${rowIndex}-${index}`);
        const image = galleryImages[imageIndex];

        return (
            <div 
                key={`main-${index}`} 
                className={`gallery-item easter-egg ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleFlip(rowIndex, index)}
                style={{ '--egg-color': image.color } as React.CSSProperties}
            >
                <div className="card-inner">
                    <div className="card-front">
                        <img 
                            src={image.frontImage} 
                            alt={`Front ${index + 1}`}
                            className="card-image"
                        />
                    </div>
                    <div className="card-back">
                        <img 
                            src={image.backImage} 
                            alt={`Back ${index + 1}`}
                            className="card-image"
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="gallery-wrapper">
            <div className="gallery-container" ref={containerRef}>
                {[...Array(3)].map((_, rowIndex) => (
                    <div key={rowIndex} className="gallery-row">
                        <div className="gallery-content">
                            {/* 左侧额外图片 */}
                            {[...Array(5)].map((_, index) => (
                                <div key={`left-${index}`} className="gallery-item">
                                    <div className="image-placeholder">
                                        <span>左侧 {rowIndex + 1}-{index + 1}</span>
                                    </div>
                                </div>
                            ))}
                            {/* 主要图片 */}
                            {[...Array(15)].map((_, index) => renderCard(rowIndex, index))}
                            {/* 右侧额外图片 */}
                            {[...Array(5)].map((_, index) => (
                                <div key={`right-${index}`} className="gallery-item">
                                    <div className="image-placeholder">
                                        <span>右侧 {rowIndex + 1}-{index + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MouseScrollableGallery;