import React, { useState } from 'react';
import '../styles/Survey.css';
import { useNavigate } from 'react-router-dom';

interface Question {
    id: number;
    text: string;
    type: 'radio' | 'checkbox' | 'text' | 'image';
    options?: string[];
    required: boolean;
    images?: string[];
}

const questions: Question[] = [
    {
        id: 1,
        text: "陛下觉得这个网站的设计风格如何？",
        type: "radio",
        options: ["非常喜欢", "还不错", "一般般", "不太喜欢"],
        required: true
    },
    {
        id: 2,
        text: "陛下最喜欢哪些功能？（可多选）",
        type: "checkbox",
        options: ["照片展示", "动画效果", "交互设计", "整体布局"],
        required: true
    },
    {
        id: 3,
        text: "下面3个艺术字陛下更喜欢哪个？",
        type: "image",
        options: ["过去","现在","未来"],
        required: true,
        images: [
            "images/logo1.png",
            "images/logo2.png",
            "images/logo3.png",
        ]
    },
    {
        id: 4,
        text: "你觉得还需要添加什么功能？",
        type: "text",
        required: false
    }
];

const Survey: React.FC = () => {
    const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleAnswer = (questionId: number, value: string | string[]) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 验证必填问题是否都已回答
        const unansweredRequired = questions.filter(q => q.required).some(q => {
            if (q.type === 'checkbox') {
                return !answers[q.id] || (answers[q.id] as string[]).length === 0;
            }
            return !answers[q.id];
        });

        if (unansweredRequired) {
            alert('请回答所有必填问题');
            return;
        }

        console.log('提交的答案：', answers);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="survey-container">
                <div className="survey-content thank-you-content">
                    <div className="thank-you-icon">❤️</div>
                    <h2>微臣恭送陛下！</h2>
                    <p className="thank-you-text">陛下万岁万岁万万岁</p>
                    <p className="thank-you-subtext">微臣定尊圣旨继续努力，我们来日方长</p>
                    <p className="thank-you-subtext">愿你岁岁平，岁岁安，年年岁岁，岁岁年年，平平安安</p>
                    <button
                        className="home-button"
                        onClick={() => navigate('/')}
                    >
                        返回首页
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="survey-container">
            <div className="survey-content">
                <h2>恭请陛下指示</h2>
                <p className="survey-intro">还请陛下按照内心想法来填，便于微臣后续改进</p>

                <form onSubmit={handleSubmit}>
                    {questions.map(question => (
                        <div key={question.id} className="question-container">
                            {question.text && (
                                <p className="question-text">
                                    {question.text}
                                    {question.required && <span className="required">*</span>}
                                </p>
                            )}

                            {question.type === 'radio' && question.options?.length ? (
                                <div className="options-container">
                                    {question.options.map(option => (
                                        <label key={option} className="option-label">
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                value={option}
                                                onChange={(e) => handleAnswer(question.id, e.target.value)}
                                                required={question.required}
                                            />
                                            {option && <span className="option-text">{option}</span>}
                                        </label>
                                    ))}
                                </div>
                            ) : null}

                            {question.type === 'checkbox' && question.options?.length ? (
                                <div className="options-container">
                                    {question.options.map(option => (
                                        <label key={option} className="option-label">
                                            <input
                                                type="checkbox"
                                                name={`question-${question.id}`}
                                                value={option}
                                                onChange={(e) => {
                                                    const currentAnswers = (answers[question.id] as string[]) || [];
                                                    const newAnswers = e.target.checked
                                                        ? [...currentAnswers, option]
                                                        : currentAnswers.filter(a => a !== option);
                                                    handleAnswer(question.id, newAnswers);
                                                }}
                                                checked={(answers[question.id] as string[] || []).includes(option)}
                                            />
                                            {option && <span className="option-text">{option}</span>}
                                        </label>
                                    ))}
                                </div>
                            ) : null}

                            {question.type === 'image' && question.options?.length && question.images?.length ? (
                                <div className="image-options-container">
                                    {question.options.map((option, index) => {
                                        const imageUrl = question.images?.[index]; // Safe access with optional chaining
                                        return (
                                            <label key={option} className="image-option-label">
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={option}
                                                    onChange={(e) => handleAnswer(question.id, e.target.value)}
                                                    required={question.required}
                                                />
                                                <div className="image-option-content">
                                                    {imageUrl && (
                                                        <img
                                                            src={imageUrl}
                                                            alt={option || `Option ${index + 1}`}
                                                            className="option-image"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).style.display = 'none';
                                                            }}
                                                        />
                                                    )}
                                                    {option && <span className="option-text">{option}</span>}
                                                </div>
                                            </label>
                                        );
                                    })}
                                </div>
                            ) : null}

                            {question.type === 'text' && (
                                <textarea
                                    className="text-input"
                                    placeholder="请输入你的想法..."
                                    value={answers[question.id] as string || ''}
                                    onChange={(e) => handleAnswer(question.id, e.target.value)}
                                    required={question.required}
                                />
                            )}
                        </div>
                    ))}

                    <button type="submit" className="submit-button">
                        提交问卷
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Survey;