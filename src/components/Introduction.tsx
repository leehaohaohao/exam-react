import React, { useState } from 'react';
import '../styles/Introduction.css';

interface IntroductionProps {
    onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
    const [isFading, setIsFading] = useState(false);

    const handleStart = () => {
        setIsFading(true);
        setTimeout(() => {
            onStart();
        }, 1000);
    };

    return (
        <div className={`introduction-container ${isFading ? 'fading' : ''}`}>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="introduction-content">
                <h1 className="introduction-title">抱歉，久等啦</h1>
                <p className="introduction-description">
                    第一次做这种交互式网站，希望你能喜欢。
                </p>
                <p className="introduction-description">
                    由于技术有限，部分页面存在卡顿现象，暂时无法解决，但效果还可以，所以就先这样了。
                </p>
                <p className="introduction-description">
                    由于服务器带宽很低，所以图片等资源加载很慢，如果可以耐心等待一下或者先简单看一遍，第二遍有图片缓存会更有体验感。
                </p>
                <p className="introduction-description">
                    温馨提示:有彩蛋的哦,不止1个哦。
                </p>
                <p className="introduction-description">
                    另外页面里有提供有相关图片、网页图片等资源下载链接哦。
                </p>
                <button className="introduction-button" onClick={handleStart}>
                    开始探索
                </button>
            </div>
        </div>
    );
};

export default Introduction;