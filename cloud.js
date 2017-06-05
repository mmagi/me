function flatten(t, e) {
    if ("string" == typeof t)return t;
    var n = [];
    for (e in t) {
        var a = flatten(t[e], e);
        a && n.push(a)
    }
    return n.join(" ")
}
config={anglecount:5,anglefrom:-60,angleto:60};
function parseText(t) {
    tags = [
        {"key": "狮子座", "value": 5},
        {"key": "属兔", "value": 5},
        {"key": "天津大学", "value": 4},
        {"key": "计算机科学与技术", "value": 4},
        {"key": "软件工程", "value": 4},
        {"key": "JAVA", "value": 5},
        {"key": "C", "value": 4},
        {"key": "HTML", "value": 5},
        {"key": "js", "value": 5},
        {"key": "Mysql", "value": 4},
        {"key": "R", "value": 4},
        {"key": "Bash", "value": 4},
        {"key": "smali", "value": 4},
        {"key": "asm", "value": 4},
        {"key": "逆向工程", "value": 4},
        {"key": "Redis", "value": 3},
        {"key": "Oracle", "value": 3},
        {"key": "SQL Sever", "value": 3},
        {"key": "Photoshop", "value": 5},
        {"key": "Illustrator", "value": 5},
        {"key": "After Effects", "value": 4},
        {"key": "Indesign", "value": 4},
        {"key": "CSS", "value": 4},
        {"key": "火龙果", "value": 4},
        {"key": "荔枝", "value": 5},
        {"key": "草莓", "value": 5},
        {"key": "B站", "value": 4},
        {"key": "Stage1st", "value": 4},
        {"key": "Coursera", "value": 4},
        {"key": "Docker", "value": 3},
        {"key": "Scala", "value": 3},
        {"key": "Groovy", "value": 3},
        {"key": "Python", "value": 3},
        {"key": "Lisp", "value": 3},
        {"key": "Processing", "value": 3},
        {"key": "Spark", "value": 3},
        {"key": "Ableton Live", "value": 3},
        {"key": "信息技术总部", "value": 4},
        {"key": "凉风", "value": 4},
        {"key": "发呆", "value": 4},
        {"key": "萌", "value": 4},
        {"key": "宅", "value": 4},
        {"key": "昆明", "value": 4},
        {"key": "逻辑", "value": 5},
        {"key": "制度", "value": 5}, {
            "key": "细节",
            "value": 5
        }, {"key": "安全", "value": 5}, {"key": "自己", "value": 5}, {"key": "工作", "value": 5}, {
            "key": "努力",
            "value": 5
        }, {"key": "规章", "value": 5}, {"key": "规章制度", "value": 4}, {
            "key": "安全感",
            "value": 4
        }, {"key": "喜欢", "value": 4}, {"key": "需要安全感", "value": 4}, {"key": "事情", "value": 4}, {
            "key": "评估",
            "value": 4
        }, {"key": "行动", "value": 4}, {"key": "可能", "value": 4}, {"key": "真诚", "value": 3}, {
            "key": "遵守",
            "value": 3
        }, {"key": "尊重", "value": 3}, {"key": "环境", "value": 3}, {"key": "权威", "value": 3}, {
            "key": "温和",
            "value": 3
        }, {"key": "做事", "value": 3}, {"key": "标准", "value": 3}, {
            "key": "专业",
            "value": 3
        }, {"key": "仔细", "value": 3}, {"key": "别人", "value": 3}, {
            "key": "清晰",
            "value": 3
        }, {"key": "表现", "value": 3}, {"key": "有条", "value": 3}, {"key": "处理", "value": 3}, {
            "key": "坚持",
            "value": 3
        }, {"key": "流程", "value": 3}, {"key": "决策", "value": 3}, {
            "key": "谨慎",
            "value": 3
        }, {"key": "完美", "value": 3}, {"key": "正确", "value": 3}, {"key": "改变", "value": 3}, {
            "key": "突然",
            "value": 3
        }, {"key": "耐性", "value": 2},{
            "key": "质量",
            "value": 2
        }, {"key": "逻辑清晰", "value": 2}, {"key": "工作努力", "value": 2}, {
            "key": "希望正确地处理事情",
            "value": 2
        }, {"key": "尊重权威", "value": 2}, {"key": "遵守规章制度", "value": 2}, {"key": "相处", "value": 2}, {
            "key": "喜欢结构严谨的工作环境",
            "value": 2
        }, {"key": "并且", "value": 2}, {"key": "精确性", "value": 2}, {"key": "精确", "value": 2}, {
            "key": "决定",
            "value": 2
        }, {"key": "而且", "value": 2}, {"key": "要求", "value": 2}, {"key": "对人", "value": 2}, {
            "key": "他会",
            "value": 2
        }, {"key": "表露", "value": 2}, {"key": "任何", "value": 2}, {"key": "不做", "value": 2}, {
            "key": "只是",
            "value": 2
        }, {"key": "非常", "value": 2}, {"key": "强大", "value": 2}, {"key": "讨厌", "value": 2}, {
            "key": "通常",
            "value": 2
        }, {"key": "情况", "value": 2}, {"key": "稳定", "value": 2}, {"key": "方式", "value": 2}, {
            "key": "进行",
            "value": 2
        }, {"key": "希望", "value": 2}, {"key": "他可", "value": 2}, {"key": "受到", "value": 2}, {
            "key": "能会",
            "value": 2
        }, {"key": "当他", "value": 2}, {"key": "正确地", "value": 2}, {"key": "绝对", "value": 2}, {
            "key": "甚至",
            "value": 2
        }, {"key": "计划", "value": 2}, {"key": "判断", "value": 2}, {
            "key": "不要",
            "value": 2
        }, {"key": "同事", "value": 2},  {"key": "脾气", "value": 2},{"key": "方面", "value": 2}, {
            "key": "纪律",
            "value": 2
        }, {"key": "认为", "value": 2}, {"key": "任务", "value": 2}, {"key": "一旦", "value": 2}, {
            "key": "开始",
            "value": 2
        }, {"key": "坚定", "value": 2}, {"key": "完成任务", "value": 2}, {"key": "完成", "value": 2}, {
            "key": "冲出去",
            "value": 2
        }, {"key": "冷静", "value": 2}, {"key": "结构", "value": 2}, {"key": "严谨", "value": 2}, {
            "key": "工作环境",
            "value": 2
        }, {"key": "他不", "value": 2}, {"key": "长期", "value": 2}, {"key": "或者", "value": 2}, {
            "key": "一个",
            "value": 2
        }, {"key": "压力", "value": 2}, {
            "key": "找出",
            "value": 2
        }, {"key": "在做出判断和行动之前", "value": 2}, {"key": "他都会评估可能会带来的后果", "value": 2}, {
            "key": "成功",
            "value": 2
        }, {"key": "变得", "value": 2}, {"key": "由于", "value": 2}, {"key": "跟进", "value": 2}, {
            "key": "采取",
            "value": 2
        }, {"key": "如果", "value": 2}, {"key": "因为", "value": 2}, {"key": "一些", "value": 2}, {
            "key": "时候",
            "value": 2
        }, {"key": "第一", "value": 2}, {"key": "心里", "value": 2}, {"key": "没有", "value": 2}, {
            "key": "给他",
            "value": 2
        }, {"key": "避免", "value": 2}, {"key": "意见", "value": 2}, {"key": "表现出", "value": 2}, {
            "key": "冲突",
            "value": 2
        }, {"key": "思维", "value": 2}, {"key": "相当", "value": 2}, {"key": "他有", "value": 2}, {
            "key": "坚持不懈",
            "value": 2
        }, {"key": "先尝", "value": 2}, {"key": "专心", "value": 2}, {"key": "方案", "value": 2}, {
            "key": "节奏",
            "value": 2
        }, {"key": "能够处理重复的例行性工作", "value": 1}, {"key": "要做", "value": 1}, {"key": "善于与同事相处", "value": 1}, {
            "key": "就做",
            "value": 1
        }, {"key": "", "value": 1}, {"key": "那么多", "value": 1}, {"key": "行事", "value": 1}, {
            "key": "讲求",
            "value": 1
        }, {"key": "面面俱到", "value": 1}, {"key": "面面", "value": 1}, {"key": "俱到", "value": 1}, {
            "key": "成熟",
            "value": 1
        }, {"key": "老练", "value": 1}, {"key": "废话", "value": 1}, {"key": "态度", "value": 1}, {
            "key": "从容",
            "value": 1
        }, {"key": "盖章", "value": 1}, {"key": "也能", "value": 1}, {"key": "运用", "value": 1}, {
            "key": "逻辑性",
            "value": 1
        }, {"key": "分析", "value": 1}, {"key": "理性", "value": 1}, {"key": "推敲", "value": 1}, {
            "key": "细心",
            "value": 1
        }, {"key": "戳到", "value": 1}, {"key": "对人对事", "value": 1}, {"key": "吵架", "value": 1}, {
            "key": "甚高",
            "value": 1
        }, {"key": "地老天荒", "value": 1}, {"key": "对事", "value": 1}, {"key": "第一个", "value": 1}, {
            "key": "地老",
            "value": 1
        }, {"key": "同情心", "value": 1}, {"key": "关怀", "value": 1}, {"key": "同情", "value": 1}, {
            "key": "而在",
            "value": 1
        }, {"key": "任何事", "value": 1}, {"key": "务时", "value": 1}, {"key": "天荒", "value": 1}, {
            "key": "经常",
            "value": 1
        }, {"key": "收藏", "value": 1}, {"key": "不随", "value": 1}, {"key": "除非", "value": 1}, {
            "key": "否则",
            "value": 1
        }, {"key": "很少", "value": 1}, {"key": "公开", "value": 1}, {"key": "从不", "value": 1}, {
            "key": "想法",
            "value": 1
        }, {"key": "出产", "value": 1}, {"key": "注重", "value": 1}, {"key": "准确性", "value": 1}, {
            "key": "准确",
            "value": 1
        }, {"key": "律己", "value": 1}, {"key": "甚严", "value": 1}, {"key": "深思熟虑", "value": 1}, {
            "key": "深思",
            "value": 1
        }, {"key": "熟虑", "value": 1}, {"key": "细致", "value": 1}, {"key": "周到", "value": 1}, {
            "key": "次品",
            "value": 1
        }, {"key": "稳重", "value": 1}, {"key": "预测", "value": 1}, {"key": "事实", "value": 1}, {
            "key": "透彻",
            "value": 1
        }, {"key": "思考", "value": 1}, {"key": "差一点儿", "value": 1}, {"key": "制定", "value": 1}, {
            "key": "实际",
            "value": 1
        }, {"key": "跟人", "value": 1}, {"key": "情况下", "value": 1}, {"key": "算作", "value": 1}, {
            "key": "废品",
            "value": 1
        }, {"key": "心力", "value": 1}, {"key": "采用", "value": 1}, {"key": "切实可行", "value": 1}, {
            "key": "差一点",
            "value": 1
        }, {"key": "一点", "value": 1}, {"key": "切实", "value": 1}, {"key": "可行", "value": 1}, {
            "key": "与他",
            "value": 1
        }, {"key": "留给", "value": 1}, {"key": "别人的", "value": 1}, {"key": "第一印象", "value": 1}, {
            "key": "相比",
            "value": 1
        }, {"key": "心细", "value": 1}, {"key": "印象", "value": 1}, {"key": "容易", "value": 1}, {
            "key": "能更",
            "value": 1
        }, {"key": "敏锐", "value": 1}, {"key": "察觉", "value": 1}, {"key": "感觉", "value": 1}, {
            "key": "补洞",
            "value": 1
        }, {"key": "更具", "value": 1}, {"key": "有自", "value": 1}, {"key": "我意", "value": 1}, {
            "key": "挑战",
            "value": 1
        }, {"key": "还能", "value": 1}, {"key": "自我", "value": 1}, {"key": "保护", "value": 1}, {
            "key": "过于",
            "value": 1
        }, {"key": "敏感", "value": 1}, {"key": "他能", "value": 1}, {"key": "地将", "value": 1}, {
            "key": "项目",
            "value": 1
        }, {"key": "上接", "value": 1}, {"key": "信息", "value": 1}, {"key": "运用于", "value": 1}, {
            "key": "多种",
            "value": 1
        }, {"key": "不同的", "value": 1}, {"key": "情境", "value": 1}, {"key": "不同", "value": 1}, {
            "key": "检查",
            "value": 1
        }, {"key": "以内", "value": 1}, {"key": "心的", "value": 1}, {"key": "认知", "value": 1}, {
            "key": "正在",
            "value": 1
        }, {"key": "纰漏", "value": 1}, {"key": "资料", "value": 1}, {"key": "丝毫不差", "value": 1}, {
            "key": "冷淡",
            "value": 1
        }, {"key": "丝毫不", "value": 1}, {"key": "退缩", "value": 1}, {"key": "遵循", "value": 1}, {
            "key": "所有的",
            "value": 1
        }, {"key": "所有", "value": 1}, {"key": "并且会", "value": 1}, {"key": "通过", "value": 1}, {
            "key": "和数",
            "value": 1
        }, {"key": "来说", "value": 1}, {"key": "丝毫", "value": 1}, {"key": "逻辑强大", "value": 1}, {
            "key": "不随便跟人哈拉",
            "value": 1
        }, {"key": "做事努力", "value": 1}, {"key": "不做不过脑子的傻逼", "value": 1}, {
            "key": "无论多枯燥的日常",
            "value": 1
        }, {"key": "都能不厌其烦", "value": 1}, {"key": "哪怕每天只是盖章", "value": 1}, {
            "key": "也能戳到地老天荒",
            "value": 1
        }, {"key": "确立", "value": 1}, {"key": "真诚相处", "value": 1}, {"key": "执行", "value": 1}, {
            "key": "容易满足",
            "value": 1
        }, {"key": "更可", "value": 1}, {"key": "被认为", "value": 1}, {"key": "是个", "value": 1}, {
            "key": "力行",
            "value": 1
        }, {"key": "不惹事生非", "value": 1}, {"key": "的人", "value": 1}, {"key": "还很尊重牛逼的权威", "value": 1}, {
            "key": "遵纪守法",
            "value": 1
        }, {"key": "绝对不造假", "value": 1}, {"key": "尊重制度", "value": 1}, {"key": "坚定不移", "value": 1}, {
            "key": "绝对不吃人豆腐",
            "value": 1
        }, {"key": "不移", "value": 1}, {"key": "有始有终", "value": 1}, {"key": "需要安全的环境", "value": 1}, {
            "key": "早已不相信各种画大饼",
            "value": 1
        }, {"key": "讨厌事情永远停留在计划", "value": 1}, {"key": "事务", "value": 1}, {"key": "处理方式", "value": 1}, {
            "key": "倾向于",
            "value": 1
        }, {"key": "重视", "value": 1}, {"key": "倾向", "value": 1}, {"key": "理智", "value": 1}, {
            "key": "要做就做好它",
            "value": 1
        }, {"key": "讲道", "value": 1}, {"key": "在制", "value": 1}, {"key": "不要那么多废话", "value": 1}, {
            "key": "比较",
            "value": 1
        }, {"key": "小心谨慎", "value": 1}, {"key": "小心", "value": 1}, {"key": "温和细心没脾气", "value": 1}, {
            "key": "追求",
            "value": 1
        }, {"key": "跟人吵架不会第一个冲出去", "value": 1}, {"key": "知识", "value": 1}, {"key": "能力", "value": 1}, {
            "key": "严格要求",
            "value": 1
        }, {"key": "又有", "value": 1}, {"key": "高的", "value": 1}, {"key": "水准", "value": 1}, {
            "key": "严格",
            "value": 1
        }, {"key": "厌恶", "value": 1}, {"key": "混乱", "value": 1}, {"key": "低效率", "value": 1}, {
            "key": "低效",
            "value": 1
        }, {"key": "从不出产次品", "value": 1}, {"key": "差一点儿的都会被算作废品", "value": 1}, {
            "key": "出差",
            "value": 1
        }, {"key": "心细如发", "value": 1}, {"key": "不期而遇", "value": 1}, {"key": "变化", "value": 1}, {
            "key": "不期",
            "value": 1
        }, {"key": "而遇", "value": 1}, {"key": "他是", "value": 1}, {"key": "专业补洞还能检查纰漏丝毫不差", "value": 1}, {
            "key": "务实",
            "value": 1
        }, {"key": "求效", "value": 1}, {"key": "满足", "value": 1}, {"key": "太多", "value": 1}, {
            "key": "理论上",
            "value": 1
        }, {"key": "空想", "value": 1}, {"key": "假设", "value": 1}, {"key": "惹事生非", "value": 1}, {
            "key": "理论",
            "value": 1
        }, {"key": "巨大的", "value": 1}, {"key": "惹事", "value": 1}, {"key": "能被", "value": 1}, {
            "key": "掩盖",
            "value": 1
        }, {"key": "巨大", "value": 1}, {"key": "丧失了", "value": 1}, {"key": "还很", "value": 1}, {
            "key": "新的",
            "value": 1
        }, {"key": "可能性", "value": 1}, {"key": "丧失", "value": 1}, {"key": "他行事讲求面面俱到", "value": 1}, {
            "key": "成熟老练",
            "value": 1
        }, {"key": "并且态度从容", "value": 1}, {"key": "他讲求精确性", "value": 1}, {
            "key": "善于运用逻辑性的分析和理性的推敲做决定",
            "value": 1
        }, {"key": "而且对人对事要求甚高", "value": 1}, {"key": "他会表露对人的同情心和关怀", "value": 1}, {
            "key": "而在处理任何事务时",
            "value": 1
        }, {"key": "他经常收藏自己", "value": 1}, {"key": "除非被要求", "value": 1}, {
            "key": "否则很少公开自己的想法",
            "value": 1
        }, {"key": "他非常注重准确性", "value": 1}, {"key": "律己甚严", "value": 1}, {"key": "他深思熟虑", "value": 1}, {
            "key": "细致周到",
            "value": 1
        }, {"key": "有耐性", "value": 1}, {"key": "行事稳重", "value": 1}, {"key": "可预测", "value": 1}, {
            "key": "他善于分析事实",
            "value": 1
        }, {"key": "会透彻地思考", "value": 1}, {"key": "并且仔细地制定计划", "value": 1}, {
            "key": "他注重实际",
            "value": 1
        }, {"key": "通常情况下", "value": 1}, {"key": "他会以稳定的心力", "value": 1}, {
            "key": "采用切实可行的方式来进行工作",
            "value": 1
        }, {"key": "与他留给别人的第一印象相比", "value": 1}, {"key": "他可能更敏锐察觉自己给别人的感觉", "value": 1}, {
            "key": "在工作受到批评时更具有自我意识",
            "value": 1
        }, {"key": "当工作受到批评", "value": 1}, {"key": "挑战时", "value": 1}, {
            "key": "他可能会自我保护和过于敏感",
            "value": 1
        }, {"key": "他能有逻辑性地将项目上接受到的信息运用于多种不同的情境中", "value": 1}, {"key": "有时", "value": 1}, {
            "key": "当他以内心的认知正在思考",
            "value": 1
        }, {"key": "评估资料时", "value": 1}, {"key": "会表现得冷淡", "value": 1}, {
            "key": "甚至退缩",
            "value": 1
        }, {"key": "他会遵循所有的规章制度", "value": 1}, {"key": "并且会通过事实和数据来说服别人", "value": 1}, {
            "key": "不过",
            "value": 1
        }, {"key": "牛逼的", "value": 1}, {"key": "他会坚持遵循已确立的标准和流程", "value": 1}, {
            "key": "确实",
            "value": 1
        }, {"key": "在规章制度的执行方面", "value": 1}, {"key": "他更可能被认为是个力行纪律的人", "value": 1}, {
            "key": "任务一旦开始了",
            "value": 1
        }, {"key": "他就会坚定不移", "value": 1}, {"key": "有始有终地完成任务", "value": 1}, {
            "key": "他对事务的处理方式是倾向于重视逻辑和分析",
            "value": 1
        }, {"key": "理智而冷静", "value": 1}, {"key": "讲道理的", "value": 1}, {"key": "在制定决策时", "value": 1}, {
            "key": "他会比较小心谨慎",
            "value": 1
        }, {"key": "他追求完美", "value": 1}, {"key": "在知识和能力方面严格要求自己又有非常高的水准", "value": 1}, {
            "key": "重视自己和别人的知识和专业能力",
            "value": 1
        }, {"key": "厌恶混乱和低效率", "value": 1}, {"key": "他不喜欢长期出差", "value": 1}, {
            "key": "或者不期而遇的变化",
            "value": 1
        }, {"key": "他是一个务实求效的人", "value": 1}, {"key": "不喜欢做太多理论上的空想和假设", "value": 1}, {
            "key": "他可能会非常追求完美",
            "value": 1
        }, {"key": "在巨大的压力下他可能被细节所掩盖", "value": 1}, {"key": "丧失了找出新的可能性的能力", "value": 1}, {
            "key": "为了",
            "value": 1
        }, {"key": "在当", "value": 1}, {"key": "获得成功", "value": 1}, {"key": "获得", "value": 1}, {
            "key": "脑子",
            "value": 1
        }, {"key": "调整了", "value": 1}, {"key": "行为", "value": 1}, {"key": "风格", "value": 1}, {
            "key": "调整",
            "value": 1
        }, {"key": "做出", "value": 1}, {"key": "重复", "value": 1}, {"key": "犹豫不决", "value": 1}, {
            "key": "犹豫",
            "value": 1
        }, {"key": "不决", "value": 1}, {"key": "原因", "value": 1}, {"key": "可能是", "value": 1}, {
            "key": "例行",
            "value": 1
        }, {"key": "他在", "value": 1}, {"key": "目前", "value": 1}, {"key": "角色", "value": 1}, {
            "key": "受到了",
            "value": 1
        }, {"key": "压制", "value": 1}, {"key": "有责", "value": 1}, {"key": "无权", "value": 1}, {
            "key": "遵纪",
            "value": 1
        }, {"key": "守法", "value": 1}, {"key": "一种", "value": 1}, {"key": "而不是", "value": 1}, {
            "key": "直接",
            "value": 1
        }, {"key": "开展", "value": 1}, {"key": "而不", "value": 1}, {"key": "无论", "value": 1}, {
            "key": "以上",
            "value": 1
        }, {"key": "任何情况", "value": 1}, {"key": "适用", "value": 1}, {"key": "职位", "value": 1}, {
            "key": "重新",
            "value": 1
        }, {"key": "造假", "value": 1}, {"key": "这种情况", "value": 1}, {"key": "延续下去", "value": 1}, {
            "key": "影响",
            "value": 1
        }, {"key": "他的", "value": 1}, {"key": "这种", "value": 1}, {"key": "延续", "value": 1}, {
            "key": "下去",
            "value": 1
        }, {"key": "有一些", "value": 1}, {"key": "快速", "value": 1}, {"key": "之间", "value": 1}, {
            "key": "矛盾",
            "value": 1
        }, {"key": "感到", "value": 1}, {"key": "困惑", "value": 1}, {"key": "枯燥", "value": 1}, {
            "key": "的情",
            "value": 1
        }, {"key": "他为", "value": 1}, {"key": "而且有", "value": 1}, {"key": "不吃", "value": 1}, {
            "key": "固执",
            "value": 1
        }, {"key": "看法", "value": 1}, {"key": "难以", "value": 1}, {"key": "豆腐", "value": 1}, {
            "key": "日常",
            "value": 1
        }, {"key": "都能", "value": 1}, {"key": "认同感", "value": 1}, {"key": "认同", "value": 1}, {
            "key": "会进",
            "value": 1
        }, {"key": "被动", "value": 1}, {"key": "抵抗", "value": 1}, {"key": "存在", "value": 1}, {
            "key": "情形",
            "value": 1
        }, {"key": "中的", "value": 1}, {"key": "预示", "value": 1}, {"key": "不厌其烦", "value": 1}, {
            "key": "时间",
            "value": 1
        }, {"key": "来接", "value": 1}, {"key": "早已", "value": 1}, {"key": "同时", "value": 1}, {
            "key": "征求",
            "value": 1
        }, {"key": "不相信", "value": 1}, {"key": "持续", "value": 1}, {"key": "感受到", "value": 1}, {
            "key": "极大",
            "value": 1
        }, {"key": "工作压力", "value": 1}, {"key": "感受", "value": 1}, {"key": "各种", "value": 1}, {
            "key": "灵活",
            "value": 1
        }, {"key": "多变", "value": 1}, {"key": "首先", "value": 1}, {"key": "强调", "value": 1}, {
            "key": "机警",
            "value": 1
        }, {"key": "挑剔", "value": 1}, {"key": "内敛", "value": 1}, {"key": "有条有理", "value": 1}, {
            "key": "特质",
            "value": 1
        }, {"key": "大饼", "value": 1}, {"key": "有理", "value": 1}, {"key": "之后", "value": 1}, {
            "key": "相反地",
            "value": 1
        }, {"key": "焦躁", "value": 1}, {"key": "相反", "value": 1}, {"key": "叛逆", "value": 1}, {
            "key": "讽刺",
            "value": 1
        }, {"key": "甚至在", "value": 1}, {"key": "一定程度", "value": 1}, {"key": "上变", "value": 1}, {
            "key": "咄咄逼人",
            "value": 1
        }, {"key": "一定", "value": 1}, {"key": "程度", "value": 1}, {"key": "咄咄", "value": 1}, {
            "key": "逼人",
            "value": 1
        }, {"key": "尽管", "value": 1}, {"key": "这可", "value": 1}, {"key": "暂时的", "value": 1}, {
            "key": "按部",
            "value": 1
        }, {"key": "就班", "value": 1}, {"key": "规则", "value": 1}, {"key": "系统性", "value": 1}, {
            "key": "不相",
            "value": 1
        }, {"key": "职责", "value": 1}, {"key": "重要方面", "value": 1}, {"key": "系统", "value": 1}, {
            "key": "我们",
            "value": 1
        }, {"key": "建议", "value": 1}, {"key": "有的", "value": 1}, {"key": "迹象", "value": 1}, {
            "key": "表明",
            "value": 1
        }, {"key": "出现", "value": 1}, {"key": "相当大", "value": 1}, {"key": "不厌", "value": 1}, {
            "key": "最初",
            "value": 1
        }, {"key": "强化", "value": 1}, {"key": "天生", "value": 1}, {"key": "精确的", "value": 1}, {
            "key": "甚至会",
            "value": 1
        }, {"key": "琐碎", "value": 1}, {"key": "小事", "value": 1}, {"key": "担忧", "value": 1}, {
            "key": "然而",
            "value": 1
        }, {"key": "对他", "value": 1}, {"key": "施加", "value": 1}, {"key": "高压", "value": 1}, {
            "key": "质量标准",
            "value": 1
        }, {"key": "独立", "value": 1}, {"key": "绕过", "value": 1}, {"key": "程序", "value": 1}, {
            "key": "几乎不",
            "value": 1
        }, {"key": "几乎", "value": 1}, {"key": "要对", "value": 1}, {"key": "有所", "value": 1}, {
            "key": "惯例",
            "value": 1
        }, {"key": "而且会", "value": 1}, {"key": "显得", "value": 1}, {"key": "更有", "value": 1}, {
            "key": "组织纪律性",
            "value": 1
        }, {"key": "组织纪律", "value": 1}, {"key": "组织", "value": 1}, {"key": "正确性", "value": 1}, {
            "key": "过程",
            "value": 1
        }, {"key": "可能要", "value": 1}, {"key": "更多的", "value": 1}, {"key": "更多", "value": 1}, {
            "key": "为了在当前工作获得成功",
            "value": 1
        }, {"key": "他调整了自己的行为风格", "value": 1}, {
            "key": "在需要做出重要决策时可能变得犹豫不决",
            "value": 1
        }, {"key": "原因可能是由于他在目前的角色中受到了压制或者有责无权", "value": 1}, {
            "key": "因此他可能采取一种谨慎的方式而不是直接开展行动",
            "value": 1
        }, {"key": "如果以上任何情况适用", "value": 1}, {"key": "都需要对职位要求进行重新评估", "value": 1}, {
            "key": "因为这种情况延续下去可能会影响他的长期工作表现",
            "value": 1
        }, {"key": "有一些人可能是因为不喜欢做决策和需要快速行动之间的矛盾而感到", "value": 1}, {"key": "在工作的情境下", "value": 1}, {
            "key": "他为了获得成功",
            "value": 1
        }, {"key": "哪怕", "value": 1}, {"key": "而且有时候非常固执", "value": 1}, {
            "key": "非常坚持自己的看法",
            "value": 1
        }, {"key": "难以改变想法", "value": 1}, {"key": "当他心里没有认同感时", "value": 1}, {
            "key": "会进行被动抵抗",
            "value": 1
        }, {"key": "如果存在以上情形中的一种", "value": 1}, {"key": "通常预示着他的固执", "value": 1}, {
            "key": "稳定和耐性",
            "value": 1
        }, {"key": "需要给他多一些时间来接受突然的改变", "value": 1}, {
            "key": "同时在做决定时需要多征求他的想法和意见",
            "value": 1
        }, {"key": "如果他持续地感受到极大的工作压力", "value": 1}, {"key": "他可能会表现出灵活多变的行为风格", "value": 1}, {
            "key": "首先他可能强调灵活机警",
            "value": 1
        }, {"key": "精确挑剔", "value": 1}, {"key": "矜持内敛", "value": 1}, {
            "key": "有条有理的特质",
            "value": 1
        }, {"key": "之后可能会相反地焦躁武断", "value": 1}, {"key": "叛逆讽刺", "value": 1}, {
            "key": "固执坚定甚至在一定程度上变得咄咄逼人",
            "value": 1
        }, {"key": "尽管这可能只是暂时的表现", "value": 1}, {"key": "如果精确性", "value": 1}, {
            "key": "细节性",
            "value": 1
        }, {"key": "按部就班", "value": 1}, {"key": "遵守流程规则", "value": 1}, {
            "key": "进行系统性思维是职责的重要方面",
            "value": 1
        }, {"key": "我们建议仔细评估这种情况对工作可能会有的影响", "value": 1}, {"key": "有迹象表明", "value": 1}, {
            "key": "在压力下",
            "value": 1
        }, {"key": "他的行为风格可能会出现相当大的改变", "value": 1}, {
            "key": "最初他可能会强化自己天生逻辑而精确的方式",
            "value": 1
        }, {"key": "甚至会为一些琐碎的小事担忧", "value": 1}, {"key": "然而如果对他持续施加高压", "value": 1}, {
            "key": "他有可能变得独立",
            "value": 1
        }, {"key": "会绕过程序", "value": 1}, {"key": "而且几乎不会关注细节", "value": 1}, {
            "key": "可能只是暂时的",
            "value": 1
        }, {"key": "然而要对此进行仔细评估", "value": 1}, {"key": "他的行为特质有所改变", "value": 1}, {
            "key": "他变得更遵从规章制度和惯例",
            "value": 1
        }, {"key": "而且会显得更有组织纪律性", "value": 1}, {"key": "同时由于他对正确性的要求", "value": 1}, {
            "key": "决策过程可能要花更多的时间",
            "value": 1
        }, {"key": "自备", "value": 1}, {"key": "外加", "value": 1}, {"key": "吃苦", "value": 1}, {
            "key": "不愿意",
            "value": 1
        }, {"key": "做的", "value": 1}, {"key": "绝壁", "value": 1}, {"key": "是因为", "value": 1}, {
            "key": "没有意义",
            "value": 1
        }, {"key": "不愿", "value": 1}, {"key": "意义", "value": 1}, {"key": "特别", "value": 1}, {
            "key": "诚实信用",
            "value": 1
        }, {"key": "有保证", "value": 1}, {"key": "诚实", "value": 1}, {"key": "信用", "value": 1}, {
            "key": "保证",
            "value": 1
        }, {"key": "不信", "value": 1}, {"key": "拿去", "value": 1}, {"key": "份量", "value": 1}, {
            "key": "真特",
            "value": 1
        }, {"key": "拒绝", "value": 1}, {"key": "一切", "value": 1}, {"key": "不靠", "value": 1}, {
            "key": "三观",
            "value": 1
        }, {"key": "得出", "value": 1}, {"key": "拿回", "value": 1}, {"key": "可以", "value": 1}, {
            "key": "害怕",
            "value": 1
        }, {"key": "没谱儿", "value": 1}, {"key": "声音", "value": 1}, {"key": "一浪", "value": 1}, {
            "key": "高过",
            "value": 1
        }, {"key": "没谱", "value": 1}, {"key": "让人", "value": 1}, {"key": "不知道", "value": 1}, {
            "key": "不知",
            "value": 1
        }, {"key": "凡事", "value": 1}, {"key": "有规律", "value": 1}, {"key": "规律", "value": 1}, {
            "key": "什么时候",
            "value": 1
        }, {"key": "吃饭", "value": 1}, {"key": "什么", "value": 1}, {"key": "完全", "value": 1}, {
            "key": "催逼",
            "value": 1
        }, {"key": "也没有", "value": 1}, {"key": "也没", "value": 1}, {"key": "办事", "value": 1}, {
            "key": "十分",
            "value": 1
        }, {"key": "靠谱", "value": 1}, {"key": "条理", "value": 1}, {"key": "清楚", "value": 1}, {
            "key": "是帮傻逼",
            "value": 1
        }, {"key": "善后", "value": 1}, {"key": "擦屁股", "value": 1}, {"key": "屁股", "value": 1}, {
            "key": "从来不",
            "value": 1
        }, {"key": "发脾气", "value": 1}, {"key": "从来", "value": 1}, {"key": "看见", "value": 1}, {
            "key": "撕逼",
            "value": 1
        }, {"key": "赶紧", "value": 1}, {"key": "避一避", "value": 1}, {"key": "好不好", "value": 1}, {
            "key": "永远",
            "value": 1
        }, {"key": "尝鲜", "value": 1}, {"key": "好不", "value": 1}, {"key": "想起", "value": 1}, {
            "key": "一出",
            "value": 1
        }, {"key": "就是", "value": 1}, {"key": "所谓", "value": 1}, {"key": "马大哈", "value": 1}, {
            "key": "马大",
            "value": 1
        }, {"key": "怕怕", "value": 1}, {"key": "想不", "value": 1}, {"key": "傻瓜", "value": 1}, {
            "key": "专心致志",
            "value": 1
        }, {"key": "做个", "value": 1}, {"key": "停留在", "value": 1}, {"key": "别老黑", "value": 1}, {
            "key": "我是",
            "value": 1
        }, {"key": "处女座", "value": 1}, {"key": "处女", "value": 1}, {"key": "我这", "value": 1}, {
            "key": "懂不懂",
            "value": 1
        }, {"key": "不懂", "value": 1}, {"key": "智商", "value": 1}, {"key": "不乱", "value": 1}, {
            "key": "每天",
            "value": 1
        }, {"key": "满地", "value": 1}, {"key": "自备强大逻辑", "value": 1}, {
            "key": "外加吃苦努力",
            "value": 1
        }, {"key": "不愿意做的事情绝壁是因为它没有意义", "value": 1}, {"key": "对人特别真", "value": 1}, {
            "key": "诚实信用有保证",
            "value": 1
        }, {"key": "不信拿去称一称", "value": 1}, {"key": "份量真特么沉", "value": 1}, {"key": "守规章", "value": 1}, {
            "key": "讲制度",
            "value": 1
        }, {"key": "拒绝一切不靠谱", "value": 1}, {"key": "三观正", "value": 1}, {"key": "rp", "value": 1}, {
            "key": "人品",
            "value": 1
        }, {"key": "好", "value": 1}, {"key": "带得出去", "value": 1}, {
            "key": "拿回家可以当宝",
            "value": 1
        }, {"key": "害怕没谱儿的声音一浪高过一浪", "value": 1}, {"key": "让人不知道肿么办", "value": 1}, {
            "key": "凡事有规律",
            "value": 1
        }, {"key": "什么时候吃饭", "value": 1}, {"key": "什么时候该玩", "value": 1}, {
            "key": "完全看自己",
            "value": 1
        }, {"key": "别人再催逼也没有意义", "value": 1}, {"key": "办事十分靠谱", "value": 1}, {
            "key": "条理十分清楚",
            "value": 1
        }, {"key": "最讨厌是帮傻逼善后擦屁股", "value": 1}, {"key": "从来不爱发脾气", "value": 1}, {
            "key": "看见撕逼赶紧避一避",
            "value": 1
        }, {"key": "好不好吃先尝尝鲜", "value": 1}, {"key": "不要突然做改变", "value": 1}, {
            "key": "想起一出就是一出",
            "value": 1
        }, {"key": "的所谓意见", "value": 1}, {"key": "不做马大哈", "value": 1}, {
            "key": "心里都怕怕",
            "value": 1
        }, {"key": "想不清楚绝对不会冲出去当傻瓜", "value": 1}, {"key": "专心致志做个细节控", "value": 1}, {
            "key": "别老黑我是处女座",
            "value": 1
        }, {"key": "我这是专业你懂不懂", "value": 1}, {"key": "逻辑清晰智商高", "value": 1}, {
            "key": "做事努力不乱搞",
            "value": 1
        }, {"key": "完美方案满地找", "value": 1}, {"key": "待人", "value": 1}, {"key": "公平", "value": 1}, {
            "key": "工作范围",
            "value": 1
        }, {"key": "得到", "value": 1}, {"key": "界定", "value": 1}, {"key": "范围", "value": 1}, {
            "key": "按照",
            "value": 1
        }, {"key": "停留", "value": 1}, {"key": "做到", "value": 1}, {"key": "有条不紊", "value": 1}, {
            "key": "善始",
            "value": 1
        }, {"key": "善终", "value": 1}, {"key": "试和", "value": 1}, {"key": "测试", "value": 1}, {
            "key": "质疑",
            "value": 1
        }, {"key": "有耐心", "value": 1}, {"key": "耐心", "value": 1}, {"key": "待人公平", "value": 1}, {
            "key": "希望确保质量和标准",
            "value": 1
        }, {"key": "希望工作范围得到清晰界定", "value": 1}, {"key": "希望按照自己节奏工作", "value": 1}, {
            "key": "善于跟进",
            "value": 1
        }, {"key": "能够做到有条不紊", "value": 1}, {"key": "善始善终", "value": 1}, {
            "key": "希望避免冲突和麻烦",
            "value": 1
        }, {"key": "喜欢先尝试和测试", "value": 1}, {"key": "质疑突然的改变", "value": 1}, {
            "key": "在决策和行动之前仔细评估可能的后果",
            "value": 1
        }, {"key": "有耐心能够专心处理细节工作", "value": 1}, {"key": "逻辑清晰严谨", "value": 1}, {
            "key": "希望能找出完美的方案",
            "value": 1
        }, {"key": "这是", "value": 1}, {"key": "友善", "value": 1}, {"key": "包容", "value": 1}, {
            "key": "谦恭",
            "value": 1
        }, {"key": "亲切的", "value": 1}, {"key": "个体", "value": 1}, {"key": "亲切", "value": 1}, {
            "key": "努力工作",
            "value": 1
        }, {"key": "以做", "value": 1}, {"key": "事有", "value": 1}, {"key": "次序", "value": 1}, {
            "key": "有条理",
            "value": 1
        }, {"key": "为乐", "value": 1}, {"key": "贯彻始终", "value": 1}, {"key": "贯彻", "value": 1}, {
            "key": "始终",
            "value": 1
        }, {"key": "手中", "value": 1}, {"key": "应该", "value": 1}, {"key": "注意", "value": 1}, {
            "key": "的是",
            "value": 1
        }, {"key": "他想", "value": 1}, {"key": "要按", "value": 1}, {"key": "既定", "value": 1}, {
            "key": "施压",
            "value": 1
        }, {"key": "让他", "value": 1}, {"key": "更快的", "value": 1}, {"key": "步调", "value": 1}, {
            "key": "更快",
            "value": 1
        }, {"key": "紧张", "value": 1}, {"key": "产生", "value": 1}, {"key": "挫折感", "value": 1}, {
            "key": "挫折",
            "value": 1
        }, {"key": "他被", "value": 1}, {"key": "大家", "value": 1}, {"key": "团队", "value": 1}, {
            "key": "和合",
            "value": 1
        }, {"key": "精神", "value": 1}, {"key": "负责", "value": 1}, {"key": "高度", "value": 1}, {
            "key": "责任心",
            "value": 1
        }, {"key": "忠诚度", "value": 1}, {"key": "责任", "value": 1}, {"key": "忠诚", "value": 1}, {
            "key": "他以",
            "value": 1
        }, {"key": "优秀", "value": 1}, {"key": "成员", "value": 1}, {"key": "自然地", "value": 1}, {
            "key": "自然",
            "value": 1
        }, {"key": "倾听", "value": 1}, {"key": "但不", "value": 1}, {"key": "太会", "value": 1}, {
            "key": "淡漠",
            "value": 1
        }, {"key": "试探性", "value": 1}, {"key": "地问", "value": 1}, {"key": "实施细则", "value": 1}, {
            "key": "现实问题",
            "value": 1
        }, {"key": "而显", "value": 1}, {"key": "得不", "value": 1}, {"key": "具有", "value": 1}, {
            "key": "创造性思维",
            "value": 1
        }, {"key": "想象", "value": 1}, {"key": "试探", "value": 1}, {"key": "实施", "value": 1}, {
            "key": "细则",
            "value": 1
        }, {"key": "现实", "value": 1}, {"key": "问题", "value": 1}, {"key": "创造性", "value": 1}, {
            "key": "创造",
            "value": 1
        }, {"key": "尽责", "value": 1}, {"key": "忠心", "value": 1}, {"key": "不懈", "value": 1}, {
            "key": "外生",
            "value": 1
        }, {"key": "这是一个友善包容", "value": 1}, {"key": "谦恭谨慎", "value": 1}, {
            "key": "温和亲切的个体",
            "value": 1
        }, {"key": "他喜欢努力工作", "value": 1}, {"key": "以做事有次序", "value": 1}, {
            "key": "有条理为乐",
            "value": 1
        }, {"key": "他做事贯彻始终", "value": 1}, {"key": "会坚持完成手中的任务", "value": 1}, {
            "key": "应该注意的是",
            "value": 1
        }, {"key": "他想要按照既定的流程和自己的节奏工作", "value": 1}, {"key": "如果给他施压", "value": 1}, {
            "key": "让他采取更快的工作步调",
            "value": 1
        }, {"key": "那么他会变得紧张", "value": 1}, {"key": "并且产生挫折感", "value": 1}, {
            "key": "他被大家认为有团队和合作精神",
            "value": 1
        }, {"key": "他对所负责的工作表现出高度的责任心和忠诚度", "value": 1}, {"key": "他以团队论成功", "value": 1}, {
            "key": "是优秀的团队成员",
            "value": 1
        }, {"key": "因此别人可能会很自然地信赖他", "value": 1}, {"key": "他善于倾听", "value": 1}, {
            "key": "但不太会表露自己",
            "value": 1
        }, {"key": "因此可能会被同事认为相当冷静淡漠", "value": 1}, {
            "key": "他有可能由于试探性地问一些实施细则的现实问题而显得不那么具有",
            "value": 1
        }, {"key": "一旦开始了任务", "value": 1}, {"key": "他尽责且忠心", "value": 1}, {
            "key": "会坚持不懈地完成任务",
            "value": 1
        }, {"key": "他不喜欢节外生枝", "value": 1}
    ];
    generate()
}
function generate() {
    layout.spiral("rectangular");
    fontSize = d3.scale.log().range([10, 100]);
    complete = 0;
    words = [];
    layout.stop().words(tags.sort(function () {
        Math.random() - 0.8;
    }).slice(0,500)).start();
}
function progress(t) {
}
function draw(t, e) {
    scale = e ? Math.min(w / Math.abs(e[1].x - w / 2), w / Math.abs(e[0].x - w / 2), h / Math.abs(e[1].y - h / 2), h / Math.abs(e[0].y - h / 2)) / 2 : 1, words = t;
    var n = vis.selectAll("text").data(words, function (t) {
        return t.text.toLowerCase()
    });
    n.transition().duration(1e3).attr("transform", function (t) {
        return "translate(" + [t.x, t.y] + ")rotate(" + t.rotate + ")"
    }).style("font-size", function (t) {
        return t.size + "px"
    }), n.enter().append("text").attr("text-anchor", "middle").attr("transform", function (t) {
        return "translate(" + [t.x, t.y] + ")rotate(" + t.rotate + ")"
    }).style("font-size", "1px").transition().duration(1e3).style("font-size", function (t) {
        return t.size + "px"
    }), n.style("font-family", function (t) {
        return t.font
    }).style("fill", function (t) {
        return fill(t.text.toLowerCase())
    }).text(function (t) {
        return t.text
    });
    var a = background.append("g").attr("transform", vis.attr("transform")), r = a.node();
    n.exit().each(function () {
        r.appendChild(this)
    }), a.transition().duration(1e3).style("opacity", 1e-6).remove(), vis.transition().delay(1e3).duration(750).attr("transform", "translate(" + [w / 2, h / 2] + ")scale(" + scale + ")");
    setTimeout(generate,5e3);
}
function downloadPNG() {
    d3.event.preventDefault();
    var t = document.createElement("canvas"), e = t.getContext("2d");
    t.width = w, t.height = h, e.translate(w / 2, h / 2), e.scale(scale, scale), words.forEach(function (t, n) {
        e.save(), e.translate(t.x, t.y), e.rotate(t.rotate * Math.PI / 180), e.textAlign = "center", e.fillStyle = fill(t.text.toLowerCase()), e.font = t.size + "px " + t.font, e.fillText(t.text, 0, 0), e.restore()
    }), echoContentType.attr("value", "image/png"), echoInput.attr("value", t.toDataURL("image/png")), echoForm.node().submit()
}
function downloadSVG() {
    d3.event.preventDefault(), echoContentType.attr("value", "image/svg+xml;charset=utf-8"), echoInput.attr("value", svg.attr("version", "1.1").attr("xmlns", "http://www.w3.org/2000/svg").node().parentNode.innerHTML), echoForm.node().submit()
}
!function (t) {
    function e() {
        function t(t, n, a) {
            for (var r, o, s, l = ([{x: 0, y: 0}, {
                x: e[0],
                y: e[1]
            }], n.x), i = n.y, d = Math.sqrt(e[0] * e[0] + e[1] * e[1]), h = m(e), f = Math.random() < .5 ? 1 : -1, p = -f; (r = h(p += f)) && (o = ~~r[0], s = ~~r[1], !(Math.min(o, s) > d));)if (n.x = l + o, n.y = i + s, !(n.x + n.x0 < 0 || n.y + n.y0 < 0 || n.x + n.x1 > e[0] || n.y + n.y1 > e[1]) && (!a || !u(n, t, e[0])) && (!a || c(n, a))) {
                for (var y, g = n.sprite, v = n.width >> 5, x = e[0] >> 5, w = n.x - (v << 4), M = 127 & w, b = 32 - M, z = n.y1 - n.y0, k = (n.y + n.y0) * x + (w >> 5), T = 0; z > T; T++) {
                    y = 0;
                    for (var A = 0; v >= A; A++)t[k + A] |= y << b | (v > A ? (y = g[T * v + A]) >>> M : 0);
                    k += x
                }
                return delete n.sprite, !0
            }
            return !1
        }

        var e = [256, 256], h = n, p = a, y = r, g = o, v = s, m = d, x = [], w = 1 / 0, b = d3.dispatch("word", "end"),
            z = null, k = {};
        return k.start = function () {
            function n() {
                for (var n, s = +new Date; +new Date - s < w && ++u < o && z;)n = d[u], n.x = e[0] * (Math.random() + .5) >> 1, n.y = e[1] * (Math.random() + .5) >> 1, l(n, d, u), t(a, n, r) && (c.push(n), b.word(n), r ? i(r, n) : r = [{
                    x: n.x + n.x0,
                    y: n.y + n.y0
                }, {x: n.x + n.x1, y: n.y + n.y1}], n.x -= e[0] >> 1, n.y -= e[1] >> 1);
                u >= o && (k.stop(), b.end(c, r))
            }

            var a = f((e[0] >> 5) * e[1]), r = null, o = x.length, u = -1, c = [], d = x.map(function (t, e) {
                return {
                    text: h.call(this, t, e),
                    font: p.call(this, t, e),
                    rotate: g.call(this, t, e),
                    size: ~~y.call(this, t, e),
                    padding: s.call(this, t, e)
                }
            }).sort(function (t, e) {
                return e.size - t.size
            });
            return z && clearInterval(z), z = setInterval(n, 0), n(), k
        }, k.stop = function () {
            return z && (clearInterval(z), z = null), k
        }, k.timeInterval = function (t) {
            return arguments.length ? (w = null == t ? 1 / 0 : t, k) : w
        }, k.words = function (t) {
            return arguments.length ? (x = t, k) : x
        }, k.size = function (t) {
            return arguments.length ? (e = [+t[0], +t[1]], k) : e
        }, k.font = function (t) {
            return arguments.length ? (p = d3.functor(t), k) : p
        }, k.rotate = function (t) {
            return arguments.length ? (g = d3.functor(t), k) : g
        }, k.text = function (t) {
            return arguments.length ? (h = d3.functor(t), k) : h
        }, k.spiral = function (t) {
            return arguments.length ? (m = M[t + ""] || t, k) : m
        }, k.fontSize = function (t) {
            return arguments.length ? (y = d3.functor(t), k) : y
        }, k.padding = function (t) {
            return arguments.length ? (v = d3.functor(t), k) : v
        }, d3.rebind(k, b, "on")
    }

    function n(t) {
        return t.text
    }

    function a() {
        return "serif"
    }

    function r(t) {
        return Math.sqrt(t.value)
    }

    function o() {
        return 30 * (~~(6 * Math.random()) - 3)
    }

    function s() {
        return 1
    }

    function l(t, e, n) {
        if (!t.sprite) {
            w.clearRect(0, 0, (g << 5) / m, v / m);
            var a = 0, r = 0, o = 0, s = e.length;
            for (n--; ++n < s;) {
                t = e[n], w.save(), w.font = ~~((t.size + 1) / m) + "px " + t.font;
                var l = w.measureText(t.text + "m").width * m, u = t.size << 1;
                if (t.rotate) {
                    var i = Math.sin(t.rotate * y), c = Math.cos(t.rotate * y), d = l * c, h = l * i, f = u * c,
                        p = u * i;
                    l = Math.max(Math.abs(d + p), Math.abs(d - p)) + 31 >> 5 << 5, u = ~~Math.max(Math.abs(h + f), Math.abs(h - f))
                } else l = l + 31 >> 5 << 5;
                if (u > o && (o = u), a + l >= g << 5 && (a = 0, r += o, o = 0), r + u >= v)break;
                w.translate((a + (l >> 1)) / m, (r + (u >> 1)) / m), t.rotate && w.rotate(t.rotate * y), w.fillText(t.text, 0, 0), w.restore(), t.width = l, t.height = u, t.xoff = a, t.yoff = r, t.x1 = l >> 1, t.y1 = u >> 1, t.x0 = -t.x1, t.y0 = -t.y1, a += l
            }
            for (var x = w.getImageData(0, 0, (g << 5) / m, v / m).data, M = []; --n >= 0;) {
                t = e[n];
                for (var l = t.width, b = l >> 5, u = t.y1 - t.y0, z = t.padding, k = 0; u * b > k; k++)M[k] = 0;
                if (a = t.xoff, null == a)return;
                r = t.yoff;
                for (var T = 0, A = -1, C = 0; u > C; C++) {
                    for (var k = 0; l > k; k++) {
                        var S = b * C + (k >> 5), I = x[(r + C) * (g << 5) + (a + k) << 2] ? 1 << 31 - k % 32 : 0;
                        z && (C && (M[S - b] |= I), l - 1 > C && (M[S + b] |= I), I |= I << 1 | I >> 1), M[S] |= I, T |= I
                    }
                    T ? A = C : (t.y0++, u--, C--, r++)
                }
                t.y1 = t.y0 + A, t.sprite = M.slice(0, (t.y1 - t.y0) * b)
            }
        }
    }

    function u(t, e, n) {
        n >>= 5;
        for (var a, r = t.sprite, o = t.width >> 5, s = t.x - (o << 4), l = 127 & s, u = 32 - l, i = t.y1 - t.y0, c = (t.y + t.y0) * n + (s >> 5), d = 0; i > d; d++) {
            a = 0;
            for (var h = 0; o >= h; h++)if ((a << u | (o > h ? (a = r[d * o + h]) >>> l : 0)) & e[c + h])return !0;
            c += n
        }
        return !1
    }

    function i(t, e) {
        var n = t[0], a = t[1];
        e.x + e.x0 < n.x && (n.x = e.x + e.x0), e.y + e.y0 < n.y && (n.y = e.y + e.y0), e.x + e.x1 > a.x && (a.x = e.x + e.x1), e.y + e.y1 > a.y && (a.y = e.y + e.y1)
    }

    function c(t, e) {
        return t.x + t.x1 > e[0].x && t.x + t.x0 < e[1].x && t.y + t.y1 > e[0].y && t.y + t.y0 < e[1].y
    }

    function d(t) {
        var e = t[0] / t[1];
        return function (t) {
            return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)]
        }
    }

    function h(t) {
        var e = 4, n = e * t[0] / t[1], a = 0, r = 0;
        return function (t) {
            var o = 0 > t ? -1 : 1;
            switch (Math.sqrt(1 + 4 * o * t) - o & 3) {
                case 0:
                    a += n;
                    break;
                case 1:
                    r += e;
                    break;
                case 2:
                    a -= n;
                    break;
                default:
                    r -= e
            }
            return [a, r]
        }
    }

    function f(t) {
        for (var e = [], n = -1; ++n < t;)e[n] = 0;
        return e
    }

    var p, y = Math.PI / 180, g = 64, v = 2048, m = 1;
    if ("undefined" != typeof document) p = document.createElement("canvas"), p.width = 1, p.height = 1, m = Math.sqrt(p.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2), p.width = (g << 5) / m, p.height = v / m; else {
        var x = require("canvas");
        p = new x(g << 5, v)
    }
    var w = p.getContext("2d"), M = {archimedean: d, rectangular: h};
    w.fillStyle = "red", w.textAlign = "center", t.cloud = e
}("undefined" == typeof exports ? d3.layout || (d3.layout = {}) : exports);
var fill = d3.scale.category20b(), svgw = window.outerWidth, svgh = window.outerHeight, words = [], max, scale = 1,
    complete = 0, keyword = "", tags,
    fontSize, maxLength = 30, fetcher;
