import cover1 from '../assets/covers/1.jpg';
import cover2 from '../assets/covers/2.jpg';
import cover3 from '../assets/covers/3.jpg';
import cover4 from '../assets/covers/4.jpg';
import cover5 from '../assets/covers/5.jpg';
import cover6 from '../assets/covers/6.jpg';
import cover7 from '../assets/covers/7.jpg';

import introA from '../assets/introduction/a.jpg';
import introB from '../assets/introduction/b.jpg';
import introC from '../assets/introduction/c.jpg';
import introD from '../assets/introduction/d.jpg';
import introE from '../assets/introduction/e.jpg';
import introF from '../assets/introduction/f.jpg';
import introG from '../assets/introduction/g.jpg';

export type Band = 'OmnipotentYouthSociety' | 'ReTROS' | 'Radiohead' | 'WolfAlice' | 'TheStrokes' | 'BeachHouse' | 'The1975';

export interface Option {
  text: string;
  band: Band;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "面对突如其来的巨大空白（如突然取消的计划），你的第一反应是？",
    options: [
      { text: "感到一阵隐秘的轻松，终于可以什么都不做", band: "TheStrokes" },
      { text: "迅速在脑海中重新排列时间表，填补空白", band: "ReTROS" },
      { text: "陷入无端的焦虑，开始胡思乱想", band: "The1975" },
      { text: "戴上耳机，沉浸在自己的精神世界里", band: "BeachHouse" }
    ]
  },
  {
    id: 2,
    text: "当你身处一段亲密关系中，你最害怕的是什么？",
    options: [
      { text: "对方看穿了我冷漠外表下其实极度渴望被爱", band: "WolfAlice" },
      { text: "失去对生活节奏的绝对掌控权", band: "ReTROS" },
      { text: "最终发现我们都只是在各自的孤独中自言自语", band: "OmnipotentYouthSociety" },
      { text: "过于清醒地看到这段关系最终走向消亡的必然", band: "Radiohead" }
    ]
  },
  {
    id: 3,
    text: "遇到无法解决的系统性问题（如社会现实），你的态度是？",
    options: [
      { text: "冷眼旁观，偶尔发出几句清醒但无用的嘲讽", band: "OmnipotentYouthSociety" },
      { text: "感到深深的无力，试图在精神层面解构它", band: "Radiohead" },
      { text: "只要不影响我个人的小世界，就随它去吧", band: "TheStrokes" },
      { text: "用极致的美学和幻想为自己建造一个避难所", band: "BeachHouse" }
    ]
  },
  {
    id: 4,
    text: "你如何处理自己内心深处的愤怒？",
    options: [
      { text: "压抑到极致，然后在某个不相干的瞬间突然爆发", band: "WolfAlice" },
      { text: "将其转化为高度结构化、充满秩序感的工作或创作", band: "ReTROS" },
      { text: "在社交媒体上用戏谑、碎片化的方式表达出来", band: "The1975" },
      { text: "愤怒最终都会转化为一种绵长的、无解的悲哀", band: "OmnipotentYouthSociety" }
    ]
  },
  {
    id: 5,
    text: "哪种场景最能让你感到安全？",
    options: [
      { text: "所有的物品都严格按照我的逻辑摆放整齐的房间", band: "ReTROS" },
      { text: "模糊了时间概念的黄昏，一切都笼罩在柔光中", band: "BeachHouse" },
      { text: "处于人群边缘，可以观察别人但不会被注意到", band: "Radiohead" },
      { text: "没有任何期待和压力的废柴时刻", band: "TheStrokes" }
    ]
  },
  {
    id: 6,
    text: "你通常如何面对“失败”？",
    options: [
      { text: "在开始前就告诉自己“反正意义不大”，以此降低期待", band: "TheStrokes" },
      { text: "表面装作不在乎，内心却在疯狂进行自我审判", band: "WolfAlice" },
      { text: "不断向他人解释，试图重塑自己在别人眼中的叙事", band: "The1975" },
      { text: "认为这是世界荒诞本质的又一次印证", band: "OmnipotentYouthSociety" }
    ]
  },
  {
    id: 7,
    text: "你最容易被哪种人吸引？",
    options: [
      { text: "身上有一种毫不费力的松弛感的人", band: "TheStrokes" },
      { text: "逻辑严密、情绪极其稳定的人", band: "ReTROS" },
      { text: "脆弱、敏感，仿佛随时会碎掉的人", band: "Radiohead" },
      { text: "充满矛盾，在不同场合展现截然不同面貌的人", band: "The1975" }
    ]
  },
  {
    id: 8,
    text: "当你感到极度痛苦时，你会选择？",
    options: [
      { text: "用一种近乎自毁的强烈情绪去覆盖它", band: "WolfAlice" },
      { text: "将痛苦浪漫化，沉溺于这种凄美的感受中", band: "BeachHouse" },
      { text: "像个旁观者一样，冷冷地分析自己为什么痛苦", band: "OmnipotentYouthSociety" },
      { text: "不断切换社交面具，试图在人群中稀释它", band: "The1975" }
    ]
  },
  {
    id: 9,
    text: "你对“未来”的真实看法是？",
    options: [
      { text: "一台精密运转但随时可能崩溃的机器", band: "ReTROS" },
      { text: "一个被科技和异化填满的冰冷迷宫", band: "Radiohead" },
      { text: "只要今天能舒服度过，未来怎样都无所谓", band: "TheStrokes" },
      { text: "一场注定走向衰败，但过程依然美丽的幻梦", band: "BeachHouse" }
    ]
  },
  {
    id: 10,
    text: "在深夜失眠时，你脑海中盘旋最多的是？",
    options: [
      { text: "白天某句没说好的话，以及别人会怎么看我", band: "The1975" },
      { text: "那些被我刻意隐藏、不敢触碰的激烈情绪", band: "WolfAlice" },
      { text: "对人类存在意义的终极怀疑", band: "Radiohead" },
      { text: "过去某个极其微小但美好的感官记忆", band: "BeachHouse" }
    ]
  },
  {
    id: 11,
    text: "如果可以，你最想抹去自己身上的哪个特质？",
    options: [
      { text: "总是试图掌控一切的强迫症", band: "ReTROS" },
      { text: "过于清醒，导致无法真正投入任何事物的旁观者心态", band: "OmnipotentYouthSociety" },
      { text: "害怕努力后依然失败的怯懦", band: "TheStrokes" },
      { text: "总是过度解读他人眼神的高敏感", band: "Radiohead" }
    ]
  },
  {
    id: 12,
    text: "你认为自己最大的伪装是什么？",
    options: [
      { text: "用“无所谓”来掩饰对失败的恐惧", band: "TheStrokes" },
      { text: "用“冷酷”来掩饰对被爱的极度渴望", band: "WolfAlice" },
      { text: "用“合群”来掩饰内心的支离破碎", band: "The1975" },
      { text: "用“理性”来掩饰随时可能失控的焦虑", band: "ReTROS" }
    ]
  },
  {
    id: 13,
    text: "面对这个世界的荒谬，你的解药是？",
    options: [
      { text: "极致的审美和感官上的沉醉", band: "BeachHouse" },
      { text: "建立一套只属于自己的、绝对严密的秩序", band: "ReTROS" },
      { text: "保持距离，用冷幽默消解一切宏大叙事", band: "OmnipotentYouthSociety" },
      { text: "承认荒谬，并在其中寻找一种颓废的自由", band: "TheStrokes" }
    ]
  },
  {
    id: 14,
    text: "你如何看待“真实”？",
    options: [
      { text: "真实太刺眼了，我宁愿生活在柔焦的滤镜里", band: "BeachHouse" },
      { text: "真实是碎片化的，我每天都在扮演不同的真实", band: "The1975" },
      { text: "真实是残酷的，但我有强迫症般揭开它的冲动", band: "Radiohead" },
      { text: "真实就是承认我们都无能为力", band: "OmnipotentYouthSociety" }
    ]
  },
  {
    id: 15,
    text: "当别人试图靠近你的内心时，你会？",
    options: [
      { text: "像刺猬一样竖起防备，测试对方的耐心", band: "WolfAlice" },
      { text: "礼貌地退后一步，保持安全的观察距离", band: "OmnipotentYouthSociety" },
      { text: "展现出他们想看到的那一面，隐藏真正的自己", band: "The1975" },
      { text: "感到恐慌，害怕他们发现我其实一团糟", band: "Radiohead" }
    ]
  },
  {
    id: 16,
    text: "哪种状态让你觉得最“活着”？",
    options: [
      { text: "在绝对的秩序中，一切都在按计划完美运行", band: "ReTROS" },
      { text: "情绪彻底失控、在崩溃边缘游走的瞬间", band: "WolfAlice" },
      { text: "什么都不用想，只是单纯地感受阳光和微风", band: "TheStrokes" },
      { text: "沉浸在一段极具氛围感的音乐或电影中，忘记自我", band: "BeachHouse" }
    ]
  },
  {
    id: 17,
    text: "你对“意义”的看法是？",
    options: [
      { text: "意义是人为构建的幻觉，我早已看透", band: "OmnipotentYouthSociety" },
      { text: "意义在于不断地自我剖析和解构", band: "Radiohead" },
      { text: "意义太沉重了，我只想轻松地活在当下", band: "TheStrokes" },
      { text: "意义存在于那些转瞬即逝的美学体验中", band: "BeachHouse" }
    ]
  },
  {
    id: 18,
    text: "如果你的内心是一个房间，它看起来像什么？",
    options: [
      { text: "充满各种镜子，折射出无数个不同的我", band: "The1975" },
      { text: "极简、冷色调，所有物品都精确对齐", band: "ReTROS" },
      { text: "昏暗、充满烟雾，角落里堆着旧物", band: "OmnipotentYouthSociety" },
      { text: "外表是坚硬的混凝土，里面却藏着一团火", band: "WolfAlice" }
    ]
  },
  {
    id: 19,
    text: "你最容易对哪种事物产生共鸣？",
    options: [
      { text: "那些美丽但注定会消亡的事物", band: "BeachHouse" },
      { text: "那些被异化、被边缘化的个体", band: "Radiohead" },
      { text: "那些表面平静但暗流涌动的状态", band: "WolfAlice" },
      { text: "那些看似漫不经心实则充满才华的表达", band: "TheStrokes" }
    ]
  },
  {
    id: 20,
    text: "最终，你希望如何与这个世界和解？",
    options: [
      { text: "接受自己的多面性，不再为“我是谁”而焦虑", band: "The1975" },
      { text: "找到一种绝对的秩序，让内心不再失控", band: "ReTROS" },
      { text: "承认自己的无力，但在旁观中找到平静", band: "OmnipotentYouthSociety" },
      { text: "放弃对完美的执念，允许自己做一个快乐的废物", band: "TheStrokes" }
    ]
  }
];

