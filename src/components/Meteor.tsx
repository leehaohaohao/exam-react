/**
 * @description
 * @author lihao
 * @date 2025/3/13 22:44
 */
import React  from "react";
import "./Meteor.css";

const Meteor: React.FC = () => {

    // 生成多个流星
    const meteors = Array.from({ length: 20 }, (_, index) => (
        <div
            key={index}
            className="meteor"
            style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
            }}
        ></div>
    ));

    return (
        <div className="meteor-container">
            {/* 流星 */}
            {meteors}
        </div>
    );
};

export default Meteor;
