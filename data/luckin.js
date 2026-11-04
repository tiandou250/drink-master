/* 瑞幸新品扩充：苹果系列 / 小黄油系列 / 牧场拿铁
   产品信息依据 2026 年官方上新与公开报道整理。
   分层数组第一项 = 杯底，最后一项 = 杯口。 */
window.DRINKS = (window.DRINKS || []).concat([

/* ---------- 皇后限定苹果系列（2026-08 迪士尼反派联名） ---------- */

{
  id:'lk-apple-latte', name:'皇后限定苹果拿铁', category:'咖啡', brands:['瑞幸'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F87171',
  layers:[
    {name:'苹果汁奶底', pct:62, color:'#F5E3C4'},
    {name:'咖啡层', pct:38, color:'#8A5A32'}
  ],
  intro:'2026 年 8 月迪士尼反派联名「皇后限定苹果系列」的奶咖款。IIAC 金奖豆现磨配阿克苏苹果汁，果香把奶咖的甜腻拉开，入口丝滑。',
  ingredients:[
    {name:'100% 苹果汁', amount:'120ml', note:'阿克苏苹果汁最好，别用苹果味饮料'},
    {name:'全脂牛奶', amount:'150ml', note:'冷藏'},
    {name:'浓缩咖啡', amount:'60ml', note:'深烘豆，速溶黑咖啡 4g + 热水 60ml 也行'},
    {name:'冰块', amount:'约 150g'},
    {name:'糖浆', amount:'10ml', optional:true, note:'苹果汁够甜可以不加'}
  ],
  tools:['杯子','摇壶','勺子'],
  pitfalls:[
    '苹果汁是酸性的，直接倒进牛奶会让蛋白质结絮，出现豆腐花一样的颗粒。',
    '正确顺序是先把苹果汁和咖啡摇匀，再加冰，最后沿杯壁冲入牛奶。',
    '茶汤、果汁都要彻底放凉，温的会加速结絮。'
  ],
  fidelity:'门店用阿克苏苹果汁 + 定制拼配豆现萃，家用 100% 苹果汁加双份浓缩能到八成，果香会略薄。',
  steps:[
    {title:'备料', desc:'苹果汁、牛奶都提前冷藏，浓缩咖啡放凉。', act:'备料', add:[]},
    {title:'摇果汁咖啡', desc:'苹果汁 120ml + 浓缩 60ml + 糖浆，加冰摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'苹果汁咖啡', pct:48, color:'#C08A52'}]},
    {title:'加冰冲奶', desc:'杯里补满冰，沿杯壁缓慢冲入冷牛奶 150ml，不要搅。', act:'倒入',
     add:[{name:'冰块', pct:14, color:'#DCEFF6'},{name:'牛奶', pct:38, color:'#F5E3C4'}]},
    {title:'轻提一下', desc:'用勺子从底部提一次就够，让颜色有过渡，别摇开。', act:'搅拌', add:[]}
  ]
},

{
  id:'lk-apple-c-americano', name:'皇后限定苹果C美式', category:'咖啡', brands:['瑞幸'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#D9F99D',
  layers:[
    {name:'NFC 苹果汁', pct:66, color:'#E8C96A'},
    {name:'精粹咖啡', pct:34, color:'#4A2E1E'}
  ],
  intro:'苹果系列里的清爽款，24 小时鲜榨 NFC 苹果汁 + 瑞斯奇托精粹咖啡。没有奶，果酸和咖啡的坚果尾韵直接撞在一起。',
  ingredients:[
    {name:'NFC 苹果汁', amount:'200ml', note:'100% 果汁、非浓缩还原'},
    {name:'浓缩咖啡', amount:'40ml', note:'Ristretto 短萃取最好；家用 3g 速溶 + 热水 40ml'},
    {name:'冰块', amount:'约 180g'},
    {name:'糖浆', amount:'8ml', optional:true}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '别用苹果味汽水或浓缩果浆，甜腻会完全盖掉咖啡。',
    'Ristretto 是短萃取，同样粉量只取一半液量；用普通美式代替会偏淡。',
    '咖啡要最后淋，用勺背导流才能看到短暂的分层。'
  ],
  fidelity:'家庭用 NFC 苹果汁加双份浓缩相当接近，差别在门店的瑞斯奇托精粹更浓、更甜感。',
  steps:[
    {title:'杯底铺冰', desc:'冰块装到八分满。', act:'铺冰',
     add:[{name:'冰块', pct:34, color:'#DCEFF6'}]},
    {title:'倒苹果汁', desc:'NFC 苹果汁 200ml 倒到杯身七分满。', act:'倒入',
     add:[{name:'NFC 苹果汁', pct:46, color:'#E8C96A'}]},
    {title:'淋咖啡', desc:'勺背贴着液面，把 40ml 浓缩慢慢淋在顶层。', act:'淋入',
     add:[{name:'精粹咖啡', pct:20, color:'#4A2E1E'}]},
    {title:'喝前搅', desc:'第一口先尝分层，再搅匀喝。', act:'完成', add:[]}
  ]
},

{
  id:'lk-apple-c-icetea', name:'皇后限定苹果C冰茶', category:'果茶', brands:['瑞幸'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#DCFCE7',
  layers:[
    {name:'苹果茉莉茶', pct:82, color:'#E4D9A0'},
    {name:'苹果果肉', pct:18, color:'#E8B96A'}
  ],
  intro:'苹果系列里唯一不含咖啡的一杯，鲜萃茉莉花茶汤、0 茶粉，配阿克苏苹果汁，单杯约 130 大卡。茶香在前，果香在后。',
  ingredients:[
    {name:'茉莉绿茶', amount:'6g', note:'原叶茶，别用茶粉'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'100% 苹果汁', amount:'150ml'},
    {name:'苹果', amount:'半个', optional:true, note:'切薄片铺面'},
    {name:'冰块', amount:'约 150g'},
    {name:'糖浆', amount:'10ml', optional:true}
  ],
  tools:['杯子','滤网','摇壶'],
  pitfalls:[
    '茶汤必须放凉再兑果汁，热的会让果汁发酸、颜色变浑。',
    '绿茶 85℃ 泡 3 分钟就滤，久了涩味会压过苹果香。',
    '门店用 0 茶粉鲜萃，家用茶粉冲的会有粉感。'
  ],
  fidelity:'用原叶茉莉茶加 100% 苹果汁，还原度九成，是这一系列里最容易在家复刻的一杯。',
  steps:[
    {title:'泡茉莉茶', desc:'85℃ 水 200ml 泡 3 分钟，滤掉茶叶，放凉。', timer:180, act:'冲泡',
     add:[{name:'茉莉茶汤', pct:42, color:'#DCE3A8'}]},
    {title:'兑苹果汁', desc:'茶汤 + 苹果汁 150ml + 糖浆，摇 10 秒。', timer:10, act:'摇匀',
     add:[{name:'苹果茉莉茶', pct:40, color:'#E4D9A0'}]},
    {title:'装杯加冰', desc:'倒进杯子补冰，铺苹果薄片。', act:'铺冰',
     add:[{name:'苹果果肉', pct:12, color:'#E8B96A'},{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

/* ---------- 小黄油系列（瑞幸原创，2024 上市，2026 年两周年累计 7 亿杯） ---------- */

{
  id:'lk-butter-americano', name:'小黄油美式', category:'咖啡', brands:['瑞幸'],
  method:'直调', difficulty:2, temp:'冰', volume:450, bg:'#F7E3A1',
  layers:[
    {name:'黄油风味奶', pct:28, color:'#F0DCA6'},
    {name:'冰水', pct:42, color:'#E8E1D5'},
    {name:'浓缩咖啡', pct:30, color:'#3B2416'}
  ],
  intro:'瑞幸原创，2024 年上市。不是往咖啡里丢黄油块，而是加「黄油丝绒风味奶」（含新西兰进口无水黄油），咖啡焦苦撞上黄油奶香，喝起来像液体爆米花。大杯冰饮约 173 大卡、212mg 咖啡因。',
  ingredients:[
    {name:'无水黄油', amount:'3g', note:'ghee；没有就用无盐黄油融化后撇去浮沫'},
    {name:'淡奶油', amount:'20ml'},
    {name:'牛奶', amount:'30ml'},
    {name:'浓缩咖啡', amount:'60ml', note:'深烘豆，家用 4g 速溶 + 热水 60ml'},
    {name:'冰水', amount:'120ml'},
    {name:'冰块', amount:'约 180g'}
  ],
  tools:['小锅','打泡器','杯子','勺子'],
  pitfalls:[
    '融化的黄油直接倒进咖啡会浮一层油花，必须先和淡奶油、牛奶乳化成风味奶。',
    '做冰的。热的会让甜感和油腻感都加倍。',
    '风味奶本身带甜，别再加糖；官方建议「不另外加糖」。',
    '它不是纯黑咖啡，含乳制品，乳糖不耐受要避开。'
  ],
  fidelity:'门店用定制黄油丝绒风味奶 + IIAC 金奖豆。家庭自制乳化液能做到八成，爆米花香主要来自无水黄油，别省。',
  steps:[
    {title:'做黄油风味奶', desc:'无水黄油 3g 融化，加淡奶油 20ml、牛奶 30ml，用打泡器打到完全乳化、没有油星。', timer:60, act:'搅拌',
     add:[{name:'黄油风味奶', pct:26, color:'#F0DCA6'}]},
    {title:'杯底铺冰', desc:'冰块装到八分满，倒冰水 120ml。想试「全冰去水」就把冰水省掉、冰加满。', act:'铺冰',
     add:[{name:'冰水', pct:42, color:'#DCEFF6'}]},
    {title:'冲咖啡', desc:'浓缩 60ml 沿杯壁倒入。', act:'倒入',
     add:[{name:'浓缩咖啡', pct:22, color:'#3B2416'}]},
    {title:'淋风味奶', desc:'黄油风味奶用勺背淋在顶层，喝前搅匀。', act:'淋入', add:[]}
  ]
},

{
  id:'lk-butter-latte', name:'小黄油拿铁', category:'咖啡', brands:['瑞幸'],
  method:'直调', difficulty:2, temp:'冷热皆可', volume:450, bg:'#EBCB84',
  layers:[
    {name:'黄油奶底', pct:64, color:'#EAD3A0'},
    {name:'咖啡层', pct:36, color:'#7A4A28'}
  ],
  intro:'小黄油系列的奶咖款，把爆米花香放进牛奶里，比美式醇厚顺滑。截至 2026 年 1 月累计卖出 2.3 亿杯，是这个系列真正出圈的一杯。',
  ingredients:[
    {name:'无水黄油', amount:'4g'},
    {name:'淡奶油', amount:'25ml'},
    {name:'全脂牛奶', amount:'180ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'冰块', amount:'约 150g'},
    {name:'糖浆', amount:'8ml', optional:true}
  ],
  tools:['小锅','打泡器','杯子'],
  pitfalls:[
    '黄油必须乳化后再入杯，直接加会出现油花和蜡口感。',
    '牛奶加热别超过 65℃，超过会有煮熟味并压掉黄油香。',
    '糖要少，风味奶自带甜感。'
  ],
  fidelity:'门店用定制奶底，家庭用无水黄油乳化液能到八五成，香气会更「真黄油」一点。',
  steps:[
    {title:'乳化黄油', desc:'无水黄油 4g 融化，加淡奶油 25ml 打到顺滑无油星。', timer:60, act:'搅拌',
     add:[{name:'黄油乳', pct:18, color:'#F0DCA6'}]},
    {title:'调奶底', desc:'黄油乳 + 牛奶 180ml 混匀，热饮就加热到 65℃。', timer:90, act:'加热',
     add:[{name:'黄油奶底', pct:44, color:'#EAD3A0'}]},
    {title:'加冰', desc:'冰饮先加冰，热饮跳过这步。', act:'铺冰',
     add:[{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'冲浓缩', desc:'60ml 浓缩沿杯壁倒入，喝前搅匀。', act:'倒入',
     add:[{name:'咖啡层', pct:28, color:'#7A4A28'}]}
  ]
},

{
  id:'lk-butter-cookie-latte', name:'小黄油曲奇拿铁', category:'咖啡', brands:['瑞幸'],
  method:'打泡', difficulty:3, temp:'冷热皆可', volume:500, bg:'#D9B382',
  layers:[
    {name:'黑糖黄油奶', pct:58, color:'#C89E68'},
    {name:'咖啡层', pct:24, color:'#6B4426'},
    {name:'鲜打奶盖', pct:18, color:'#FFF6E2'}
  ],
  intro:'2026 年 10 月小黄油系列两周年纪念款。焦香黑糖 × 黄油奶香，定制奶底含黑糖与新西兰无水黄油，顶上是每日鲜打的奶盖，像把黄油曲奇泡进咖啡里。',
  ingredients:[
    {name:'黑糖', amount:'20g'},
    {name:'热水', amount:'20ml', note:'化黑糖'},
    {name:'无水黄油', amount:'4g'},
    {name:'淡奶油', amount:'80ml', note:'50ml 打奶盖、30ml 调奶底'},
    {name:'全脂牛奶', amount:'180ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'盐', amount:'1g', note:'奶盖用'}
  ],
  tools:['小锅','打泡器','杯子'],
  pitfalls:[
    '黑糖要熬成能挂壁的糖浆，直接撒黑糖粉会沉底结块。',
    '奶盖打到能缓慢流动就停，太稠会整块沉下去。',
    '黄油先乳化再和黑糖浆混，否则表面浮油。'
  ],
  fidelity:'门店用定制黑糖黄油奶底 + 鲜打奶盖，家庭版香气接近，奶盖稳定性差一点，建议 10 分钟内喝完。',
  steps:[
    {title:'熬黑糖浆', desc:'黑糖 20g + 热水 20ml 小火熬到浓稠能挂勺，放凉。', timer:180, act:'加热',
     add:[{name:'黑糖浆', pct:12, color:'#8B5A2B'}]},
    {title:'调黄油奶底', desc:'无水黄油 4g 乳化后，加黑糖浆、牛奶 180ml、淡奶油 30ml 搅匀。', act:'搅拌',
     add:[{name:'黑糖黄油奶', pct:46, color:'#C89E68'}]},
    {title:'冲咖啡', desc:'加冰后倒入浓缩 60ml。', act:'倒入',
     add:[{name:'咖啡层', pct:24, color:'#6B4426'},{name:'冰块', pct:6, color:'#DCEFF6'}]},
    {title:'打奶盖', desc:'淡奶油 50ml + 盐 1g 打到缓慢流动，铺在表面。', timer:90, act:'铺面',
     add:[{name:'鲜打奶盖', pct:18, color:'#FFF6E2'}]}
  ]
},

{
  id:'lk-butter-crisp-apple', name:'小黄油脆苹果拿铁', category:'咖啡', brands:['瑞幸'],
  method:'打泡', difficulty:3, temp:'冰', volume:500, bg:'#F3C9A0',
  layers:[
    {name:'苹果黄油奶', pct:52, color:'#E8CBA0'},
    {name:'咖啡层', pct:22, color:'#7A4A28'},
    {name:'芝士奶盖', pct:18, color:'#FFF3DC'},
    {name:'焦糖与脆片', pct:8, color:'#C6883E'}
  ],
  intro:'2026 马年新春限定，把小黄油和苹果系列合到一杯：芝士奶盖上铺脆苹果片、可颂碎（黄油酥皮碎），再淋咸香焦糖酱。鲜甜果香中和爆米花香，专门用来解奶咖的甜腻。',
  ingredients:[
    {name:'100% 苹果汁', amount:'80ml'},
    {name:'无水黄油', amount:'3g'},
    {name:'淡奶油', amount:'70ml'},
    {name:'奶油奶酪', amount:'20g', note:'芝士奶盖用'},
    {name:'全脂牛奶', amount:'150ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'焦糖酱', amount:'15g'},
    {name:'苹果脆片', amount:'8 片', optional:true},
    {name:'黄油酥皮碎', amount:'10g', optional:true, note:'可颂碎；用酥皮点心掰碎也行'},
    {name:'海盐', amount:'1g'}
  ],
  tools:['打泡器','杯子','勺子'],
  pitfalls:[
    '苹果汁遇奶会结絮，先和咖啡混匀再冲奶。',
    '苹果脆片和酥皮碎一定最后撒，早放会吸潮回软，嚼起来就不脆了。',
    '焦糖酱沿杯壁淋，直接倒中间会沉成一坨。',
    '奶盖里那 1g 盐别省，不咸的奶盖托不住焦糖的甜。'
  ],
  fidelity:'门店用定制苹果黄油奶底和现打芝士奶盖，家庭版胜在能放真苹果脆片，但奶盖质地会略粗。',
  steps:[
    {title:'调苹果黄油底', desc:'无水黄油 3g 乳化，加苹果汁 80ml、牛奶 150ml 混匀。', act:'搅拌',
     add:[{name:'苹果黄油奶', pct:52, color:'#E8CBA0'}]},
    {title:'加冰冲咖啡', desc:'杯里补冰，倒入浓缩 60ml，轻搅。', act:'倒入',
     add:[{name:'咖啡层', pct:22, color:'#7A4A28'},{name:'冰块', pct:6, color:'#DCEFF6'}]},
    {title:'打芝士奶盖', desc:'奶油奶酪 20g + 淡奶油 50ml + 海盐 1g 打发，厚厚铺一层。', timer:100, act:'铺面',
     add:[{name:'芝士奶盖', pct:16, color:'#FFF3DC'}]},
    {title:'淋酱撒料', desc:'沿杯壁淋焦糖酱，最后撒苹果脆片和酥皮碎。', act:'铺面',
     add:[{name:'焦糖与脆片', pct:8, color:'#C6883E'}]}
  ]
},

/* ---------- 牧场奶源拿铁 ---------- */

{
  id:'lk-telunsu-latte', name:'特仑苏·专属牧场拿铁', category:'咖啡', brands:['瑞幸'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:450, bg:'#DBEAFE',
  layers:[
    {name:'牧场牛奶', pct:74, color:'#FBF6E8'},
    {name:'浓缩咖啡', pct:26, color:'#5A3A22'}
  ],
  intro:'2026 马年新春的「高端局」拿铁，主打 100% 特仑苏专属牧场奶源，官方标注整杯约 15g 蛋白、526mg 钙。没有糖浆、没有风味添加，奶就是主角。',
  ingredients:[
    {name:'全脂牛奶', amount:'300ml', note:'选蛋白质 3.3g/100ml 以上的高品质奶'},
    {name:'浓缩咖啡', amount:'60ml', note:'中深烘，家用 4g 速溶 + 热水 60ml'}
  ],
  tools:['杯子','小锅'],
  pitfalls:[
    '别加糖、别加风味糖浆，这杯喝的就是奶本身的甜。',
    '牛奶加热不要超过 65℃，煮沸会让蛋白质变性、奶香散掉。',
    '咖啡豆别用太浅烘的果酸豆，酸味会和奶香打架。'
  ],
  fidelity:'门店用指定牧场奶源，家庭买高蛋白全脂奶几乎零差异，是全部瑞幸饮品里最容易复刻的一杯。',
  steps:[
    {title:'温奶', desc:'牛奶 300ml 加热到 65℃；做冰饮就直接用冷藏奶。', timer:120, act:'加热',
     add:[{name:'牧场牛奶', pct:70, color:'#FBF6E8'}]},
    {title:'萃浓缩', desc:'取浓缩咖啡 60ml。', act:'冲出',
     add:[{name:'浓缩咖啡', pct:26, color:'#5A3A22'}]},
    {title:'组合', desc:'咖啡倒进杯，沿杯壁冲入牛奶，喝前轻搅。', act:'倒入', add:[]}
  ]
}

]);
