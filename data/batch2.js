/* 第二批扩充：书亦烧仙草 7 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'shuyi-jingdian', name:'经典烧仙草', category:'奶茶', brands:['书亦烧仙草'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:600, bg:'#78716C',
  layers:[
    {name:'仙草冻', pct:28, color:'#2A2A2A'},
    {name:'红豆', pct:12, color:'#8B3A3A'},
    {name:'花生', pct:8, color:'#C4A57B'},
    {name:'椰果', pct:10, color:'#FBF6E4'},
    {name:'植物乳奶茶', pct:42, color:'#D9C4A8'}
  ],
  intro:'书亦的立店之本，**「半杯都是料」就是形容它**。五样小料堆满杯子，仙草现熬、红豆软糯、椰果脆弹。',
  ingredients:[
    {name:'仙草粉', amount:'20g', note:'或买现成仙草冻 200g'},
    {name:'冷水', amount:'100ml', note:'化仙草粉'},
    {name:'热水', amount:'400ml'},
    {name:'蜜红豆', amount:'60g'},
    {name:'熟花生', amount:'30g', note:'炒过或烤过的'},
    {name:'椰果', amount:'50g'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'120ml'},
    {name:'糖浆', amount:'20ml'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '仙草粉必须先用冷水化开，直接倒热水会结块再也化不开。',
    '五样料要分层放，全倒进去就糊成一坨了。',
    '仙草冻煮好必须完全放凉才凝固，急不得。'
  ],
  fidelity:'门店用仙草干熬 4 小时，草香浓。家庭用仙草粉口感接近，但香气薄一半。',
  steps:[
    {title:'化仙草粉', desc:'仙草粉 20g + 冷水 100ml，搅到无颗粒。', act:'搅拌', add:[]},
    {title:'煮仙草冻', desc:'400ml 水烧开，倒入仙草液边倒边搅，煮沸关火。', timer:300, act:'加热',
     add:[{name:'仙草冻', pct:28, color:'#2A2A2A'}]},
    {title:'放凉凝固', desc:'倒进容器放凉，冷藏 2 小时到完全凝固，切 2cm 方块。', timer:7200, act:'焖', add:[]},
    {title:'泡红茶', desc:'红茶 150ml 泡好放凉。', timer:240, act:'冲泡',
     add:[{name:'红茶汤', pct:20, color:'#B08850'}]},
    {title:'调奶茶', desc:'红茶汤 + 鲜奶 120ml + 糖浆 20ml 混匀。', act:'搅拌',
     add:[{name:'植物乳奶茶', pct:24, color:'#D9C4A8'}]},
    {title:'铺料组装', desc:'仙草冻垫底，依次加红豆、椰果、花生，倒奶茶。', act:'铺面',
     add:[{name:'红豆', pct:11, color:'#8B3A3A'},{name:'椰果', pct:9, color:'#FBF6E4'},{name:'花生', pct:8, color:'#C4A57B'}]}
  ]
},

{
  id:'shuyi-haifeng', name:'海风青柠冰奶', category:'奶茶', brands:['书亦烧仙草'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#7EEEDA',
  layers:[
    {name:'青柠片', pct:16, color:'#A8C850'},
    {name:'青柠冻冻', pct:14, color:'#D9E8A0'},
    {name:'茉莉奶茶', pct:70, color:'#E8E0C0'}
  ],
  intro:'书亦 2026 年的爆款，**周销百万杯**，9.9 元的质价比。青柠的酸爽撞进奶里，居然不结块，靠的是只用皮不用果肉。',
  ingredients:[
    {name:'青柠', amount:'1 个', note:'只削表皮，不要果肉'},
    {name:'茉莉绿茶', amount:'7g'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'30ml', note:'青柠很酸，糖别省'},
    {name:'白凉粉', amount:'3g', optional:true, note:'做青柠冻冻'}
  ],
  tools:['摇壶','捣棒','杯子'],
  pitfalls:[
    '绝对不能放青柠果肉，果酸会让牛奶起絮。',
    '只刮表皮黄色/绿色那层，白瓤会苦。'
  ],
  fidelity:'书亦用定制青柠冻冻和冷萃茶底，家庭版风味接近，冻冻可以用白凉粉 + 青柠汁自制。',
  steps:[
    {title:'刮青柠皮', desc:'青柠削下表皮切细丝，用捣棒压 5 下出油。', act:'捣碎',
     add:[{name:'青柠片', pct:16, color:'#A8C850'}]},
    {title:'泡茉莉', desc:'85℃ 水 200ml 泡 3 分钟，滤掉茶叶放凉。', timer:180, act:'冲泡',
     add:[{name:'茉莉茶汤', pct:50, color:'#DCE3B8'}]},
    {title:'调青柠奶', desc:'茶汤 + 鲜奶 150ml + 糖浆 30ml，加柠皮。', act:'倒入',
     add:[{name:'茉莉奶茶', pct:24, color:'#E8E0C0'}]},
    {title:'加冻冻', desc:'杯底放青柠冻冻，倒奶茶加冰。', act:'铺面',
     add:[{name:'青柠冻冻', pct:10, color:'#D9E8A0'},{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'shuyi-xigua', name:'一桶大鲜榨西瓜', category:'果茶', brands:['书亦烧仙草'], nocaf:true,
  method:'摇匀', difficulty:1, temp:'冰', volume:1000, bg:'#F87878',
  layers:[
    {name:'西瓜果肉', pct:40, color:'#E8564E'},
    {name:'西瓜汁', pct:48, color:'#F07A6E'},
    {name:'冰块', pct:12, color:'#DCEFF6'}
  ],
  intro:'**不含茶**，一升装的果茶，夏天一个人喝能撑。名字里的「一桶」是真的 1000ml。',
  ingredients:[
    {name:'西瓜', amount:'600g', note:'无籽西瓜，冰镇过'},
    {name:'糖浆', amount:'20ml', optional:true},
    {name:'柠檬汁', amount:'10ml', optional:true, note:'几滴提鲜'},
    {name:'冰块', amount:'约 300g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '西瓜本身甜，糖可以不加，先尝。',
    '冰少了会温，一升的量必须冰给足。'
  ],
  fidelity:'门店用现切西瓜现榨，家庭完全可复刻，关键在西瓜够冰够甜。',
  steps:[
    {title:'切西瓜', desc:'西瓜去籽切块，留一些果肉丁。', act:'备料',
     add:[{name:'西瓜果肉', pct:38, color:'#E8564E'}]},
    {title:'打汁', desc:'一半西瓜打成汁。', timer:20, act:'打泥',
     add:[{name:'西瓜汁', pct:44, color:'#F07A6E'}]},
    {title:'装桶', desc:'果汁和果肉混合，加冰和柠檬汁。', act:'铺冰',
     add:[{name:'冰块', pct:14, color:'#DCEFF6'}]}
  ]
},

{
  id:'shuyi-shengye-sangshen', name:'生椰桑葚莓莓', category:'果茶', brands:['书亦烧仙草'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#B49AFC',
  layers:[
    {name:'桑葚果肉', pct:20, color:'#4A1B4E'},
    {name:'草莓果肉', pct:16, color:'#E63B4E'},
    {name:'椰乳布丁', pct:20, color:'#FDFBF6'},
    {name:'生椰乳', pct:44, color:'#F0DFC8'}
  ],
  intro:'大凉山黑桑葚 + 草莓 + 椰乳布丁，三重果肉叠椰香。桑葚越黑越甜，挑的时候看颜色。',
  ingredients:[
    {name:'桑葚', amount:'100g'},
    {name:'草莓', amount:'80g'},
    {name:'厚椰乳', amount:'150ml'},
    {name:'牛奶', amount:'80ml'},
    {name:'吉利丁片', amount:'3g', note:'做椰乳布丁'},
    {name:'糖浆', amount:'20ml'}
  ],
  tools:['料理机','锅','杯子'],
  pitfalls:[
    '椰乳布丁要提前 2 小时做。',
    '桑葚去梗，有梗会涩。'
  ],
  fidelity:'书亦用冷链鲜桑葚，家庭用冷冻桑葚风味稍弱但结构一致。',
  steps:[
    {title:'做椰乳布丁', desc:'厚椰乳 50ml + 牛奶 + 糖 + 泡软吉利丁搅化，冷藏 2 小时切块。', timer:7200, act:'焖',
     add:[{name:'椰乳布丁', pct:20, color:'#FDFBF6'}]},
    {title:'处理果肉', desc:'桑葚去梗，草莓切块，一半压碎。', act:'捣碎',
     add:[{name:'桑葚果肉', pct:20, color:'#4A1B4E'},{name:'草莓果肉', pct:16, color:'#E63B4E'}]},
    {title:'调椰乳', desc:'剩的厚椰乳 + 糖浆 20ml 混匀。', act:'倒入',
     add:[{name:'生椰乳', pct:38, color:'#F0DFC8'}]},
    {title:'组装', desc:'果肉垫底，放布丁，倒椰乳加冰。', act:'铺面',
     add:[{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'shuyi-chengman', name:'橙漫山茶花', category:'果茶', brands:['书亦烧仙草'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FEC98C',
  layers:[
    {name:'橙子片', pct:18, color:'#F79B2E'},
    {name:'山茶花乌龙', pct:38, color:'#D8C090'},
    {name:'燕麦奶', pct:44, color:'#E8DCC4'}
  ],
  intro:'山茶花香乌龙配 OATLY 定制燕麦奶，**不含乳糖**，乳糖不耐受也能喝。三层风味：山茶花、橙子、麦香。',
  ingredients:[
    {name:'山茶花乌龙', amount:'7g', note:'或带花香的高山乌龙'},
    {name:'热水', amount:'200ml', note:'90℃'},
    {name:'脐橙', amount:'1 个'},
    {name:'燕麦奶', amount:'150ml', note:'咖啡师版'},
    {name:'糖浆', amount:'18ml'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '燕麦奶要咖啡师版，普通版加热会分层。',
    '橙子白瓤削掉，皮厚会苦。'
  ],
  fidelity:'书亦用 OATLY 定制燕麦奶，家庭用同品牌能还原九成。',
  steps:[
    {title:'泡乌龙', desc:'90℃ 水 200ml 泡 4 分钟，滤掉茶叶放凉。', timer:240, act:'冲泡',
     add:[{name:'山茶花乌龙', pct:38, color:'#D8C090'}]},
    {title:'处理橙子', desc:'橙子切薄片，取三片压汁。', act:'备料',
     add:[{name:'橙子片', pct:18, color:'#F79B2E'}]},
    {title:'摇匀', desc:'茶汤 + 橙汁 + 糖浆摇 12 秒。', timer:12, act:'摇匀', add:[]},
    {title:'加燕麦奶', desc:'倒燕麦奶 150ml，加冰。', act:'倒入',
     add:[{name:'燕麦奶', pct:38, color:'#E8DCC4'},{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'shuyi-heitang-yuyuan', name:'黑糖小芋圆奶茶', category:'奶茶', brands:['书亦烧仙草'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#C084FC',
  layers:[
    {name:'黑糖小芋圆', pct:26, color:'#5A3A20'},
    {name:'冻冻', pct:12, color:'#F0E8D8'},
    {name:'奶茶', pct:62, color:'#D9C4A8'}
  ],
  intro:'书亦的芋圆是**小颗**的，一口能吸好几颗。黑糖熬过再拌，Q 弹带焦香。',
  ingredients:[
    {name:'小芋圆', amount:'80g', note:'冷冻小芋圆'},
    {name:'黑糖', amount:'30g'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'150ml'},
    {name:'白凉粉', amount:'3g', optional:true, note:'做冻冻'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '芋圆煮到全浮起再煮 2 分钟，短了中心是硬的。',
    '黑糖要熬成浆再拌，直接撒粉不均匀。'
  ],
  fidelity:'书亦用现煮小芋圆 + 手工冻冻，家庭版原料可得，还原度九成。',
  steps:[
    {title:'熬黑糖', desc:'黑糖 30g 加 30ml 水小火熬成稠浆。', timer:300, act:'加热',
     add:[{name:'黑糖浆', pct:10, color:'#3A2418'}]},
    {title:'煮芋圆拌糖', desc:'芋圆煮到浮起再 2 分钟，过冷水后拌黑糖浆。', timer:420, act:'加热',
     add:[{name:'黑糖小芋圆', pct:22, color:'#5A3A20'}]},
    {title:'调奶茶', desc:'红茶 150ml + 鲜奶 150ml 混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:52, color:'#D9C4A8'}]},
    {title:'组装', desc:'芋圆和冻冻垫底，倒奶茶。', act:'铺面',
     add:[{name:'冻冻', pct:10, color:'#F0E8D8'},{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'shuyi-xihongshi', name:'西红柿蛋花汤', category:'果茶', brands:['书亦烧仙草'], nocaf:true,
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F8B8B8',
  layers:[
    {name:'西瓜果肉', pct:24, color:'#E8564E'},
    {name:'凤梨丁', pct:14, color:'#F5C84E'},
    {name:'布雷奶冻', pct:22, color:'#FFF8E8'},
    {name:'茉莉绿茶', pct:40, color:'#E0E4C0'}
  ],
  intro:'2026 年最出圈的猎奇款——**长得像西红柿蛋花汤，其实里面既没有西红柿也没有鸡蛋**。西瓜扮演西红柿，凤梨丁假装蛋黄，布雷奶冻模拟蛋花。',
  ingredients:[
    {name:'西瓜', amount:'150g', note:'要红心的，颜色才像'},
    {name:'凤梨', amount:'60g'},
    {name:'布雷粉', amount:'20g', note:'或布丁粉'},
    {name:'牛奶', amount:'100ml'},
    {name:'茉莉绿茶', amount:'7g'},
    {name:'热水', amount:'180ml', note:'85℃'},
    {name:'糖浆', amount:'20ml'}
  ],
  tools:['锅','摇壶','杯子'],
  pitfalls:[
    '布雷奶冻要做得够嫩，才能散开成「蛋花」。',
    '装杯后轻轻晃两下，蛋花效果才出来。',
    '别用力摇，奶冻会碎成糊。'
  ],
  fidelity:'书亦用定制布雷奶冻，家庭用布丁粉做更嫩，但形状没那么像絮状。',
  steps:[
    {title:'做布雷奶冻', desc:'布雷粉 20g + 牛奶 100ml 煮到浓稠，冷藏 2 小时。', timer:7200, act:'焖',
     add:[{name:'布雷奶冻', pct:22, color:'#FFF8E8'}]},
    {title:'泡茶', desc:'85℃ 水 180ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:40, color:'#E0E4C0'}]},
    {title:'切果', desc:'西瓜切小块，凤梨切丁。', act:'备料',
     add:[{name:'西瓜果肉', pct:24, color:'#E8564E'},{name:'凤梨丁', pct:14, color:'#F5C84E'}]},
    {title:'组装晃杯', desc:'茶汤加冰和糖浆，放果肉，最后舀入奶冻块，轻轻晃两下。', act:'完成',
     add:[{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
}

]);

/* 一点点 7 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'ydd-boba', name:'波霸奶茶', category:'奶茶', brands:['一点点'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#FCE07A',
  layers:[
    {name:'波霸', pct:26, color:'#2E1B10'},
    {name:'奶茶', pct:74, color:'#D4B896'}
  ],
  intro:'一点点的招牌，**「波霸」就是大颗珍珠**，比普通珍珠大一倍，嚼起来更过瘾。它家默认甜度偏高，建议三分糖。',
  ingredients:[
    {name:'波霸', amount:'80g', note:'大颗木薯珍珠，直径 1cm 以上'},
    {name:'阿萨姆红茶', amount:'8g'},
    {name:'热水', amount:'250ml', note:'95℃'},
    {name:'奶精粉', amount:'25g', note:'一点点用奶精，这是台式古早味的关键'},
    {name:'糖浆', amount:'20ml'}
  ],
  tools:['锅','杯子','滤网'],
  pitfalls:[
    '波霸要煮 30 分钟 + 焖 10 分钟，比普通珍珠更久。',
    '奶精粉先用少量热茶化开，直接倒会结块。'
  ],
  fidelity:'一点点用定制奶精和波霸，家庭用同款奶精能到九成五，换鲜奶就不是这个味了。',
  steps:[
    {title:'煮波霸', desc:'水沸下波霸，中火 30 分钟，焖 10 分钟。', timer:1800, act:'加热',
     add:[{name:'波霸', pct:26, color:'#2E1B10'}]},
    {title:'过冷水', desc:'冲到不粘手，泡糖水防粘。', act:'冲洗', add:[]},
    {title:'泡红茶', desc:'95℃ 水 250ml 泡 5 分钟。', timer:300, act:'冲泡',
     add:[{name:'红茶汤', pct:44, color:'#B08850'}]},
    {title:'化奶精', desc:'奶精粉 25g 用 30ml 热茶化开，倒回茶汤加糖浆。', act:'搅拌',
     add:[{name:'奶茶', pct:30, color:'#D4B896'}]},
    {title:'组装', desc:'波霸垫底，倒奶茶，加冰或加热。', act:'倒入', add:[]}
  ]
},


{
  id:'ydd-aohuatian', name:'阿华田', category:'奶茶', brands:['一点点'],
  method:'直调', difficulty:1, temp:'热', volume:500, bg:'#D97706',
  layers:[
    {name:'阿华田液', pct:44, color:'#6B4423'},
    {name:'热牛奶', pct:56, color:'#F5E6D0'}
  ],
  intro:'**380 大卡，热量刺客**，但冬天喝是真治愈。麦芽可可香，建议无糖——阿华田粉本身就含糖。',
  ingredients:[
    {name:'阿华田粉', amount:'35g', note:'瑞士进口那款，带麦芽香'},
    {name:'热水', amount:'80ml', note:'先调糊'},
    {name:'牛奶', amount:'250ml'},
    {name:'波霸', amount:'60g', optional:true}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '阿华田粉本身含糖，别再额外加糖。',
    '必须先调成糊再加奶，直接撒会结块。'
  ],
  fidelity:'一点点用阿华田官方粉，家庭买同款零差异。',
  steps:[
    {title:'调糊', desc:'阿华田粉 35g + 热水 80ml，搅成顺滑糊。', act:'搅拌',
     add:[{name:'阿华田液', pct:44, color:'#6B4423'}]},
    {title:'热牛奶', desc:'牛奶 250ml 加热到 65℃。', timer:90, act:'加热',
     add:[{name:'热牛奶', pct:52, color:'#F5E6D0'}]},
    {title:'混合', desc:'阿华田糊倒进热奶，边倒边搅。', act:'倒入', add:[]},
    {title:'加波霸', desc:'可选加波霸，口感更丰富。', act:'铺面',
     add:[{name:'波霸', pct:4, color:'#2E1B10'}]}
  ]
},

{
  id:'ydd-baile-lv', name:'芭乐绿', category:'果茶', brands:['一点点'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FBC9DE',
  layers:[
    {name:'芭乐果肉', pct:18, color:'#F49AC1'},
    {name:'芭乐绿茶', pct:82, color:'#E0D8B8'}
  ],
  intro:'80 大卡，控糖期的好选择。红心芭乐带天然粉红色，配茉莉绿茶很清爽。',
  ingredients:[
    {name:'红心芭乐', amount:'150g'},
    {name:'茉莉绿茶', amount:'200ml'},
    {name:'糖浆', amount:'12ml', optional:true},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','料理机','杯子'],
  pitfalls:[
    '芭乐籽很硬，打之前要挖掉。',
    '芭乐不够熟会涩，要挑软的。'
  ],
  fidelity:'一点点用芭乐果酱，家庭用鲜果更清爽但颜色会淡一些。',
  steps:[
    {title:'处理芭乐', desc:'芭乐去皮去籽，切块。', act:'备料', add:[]},
    {title:'打泥', desc:'芭乐打成果泥。', timer:20, act:'打泥',
     add:[{name:'芭乐果肉', pct:18, color:'#F49AC1'}]},
    {title:'泡茶', desc:'85℃ 水 200ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'芭乐绿茶', pct:74, color:'#E0D8B8'}]},
    {title:'摇匀', desc:'全部加冰摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'ydd-bobo-naigai', name:'红茶玛奇朵', category:'特调', brands:['一点点'],
  method:'打泡', difficulty:2, temp:'冷热皆可', volume:500, bg:'#F59E0B',
  layers:[
    {name:'红茶', pct:70, color:'#B0703A'},
    {name:'奶霜', pct:30, color:'#FFF8E7'}
  ],
  intro:'「玛奇朵」在一点点这里就是**奶霜盖顶**，200 大卡。跟喜茶的芝士奶盖不同——这个不加奶酪，更轻盈。',
  ingredients:[
    {name:'阿萨姆红茶', amount:'8g'},
    {name:'热水', amount:'250ml', note:'95℃'},
    {name:'淡奶油', amount:'80ml'},
    {name:'牛奶', amount:'30ml'},
    {name:'糖', amount:'10g'},
    {name:'盐', amount:'1g'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '奶霜要打到能缓慢流动，太稠会沉下去。',
    '茶汤必须放凉，热的会把奶霜冲散。'
  ],
  fidelity:'一点点用奶霜粉现打，家庭用淡奶油 + 牛奶口感更真但没那么稳定。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 250ml 泡 5 分钟，滤掉茶叶放凉。', timer:300, act:'冲泡',
     add:[{name:'红茶', pct:68, color:'#B0703A'}]},
    {title:'打奶霜', desc:'淡奶油 + 牛奶 + 糖 + 盐，打到顺滑能流动。', timer:80, act:'搅拌',
     add:[{name:'奶霜', pct:28, color:'#FFF8E7'}]},
    {title:'铺顶', desc:'红茶倒杯加冰，奶霜用勺子背铺表面。', act:'铺面',
     add:[{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
},

{
  id:'ydd-zhiqingyou', name:'只此青柚', category:'果茶', brands:['一点点'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#6EE7B7',
  layers:[
    {name:'柚子果肉', pct:16, color:'#E8A87C'},
    {name:'栀子冻', pct:12, color:'#F0EAD8'},
    {name:'柚子绿茶', pct:72, color:'#DCE8B0'}
  ],
  intro:'110 大卡，一点点颜值最高的一杯。柚子皮香不苦不涩，靠的是栀冻来平衡。',
  ingredients:[
    {name:'葡萄柚', amount:'1 个', note:'西柚也行'},
    {name:'茉莉绿茶', amount:'200ml'},
    {name:'白凉粉', amount:'3g', optional:true, note:'做栀子冻'},
    {name:'糖浆', amount:'15ml', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '西柚白膜要撕干净，那是苦味来源。',
    '柚肉别压太碎，要能吃到颗粒。'
  ],
  fidelity:'一点点用定制栀冻，家庭用白凉粉自制能模拟但香气会淡。',
  steps:[
    {title:'处理柚子', desc:'柚子剥出果肉，撕净白膜。', act:'备料',
     add:[{name:'柚子果肉', pct:16, color:'#E8A87C'}]},
    {title:'泡茶', desc:'85℃ 水 200ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'柚子绿茶', pct:66, color:'#DCE8B0'}]},
    {title:'摇匀', desc:'茶汤 + 果肉 + 糖浆摇 10 秒。', timer:10, act:'摇匀', add:[]},
    {title:'加栀冻', desc:'杯底放栀子冻，倒茶汤加冰。', act:'铺面',
     add:[{name:'栀子冻', pct:10, color:'#F0EAD8'},{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
}

]);

/* CoCo 都可 6 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'coco-sanxiongdi', name:'奶茶三兄弟', category:'奶茶', brands:['CoCo都可'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:600, bg:'#FB923C',
  layers:[
    {name:'珍珠', pct:18, color:'#2E1B10'},
    {name:'仙草', pct:16, color:'#2A2A2A'},
    {name:'布丁', pct:16, color:'#F2C879'},
    {name:'奶茶', pct:50, color:'#D4B896'}
  ],
  intro:'CoCo 三十年长销款。**珍珠弹、布丁滑、仙草清爽**，三种口感交替出现，解决选择困难。很多苏州人第一次认识 CoCo 就是这杯。',
  ingredients:[
    {name:'珍珠', amount:'60g'},
    {name:'仙草冻', amount:'80g', note:'买现成或仙草粉自制'},
    {name:'布丁', amount:'80g', note:'买现成或吉利丁自制'},
    {name:'阿萨姆红茶', amount:'8g'},
    {name:'热水', amount:'250ml', note:'95℃'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'15ml', note:'布丁仙草自带甜，糖别多'}
  ],
  tools:['锅','杯子','滤网'],
  pitfalls:[
    '三样小料要分层放，混一起就分不出层次了。',
    '布丁和仙草本身有甜味，糖要比普通奶茶少。'
  ],
  fidelity:'CoCo 用中央厨房配送小料，家庭自制更天然，但费时约 1 小时。',
  steps:[
    {title:'煮珍珠', desc:'水沸下珍珠煮 25 分钟，焖 10 分钟，过冷水。', timer:1500, act:'加热',
     add:[{name:'珍珠', pct:18, color:'#2E1B10'}]},
    {title:'泡红茶', desc:'95℃ 水 250ml 泡 5 分钟，放凉。', timer:300, act:'冲泡',
     add:[{name:'红茶汤', pct:26, color:'#B08850'}]},
    {title:'调奶茶', desc:'茶汤 + 鲜奶 150ml + 糖浆 15ml。', act:'搅拌',
     add:[{name:'奶茶', pct:34, color:'#D4B896'}]},
    {title:'铺三兄弟', desc:'杯底放珍珠、仙草块，倒奶茶，最后放布丁块。', act:'铺面',
     add:[{name:'仙草', pct:12, color:'#2A2A2A'},{name:'布丁', pct:10, color:'#F2C879'}]}
  ]
},

{
  id:'coco-xianyu-qingke', name:'鲜芋青稞牛奶', category:'奶茶', brands:['CoCo都可'],
  method:'需煮', difficulty:2, temp:'热', volume:500, bg:'#FDF0C8',
  layers:[
    {name:'芋泥', pct:30, color:'#C9A0DC'},
    {name:'青稞', pct:16, color:'#D9C4A0'},
    {name:'热牛奶', pct:54, color:'#FDFBF6'}
  ],
  intro:'秋冬出杯量特别高的一杯。**芋泥绵密 + 青稞嚼劲 + 鲜奶顺滑**，三层叠着来，一杯能顶一顿下午茶。',
  ingredients:[
    {name:'荔浦芋头', amount:'200g'},
    {name:'青稞', amount:'50g', note:'提前泡 4 小时'},
    {name:'牛奶', amount:'280ml'},
    {name:'糖', amount:'25g'},
    {name:'淡奶油', amount:'30ml'}
  ],
  tools:['锅','蒸锅','料理机'],
  pitfalls:[
    '青稞不泡直接煮，要 1 小时且夹生。',
    '芋头要蒸不要煮，煮进去水就稀了。'
  ],
  fidelity:'CoCo 用预制芋泥，家庭现做更香但费时。青稞是核心，别换成燕麦。',
  steps:[
    {title:'泡青稞', desc:'青稞 50g 泡 4 小时。', timer:14400, act:'浸泡', add:[]},
    {title:'煮青稞', desc:'煮 30 分钟到能嚼动但仍弹牙。', timer:1800, act:'加热',
     add:[{name:'青稞', pct:16, color:'#D9C4A0'}]},
    {title:'蒸芋头', desc:'芋头蒸 25 分钟压泥，加糖 15g、淡奶油 30ml 调顺滑。', timer:1500, act:'加热',
     add:[{name:'芋泥', pct:30, color:'#C9A0DC'}]},
    {title:'热牛奶', desc:'牛奶 280ml 加热到 65℃，加糖 10g。', timer:90, act:'加热',
     add:[{name:'热牛奶', pct:50, color:'#FDFBF6'}]},
    {title:'组装', desc:'芋泥抹杯壁，放青稞，冲入热牛奶。', act:'倒入', add:[]}
  ]
},

{
  id:'coco-xianyu-xmilu', name:'鲜芋牛奶西米露', category:'奶茶', brands:['CoCo都可'], nocaf:true,
  method:'需煮', difficulty:2, temp:'冰', volume:500, bg:'#FEF5D0',
  layers:[
    {name:'芋头块', pct:22, color:'#C9A0DC'},
    {name:'西米', pct:20, color:'#FFF6DC'},
    {name:'牛奶', pct:58, color:'#FDFBF6'}
  ],
  intro:'**不含茶**，CoCo 点单率最高的一杯。芋头是切块不是芋泥，嚼得到真实颗粒。',
  ingredients:[
    {name:'荔浦芋头', amount:'150g'},
    {name:'小西米', amount:'50g'},
    {name:'牛奶', amount:'300ml'},
    {name:'糖', amount:'25g'}
  ],
  tools:['锅','蒸锅','杯子'],
  pitfalls:[
    '西米必须水沸下锅，冷水下会化。',
    '芋头切 2cm 块，太小会煮散。'
  ],
  fidelity:'CoCo 用糖水芋头罐头 + 现煮西米，家庭用鲜芋头更香但要处理好。',
  steps:[
    {title:'蒸芋头', desc:'芋头切 2cm 块，蒸 20 分钟。', timer:1200, act:'加热',
     add:[{name:'芋头块', pct:22, color:'#C9A0DC'}]},
    {title:'煮西米', desc:'水沸下西米煮 15 分钟，焖 8 分钟，过冷水。', timer:900, act:'加热',
     add:[{name:'西米', pct:20, color:'#FFF6DC'}]},
    {title:'调牛奶', desc:'牛奶 300ml + 糖 25g 搅匀，冰镇。', act:'搅拌',
     add:[{name:'牛奶', pct:50, color:'#FDFBF6'}]},
    {title:'组装', desc:'芋头块和西米放杯底，倒冷牛奶。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'coco-hongguo', name:'红果小姐姐', category:'果茶', brands:['CoCo都可'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#FC8A9A',
  layers:[
    {name:'红心火龙果', pct:44, color:'#D6296E'},
    {name:'酸奶冰沙', pct:56, color:'#FDF0F2'}
  ],
  intro:'**不含茶**，CoCo 的低糖明星款。红心火龙果 + 酸奶打冰沙，颜值极高，热量低、饱腹感强。',
  ingredients:[
    {name:'红心火龙果', amount:'200g'},
    {name:'浓稠酸奶', amount:'180g'},
    {name:'牛奶', amount:'50ml'},
    {name:'蜂蜜', amount:'10g', optional:true},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '火龙果染手染衣服，小心操作。',
    '酸奶要浓稠型，稀的会变成饮料。'
  ],
  fidelity:'CoCo 用定制酸奶基底，家庭用希腊酸奶能到九成。',
  steps:[
    {title:'处理火龙果', desc:'火龙果去皮切块。', act:'备料',
     add:[{name:'红心火龙果', pct:42, color:'#D6296E'}]},
    {title:'打冰沙', desc:'火龙果 + 酸奶 + 牛奶 + 冰，打 25 秒。', timer:25, act:'打泥',
     add:[{name:'酸奶冰沙', pct:50, color:'#FDF0F2'}]},
    {title:'装杯', desc:'倒入杯子，可留几块果肉铺面。', act:'倒入', add:[]}
  ]
},

{
  id:'coco-muxue-naigai', name:'慕斯奶盖绿茶', category:'特调', brands:['CoCo都可'],
  method:'打泡', difficulty:2, temp:'冰', volume:500, bg:'#86EFAC',
  layers:[
    {name:'茉莉绿茶', pct:68, color:'#DCE3B8'},
    {name:'慕斯奶盖', pct:32, color:'#FFF8E7'}
  ],
  intro:'CoCo 的奶盖系列，特点是**奶盖特别厚**，能占三分之一。慕斯质地比一般奶盖更蓬松。',
  ingredients:[
    {name:'茉莉绿茶', amount:'8g'},
    {name:'热水', amount:'250ml', note:'85℃'},
    {name:'淡奶油', amount:'90ml'},
    {name:'牛奶', amount:'40ml'},
    {name:'糖', amount:'12g'},
    {name:'盐', amount:'1g'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '奶盖要打蓬松，体积能涨一倍才算慕斯感。',
    '绿茶要够清香才托得住厚奶盖。'
  ],
  fidelity:'CoCo 用慕斯粉现打，家庭用淡奶油能到八五成，蓬松度会差一点。',
  steps:[
    {title:'泡绿茶', desc:'85℃ 水 250ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:66, color:'#DCE3B8'}]},
    {title:'打慕斯奶盖', desc:'淡奶油 + 牛奶 + 糖 + 盐，打到体积膨胀、能缓慢流动。', timer:100, act:'搅拌',
     add:[{name:'慕斯奶盖', pct:30, color:'#FFF8E7'}]},
    {title:'铺顶', desc:'茶汤倒杯加冰，厚厚铺一层奶盖。', act:'铺面',
     add:[{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
},

{
  id:'hsay-houyuni', name:'厚芋泥波波奶茶', category:'奶茶', brands:['沪上阿姨'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#E879F9',
  layers:[
    {name:'厚芋泥', pct:34, color:'#C9A0DC'},
    {name:'黑糖啵啵', pct:18, color:'#3A2418'},
    {name:'红茶奶茶', pct:48, color:'#D9B48C'}
  ],
  intro:'芋泥约占杯身三分之一，**能当代餐**。手捣荔浦芋泥带颗粒感，黑糖啵啵 Q 弹，红茶底故意做淡不抢戏。',
  ingredients:[
    {name:'荔浦芋头', amount:'250g'},
    {name:'黑糖啵啵', amount:'70g'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖', amount:'20g'},
    {name:'淡奶油', amount:'30ml'}
  ],
  tools:['蒸锅','锅','杯子'],
  pitfalls:[
    '芋泥要打得厚，稀了就「厚」不起来。',
    '红茶底要淡，浓了会盖掉芋香。'
  ],
  fidelity:'沪上阿姨用手捣芋泥，家庭现蒸现压能到九成五，这是最容易复刻的一款。',
  steps:[
    {title:'蒸芋头', desc:'芋头去皮切块，蒸 25 分钟到透。', timer:1500, act:'加热', add:[]},
    {title:'压厚芋泥', desc:'加糖 12g、淡奶油 30ml，压成带颗粒的厚泥。', act:'捣碎',
     add:[{name:'厚芋泥', pct:34, color:'#C9A0DC'}]},
    {title:'煮啵啵', desc:'黑糖啵啵煮 5-8 分钟到浮起，过冷水。', timer:480, act:'加热',
     add:[{name:'黑糖啵啵', pct:18, color:'#3A2418'}]},
    {title:'调淡奶茶', desc:'红茶 150ml + 鲜奶 150ml + 糖 8g。', act:'搅拌',
     add:[{name:'红茶奶茶', pct:42, color:'#D9B48C'}]},
    {title:'组装', desc:'芋泥抹杯壁和杯底，放啵啵，倒奶茶。', act:'铺面',
     add:[{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'hsay-xianxian-qingti', name:'仙仙玫瑰青提', category:'果茶', brands:['沪上阿姨'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#B8F0D8',
  layers:[
    {name:'青提果肉', pct:26, color:'#A8D060'},
    {name:'玫瑰冻冻', pct:14, color:'#F5C8D8'},
    {name:'茉莉茶汤', pct:60, color:'#D4E89E'}
  ],
  intro:'阳光玫瑰 + 玫瑰香的组合，浅绿清爽。玫瑰酱自带甜度，**低糖更显茶香**。加玫瑰冻更绝。',
  ingredients:[
    {name:'阳光玫瑰葡萄', amount:'150g'},
    {name:'茉莉绿茶', amount:'180ml'},
    {name:'玫瑰酱', amount:'20g'},
    {name:'白凉粉', amount:'3g', optional:true},
    {name:'玫瑰花瓣', amount:'约 3 瓣', optional:true, note:'干玫瑰花瓣，撒表面'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '玫瑰酱本身甜，糖可以不加。',
    '青提籽必须去干净，打碎会苦。'
  ],
  fidelity:'沪上阿姨用定制玫瑰酱，家庭用进口玫瑰酱能到八成五。',
  steps:[
    {title:'处理青提', desc:'青提去籽，一半对半切。', act:'备料',
     add:[{name:'青提果肉', pct:26, color:'#A8D060'}]},
    {title:'泡茶', desc:'85℃ 水 180ml 泡 3 分钟放凉。', timer:180, act:'冲泡',
     add:[{name:'茉莉茶汤', pct:56, color:'#D4E89E'}]},
    {title:'摇匀', desc:'茶汤 + 玫瑰酱摇 10 秒。', timer:10, act:'摇匀', add:[]},
    {title:'加冻冻', desc:'青提和玫瑰冻冻垫底，倒茶汤加冰。', act:'铺面',
     add:[{name:'玫瑰冻冻', pct:12, color:'#F5C8D8'},{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'hsay-fugui-mashu', name:'富桂米麻薯牛乳茶', category:'奶茶', brands:['沪上阿姨'],
  method:'需煮', difficulty:3, temp:'热', volume:500, bg:'#FAE8A0',
  layers:[
    {name:'米麻薯', pct:24, color:'#F5EFE0'},
    {name:'金桂黄茶', pct:40, color:'#E0C878'},
    {name:'牛乳', pct:36, color:'#FDFBF6'}
  ],
  intro:'秋冬季爆款，**金桂 + 黄茶 + 米麻薯**。米麻薯用大米和糯米粉做，比普通麻薯更清爽，糯而不腻。热饮最佳。',
  ingredients:[
    {name:'黄茶', amount:'7g', note:'或君山银针、蒙顶黄芽'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'大米', amount:'40g', note:'做米麻薯'},
    {name:'糯米粉', amount:'20g'},
    {name:'牛奶', amount:'180ml'},
    {name:'干桂花', amount:'1g'},
    {name:'糖', amount:'20g'}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '米麻薯要煮到能拉丝，小火不停搅，一停就糊底。',
    '黄茶是轻发酵茶，85℃ 泡 2 分半就够，久了苦。'
  ],
  fidelity:'沪上阿姨用预制米麻薯，家庭现做费时但更香。',
  steps:[
    {title:'泡黄茶', desc:'85℃ 水 200ml 泡 2 分半，滤掉茶叶。', timer:150, act:'冲泡',
     add:[{name:'金桂黄茶', pct:40, color:'#E0C878'}]},
    {title:'做米麻薯', desc:'大米煮熟打成浆，加糯米粉小火煮 5 分钟到拉丝。', timer:300, act:'加热',
     add:[{name:'米麻薯', pct:24, color:'#F5EFE0'}]},
    {title:'热牛奶', desc:'牛奶 180ml 加热到 65℃，加糖 20g。', timer:90, act:'加热',
     add:[{name:'牛乳', pct:34, color:'#FDFBF6'}]},
    {title:'组装', desc:'米麻薯铺底，冲入热牛乳和茶汤，撒干桂花。', act:'铺面',
     add:[{name:'干桂花', pct:2, color:'#E8B923'}]}
  ]
},

{
  id:'hsay-xigua-yeye', name:'西瓜椰椰', category:'果茶', brands:['沪上阿姨'], nocaf:true,
  method:'摇匀', difficulty:1, temp:'冰', volume:700, bg:'#F9B4B4',
  layers:[
    {name:'西瓜果肉', pct:36, color:'#E8564E'},
    {name:'椰乳', pct:42, color:'#F0DFC8'},
    {name:'脆波波', pct:10, color:'#F0E0C0'},
    {name:'冰块', pct:12, color:'#DCEFF6'}
  ],
  intro:'**不含茶**，夏日清爽天花板。清甜西瓜原汁配椰乳，自带脆啵啵。大桶装可以两个人分。',
  ingredients:[
    {name:'西瓜', amount:'400g', note:'冰镇无籽西瓜'},
    {name:'厚椰乳', amount:'150ml'},
    {name:'脆波波', amount:'40g', optional:true},
    {name:'糖浆', amount:'10ml', optional:true},
    {name:'冰块', amount:'约 200g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '西瓜够甜就别加糖，先尝。',
    '椰乳要冷藏过，常温会浮油。'
  ],
  fidelity:'沪上阿姨用鲜榨西瓜汁 + 椰乳，家庭完全可复刻。',
  steps:[
    {title:'打西瓜汁', desc:'西瓜去籽，一半打汁一半切丁。', timer:20, act:'打泥',
     add:[{name:'西瓜果肉', pct:36, color:'#E8564E'}]},
    {title:'混合', desc:'西瓜汁 + 厚椰乳 150ml，轻搅。', act:'搅拌',
     add:[{name:'椰乳', pct:42, color:'#F0DFC8'}]},
    {title:'装杯', desc:'放脆波波，倒混合液，加冰。', act:'铺冰',
     add:[{name:'脆波波', pct:10, color:'#F0E0C0'},{name:'冰块', pct:12, color:'#DCEFF6'}]}
  ]
},

{
  id:'hsay-lvdou', name:'绿豆牛乳冰', category:'特调', brands:['沪上阿姨'], nocaf:true,
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#D9F0C0',
  layers:[
    {name:'绿豆沙', pct:44, color:'#8BAF6A'},
    {name:'牛乳冰沙', pct:56, color:'#F5F6E8'}
  ],
  intro:'**不含茶**，带皮大明绿豆沙打底。童年那味儿，夏天解暑的替代选择，比西瓜桶更扛饿。',
  ingredients:[
    {name:'绿豆', amount:'120g', note:'带皮绿豆，提前泡 4 小时'},
    {name:'牛奶', amount:'200ml'},
    {name:'糖', amount:'40g'},
    {name:'冰块', amount:'约 200g'}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '绿豆不泡直接煮要 1 小时，且不容易起沙。',
    '想要起沙效果，煮的时候别盖盖子。'
  ],
  fidelity:'沪上阿姨用带皮绿豆现煮，家庭用同款原料可完全复刻。',
  steps:[
    {title:'泡绿豆', desc:'绿豆 120g 泡 4 小时。', timer:14400, act:'浸泡', add:[]},
    {title:'煮绿豆沙', desc:'加水没过两指，煮 40 分钟到开花起沙，加糖 40g。', timer:2400, act:'加热',
     add:[{name:'绿豆沙', pct:44, color:'#8BAF6A'}]},
    {title:'打冰沙', desc:'绿豆沙放凉 + 牛奶 + 冰块，打 20 秒。', timer:20, act:'打泥',
     add:[{name:'牛乳冰沙', pct:50, color:'#F5F6E8'}]},
    {title:'装杯', desc:'倒入杯子，表面留一点绿豆沙点缀。', act:'铺面', add:[]}
  ]
},

{
  id:'hsay-niuyouguo-shannaixi', name:'牛油果巴旦木酸奶昔', category:'特调', brands:['沪上阿姨'], nocaf:true,
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#B4F0CC',
  layers:[
    {name:'牛油果泥', pct:46, color:'#7BA05B'},
    {name:'酸奶', pct:40, color:'#FDFBF6'},
    {name:'巴旦木碎', pct:14, color:'#D9C4A0'}
  ],
  intro:'**不含茶**，像液体牛油果甜品。加海盐巴旦木碎，咸香压住牛油果的腻。当早餐代餐都行。',
  ingredients:[
    {name:'牛油果', amount:'1 个', note:'熟透的'},
    {name:'浓稠酸奶', amount:'180g'},
    {name:'巴旦木', amount:'25g', note:'烤过的，压碎'},
    {name:'海盐', amount:'1g'},
    {name:'蜂蜜', amount:'15g', optional:true},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '牛油果不熟会涩，按压微软才算好。',
    '巴旦木要最后撒，打进去会失去脆感。'
  ],
  fidelity:'沪上阿姨用活菌酸奶，家庭用希腊酸奶能到九成。',
  steps:[
    {title:'处理牛油果', desc:'牛油果去核挖肉切块。', act:'备料',
     add:[{name:'牛油果泥', pct:44, color:'#7BA05B'}]},
    {title:'打酸奶昔', desc:'牛油果 + 酸奶 + 蜂蜜 + 冰，打 25 秒。', timer:25, act:'打泥',
     add:[{name:'酸奶', pct:36, color:'#FDFBF6'}]},
    {title:'撒坚果', desc:'装杯后撒压碎的巴旦木和海盐。', act:'铺面',
     add:[{name:'巴旦木碎', pct:14, color:'#D9C4A0'}]}
  ]
},

{
  id:'hsay-yuyi-ganlan', name:'羽衣甘蓝纤体瓶', category:'果茶', brands:['沪上阿姨'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#6EE89A',
  layers:[
    {name:'羽衣甘蓝汁', pct:44, color:'#5C8A3C'},
    {name:'青提苹果汁', pct:56, color:'#C8E0A0'}
  ],
  intro:'**不含茶**，12 种果蔬 + 奇亚籽，累计销量接近 1 亿杯。用柠檬青提的果香压住草味，不苦不涩，控卡期唯一能痛快喝的「液体沙拉」。',
  ingredients:[
    {name:'羽衣甘蓝', amount:'50g'},
    {name:'青提', amount:'80g'},
    {name:'苹果', amount:'半个'},
    {name:'柠檬汁', amount:'10ml'},
    {name:'奇亚籽', amount:'5g'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['料理机','滤网'],
  pitfalls:[
    '羽衣甘蓝去梗只取叶，梗很苦。',
    '奇亚籽要提前泡 10 分钟，直接打会沉底。'
  ],
  fidelity:'沪上阿姨用 12 种果蔬配比，家庭 4 种能达到八成，草味会更明显。',
  steps:[
    {title:'备料', desc:'羽衣甘蓝去梗，青提去籽，苹果去核。', act:'备料', add:[]},
    {title:'泡奇亚籽', desc:'奇亚籽 5g 加 30ml 水泡 10 分钟。', timer:600, act:'浸泡', add:[]},
    {title:'打汁', desc:'全部果蔬 + 柠檬汁 + 冰，打 30 秒。', timer:30, act:'打泥',
     add:[{name:'羽衣甘蓝汁', pct:42, color:'#5C8A3C'}]},
    {title:'混合装瓶', desc:'加入泡好的奇亚籽，搅匀装瓶。', act:'倒入',
     add:[{name:'青提苹果汁', pct:52, color:'#C8E0A0'}]}
  ]
}

]);

/* 古茗 5 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'gm-longjing-nailv', name:'龙井奶绿', category:'奶茶', brands:['古茗'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:500, bg:'#D4E8B0',
  layers:[
    {name:'龙井绿茶', pct:60, color:'#C8D890'},
    {name:'奶液', pct:40, color:'#F5EEDC'}
  ],
  intro:'古茗的奶绿，用龙井做底。龙井有独特的炒豆香，配奶之后有种「咸香感」，和茉莉奶绿完全不是一个路子。',
  ingredients:[
    {name:'龙井茶', amount:'7g', note:'明前或雨前龙井，香气更足'},
    {name:'热水', amount:'240ml', note:'85℃'},
    {name:'鲜奶', amount:'140ml'},
    {name:'糖浆', amount:'18ml'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '龙井是嫩芽绿茶，85℃ 泡 2 分半就够，沸水会苦。',
    '茶汤要放凉再加奶。'
  ],
  fidelity:'古茗用龙井拼配茶底，家庭用好一点的龙井能到九成。',
  steps:[
    {title:'泡龙井', desc:'85℃ 水 240ml 泡 2 分半，滤掉茶叶。', timer:150, act:'冲泡',
     add:[{name:'龙井绿茶', pct:60, color:'#C8D890'}]},
    {title:'降温', desc:'加冰搅到不烫手。', act:'降温',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加奶', desc:'倒鲜奶 140ml、糖浆 18ml，轻搅。', act:'倒入',
     add:[{name:'奶液', pct:32, color:'#F5EEDC'}]}
  ]
},

{
  id:'gm-chaoA-putao', name:'超A芝士葡萄', category:'果茶', brands:['古茗'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#CBC2FA',
  layers:[
    {name:'葡萄果冻', pct:22, color:'#5B3A6E'},
    {name:'葡萄茶汤', pct:52, color:'#8A5A9E'},
    {name:'芝士奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'和喜茶的多肉葡萄很像，但**多了葡萄果冻**，口感更 Q。古茗的性价比就体现在这。',
  ingredients:[
    {name:'巨峰葡萄', amount:'120g'},
    {name:'葡萄果冻', amount:'60g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'18ml'},
    {name:'奶油奶酪', amount:'25g'},
    {name:'淡奶油', amount:'50ml'},
    {name:'盐', amount:'1g'}
  ],
  tools:['摇壶','打泡器','杯子'],
  pitfalls:[
    '果冻切 1cm 见方，太大块会堵吸管。',
    '奶盖别打太稠，稠了会挂不住往下沉。'
  ],
  fidelity:'古茗用自制葡萄果冻，家庭买现成果冻口感接近。',
  steps:[
    {title:'剥葡萄', desc:'葡萄去皮去籽，一半压碎。', act:'备料',
     add:[{name:'葡萄', pct:30, color:'#6B4A78'}]},
    {title:'摇茶', desc:'茶汤 + 糖浆摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'葡萄茶汤', pct:44, color:'#8A5A9E'}]},
    {title:'打奶盖', desc:'奶酪 + 淡奶油 + 盐打发。', timer:70, act:'搅拌',
     add:[{name:'芝士奶盖', pct:22, color:'#FFF8E7'}]},
    {title:'组装', desc:'果冻和果肉垫底，倒茶汤加冰，铺奶盖。', act:'铺面',
     add:[{name:'葡萄果冻', pct:16, color:'#5B3A6E'},{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'mx-manbei-baixiang', name:'满杯百香果', category:'果茶', brands:['蜜雪冰城'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FCE85C',
  layers:[
    {name:'百香果籽', pct:16, color:'#D4A017'},
    {name:'百香果茶', pct:84, color:'#F5D76E'}
  ],
  intro:'九块钱一杯，酸得很直接。蜜雪的果茶系列主打便宜大杯，风味不如专业果茶店精细但够解渴。',
  ingredients:[
    {name:'百香果', amount:'3 个'},
    {name:'茉莉绿茶', amount:'180ml'},
    {name:'糖浆', amount:'30ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '百香果皮皱了才甜，光滑的偏酸。',
    '糖少了酸到没法喝，30ml 起步。'
  ],
  fidelity:'蜜雪用鲜果现挖，家庭完全可复刻。',
  steps:[
    {title:'挖百香果', desc:'3 个百香果连籽挖出。', act:'备料',
     add:[{name:'百香果籽', pct:16, color:'#D4A017'}]},
    {title:'泡茶', desc:'85℃ 水 180ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'茶汤', pct:46, color:'#E8C86A'}]},
    {title:'摇匀', desc:'全部加糖浆 30ml、冰，摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'百香果茶', pct:30, color:'#F5D76E'}]}
  ]
}

]);

/* 茶百道 3 款 */
window.DRINKS = (window.DRINKS || []).concat([

]);
