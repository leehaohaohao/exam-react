/**
 * @description 爱心展示页面组件
 * @author lihao
 * @date 2025/3/27 22:41
 */
import "./LoveForYou.css"
import { useEffect, useRef } from "react";
import WordCloud from "./WordCloud";

const LoveForYou = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const personalityWords = [
        "上进心", "优柔寡断", "完美主义", "边界感", "放空思考",
        "乐观", "包容心", "有耐心", "迷茫", "运动",
        "换位思考", "察言观色", "笨拙", "真诚", "细心","内向"
    ];

    const herPersonalityWords = [
        "忧郁", "仙女", "体贴", "独立", "直率",
        "聪明", "伶俐", "酷", "有礼貌", "夜猫子"
    ];

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
            <div className="love-section love-intro" ref={(el) => {
                sectionRefs.current[0] = el
            }}>
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
            <div className="love-section transition-section" ref={(el) => {
                sectionRefs.current[5] = el
            }}>
                <div className="transition-content">
                    <div className="transition-text">
                        <h2>人格-ISFJ</h2>
                        <p>自己选的嘛，多少比星座靠谱点</p>
                    </div>
                </div>
            </div>
            {/* 别人眼中的我 */}
            <div className="love-section" ref={(el) => {
                sectionRefs.current[1] = el
            }}>
                <div className="love-image-container">
                    <img src="/images/dog1.png" alt="Love Image 1"/>
                </div>
                <div className="love-text-container">
                    <h2>朋友眼中的我</h2>
                    <p>按照好哥们说法是我死实验室得了，一个不折不扣的死卷狗（后面会有解释的）。封建人，思维总是和正常人不一样，但是还挺有良心的，有点优柔寡断，不喜欢占小便宜。有点唐（他一直觉得我的表情包太唐了）？</p>
                    <p>学校里朋友的看法，大佬啊，技术不错，乐于助人。不懂得问李昊，他包知道的。腼腆，内向，老实。J人，期中期末复习文档啊、各种规划信手捏来。羽毛球技术还不错，约定打球的时间还从来没迟到过。很有眼色，总能观察到周围人情绪变化。</p>
                </div>
            </div>

            {/* 我眼中的自己 */}
            <div className="love-section love-reverse" ref={(el) => {
                sectionRefs.current[2] = el
            }}>
                <div className="love-text-container">
                    <h2>家人眼中的我</h2>
                    <p>懂事，老实，情绪稳定（不急不躁同时还能缓和家人情绪），很细心（家里大小孩交给我管都说很放心，我妈总是说我照顾妹妹比她照顾的还好），任劳任怨（只要我在家，家务活都交给我了，有时虽然感觉累不想干但从没有偷工减料过，我妈还说我拖地比她还仔细），不主动（哈哈，家里人经常让我主动点看到喜欢的就追啊干嘛的，总是以开玩笑的方式催我），聪明厉害（对我的要求都挺高吧，但都没有认为我做不到），整天嘻嘻哈哈（经常和家里人开玩笑啊）</p>
                </div>
                <div className="love-image-container">
                    <img src="/images/dog3.png" alt="Love Image 2"/>
                </div>
            </div>

            <div className="love-section love-bottom-text" ref={(el) => {
                sectionRefs.current[3] = el
            }}>
                <div className="love-image-container">
                    <img src="/images/dog4.png" alt="Love Image 3"/>
                </div>
                <div className="love-text-container">
                    <h2>我眼中的我</h2>
                    <p>上进心（一直在路上没停过，解释一下上面的卷，我的动力一部分来自我的几个姨夫，他们太厉害了，很想像他们一样，他们也会给我很多建议。一部分来自我自己，对自己要求比较高，想往上爬爬，想会当凌绝顶，一览众山小），优柔寡断（一些事狠不下心，尤其和人相关，总是会联想到自己），有点完美主义或者心思细腻（会考虑很多细节，只要决定做，那就要做到好，不能说很好但一定要尽可能达到自己极限），边界感（一方面是男女边界，从小家教如此。另一方面是不是我的我不碰，不会占小便宜什么的），喜欢放空思考（很喜欢骑着两轮吹风然后思考一些事情），乐观（虽然喜欢多想，有时内耗，但是经过多年的训练，每当内耗自己会往好处想很快就想开了，属于是思想自我乐观调节），包容心比较强（几乎没有过和别人相处不愉快的，我可以做出让步），有耐心，也有点迷茫（不知道怎么做，怎么做合适。嗯，但是我有个想法就是既然现在身处雾里说明我一直在行动，不小心走进雾里了，不管有没有方向可选或者方向喜不喜欢，先行动着，走出这片雾就豁然开朗了），有时有点颠（哈哈，会搞点抽象），运动（没了运动我会死，疫情期间也阻止不了我打羽毛球，现在打不了就跑步，强身健体），总是会换位思考（说话和做事啊总是会先考虑别人的想法，就想着能让别人舒服点？内耗主要来源之一，不总是以自己为中心），会察言观色（别人的一些细微举动我有时也能注意到，及时调整话术或者给予情绪支持），笨拙但真诚（没有弯弯绕绕的心思，或许就是因为这所以显得笨拙吧），内向（说来也奇怪，没想到我这么内向现在的好哥们还是我当时主动和他聊天后面才关系越来越好。但是，哈哈其他情况几乎不会主动找别人说话什么的。）</p>
                </div>
            </div>

            {/* 词云部分 */}
            <div className="love-section word-cloud-section" ref={(el) => {
                sectionRefs.current[4] = el
            }}>
                <div className="love-text-container">
                    <h2>性格标签</h2>
                    <WordCloud words={personalityWords}/>
                </div>
            </div>

            {/* 分割过渡部分 */}
            <div className="love-section transition-section" ref={(el) => {
                sectionRefs.current[5] = el
            }}>
                <div className="transition-content">
                    <div className="transition-text">
                        <h2>不知道你眼中的我会是什么</h2>
                        <p>光说我了，看累了吗？</p>
                        <p>都忽略掉吧，看看我眼中的你</p>
                    </div>
                </div>
            </div>

            <div className="love-section love-top-text" ref={(el) => {
                sectionRefs.current[6] = el
            }}>
                <div className="love-text-container">
                    <h2>我眼中的你</h2>
                    <p>有点忧郁？（可能是很迷茫，然后对世界对一些事不报希望，有时给你分享些事你会发表一些看淡世俗的话，哈哈），仙女姐姐（好看好看好看，重要事情说三遍），体贴or独立？（下面这件事感觉词穷很难确定是什么，请你看电影吃饭啊你又请回来了，印象挺深刻的，你很好哦，因为感觉男生多付出点也可以吧，也可能因为大学期间碰到的都只想啥也不做让我包揽整个项目的人太多了，难得能遇到也会给我回报这种），直率（有什么想法就会说吧），喜欢吵架（哈哈，开个玩笑，不过好像经常做梦梦到吵架不是？然后好像之前吐槽别人你骂人骂的还挺好玩），夜猫子（不过好像女生都是喜欢熬夜一点，哈哈，这么说我有点老了，熬不住），聪明伶俐（很聪明啦，会有自己的想法，很清醒。然后感觉抖音有时候会有很多就是情感博主会传播一些不积极的情感，但是你能分辨出来不受影响很厉害），很酷（喜欢那种科幻、动作类的剧，我滴乖太酷了），很有礼貌哦</p>
                </div>
                <div className="love-image-container">
                    <img src="/images/dog2.png" alt="Love Image 4"/>
                </div>
            </div>

            {/* 词云部分 */}
            <div className="love-section word-cloud-section" ref={(el) => {
                sectionRefs.current[7] = el
            }}>
                <div className="love-text-container">
                    <h2>性格标签</h2>
                    <WordCloud words={herPersonalityWords}/>
                </div>
            </div>
            {/* 分割过渡部分 */}
            <div className="love-section transition-section" ref={(el) => {
                sectionRefs.current[5] = el
            }}>
                <div className="transition-content">
                    <div className="transition-text">
                        <h2>步入正题</h2>
                        <p>我想将上面的词云在多填充一点无论缺点优点</p>
                        <p>看累了嘛，不说太多了</p>
                    </div>
                </div>
            </div>
            {/* 文字覆盖在图片上 */}
            <div className="love-section love-overlay-text" ref={(el) => {
                sectionRefs.current[8] = el
            }}>
                <div className="love-image-container">
                    <img src="/images/flowers.png" alt="Love Image 5"/>
                    <div className="love-text-container">
                        <h2>To 小常同学</h2>
                        <p>思虑良久，附带背景玫瑰花束当今奉上。</p>
                        <p>不知这一份礼物可还满意？再写一封情书给你啦，没有华丽的辞藻，只有一些碎碎念。</p>
                        <p>一见钟情不适用我，我不会因为容貌来喜欢上一个人。我只相信感觉，但是你是两者兼备。哪成想年少萌生的情愫，到了20岁再次破土生长。想用一段段话形容你，或许是文笔有限，文字难以描述与你相处给我带来的喜悦。不懂什么是浪漫，懂得是想把最好的给你，懂得是想日常所见所闻连同这块颗滚烫的心熔铸成世间最特别的礼物送给你。那些担心顾虑也总是会因你的一条条消息烟消云散。</p>
                        <p>这份礼物希望能在你的生命中留下一道微光，哪怕陪你走到最后的不是我。如果觉得唐突，那就放做是一株迟开的花，不必急着采摘，让它在微风中轻轻摇曳就好。我喜欢你，是我的事，如果你能接受那自然然是极好。如果你拒绝那也不怪你，是我还不够优秀仍需努力。唯愿你岁岁平安。</p>
                        <p>「我喜欢你」是假话。</p>
                        <p>上一句也是假话。</p>
                        <div className="signature">
                            lh by 2025-3-29
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoveForYou;