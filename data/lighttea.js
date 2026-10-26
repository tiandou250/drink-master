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
},

{
  id:'guihuayin', name:'桂花引', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#F0FDFA',
  layers:[
    {name:'桂花乌龙', pct:60, color:'#DCC898'},
    {name:'鲜奶', pct:38, color:'#FDFBF6'},
    {name:'干桂花', pct:2, color:'#E8B923'}
  ],
  intro:'茶颜悦色里最低调的一款，没有奶油雪顶，就是纯粹的桂花乌龙加奶。秋天喝最应景。',
  ingredients:[
    {name:'桂花乌龙', amount:'8g', note:'窨制过的，带干花'},
    {name:'热水', amount:'220ml', note:'95℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '乌龙要沸水泡，温度低了桂花香出不来。',
    '奶别超过 140ml，多了就成奶茶不是轻乳茶了。'
  ],
  fidelity:'茶颜悦色用自窨桂花乌龙，家用现成的窨制茶香气会薄一层。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 220ml 泡 4 分钟，盖着盖子。', timer:240, act:'冲泡',
     add:[{name:'桂花乌龙', pct:60, color:'#DCC898'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 130ml、糖浆，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:28, color:'#FDFBF6'}]},
    {title:'撒桂花', desc:'表面撒一点干桂花。', act:'铺面',
     add:[{name:'干桂花', pct:2, color:'#E8B923'}]}
  ]
},

