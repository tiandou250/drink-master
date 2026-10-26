/* 基底库 17 种（小料做法，被配方引用）
   category 统一为「小料」，isBase 为 true，不在「全部」列表显示 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'base-zhenzhu', name:'黑糖珍珠', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#D6D3D1',
  layers:[{name:'黑糖珍珠', pct:100, color:'#3A2418'}],
  intro:'Q 弹的关键只有一条：木薯粉必须用沸水冲，温水冲出来的是死面，煮完是硬的。',
  ingredients:[
    {name:'木薯粉', amount:'100g', note:'一定要木薯粉，红薯粉不行'},
    {name:'黑糖', amount:'40g', note:'敲碎，容易化'},
    {name:'水', amount:'60ml', note:'必须沸腾，滚开的那种'}
  ],
  tools:['锅','案板'],
  pitfalls:[
    '水不沸腾就冲粉，面团会散，搓不成条。',
    '煮好的珍珠 4 小时内用完，放久返硬。',
    '保存别放冰箱，冷藏会加速变硬，室温泡糖浆即可。'
  ],
  fidelity:'门店用中央厨房的半成品珍珠，家庭现做口感更软一点，但胜在新鲜。',
  steps:[
    {title:'冲粉', desc:'黑糖 40g 加 60ml 水煮沸，滚开状态下一次性倒入木薯粉，快速搅成絮状。', act:'加热', add:[]},
    {title:'揉面', desc:'不烫手后揉 5 分钟，揉到表面光滑不粘手。', timer:300, act:'搅拌',
     add:[{name:'面团', pct:60, color:'#5A3A20'}]},
    {title:'搓条切粒', desc:'搓成 1cm 粗的长条，切成 1cm 小段，撒干粉防粘。', act:'备料', add:[]},
    {title:'煮珍珠', desc:'水沸下锅，中火煮 25 分钟，中途搅两次。', timer:1500, act:'加热',
     add:[{name:'珍珠', pct:40, color:'#3A2418'}]},
    {title:'焖', desc:'关火盖盖焖 10 分钟，焖完中心才透。', timer:600, act:'焖', add:[]},
    {title:'过冷水拌糖', desc:'捞出冲冷水到不烫手，拌 10ml 黑糖浆防粘。', act:'冲洗', add:[]}
  ]
},

{
  id:'base-yuni', name:'芋泥', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#E9D5FF',
  layers:[{name:'芋泥', pct:100, color:'#C9A0DC'}],
  intro:'用荔浦芋头，别的芋头水分大做不绵。要蒸不要煮，煮会进水。',
  ingredients:[
    {name:'荔浦芋头', amount:'300g', note:'切面有紫红丝的才是'},
    {name:'糖', amount:'40g'},
    {name:'淡奶油', amount:'40ml', note:'没有就用牛奶 30ml + 黄油 10g'},
    {name:'牛奶', amount:'80ml'}
  ],
  tools:['蒸锅','料理机'],
  pitfalls:[
    '芋头没蒸透会有麻嘴感，筷子能轻松戳穿才算好。',
    '别打太细，留一点颗粒才是手作感。'
  ],
  fidelity:'门店用芋泥粉 + 鲜芋头混合（成本考虑），纯芋头版颜色偏灰但香气更真。',
  steps:[
    {title:'蒸芋头', desc:'芋头去皮切 3cm 块，上锅蒸 25 分钟。', timer:1500, act:'加热', add:[]},
    {title:'压泥', desc:'趁热加糖 40g 压成泥。', act:'捣碎', add:[]},
    {title:'调顺滑', desc:'加牛奶 80ml、淡奶油 40ml，搅到顺滑但保留颗粒。', act:'搅拌',
     add:[{name:'芋泥', pct:100, color:'#C9A0DC'}]},
    {title:'调色', desc:'颜色太灰可以加一小块紫薯一起蒸。', act:'完成', add:[]}
  ]
},

{
  id:'base-yuyuan', name:'芋圆', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#E8D5C4',
  layers:[{name:'芋圆', pct:100, color:'#D8C0A8'}],
  intro:'和珍珠一个逻辑，但芋圆用的是芋头泥加木薯粉。粉加多了硬，加少了粘。',
  ingredients:[
    {name:'芋头', amount:'150g', note:'蒸熟压泥'},
    {name:'木薯粉', amount:'80g'},
    {name:'糖', amount:'20g'},
    {name:'沸水', amount:'30ml'}
  ],
  tools:['锅','案板'],
  pitfalls:[
    '木薯粉要一点点加，加到面团不粘手就停。',
    '芋圆煮好必须过冷水，不然会粘成一坨。'
  ],
  fidelity:'门店用冷冻半成品，家庭自制口感更软糯，但费时约 40 分钟。',
  steps:[
    {title:'压芋泥', desc:'芋头蒸熟压成泥，加糖 20g 拌匀。', act:'捣碎', add:[]},
    {title:'和面', desc:'加木薯粉 80g，边加边揉，太干加 30ml 沸水。', act:'搅拌',
     add:[{name:'面团', pct:60, color:'#C9B09A'}]},
    {title:'搓条切粒', desc:'搓成长条，切 1.5cm 小段。', act:'备料', add:[]},
    {title:'煮', desc:'水沸下锅，浮起后再煮 2 分钟。', timer:420, act:'加热',
     add:[{name:'芋圆', pct:40, color:'#D8C0A8'}]},
    {title:'过冷水', desc:'捞出冲冷水到不粘手。', act:'冲洗', add:[]}
  ]
},

{
  id:'base-xiancao', name:'烧仙草', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#D4D4D8',
  layers:[{name:'仙草冻', pct:100, color:'#2A2A2A'}],
  intro:'仙草粉一定要先用冷水化开，直接倒热水会结成一团再也化不开。',
  ingredients:[
    {name:'仙草粉', amount:'20g', note:'或仙草干 50g 慢熬 4 小时'},
    {name:'冷水', amount:'100ml', note:'化粉用'},
    {name:'热水', amount:'400ml'},
    {name:'糖', amount:'20g', optional:true}
  ],
  tools:['锅','容器'],
  pitfalls:[
    '仙草粉直接倒热水必结块，先用冷水化。',
    '煮好后必须完全放凉才凝固，冷藏 2 小时。'
  ],
  fidelity:'门店用仙草干熬 4 小时，草香浓。仙草粉版口感接近但香气薄一半。',
  steps:[
    {title:'化粉', desc:'仙草粉 20g + 冷水 100ml 搅到无颗粒。', act:'搅拌', add:[]},
    {title:'煮', desc:'400ml 水烧开，倒入仙草液边倒边搅，煮沸后关火。', timer:300, act:'加热',
     add:[{name:'仙草液', pct:100, color:'#3A3A3A'}]},
    {title:'凝固', desc:'倒进容器放凉，冷藏 2 小时到完全凝固。', timer:7200, act:'焖',
     add:[{name:'仙草冻', pct:100, color:'#2A2A2A'}]},
    {title:'切块', desc:'切成 2cm 方块，泡在糖水里防干。', act:'备料', add:[]}
  ]
},

{
  id:'base-xuenuo', name:'血糯米', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#E4D4D8',
  layers:[{name:'血糯米', pct:100, color:'#6B2C3E'}],
  intro:'不泡直接煮，外面烂了里面还是硬的。泡 4 小时是底线。',
  ingredients:[
    {name:'血糯米', amount:'100g', note:'不是黑米，血糯米更黏'},
    {name:'水', amount:'300ml'},
    {name:'糖', amount:'30g'},
    {name:'炼乳', amount:'15g', optional:true}
  ],
  tools:['锅','滤网'],
  pitfalls:[
    '不泡直接煮要 1 小时且夹生。',
    '煮的时候水要没过两指，中途别加冷水。'
  ],
  fidelity:'门店用压力锅压 20 分钟，家庭普通锅 40 分钟，口感会稍硬一点。',
  steps:[
    {title:'泡米', desc:'血糯米 100g 淘洗，泡 4 小时到能掐断。', timer:14400, act:'浸泡', add:[]},
    {title:'煮', desc:'加 300ml 水，大火烧开转小火 40 分钟。', timer:2400, act:'加热',
     add:[{name:'血糯米', pct:100, color:'#6B2C3E'}]},
    {title:'调味', desc:'加糖 30g、炼乳 15g，搅匀焖 5 分钟。', act:'搅拌', add:[]}
  ]
},

{
  id:'base-zhishi-naigai', name:'芝士奶盖', category:'小料', brands:['通用'], isBase:true,
  method:'打泡', difficulty:2, temp:'冷热皆可', volume:0, bg:'#FEF9C3',
  layers:[{name:'芝士奶盖', pct:100, color:'#FFF8E7'}],
  intro:'奶盖必须咸。不咸的奶盖只是奶油，托不住茶的涩，喝两口就腻。',
  ingredients:[
    {name:'奶油奶酪', amount:'40g', note:'室温软化，冷的有颗粒'},
    {name:'淡奶油', amount:'100ml', note:'脂肪 35%'},
    {name:'牛奶', amount:'40ml'},
    {name:'糖', amount:'15g'},
    {name:'盐', amount:'2g', note:'这一撮盐是灵魂，别省'}
  ],
  tools:['打泡器'],
  pitfalls:[
    '奶酪不软化就打，会有明显颗粒。',
    '打过头会变硬块，打到能缓慢流动就停。'
  ],
  fidelity:'门店用定制芝士基底粉，家庭奶酪 + 淡奶油能到八五成，盐量是关键。',
  steps:[
    {title:'软化奶酪', desc:'奶油奶酪 40g 室温放 20 分钟。', act:'备料', add:[]},
    {title:'混合', desc:'奶酪 + 牛奶 40ml + 糖 15g + 盐 2g，先搅到顺滑无颗粒。', act:'搅拌', add:[]},
    {title:'打发', desc:'加淡奶油 100ml，中速打到能缓慢流动（约 6 分发）。', timer:90, act:'搅拌',
     add:[{name:'芝士奶盖', pct:100, color:'#FFF8E7'}]},
    {title:'静置', desc:'冷藏 15 分钟再铺，会更稳定不易沉。', timer:900, act:'完成', add:[]}
  ]
},

{
  id:'base-xian-naigai', name:'咸奶盖', category:'小料', brands:['通用'], isBase:true,
  method:'打泡', difficulty:1, temp:'冷热皆可', volume:0, bg:'#F5F5F4',
  layers:[{name:'咸奶盖', pct:100, color:'#FFFFFF'}],
  intro:'不加奶酪，只用淡奶油和盐，更轻盈。配果茶比芝士奶盖更合适。',
  ingredients:[
    {name:'淡奶油', amount:'120ml'},
    {name:'牛奶', amount:'30ml'},
    {name:'糖', amount:'12g'},
    {name:'盐', amount:'2g'}
  ],
  tools:['打泡器'],
  pitfalls:[
    '盐量 2g 是上限，多了会齁。',
    '淡奶油必须冷藏 12 小时以上才打得起来。'
  ],
  fidelity:'所有品牌的做法都差不多，这层能完全复刻。',
  steps:[
    {title:'混合', desc:'淡奶油 120ml + 牛奶 30ml + 糖 12g + 盐 2g。', act:'备料', add:[]},
    {title:'打发', desc:'中速打到 6 分发，能流动但挂得住勺子。', timer:75, act:'搅拌',
     add:[{name:'咸奶盖', pct:100, color:'#FFFFFF'}]}
  ]
},

{
  id:'base-ximi', name:'西米', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:1, temp:'冷热皆可', volume:0, bg:'#FAFAF9',
  layers:[{name:'西米', pct:100, color:'#FFF6DC'}],
  intro:'小西米比大西米好用，快熟且不容易夹生。冷水下锅会化掉，必须水沸下。',
  ingredients:[
    {name:'小西米', amount:'50g'},
    {name:'水', amount:'1000ml', note:'水要多，西米会吸'},
    {name:'糖', amount:'10g', optional:true}
  ],
  tools:['锅','滤网'],
  pitfalls:[
    '冷水下锅西米会化，必须水沸腾后下。',
    '煮完不过冷水会粘成一坨，冲 30 秒。'
  ],
  fidelity:'这个没有品牌差异，做法完全一致。',
  steps:[
    {title:'煮', desc:'水沸下西米，中火煮 15 分钟，煮到中心剩小白点。', timer:900, act:'加热',
     add:[{name:'西米', pct:100, color:'#FFF6DC'}]},
    {title:'焖', desc:'关火盖盖焖 8 分钟，白点消失。', timer:480, act:'焖', add:[]},
    {title:'过冷水', desc:'滤网冲冷水到粒粒分明。', act:'冲洗', add:[]},
    {title:'泡糖水', desc:'泡在糖水里防粘，冷藏可用 1 天。', act:'完成', add:[]}
  ]
},

{
  id:'base-cuibobo', name:'脆啵啵', category:'小料', brands:['通用'], isBase:true,
  method:'直调', difficulty:1, temp:'冷热皆可', volume:0, bg:'#E7E5E4',
  layers:[{name:'脆啵啵', pct:100, color:'#C98A45'}],
  intro:'买现成的最省事，自己做要用海藻酸钠，不值得。开封后冷藏，3 天内用完。',
  ingredients:[
    {name:'脆啵啵', amount:'100g', note:'超市或网购现成罐头'}
  ],
  tools:['杯子'],
  pitfalls:[
    '泡在茶里超过 4 小时就会变软，失去「脆」。',
    '别冷冻，解冻后全是水。'
  ],
  fidelity:'这一项直接买成品，和门店用的是同一种货。',
  steps:[
    {title:'沥干', desc:'罐头倒出沥掉糖水。', act:'备料', add:[]},
    {title:'冲洗', desc:'清水冲一遍，去掉多余的甜。', act:'冲洗', add:[]},
    {title:'待用', desc:'最后加进杯子，别提前泡。', act:'完成',
     add:[{name:'脆啵啵', pct:100, color:'#C98A45'}]}
  ]
},

{
  id:'base-yeguo', name:'椰果', category:'小料', brands:['通用'], isBase:true,
  method:'直调', difficulty:1, temp:'冷热皆可', volume:0, bg:'#FEFCE8',
  layers:[{name:'椰果', pct:100, color:'#FBF6E4'}],
  intro:'椰果不是椰子肉，是椰子水发酵出来的纤维素，所以没什么味道，主要是口感。',
  ingredients:[
    {name:'椰果', amount:'100g', note:'现成罐头'},
    {name:'糖水', amount:'50ml', optional:true, note:'泡着防干'}
  ],
  tools:['杯子'],
  pitfalls:[
    '椰果本身没味道，泡在糖水里才有甜。',
    '开封后冷藏，一周内用完。'
  ],
  fidelity:'所有品牌用的都是同类罐头，零差异。',
  steps:[
    {title:'沥干冲洗', desc:'倒出沥水，清水冲一遍。', act:'冲洗', add:[]},
    {title:'泡糖水', desc:'泡在淡糖水里待用。', act:'完成',
     add:[{name:'椰果', pct:100, color:'#FBF6E4'}]}
  ]
},

{
  id:'base-hongdou', name:'蜜红豆', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#E8D5D0',
  layers:[{name:'蜜红豆', pct:100, color:'#8B3A3A'}],
  intro:'红豆要煮到开花但不能烂成泥。加糖的时机很关键——煮软了才加，早了煮不烂。',
  ingredients:[
    {name:'红豆', amount:'150g', note:'赤小豆更粉，红豆更甜'},
    {name:'水', amount:'600ml'},
    {name:'糖', amount:'60g', note:'煮软后再加'},
    {name:'盐', amount:'1g', optional:true}
  ],
  tools:['锅'],
  pitfalls:[
    '糖和豆一起煮，豆永远煮不烂。',
    '煮的时候别搅太勤，会烂成泥。'
  ],
  fidelity:'门店用蜜红豆罐头，家庭现煮更香但要 1 小时。',
  steps:[
    {title:'泡豆', desc:'红豆泡 4 小时。', timer:14400, act:'浸泡', add:[]},
    {title:'煮豆', desc:'加水 600ml 煮 40 分钟到开花。', timer:2400, act:'加热',
     add:[{name:'蜜红豆', pct:100, color:'#8B3A3A'}]},
    {title:'加糖', desc:'关火加糖 60g、盐 1g，泡 30 分钟入味。', timer:1800, act:'完成', add:[]}
  ]
},

{
  id:'base-buding', name:'布丁', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#FEF3C7',
  layers:[{name:'布丁', pct:100, color:'#F2C879'}],
  intro:'吉利丁要用冰水泡软，热水泡会化掉失去凝固力。',
  ingredients:[
    {name:'牛奶', amount:'300ml'},
    {name:'吉利丁片', amount:'8g', note:'冰水泡软'},
    {name:'糖', amount:'40g'},
    {name:'香草精', amount:'2ml', optional:true}
  ],
  tools:['锅','模具'],
  pitfalls:[
    '吉利丁用温水泡会直接化在水里，必须冰水。',
    '牛奶不能煮沸，超过 80℃ 吉利丁会失效。'
  ],
  fidelity:'门店用布丁粉，家庭用吉利丁更天然，口感更嫩。',
  steps:[
    {title:'泡吉利丁', desc:'吉利丁片 8g 放冰水里泡 5 分钟到软。', timer:300, act:'浸泡', add:[]},
    {title:'热牛奶', desc:'牛奶 300ml + 糖 40g 加热到 70℃，别煮沸。', timer:120, act:'加热', add:[]},
    {title:'混合', desc:'挤干吉利丁放进热奶搅化，加香草精。', act:'搅拌',
     add:[{name:'布丁液', pct:100, color:'#F7DCA8'}]},
    {title:'冷藏', desc:'倒模冷藏 4 小时到凝固。', timer:14400, act:'焖',
     add:[{name:'布丁', pct:100, color:'#F2C879'}]}
  ]
},

{
  id:'base-heitang-buding', name:'黑糖布丁', category:'小料', brands:['卡旺卡'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#D6B48A',
  layers:[{name:'黑糖布丁', pct:100, color:'#C98A45'}],
  intro:'卡旺卡黑全套里的那个黑糖布丁。黑糖比白糖多一层焦香，颜色也更好看。',
  ingredients:[
    {name:'牛奶', amount:'250ml'},
    {name:'黑糖', amount:'50g'},
    {name:'吉利丁片', amount:'8g'},
    {name:'淡奶油', amount:'50ml', optional:true}
  ],
  tools:['锅','模具'],
  pitfalls:[
    '黑糖要先化开再入奶，直接撒会结块。',
    '吉利丁必须冰水泡软。'
  ],
  fidelity:'卡旺卡中央厨房配送，家庭版口感和它很接近。',
  steps:[
    {title:'化黑糖', desc:'黑糖 50g 加 30ml 水小火化开。', act:'加热',
     add:[{name:'黑糖液', pct:30, color:'#8B5A2B'}]},
    {title:'混合', desc:'黑糖液 + 温牛奶 250ml + 泡软吉利丁，搅匀。', act:'搅拌',
     add:[{name:'布丁液', pct:60, color:'#D6B48A'}]},
    {title:'冷藏', desc:'倒模冷藏 4 小时。', timer:14400, act:'焖',
     add:[{name:'黑糖布丁', pct:100, color:'#C98A45'}]}
  ]
},

{
  id:'base-heimi', name:'黑米爆珠', category:'小料', brands:['卡旺卡'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#C7C2BE',
  layers:[{name:'黑米爆珠', pct:100, color:'#3D2B1F'}],
  intro:'咬开有黑米香的小爆珠。买现成的最稳，自己做要海藻酸钠 + 乳酸钙，太折腾。',
  ingredients:[
    {name:'黑米爆珠', amount:'80g', note:'现成罐头'},
    {name:'黑糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子'],
  pitfalls:[
    '爆珠皮薄，别用力搅，会破。',
    '开封后冷藏，3 天内用完。'
  ],
  fidelity:'直接买成品，和门店同源。',
  steps:[
    {title:'沥干', desc:'倒出沥掉保存液。', act:'备料', add:[]},
    {title:'冲洗', desc:'清水轻轻冲一遍，别用力。', act:'冲洗', add:[]},
    {title:'拌糖', desc:'拌 10ml 黑糖浆，最后加进杯子。', act:'完成',
     add:[{name:'黑米爆珠', pct:100, color:'#3D2B1F'}]}
  ]
},

{
  id:'base-mati', name:'马蹄丸子', category:'小料', brands:['卡旺卡'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#F5F0E6',
  layers:[{name:'马蹄丸子', pct:100, color:'#F0E6D2'}],
  intro:'马蹄切碎拌糯米粉，煮出来外糯内脆。卡旺卡徽州酒酿里那个脆脆的东西就是它。',
  ingredients:[
    {name:'马蹄', amount:'150g', note:'去皮，切 3mm 小丁'},
    {name:'糯米粉', amount:'50g'},
    {name:'糖', amount:'15g'}
  ],
  tools:['锅','案板'],
  pitfalls:[
    '马蹄不能剁太碎，要保留脆感。',
    '煮 2 分钟就够，久了就不脆了。'
  ],
  fidelity:'卡旺卡用现做马蹄丸子，家庭版复原度高，关键是别煮久。',
  steps:[
    {title:'切马蹄', desc:'马蹄去皮切 3mm 小丁。', act:'备料', add:[]},
    {title:'拌粉', desc:'加糯米粉 50g、糖 15g，拌到能捏成团。', act:'搅拌',
     add:[{name:'丸子团', pct:70, color:'#F5F0E6'}]},
    {title:'搓丸', desc:'搓成 1cm 小球。', act:'备料', add:[]},
    {title:'煮', desc:'水沸下锅，浮起后再煮 2 分钟，捞出过冷水。', timer:180, act:'加热',
     add:[{name:'马蹄丸子', pct:100, color:'#F0E6D2'}]}
  ]
},

{
  id:'base-guihua-bingfen', name:'桂花冰粉', category:'小料', brands:['卡旺卡'], isBase:true,
  method:'需煮', difficulty:1, temp:'冷热皆可', volume:0, bg:'#F5E6C8',
  layers:[{name:'桂花冰粉', pct:100, color:'#F5E6C8'}],
  intro:'冰粉粉冲开冷藏就成，加桂花蜜就有了香。夏天配酸奶或者奶茶都合适。',
  ingredients:[
    {name:'冰粉粉', amount:'5g'},
    {name:'热水', amount:'100ml', note:'必须沸水'},
    {name:'桂花蜜', amount:'15ml'}
  ],
  tools:['碗','容器'],
  pitfalls:[
    '冰粉粉要用沸水冲，水温不够凝固不了。',
    '冷藏 2 小时以上才成型，急不得。'
  ],
  fidelity:'门店用现制冰粉，家庭用冰粉粉零差异。',
  steps:[
    {title:'冲粉', desc:'冰粉粉 5g 加沸水 100ml，搅到完全溶解。', act:'搅拌', add:[]},
    {title:'调味', desc:'加桂花蜜 15ml 搅匀。', act:'搅拌', add:[]},
    {title:'冷藏', desc:'倒进容器冷藏 2 小时到凝固。', timer:7200, act:'焖',
     add:[{name:'桂花冰粉', pct:100, color:'#F5E6C8'}]},
    {title:'切块', desc:'切 2cm 方块待用。', act:'备料', add:[]}
  ]
},

{
  id:'base-bigen', name:'碧根果碎', category:'小料', brands:['卡旺卡'], isBase:true,
  method:'直调', difficulty:1, temp:'冷热皆可', volume:0, bg:'#D2B48C',
  layers:[{name:'碧根果碎', pct:100, color:'#B08850'}],
  intro:'买熟的，别买生的。要烤一下才香，凉了再压碎，趁热压会出油变糊。',
  ingredients:[
    {name:'碧根果', amount:'50g', note:'熟的原味，不是盐焗'},
    {name:'糖粉', amount:'5g', optional:true}
  ],
  tools:['烤箱或平底锅','刀'],
  pitfalls:[
    '压太碎会变成粉，要保留 3mm 左右的颗粒。',
    '做好必须密封，受潮就软了。'
  ],
  fidelity:'门店用现烤碧根果，家庭用同款坚果零差异。',
  steps:[
    {title:'烤香', desc:'150℃ 烤 6 分钟，或平底锅小火炒 3 分钟。', timer:360, act:'加热', add:[]},
    {title:'晾凉', desc:'完全放凉后再压，热的会出油。', timer:600, act:'完成', add:[]},
    {title:'压碎', desc:'装袋用擀面杖压成粗粒。', act:'捣碎',
     add:[{name:'碧根果碎', pct:100, color:'#B08850'}]}
  ]
},

{
  id:'base-bingsha', name:'冰沙基底', category:'小料', brands:['通用'], isBase:true,
  method:'打沙', difficulty:1, temp:'冰', volume:0, bg:'#E0F2FE',
  layers:[{name:'冰沙', pct:100, color:'#EAF4FA'}],
  intro:'所有冰沙类饮品的通用底座。冰和液体的比例是 2:1，少了打不成沙。',
  ingredients:[
    {name:'冰块', amount:'200g'},
    {name:'液体', amount:'100ml', note:'牛奶、果汁或茶汤都行'}
  ],
  tools:['料理机'],
  pitfalls:[
    '冰少于液体两倍重量就打不成沙，只会是稀的。',
    '要高速打，低速会打成碎冰颗粒。'
  ],
  fidelity:'这是通用做法，所有品牌都一样。',
  steps:[
    {title:'配比', desc:'按冰块 2 : 液体 1 的比例放进料理机。', act:'备料', add:[]},
    {title:'高速打', desc:'高速打 25-30 秒，打到没有明显冰粒。', timer:30, act:'打泥',
     add:[{name:'冰沙', pct:100, color:'#EAF4FA'}]},
    {title:'立刻用', desc:'打好的冰沙 3 分钟内会开始化，尽快装杯。', act:'完成', add:[]}
  ]
},

{
  id:'base-mashu', name:'麻薯', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:3, temp:'冷热皆可', volume:0, bg:'#E5D5B8',
  layers:[{name:'麻薯', pct:100, color:'#F5EFE0'}],
  intro:'能不能拉出丝，全看糯米粉和液体的比例。1:1.2 是手感最好的时候，稀了成糊，稠了成块。',
  ingredients:[
    {name:'糯米粉', amount:'50g'},
    {name:'牛奶', amount:'60ml'},
    {name:'糖', amount:'15g'},
    {name:'黄油', amount:'5g', optional:true, note:'增香防粘'}
  ],
  tools:['锅','刮刀'],
  pitfalls:[
    '必须小火，且全程不停搅，一停就糊底。',
    '煮到成团、能拉出 10cm 长丝就关火，再煮就硬了。'
  ],
  fidelity:'门店用麻薯预拌粉，出丝稳定。纯糯米粉需要试一两次找手感。',
  steps:[
    {title:'调浆', desc:'糯米粉 50g + 牛奶 60ml + 糖 15g，搅到无颗粒。', act:'搅拌', add:[]},
    {title:'小火煮', desc:'倒进锅，小火边煮边搅，约 5 分钟到成团。', timer:300, act:'加热', add:[]},
    {title:'加黄油', desc:'关火加黄油 5g，搅到吸收，能拉出长丝。', act:'搅拌',
     add:[{name:'麻薯', pct:100, color:'#F5EFE0'}]},
    {title:'保温', desc:'盖住保持温度，凉了会变硬，用前微波 10 秒。', act:'完成', add:[]}
  ]
},

{
  id:'base-xiaozhenzhu', name:'小珍珠', category:'小料', brands:['通用'], isBase:true,
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:0, bg:'#BFAE96',
  layers:[{name:'小珍珠', pct:100, color:'#2E1B10'}],
  intro:'直径 5mm 左右，比常规珍珠小一半。煮的时间短、口感更嫩，春水堂原版用的就是这个。',
  ingredients:[
    {name:'木薯小珍珠', amount:'80g', note:'买现成的生珍珠，别买干的'},
    {name:'黑糖', amount:'15g'},
    {name:'水', amount:'1000ml'}
  ],
  tools:['锅','滤网'],
  pitfalls:[
    '小珍珠煮 12 分钟就够，超过 15 分钟会烂成一锅糊。',
    '水要多，小珍珠更密，水少了会粘。'
  ],
  fidelity:'这个没什么品牌差异，买对尺寸就行。',
  steps:[
    {title:'煮', desc:'水沸下小珍珠，中火煮 12 分钟，中途搅两次。', timer:720, act:'加热',
     add:[{name:'小珍珠', pct:100, color:'#2E1B10'}]},
    {title:'焖', desc:'关火盖盖焖 5 分钟。', timer:300, act:'焖', add:[]},
    {title:'过冷水拌糖', desc:'冲冷水到不粘，拌 15g 黑糖。', act:'冲洗', add:[]}
  ]
},

{
  id:'base-yeyunding', name:'椰云顶', category:'小料', brands:['通用'], isBase:true,
  method:'打泡', difficulty:2, temp:'冷热皆可', volume:0, bg:'#F0F9FF',
  layers:[{name:'椰云顶', pct:100, color:'#FDFBF6'}],
  intro:'椰浆打发成云朵状，浮在咖啡上。瑞幸椰云拿铁的那层就是这个，关键是椰浆必须冷藏够久。',
  ingredients:[
    {name:'浓椰浆', amount:'100ml', note:'脂肪 20% 以上，冷藏 12 小时'},
    {name:'糖', amount:'12g'},
    {name:'盐', amount:'0.5g', optional:true, note:'一点点，提椰香'}
  ],
  tools:['打泡器'],
  pitfalls:[
    '椰浆没冷藏够打不起来，会直接溅。',
    '打过头会油水分离，看到变稀就立刻停。'
  ],
  fidelity:'瑞幸用定制椰云基底，稳定性好。家庭椰浆打发后会快速消泡，做好 3 分钟内用完。',
  steps:[
    {title:'冷藏', desc:'椰浆整罐冷藏 12 小时以上，别摇晃。', timer:43200, act:'浸泡', add:[]},
    {title:'取稠的部分', desc:'开罐只取上层浓稠的椰浆 100ml，底下的水不要。', act:'备料', add:[]},
    {title:'打发', desc:'加糖 12g、盐 0.5g，中速打到浓稠能缓慢流动。', timer:80, act:'搅拌',
     add:[{name:'椰云顶', pct:100, color:'#FDFBF6'}]},
    {title:'立刻用', desc:'3 分钟内铺到饮品上，久置会消泡。', act:'完成', add:[]}
  ]
},

{
  id:'base-dongguazhuan', name:'冬瓜茶砖', category:'小料', brands:['台湾古早味'], isBase:true,
  method:'需煮', difficulty:1, temp:'冷热皆可', volume:0, bg:'#C9B99A',
  layers:[{name:'冬瓜茶砖', pct:100, color:'#A8763E'}],
  intro:'不是自己做的，是买的。但挑和用有讲究——颜色太深的加了焦糖色，太浅的糖不够。',
  ingredients:[
    {name:'冬瓜茶砖', amount:'1 块', note:'约 80g，超市或网购'},
    {name:'水', amount:'600ml'}
  ],
  tools:['锅'],
  pitfalls:[
    '茶砖很硬，要切碎再煮，整块下锅要煮很久。',
    '煮的时候要搅，糖沉底会糊。'
  ],
  fidelity:'台湾老店用冬瓜加黑糖熬 4 小时，茶砖版风味接近但少了焦香。想更好买「古法」款。',
  steps:[
    {title:'切碎', desc:'茶砖切小块，越小化得越快。', act:'备料', add:[]},
    {title:'化开', desc:'加 200ml 水小火煮 5 分钟，边煮边搅到完全化开。', timer:300, act:'加热',
     add:[{name:'冬瓜茶浓缩', pct:40, color:'#A8763E'}]},
    {title:'稀释', desc:'加剩的 400ml 水煮开，关火放凉。', act:'倒入',
     add:[{name:'冬瓜茶', pct:60, color:'#C99A5E'}]},
    {title:'冷藏', desc:'装瓶冷藏，能放 5 天。', act:'完成', add:[]}
  ]
}

]);
