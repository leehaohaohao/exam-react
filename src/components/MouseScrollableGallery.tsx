import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MouseScrollableGallery.css";

// 图片数组接口
interface GalleryImage {
    id: string;
    frontImage: string;
    backImage: string;
    color: string;
}

// 自定义图片数组
const galleryImages: GalleryImage[] = [
    {
        id: "1",
        frontImage: "images/photo/compressed/2.jpg",
        backImage: "images/back/2.jpg",
        color: "#FFB6C1" // 浅粉色
    },
    {
        id: "2",
        frontImage: "images/photo/compressed/2.jpg",
        backImage: "images/back/1.jpg",
        color: "#FFC0CB" // 粉红色
    },
    {
        id: "3",
        frontImage: "images/photo/compressed/7.jpg",
        backImage: "images/back/1.jpg",
        color: "#FFE4E1" // 浅玫瑰色
    },
    {
        id: "4",
        frontImage: "images/photo/compressed/8.jpg",
        backImage: "images/back/4.jpg",
        color: "#FFF0F5" // 薰衣草色
    },
    {
        id: "5",
        frontImage: "images/photo/compressed/9.jpg",
        backImage: "images/back/5.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "6",
        frontImage: "images/photo/compressed/10.jpg",
        backImage: "images/photo/compressed/2.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "7",
        frontImage: "images/photo/compressed/11.jpg",
        backImage: "images/photo/compressed/2.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "8",
        frontImage: "images/photo/compressed/12.jpg",
        backImage: "images/back/1.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "9",
        frontImage: "images/photo/compressed/13.jpg",
        backImage: "images/photo/compressed/8.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "10",
        frontImage: "images/photo/compressed/14.jpg",
        backImage: "images/photo/compressed/9.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "11",
        frontImage: "images/photo/compressed/15.jpg",
        backImage: "images/photo/compressed/10.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "12",
        frontImage: "images/photo/compressed/16.jpg",
        backImage: "images/photo/compressed/11.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "13",
        frontImage: "images/photo/compressed/17.jpg",
        backImage: "images/back/3.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "14",
        frontImage: "images/photo/compressed/19.jpg",
        backImage: "images/photo/compressed/5.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "15",
        frontImage: "images/photo/compressed/20.jpg",
        backImage: "images/back/4.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "16",
        frontImage: "images/photo/compressed/22.jpg",
        backImage: "images/back/2.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "17",
        frontImage: "images/photo/compressed/23.jpg",
        backImage: "images/photo/compressed/16.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "18",
        frontImage: "images/photo/compressed/25.jpg",
        backImage: "images/photo/compressed/17.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "19",
        frontImage: "images/photo/compressed/26.jpg",
        backImage: "images/back/5.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "20",
        frontImage: "images/photo/compressed/27.jpg",
        backImage: "images/photo/compressed/20.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "21",
        frontImage: "images/photo/compressed/30.jpg",
        backImage: "images/photo/compressed/22.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "22",
        frontImage: "images/photo/compressed/31.jpg",
        backImage: "images/photo/compressed/23.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "23",
        frontImage: "images/photo/compressed/32.jpg",
        backImage: "images/photo/compressed/25.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "24",
        frontImage: "images/photo/compressed/34.jpg",
        backImage: "images/photo/compressed/26.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "25",
        frontImage: "images/photo/compressed/35.jpg",
        backImage: "images/photo/compressed/27.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "26",
        frontImage: "images/photo/compressed/36.jpg",
        backImage: "images/photo/compressed/30.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "27",
        frontImage: "images/photo/compressed/37.jpg",
        backImage: "images/photo/compressed/31.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "28",
        frontImage: "images/photo/compressed/38.jpg",
        backImage: "images/photo/compressed/32.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "29",
        frontImage: "images/photo/compressed/39.jpg",
        backImage: "images/back/2.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "30",
        frontImage: "images/photo/compressed/40.jpg",
        backImage: "images/photo/compressed/35.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "31",
        frontImage: "images/photo/compressed/41.jpg",
        backImage: "images/back/4.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "32",
        frontImage: "images/photo/compressed/42.jpg",
        backImage: "images/photo/compressed/37.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "33",
        frontImage: "images/photo/compressed/43.jpg",
        backImage: "images/photo/compressed/38.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "34",
        frontImage: "images/photo/compressed/44.jpg",
        backImage: "images/photo/compressed/39.jpg",
        color: "#FFE4B5" // 浅橙色
    },
    {
        id: "35",
        frontImage: "images/photo/compressed/45.jpg",
        backImage: "images/photo/compressed/40.jpg",
        color: "#FFE4B5" // 浅橙色
    }
];

