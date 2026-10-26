/* 特调 / 沙冰 / 奶昔 12 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'mocha-bale', name:'抹茶芝士芭乐', category:'特调', brands:['真茶屋'],
  method:'打沙', difficulty:3, temp:'冰', volume:500, bg:'#E9D5FF',
  layers:[
    {name:'红心芭乐泥', pct:26, color:'#E8607A'},
    {name:'抹茶奶', pct:44, color:'#7BA05B'},
    {name:'芝士奶盖', pct:30, color:'#FFF8E7'}
  ],
  intro:'红心芭乐配抹茶，看着不搭，喝起来居然对。真茶屋靠这一杯卖出千万杯，是它的首创。',
  ingredients:[
    {name:'红心芭乐', amount:'1 个', note:'要熟软的，硬的没味'},
    {name:'抹茶粉', amount:'5g', note:'一级千目抹茶'},
    {name:'牛奶', amount:'180ml'},
    {name:'奶油奶酪', amount:'25g'},
    {name:'淡奶油', amount:'50ml'},
    {name:'糖', amount:'20g'},
    {name:'盐', amount:'1g'}
  ],
  tools:['料理机','打泡器','杯子'],
  pitfalls:[
    '芭乐籽很硬，打碎前先挖掉。',
    '抹茶遇奶要现做现喝，放久会氧化发黄。'
  ],
  fidelity:'真茶屋用一级千目抹茶，家庭用普通抹茶粉香气会弱，别用含糖抹茶粉。',
  steps:[
    {title:'处理芭乐', desc:'芭乐去皮去籽，切块。', act:'备料', add:[]},
    {title:'打芭乐泥', desc:'芭乐块打 15 秒成泥，铺在杯底。', timer:15, act:'打泥',
     add:[{name:'红心芭乐泥', pct:26, color:'#E8607A'}]},
    {title:'点抹茶', desc:'抹茶 5g 过筛，加 80℃ 水 50ml 刷匀。', timer:30, act:'搅拌',
     add:[{name:'抹茶液', pct:14, color:'#5C8040'}]},
    {title:'调抹茶奶', desc:'抹茶液 + 牛奶 180ml + 糖，搅匀倒入。', act:'倒入',
     add:[{name:'抹茶奶', pct:32, color:'#7BA05B'}]},
    {title:'打芝士奶盖', desc:'奶酪 + 淡奶油 + 糖 + 盐打到顺滑，铺最上面。', timer:60, act:'铺面',
     add:[{name:'芝士奶盖', pct:28, color:'#FFF8E7'}]}
  ]
},

{
  id:'kafei-xingbingle', name:'咖啡星冰乐', category:'特调', brands:['星巴克'],
  method:'打沙', difficulty:2, temp:'冰', volume:450, bg:'#BAE6FD',
  layers:[
    {name:'咖啡冰沙', pct:82, color:'#7A5C44'},
    {name:'奶油顶', pct:18, color:'#FFFFFF'}
  ],
  intro:'星冰乐的秘诀是冰量要多、打得够碎。冰少了就是冰咖啡，不是星冰乐。',
  ingredients:[
    {name:'浓缩咖啡', amount:'80ml', note:'放凉'},
    {name:'牛奶', amount:'100ml'},
    {name:'糖浆', amount:'25ml'},
    {name:'淡奶油', amount:'50ml', optional:true},
    {name:'冰块', amount:'约 250g', note:'冰要多，这是关键'}
  ],
  tools:['料理机','打泡器','杯子'],
  pitfalls:[
    '冰少于 200g 打不出沙感，会变成稀汤。',
    '咖啡必须放凉，热的会把冰瞬间化掉。'
  ],
  fidelity:'星巴克用专用星冰乐基底，家庭用咖啡 + 牛奶 + 足量冰能到八成。',
  steps:[
    {title:'备咖啡', desc:'浓缩 80ml 加糖浆 25ml 搅匀，放凉。', act:'备料',
     add:[{name:'咖啡液', pct:30, color:'#7A5C44'}]},
    {title:'打冰沙', desc:'咖啡液 + 牛奶 100ml + 冰块 250g，高速打 30 秒。', timer:30, act:'打泥',
     add:[{name:'咖啡冰沙', pct:56, color:'#7A5C44'}]},
    {title:'装杯', desc:'倒入杯子，留顶部空间。', act:'倒入', add:[]},
    {title:'挤奶油', desc:'淡奶油 50ml 打发，挤成螺旋塔。', timer:45, act:'铺面',
     add:[{name:'奶油顶', pct:16, color:'#FFFFFF'}]}
  ]
},

{
  id:'zhishi-naigai', name:'芝士奶盖茶', category:'特调', brands:['喜茶','奈雪的茶','卡旺卡'],
  method:'打泡', difficulty:2, temp:'冰', volume:500, bg:'#DBEAFE',
  layers:[
    {name:'茶汤', pct:72, color:'#D9C48A'},
    {name:'芝士奶盖', pct:28, color:'#FFF8E7'}
  ],
  intro:'喜茶起家的那杯。奶盖要咸，咸才能托住茶的涩。「不用吸管直接喝」是正确喝法。',
  ingredients:[
    {name:'茉莉绿茶', amount:'7g'},
    {name:'热水', amount:'250ml', note:'85℃'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'60ml'},
    {name:'牛奶', amount:'30ml'},
    {name:'糖', amount:'12g'},
    {name:'盐', amount:'1.5g', note:'这一撮盐是灵魂'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '奶盖不咸就只是奶油，盐 1.5g 不能省。',
    '奶盖要打到最后能缓慢流动，太稠会沉、太稀会散。'
  ],
  fidelity:'喜茶用定制芝士基底，家庭奶酪 + 淡奶油能到八五成，盐量是关键差别。',
  steps:[
    {title:'泡茶', desc:'85℃ 水 250ml 泡 3 分钟，滤掉茶叶，加冰放凉。', timer:180, act:'冲泡',
     add:[{name:'茶汤', pct:70, color:'#D9C48A'}]},
    {title:'软化奶酪', desc:'奶油奶酪 30g 室温软化 20 分钟。', act:'备料', add:[]},
    {title:'打奶盖', desc:'奶酪 + 淡奶油 60ml + 牛奶 30ml + 糖 12g + 盐 1.5g，打到顺滑能流动。', timer:90, act:'搅拌',
     add:[{name:'芝士奶盖', pct:28, color:'#FFF8E7'}]},
    {title:'铺盖', desc:'茶汤倒杯，奶盖用勺子背铺在表面，厚约 1.5cm。', act:'铺面', add:[]}
  ]
},

{
  id:'ganlao-mocha', name:'干酪超浓抹茶', category:'特调', brands:['真茶屋'],
  method:'分层', difficulty:2, temp:'冰', volume:450, bg:'#D9F99D',
  layers:[
    {name:'抹茶液', pct:54, color:'#4A6B33'},
    {name:'牛奶', pct:26, color:'#FAF4E9'},
    {name:'干酪奶盖', pct:20, color:'#FFF3D6'}
  ],
  intro:'抹茶浓度是普通抹茶拿铁的三倍。苦到发涩，但配上咸干酪奶盖就平衡了。',
  ingredients:[
    {name:'抹茶粉', amount:'12g', note:'三倍量，别怕苦'},
    {name:'热水', amount:'80ml', note:'80℃'},
    {name:'牛奶', amount:'150ml'},
    {name:'奶油奶酪', amount:'40g'},
    {name:'淡奶油', amount:'40ml'},
    {name:'糖', amount:'15g'},
    {name:'盐', amount:'2g'}
  ],
  tools:['茶筅','打泡器','杯子'],
  pitfalls:[
    '抹茶粉必须过筛，12g 结块会更明显。',
    '奶盖盐要够，否则整杯苦到喝不下去。'
  ],
  fidelity:'真茶屋用一级千目抹茶 + 定制干酪，家庭版抹茶粉品质决定成败。',
  steps:[
    {title:'筛抹茶', desc:'抹茶粉 12g 过筛。', act:'备料', add:[]},
    {title:'点茶', desc:'加 80℃ 水 80ml，茶筅刷 40 秒到浓稠起泡。', timer:40, act:'搅拌',
     add:[{name:'抹茶液', pct:52, color:'#4A6B33'}]},
    {title:'加奶', desc:'牛奶 150ml 加冰倒入，与抹茶混合。', act:'倒入',
     add:[{name:'牛奶', pct:28, color:'#FAF4E9'}]},
    {title:'打干酪奶盖', desc:'奶酪 + 淡奶油 + 糖 + 盐打稠，铺在最上面。', timer:90, act:'铺面',
     add:[{name:'干酪奶盖', pct:20, color:'#FFF3D6'}]}
  ]
},

{
  id:'guihua-jiuniang', name:'桂花酒酿奶茶', category:'特调', brands:['阿嬷手作','卡旺卡'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#FDE68A',
  layers:[
    {name:'酒酿', pct:26, color:'#F5EBDC'},
    {name:'桂花冰粉', pct:14, color:'#F5E6C8'},
    {name:'奶茶', pct:60, color:'#E0C9A0'}
  ],
  intro:'含微量酒精。酒酿的香和桂花的甜叠在一起，秋冬喝很暖。冰粉是口感担当。',
  ingredients:[
    {name:'酒酿', amount:'100g'},
    {name:'桂花蜜', amount:'15ml'},
    {name:'冰粉粉', amount:'5g', note:'做桂花冰粉'},
    {name:'红茶', amount:'150ml'},
    {name:'牛奶', amount:'150ml'},
    {name:'糖', amount:'10g'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '酒酿别煮沸，会失去酒香，最后加。',
    '含微量酒精，小孩孕妇别喝。'
  ],
  fidelity:'阿嬷手作用自家酿的米酒，家庭用超市酒酿，酒香会淡一层。',
  steps:[
    {title:'做桂花冰粉', desc:'冰粉粉 5g + 热水 100ml + 桂花蜜 5ml 化开，冷藏 2 小时切块。', timer:7200, act:'焖',
     add:[{name:'桂花冰粉', pct:14, color:'#F5E6C8'}]},
    {title:'煮奶茶', desc:'红茶 150ml + 牛奶 150ml + 糖 10g，小火加热别煮沸。', timer:180, act:'加热',
     add:[{name:'奶茶', pct:56, color:'#E0C9A0'}]},
    {title:'加酒酿', desc:'杯底放酒酿 100g，冲入奶茶。', act:'倒入',
     add:[{name:'酒酿', pct:26, color:'#F5EBDC'}]},
    {title:'加冰粉桂花蜜', desc:'放桂花冰粉块，淋 10ml 桂花蜜。', act:'铺面', add:[]}
  ]
},

{
  id:'caomei-naixi', name:'草莓摇摇奶昔', category:'特调', brands:['蜜雪冰城'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#FECDD3',
  layers:[
    {name:'草莓酱', pct:22, color:'#E63B4E'},
    {name:'奶昔', pct:78, color:'#FDF0F2'}
  ],
  intro:'蜜雪的平价快乐，六块钱。就是草莓酱加奶昔，简单但很上头，关键是草莓酱要够酸。',
  ingredients:[
    {name:'草莓', amount:'120g', note:'或草莓果酱 60g'},
    {name:'牛奶', amount:'200ml'},
    {name:'冰淇淋', amount:'80g', note:'香草味，这是奶昔浓稠的关键'},
    {name:'糖', amount:'15g'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '不加冰淇淋就是草莓牛奶，稠不起来。',
    '冰太少会太稀，摇不出奶昔的质地。'
  ],
  fidelity:'蜜雪用冰淇淋机现打，家庭用现成香草冰淇淋能到九成。',
  steps:[
    {title:'处理草莓', desc:'草莓一半压成酱，一半切块。', act:'捣碎',
     add:[{name:'草莓酱', pct:24, color:'#E63B4E'}]},
    {title:'打奶昔', desc:'牛奶 200ml + 冰淇淋 80g + 糖 + 冰块，打 25 秒。', timer:25, act:'打泥',
     add:[{name:'奶昔', pct:68, color:'#FDF0F2'}]},
    {title:'装杯', desc:'倒入杯子，表面放草莓块。', act:'铺面', add:[]}
  ]
},

{
  id:'mocha-xingbingle', name:'抹茶星冰乐', category:'特调', brands:['星巴克'],
  method:'打沙', difficulty:2, temp:'冰', volume:450, bg:'#BBF7D0',
  layers:[
    {name:'抹茶冰沙', pct:80, color:'#6E9450'},
    {name:'奶油顶', pct:20, color:'#FFFFFF'}
  ],
  intro:'抹茶版星冰乐，甜度比咖啡版高。抹茶粉要过筛，否则打完还是有颗粒。',
  ingredients:[
    {name:'抹茶粉', amount:'8g'},
    {name:'热水', amount:'50ml', note:'80℃'},
    {name:'牛奶', amount:'150ml'},
    {name:'糖浆', amount:'30ml'},
    {name:'淡奶油', amount:'50ml', optional:true},
    {name:'冰块', amount:'约 250g'}
  ],
  tools:['料理机','打泡器','杯子'],
  pitfalls:[
    '抹茶粉不过筛会有颗粒，打完还是渣。',
    '冰量必须够，不然就是抹茶牛奶。'
  ],
  fidelity:'星巴克用抹茶星冰乐基底粉，家庭用纯抹茶粉香气更好但需要更多糖。',
  steps:[
    {title:'点抹茶', desc:'抹茶 8g 过筛，加 80℃ 水 50ml 刷匀。', timer:30, act:'搅拌',
     add:[{name:'抹茶液', pct:24, color:'#4A6B33'}]},
    {title:'打沙', desc:'抹茶液 + 牛奶 + 糖浆 + 冰 250g，打 30 秒。', timer:30, act:'打泥',
     add:[{name:'抹茶冰沙', pct:60, color:'#6E9450'}]},
    {title:'挤奶油', desc:'打发淡奶油挤顶。', timer:45, act:'铺面',
     add:[{name:'奶油顶', pct:16, color:'#FFFFFF'}]}
  ]
},

{
  id:'keke-xingbingle', name:'可可星冰乐', category:'特调', brands:['星巴克'],
  method:'打沙', difficulty:2, temp:'冰', volume:450, bg:'#E0E7FF',
  layers:[
    {name:'可可冰沙', pct:80, color:'#5A3A22'},
    {name:'奶油顶', pct:20, color:'#FFFFFF'}
  ],
  intro:'三款星冰乐里最甜的。可可粉跟咖啡一样会结块，得先用热水调糊。',
  ingredients:[
    {name:'无糖可可粉', amount:'18g'},
    {name:'热水', amount:'60ml'},
    {name:'牛奶', amount:'130ml'},
    {name:'糖', amount:'30g'},
    {name:'淡奶油', amount:'50ml', optional:true},
    {name:'冰块', amount:'约 250g'}
  ],
  tools:['料理机','打泡器','杯子'],
  pitfalls:[
    '可可粉必须调成糊，直接倒进料理机会结块。',
    '糖 30g 是下限，可可本身很苦。'
  ],
  fidelity:'星巴克用巧克力糖浆，家庭用可可粉更纯粹但需要更多糖。',
  steps:[
    {title:'调可可糊', desc:'可可粉 18g + 糖 30g + 热水 60ml 调成糊。', act:'搅拌',
     add:[{name:'可可液', pct:24, color:'#5A3A22'}]},
    {title:'打沙', desc:'可可糊 + 牛奶 130ml + 冰 250g，打 30 秒。', timer:30, act:'打泥',
     add:[{name:'可可冰沙', pct:60, color:'#5A3A22'}]},
    {title:'挤奶油', desc:'打发淡奶油挤成塔。', timer:45, act:'铺面',
     add:[{name:'奶油顶', pct:16, color:'#FFFFFF'}]}
  ]
},

{
  id:'bingqilin-hongcha', name:'冰淇淋红茶', category:'特调', brands:['一点点','蜜雪冰城'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FEF3C7',
  layers:[
    {name:'香草冰淇淋', pct:30, color:'#FFF8E7'},
    {name:'红茶', pct:70, color:'#B8860B'}
  ],
  intro:'一球冰淇淋沉在红茶里，慢慢化开。喝的顺序有讲究：先吸一口茶，再喝化了的部分。',
  ingredients:[
    {name:'锡兰红茶', amount:'7g'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'香草冰淇淋', amount:'1 大球', note:'约 80g'},
    {name:'糖浆', amount:'15ml'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['杯子','冰淇淋勺'],
  pitfalls:[
    '茶必须放凉，热茶会把冰淇淋瞬间化光。',
    '冰淇淋放杯底，倒茶时才不会飞溅。'
  ],
  fidelity:'一点点用大球香草冰淇淋，家庭用任何香草冰淇淋都行，这杯容错率很高。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 200ml 泡 4 分钟，滤掉茶叶，加冰放凉。', timer:240, act:'冲泡',
     add:[{name:'红茶', pct:64, color:'#B8860B'}]},
    {title:'放冰淇淋', desc:'杯底挖一球冰淇淋。', act:'备料',
     add:[{name:'香草冰淇淋', pct:28, color:'#FFF8E7'}]},
    {title:'倒茶', desc:'沿杯壁缓慢倒冷红茶 200ml + 糖浆，别冲散冰淇淋。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'guihua-minai', name:'桂花米奶', category:'特调', brands:['阿嬷手作'], nocaf:true,
  method:'需煮', difficulty:3, temp:'热', volume:400, bg:'#FEF9C3',
  layers:[
    {name:'米浆', pct:68, color:'#F5F0E0'},
    {name:'牛奶', pct:26, color:'#FDFBF6'},
    {name:'桂花蜜', pct:6, color:'#E8B923'}
  ],
  intro:'米要提前泡，打出来才细。米浆有天然的米甜，比糖更温和。喝不惯的人会觉得像米糊。',
  ingredients:[
    {name:'大米', amount:'60g', note:'提前泡 4 小时'},
    {name:'水', amount:'400ml'},
    {name:'牛奶', amount:'120ml'},
    {name:'桂花蜜', amount:'20ml'},
    {name:'冰糖', amount:'15g', optional:true}
  ],
  tools:['料理机','锅','滤网'],
  pitfalls:[
    '米不泡直接打会粗糙，至少泡 4 小时。',
    '煮米浆要一直搅，容易糊底。'
  ],
  fidelity:'阿嬷手作用石磨现磨米浆，家庭料理机会粗一些，过筛两遍能改善。',
  steps:[
    {title:'泡米', desc:'大米 60g 泡 4 小时，泡到能捏碎。', timer:14400, act:'浸泡', add:[]},
    {title:'打米浆', desc:'泡好的米 + 400ml 水打成浆，过筛两遍。', timer:60, act:'打泥',
     add:[{name:'米浆', pct:66, color:'#F5F0E0'}]},
    {title:'煮米浆', desc:'小火加热，边煮边搅 8 分钟到浓稠。', timer:480, act:'加热', add:[]},
    {title:'加奶调甜', desc:'倒牛奶 120ml、冰糖，搅匀。', act:'倒入',
     add:[{name:'牛奶', pct:28, color:'#FDFBF6'}]},
    {title:'淋桂花蜜', desc:'表面淋桂花蜜 20ml。', act:'铺面',
     add:[{name:'桂花蜜', pct:6, color:'#E8B923'}]}
  ]
},

{
  id:'mangguo-shabing', name:'芒果沙冰', category:'特调', brands:['各品牌通用'], nocaf:true,
  method:'打沙', difficulty:1, temp:'冰', volume:500, bg:'#FDE047',
  layers:[
    {name:'芒果冰沙', pct:86, color:'#F2A33C'},
    {name:'芒果块', pct:14, color:'#F7B84E'}
  ],
  intro:'跟芒果酸奶的区别是不加奶，纯果肉加冰。芒果要冻过再打，沙感才绵。',
  ingredients:[
    {name:'芒果', amount:'250g', note:'冷冻 4 小时以上'},
    {name:'糖浆', amount:'20ml', optional:true},
    {name:'柠檬汁', amount:'5ml', optional:true},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['料理机','杯子'],
  pitfalls:[
    '常温芒果打不出沙，必须冻过。',
    '冷冻芒果很硬，先切块再冻。'
  ],
  fidelity:'所有品牌都是这个思路，还原度 100%，关键在冻果。',
  steps:[
    {title:'冻芒果', desc:'芒果切块冷冻 4 小时。', timer:14400, act:'备料', add:[]},
    {title:'打沙', desc:'冻芒果 + 冰块 + 糖浆，打 25 秒到绵密。', timer:25, act:'打泥',
     add:[{name:'芒果冰沙', pct:82, color:'#F2A33C'}]},
    {title:'装杯', desc:'倒入杯子，表面放几块鲜芒果。', act:'铺面',
     add:[{name:'芒果块', pct:14, color:'#F7B84E'}]}
  ]
},

{
  id:'zhen-mocha', name:'真抹茶冰博克', category:'特调', brands:['真茶屋'],
  method:'分层', difficulty:2, temp:'冰', volume:450, bg:'#A7F3D0',
  layers:[
    {name:'抹茶液', pct:40, color:'#5C8040'},
    {name:'冰博克牛奶', pct:60, color:'#FDFAF2'}
  ],
  intro:'冰博克是提纯过的牛奶，甜度是普通奶的两倍。配浓抹茶刚好平衡，不用加糖。',
  ingredients:[
    {name:'抹茶粉', amount:'8g'},
    {name:'热水', amount:'70ml', note:'80℃'},
    {name:'冰博克牛奶', amount:'180ml', note:'没有就用全脂奶 + 10ml 淡奶油'},
    {name:'糖', amount:'8g', optional:true}
  ],
  tools:['茶筅','杯子'],
  pitfalls:[
    '冰博克本身甜，糖可以先不加，尝了再说。',
    '抹茶液要放凉再倒，热的会冲散分层。'
  ],
  fidelity:'真茶屋用真抹茶 + 冰博克，两样都是核心，家庭版差别主要在冰博克。',
  steps:[
    {title:'点抹茶', desc:'抹茶 8g 过筛，加 80℃ 水 70ml 刷 40 秒。', timer:40, act:'搅拌',
     add:[{name:'抹茶液', pct:38, color:'#5C8040'}]},
    {title:'降温', desc:'抹茶液放凉或加一两块冰。', act:'降温', add:[]},
    {title:'倒冰博克', desc:'杯里先倒冰博克 180ml，再用勺背把抹茶液淋上去分层。', act:'淋入',
     add:[{name:'冰博克牛奶', pct:58, color:'#FDFAF2'}]}
  ]
},

{
  id:'hongsirong', name:'红丝绒拿铁', category:'特调', brands:['独立咖啡馆'], nocaf:true,
  method:'直调', difficulty:2, temp:'热', volume:400, bg:'#EFF6FF',
  layers:[
    {name:'红丝绒液', pct:44, color:'#C0392B'},
    {name:'热牛奶', pct:56, color:'#FBF4F2'}
  ],
  intro:'**不含咖啡**，粉红色来自红曲粉或甜菜根粉，不是色素。喝起来是白巧克力的甜，完全没有咖啡味。',
  ingredients:[
    {name:'红曲粉', amount:'3g', note:'或甜菜根粉，天然色素'},
    {name:'白巧克力', amount:'25g', note:'切碎好化'},
    {name:'牛奶', amount:'220ml'},
    {name:'淡奶油', amount:'30ml', optional:true},
    {name:'糖', amount:'10g', optional:true}
  ],
  tools:['锅','打泡器','杯子'],
  pitfalls:[
    '红曲粉放多了会有药味，3g 是上限。',
    '白巧克力要小火化，糊了就发苦。'
  ],
  fidelity:'咖啡馆用现成红丝绒糖浆，家庭用红曲 + 白巧能到八五成，颜色更自然。',
  steps:[
    {title:'化白巧', desc:'白巧克力 25g 加 30ml 牛奶，小火化开。', act:'加热',
     add:[{name:'白巧液', pct:18, color:'#F5E6E0'}]},
    {title:'调红丝绒', desc:'加红曲粉 3g 搅匀，过筛一次去颗粒。', act:'搅拌',
     add:[{name:'红丝绒液', pct:28, color:'#C0392B'}]},
    {title:'热牛奶', desc:'剩的牛奶 190ml 加热到 65℃。', timer:90, act:'加热',
     add:[{name:'热牛奶', pct:46, color:'#FBF4F2'}]},
    {title:'混合', desc:'红丝绒液倒杯底，冲入热牛奶，搅两下出粉白分层。', act:'倒入', add:[]}
  ]
},

{
  id:'zangzang-keke', name:'脏脏可可', category:'特调', brands:['各品牌通用'],
  method:'分层', difficulty:1, temp:'热', volume:400, bg:'#EEF2FF',
  layers:[
    {name:'可可挂壁', pct:14, color:'#3E2415'},
    {name:'热可可', pct:74, color:'#6B4423'},
    {name:'奶油顶', pct:12, color:'#FFFFFF'}
  ],
  intro:'可可版的脏脏杯。可可粉调稠了抹在杯壁上，喝的时候会往下流。视觉大于味道，但冬天很治愈。',
  ingredients:[
    {name:'无糖可可粉', amount:'20g', note:'其中 5g 用来挂壁'},
    {name:'热水', amount:'80ml'},
    {name:'牛奶', amount:'250ml'},
    {name:'糖', amount:'25g'},
    {name:'淡奶油', amount:'40ml', optional:true}
  ],
  tools:['锅','勺子','杯子'],
  pitfalls:[
    '挂壁的可可糊要够稠，稀了会滑到底。',
    '热可可别煮沸，会糊底发苦。'
  ],
  fidelity:'门店用巧克力酱挂壁更亮，家庭可可粉哑光但更香。',
  steps:[
    {title:'调挂壁糊', desc:'取 5g 可可粉 + 15ml 热水，调成稠糊。', act:'搅拌',
     add:[{name:'可可糊', pct:12, color:'#3E2415'}]},
    {title:'抹杯壁', desc:'用勺背把可可糊抹在杯壁内侧，抹出不规则流痕。', act:'挂壁', add:[]},
    {title:'煮热可可', desc:'剩的 15g 可可粉 + 糖 + 65ml 热水调糊，加牛奶 250ml 小火加热到 65℃。', timer:180, act:'加热',
     add:[{name:'热可可', pct:72, color:'#6B4423'}]},
    {title:'倒入挤奶油', desc:'倒进挂了壁的杯子，表面挤打发淡奶油。', timer:45, act:'铺面',
     add:[{name:'奶油顶', pct:12, color:'#FFFFFF'}]}
  ]
},

{
  id:'zhizhi-lvyan', name:'芝芝绿妍茶后', category:'特调', brands:['喜茶'],
  method:'打泡', difficulty:2, temp:'冰', volume:500, bg:'#C7D2FE',
  layers:[
    {name:'绿妍茶汤', pct:72, color:'#DCE3B8'},
    {name:'芝芝云顶', pct:27, color:'#FFF8E7'},
    {name:'抹茶粉', pct:1, color:'#7BA05B'}
  ],
  intro:'**2012 年喜茶的第一杯芝士茶**，前身叫「奶盐绿茶」。就是它开创「奶盖茶」这个品类，现在满街的芝士茶都是它的后代。',
  ingredients:[
    {name:'绿妍茶叶', amount:'7g', note:'或高窨次茉莉绿茶'},
    {name:'热水', amount:'240ml', note:'85℃'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'60ml'},
    {name:'牛奶', amount:'30ml'},
    {name:'糖', amount:'10g'},
    {name:'盐', amount:'1.5g'},
    {name:'抹茶粉', amount:'1g', optional:true, note:'撒顶用'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '奶盖必须有那一撮盐，这是「芝士」和「奶油」的分界线。',
    '喝法是不用吸管，直接对杯口抿，同时吃到奶盖和茶。'
  ],
  fidelity:'喜茶用无奶精芝芝云顶（动物奶油 + 真牛乳），家庭版做法一致，还原度能到九成。',
  steps:[
    {title:'泡绿妍', desc:'85℃ 水 240ml 泡 3 分钟，滤掉茶叶，加冰放凉。', timer:180, act:'冲泡',
     add:[{name:'绿妍茶汤', pct:70, color:'#DCE3B8'}]},
    {title:'软化奶酪', desc:'奶油奶酪 30g 室温软化 20 分钟。', act:'备料', add:[]},
    {title:'打芝芝云顶', desc:'奶酪 + 淡奶油 60ml + 牛奶 30ml + 糖 + 盐，打到顺滑能流动。', timer:90, act:'搅拌',
     add:[{name:'芝芝云顶', pct:27, color:'#FFF8E7'}]},
    {title:'铺顶撒粉', desc:'奶盖厚厚铺在茶上，筛一点抹茶粉。', act:'铺面',
     add:[{name:'抹茶粉', pct:1, color:'#7BA05B'}]}
  ]
},

{
  id:'zhizhi-jinfeng', name:'芝芝金凤茶王', category:'特调', brands:['喜茶'],
  method:'打泡', difficulty:2, temp:'冰', volume:500, bg:'#BFDBFE',
  layers:[
    {name:'金凤茶汤', pct:70, color:'#B08850'},
    {name:'芝芝云顶', pct:29, color:'#FFF8E7'},
    {name:'抹茶粉', pct:1, color:'#7BA05B'}
  ],
  intro:'和芝芝绿妍是同一个结构，茶底换成金凤茶王——一支炭焙乌龙，带焦糖香。茶底一换，整杯气质完全变了。',
  ingredients:[
    {name:'金凤茶王', amount:'7g', note:'或炭焙乌龙'},
    {name:'热水', amount:'240ml', note:'95℃'},
    {name:'奶油奶酪', amount:'30g'},
    {name:'淡奶油', amount:'60ml'},
    {name:'牛奶', amount:'30ml'},
    {name:'糖', amount:'10g'},
    {name:'盐', amount:'1.5g'}
  ],
  tools:['打泡器','杯子','滤网'],
  pitfalls:[
    '炭焙乌龙要沸水泡，85℃ 出不来焦糖香。',
    '茶汤必须放凉再铺奶盖，热茶会把奶盖冲散。'
  ],
  fidelity:'喜茶用定制金凤茶王，家用炭焙乌龙能到八成五，焦香会更直。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 240ml 泡 4 分钟，滤掉茶叶，加冰放凉。', timer:240, act:'冲泡',
     add:[{name:'金凤茶汤', pct:68, color:'#B08850'}]},
    {title:'打芝芝云顶', desc:'奶酪软化 + 淡奶油 + 牛奶 + 糖 + 盐，打顺滑。', timer:90, act:'搅拌',
     add:[{name:'芝芝云顶', pct:29, color:'#FFF8E7'}]},
    {title:'铺顶撒粉', desc:'奶盖铺满表面，筛抹茶粉。', act:'铺面',
     add:[{name:'抹茶粉', pct:1, color:'#7BA05B'}]}
  ]
},

{
  id:'shengda-yeye', name:'生打椰椰奶冻', category:'特调', brands:['喜茶'],
  method:'直调', difficulty:2, temp:'冰', volume:500, bg:'#E0F2FE',
  layers:[
    {name:'椰奶冻', pct:24, color:'#FDFBF6'},
    {name:'脆波波', pct:10, color:'#F0E0C0'},
    {name:'生椰乳', pct:66, color:'#F5EDE0'}
  ],
  intro:'2021 年椰系大爆发时上的产品。白得没什么颜色，但底下藏着大块椰奶冻和脆波波，一脆一糯。',
  ingredients:[
    {name:'椰子水', amount:'150ml', note:'取椰肉打浆用'},
    {name:'椰肉', amount:'80g', note:'或浓椰浆 100ml'},
    {name:'牛奶', amount:'100ml'},
    {name:'吉利丁片', amount:'5g', note:'做椰奶冻'},
    {name:'脆波波', amount:'40g', optional:true},
    {name:'糖', amount:'15g'}
  ],
  tools:['料理机','锅','杯子'],
  pitfalls:[
    '椰奶冻要提前 2 小时做，急不得。',
    '生椰乳要现打现用，放久了会分层。'
  ],
  fidelity:'喜茶用现打生椰乳，家庭用浓椰浆 + 椰子水调配最接近，纯椰浆会太浓。',
  steps:[
    {title:'做椰奶冻', desc:'椰浆 50ml + 牛奶 100ml + 糖 + 泡软吉利丁，搅化冷藏 2 小时切块。', timer:7200, act:'焖',
     add:[{name:'椰奶冻', pct:24, color:'#FDFBF6'}]},
    {title:'打生椰乳', desc:'椰肉 80g + 椰子水 150ml + 糖，打成乳白色。', timer:30, act:'打泥',
     add:[{name:'生椰乳', pct:62, color:'#F5EDE0'}]},
    {title:'组装', desc:'杯底放椰奶冻和脆波波，倒生椰乳加冰。', act:'倒入',
     add:[{name:'脆波波', pct:10, color:'#F0E0C0'},{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
}

]);
