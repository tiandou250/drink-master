/* 果茶 26 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'grape', name:'多肉葡萄', category:'果茶', brands:['喜茶','古茗','卡旺卡'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#C4B5FD',
  layers:[
    {name:'葡萄果肉', pct:25, color:'#4A2A5C'},
    {name:'葡萄茶汤', pct:45, color:'#7B4A8C'},
    {name:'芝士奶盖', pct:30, color:'#FFF8E7'}
  ],
  intro:'整颗葡萄捣碎垫底，奶盖封顶。没有摇壶用保温杯也能做。',
  ingredients:[
    {name:'巨峰葡萄', amount:'150g', note:'冷冻 2 小时更好剥皮'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'20ml'},
    {name:'芝士奶盖', amount:'60g', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '葡萄皮和籽要去干净，否则发涩。',
    '奶盖要最后铺，早了会沉下去。'
  ],
  fidelity:'门店用鲜果现打，家庭版葡萄捣碎即可，口感会粗一点但更真实。',
  steps:[
    {title:'剥葡萄', desc:'冷冻过的葡萄用温水冲一下，皮一撕就掉。去籽。', act:'备料',
     add:[{name:'葡萄', pct:42, color:'#6B4A78'}]},
    {title:'捣碎垫底', desc:'留几颗完整的，其余用勺子压碎铺在杯底。', act:'捣碎',
     add:[{name:'葡萄果肉', pct:18, color:'#4A2A5C'}]},
    {title:'摇茶', desc:'茶汤 150ml + 糖浆 20ml 倒进摇壶，摇 15 秒。', timer:15, act:'摇匀', add:[]},
    {title:'倒入', desc:'摇好的茶汤倒进杯子，冰块加到八分满。', act:'倒入',
     add:[{name:'葡萄茶汤', pct:30, color:'#7B4A8C'},{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'铺奶盖', desc:'奶盖用勺子背铺在表面，别搅。', act:'铺面',
     add:[{name:'芝士奶盖', pct:22, color:'#FFF8E7'}]}
  ]
},

{
  id:'mango', name:'杨枝甘露', category:'果茶', brands:['茶百道','七分甜','卡旺卡','满记'], nocaf:true,
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FBCFE8',
  layers:[
    {name:'芒果泥', pct:40, color:'#F2A33C'},
    {name:'椰浆', pct:32, color:'#FBF3E0'},
    {name:'西米西柚', pct:28, color:'#FFF0C4'}
  ],
  intro:'芒果、椰浆、西米、西柚四样东西，煮西米是最容易翻车的一步。不加茶底，所以没有咖啡因。',
  ingredients:[
    {name:'芒果', amount:'150g', note:'台农或小台芒，甜度高'},
    {name:'椰浆', amount:'100ml', note:'不是椰奶饮料，要浓椰浆'},
    {name:'小西米', amount:'30g'},
    {name:'西柚', amount:'30g', optional:true},
    {name:'糖浆', amount:'15ml', optional:true}
  ],
  tools:['锅','料理机'],
  pitfalls:[
    '西米要水开了才下锅，冷水下会化掉。',
    '西米煮完必须过冷水，不然会粘成一坨。'
  ],
  fidelity:'门店用新鲜芒果泥，家庭版用料理机打会带一点纤维，反而更像手作。',
  steps:[
    {title:'煮西米', desc:'水沸后下西米，中火煮 15 分钟，煮到中间剩一个小白点。', timer:900, act:'加热',
     add:[{name:'西米', pct:55, color:'#FFF6DC'}]},
    {title:'焖西米', desc:'关火盖盖焖 8 分钟，白点消失就成了。', timer:480, act:'焖', add:[]},
    {title:'过冷水', desc:'倒进滤网冲冷水，冲到粒粒分明。', act:'冲洗', add:[]},
    {title:'打芒果泥', desc:'芒果切块，留几块装饰，其余打成泥。', act:'打泥',
     add:[{name:'芒果泥', pct:45, color:'#F2A33C'}]},
    {title:'混合', desc:'芒果泥 + 椰浆 + 糖浆拌匀，加冰块。', act:'搅拌',
     add:[{name:'椰浆', pct:25, color:'#FBF3E0'}]},
    {title:'加料收尾', desc:'撒西米、西柚粒、芒果块。', act:'铺面',
     add:[{name:'西米西柚', pct:18, color:'#FFF0C4'}]}
  ]
},

{
  id:'bqqi-chengzi', name:'霸气橙子', category:'果茶', brands:['奈雪的茶','喜茶'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FDBA74',
  layers:[
    {name:'橙子片', pct:20, color:'#F79B2E'},
    {name:'橙汁茶汤', pct:80, color:'#FBC56A'}
  ],
  intro:'整片橙子塞满杯，几乎是果茶里最直白的一杯。橙子要选皮薄的，皮厚会苦。',
  ingredients:[
    {name:'脐橙', amount:'1.5 个', note:'皮薄的赣南脐橙'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'20ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '橙子白瓤要削掉，皮厚会苦。',
    '橙子片切 3mm，太厚吸管吸不到汁。'
  ],
  fidelity:'奈雪用整颗现切橙子，家庭同款完全可复刻，还原度九成以上。',
  steps:[
    {title:'切橙子', desc:'削掉两头，切 3mm 厚片，白瓤修干净。', act:'备料',
     add:[{name:'橙子片', pct:22, color:'#F79B2E'}]},
    {title:'压橙汁', desc:'取三片橙子压出汁，连片一起留着。', act:'捣碎', add:[]},
    {title:'摇茶', desc:'茶汤 150ml + 橙汁 + 糖浆 20ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'橙汁茶汤', pct:68, color:'#FBC56A'}]},
    {title:'组装', desc:'杯子放橙子片，倒摇好的茶汤，加冰。', act:'倒入',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'bqqi-caomei', name:'霸气草莓', category:'果茶', brands:['奈雪的茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FDA4AF',
  layers:[
    {name:'草莓果肉', pct:32, color:'#E63B4E'},
    {name:'草莓茶汤', pct:44, color:'#F0778A'},
    {name:'芝士奶盖', pct:24, color:'#FFF8E7'}
  ],
  intro:'整颗草莓对半切贴在杯壁，那圈红边是颜值的关键。草莓不甜就全靠糖浆救。',
  ingredients:[
    {name:'草莓', amount:'200g', note:'红颜或章姬，香气足'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'25ml', note:'草莓酸就多放'},
    {name:'芝士奶盖', amount:'60g', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '草莓洗后要擦干，带水会稀释味道。',
    '贴杯壁的草莓片要切得薄，太厚会滑下来。'
  ],
  fidelity:'奈雪用当季鲜草莓现打，家庭版处理好草莓能到九成，关键是糖量。',
  steps:[
    {title:'处理草莓', desc:'草莓去蒂，一半切薄片贴杯壁，一半切块。', act:'备料',
     add:[{name:'草莓片', pct:16, color:'#E63B4E'}]},
    {title:'捣草莓', desc:'草莓块用勺子压出汁，留一点颗粒。', act:'捣碎',
     add:[{name:'草莓果肉', pct:20, color:'#E63B4E'}]},
    {title:'摇茶', desc:'茶汤 150ml + 草莓汁 + 糖浆 25ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'草莓茶汤', pct:40, color:'#F0778A'}]},
    {title:'倒入铺奶盖', desc:'倒进杯子加冰，最后铺奶盖。', act:'铺面',
     add:[{name:'芝士奶盖', pct:22, color:'#FFF8E7'}]}
  ]
},

{
  id:'chaoche', name:'超 A 芝士葡萄', category:'果茶', brands:['古茗'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#DDD6FE',
  layers:[
    {name:'葡萄果冻', pct:22, color:'#5B3A6E'},
    {name:'葡萄茶汤', pct:52, color:'#8A5A9E'},
    {name:'芝士奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'和喜茶的多肉葡萄很像，但多了葡萄果冻，口感更 Q。古茗的性价比在这里体现。',
  ingredients:[
    {name:'巨峰葡萄', amount:'120g'},
    {name:'葡萄果冻', amount:'60g', note:'买现成的，或葡萄汁 + 白凉粉自制'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'18ml'},
    {name:'芝士奶盖', amount:'50g', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '果冻切太大块会堵吸管，1cm 见方正好。',
    '奶盖别打太稠，稠了会挂不住往下沉。'
  ],
  fidelity:'古茗用自制葡萄果冻，家庭买现成果冻口感接近，自己用白凉粉做也简单。',
  steps:[
    {title:'剥葡萄', desc:'葡萄去皮去籽，一半压碎。', act:'备料',
     add:[{name:'葡萄', pct:30, color:'#6B4A78'}]},
    {title:'摇茶', desc:'茶汤 + 糖浆摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'葡萄茶汤', pct:44, color:'#8A5A9E'}]},
    {title:'组装', desc:'杯底放葡萄果冻和果肉，倒茶汤加冰。', act:'倒入',
     add:[{name:'葡萄果冻', pct:16, color:'#5B3A6E'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'铺奶盖', desc:'表面铺芝士奶盖。', act:'铺面',
     add:[{name:'芝士奶盖', pct:20, color:'#FFF8E7'}]}
  ]
},

{
  id:'niuyouguo-suannai', name:'牛油果酸奶', category:'果茶', brands:['茉酸奶'], nocaf:true,
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#BBF7D0',
  layers:[
    {name:'牛油果泥', pct:45, color:'#7BA05B'},
    {name:'厚酸奶', pct:55, color:'#FDFBF6'}
  ],
  intro:'茉酸奶的看家货。牛油果要熟到按压有凹陷，硬的口感像肥皂。',
  ingredients:[
    {name:'牛油果', amount:'1 个', note:'熟透的，皮发黑按压微软'},
    {name:'浓稠酸奶', amount:'200g', note:'希腊酸奶或老酸奶'},
    {name:'牛奶', amount:'50ml'},
    {name:'蜂蜜', amount:'15g', optional:true},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '牛油果不熟会涩，宁可多放两天。',
    '没加冰打会太稠，吸管吸不上来。'
  ],
  fidelity:'茉酸奶用冷冻牛油果块，家庭鲜果更香，但要挑熟透的。',
  steps:[
    {title:'取果肉', desc:'牛油果对半切，去核，挖出果肉切块。', act:'备料',
     add:[{name:'牛油果泥', pct:42, color:'#7BA05B'}]},
    {title:'打泥', desc:'牛油果 + 牛奶 50ml + 蜂蜜，打成顺滑泥。', timer:30, act:'打泥', add:[]},
    {title:'加酸奶打匀', desc:'倒酸奶 200g 和冰块，再打 20 秒到绵密。', timer:20, act:'搅拌',
     add:[{name:'厚酸奶', pct:52, color:'#FDFBF6'}]},
    {title:'装杯', desc:'倒进杯子，表面可以撒点坚果碎。', act:'倒入', add:[]}
  ]
},

{
  id:'lizhi-niang', name:'荔枝冰酿', category:'果茶', brands:['爷爷不泡茶'],
  method:'需煮', difficulty:3, temp:'冰', volume:500, bg:'#FCE7F3',
  layers:[
    {name:'孝感米酿', pct:28, color:'#F5EBDC'},
    {name:'荔枝果肉', pct:18, color:'#FBEAF0'},
    {name:'花魁单丛茶', pct:38, color:'#D9B878'},
    {name:'桂花冻', pct:16, color:'#F0E3C0'}
  ],
  intro:'用湖北非遗孝感米酿打底，是这杯最特别的地方。米酒的醇、荔枝的鲜、单丛的甘爽，三层叠着来。',
  ingredients:[
    {name:'孝感米酒', amount:'100g', note:'带米粒的那种，不是米酒饮料'},
    {name:'荔枝', amount:'80g', note:'妃子笑，去核'},
    {name:'花魁单丛茶叶', amount:'6g'},
    {name:'热水', amount:'180ml', note:'95℃'},
    {name:'桂花冻', amount:'60g', note:'白凉粉 + 桂花蜜自制'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['锅','杯子','滤网'],
  pitfalls:[
    '米酒不能用米酒饮料替代，那个没米粒也没酒香。',
    '单丛茶要快出汤，泡久了苦涩会压掉荔枝甜。'
  ],
  fidelity:'孝感米酿是核心，本地买得到朱湖产的珍珠糯米 + 蜂窝酒曲做的，外地用超市米酒会差一层。',
  steps:[
    {title:'做桂花冻', desc:'白凉粉 5g + 热水 100ml + 桂花蜜 10ml 化开，冷藏 2 小时切块。', timer:7200, act:'焖',
     add:[{name:'桂花冻', pct:16, color:'#F0E3C0'}]},
    {title:'泡单丛', desc:'95℃ 水 180ml 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'花魁单丛茶', pct:36, color:'#D9B878'}]},
    {title:'处理荔枝', desc:'荔枝去壳去核，取一半压出汁。', act:'捣碎',
     add:[{name:'荔枝果肉', pct:18, color:'#FBEAF0'}]},
    {title:'铺米酿', desc:'杯底放米酒 100g 和荔枝果肉。', act:'备料',
     add:[{name:'孝感米酿', pct:26, color:'#F5EBDC'}]},
    {title:'倒茶', desc:'沿杯壁倒单丛茶汤，加冰块。', act:'倒入',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'加桂花冻', desc:'最后放桂花冻块。', act:'铺面', add:[]}
  ]
},

{
  id:'shoubo', name:'手剥大橘', category:'果茶', brands:['卡旺卡'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FED7AA',
  layers:[
    {name:'橘子果肉', pct:34, color:'#F79B2E'},
    {name:'茉莉果冻', pct:16, color:'#F0EBD8'},
    {name:'茉莉茶汤', pct:50, color:'#F5D9A0'}
  ],
  intro:'名字说得很实在——真的一粒一粒手剥，半杯都是橘肉。橘子要用蜜橘，别用砂糖橘，太小。',
  ingredients:[
    {name:'蜜橘', amount:'4 个', note:'剥出果肉约 150g'},
    {name:'茉莉白毫', amount:'6g'},
    {name:'热水', amount:'180ml', note:'85℃'},
    {name:'茉莉果冻', amount:'50g', optional:true},
    {name:'糖浆', amount:'15ml'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '橘子瓣上的白膜要撕掉，不撕会苦。',
    '果肉别压太碎，要能吃到颗粒。'
  ],
  fidelity:'卡旺卡手剥现做，家庭版自己剥 4 个橘子大约 10 分钟，是这杯最费时的地方。',
  steps:[
    {title:'剥橘子', desc:'4 个蜜橘剥出果肉，撕掉白膜。', act:'备料', add:[]},
    {title:'泡茉莉茶', desc:'85℃ 水 180ml 泡 3 分钟。', timer:180, act:'冲泡',
     add:[{name:'茉莉茶汤', pct:48, color:'#F5D9A0'}]},
    {title:'组装', desc:'杯底放橘肉和茉莉果冻，倒茶汤加糖浆。', act:'倒入',
     add:[{name:'橘子果肉', pct:32, color:'#F79B2E'},{name:'茉莉果冻', pct:14, color:'#F0EBD8'}]},
    {title:'加冰', desc:'补冰块到八分满。', act:'铺冰',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'mancheng', name:'满杯橙橙', category:'果茶', brands:['真茶屋'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FFEDD5',
  layers:[
    {name:'鲜橙片', pct:22, color:'#F79B2E'},
    {name:'橙汁绿茶', pct:78, color:'#FBC56A'}
  ],
  intro:'真茶屋的开业赠饮，名字直接说明——一整杯橙子。跟霸气橙子结构一样，但更甜。',
  ingredients:[
    {name:'鲜橙', amount:'2 个'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'22ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '橙子要选甜的，酸橙靠糖浆救不回来。',
    '茶汤别太浓，会压住橙子香。'
  ],
  fidelity:'真茶屋用当季鲜橙，家庭版完全可复刻。',
  steps:[
    {title:'切橙', desc:'两个橙子切薄片，留几片备用，其余压汁。', act:'备料',
     add:[{name:'鲜橙片', pct:20, color:'#F79B2E'}]},
    {title:'摇匀', desc:'橙汁 + 茶汤 150ml + 糖浆 22ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'橙汁绿茶', pct:70, color:'#FBC56A'}]},
    {title:'组装', desc:'橙片贴杯壁，倒入茶汤加冰。', act:'倒入',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'guihua-suannai', name:'桂花酸奶', category:'果茶', brands:['卡旺卡'], nocaf:true,
  method:'直调', difficulty:2, temp:'冰', volume:500, bg:'#FEF3C7',
  layers:[
    {name:'桂花冰粉', pct:30, color:'#F5E6C8'},
    {name:'浓稠酸奶', pct:55, color:'#FDFBF6'},
    {name:'芋圆', pct:15, color:'#E8D5C4'}
  ],
  intro:'卡旺卡的无茶招牌。酸奶打底、桂花冰粉铺面、芋圆沉底，一口下去全是料。',
  ingredients:[
    {name:'浓稠酸奶', amount:'200g', note:'要能挂住勺子的那种，不是酸奶饮料'},
    {name:'桂花冰粉', amount:'80g', note:'冰粉粉 5g + 热水 100ml + 桂花蜜 10g 自做'},
    {name:'芋圆', amount:'40g', note:'冷冻芋圆，煮 8 分钟'},
    {name:'桂花蜜', amount:'15ml', optional:true}
  ],
  tools:['碗','杯子'],
  pitfalls:[
    '酸奶太稀会沉底，和桂花冰粉混成糊，必须用浓稠型。',
    '冰粉要放凉凝固后再切块，热的倒进去会化。'
  ],
  fidelity:'门店用现煮芋圆和自制桂花冰粉，家庭版用冷冻芋圆加冰粉粉，桂花香会淡一些。',
  steps:[
    {title:'煮芋圆', desc:'水沸下芋圆，煮到全部浮起来，再煮 2 分钟。', timer:480, act:'加热',
     add:[{name:'芋圆', pct:18, color:'#E8D5C4'}]},
    {title:'过冷水', desc:'捞出冲冷水，冲到不粘手为止。', act:'冲洗', add:[]},
    {title:'铺酸奶', desc:'浓稠酸奶 200g 倒进杯子，占六成。', act:'倒入',
     add:[{name:'酸奶', pct:54, color:'#FDFBF6'}]},
    {title:'加桂花冰粉', desc:'冰粉切小块铺在酸奶上，淋桂花蜜。', act:'铺面',
     add:[{name:'桂花冰粉', pct:28, color:'#F5E6C8'}]}
  ]
},

{
  id:'zhizhi-meimei', name:'芝芝莓莓', category:'果茶', brands:['喜茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F9A8D4',
  layers:[
    {name:'草莓果泥', pct:30, color:'#E63B4E'},
    {name:'草莓茶', pct:44, color:'#F0778A'},
    {name:'芝士奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'和霸气草莓的区别在草莓的形态：这杯是果泥，喝起来更顺、更浓，没有整颗的咀嚼感。',
  ingredients:[
    {name:'草莓', amount:'180g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'22ml'},
    {name:'芝士奶盖', amount:'60g'}
  ],
  tools:['料理机','摇壶','杯子'],
  pitfalls:[
    '果泥打太细会失去层次，打 10 秒就够。',
    '奶盖厚度决定颜值，至少 1.5cm。'
  ],
  fidelity:'喜茶用鲜果现打，家庭版完全可复刻，注意草莓要够熟。',
  steps:[
    {title:'打果泥', desc:'草莓 180g 加糖浆 10ml，打 10 秒成粗果泥。', timer:10, act:'打泥',
     add:[{name:'草莓果泥', pct:32, color:'#E63B4E'}]},
    {title:'摇茶', desc:'茶汤 + 糖浆 12ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'草莓茶', pct:40, color:'#F0778A'}]},
    {title:'组装', desc:'果泥垫底，倒茶汤加冰。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'铺奶盖', desc:'表面铺厚厚一层芝士奶盖。', act:'铺面',
     add:[{name:'芝士奶盖', pct:20, color:'#FFF8E7'}]}
  ]
},

{
  id:'duorou-taotao', name:'多肉桃桃', category:'果茶', brands:['喜茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FECDD3',
  layers:[
    {name:'桃肉', pct:30, color:'#F49AC1'},
    {name:'桃汁茶汤', pct:52, color:'#FBC4D8'},
    {name:'芝士奶盖', pct:18, color:'#FFF8E7'}
  ],
  intro:'水蜜桃要选软的，硬的切不动也压不出汁。桃子的绒毛用盐搓一遍就掉了。',
  ingredients:[
    {name:'水蜜桃', amount:'1.5 个', note:'软熟的，能捏动'},
    {name:'乌龙茶', amount:'150ml'},
    {name:'糖浆', amount:'15ml'},
    {name:'芝士奶盖', amount:'50g', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '桃子硬的话先用糖腌 15 分钟出水。',
    '桃肉接触空气会氧化发褐，做完尽快喝。'
  ],
  fidelity:'喜茶用当季鲜桃，家庭版选软桃能到九成，硬桃差很多。',
  steps:[
    {title:'处理桃', desc:'盐搓掉绒毛，去皮切块，一半压成泥。', act:'备料',
     add:[{name:'桃肉', pct:28, color:'#F49AC1'}]},
    {title:'摇茶', desc:'乌龙茶 150ml + 糖浆 15ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'桃汁茶汤', pct:48, color:'#FBC4D8'}]},
    {title:'组装', desc:'桃泥垫底，倒茶汤加冰。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'铺奶盖', desc:'表面铺芝士奶盖。', act:'铺面',
     add:[{name:'芝士奶盖', pct:14, color:'#FFF8E7'}]}
  ]
},

{
  id:'shengye-yangzhi', name:'生椰杨枝甘露', category:'果茶', brands:['喜茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FEF08A',
  layers:[
    {name:'芒果泥', pct:34, color:'#F2A33C'},
    {name:'厚椰乳', pct:36, color:'#F0DFC8'},
    {name:'西米', pct:20, color:'#FFF6DC'},
    {name:'西柚粒', pct:10, color:'#F08080'}
  ],
  intro:'跟经典杨枝甘露的区别是椰浆换成厚椰乳，奶感更重、更浓。椰乳要用冷藏的。',
  ingredients:[
    {name:'芒果', amount:'150g'},
    {name:'厚椰乳', amount:'120ml', note:'冷藏'},
    {name:'小西米', amount:'30g'},
    {name:'西柚', amount:'30g'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '厚椰乳不冷藏会有油膜，整杯腥。',
    '厚椰乳比椰浆甜，糖要减半。'
  ],
  fidelity:'喜茶用厚椰乳替代椰浆，家庭同款可复刻，甜度自己控。',
  steps:[
    {title:'煮西米', desc:'水沸下西米煮 15 分钟，关火焖 8 分钟。', timer:900, act:'加热',
     add:[{name:'西米', pct:20, color:'#FFF6DC'}]},
    {title:'过冷水', desc:'滤网冲冷水到粒粒分明。', act:'冲洗', add:[]},
    {title:'打芒果泥', desc:'芒果打成泥。', act:'打泥',
     add:[{name:'芒果泥', pct:34, color:'#F2A33C'}]},
    {title:'调椰乳', desc:'芒果泥 + 厚椰乳 120ml + 糖浆拌匀。', act:'搅拌',
     add:[{name:'厚椰乳', pct:32, color:'#F0DFC8'}]},
    {title:'加料', desc:'撒西米和西柚粒，加冰。', act:'铺面',
     add:[{name:'西柚粒', pct:10, color:'#F08080'}]}
  ]
},

{
  id:'yuyougan', name:'霸气玉油柑', category:'果茶', brands:['奈雪的茶'],
  method:'摇匀', difficulty:3, temp:'冰', volume:400, bg:'#D9F99D',
  layers:[
    {name:'油柑汁', pct:62, color:'#B8C76A'},
    {name:'茉莉绿茶', pct:38, color:'#DDE3B8'}
  ],
  intro:'第一口涩到皱眉，三秒后满嘴回甘。这个体验极两极，爱的人天天喝，不爱的一口都受不了。',
  ingredients:[
    {name:'油柑', amount:'200g', note:'新鲜油柑，去核'},
    {name:'茉莉绿茶', amount:'120ml'},
    {name:'糖浆', amount:'30ml', note:'油柑很涩，糖不能省'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['料理机','摇壶','杯子'],
  pitfalls:[
    '油柑核必须去干净，核有微毒且极涩。',
    '糖少了没法入口，别怕多。'
  ],
  fidelity:'奈雪用冷链油柑现打，家庭买鲜果需冷藏，放久会氧化变褐。',
  steps:[
    {title:'处理油柑', desc:'油柑去核，取果肉 150g。', act:'备料', add:[]},
    {title:'打汁', desc:'油柑 + 糖浆 30ml + 少量水，打 20 秒。', timer:20, act:'打泥',
     add:[{name:'油柑汁', pct:58, color:'#B8C76A'}]},
    {title:'摇匀', desc:'油柑汁 + 茶汤 120ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'茉莉绿茶', pct:34, color:'#DDE3B8'}]},
    {title:'加冰', desc:'倒进杯子补冰。', act:'铺冰',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'yangmei-bing', name:'杨梅冰', category:'果茶', brands:['古茗','奈雪的茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#E9D5FF',
  layers:[
    {name:'杨梅果肉', pct:28, color:'#7B1E3A'},
    {name:'杨梅汁', pct:46, color:'#A8365C'},
    {name:'冰沙', pct:26, color:'#E8C9D4'}
  ],
  intro:'杨梅的季节很短，六月中到七月初。冷冻杨梅能续命，但香气会淡三成。',
  ingredients:[
    {name:'杨梅', amount:'200g', note:'东魁杨梅，果大肉厚'},
    {name:'糖浆', amount:'30ml'},
    {name:'盐', amount:'5g', note:'泡杨梅去虫用'},
    {name:'冰块', amount:'约 200g'}
  ],
  tools:['料理机','摇壶','杯子'],
  pitfalls:[
    '杨梅要用盐水泡 15 分钟，里面可能有虫。',
    '杨梅核别混进去，打碎了会苦。'
  ],
  fidelity:'门店用冷链鲜杨梅，家庭用冷冻也能做，但要加糖补香气。',
  steps:[
    {title:'泡杨梅', desc:'盐水泡 15 分钟，冲洗干净。', timer:900, act:'浸泡', add:[]},
    {title:'取肉', desc:'杨梅去核取肉，一半压碎。', act:'捣碎',
     add:[{name:'杨梅果肉', pct:30, color:'#7B1E3A'}]},
    {title:'摇匀', desc:'果肉 + 糖浆 30ml + 少量水摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'杨梅汁', pct:42, color:'#A8365C'}]},
    {title:'打冰沙', desc:'加冰块打 15 秒成粗冰沙。', timer:15, act:'打泥',
     add:[{name:'冰沙', pct:24, color:'#E8C9D4'}]}
  ]
},

{
  id:'baixiang', name:'超级百香果', category:'果茶', brands:['古茗'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FDE047',
  layers:[
    {name:'百香果籽', pct:18, color:'#D4A017'},
    {name:'百香果汁茶', pct:82, color:'#F5D76E'}
  ],
  intro:'酸到牙软的那种酸，喜欢的人当成夏天必需品。籽要留着，那是口感的一部分。',
  ingredients:[
    {name:'百香果', amount:'3 个', note:'表皮皱的最好，越皱越甜'},
    {name:'茉莉绿茶', amount:'180ml'},
    {name:'糖浆', amount:'35ml', note:'百香果很酸，糖要够'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '糖少了酸到没法喝，35ml 起步。',
    '籽不用滤，滤掉就没有那口咬到籽的乐趣了。'
  ],
  fidelity:'古茗用鲜果现挖，家庭版完全可复刻。',
  steps:[
    {title:'挖果肉', desc:'百香果对半切，连籽挖出 3 个的量。', act:'备料',
     add:[{name:'百香果籽', pct:20, color:'#D4A017'}]},
    {title:'摇匀', desc:'果肉 + 茶汤 180ml + 糖浆 35ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'百香果汁茶', pct:70, color:'#F5D76E'}]},
    {title:'装杯', desc:'倒入杯子，补冰到八分满。', act:'铺冰',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'caomei-luoluo', name:'草莓酪酪', category:'果茶', brands:['乐乐茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FFE4E6',
  layers:[
    {name:'草莓果肉', pct:28, color:'#E63B4E'},
    {name:'草莓茶', pct:46, color:'#F0778A'},
    {name:'酪酪奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'乐乐茶的酪酪系列，奶盖里加了奶油奶酪，比普通芝士奶盖更厚、更咸香。',
  ingredients:[
    {name:'草莓', amount:'180g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'50ml'},
    {name:'糖', amount:'20g'},
    {name:'盐', amount:'1g'}
  ],
  tools:['打泡器','摇壶','杯子'],
  pitfalls:[
    '奶酪要软化，冷的有颗粒。',
    '盐不能省，那是酪酪区别于奶盖的地方。'
  ],
  fidelity:'乐乐茶用定制酪酪基底，家庭奶酪 + 淡奶油能到八五成。',
  steps:[
    {title:'打酪酪', desc:'软化奶酪 + 淡奶油 50ml + 糖 + 盐，打到顺滑。', timer:60, act:'搅拌',
     add:[{name:'酪酪奶盖', pct:26, color:'#FFF8E7'}]},
    {title:'压草莓', desc:'草莓压碎留颗粒。', act:'捣碎',
     add:[{name:'草莓果肉', pct:28, color:'#E63B4E'}]},
    {title:'摇茶', desc:'茶汤 + 糖摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'草莓茶', pct:42, color:'#F0778A'}]},
    {title:'组装', desc:'果肉垫底，倒茶汤加冰，铺酪酪。', act:'铺面', add:[]}
  ]
},

{
  id:'putao-luoluo', name:'葡萄酪酪', category:'果茶', brands:['乐乐茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#D8B4FE',
  layers:[
    {name:'葡萄果肉', pct:26, color:'#4A2A5C'},
    {name:'葡萄茶', pct:48, color:'#7B4A8C'},
    {name:'酪酪奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'多肉葡萄的豪华版，奶盖换成酪酪。葡萄要巨峰，皮紫肉厚的那种。',
  ingredients:[
    {name:'巨峰葡萄', amount:'150g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'50ml'},
    {name:'糖', amount:'22g'},
    {name:'盐', amount:'1g'}
  ],
  tools:['打泡器','摇壶','杯子'],
  pitfalls:[
    '酪酪比奶盖重，会往下沉一点，属正常。',
    '葡萄要剥皮去籽，不能图快。'
  ],
  fidelity:'乐乐茶用鲜葡萄现打，家庭版能到九成。',
  steps:[
    {title:'打酪酪', desc:'奶酪 + 淡奶油 + 糖 + 盐打到顺滑。', timer:60, act:'搅拌',
     add:[{name:'酪酪奶盖', pct:26, color:'#FFF8E7'}]},
    {title:'处理葡萄', desc:'剥皮去籽，一半压碎。', act:'捣碎',
     add:[{name:'葡萄果肉', pct:26, color:'#4A2A5C'}]},
    {title:'摇茶', desc:'茶汤 + 糖摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'葡萄茶', pct:44, color:'#7B4A8C'}]},
    {title:'组装', desc:'果肉垫底，倒茶汤加冰，铺酪酪。', act:'铺面', add:[]}
  ]
},

{
  id:'niuyouguo-shengye', name:'牛油果生椰', category:'果茶', brands:['乐乐茶'], nocaf:true,
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#A7F3D0',
  layers:[
    {name:'牛油果泥', pct:48, color:'#7BA05B'},
    {name:'厚椰乳', pct:52, color:'#F0DFC8'}
  ],
  intro:'牛油果的油脂感配椰乳的清甜，居然很搭。不加茶也不加咖啡，是纯奶昔结构。',
  ingredients:[
    {name:'牛油果', amount:'1 个', note:'熟透的'},
    {name:'厚椰乳', amount:'180ml', note:'冷藏'},
    {name:'蜂蜜', amount:'15g', optional:true},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '牛油果不熟会涩，别将就。',
    '椰乳冷藏过才不出油膜。'
  ],
  fidelity:'乐乐茶用冷冻牛油果块，家庭鲜果香气更好。',
  steps:[
    {title:'取果肉', desc:'牛油果去核挖肉。', act:'备料',
     add:[{name:'牛油果泥', pct:46, color:'#7BA05B'}]},
    {title:'打匀', desc:'牛油果 + 厚椰乳 + 蜂蜜 + 冰，打 25 秒到绵密。', timer:25, act:'打泥',
     add:[{name:'厚椰乳', pct:48, color:'#F0DFC8'}]},
    {title:'装杯', desc:'倒入杯子，表面可撒椰蓉。', act:'倒入', add:[]}
  ]
},

{
  id:'xianqingti', name:'仙仙青提', category:'果茶', brands:['沪上阿姨','古茗'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#BEF264',
  layers:[
    {name:'青提果肉', pct:26, color:'#A8D060'},
    {name:'青提茶汤', pct:64, color:'#D4E89E'},
    {name:'椰果', pct:10, color:'#FBFBE4'}
  ],
  intro:'青提要选阳光玫瑰，那种有玫瑰香的。普通的青提做出来就是甜的，没记忆点。',
  ingredients:[
    {name:'青提', amount:'150g', note:'阳光玫瑰最好'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'15ml'},
    {name:'椰果', amount:'40g', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '青提要一颗颗去籽，籽打碎了整杯苦。',
    '青提皮薄的不用剥，厚的要剥。'
  ],
  fidelity:'沪上阿姨用阳光玫瑰，家庭买到同款就能还原。',
  steps:[
    {title:'处理青提', desc:'青提去籽，一半对半切，一半压出汁。', act:'备料',
     add:[{name:'青提果肉', pct:26, color:'#A8D060'}]},
    {title:'摇茶', desc:'茶汤 + 青提汁 + 糖浆摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'青提茶汤', pct:60, color:'#D4E89E'}]},
    {title:'组装', desc:'果肉和椰果垫底，倒茶汤加冰。', act:'倒入',
     add:[{name:'椰果', pct:8, color:'#FBFBE4'},{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'mangguo-suannai', name:'芒果酸奶', category:'果茶', brands:['茉酸奶','古茗'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#FDE68A',
  layers:[
    {name:'芒果泥', pct:48, color:'#F2A33C'},
    {name:'厚酸奶', pct:52, color:'#FDFBF6'}
  ],
  intro:'比杨枝甘露简单得多，只要芒果和酸奶两样。芒果够甜就不用加糖。',
  ingredients:[
    {name:'芒果', amount:'200g'},
    {name:'浓稠酸奶', amount:'200g'},
    {name:'牛奶', amount:'50ml'},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '酸奶要浓稠型，稀的会变成饮料。',
    '芒果纤维粗的话先过筛。'
  ],
  fidelity:'茉酸奶用冷冻芒果块 + 自家酸奶，家庭版更清爽。',
  steps:[
    {title:'切芒果', desc:'芒果切块，留几粒装饰。', act:'备料',
     add:[{name:'芒果泥', pct:46, color:'#F2A33C'}]},
    {title:'打匀', desc:'芒果 + 酸奶 + 牛奶 + 冰，打 20 秒。', timer:20, act:'打泥',
     add:[{name:'厚酸奶', pct:48, color:'#FDFBF6'}]},
    {title:'装杯', desc:'倒进杯子，表面放芒果粒。', act:'铺面', add:[]}
  ]
},

{
  id:'shanzha-suannai', name:'山楂酸奶', category:'果茶', brands:['茉酸奶'], nocaf:true,
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#FCA5A5',
  layers:[
    {name:'山楂泥', pct:40, color:'#C0392B'},
    {name:'厚酸奶', pct:60, color:'#FDFBF6'}
  ],
  intro:'酸得很有劲。山楂要去核去蒂，不然会发苦。糖要多放，山楂本身的酸很尖锐。',
  ingredients:[
    {name:'山楂', amount:'150g', note:'鲜山楂或山楂糕'},
    {name:'浓稠酸奶', amount:'200g'},
    {name:'糖', amount:'35g', note:'山楂很酸，糖不能少'},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '山楂核和蒂要去干净，会有苦味。',
    '糖少了酸到胃疼，35g 是底线。'
  ],
  fidelity:'茉酸奶用山楂果酱，家庭用鲜山楂需煮软，酸度更高。',
  steps:[
    {title:'煮山楂', desc:'山楂去核，加水煮 15 分钟到软烂。', timer:900, act:'加热', add:[]},
    {title:'打泥', desc:'煮软的山楂 + 糖 35g，打成泥。', act:'打泥',
     add:[{name:'山楂泥', pct:38, color:'#C0392B'}]},
    {title:'混合', desc:'山楂泥 + 酸奶 + 冰，打 20 秒。', timer:20, act:'搅拌',
     add:[{name:'厚酸奶', pct:54, color:'#FDFBF6'}]},
    {title:'装杯', desc:'倒入杯子。', act:'倒入', add:[]}
  ]
},

{
  id:'xigua-bingsha', name:'西瓜冰沙', category:'果茶', brands:['喜茶','奈雪的茶','古茗','蜜雪冰城'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#FECACA',
  layers:[
    {name:'西瓜冰沙', pct:88, color:'#E8564E'},
    {name:'西瓜块', pct:12, color:'#F07A6E'}
  ],
  intro:'最简单的一杯，但做好的关键是西瓜要够甜够冰。不甜的话只能靠糖浆，那就变味了。',
  ingredients:[
    {name:'西瓜', amount:'300g', note:'无籽西瓜，冰镇过'},
    {name:'糖浆', amount:'15ml', optional:true, note:'西瓜甜就不加'},
    {name:'柠檬汁', amount:'5ml', optional:true, note:'几滴，提鲜'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '西瓜要冰镇的，常温打出来是温的。',
    '冰太少打不成沙，会变成西瓜汁。'
  ],
  fidelity:'所有品牌都是这个做法，还原度 100%。',
  steps:[
    {title:'切西瓜', desc:'西瓜去籽切块，留几块装饰。', act:'备料',
     add:[{name:'西瓜块', pct:14, color:'#F07A6E'}]},
    {title:'打沙', desc:'西瓜 + 冰块打 20 秒，成绵密冰沙。', timer:20, act:'打泥',
     add:[{name:'西瓜冰沙', pct:80, color:'#E8564E'}]},
    {title:'装杯', desc:'倒入杯子，表面放西瓜块。', act:'铺面', add:[]}
  ]
},

{
  id:'yangmei-niang', name:'杨梅冰酿', category:'果茶', brands:['爷爷不泡茶'],
  method:'需煮', difficulty:3, temp:'冰', volume:500, bg:'#F0ABFC',
  layers:[
    {name:'孝感米酿', pct:26, color:'#F5EBDC'},
    {name:'杨梅果肉', pct:22, color:'#7B1E3A'},
    {name:'茉莉牛奶', pct:52, color:'#EFE4D8'}
  ],
  intro:'荔枝冰酿的姐妹款，把荔枝换成东魁杨梅。梅子的酸和米酒的甜形成对比，比荔枝版更清爽。',
  ingredients:[
    {name:'孝感米酒', amount:'100g'},
    {name:'东魁杨梅', amount:'150g'},
    {name:'茉莉绿茶', amount:'120ml'},
    {name:'牛奶', amount:'80ml'},
    {name:'糖浆', amount:'20ml'},
    {name:'盐', amount:'5g', note:'泡杨梅'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '杨梅必须盐水泡，里面小虫不少。',
    '杨梅核要去掉，打碎会苦。'
  ],
  fidelity:'同样依赖孝感米酿，外地用超市米酒会少一层酒香。',
  steps:[
    {title:'泡杨梅', desc:'盐水泡 15 分钟，冲洗干净。', timer:900, act:'浸泡', add:[]},
    {title:'取杨梅肉', desc:'去核取肉，一半压碎出汁。', act:'捣碎',
     add:[{name:'杨梅果肉', pct:24, color:'#7B1E3A'}]},
    {title:'泡茉莉', desc:'85℃ 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'茉莉茶汤', pct:24, color:'#E8DCBE'}]},
    {title:'铺米酿', desc:'杯底放米酒 100g。', act:'备料',
     add:[{name:'孝感米酿', pct:24, color:'#F5EBDC'}]},
    {title:'调奶倒杯', desc:'茶汤 + 牛奶 80ml + 糖浆混匀倒入，加冰。', act:'倒入',
     add:[{name:'茉莉牛奶', pct:22, color:'#EFE4D8'},{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'hongpingguo', name:'红苹果乌龙冰奶', category:'果茶', brands:['真茶屋'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F87171',
  layers:[
    {name:'苹果果肉', pct:22, color:'#E85D5D'},
    {name:'苹果乌龙', pct:54, color:'#E8B08A'},
    {name:'奶泡', pct:24, color:'#FDFBF6'}
  ],
  intro:'苹果要选脆的富士，打成泥会出水，和乌龙混起来意外清甜。苹果容易氧化，做完立刻喝。',
  ingredients:[
    {name:'红富士苹果', amount:'1 个', note:'脆的，别用面的'},
    {name:'乌龙茶', amount:'150ml'},
    {name:'牛奶', amount:'60ml'},
    {name:'糖浆', amount:'15ml'},
    {name:'柠檬汁', amount:'5ml', note:'防氧化'}
  ],
  tools:['料理机','摇壶','杯子'],
  pitfalls:[
    '苹果泥不加柠檬汁会很快变褐。',
    '苹果别打太细，留一点颗粒更有口感。'
  ],
  fidelity:'真茶屋用当季红苹果现打，家庭版可还原九成。',
  steps:[
    {title:'处理苹果', desc:'苹果去皮去核，一半切小粒，一半打泥（加柠檬汁）。', act:'打泥',
     add:[{name:'苹果果肉', pct:22, color:'#E85D5D'}]},
    {title:'摇茶', desc:'乌龙茶 150ml + 苹果泥 + 糖浆摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'苹果乌龙', pct:50, color:'#E8B08A'}]},
    {title:'加奶打泡', desc:'牛奶 60ml 打成薄泡。', timer:30, act:'搅拌',
     add:[{name:'奶泡', pct:20, color:'#FDFBF6'}]},
    {title:'组装', desc:'倒茶汤加冰，铺奶泡。', act:'铺面',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'mushu-taogang', name:'木薯桃胶炖奶', category:'果茶', brands:['古茗'], nocaf:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#F5D0FE',
  layers:[
    {name:'木薯', pct:24, color:'#D9C0A0'},
    {name:'桃胶', pct:20, color:'#E8D5B8'},
    {name:'炖奶', pct:56, color:'#FBF6EC'}
  ],
  intro:'养生路线的一杯，桃胶要提前泡 12 小时，木薯要煮到透心。费时间，但喝起来很踏实。',
  ingredients:[
    {name:'桃胶', amount:'15g', note:'干桃胶，泡 12 小时到没有硬芯'},
    {name:'木薯', amount:'100g', note:'去皮切块'},
    {name:'牛奶', amount:'250ml'},
    {name:'冰糖', amount:'20g'},
    {name:'红枣', amount:'3 颗', optional:true}
  ],
  tools:['锅','炖盅'],
  pitfalls:[
    '桃胶泡不够会有硬芯，至少要 12 小时。',
    '牛奶别煮沸，会结皮并失去奶香。'
  ],
  fidelity:'古茗用中央厨房预制，家庭现炖更香但要提前一天泡桃胶。',
  steps:[
    {title:'泡桃胶', desc:'桃胶 15g 冷水泡 12 小时，挑掉杂质。', timer:43200, act:'浸泡',
     add:[{name:'桃胶', pct:20, color:'#E8D5B8'}]},
    {title:'煮木薯', desc:'木薯去皮切块，煮 25 分钟到能戳透。', timer:1500, act:'加热',
     add:[{name:'木薯', pct:24, color:'#D9C0A0'}]},
    {title:'炖奶', desc:'牛奶 250ml + 冰糖 20g + 红枣，小火炖 15 分钟。', timer:900, act:'加热',
     add:[{name:'炖奶', pct:50, color:'#FBF6EC'}]},
    {title:'组合', desc:'木薯和桃胶放进碗里，冲入炖奶。', act:'倒入', add:[]}
  ]
},

{
  id:'bqqi-liulian', name:'霸气榴莲', category:'果茶', brands:['奈雪的茶'], nocaf:true,
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FAF5FF',
  layers:[
    {name:'榴莲果肉', pct:36, color:'#E8C860'},
    {name:'椰浆奶', pct:54, color:'#FBF3E0'},
    {name:'奶盖', pct:10, color:'#FFFFFF'}
  ],
  intro:'**不含茶**。榴莲打成泥配椰浆，浓到像在喝甜品。爱榴莲的人和怕榴莲的人会因为这杯吵起来。',
  ingredients:[
    {name:'榴莲肉', amount:'150g', note:'金枕头或猫山王，冷冻的也行'},
    {name:'椰浆', amount:'100ml'},
    {name:'牛奶', amount:'80ml'},
    {name:'糖', amount:'10g', optional:true, note:'榴莲本身甜，可以先不加'},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '榴莲要挑熟透的，生的打出来发苦。',
    '别打太细，留一点果肉纤维才像真的在吃榴莲。'
  ],
  fidelity:'奈雪用当季榴莲现打，家庭用冷冻榴莲肉香气稍弱，但胜在便宜方便。',
  steps:[
    {title:'取榴莲肉', desc:'榴莲去核取肉 150g。', act:'备料',
     add:[{name:'榴莲果肉', pct:38, color:'#E8C860'}]},
    {title:'打泥', desc:'榴莲肉 + 椰浆 100ml + 牛奶 80ml + 冰，打 15 秒成粗泥。', timer:15, act:'打泥',
     add:[{name:'椰浆奶', pct:46, color:'#FBF3E0'}]},
    {title:'装杯', desc:'倒入杯子，表面铺一层奶盖。', act:'铺面',
     add:[{name:'奶盖', pct:10, color:'#FFFFFF'}]}
  ]
},

{
  id:'sangshen-meimei', name:'桑葚莓莓', category:'果茶', brands:['喜茶','古茗'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FDF4FF',
  layers:[
    {name:'桑葚果肉', pct:24, color:'#4A1B4E'},
    {name:'草莓果肉', pct:16, color:'#E63B4E'},
    {name:'莓果茶汤', pct:60, color:'#9B4A7C'}
  ],
  intro:'桑葚和草莓一起上，颜色深到发紫。桑葚季节很短（五六月），冷冻桑葚能续，但会掉色。',
  ingredients:[
    {name:'桑葚', amount:'100g', note:'冷冻的也行，要挑掉梗'},
    {name:'草莓', amount:'80g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'25ml', note:'桑葚偏酸，糖别省'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '桑葚梗要去干净，有梗会涩。',
    '桑葚汁会把衣服染紫，做的时候穿深色围裙。'
  ],
  fidelity:'门店用冷冻桑葚，家庭同款能还原九成，关键在糖量。',
  steps:[
    {title:'处理果肉', desc:'桑葚去梗，草莓去蒂切块。', act:'备料',
     add:[{name:'桑葚果肉', pct:24, color:'#4A1B4E'}]},
    {title:'压果', desc:'一半果肉压出汁，一半留着。', act:'捣碎',
     add:[{name:'草莓果肉', pct:16, color:'#E63B4E'}]},
    {title:'摇匀', desc:'果肉 + 茶汤 150ml + 糖浆 25ml，摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'莓果茶汤', pct:52, color:'#9B4A7C'}]},
    {title:'装杯', desc:'倒入杯子，补冰块。', act:'铺冰',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'qingwang', name:'晴王葡萄', category:'果茶', brands:['古茗','喜茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F5F3FF',
  layers:[
    {name:'阳光玫瑰果肉', pct:30, color:'#9BC96A'},
    {name:'葡萄茶汤', pct:58, color:'#B5D98A'},
    {name:'奶盖', pct:12, color:'#FFF8E7'}
  ],
  intro:'晴王就是阳光玫瑰，比巨峰脆、比巨峰甜，还带一股玫瑰香。贵是真贵，但做出来确实不一样。',
  ingredients:[
    {name:'阳光玫瑰葡萄', amount:'180g', note:'要无籽的，有籽的要挑掉'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'12ml', note:'晴王本身甜，糖少放'},
    {name:'芝士奶盖', amount:'50g', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '阳光玫瑰皮薄，不用剥，剥了反而没那股脆劲。',
    '籽必须挑干净，打碎了整杯苦。'
  ],
  fidelity:'古茗用当季阳光玫瑰，家庭买到同款就能完全复刻。',
  steps:[
    {title:'处理葡萄', desc:'阳光玫瑰去籽，一半压碎，一半整颗留用。', act:'备料',
     add:[{name:'葡萄果肉', pct:30, color:'#9BC96A'}]},
    {title:'摇茶', desc:'茶汤 150ml + 糖浆 12ml 摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'葡萄茶汤', pct:52, color:'#B5D98A'}]},
    {title:'装杯', desc:'果肉垫底，倒茶汤加冰。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'铺奶盖', desc:'表面铺芝士奶盖。', act:'铺面',
     add:[{name:'奶盖', pct:10, color:'#FFF8E7'}]}
  ]
},

{
  id:'xueli-baixiang', name:'雪梨百香果', category:'果茶', brands:['各品牌通用'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FFF1F2',
  layers:[
    {name:'雪梨粒', pct:20, color:'#E8EBC8'},
    {name:'百香果籽', pct:12, color:'#D4A017'},
    {name:'雪梨茶汤', pct:68, color:'#F0F2D8'}
  ],
  intro:'秋冬嗓子疼的时候想起来的搭配。雪梨要炖过才润，生雪梨只是脆。',
  ingredients:[
    {name:'雪梨', amount:'1 个', note:'或雪梨罐头'},
    {name:'百香果', amount:'1 个'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'冰糖', amount:'20g'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['锅','摇壶','杯子'],
  pitfalls:[
    '生雪梨直接打会涩，先炖 15 分钟。',
    '百香果最后加，煮过会失去鲜香。'
  ],
  fidelity:'门店用雪梨汁 + 鲜果，家庭炖雪梨更润，但费时。',
  steps:[
    {title:'炖雪梨', desc:'雪梨去皮切块，加冰糖 20g 和水 100ml 炖 15 分钟。', timer:900, act:'加热',
     add:[{name:'雪梨粒', pct:22, color:'#E8EBC8'}]},
    {title:'加百香果', desc:'雪梨连汤放凉，挖入百香果 1 个。', act:'备料',
     add:[{name:'百香果籽', pct:12, color:'#D4A017'}]},
    {title:'摇匀', desc:'加茶汤 150ml 和冰块，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'雪梨茶汤', pct:58, color:'#F0F2D8'}]}
  ]
},

{
  id:'yifang-shuiguo', name:'一芳古早味水果茶', category:'果茶', brands:['一芳'],
  method:'摇匀', difficulty:2, temp:'冰', volume:600, bg:'#FDF2F8',
  layers:[
    {name:'凤梨酱', pct:16, color:'#D9A227'},
    {name:'苹果片', pct:12, color:'#F5E6C8'},
    {name:'百香果', pct:10, color:'#D4A017'},
    {name:'水果茶汤', pct:62, color:'#E8B86A'}
  ],
  intro:'台湾一芳的招牌，用凤梨酱打底，加苹果、百香果、金桔。古早味说的是那种「很旧但很实在」的甜。',
  ingredients:[
    {name:'凤梨酱', amount:'40g', note:'带果肉的，不是果酱'},
    {name:'苹果', amount:'半个'},
    {name:'百香果', amount:'1 个'},
    {name:'金桔', amount:'2 个', optional:true},
    {name:'红茶', amount:'200ml'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '苹果要切薄片，厚了吸管吸不动。',
    '凤梨酱本身甜，糖可以不加。'
  ],
  fidelity:'一芳用自家凤梨酱，这道是核心。买不到同款的话，风味会差不少。',
  steps:[
    {title:'备水果', desc:'苹果切薄片，百香果挖出，金桔挤汁。', act:'备料',
     add:[{name:'苹果片', pct:12, color:'#F5E6C8'}]},
    {title:'铺凤梨酱', desc:'凤梨酱 40g 铺杯底。', act:'备料',
     add:[{name:'凤梨酱', pct:16, color:'#D9A227'}]},
    {title:'摇匀', desc:'红茶 200ml + 百香果 + 金桔汁，加冰摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'水果茶汤', pct:56, color:'#E8B86A'},{name:'百香果', pct:10, color:'#D4A017'}]},
    {title:'组装', desc:'茶汤倒进杯子，苹果片贴杯壁。', act:'倒入', add:[]}
  ]
},

{
  id:'qingmei-lvcha', name:'青梅绿茶', category:'果茶', brands:['古茗','茶百道'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FEF2F2',
  layers:[
    {name:'青梅', pct:18, color:'#8BA04A'},
    {name:'青梅绿茶', pct:82, color:'#C9D99A'}
  ],
  intro:'酸得很清亮，夏天开胃。青梅要腌过的，生的青梅有毒不能直接用。',
  ingredients:[
    {name:'腌制青梅', amount:'4 颗', note:'超市蜜饯区有，或用青梅汁 40ml'},
    {name:'茉莉绿茶', amount:'200ml'},
    {name:'糖浆', amount:'20ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '生青梅含氰苷，绝对不能直接用，必须用腌制的。',
    '青梅本身很酸，糖别省。'
  ],
  fidelity:'门店用青梅浓缩汁，家庭用腌青梅捣碎风味更真但咸味会重一点。',
  steps:[
    {title:'捣青梅', desc:'腌青梅 4 颗捣碎，连核一起。', act:'捣碎',
     add:[{name:'青梅', pct:18, color:'#8BA04A'}]},
    {title:'泡绿茶', desc:'85℃ 水 200ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'绿茶汤', pct:70, color:'#C9D99A'}]},
    {title:'摇匀', desc:'青梅 + 茶汤 + 糖浆 20ml + 冰，摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'滤出', desc:'滤掉青梅核，倒进杯子。', act:'倒入', add:[]}
  ]
},

{
  id:'manbei-youzi', name:'满杯红柚', category:'果茶', brands:['喜茶'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FB7185',
  layers:[
    {name:'红柚片', pct:18, color:'#F08080'},
    {name:'红柚果粒', pct:14, color:'#F4A0A0'},
    {name:'绿妍茶汤', pct:68, color:'#E8D8A8'}
  ],
  intro:'喜茶 2016 年首创的那杯，整片红柚贴着杯壁。红柚的白膜必须撕干净，那是苦味来源。',
  ingredients:[
    {name:'红心西柚', amount:'1 个', note:'要红心的，颜色才是粉红'},
    {name:'茉莉绿茶', amount:'180ml', note:'喜茶的绿妍就是这个'},
    {name:'糖浆', amount:'25ml', note:'红柚偏苦，糖别省'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '西柚白膜必须撕到只剩果肉，这是这杯成败的关键。',
    '糖少了会苦到皱眉，25ml 是底线。'
  ],
  fidelity:'喜茶用定制绿妍茶底，家用高窨次茉莉绿茶能到九成。',
  steps:[
    {title:'处理红柚', desc:'西柚剥出果肉，撕净白膜，留两片完整的切薄片贴杯壁。', act:'备料',
     add:[{name:'红柚片', pct:18, color:'#F08080'}]},
    {title:'捣果粒', desc:'其余果肉压散，留颗粒感。', act:'捣碎',
     add:[{name:'红柚果粒', pct:14, color:'#F4A0A0'}]},
    {title:'摇茶', desc:'茶汤 180ml + 糖浆 25ml，加冰摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'绿妍茶汤', pct:58, color:'#E8D8A8'}]},
    {title:'组装', desc:'果粒垫底，倒茶汤，红柚片贴杯壁。', act:'倒入',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'zhizhi-mangmang', name:'芝芝芒芒', category:'果茶', brands:['喜茶'],
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#FBBF24',
  layers:[
    {name:'芒果冰沙', pct:62, color:'#F2A33C'},
    {name:'芒果丁', pct:12, color:'#F7C24E'},
    {name:'芝士奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'芒果打成冰沙，顶上压一层芝士。喜茶的芝芝系列逻辑都一样：果肉打底、冰沙居中、芝士封顶。',
  ingredients:[
    {name:'芒果', amount:'250g', note:'大台农，要熟'},
    {name:'茉莉绿茶', amount:'100ml'},
    {name:'糖浆', amount:'15ml', optional:true},
    {name:'芝士奶盖', amount:'60g'},
    {name:'冰块', amount:'约 180g'}
  ],
  tools:['料理机','打泡器','杯子'],
  pitfalls:[
    '芒果不甜就别指望糖浆救，糖浆只能补甜不能补香。',
    '冰量要够，少了打不成沙。'
  ],
  fidelity:'喜茶用现切芒果，家庭同款可完全复刻，关键在于芒果成熟度。',
  steps:[
    {title:'切芒果', desc:'芒果切块，留一小把切丁。', act:'备料',
     add:[{name:'芒果丁', pct:14, color:'#F7C24E'}]},
    {title:'打冰沙', desc:'芒果块 + 茶汤 100ml + 糖浆 + 冰块，打 25 秒。', timer:25, act:'打泥',
     add:[{name:'芒果冰沙', pct:58, color:'#F2A33C'}]},
    {title:'打芝士', desc:'芝士奶盖打到顺滑能流动。', timer:60, act:'搅拌',
     add:[{name:'芝士奶盖', pct:24, color:'#FFF8E7'}]},
    {title:'组装', desc:'冰沙倒杯，撒芒果丁，最后铺芝士奶盖。', act:'铺面', add:[]}
  ]
},

{
  id:'duorou-yangmei', name:'多肉杨梅', category:'果茶', brands:['喜茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#C084FC',
  layers:[
    {name:'杨梅果肉', pct:30, color:'#7B1E3A'},
    {name:'杨梅茶汤', pct:58, color:'#A8365C'},
    {name:'脆啵啵', pct:12, color:'#C98A45'}
  ],
  intro:'初夏限定，只卖一两个月。杨梅要手工去核，一颗颗剥，很费工但值得——核打碎了整杯就废了。',
  ingredients:[
    {name:'杨梅', amount:'200g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'28ml', note:'杨梅偏酸'},
    {name:'脆啵啵', amount:'40g', optional:true},
    {name:'盐', amount:'5g', note:'泡杨梅去虫'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '杨梅必须盐水泡 15 分钟，里面小虫不少。',
    '核一定要去干净，混进去打碎会苦。'
  ],
  fidelity:'喜茶用当季杨梅现剥，家庭同款完全可复刻，就是要花时间。',
  steps:[
    {title:'泡杨梅', desc:'盐水泡 15 分钟，冲洗。', timer:900, act:'浸泡', add:[]},
    {title:'去核取肉', desc:'杨梅手工去核，一半压碎。', act:'捣碎',
     add:[{name:'杨梅果肉', pct:30, color:'#7B1E3A'}]},
    {title:'摇茶', desc:'果肉 + 茶汤 150ml + 糖浆 28ml，摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'杨梅茶汤', pct:50, color:'#A8365C'}]},
    {title:'加脆啵啵', desc:'杯底放脆啵啵，倒茶汤加冰。', act:'倒入',
     add:[{name:'脆啵啵', pct:10, color:'#C98A45'},{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'zhizhi-taotao', name:'芝芝桃桃', category:'果茶', brands:['喜茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F472B6',
  layers:[
    {name:'桃肉', pct:28, color:'#F49AC1'},
    {name:'桃汁茶汤', pct:48, color:'#FBC4D8'},
    {name:'芝士奶盖', pct:24, color:'#FFF8E7'}
  ],
  intro:'和「多肉桃桃」的区别在茶底：这杯用琥珀兰，带兰花香，比乌龙更清。芝士也更厚。',
  ingredients:[
    {name:'水蜜桃', amount:'1.5 个', note:'春雪或红梅，要软熟'},
    {name:'兰花乌龙', amount:'150ml', note:'或清香型铁观音'},
    {name:'糖浆', amount:'15ml'},
    {name:'芝士奶盖', amount:'60g'}
  ],
  tools:['摇壶','打泡器','杯子'],
  pitfalls:[
    '桃子要软，硬的压不出汁、也切不出形。',
    '桃肉会氧化变褐，做完一小时内喝完。'
  ],
  fidelity:'喜茶用琥珀兰茶底，家用兰花乌龙或铁观音能到八成五。',
  steps:[
    {title:'处理桃', desc:'盐搓去绒毛，去皮切块，留几片完整的。', act:'备料',
     add:[{name:'桃肉', pct:28, color:'#F49AC1'}]},
    {title:'摇茶', desc:'桃泥 + 茶汤 150ml + 糖浆，摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'桃汁茶汤', pct:46, color:'#FBC4D8'}]},
    {title:'打芝士', desc:'芝士奶盖打到顺滑。', timer:60, act:'搅拌',
     add:[{name:'芝士奶盖', pct:22, color:'#FFF8E7'}]},
    {title:'组装', desc:'桃片贴杯壁，倒茶汤加冰，最后铺芝士。', act:'铺面',
     add:[{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'bqqi-yangmei', name:'霸气杨梅', category:'果茶', brands:['奈雪的茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#A78BFA',
  layers:[
    {name:'杨梅果肉', pct:34, color:'#7B1E3A'},
    {name:'茉莉初雪茶汤', pct:66, color:'#D9A8BC'}
  ],
  intro:'奈雪的夏季限定。它比喜茶的多肉杨梅果肉给得更足，几乎半杯都是杨梅，茶底也更香。',
  ingredients:[
    {name:'杨梅', amount:'250g', note:'东魁，果大肉厚'},
    {name:'茉莉初雪', amount:'150ml', note:'或高窨次茉莉绿茶'},
    {name:'糖浆', amount:'25ml'},
    {name:'盐', amount:'5g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '杨梅不泡盐水直接用，可能吃到虫。',
    '果肉要手工去核，机器打的会碎。'
  ],
  fidelity:'奈雪用金奖茉莉初雪茶底，家用茉莉绿茶香气会直一些，但果肉量可以照样给足。',
  steps:[
    {title:'泡杨梅', desc:'盐水泡 15 分钟。', timer:900, act:'浸泡', add:[]},
    {title:'手工去核', desc:'一颗颗去核，一半压碎留汁。', act:'捣碎',
     add:[{name:'杨梅果肉', pct:34, color:'#7B1E3A'}]},
    {title:'摇茶', desc:'茶汤 150ml + 糖浆 25ml，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'茉莉初雪茶汤', pct:56, color:'#D9A8BC'}]},
    {title:'组装', desc:'果肉铺底，倒茶汤加冰。', act:'倒入',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'bqqi-yangzhi', name:'霸气杨枝甘露', category:'果茶', brands:['奈雪的茶'], nocaf:true,
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FCD34D',
  layers:[
    {name:'芒果泥', pct:32, color:'#F2A33C'},
    {name:'奶冻', pct:18, color:'#FDFBF6'},
    {name:'椰浆西米', pct:36, color:'#FBF3E0'},
    {name:'西柚粒', pct:14, color:'#F08080'}
  ],
  intro:'比经典杨枝甘露多了一勺**奶冻**，口感更绵。奈雪把它做成了四季常驻，不只是夏天。',
  ingredients:[
    {name:'芒果', amount:'150g'},
    {name:'椰浆', amount:'100ml'},
    {name:'小西米', amount:'30g'},
    {name:'西柚', amount:'40g'},
    {name:'牛奶', amount:'100ml'},
    {name:'吉利丁片', amount:'3g', note:'做奶冻'},
    {name:'糖', amount:'15g'}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '奶冻要提前做，冷藏 2 小时才能用。',
    '西米煮完必须过冷水。'
  ],
  fidelity:'奈雪用现制奶冻，家庭用吉利丁做口感接近，就是多花 2 小时。',
  steps:[
    {title:'做奶冻', desc:'牛奶 100ml + 糖 + 泡软吉利丁，搅化后冷藏 2 小时切块。', timer:7200, act:'焖',
     add:[{name:'奶冻', pct:18, color:'#FDFBF6'}]},
    {title:'煮西米', desc:'水沸下西米煮 15 分钟，焖 8 分钟，过冷水。', timer:900, act:'加热',
     add:[{name:'西米', pct:20, color:'#FFF6DC'}]},
    {title:'打芒果泥', desc:'芒果打成泥。', act:'打泥',
     add:[{name:'芒果泥', pct:32, color:'#F2A33C'}]},
    {title:'混合', desc:'芒果泥 + 椰浆 + 西米拌匀。', act:'搅拌',
     add:[{name:'椰浆西米', pct:30, color:'#FBF3E0'}]},
    {title:'加料', desc:'放奶冻块、撒西柚粒、加冰。', act:'铺面',
     add:[{name:'西柚粒', pct:12, color:'#F08080'}]}
  ]
},

{
  id:'bqqi-shuimitao', name:'霸气水蜜桃', category:'果茶', brands:['奈雪的茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#E879F9',
  layers:[
    {name:'桃肉', pct:32, color:'#F49AC1'},
    {name:'桃汁茶汤', pct:58, color:'#FBC4D8'},
    {name:'蜜桃冻', pct:10, color:'#FDE8F0'}
  ],
  intro:'奈雪的桃子系列只做盛夏两三周，用的是当季春雪和红梅。错过就得等一年。',
  ingredients:[
    {name:'水蜜桃', amount:'2 个', note:'软熟的，去皮'},
    {name:'茉莉初雪', amount:'150ml'},
    {name:'糖浆', amount:'12ml', note:'桃本身甜，少放'},
    {name:'白凉粉', amount:'3g', optional:true, note:'做蜜桃冻'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '桃子不熟就别做了，做出来是「有桃味的糖水」。',
    '桃肉氧化很快，榨完 30 分钟内喝完。'
  ],
  fidelity:'奈雪用当季鲜桃，家庭买到好桃就能完全复刻。',
  steps:[
    {title:'处理桃', desc:'去皮去核，一半切块压泥，一半留块。', act:'备料',
     add:[{name:'桃肉', pct:32, color:'#F49AC1'}]},
    {title:'摇茶', desc:'桃泥 + 茶汤 150ml + 糖浆，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'桃汁茶汤', pct:54, color:'#FBC4D8'}]},
    {title:'组装', desc:'倒杯加冰，放桃块和蜜桃冻。', act:'铺面',
     add:[{name:'蜜桃冻', pct:10, color:'#FDE8F0'}]}
  ]
},

{
  id:'bqqi-lizhi', name:'霸气荔枝', category:'果茶', brands:['奈雪的茶'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#93C5FD',
  layers:[
    {name:'荔枝果肉', pct:34, color:'#FBEAF0'},
    {name:'茉莉初雪茶汤', pct:66, color:'#E5DCC0'}
  ],
  intro:'妃子笑荔枝手剥去核，果肉几乎占了一半。荔枝本身够甜，糖可以少放甚至不放。',
  ingredients:[
    {name:'妃子笑荔枝', amount:'250g', note:'约 15 颗，去壳去核'},
    {name:'茉莉初雪', amount:'150ml'},
    {name:'糖浆', amount:'8ml', optional:true},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '荔枝核要去干净，混进去打碎会苦。',
    '荔枝甜度高，糖真可以不加。'
  ],
  fidelity:'奈雪用妃子笑，家庭买同款就能复刻，核小肉厚的更好剥。',
  steps:[
    {title:'剥荔枝', desc:'荔枝去壳去核，留 5 颗完整的，其余压出汁。', act:'备料',
     add:[{name:'荔枝果肉', pct:34, color:'#FBEAF0'}]},
    {title:'摇茶', desc:'荔枝汁 + 茶汤 150ml，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'茉莉初雪茶汤', pct:56, color:'#E5DCC0'}]},
    {title:'组装', desc:'倒杯加冰，放整颗荔枝肉。', act:'铺面',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]}
  ]
},

{
  id:'shoushou-lvping', name:'瘦瘦小绿瓶', category:'果茶', brands:['奈雪的茶'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#86EFAC',
  layers:[
    {name:'羽衣甘蓝', pct:34, color:'#5C8A3C'},
    {name:'橙苹果汁', pct:66, color:'#F5C45E'}
  ],
  intro:'**不含茶、不含咖啡因**，奈雪的健康线。羽衣甘蓝生味很冲，靠橙子和苹果压住。热量极低，当早餐代餐也行。',
  ingredients:[
    {name:'羽衣甘蓝', amount:'50g', note:'只取叶片，梗去掉'},
    {name:'橙子', amount:'1 个'},
    {name:'苹果', amount:'半个'},
    {name:'柠檬汁', amount:'5ml', optional:true},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['料理机','滤网'],
  pitfalls:[
    '羽衣甘蓝梗不去会苦，叶子也要挑嫩的。',
    '打太久会发热氧化，颜色变暗黄。'
  ],
  fidelity:'奈雪用冷压工艺，纤维过滤得更细。家庭料理机会粗一些，过筛一次能改善。',
  steps:[
    {title:'备菜', desc:'羽衣甘蓝去梗取叶 50g，橙子剥皮，苹果去核。', act:'备料', add:[]},
    {title:'打汁', desc:'全部加冰块打 30 秒。', timer:30, act:'打泥',
     add:[{name:'羽衣甘蓝', pct:32, color:'#5C8A3C'}]},
    {title:'过筛', desc:'用细滤网过一遍，滤掉粗纤维。', act:'冲洗',
     add:[{name:'橙苹果汁', pct:62, color:'#F5C45E'}]},
    {title:'装瓶', desc:'倒进瓶子，冷藏 24 小时内喝完。', act:'倒入', add:[]}
  ]
},

{
  id:'lingnan-jiali', name:'岭南佳荔', category:'果茶', brands:['茶颜悦色'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FEE2E2',
  layers:[
    {name:'荔枝果肉', pct:28, color:'#FBEAF0'},
    {name:'荔枝乌龙', pct:62, color:'#E8D8B0'},
    {name:'奶沫', pct:10, color:'#FFFFFF'}
  ],
  intro:'茶颜「沫泡篇」里的荔枝款。乌龙打底、荔枝果酱提香，顶上那层薄奶沫要趁新鲜喝，15 分钟内会散。',
  ingredients:[
    {name:'乌龙茶', amount:'7g'},
    {name:'热水', amount:'230ml', note:'95℃'},
    {name:'荔枝', amount:'8 颗', note:'或荔枝果酱 50g'},
    {name:'鲜奶', amount:'60ml'},
    {name:'糖', amount:'10g', optional:true}
  ],
  tools:['摇壶','杯子','滤网'],
  pitfalls:[
    '荔枝够甜就别加糖，荔枝本身糖分很高。',
    '奶沫要冷淡打，热打出来的会散得快。'
  ],
  fidelity:'茶颜用荔枝果酱 + 现剥果肉，家庭用鲜荔枝香气更真但甜度不稳定。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 230ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'乌龙茶汤', pct:48, color:'#D4C088'}]},
    {title:'处理荔枝', desc:'荔枝去壳去核，压出汁留果肉。', act:'捣碎',
     add:[{name:'荔枝果肉', pct:28, color:'#FBEAF0'}]},
    {title:'摇匀', desc:'果肉 + 茶汤 + 糖，加冰摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'荔枝乌龙', pct:16, color:'#E8D8B0'}]},
    {title:'打奶沫', desc:'鲜奶 60ml 冷淡打到蓬松，铺表面。', timer:40, act:'铺面',
     add:[{name:'奶沫', pct:8, color:'#FFFFFF'}]}
  ]
},

{
  id:'yaojing', name:'妖精', category:'果茶', brands:['茶颜悦色'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#7DD3FC',
  layers:[
    {name:'红心火龙果', pct:24, color:'#D6296E'},
    {name:'香橙百香果', pct:58, color:'#F5B840'},
    {name:'冰块', pct:18, color:'#DCEFF6'}
  ],
  intro:'茶颜唯一的水果茶，颜色是红心火龙果染的，粉得很冲。香橙加百香果，酸甜偏酸，饭后喝很解腻。',
  ingredients:[
    {name:'红心火龙果', amount:'半个'},
    {name:'橙子', amount:'1 个'},
    {name:'百香果', amount:'1 个'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'25ml'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '火龙果染手染衣服，做的时候小心。',
    '百香果最后加，摇太狠会把籽打碎发苦。'
  ],
  fidelity:'茶颜用鲜果现打，家庭完全可复刻，颜色比门店会更艳一点。',
  steps:[
    {title:'备果', desc:'火龙果切块，橙子榨汁，百香果挖出。', act:'备料',
     add:[{name:'红心火龙果', pct:24, color:'#D6296E'}]},
    {title:'摇匀', desc:'全部加茶汤 150ml、糖浆 25ml，加冰摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'香橙百香果', pct:52, color:'#F5B840'}]},
    {title:'装杯', desc:'倒入杯子，补冰块。', act:'铺冰',
     add:[{name:'冰块', pct:14, color:'#DCEFF6'}]}
  ]
},

{
  id:'zhishi-mangmang', name:'芝士芒芒', category:'果茶', brands:['古茗'],
  method:'打沙', difficulty:2, temp:'冰', volume:500, bg:'#F59E0B',
  layers:[
    {name:'芒果冰沙', pct:60, color:'#F2A33C'},
    {name:'芒果丁', pct:14, color:'#F7C24E'},
    {name:'芝士奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'和喜茶的芝芝芒芒结构几乎一样，古茗的版本糖更少、奶盖更咸。性价比更高，做法完全可以互通。',
  ingredients:[
    {name:'芒果', amount:'250g'},
    {name:'茉莉绿茶', amount:'100ml'},
    {name:'糖浆', amount:'12ml'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'60ml'},
    {name:'盐', amount:'1.5g'}
  ],
  tools:['料理机','打泡器','杯子'],
  pitfalls:[
    '奶盖那撮盐不能省，咸才能托住芒果的甜。',
    '芒果不熟就别做了，加糖也救不回来。'
  ],
  fidelity:'古茗用现切芒果 + 自制奶盖，家庭同款可完全复刻。',
  steps:[
    {title:'切芒果', desc:'芒果切块，留一把切丁。', act:'备料',
     add:[{name:'芒果丁', pct:14, color:'#F7C24E'}]},
    {title:'打冰沙', desc:'芒果块 + 茶汤 + 糖浆 + 冰，打 25 秒。', timer:25, act:'打泥',
     add:[{name:'芒果冰沙', pct:56, color:'#F2A33C'}]},
    {title:'打咸芝士', desc:'奶酪软化 + 淡奶油 + 盐打发。', timer:80, act:'搅拌',
     add:[{name:'芝士奶盖', pct:24, color:'#FFF8E7'}]},
    {title:'组装', desc:'冰沙倒杯，撒芒果丁，铺芝士。', act:'铺面', add:[]}
  ]
},

{
  id:'qingti-moli', name:'青提茉莉', category:'果茶', brands:['古茗'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#4ADE80',
  layers:[
    {name:'青提果肉', pct:28, color:'#A8D060'},
    {name:'茉莉茶汤', pct:64, color:'#D4E89E'},
    {name:'冰块', pct:8, color:'#DCEFF6'}
  ],
  intro:'比「仙仙青提」更简单的一杯，没有椰果没有奶盖，就是青提和茉莉。青提要够脆才好吃。',
  ingredients:[
    {name:'青提', amount:'150g', note:'阳光玫瑰或普通青提都行'},
    {name:'茉莉绿茶', amount:'180ml'},
    {name:'糖浆', amount:'15ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '青提籽要去干净，打碎会苦。',
    '青提皮薄的不用剥，厚的要剥，否则嚼不动。'
  ],
  fidelity:'古茗用当季青提，家庭完全可复刻。',
  steps:[
    {title:'处理青提', desc:'青提去籽，一半对半切，一半压汁。', act:'备料',
     add:[{name:'青提果肉', pct:28, color:'#A8D060'}]},
    {title:'摇茶', desc:'果肉 + 茶汤 180ml + 糖浆，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'茉莉茶汤', pct:58, color:'#D4E89E'}]},
    {title:'装杯', desc:'倒入杯子补冰。', act:'铺冰',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'zhishi-putao', name:'芝士葡萄', category:'果茶', brands:['茶百道'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#EDE9FE',
  layers:[
    {name:'葡萄果肉', pct:28, color:'#4A2A5C'},
    {name:'葡萄茶汤', pct:46, color:'#7B4A8C'},
    {name:'芝士奶盖', pct:26, color:'#FFF8E7'}
  ],
  intro:'茶百道版的葡萄芝士，比喜茶的更便宜、果肉切得更碎。要好看的话葡萄要剥得干净。',
  ingredients:[
    {name:'巨峰葡萄', amount:'150g'},
    {name:'茉莉绿茶', amount:'150ml'},
    {name:'糖浆', amount:'18ml'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'55ml'},
    {name:'盐', amount:'1g'}
  ],
  tools:['摇壶','打泡器','杯子'],
  pitfalls:[
    '葡萄皮要剥干净，深紫色会染整杯，卖相差。',
    '奶盖别打太稠，稠了会挂不住。'
  ],
  fidelity:'茶百道用鲜葡萄 + 自制奶盖，家庭同款可还原九成。',
  steps:[
    {title:'剥葡萄', desc:'葡萄去皮去籽，一半压碎。', act:'捣碎',
     add:[{name:'葡萄果肉', pct:28, color:'#4A2A5C'}]},
    {title:'摇茶', desc:'茶汤 + 糖浆摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'葡萄茶汤', pct:42, color:'#7B4A8C'}]},
    {title:'打奶盖', desc:'奶酪 + 淡奶油 + 盐打发。', timer:70, act:'搅拌',
     add:[{name:'芝士奶盖', pct:24, color:'#FFF8E7'}]},
    {title:'组装', desc:'果肉垫底，倒茶汤加冰，铺奶盖。', act:'铺面',
     add:[{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'mitao-sijichun', name:'蜜桃四季春', category:'果茶', brands:['蜜雪冰城'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#FB923C',
  layers:[
    {name:'桃肉', pct:22, color:'#F49AC1'},
    {name:'四季春茶', pct:70, color:'#D9C48A'},
    {name:'冰块', pct:8, color:'#DCEFF6'}
  ],
  intro:'蜜雪的平价果茶，四块钱能喝到四季春加桃肉。桃肉是糖水桃，不是鲜桃，但胜在便宜稳定。',
  ingredients:[
    {name:'四季春茶叶', amount:'7g'},
    {name:'热水', amount:'240ml', note:'95℃'},
    {name:'水蜜桃', amount:'1 个', note:'或糖水桃罐头 80g'},
    {name:'糖浆', amount:'22ml', note:'用罐头桃可减到 10ml'}
  ],
  tools:['摇壶','杯子','滤网'],
  pitfalls:[
    '四季春要 95℃ 泡，85℃ 出不来那股兰花香。',
    '桃罐头本身甜，糖要减。'
  ],
  fidelity:'蜜雪用桃罐头 + 茶汤，家庭用鲜桃更香但颜色会淡。',
  steps:[
    {title:'泡四季春', desc:'95℃ 水 240ml 泡 5 分钟，滤掉茶叶，放凉。', timer:300, act:'冲泡',
     add:[{name:'四季春茶', pct:66, color:'#D9C48A'}]},
    {title:'切桃', desc:'桃去皮切小块，一半压汁。', act:'备料',
     add:[{name:'桃肉', pct:22, color:'#F49AC1'}]},
    {title:'摇匀', desc:'加糖浆 22ml、冰块，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
}

]);
