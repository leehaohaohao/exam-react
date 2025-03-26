import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: string;
}

interface Heart {
    id: number;
    x: number;
    y: number;
}

const timelineData: TimelineItem[] = [
    {
        year: "2024",
        title: "项目启动",
        description: "我们开始了这个激动人心的项目，致力于为用户提供最好的体验。",
        image: "/images/logo1.png"
    },
    {
        year: "2023",
        title: "团队组建",
        description: "一群充满激情的开发者聚集在一起，共同打造这个项目。",
        image: "/images/logo2.png"
    },
    {
        year: "2022",
        title: "概念形成",
        description: "项目的最初构想在这个时期形成，我们开始规划未来的发展。",
        image: "/images/logo3.png"
    }
];

const About: React.FC = () => {
    const [clickCount, setClickCount] = useState<number>(0);
    const [hearts, setHearts] = useState<Heart[]>([]);

    const handleFooterClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        // 创建新的爱心
        const newHeart: Heart = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY
        };
        setHearts(prev => [...prev, newHeart]);

        // 3秒后移除爱心
        setTimeout(() => {
            setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
        }, 3000);

        // 可选：在控制台显示点击次数
        console.log(`Footer clicked ${newCount} times`);
    };

    return (
        <div className="about-wrapper">
            <Link to="/" className="back-button">
                返回首页
            </Link>
            <div className="about-page">
                <div className="about-hero">
                    <div className="hero-content">
                        <h1>关于我们</h1>
                        <p>探索我们的故事</p>
                        {/* 可选：显示点击次数 */}
                        <p className="click-counter">页脚被点击了 {clickCount} 次</p>
                    </div>
                </div>
                <div className="timeline-section">
                    <div className="timeline-container">
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-year">{item.year}</div>
                                    <div className="timeline-details">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        {item.image && (
                                            <div className="timeline-image">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer-section" onClick={handleFooterClick}>
                    <div className="footer-content">
                        <div className="footer-text">
                            <span className="footer-build">Build for CJW</span>
                            <span className="footer-author">by 李昊</span>
                            <span className="footer-year">2025</span>
                        </div>
                        <div className="footer-line"></div>
                    </div>
                    {hearts.map(heart => (
                        <div
                            key={heart.id}
                            className="heart"
                            style={{
                                left: `${heart.x}px`,
                                top: `${heart.y}px`,
                                position: 'absolute'
                            }}
                        >
                            ❤️
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;