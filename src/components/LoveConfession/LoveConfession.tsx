import React, { useState } from 'react';
import { ImageState } from "./types.ts";
import "./LoveConfession.css"

const LoveConfession: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);
    const [imageState, setImageState] = useState<ImageState>('heart');
    const [showSuccess, setShowSuccess] = useState(false);

    const noTexts = [
        "不要不要",
        "？你认真的吗…",
        "要不再想想？",
        "不许选这个！",
        "我会很伤心…",
        "啊，真的嘛",
        "不嘛不嘛",
        "不行:("
    ];

    const handleNoClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 1) setImageState('shocked');
        if (newCount === 2) setImageState('think');
        if (newCount === 3) setImageState('angry');
        if (newCount >= 4) setImageState('crying');
    };

    const handleYesClick = () => {
        setImageState('hug');
        setShowSuccess(true);
    };

    const getImageSrc = () => {
        switch (imageState) {
            case 'shocked': return '/images/shocked.png';
            case 'think': return '/images/think.png';
            case 'angry': return '/images/angry.png';
            case 'crying': return '/images/crying.png';
            case 'hug': return '/images/hug.png';
            default: return '/images/heart.png';
        }
    };

    if (showSuccess) {
        return (
            <div className="success-container">
                <div className="success-content">
                    <h1 className="success-text">!!!喜欢你!! ( &gt;᎑&lt;)♡︎ᐝ</h1>
                    <img src={getImageSrc()} alt="拥抱" className="success-image" />
                </div>
            </div>
        );
    }

    return (
        <div className="love-confession-container">
            <div className="love-confession">
                <div className="lc-container">
                    <img
                        className="lc-main-image"
                        src={getImageSrc()}
                        alt="爱心"
                        style={{transform: `translateY(-${clickCount * 25}px)`}}
                    />
                    <h1
                        className="lc-question"
                        style={{transform: `translateY(-${clickCount * 25}px)`}}
                    >
                        常公主，可以做我女朋友嘛？
                    </h1>
                    <div className="lc-buttons">
                        <button
                            className="lc-yes-button"
                            onClick={handleYesClick}
                            style={{transform: `scale(${1 + (clickCount * 1.2)})`}}
                        >
                            必须可以
                        </button>
                        <button
                            className="lc-no-button"
                            onClick={handleNoClick}
                            style={{transform: `translateX(${clickCount * 50}px)`}}
                        >
                            {clickCount < noTexts.length ? noTexts[clickCount] : noTexts[noTexts.length - 1]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoveConfession;