/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:44
 */
/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:44
 */
import React, { useState } from "react";
import "./Meteor.css";

const Meteor: React.FC = () => {
    const [showMessage, setShowMessage] = useState<boolean>(false);

    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    };

    // 生成多个流星
    const meteors = Array.from({ length: 10 }, (_, index) => (
        <div
            key={index}
            className="meteor"
            style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`
            }}
            onClick={handleClick}
        ></div>
    ));

    return (
        <div className="meteor-container">
            {meteors}
            {showMessage && (
                <div className="meteor-message">祝你考试顺利，梦想成真！</div>
            )}
        </div>
    );
};

export default Meteor;