const MouseScrollableGallery: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const [flippedItems, setFlippedItems] = useState<Set<string>>(new Set());
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // 使用 Intersection Observer 来检测图片是否在视口中
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const imageId = entry.target.getAttribute('data-image-id');
                        if (imageId) {
                            setVisibleImages(prev => new Set([...prev, imageId]));
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        const elements = document.querySelectorAll('.gallery-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // 优化后的图片加载逻辑
    useEffect(() => {
        const loadVisibleImages = async () => {
            const imagePromises = Array.from(visibleImages)
                .filter(id => !loadedImages.has(id))
                .map(id => {
                    const image = galleryImages.find(img => img.id === id);
                    if (!image) return Promise.resolve();

                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => {
                            setLoadedImages(prev => new Set([...prev, id]));
                            resolve(null);
                        };
                        img.onerror = reject;
                        img.src = image.frontImage;
                    });
                });

            try {
                await Promise.all(imagePromises);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        loadVisibleImages();
    }, [visibleImages]);

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

        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const containerWidth = rect.width;
            
            // 使用 requestAnimationFrame 优化动画
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                const speeds = [1.2, 1.6, 2.0];
                
                rows.forEach((row, index) => {
                    const content = row.querySelector('.gallery-content') as HTMLElement;
                    if (!content) return;

                    const moveX = (1 - mouseX / containerWidth) * 600 * speeds[index];
                    const totalWidth = content.scrollWidth;
                    
                    if (Math.abs(moveX) >= totalWidth / 2) {
                        content.style.transform = `translateX(${-totalWidth / 2}px)`;
                    } else {
                        content.style.transform = `translateX(${-totalWidth / 2 + moveX}px)`;
                    }
                });

            });
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
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

    // 修改渲染卡片函数
    const renderCard = (rowIndex: number, index: number) => {
        const startIndex = rowIndex * 10;
        const imageIndex = (startIndex + index) % galleryImages.length;
        const isFlipped = flippedItems.has(`${rowIndex}-${index}`);
        const image = galleryImages[imageIndex];
        const isLoaded = loadedImages.has(image.id);
        const isVisible = visibleImages.has(image.id);

        return (
            <div 
                key={`main-${index}`} 
                className={`gallery-item easter-egg ${isFlipped ? 'flipped' : ''} ${isLoaded ? 'loaded' : ''}`}
                onClick={() => handleFlip(rowIndex, index)}
                style={{ '--egg-color': image.color } as React.CSSProperties}
                data-image-id={image.id}
            >
                <div className="card-inner">
                    <div className="card-front">
                        {isVisible ? (
                            isLoaded ? (
                                <img 
                                    src={image.frontImage} 
                                    alt={`Front ${imageIndex + 1}`}
                                    className="card-image"
                                    loading="lazy"
                                    decoding="async"
                                />
                            ) : (
                                <div className="image-placeholder">
                                    <span>加载中...</span>
                                </div>
                            )
                        ) : (
                            <div className="image-placeholder">
                                <span>等待加载...</span>
                            </div>
                        )}
                    </div>
                    <div className="card-back">
                        {isVisible ? (
                            isLoaded ? (
                                <img 
                                    src={image.backImage} 
                                    alt={`Back ${imageIndex + 1}`}
                                    className="card-image"
                                    loading="lazy"
                                    decoding="async"
                                />
                            ) : (
                                <div className="image-placeholder">
                                    <span>加载中...</span>
                                </div>
                            )
                        ) : (
                            <div className="image-placeholder">
                                <span>等待加载...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // 处理滚动事件
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isAnimating) return;

            const delta = e.deltaY;
            if (delta > 0 && currentPage === 0) {
                // 向下滚动，从第一页到第二页
                setIsAnimating(true);
                setCurrentPage(1);
                setTimeout(() => setIsAnimating(false), 800);
            } else if (delta < 0 && currentPage === 1) {
                // 向上滚动，从第二页到第一页
                setIsAnimating(true);
                setCurrentPage(0);
                setTimeout(() => setIsAnimating(false), 800);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentPage, isAnimating]);

    return (
        <div className="gallery-wrapper">
            {/* 返回按钮 */}
            <button className="home-button" onClick={() => navigate('/')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                返回首页
            </button>

            {/* 第一页：欢迎页面 */}
            <div className={`page ${currentPage === 1 ? 'hidden' : ''}`}>
                <div className="top-section">
                    {/* 装饰性元素 */}
                    <div className="decorative-circle"></div>
                    <div className="decorative-circle"></div>
                    
                    {/* 边框动画 */}
                    <div className="border-animation">
                        <div className="border-line"></div>
                    </div>
                    
                    {/* 文字内容 */}
                    <div className="text-container">
                        <h1 className="title-text">给你看看我学校的风景</h1>
                        <p className="subtitle-text">向下滚动探索</p>
                    </div>

                    {/* 滚动提示 */}
                    <div className="scroll-indicator">
                        <div className="scroll-arrow"></div>
                        <span className="scroll-text">向下滚动</span>
                    </div>
                </div>
            </div>

            {/* 第二页：画廊页面 */}
            <div className={`page ${currentPage === 0 ? 'hidden' : ''}`}>
                <div className="gallery-container" ref={containerRef}>
                    {[...Array(3)].map((_, rowIndex) => (
                        <div key={rowIndex} className="gallery-row">
                            <div className="gallery-content">
                                {/* 左侧额外图片 */}
                                {[...Array(3)].map((_, index) => {
                                    const imageIndex = (rowIndex * 10 + index) % galleryImages.length;
                                    console.log(`Image Index: ${imageIndex}`)
                                    return renderCard(rowIndex, index);
                                })}
                                {/* 主要图片 */}
                                {[...Array(10)].map((_, index) => {
                                    const startIndex = rowIndex * 10 + 3;
                                    const imageIndex = (startIndex + index) % galleryImages.length;
                                    console.log(`Image Index: ${imageIndex}`)
                                    return renderCard(rowIndex, index + 3);
                                })}
                                {/* 右侧额外图片 */}
                                {[...Array(3)].map((_, index) => {
                                    const startIndex = rowIndex * 10 + 13;
                                    const imageIndex = (startIndex + index) % galleryImages.length;
                                    console.log(`Image Index: ${imageIndex}`)
                                    return renderCard(rowIndex, index + 13);
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MouseScrollableGallery;