/**
 * @description 爱心展示页面组件
 * @author lihao
 * @date 2025/3/27 22:41
 */
import "./LoveForYou.css"
import { useEffect, useRef } from "react";

const LoveForYou = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('love-visible');
                    }
                });
            },
            { 
                threshold: 0.5,
                rootMargin: '0px'
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="love-container">
            {/* 介绍页面 */}
            <div className="love-section love-intro" ref={(el) => { sectionRefs.current[0] = el }}>
                <div className="love-text-container">
                    <h2>我...</h2>
                    <div className="love-intro-content">
                        <div className="love-intro-section">
                            <h3>我想可能还不是很了解我？</h3>
                            <p>在不过也没事哒，我希望还会有很多时间了解。现在先通过这个页面，让你了解一个真实的我，有机会，也可以以后对比对比看看我有没有说谎呢。接下来，我会从不同的角度，带你认识我。</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 别人眼中的我 */}
            <div className="love-section" ref={(el) => { sectionRefs.current[1] = el }}>
                <div className="love-image-container">
                    <img src="images/logo1.png" alt="Love Image 1" />
                </div>
                <div className="love-text-container">
                    <h2>朋友眼中的我</h2>
                    <p>按照好哥们说法是我死实验室得了，一个不折不扣的死卷狗（后面会有解释的）。封建人，思维总是和正常人不一样，但是还挺有良心的，懂人情世故，不喜欢占小便宜。废话多（他的也不少，我怀疑我多半被他传染了），有点唐（他一直觉得我的表情包太唐了）？</p>
                    <p>学校里朋友的看法，大佬啊，技术不错，乐于助人。不懂得问李昊，他包知道的。腼腆，内向，老实。J人，期中期末复习文档啊、各种规划信手捏来。羽毛球技术还不错，约定打球的时间还从来没迟到过。很有眼色，总能观察到周围人情绪变化。</p>
                </div>
            </div>

            {/* 我眼中的自己 */}
            <div className="love-section love-reverse" ref={(el) => { sectionRefs.current[2] = el }}>
                <div className="love-text-container">
                    <h2>我眼中的自己</h2>
                    <p>我渴望被理解，也渴望理解他人。虽然有时候会感到迷茫和不安，但我始终相信美好的事情终将发生。我喜欢尝试新事物，也喜欢在熟悉的事物中寻找新的感动。我热爱生活，热爱这个世界，虽然有时候会觉得生活很艰难，但我依然保持着对未来的期待。我相信，只要保持善良和真诚，终有一天会遇见更好的自己。</p>
                </div>
                <div className="love-image-container">
                    <img src="images/logo2.png" alt="Love Image 2" />
                </div>
            </div>

            {/* 文字在底部 */}
            <div className="love-section love-bottom-text" ref={(el) => { sectionRefs.current[3] = el }}>
                <div className="love-image-container">
                    <img src="images/logo3.png" alt="Love Image 3" />
                </div>
                <div className="love-text-container">
                    <h2>甜蜜时光</h2>
                    <p>与你在一起的每一天，都是上天赐予的礼物。我们一起分享生活中的喜怒哀乐，一起面对困难和挑战。你的存在让我的生活变得更加丰富多彩，让我学会了如何去爱，如何去包容，如何去成长。感谢你出现在我的生命中，让我的世界变得更加美好。</p>
                </div>
            </div>

            {/* 文字在顶部 */}
            <div className="love-section love-top-text" ref={(el) => { sectionRefs.current[4] = el }}>
                <div className="love-text-container">
                    <h2>未来可期</h2>
                    <p>愿我们的未来充满无限可能。我们可以一起去看遍世界的美景，一起经历人生的起起落落，一起创造更多美好的回忆。无论前方的路有多么艰难，只要我们携手同行，就没有什么能够阻挡我们前进的步伐。让我们一起期待未来的每一天，一起书写属于我们的精彩故事。</p>
                </div>
                <div className="love-image-container">
                    <img src="images/logo1.png" alt="Love Image 4" />
                </div>
            </div>

            {/* 文字覆盖在图片上 */}
            <div className="love-section love-overlay-text" ref={(el) => { sectionRefs.current[5] = el }}>
                <div className="love-image-container">
                    <img src="images/logo2.png" alt="Love Image 5" />
                    <div className="love-text-container">
                        <h2>永远爱你</h2>
                        <p>你是我生命中最美丽的风景，是我最珍贵的宝藏。无论时光如何流逝，无论世界如何变化，我对你的爱永远不会改变。愿我们能够一直相伴到老，一起看遍世间繁华，一起经历人生百态。永远爱你，永远珍惜你。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoveForYou;