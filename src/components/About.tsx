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
        year: "2025-3-7",
        title: "朋友商量",
        description: "也是得到了认可",
        image: "/images/line/1.jpg"
    },
    {
        year: "2025-3-8",
        title: "小小和朋友谋划看了点例子",
        description: "可让我朋友羡慕坏了",
        image: "/images/line/2.jpg"
    },
    {
        year: "2025-3-12",
        title: "跑了个5.2km",
        description: "第二次跑5km，第一次还是别人带着才跑完，不然坚持不下去。这回很有冲劲，可能是跑完5.2km就可以完赛给你送奖牌所以很有干劲吧，3km的时候有点累，但一想到可以送你奖牌又不累了。哈哈，我跑完还特意挑个17.20分发的，下午5.20嘛，不过好像你在忙，反应不是很大，不过不怪你哦，有些时候会做一些感动自己的举动，但其实别人并不理解或者不知道，所以还是要沟通说出来嘛。",
        image: "/images/line/7.jpg"
    },
    {
        year: "2025-3-15",
        title: "第二个keep",
        description: "kt猫要一个月发货，好慢，给妹妹跑个奖牌，又发现一个好看的，5天就可以发货，就给你跑啦",
        image: "/images/line/8.jpg"
    },
    {
        year: "2025-3-17",
        title: "第一版首页",
        description: "来来回回改了好久，终于想到一个不错的设计",
        image: "/images/line/3.jpg"
    },
    {
        year: "2025-3-18",
        title: "首页里的内容想到新点子",
        description: "自己不会设计，想让别人帮忙设计个海报",
        image: "/images/line/4.jpg"
    },
    {
        year: "2025-3-18",
        title: "你不开心",
        description: "你不是很开心，我又很笨不知道说什么，想转移一下你注意力，就提前透露啦，不过为啥没展示里面，因为就只有个首页，里面巨丑",
        image: "/images/line/9.jpg"
    },
    {
        year: "2025-3-19",
        title: "自己设计了第一个海报",
        description: "课上实在无聊，想着要不自己平板上自己搜点图片照着画两下？",
        image: "/images/line/5.jpg"
    },
    {
        year: "2025-3-20",
        title: "很开心的一天",
        description: "体测1km我3.39，突破了最高记录很开心，然后看到你收到了奖牌好像也挺开心的，那我就更开心了",
        image: "/images/line/8.jpg"
    },
    {
        year: "2025-3-21",
        title: "沉重的一天",
        description: "早起看到你撤回了消息还在想你会撤回什么呢？没想到是这个，想到这个感觉自己啥也做不了，很废物，想着要先安抚你的情绪可能我想的有点过激，怕你没胃口吃饭什么的或者抑郁寡欢，我也一直心跳慢半拍呼吸有一点点困难，想了很多匆忙的买点你可能爱吃的快点寄给你，不说啦，不适合多说。",
        image: "/images/line/10.jpg"
    },
    {
        year: "2025-3-22",
        title: "加快进度，化悲愤为动力",
        description: "突然想到设计一个多个艺术字切换，效果肯定不错。哈哈，其实感觉一句话不够，还想说点，而且第一个设计的不错，还想再来，就又立下两个目标",
        image: "/images/line/11.jpg"
    },
    {
        year: "2025-3-24",
        title: "照片墙",
        description: "一直想做这个，作为展示和交互都是很不错的体验",
        image: "/images/line/12.jpg"
    },
    {
        year: "2025-3-25",
        title: "你的心情好像好很多",
        description: "不敢多说话，感觉平常的道晚安什么的现在这个时期不太合适，想尽可能说少点但可以让你开心点的。无意间看到天鹅，翻相册找到去年的天鹅宝宝发你，你的心情确实好很多，又聊了很多呢。",
        image: "/images/line/13.jpg"
    },
    {
        year: "2025-3-26",
        title: "效率",
        description: "又是无聊的课，利用起来设计剩下两个艺术字，速度飞快，效率嘎嘎高",
        image: "/images/line/14.jpg"
    },
    {
        year: "2025-3-26 13：00",
        title: "考研休息一天，肝网站！",
        description: "其实本来预期是4月底最好是你考护资前做出来，现在想加快点进度了",
        image: "/images/line/15.jpg"
    },
    {
        year: "2025-3-26 15:00",
        title: "开始完善首页",
        description: "将上午设计的艺术字加到网页里，效果出奇的好呢，太超预期了，我真厉害，还是理工男吗（你要不喜欢说明我审美出大问题了）",
        image: "/images/line/16.jpg"
    },
    {
        year: "2025-3-26 16:00",
        title: "照片墙史诗级优化（不是",
        description: "做了一个轮切的页面效果，我感觉很酷很帅，哈哈",
        image: "/images/line/17.jpg"
    },
    {
        year: "2025-3-26 18:30",
        title: "破防",
        description: "好不容易做的一个好看的首页没了，因为我误操作也没保存，想死了，没来得及拍误操作前的，后面自己都忘了做的啥样了",
        image: "/images/line/18.jpg"
    },
    {
        year: "2025-3-26 19:00",
        title: "抢救成功一点",
        description: "还是不如误操作前好看，但还凑活吧，惨痛的教训，要边做边保存",
        image: "/images/line/19.jpg"
    },
    {
        year: "2025-3-26 19：15",
        title: "问卷",
        description: "做了个问卷，哈哈，恭请陛下指示",
        image: "/images/line/21.jpg"
    },
    {
        year: "2025-3-26 19：30",
        title: "时间线",
        description: "这个想法也是这几天出现的，感觉做出来效果不错，所以就立马开做了",
        image: "/images/line/20.jpg"
    },
    {
        year: "2025-3-26 22:08",
        title: "项目部署运行最烦的时刻",
        description: "自己电脑上跑的好好地，一放到服务器就出各种bug，照片墙的图片全部不显示",
        image: "/images/line/22.jpg"
    },
    {
        year: "2025-3-26 22:48",
        title: "项目部署运行最烦的时刻-2",
        description: "毁灭吧，毁灭吧，刚修好上面一个bug，你咋也不动了",
        image: "/images/line/23.jpg"
    },
];

const About: React.FC = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    const handleFooterClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // 获取相对于文档的位置（考虑滚动）
        const newHeart: Heart = {
            id: Date.now(),
            x: e.clientX + window.scrollX,
            y: e.clientY + window.scrollY
        };
        setHearts(prev => [...prev, newHeart]);

        // 3秒后移除爱心
        setTimeout(() => {
            setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
        }, 3000);
    };

    return (
        <div className="about-wrapper">
            <Link to="/" className="back-button">
                返回首页
            </Link>
            <div className="about-page">
                <div className="about-hero">
                    <div className="hero-content">
                        <h1 className="animate-title">作品历程</h1>
                        <p className="animate-subtitle">About Story</p>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-section">
                        <h2>关于作品</h2>
                        <div className="credits-container">
                            <div className="credits-group">
                                <h3>制作团队</h3>
                                <div className="credits-item">
                                    <span className="role">总策划</span>
                                    <span className="name">李昊</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">设计总监</span>
                                    <span className="name">leehao</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">技术总监</span>
                                    <span className="name">李哈</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">内容编辑</span>
                                    <span className="name">lihao</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">背锅侠</span>
                                    <span className="name">李日天</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">牛马测试员</span>
                                    <span className="name">王冲</span>
                                </div>
                            </div>
                            <div className="credits-group">
                                <h3>特别致谢</h3>
                                <div className="credits-item">
                                    <span className="role">特邀嘉宾</span>
                                    <span className="name">常静雯</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">领衔主演</span>
                                    <span className="name">常仙女</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">灵感缪斯</span>
                                    <span className="name">常公主</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">首席体验官</span>
                                    <span className="name">常陛下</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">终身荣誉顾问</span>
                                    <span className="name">常老板</span>
                                </div>
                                <div className="credits-item">
                                    <span className="role">待定身份</span>
                                    <span className="name">待定人</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="download-section">
                        <div className="download-container">
                            <h2>素材下载</h2>
                            <p>高清设计素材，欢迎下载收藏</p>
                            <div className="download-grid">
                                <a href="/downloads/designs.zip" className="download-item">
                                    <div className="download-icon">🎨</div>
                                    <div className="download-info">
                                        <h3>设计素材</h3>
                                        <p>包含所有插图、艺术字设计</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline-section">
                    <div className="timeline-header">
                        <h2>时间线</h2>
                        <p>作品的故事，从这里开始</p>
                    </div>
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
                </div>
            </div>
            <div className="hearts-container">
                {hearts.map(heart => (
                    <div
                        key={heart.id}
                        className="heart"
                        style={{
                            left: `${heart.x}px`,
                            top: `${heart.y}px`,
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;