{
  id:'lvfeihongshou', name:'绿肥红瘦', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#ECFDF5',
  layers:[
    {name:'红茶底', pct:58, color:'#C08A5A'},
    {name:'鲜奶', pct:42, color:'#FDFBF6'}
  ],
  intro:'红茶底的轻乳茶，比绿茶底更厚、更「暖」。名字取自李清照，茶颜悦色的起名一贯这么文艺。',
  ingredients:[
    {name:'滇红或正山小种', amount:'6g'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '红茶泡 5 分钟才够厚，短了会寡。',
    '茶汤要放凉再加奶，热的会腥。'
  ],
  fidelity:'茶颜悦色用拼配红茶，家用单一滇红能到八五成，正山小种更香但更贵。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 200ml 泡 5 分钟。', timer:300, act:'冲泡',
     add:[{name:'红茶底', pct:58, color:'#C08A5A'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 150ml、糖浆，轻搅两下。', act:'倒入',
     add:[{name:'鲜奶', pct:32, color:'#FDFBF6'}]}
  ]
},

{
  id:'moli-chuxue', name:'茉莉初雪', category:'轻乳茶', brands:['茶话弄'],
  method:'打泡', difficulty:2, temp:'冰', volume:500, bg:'#F0FDF4',
  layers:[
    {name:'茉莉绿茶', pct:56, color:'#E5DCBC'},
    {name:'鲜奶', pct:32, color:'#FDFBF6'},
    {name:'雪顶奶泡', pct:12, color:'#FFFFFF'}
  ],
  intro:'西安茶话弄的招牌，「初雪」说的是顶上那层白得发亮的奶泡。茉莉香气要够足才撑得起这个名字。',
  ingredients:[
    {name:'茉莉绿茶', amount:'7g', note:'窨制次数高的更好'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'淡奶油', amount:'40ml'},
    {name:'糖', amount:'8g'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '奶泡要冷打，热打出来的泡粗且会塌。',
    '茉莉茶泡超 3 分钟会涩，定好时间。'
  ],
  fidelity:'茶话弄用定制茉莉茶底，家用高窨次茉莉绿茶能到八五成。',
  steps:[
    {title:'泡茉莉', desc:'85℃ 水 200ml 泡 3 分钟，盖盖。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:56, color:'#E5DCBC'}]},
    {title:'降温加奶', desc:'加冰搅凉，倒鲜奶 130ml。', act:'倒入',
     add:[{name:'鲜奶', pct:30, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打雪顶', desc:'冷淡奶油 40ml 加糖 8g，打到绵密能立住。', timer:80, act:'搅拌',
     add:[{name:'雪顶奶泡', pct:12, color:'#FFFFFF'}]},
    {title:'铺顶', desc:'用勺子把奶泡堆成雪堆状，表面抹平。', act:'铺面', add:[]}
  ]
},

{
  id:'juancah-guihua', name:'眷茶桂花鲜奶', category:'轻乳茶', brands:['眷茶'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#ECFEFF',
  layers:[
    {name:'桂花乌龙', pct:58, color:'#D8C89A'},
    {name:'鲜奶', pct:42, color:'#FDFBF6'}
  ],
  intro:'河南的品牌，主打「一杯茶配一个烧饼」。茶底偏淡，甜度低，是那种喝起来很舒服、说不出哪里特别的类型。',
  ingredients:[
    {name:'桂花乌龙', amount:'7g'},
    {name:'热水', amount:'210ml', note:'95℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'蜂蜜', amount:'12g', optional:true, note:'替代糖浆，风味更柔和'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '蜂蜜不能用热水冲，会破坏风味，茶汤降到 60℃ 以下再加。',
    '乌龙泡 4 分钟就滤，久了会涩。'
  ],
  fidelity:'眷茶用自家拼配茶底，家用市售桂花乌龙香气会直一些。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 210ml 泡 4 分钟。', timer:240, act:'冲泡',
     add:[{name:'桂花乌龙', pct:58, color:'#D8C89A'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'加奶蜂蜜', desc:'倒鲜奶 140ml，加蜂蜜 12g 轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:32, color:'#FDFBF6'}]}
  ]
},

{
  id:'huatian', name:'花田乌龙', category:'轻乳茶', brands:['霸王茶姬'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FCD34D',
  layers:[
    {name:'白桃乌龙', pct:66, color:'#D8B48C'},
    {name:'鲜奶乳', pct:34, color:'#FDFBF6'}
  ],
  intro:'霸王茶姬的白桃乌龙款，茶底是闽南金观音加真实水蜜桃汁。**泡法有讲究：80℃ 焖盖 12 分钟**，这个参数直接决定成败。',
  ingredients:[
    {name:'白桃乌龙', amount:'8g', note:'要带白桃香气的窨制乌龙'},
    {name:'热水', amount:'250ml', note:'80℃，焖盖泡 12 分钟'},
    {name:'鲜牛乳', amount:'85ml'},
    {name:'淡奶油', amount:'25ml', note:'门店用冰勃朗基底乳，家庭用这个替代'},
    {name:'冰糖糖浆', amount:'30g', note:'或白砂糖 25g 化水'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '泡茶必须焖盖 12 分钟，短了桃香出不来——这是霸王茶姬的标准参数。',
    '淡奶油不能省，它撑起「厚」的那一半，只用牛奶会寡。'
  ],
  fidelity:'门店用冰勃朗基底乳（非氢化），家庭用稀奶油替代能到八五成，奶感稍薄。',
  steps:[
    {title:'泡茶', desc:'80℃ 水 250ml 焖盖泡 12 分钟，滤掉茶叶。', timer:720, act:'冲泡',
     add:[{name:'白桃乌龙', pct:66, color:'#D8B48C'}]},
    {title:'调奶', desc:'鲜牛乳 85ml + 淡奶油 25ml + 糖浆 30g 混匀。', act:'搅拌',
     add:[{name:'鲜奶乳', pct:34, color:'#FDFBF6'}]},
    {title:'混合', desc:'茶汤和奶液倒进雪克杯，加冰块到 500ml 线。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'摇匀', desc:'盖紧摇 6 秒，摇到杯壁起雾。', timer:6, act:'摇匀', add:[]}
  ]
},

{
  id:'qingqing', name:'青青糯山', category:'轻乳茶', brands:['霸王茶姬'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#2DD4BF',
  layers:[
    {name:'糯香绿茶', pct:66, color:'#D9E3A8'},
    {name:'鲜奶乳', pct:34, color:'#FDFBF6'}
  ],
  intro:'茶底是云南绿茶用糯米香叶窨的，闻起来像刚蒸好的糯米饭。这个味道记忆点极强，喝一次就忘不掉。',
  ingredients:[
    {name:'糯香绿茶', amount:'8g', note:'云南糯米香绿茶，或糯米香叶 + 绿茶自窨'},
    {name:'热水', amount:'250ml', note:'95℃，焖盖 10 分钟'},
    {name:'鲜牛乳', amount:'85ml'},
    {name:'淡奶油', amount:'25ml'},
    {name:'冰糖糖浆', amount:'30g'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '95℃ 焖 10 分钟，这是霸王茶姬的官方参数，低了糯香出不来。',
    '糯米香叶味道很霸道，自己窨的时候别放多。'
  ],
  fidelity:'门店用定制糯香绿茶，家用买现成窨制茶最省事，自己窨容易过浓。',
  steps:[
    {title:'泡茶', desc:'95℃ 水 250ml 焖盖泡 10 分钟，滤掉茶叶。', timer:600, act:'冲泡',
     add:[{name:'糯香绿茶', pct:66, color:'#D9E3A8'}]},
    {title:'调奶', desc:'鲜牛乳 85ml + 淡奶油 25ml + 糖浆 30g 混匀。', act:'搅拌',
     add:[{name:'鲜奶乳', pct:34, color:'#FDFBF6'}]},
    {title:'摇匀', desc:'茶汤加奶液，冰块补到 500ml 线，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'yashixiang-baozang', name:'鸭屎香宝藏茶', category:'轻乳茶', brands:['奈雪的茶'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#CFFAFE',
  layers:[
    {name:'鸭屎香枞茶', pct:56, color:'#C9A85C'},
    {name:'鲜奶', pct:28, color:'#FDFBF6'},
    {name:'奶油顶', pct:12, color:'#FFFFFF'},
    {name:'碧根果碎', pct:4, color:'#B08850'}
  ],
  intro:'2021 年奈雪推的这款，直接在全国掀起了「鸭屎香」狂潮。单丛的蜜兰香加奶油顶，茶感比普通奶茶清得多。',
  ingredients:[
    {name:'鸭屎香单丛', amount:'8g'},
    {name:'热水', amount:'250ml', note:'95℃，泡 5 分钟'},
    {name:'鲜奶', amount:'120ml'},
    {name:'淡奶油', amount:'60ml'},
    {name:'糖', amount:'15g'},
    {name:'碧根果', amount:'15g', note:'压碎'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '单丛要沸水泡，85℃ 出不来那份蜜兰香。',
    '奶油打到八分发才立得住，稀了会塌。'
  ],
  fidelity:'奈雪用定制鸭屎香拼配，家用单一凤凰单丛香气更冲，但结构一致。',
  steps:[
    {title:'泡单丛', desc:'95℃ 水 250ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'鸭屎香枞茶', pct:56, color:'#C9A85C'}]},
    {title:'降温加奶', desc:'加冰降温，倒鲜奶 120ml、糖 15g。', act:'倒入',
     add:[{name:'鲜奶', pct:28, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶油', desc:'淡奶油 60ml 打到八分发。', timer:60, act:'搅拌',
     add:[{name:'奶油顶', pct:12, color:'#FFFFFF'}]},
    {title:'挤顶撒坚果', desc:'奶油挤成塔，撒压碎的碧根果。', act:'铺面',
     add:[{name:'碧根果碎', pct:4, color:'#B08850'}]}
  ]
},

{
  id:'renjian-yanhuo', name:'人间烟火', category:'轻乳茶', brands:['茶颜悦色'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#FED7AA',
  layers:[
    {name:'武夷岩茶', pct:54, color:'#A87A4A'},
    {name:'鲜奶', pct:28, color:'#FDFBF6'},
    {name:'奶油顶', pct:13, color:'#FFFFFF'},
    {name:'开心果碎', pct:5, color:'#9CBF6A'}
  ],
  intro:'茶颜的「茶系」代表，用武夷岩茶做底，比幽兰拿铁更有岩韵。顶上撒的是**开心果碎**，不是碧根果——这是它和幽兰拿铁最直接的区别。',
  ingredients:[
    {name:'武夷岩茶', amount:'7g', note:'大红袍或水仙'},
    {name:'热水', amount:'230ml', note:'100℃'},
    {name:'鲜奶', amount:'120ml'},
    {name:'淡奶油', amount:'60ml'},
    {name:'糖', amount:'12g'},
    {name:'开心果', amount:'15g', note:'去壳，压碎'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '岩茶必须沸水泡，温度低了出不来岩韵。',
    '开心果一定要买原味的，盐焗的会毁掉整杯。'
  ],
  fidelity:'茶颜用拼配岩茶，家用单一品种能到八成五，火焙味会更冲一些。',
  steps:[
    {title:'泡岩茶', desc:'100℃ 水 230ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'武夷岩茶', pct:54, color:'#A87A4A'}]},
    {title:'加奶', desc:'降温后倒鲜奶 120ml、糖 12g。', act:'倒入',
     add:[{name:'鲜奶', pct:28, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶油', desc:'淡奶油 60ml 打到八分发。', timer:60, act:'搅拌',
     add:[{name:'奶油顶', pct:13, color:'#FFFFFF'}]},
    {title:'撒开心果', desc:'奶油上撒压碎的开心果。', act:'铺面',
     add:[{name:'开心果碎', pct:5, color:'#9CBF6A'}]}
  ]
},

{
  id:'sanji-chong', name:'三季虫', category:'轻乳茶', brands:['茶颜悦色'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#FDE68A',
  layers:[
    {name:'高山红茶', pct:54, color:'#B0703A'},
    {name:'鲜奶', pct:28, color:'#FDFBF6'},
    {name:'奶油顶', pct:13, color:'#FFFFFF'},
    {name:'碧根果碎', pct:5, color:'#B08850'}
  ],
  intro:'幽兰拿铁的「进阶版」，茶底换成高海拔红茶，浓度更高、涩感更低。茶颜内部有句话：无茶不欢，就喝三季虫。',
  ingredients:[
    {name:'高山红茶', amount:'8g', note:'滇红或大叶种红茶'},
    {name:'热水', amount:'230ml', note:'95℃'},
    {name:'鲜奶', amount:'120ml'},
    {name:'淡奶油', amount:'60ml'},
    {name:'糖', amount:'10g'},
    {name:'碧根果', amount:'15g'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '茶要泡足 5 分钟才有那个厚度，比幽兰拿铁更浓是关键。',
    '糖别多，这一杯主打茶味。'
  ],
  fidelity:'茶颜用高山产区红茶，家用滇红能到八成五，大叶种更接近。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 230ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'高山红茶', pct:54, color:'#B0703A'}]},
    {title:'加奶', desc:'降温加鲜奶 120ml、糖 10g。', act:'倒入',
     add:[{name:'鲜奶', pct:28, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶油', desc:'淡奶油打到八分发。', timer:60, act:'搅拌',
     add:[{name:'奶油顶', pct:13, color:'#FFFFFF'}]},
    {title:'撒碧根果', desc:'顶上撒碧根果碎。', act:'铺面',
     add:[{name:'碧根果碎', pct:5, color:'#B08850'}]}
  ]
},

{
  id:'mocha-puti', name:'抹茶葡提', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:2, temp:'冰', volume:500, bg:'#BEF264',
  layers:[
    {name:'茉莉绿茶', pct:48, color:'#DCE3B8'},
    {name:'抹茶奶', pct:38, color:'#8FAE6A'},
    {name:'黑加仑提子干', pct:14, color:'#3A2A3E'}
  ],
  intro:'茉莉绿茶加抹茶，两重茶香叠着来。顶上撒黑加仑提子干，酸甜带嚼劲，解腻能力很强。',
  ingredients:[
    {name:'茉莉绿茶', amount:'5g'},
    {name:'抹茶粉', amount:'3g', note:'过筛'},
    {name:'热水', amount:'220ml', note:'85℃'},
    {name:'鲜奶', amount:'130ml'},
    {name:'糖', amount:'15g'},
    {name:'黑加仑提子干', amount:'15g'}
  ],
  tools:['杯子','滤网','茶筅'],
  pitfalls:[
    '抹茶粉不过筛会结块，喝完杯底一层渣。',
    '茉莉和抹茶要分开泡再混，一起泡会互相抢味。'
  ],
  fidelity:'茶颜用抹茶牛奶基底，家庭现点抹茶 + 茉莉茶汤香气更真。',
  steps:[
    {title:'泡茉莉', desc:'85℃ 水 220ml 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:48, color:'#DCE3B8'}]},
    {title:'点抹茶', desc:'抹茶 3g 过筛，加 80℃ 水 40ml 刷匀。', timer:30, act:'搅拌',
     add:[{name:'抹茶奶', pct:38, color:'#8FAE6A'}]},
    {title:'混合', desc:'茶汤 + 抹茶液 + 鲜奶 + 糖，加冰搅匀。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'撒提子干', desc:'表面撒黑加仑提子干。', act:'铺面',
     add:[{name:'黑加仑提子干', pct:14, color:'#3A2A3E'}]}
  ]
},

{
  id:'manyue-lanshan', name:'蔓越阑珊', category:'轻乳茶', brands:['茶颜悦色'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#FECDD3',
  layers:[
    {name:'锡兰红茶', pct:50, color:'#B0703A'},
    {name:'蔓越莓酱', pct:16, color:'#C0392B'},
    {name:'奶油顶', pct:20, color:'#FFFFFF'},
    {name:'蔓越莓干', pct:14, color:'#A03030'}
  ],
  intro:'茶颜里唯一走**酸甜口**的一杯，靠蔓越莓酱打底。奶油顶上撒蔓越莓干，一口下去脆、酸、甜、香全有。',
  ingredients:[
    {name:'锡兰红茶', amount:'7g'},
    {name:'热水', amount:'220ml', note:'95℃'},
    {name:'蔓越莓酱', amount:'35g', note:'带果粒的那种'},
    {name:'鲜奶', amount:'100ml'},
    {name:'淡奶油', amount:'60ml'},
    {name:'蔓越莓干', amount:'15g'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '蔓越莓酱要选带果粒的，纯果冻酱就没口感了。',
    '果酱铺底别搅，搅匀了会变成一杯紫红色，失去分层。'
  ],
  fidelity:'茶颜用定制蔓越莓酱，家庭用进口带果粒款风味接近。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 220ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'锡兰红茶', pct:50, color:'#B0703A'}]},
    {title:'铺果酱', desc:'蔓越莓酱 35g 铺杯底，别搅。', act:'备料',
     add:[{name:'蔓越莓酱', pct:16, color:'#C0392B'}]},
    {title:'加茶奶', desc:'茶汤 + 鲜奶 100ml，勺背导流倒进去。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶油撒果干', desc:'淡奶油打到八分发盖顶，撒蔓越莓干。', timer:60, act:'铺面',
     add:[{name:'奶油顶', pct:18, color:'#FFFFFF'},{name:'蔓越莓干', pct:12, color:'#A03030'}]}
  ]
},

{
  id:'zhengzheng', name:'筝筝纸鸢', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#BAE6FD',
  layers:[
    {name:'乌龙茶', pct:64, color:'#D4C088'},
    {name:'轻奶沫', pct:36, color:'#FDFBF6'}
  ],
  intro:'茶颜「沫泡篇」里茶香最突出的一杯，口感清冽。**下雨天到店买第二杯半价**，所以长沙人说「下雨天和筝筝纸鸢最配」。',
  ingredients:[
    {name:'乌龙茶', amount:'7g', note:'清香型'},
    {name:'热水', amount:'230ml', note:'95℃'},
    {name:'鲜奶', amount:'100ml'},
    {name:'淡奶油', amount:'30ml', note:'打轻奶沫'},
    {name:'糖', amount:'8g'},
    {name:'小麦胚芽', amount:'2g', optional:true, note:'撒表面，沫泡篇的标志'}
  ],
  tools:['杯子','打泡器','滤网'],
  pitfalls:[
    '奶沫必须 15 分钟内喝完，久了会自然消散。',
    '喝法是不用吸管，直接对杯口抿，才能同时喝到沫和茶。'
  ],
  fidelity:'茶颜用专用奶沫机，家庭冷打泡器能出八成，但消散更快。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 230ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'乌龙茶', pct:64, color:'#D4C088'}]},
    {title:'降温加奶', desc:'加冰降温，倒鲜奶 100ml、糖 8g。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打轻奶沫', desc:'淡奶油 30ml 冷淡打到细密蓬松。', timer:50, act:'搅拌',
     add:[{name:'轻奶沫', pct:28, color:'#FDFBF6'}]},
    {title:'撒胚芽', desc:'表面撒小麦胚芽。', act:'铺面', add:[]}
  ]
},

{
  id:'yanhuo-yileng', name:'烟火易冷', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FFEDD5',
  layers:[
    {name:'岩韵乌龙', pct:62, color:'#B08A5A'},
    {name:'轻奶沫', pct:38, color:'#FDFBF6'}
  ],
  intro:'和「人间烟火」是同一支茶底，但这杯是沫泡篇——没有奶油顶，奶更多。**每周三部分门店半价**。',
  ingredients:[
    {name:'岩韵乌龙', amount:'7g', note:'大红袍或水仙'},
    {name:'热水', amount:'230ml', note:'100℃'},
    {name:'鲜奶', amount:'120ml'},
    {name:'淡奶油', amount:'30ml'},
    {name:'糖', amount:'10g'}
  ],
  tools:['杯子','打泡器','滤网'],
  pitfalls:[
    '虽然是同一支茶，但这杯奶比例高，糖要减一点才不腻。',
    '奶沫打太厚会盖掉岩茶的焙火香。'
  ],
  fidelity:'茶颜用拼配岩茶，家用单一品种火气更冲，可以少泡 30 秒。',
  steps:[
    {title:'泡岩茶', desc:'100℃ 水 230ml 泡 3 分半，滤掉茶叶。', timer:210, act:'冲泡',
     add:[{name:'岩韵乌龙', pct:62, color:'#B08A5A'}]},
    {title:'加奶', desc:'降温后倒鲜奶 120ml、糖 10g。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶沫', desc:'淡奶油打细密，铺在表面。', timer:50, act:'铺面',
     add:[{name:'轻奶沫', pct:28, color:'#FDFBF6'}]}
  ]
},

{
  id:'fengqi-lvgui', name:'风栖绿桂', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#34D399',
  layers:[
    {name:'茉莉绿茶', pct:66, color:'#DCE3B8'},
    {name:'鲜奶', pct:34, color:'#FDFBF6'}
  ],
  intro:'茶颜里最清爽的一杯，造型也最简。茉莉绿茶配鲜奶，什么花头都没有，就是茶和奶。配辣的食物特别合适。',
  ingredients:[
    {name:'茉莉绿茶', amount:'7g'},
    {name:'热水', amount:'240ml', note:'85℃'},
    {name:'鲜奶', amount:'110ml'},
    {name:'糖', amount:'10g'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '水太烫会把茉莉香烫跑，85℃ 是上限。',
    '这是全系列奶最少的，别习惯性多加奶。'
  ],
  fidelity:'茶颜用高窨次茉莉，家用能到八成五，关键在茶本身的窨制次数。',
  steps:[
    {title:'泡茉莉', desc:'85℃ 水 240ml 泡 3 分钟，盖盖。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:66, color:'#DCE3B8'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加奶', desc:'倒鲜奶 110ml、糖 10g，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:26, color:'#FDFBF6'}]}
  ]
},

{
  id:'suyan-xilan', name:'素颜锡兰', category:'轻乳茶', brands:['茶颜悦色'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FEF08A',
  layers:[
    {name:'锡兰红茶', pct:58, color:'#B0703A'},
    {name:'鲜奶', pct:42, color:'#FDFBF6'}
  ],
  intro:'茶颜里最「奶」的一杯，红茶和鲜奶几乎对半。想喝奶茶而不是茶的时候点它，没有任何花头。',
  ingredients:[
    {name:'锡兰红茶', amount:'7g'},
    {name:'热水', amount:'230ml', note:'95℃'},
    {name:'鲜奶', amount:'170ml', note:'比别的款多'},
    {name:'糖', amount:'12g'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '奶多了容易盖住茶味，红茶要泡够 5 分钟。',
    '这一杯不加奶油，是茶颜里最轻的忌廉替代。'
  ],
  fidelity:'茶颜用锡兰拼配，家用单一锡兰能到九成。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 230ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'锡兰红茶', pct:58, color:'#B0703A'}]},
    {title:'降温', desc:'加冰搅凉。', act:'降温',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'倒鲜奶 170ml、糖 12g，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:34, color:'#FDFBF6'}]}
  ]
},

{
  id:'xueding-youlan', name:'雪顶幽兰', category:'轻乳茶', brands:['马伍旺饮料厂'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#F9A8D4',
  layers:[
    {name:'锡兰红茶', pct:52, color:'#B0703A'},
    {name:'鲜奶', pct:28, color:'#FDFBF6'},
    {name:'雪顶', pct:16, color:'#FFFFFF'},
    {name:'碧根果碎', pct:4, color:'#B08850'}
  ],
  intro:'南京本土品牌马伍旺的招牌，**一年卖出 1000 万杯以上**。结构类似幽兰拿铁，但奶更厚、雪顶更结实。',
  ingredients:[
    {name:'锡兰红茶', amount:'7g'},
    {name:'热水', amount:'230ml', note:'95℃'},
    {name:'鲜牛乳', amount:'110ml'},
    {name:'淡奶油', amount:'70ml', note:'打发雪顶'},
    {name:'糖', amount:'14g'},
    {name:'碧根果', amount:'15g', note:'压碎'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '马伍旺的雪顶比一般奶油顶更硬，淡奶油要打到九分发。',
    '红茶底要够浓，奶厚了容易压茶。'
  ],
  fidelity:'门店用非氢化基底乳，家庭用鲜牛乳 + 淡奶油能到八成五。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 230ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'锡兰红茶', pct:52, color:'#B0703A'}]},
    {title:'加奶', desc:'降温后倒鲜牛乳 110ml、糖 14g。', act:'倒入',
     add:[{name:'鲜奶', pct:28, color:'#FDFBF6'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打硬雪顶', desc:'淡奶油 70ml 打到九分发，能立住直角。', timer:90, act:'搅拌',
     add:[{name:'雪顶', pct:16, color:'#FFFFFF'}]},
    {title:'撒坚果', desc:'雪顶上撒碧根果碎。', act:'铺面',
     add:[{name:'碧根果碎', pct:4, color:'#B08850'}]}
  ]
},

{
  id:'bailan-xianyu', name:'白兰仙雨', category:'轻乳茶', brands:['茶云家'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#7DD3FC',
  layers:[
    {name:'雨花茶', pct:66, color:'#D8E0B0'},
    {name:'鲜奶', pct:34, color:'#FDFBF6'}
  ],
  intro:'南京本土品牌茶云家的招牌，用**南京雨花茶**配卫岗牛奶。创始人把高淳的雨花茶基地和省级非遗传承人都请来了，这杯是真正的「金陵味」。',
  ingredients:[
    {name:'南京雨花茶', amount:'8g', note:'南京特产绿茶，清明到谷雨采的最好'},
    {name:'热水', amount:'250ml', note:'85℃'},
    {name:'鲜奶', amount:'120ml', note:'或卫岗牛奶'},
    {name:'冰糖糖浆', amount:'20g'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '雨花茶是嫩芽绿茶，85℃ 泡 2 分半就够，久了会苦涩。',
    '这是全系列茶味最清的，奶别多加。'
  ],
  fidelity:'茶云家用高淳雨花茶 + 卫岗，家庭在外地难买到同款茶，可以换碧螺春但风味会变。',
  steps:[
    {title:'泡雨花茶', desc:'85℃ 水 250ml 泡 2 分半，滤掉茶叶。', timer:150, act:'冲泡',
     add:[{name:'雨花茶', pct:66, color:'#D8E0B0'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加奶调甜', desc:'倒鲜奶 120ml、糖浆 20g，轻搅。', act:'倒入',
     add:[{name:'鲜奶', pct:26, color:'#FDFBF6'}]}
  ]
}

]);