export const resultsData = {
  OmnipotentYouthSociety: {
    name: "万能青年旅店",
    shortIntro: "中国内地独立摇滚乐队，以诗意的歌词和融合管乐的编曲见长。",
    tags: ["现实主义", "慢性绝望", "自我旁观"],
    description: "表面清醒的现实主义者，本质是慢性绝望的自我旁观者。你拥有一双看透世俗的冷眼，对宏大叙事和虚假繁荣嗤之以鼻。你习惯与世界保持距离，用一种近乎残酷的理智剖析生活。然而，这种过度的清醒并未带来解脱，反而让你陷入一种绵长的、无解的悲哀中。你是一个清醒的沉没者。",
    quote: "“是谁来自山川湖海，却囿于昼夜、厨房与爱”",
    track: "《十万嬉皮》",
    tracks: ["《十万嬉皮》", "《秦皇岛》", "《大石碎胸口》", "《杀死那个石家庄人》"],
    vibe: "破败工业城市里的浪漫主义，小号声中的末日狂欢。你们的灵魂底色是灰暗的华北平原，却总能在绝望的废墟中开出诗意的花。在时代洪流的裹挟下，用一种近乎悲壮的清醒，冷眼旁观着周遭的荒诞与喧嚣。",
    coverUrl: cover1,
    introImageUrl: introA,
    colors: "from-zinc-200 to-white",
    accent: "text-zinc-800"
  },
  ReTROS: {
    name: "重塑雕像的权利",
    shortIntro: "中国最具国际影响力的后朋克/电子摇滚乐队之一，风格冷峻严密。",
    tags: ["极致理性", "秩序控制", "隐性焦虑"],
    description: "极致理性与秩序控制者，实则无法承受失控的人。你的精神世界是一座精密运转的机械城堡。你极度渴望掌控感，试图用严密的逻辑和规则来抵御外界的混沌。你展现给世人的是冷峻、克制和无懈可击，但在这层坚硬的盔甲下，隐藏着对未知和失控的深深恐惧。",
    quote: "“The future is a building, the past is a ghost”",
    track: "《Pigs in the River》",
    tracks: ["《Pigs in the River》", "《8+18》", "《At Mosp Here》", "《Sound for Celebration》"],
    vibe: "严密、冷峻、充满建筑学美感的后朋克暗房。你们的世界是一座精密咬合的钢铁迷宫，拒绝一切多余的感伤与冗杂。在合成器与贝斯构建的绝对秩序中，隐藏着对失控的恐惧，以及对纯粹理性的极致迷恋。",
    coverUrl: cover2,
    introImageUrl: introB,
    colors: "from-stone-200 to-white",
    accent: "text-stone-800"
  },
  Radiohead: {
    name: "Radiohead",
    shortIntro: "英国殿堂级另类摇滚乐队，不断突破音乐边界的时代先锋。",
    tags: ["高敏感", "世界解构", "清醒逃避"],
    description: "高敏感的世界解构者，本质是对现实过度清醒的逃避者。你的神经末梢比常人多出无数倍，能够轻易感知到现代社会的异化与荒诞。你像一个外星人般审视着人类的狂欢，内心充满了疏离感。你试图用思考去解构一切，但最终发现，过度的清醒反而成了你逃避真实连接的借口。",
    quote: "“I'm not here. This isn't happening.”",
    track: "《How to Disappear Completely》",
    tracks: ["《How to Disappear Completely》", "《Creep》", "《Karma Police》", "《No Surprises》"],
    vibe: "冰冷电子仪器与脆弱人声交织的异星荒野。你们是现代社会的异乡人，游走在科技异化与人类情感的边缘。在失真的吉他与神经质的呢喃中，是对这个过度消费、信息爆炸世界的无声控诉与深深疏离。",
    coverUrl: cover4,
    introImageUrl: introD,
    colors: "from-slate-200 to-white",
    accent: "text-slate-800"
  },
  WolfAlice: {
    name: "Wolf Alice",
    shortIntro: "英国独立摇滚乐队，游走于狂躁垃圾摇滚与梦幻流行之间。",
    tags: ["冷感外壳", "情绪炸弹", "渴望注视"],
    description: "冷感外壳下的情绪炸弹，实则害怕被真正看见。你习惯用冷漠、锋利甚至带刺的外表来武装自己，让人觉得你酷且难以接近。但实际上，你的内心是一座随时可能喷发的活火山，积压着极其浓烈的情感。你推开别人，其实是为了测试他们是否会坚定地留下来。",
    quote: "“I'm a ruin, but I'm a beautiful ruin.”",
    track: "《Don't Delete The Kisses》",
    tracks: ["《Don't Delete The Kisses》", "《Moaning Lisa Smile》", "《Bros》", "《Silk》"],
    vibe: "裹挟着失真吉他噪音的青春期日记本。你们的情感如同过山车般剧烈起伏，在极度的狂躁与极致的温柔之间反复横跳。那些被隐藏在厚重音墙下的脆弱与敏感，是你们对抗成人世界虚伪面具的最有力武器。",
    coverUrl: cover3,
    introImageUrl: introC,
    colors: "from-red-100 to-white",
    accent: "text-red-800"
  },
  TheStrokes: {
    name: "The Strokes",
    shortIntro: "美国车库摇滚复兴领军乐队，定义了21世纪初的纽约独立之声。",
    tags: ["反内卷", "松弛感", "防御性颓废"],
    description: "反内卷的松弛感玩家，本质是对失败的提前合理化。你身上带着一种迷人的、毫不费力的颓废气质。你对世俗的成功标准不屑一顾，崇尚“随便吧”的生活哲学。然而，这种漫不经心往往是一种自我保护机制——只要我不曾全力以赴，我就永远不会真正失败。",
    quote: "“I just want to be forgotten, and I don't want to be reminded.”",
    track: "《Someday》",
    tracks: ["《Someday》", "《Reptilia》", "《Last Nite》", "《The Adults Are Talking》"],
    vibe: "纽约下东区凌晨三点的街头，皮夹克与漫不经心的烟圈。你们身上散发着一种毫不费力的迷人颓废感，对世俗的成功标准嗤之以鼻。在复古的吉他Riff和慵懒的嗓音里，是对“随便吧”生活哲学的完美诠释。",
    coverUrl: cover7,
    introImageUrl: introG,
    colors: "from-amber-100 to-white",
    accent: "text-amber-800"
  },
  BeachHouse: {
    name: "Beach House",
    shortIntro: "美国梦幻流行双人团，以氤氲迷幻的合成器音景著称。",
    tags: ["审美至上", "温柔退场", "幻梦沉溺"],
    description: "审美至上的逃避主义者，本质是对现实的温柔退场。真实世界对你来说太刺眼、太粗糙了。你选择用极致的美学、模糊的光影和氤氲的氛围为自己建造一个避难所。你沉溺于那些转瞬即逝的感官体验中，用一种温柔而坚决的姿态，完成了对这个坚硬世界的消极抵抗。",
    quote: "“The universe is riding off with you.”",
    track: "《Space Song》",
    tracks: ["《Space Song》", "《Myth》", "《Lazuli》", "《Silver Soul》"],
    vibe: "沉溺在暗红色天鹅绒与迷幻合成器中的无尽夏日。你们的世界是一场永远不会醒来的梦境，充满着氤氲的雾气和模糊的光影。在缓慢流淌的旋律中，你们温柔地拒绝了现实的粗糙，建造了一座只属于自己的美学避难所。",
    coverUrl: cover6,
    introImageUrl: introF,
    colors: "from-purple-100 to-white",
    accent: "text-purple-800"
  },
  The1975: {
    name: "The 1975",
    shortIntro: "英国流行摇滚乐队，融合复古合成器流行与后现代碎片化叙事。",
    tags: ["多重人格", "自我叙事", "身份焦虑"],
    description: "多重人格的自我叙事者，本质是身份不稳定的焦虑个体。你是一个矛盾的集合体，在不同的社交场合中自如地切换着面具。你极度关注自我，习惯用碎片化、戏谑的方式在外界重塑自己的形象。但在这些华丽的自我叙事背后，隐藏着你对“我到底是谁”的深深焦虑和不确定感。",
    quote: "“I'm a sycophant, I'm a narcissist, I'm a romantic.”",
    track: "《Love It If We Made It》",
    tracks: ["《Love It If We Made It》", "《Somebody Else》", "《Robbers》", "《It's Not Living (If It's Not With You)》"],
    vibe: "霓虹灯闪烁的都市夜归人，充满后现代碎片感的自白。你们是信息时代的矛盾体，在极度自恋与极度自卑之间徘徊。用最流行、最合成器的外壳，包裹着对现代爱情、社交媒体和存在主义危机的深刻焦虑与戏谑。",
    coverUrl: cover5,
    introImageUrl: introE,
    colors: "from-pink-100 to-white",
    accent: "text-pink-800"
  }
};