var rot = "";
if (svgw>svgh) {w=736*3/5;h=414;viewbox="0 0 736 414";svgh=svgw*414/738,rot="scale("+svgw/738+")"}
else {w=736*3/5;h=414;viewbox="0 0 414 738";svgw=svgh*414/738;rot="scale("+svgh/738+") translate(414) rotate(90)"}
layout = d3.layout.cloud().timeInterval(10).size([w, h]).fontSize(function (t) {
    return fontSize(+t.value)
}).text(function (t) {
    return t.key
}).on("end", draw),
    svg = d3.select("#svg").attr("width", svgw).attr("height",svgh).attr("viewbox", viewbox), background = svg.append("g"),
    vis = svg.select("#mask").attr("transform",rot).append("g").attr("transform", "translate(" + [w / 2, h / 2]+ ")");
var form = d3.select("#form").on("submit", function () {
    parseText();
    d3.event.preventDefault()
});
form.selectAll("input[type=number]").on("click.refresh", function () {
    this.value !== this.defaultValue && (generate(), this.defaultValue = this.value)
}), form.selectAll("input[type=radio], #font").on("change", generate);
d3.select("#random-palette").on("click", function () {
    paletteJSON("http://www.colourlovers.com/api/palettes/random", {}, function (t) {
        fill.range(t[0].colors), vis.selectAll("text").style("fill", function (t) {
            return fill(t.text.toLowerCase())
        })
    }), d3.event.preventDefault()
}), function () {
    function t() {
        c = +config.anglecount, u = Math.max(-90, Math.min(90, +config.anglefrom)), i = Math.max(-90, Math.min(90, +config.angleto)), e()
    }

    function e() {
        h.domain([0, c - 1]).range([u, i]);
        var t = l.selectAll("path.angle").data([{startAngle: u * d, endAngle: i * d}]);
        t.enter().insert("path", "circle").attr("class", "angle").style("fill", "#fc0"), t.attr("d", f);
        var o = l.selectAll("line.angle").data(d3.range(c).map(h));
        o.enter().append("line").attr("class", "angle"), o.exit().remove(), o.attr("transform", function (t) {
            return "rotate(" + (90 + t) + ")"
        }).attr("x2", function (t, e) {
            return e && e !== c - 1 ? -r : -r - 5
        });
        var s = l.selectAll("path.drag").data([u, i]);
        s.enter().append("path").attr("class", "drag").attr("d", "M-9.5,0L-3,3.5L-3,-3.5Z").call(d3.behavior.drag().on("drag", function (t, o) {
            t = (o ? i : u) + 90;
            var s = [-r * Math.cos(t * d), -r * Math.sin(t * d)], l = [d3.event.x, d3.event.y],
                c = ~~(Math.atan2(n(s, l), a(s, l)) / d);
            t = Math.max(-90, Math.min(90, t + c - 90)), c = i - u, o ? (i = t, c > 360 ? u += c - 360 : 0 > c && (u = i)) : (u = t, c > 360 ? i += 360 - c : 0 > c && (i = u)), e()
        }).on("dragend", generate)), s.attr("transform", function (t) {
            return "rotate(" + (t + 90) + ")translate(-" + r + ")"
        }), layout.rotate(function () {
            return h(~~(Math.random() * c))
        }), d3.select("#angle-count").property("value", c), d3.select("#angle-from").property("value", u), d3.select("#angle-to").property("value", i)
    }

    function n(t, e) {
        return t[0] * e[1] - t[1] * e[0]
    }

    function a(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    var r = 40.5, o = 35, s = 20,
        l = d3.select("#angles").append("svg").attr("width", 2 * (r + o)).attr("height", r + 1.5 * s).append("g").attr("transform", "translate(" + [r + o, r + s] + ")");
    l.append("path").style("fill", "none").attr("d", ["M", -r, 0, "A", r, r, 0, 0, 1, r, 0].join(" ")), l.append("line").attr("x1", -r - 7).attr("x2", r + 7), l.append("line").attr("y2", -r - 7), l.selectAll("text").data([-90, 0, 90]).enter().append("text").attr("dy", function (t, e) {
        return 1 === e ? null : ".3em"
    }).attr("text-anchor", function (t, e) {
        return ["end", "middle", "start"][e]
    }).attr("transform", function (t) {
        return t += 90, "rotate(" + t + ")translate(" + -(r + 10) + ")rotate(" + -t + ")translate(2)"
    }).text(function (t) {
        return t + "\xb0"
    });
    var u, i, c, d = Math.PI / 180, h = d3.scale.linear(), f = d3.svg.arc().innerRadius(0).outerRadius(r);
    d3.selectAll("#angle-count, #angle-from, #angle-to").on("change", t).on("mouseup", t), t();
    parseText()
}();
