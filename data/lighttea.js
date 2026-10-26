/* 轻乳茶 16 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'boya', name:'伯牙绝弦', category:'轻乳茶', brands:['霸王茶姬'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#5EEAD4',
  layers:[
    {name:'茉莉绿茶', pct:55, color:'#E3D3AE'},
    {name:'鲜奶', pct:35, color:'#FAF4E9'},
    {name:'奶泡', pct:10, color:'#FFFFFF'}
  ],
  intro:'原叶茶加鲜奶，不加奶精。难点只有一个：茶汤必须降温再加奶。',
  ingredients:[
    {name:'茉莉绿茶', amount:'5g', note:'或茉莉龙珠，香气更足'},
    {name:'热水', amount:'200ml', note:'85℃，不要沸水'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'15ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '热茶汤直接加奶会腥，必须降到 40℃ 以下。',
    '茶泡超 4 分钟会涩，苦味压过花香。'
  ],
  fidelity:'霸王茶姬用现萃茶汤，家用泡茶浓度会淡一点，可以把茶叶加到 6g。',
  steps:[
    {title:'泡茶', desc:'85℃ 热水 200ml 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:62, color:'#D9C49A'}]},
    {title:'加冰降温', desc:'茶汤里放 5-6 块冰，搅到冰化，温度降到不烫手。', act:'降温',
     add:[{name:'冰块', pct:14, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'沿杯壁倒鲜奶 150ml，让它和茶汤自然分层。', act:'倒入',
     add:[{name:'鲜奶', pct:32, color:'#FAF4E9'}]},
    {title:'调甜', desc:'加糖浆 15ml，喝前轻轻搅两下。', act:'搅拌',
     add:[{name:'糖浆', pct:4, color:'#F3E3B8'}]}
  ]
},

{
  id:'youlan', name:'幽兰拿铁', category:'轻乳茶', brands:['茶颜悦色'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#99F6E4',
  layers:[
    {name:'兰花乌龙', pct:52, color:'#D4C088'},
    {name:'鲜奶', pct:28, color:'#FAF4E9'},
    {name:'奶油雪顶', pct:15, color:'#FFFFFF'},
    {name:'碧根果碎', pct:5, color:'#B08850'}
  ],
  intro:'茶颜悦色的招牌，雪顶加碧根果。奶油必须打到能立住，塌了整杯就废了。',
  ingredients:[
    {name:'兰花乌龙', amount:'6g', note:'或凤凰单丛'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'鲜奶', amount:'120ml'},
    {name:'淡奶油', amount:'60ml'},
    {name:'糖', amount:'10g'},
    {name:'碧根果', amount:'15g', note:'压碎'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '奶油打到八分发才立得住，太稀会塌进茶里。',
    '碧根果最后撒，早了会受潮变软。'
  ],
  fidelity:'门店用专业奶油枪，家用打泡器打出来稍软，冷藏 10 分钟后再挤会好很多。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 200ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'兰花乌龙', pct:54, color:'#D4C088'}]},
    {title:'降温加奶', desc:'加冰降温，倒鲜奶 120ml。', act:'倒入',
     add:[{name:'鲜奶', pct:26, color:'#FAF4E9'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶油雪顶', desc:'淡奶油 60ml + 糖 10g，打到八分发能立尖。', timer:60, act:'搅拌',
     add:[{name:'奶油雪顶', pct:16, color:'#FFFFFF'}]},
    {title:'挤雪顶撒坚果', desc:'奶油挤成螺旋塔，撒压碎的碧根果。', act:'铺面',
     add:[{name:'碧根果碎', pct:5, color:'#B08850'}]}
  ]
},

{
  id:'moli-naibai', name:'茉莉奶白', category:'轻乳茶', brands:['茉莉奶白'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#A7F3D0',
  layers:[
    {name:'茉莉绿茶', pct:60, color:'#E8DCBE'},
    {name:'鲜奶', pct:40, color:'#FDFBF6'}
  ],
  intro:'店名就是产品名，可见这杯有多核心。不加糖也好喝，靠的是茉莉花香够足。',
  ingredients:[
    {name:'茉莉绿茶', amount:'6g', note:'茉莉龙珠香气更好'},
    {name:'热水', amount:'220ml', note:'85℃'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'8ml', optional:true, note:'不加也很顺'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '水太烫会把茉莉花香烫跑，85℃ 就够。',
    '奶温不能太低，冰奶会让茶香闭住。'
  ],
  fidelity:'茉莉奶白用高窨次茉莉茶，家庭版窨制次数少，香会淡，茶叶可以加到 7g。',
  steps:[
    {title:'泡茉莉', desc:'85℃ 水 220ml 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:58, color:'#E8DCBE'}]},
    {title:'降温', desc:'加冰块，搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 150ml，轻搅两下让奶和茶融一半。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'}]}
  ]
},

{
  id:'kongshan', name:'空山栀子', category:'轻乳茶', brands:['爷爷不泡茶'],
  method:'直调', difficulty:2, temp:'冰', volume:500, bg:'#6EE7B7',
  layers:[
    {name:'栀子双茶底', pct:58, color:'#E0D5A8'},
    {name:'鲜奶', pct:42, color:'#FDFBF6'}
  ],
  intro:'全行业卷茉莉桂花的时候，它选了栀子花。福鼎大白毫加四川毛峰的雙茶底，栀子香一闻就记住。',
  ingredients:[
    {name:'栀子花茶', amount:'8g', note:'或栀子绿茶，需窨制过的'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '栀子香易挥发，泡的时候盖着盖子。',
    '水温高会出涩味，压掉花香，85℃ 是上限。'
  ],
  fidelity:'爷爷不泡茶用双茶底加窨制工艺，家用单一栀子茶香气层次会薄一层。',
  steps:[
    {title:'泡栀子茶', desc:'85℃ 水 200ml 泡 3 分钟，盖着盖子泡。', timer:180, act:'冲泡',
     add:[{name:'栀子双茶底', pct:56, color:'#E0D5A8'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶调甜', desc:'倒鲜奶 150ml、糖浆 12ml，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:34, color:'#FDFBF6'}]}
  ]
},

{
  id:'yunling', name:'云岭茉莉白', category:'轻乳茶', brands:['古茗'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#A5F3FC',
  layers:[
    {name:'茉莉花茶', pct:56, color:'#E5DCBC'},
    {name:'鲜奶', pct:38, color:'#FDFBF6'},
    {name:'奶泡', pct:6, color:'#FFFFFF'}
  ],
  intro:'古茗的轻乳茶代表。名字听着贵，其实配方就是茉莉茶加奶，关键是茶要够香。',
  ingredients:[
    {name:'茉莉绿茶', amount:'6g'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'淡奶油', amount:'20ml', optional:true},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子','滤网','打泡器'],
  pitfalls:[
    '茶汤必须放凉，热的会让奶发腥。',
    '奶泡打太厚会盖掉花香，薄薄一层就好。'
  ],
  fidelity:'门店用茶奶一体机现制，家庭版泡茶 + 鲜奶能还原九成。',
  steps:[
    {title:'泡茶', desc:'85℃ 水 200ml 泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'茉莉花茶', pct:58, color:'#E5DCBC'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 140ml，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:32, color:'#FDFBF6'}]},
    {title:'打奶泡', desc:'淡奶油 20ml 打出薄泡铺面。', timer:30, act:'铺面',
     add:[{name:'奶泡', pct:6, color:'#FFFFFF'}]}
  ]
},

{
  id:'lanxiang', name:'兰香青柠', category:'轻乳茶', brands:['爷爷不泡茶'],
  method:'直调', difficulty:2, temp:'冰', volume:500, bg:'#67E8F9',
  layers:[
    {name:'白兰玉露', pct:54, color:'#DDE0B0'},
    {name:'青柠奶', pct:46, color:'#F2F7E8'}
  ],
  intro:'最初是夏季限定，因为「求回归」的声音太多转成了常驻。只用柠檬皮不用果肉，是防牛奶起絮。',
  ingredients:[
    {name:'白兰玉露茶叶', amount:'6g', note:'或白毫银针 + 一点兰花茶'},
    {name:'热水', amount:'180ml', note:'85℃'},
    {name:'青柠', amount:'1 个', note:'只取表皮，不要果肉'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'18ml'}
  ],
  tools:['杯子','滤网','捣棒'],
  pitfalls:[
    '绝对不能放柠檬果肉，果酸会让牛奶起絮。',
    '只刮表皮黄色的部分，白瓤会苦。'
  ],
  fidelity:'爷爷不泡茶手锤柠檬皮 30 次激发皮油，家庭压几下也能出香，但量要控制。',
  steps:[
    {title:'泡茶', desc:'85℃ 水 180ml 泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'白兰玉露', pct:56, color:'#DDE0B0'}]},
    {title:'刮柠皮', desc:'青柠削下黄色表皮，切细丝，用捣棒压 5 下出油。', act:'捣碎',
     add:[{name:'柠皮油', pct:6, color:'#C9E09A'}]},
    {title:'降温', desc:'茶汤加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加奶调甜', desc:'倒鲜奶 150ml、糖浆 18ml，放柠皮，轻搅。', act:'倒入',
     add:[{name:'青柠奶', pct:36, color:'#F2F7E8'}]}
  ]
},

{
  id:'guifulan', name:'桂馥兰香', category:'轻乳茶', brands:['霸王茶姬'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#BBF7D0',
  layers:[
    {name:'桂花乌龙', pct:58, color:'#DCC898'},
    {name:'鲜奶', pct:38, color:'#FDFBF6'},
    {name:'桂花', pct:4, color:'#E8B923'}
  ],
  intro:'桂花加兰花香乌龙，香气层次比单一的桂花奶茶复杂。干桂花撒表面是为了开盖那一下。',
  ingredients:[
    {name:'桂花乌龙', amount:'7g', note:'带桂花的窨制乌龙'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'干桂花', amount:'1g', optional:true},
    {name:'糖浆', amount:'14ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '乌龙要用沸水才泡得开，85℃ 出不来焙火香。',
    '干桂花最后撒，早放会沉底看不见。'
  ],
  fidelity:'霸王茶姬用桂花窨制乌龙，家用干桂花 + 乌龙只能补个形，香会淡。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 200ml 泡 4 分钟。', timer:240, act:'冲泡',
     add:[{name:'桂花乌龙', pct:58, color:'#DCC898'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 140ml、糖浆，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'}]},
    {title:'撒桂花', desc:'表面撒干桂花。', act:'铺面',
     add:[{name:'桂花', pct:3, color:'#E8B923'}]}
  ]
},

{
  id:'wanli', name:'万里木兰', category:'轻乳茶', brands:['霸王茶姬'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#86EFAC',
  layers:[
    {name:'木兰花香茶', pct:60, color:'#D8CFA0'},
    {name:'鲜奶', pct:40, color:'#FDFBF6'}
  ],
  intro:'茶感偏重的一款，花香淡雅。适合觉得伯牙绝弦太甜的人。',
  ingredients:[
    {name:'木兰花香茶', amount:'7g', note:'或栀子乌龙'},
    {name:'热水', amount:'220ml', note:'90℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '茶要泡足 4 分钟才有厚度，短了会寡淡。',
    '奶量别超 140ml，会盖掉茶味。'
  ],
  fidelity:'门店用独家拼配茶底，家用单一茶底会单薄，可以两种茶各 3.5g 拼一下。',
  steps:[
    {title:'泡茶', desc:'90℃ 水 220ml 泡 4 分钟。', timer:240, act:'冲泡',
     add:[{name:'木兰花香茶', pct:60, color:'#D8CFA0'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 130ml，轻搅两下。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'}]}
  ]
},

{
  id:'qingmo', name:'青沫观音', category:'轻乳茶', brands:['霸王茶姬'],
  method:'打泡', difficulty:2, temp:'冰', volume:500, bg:'#CCFBF1',
  layers:[
    {name:'铁观音', pct:58, color:'#C9BE8A'},
    {name:'鲜奶', pct:34, color:'#FDFBF6'},
    {name:'青沫', pct:8, color:'#EAF7E8'}
  ],
  intro:'铁观音的兰花香加一点点焙火气，顶上一层青绿色的泡沫是名字的由来。',
  ingredients:[
    {name:'铁观音', amount:'7g', note:'清香型，不要浓香型'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'鲜奶油', amount:'20ml'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '铁观音泡久了会苦得发麻，4 分钟必须滤。',
    '青沫要冷打，热奶打不出细腻泡沫。'
  ],
  fidelity:'门店用专用奶泡机，家用冷打泡器能出八成，只是泡沫消失得快。',
  steps:[
    {title:'泡铁观音', desc:'95℃ 水 200ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'铁观音', pct:58, color:'#C9BE8A'}]},
    {title:'降温加奶', desc:'加冰搅凉，倒鲜奶 130ml。', act:'倒入',
     add:[{name:'鲜奶', pct:32, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打青沫', desc:'冷鲜奶油 20ml 打出细泡，铺在最上面。', timer:40, act:'铺面',
     add:[{name:'青沫', pct:8, color:'#EAF7E8'}]}
  ]
},

{
  id:'chunri', name:'春日桃桃', category:'轻乳茶', brands:['霸王茶姬'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FBCFE8',
  layers:[
    {name:'白桃乌龙', pct:58, color:'#E5C8B8'},
    {name:'鲜奶', pct:32, color:'#FDFBF6'},
    {name:'桃肉', pct:10, color:'#F9A8D4'}
  ],
  intro:'白桃乌龙加鲜桃肉，季节感很强。桃肉要腌过才有味，新鲜桃直接放会淡。',
  ingredients:[
    {name:'白桃乌龙', amount:'6g'},
    {name:'热水', amount:'200ml', note:'90℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'水蜜桃', amount:'半个', note:'或糖水桃罐头'},
    {name:'糖浆', amount:'15ml'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '新鲜桃肉泡在茶里会氧化发黑，用糖水腌 10 分钟。',
    '桃肉要切小粒，太大颗吸不上来。'
  ],
  fidelity:'门店用蜜桃果酱，家庭用鲜桃 + 糖浆更天然但甜度低，糖要多加一点。',
  steps:[
    {title:'泡白桃乌龙', desc:'90℃ 水 200ml 泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'白桃乌龙', pct:58, color:'#E5C8B8'}]},
    {title:'腌桃肉', desc:'桃肉切小粒，拌 10ml 糖浆腌 10 分钟。', timer:600, act:'备料',
     add:[{name:'桃肉', pct:10, color:'#F9A8D4'}]},
    {title:'降温加奶', desc:'茶汤加冰搅凉，倒鲜奶 130ml。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加桃肉', desc:'桃肉连糖浆一起倒进去。', act:'铺面', add:[]}
  ]
},

{
  id:'shengsheng', name:'声声乌龙', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#D1FAE5',
  layers:[
    {name:'蜜桃乌龙', pct:62, color:'#DFC9A0'},
    {name:'鲜奶', pct:38, color:'#FDFBF6'}
  ],
  intro:'蜜桃乌龙配鲜奶，不加糖也甜。茶颜悦色把它做成了「不用排队也能点」的日常款。',
  ingredients:[
    {name:'蜜桃乌龙', amount:'7g'},
    {name:'热水', amount:'220ml', note:'95℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'糖浆', amount:'8ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '乌龙必须沸水泡，温度不够香气出不来。',
    '奶别倒太多，会盖掉蜜桃味。'
  ],
  fidelity:'门店用预调蜜桃乌龙液，家用茶叶窨制次数不同，香会淡一些。',
  steps:[
    {title:'泡蜜桃乌龙', desc:'95℃ 水 220ml 泡 4 分钟。', timer:240, act:'冲泡',
     add:[{name:'蜜桃乌龙', pct:62, color:'#DFC9A0'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 140ml，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'}]}
  ]
},

{
  id:'zhixiao', name:'栀晓', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#E0F2FE',
  layers:[
    {name:'栀子绿茶', pct:60, color:'#DDE3B8'},
    {name:'鲜奶', pct:40, color:'#FDFBF6'}
  ],
  intro:'茶颜悦色的栀子系列，比幽兰拿铁清淡，没有奶油雪顶，适合不想吃甜品的时候。',
  ingredients:[
    {name:'栀子绿茶', amount:'6g'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '栀子香怕高温，85℃ 泡且盖盖。',
    '绿茶底容易涩，泡 3 分钟就滤。'
  ],
  fidelity:'茶颜悦色用自窨栀子茶，家用买现成栀子绿茶，香会弱但结构一致。',
  steps:[
    {title:'泡栀子茶', desc:'85℃ 水 200ml 盖盖泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'栀子绿茶', pct:60, color:'#DDE3B8'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 140ml、糖浆，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'}]}
  ]
},

{
  id:'zhizi-shengye', name:'栀子生椰', category:'轻乳茶', brands:['茶颜悦色'],
  method:'分层', difficulty:1, temp:'冰', volume:500, bg:'#FEF3C7',
  layers:[
    {name:'栀子茶', pct:50, color:'#E5DCB0'},
    {name:'厚椰乳', pct:42, color:'#F0DFC8'},
    {name:'奶泡', pct:8, color:'#FFFFFF'}
  ],
  intro:'栀子花配椰乳，花香和椰香居然不打架。椰乳要冷藏，温的会浮油。',
  ingredients:[
    {name:'栀子绿茶', amount:'6g'},
    {name:'热水', amount:'180ml', note:'85℃'},
    {name:'厚椰乳', amount:'150ml', note:'冷藏'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['杯子','滤网','勺子'],
  pitfalls:[
    '椰乳不冷藏会浮一层油，整杯就废了。',
    '栀子茶汤要凉了再加椰乳，不然会有腥气。'
  ],
  fidelity:'门店用厚椰乳，家用同款能还原九成，关键在冷藏这一步。',
  steps:[
    {title:'泡栀子茶', desc:'85℃ 水 180ml 盖盖泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'栀子茶', pct:52, color:'#E5DCB0'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒椰乳', desc:'勺背导流倒厚椰乳 150ml，让它浮在茶上。', act:'淋入',
     add:[{name:'厚椰乳', pct:32, color:'#F0DFC8'}]},
    {title:'打奶泡封顶', desc:'表面打一层薄奶泡。', timer:30, act:'铺面',
     add:[{name:'奶泡', pct:6, color:'#FFFFFF'}]}
  ]
},

{
  id:'zhizi-hua', name:'一朵栀子花', category:'轻乳茶', brands:['茉莉奶白'],
  method:'直调', difficulty:1, temp:'冰', volume:450, bg:'#D9F99D',
  layers:[
    {name:'栀子花茶', pct:62, color:'#E2DDBA'},
    {name:'鲜奶', pct:38, color:'#FDFBF6'}
  ],
  intro:'茉莉奶白的招牌款之一。栀子香很直白，入口就是花，不遮不掩。',
  ingredients:[
    {name:'栀子花茶', amount:'6g'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '栀子茶泡超 3 分钟会出涩味，压花香。',
    '奶要凉的，温奶会让花香气闷住。'
  ],
  fidelity:'茉莉奶白用定制栀子茶，家用花香会淡，可以把茶叶加到 7g。',
  steps:[
    {title:'泡茶', desc:'85℃ 水 200ml 盖盖泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'栀子花茶', pct:62, color:'#E2DDBA'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 140ml，轻搅两下。', act:'倒入',
     add:[{name:'鲜奶', pct:28, color:'#FDFBF6'}]}
  ]
},

{
  id:'baitao', name:'白桃茉莉', category:'轻乳茶', brands:['茉莉奶白'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FCE7F3',
  layers:[
    {name:'茉莉绿茶', pct:54, color:'#E5DCBC'},
    {name:'白桃奶', pct:40, color:'#FBEFE4'},
    {name:'桃肉', pct:6, color:'#F9A8D4'}
  ],
  intro:'茉莉打底，白桃提香。桃子味来自糖浆而不是香精，一喝就知道区别。',
  ingredients:[
    {name:'茉莉绿茶', amount:'6g'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'白桃糖浆', amount:'20ml', note:'要真果肉款'},
    {name:'水蜜桃', amount:'1/4 个', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '白桃糖浆含香精的会发腻，选带果肉的。',
    '桃子肉最后放，泡久会软烂。'
  ],
  fidelity:'茉莉奶白用白桃果酱，家庭用糖浆 + 鲜桃，甜度低但更清爽。',
  steps:[
    {title:'泡茉莉', desc:'85℃ 水 200ml 泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:56, color:'#E5DCBC'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'调白桃奶', desc:'鲜奶 130ml + 白桃糖浆 20ml 混匀倒入。', act:'倒入',
     add:[{name:'白桃奶', pct:32, color:'#FBEFE4'}]},
    {title:'加桃肉', desc:'最后放几粒桃肉。', act:'铺面',
     add:[{name:'桃肉', pct:4, color:'#F9A8D4'}]}
  ]
},

{
  id:'qiantao', name:'浅桃未央', category:'轻乳茶', brands:['茉莉奶白'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FDA4AF',
  layers:[
    {name:'乌龙茶', pct:58, color:'#DCC898'},
    {name:'桃奶', pct:36, color:'#FBEFE4'},
    {name:'桃粒', pct:6, color:'#F9A8D4'}
  ],
  intro:'乌龙底比茉莉底更厚，桃子的甜不会被茶香穿过去。适合觉得白桃茉莉太淡的人。',
  ingredients:[
    {name:'乌龙茶', amount:'6g', note:'清香型'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'白桃糖浆', amount:'18ml'},
    {name:'水蜜桃', amount:'1/4 个', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '乌龙耐泡，4 分钟才出味，短了茶感不够。',
    '桃粒切小一点，不然吸管吸不上。'
  ],
  fidelity:'门店用桃乌龙茶底，家用乌龙 + 桃糖浆能还原八成，茶香会更突出。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 200ml 泡 4 分钟。', timer:240, act:'冲泡',
     add:[{name:'乌龙茶', pct:58, color:'#DCC898'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'调桃奶', desc:'鲜奶 130ml + 白桃糖浆 18ml 倒入。', act:'倒入',
     add:[{name:'桃奶', pct:28, color:'#FBEFE4'}]},
    {title:'加桃粒', desc:'表面放桃粒。', act:'铺面',
     add:[{name:'桃粒', pct:4, color:'#F9A8D4'}]}
  ]
}

]);
