import React from 'react';
import './WordCloud.css';

interface WordCloudProps {
    words: string[];
}

const WordCloud: React.FC<WordCloudProps> = ({ words }) => {
    return (
        <div className="word-cloud-container">
            {words.map((word, index) => (
                <div
                    key={index}
                    className="word-bubble"
                    style={{
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    {word}
                </div>
            ))}
        </div>
    );
};

export default WordCloud; 