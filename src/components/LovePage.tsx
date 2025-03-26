import React, { useEffect, useRef, useState } from 'react';
import './LovePage.css';

interface SectionContent {
    image: string;
    text: string;
    className?: string;
    animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce';
}

const sections: SectionContent[] = [
    {
        image: '/images/love1.jpg',
        text: "亲爱的...",
        className: "title",
        animation: 'fade'
    },
    {
        image: '/images/love2.jpg',
        text: "遇见你是我生命中最美好的事情",
        animation: 'slide'
    },
    {
        image: '/images/love3.jpg',
        text: "你的笑容如春日里的阳光",
        animation: 'scale'
    },
    {
        image: '/images/love4.jpg',
        text: "温暖了我的心房",
        animation: 'rotate'
    },
    {
        image: '/images/love5.jpg',
        text: "我想告诉你...",
        className: "highlight",
        animation: 'bounce'
    },
    {
        image: '/images/love6.jpg',
        text: "我喜欢你",
        className: "love-message",
        animation: 'fade'
    },
    {
        image: '/images/love7.jpg',
        text: "不是一时兴起",
        animation: 'slide'
    },
    {
        image: '/images/love8.jpg',
        text: "而是深思熟虑后的决定",
        animation: 'scale'
    },
    {
        image: '/images/love9.jpg',
        text: "愿意和我一起走下去吗？",
        className: "question",
        animation: 'rotate'
    }
];

const LovePage: React.FC = () => {
    const [visibleSections, setVisibleSections] = useState<number[]>([]);
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!pageRef.current) return;
            
            const sections = pageRef.current.querySelectorAll('.section');
            const newVisibleSections: number[] = [];
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // 当section进入视口时触发动画
                if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3) {
                    newVisibleSections.push(index);
                }
            });
            
            setVisibleSections(newVisibleSections);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初始检查

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="love-page" ref={pageRef}>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`section ${index % 2 === 0 ? 'layout-left' : 'layout-right'} ${section.className || ''} ${visibleSections.includes(index) ? 'visible' : ''}`}
                >
                    <div className="image-section">
                        <div className="image-placeholder" />
                    </div>
                    <div className="text-section">
                        <div className={`animated-text animation-${section.animation}`}>
                            {section.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LovePage; 