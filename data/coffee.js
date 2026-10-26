/* 咖啡 18 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'shengye', name:'生椰拿铁', category:'咖啡', brands:['瑞幸','库迪','古茗'],
  method:'分层', difficulty:1, temp:'冰', volume:500, bg:'#FCD34D',
  layers:[
    {name:'浓缩咖啡', pct:25, color:'#6F4E37'},
    {name:'厚椰乳', pct:75, color:'#F0DFC8'}
  ],
  intro:'椰乳压底、咖啡浮面，靠密度分层。全程不用摇，倒的顺序错了就不分层。',
  ingredients:[
    {name:'厚椰乳', amount:'200ml', note:'冷藏过的。没有就用椰浆 100ml + 牛奶 100ml'},
    {name:'浓缩咖啡', amount:'60ml', note:'速溶黑咖啡 2g 加热水 60ml 也行'},
    {name:'冰块', amount:'约 150g'},
    {name:'糖浆', amount:'10ml', optional:true, note:'不加就是无糖版'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '咖啡直接倒会冲散分层，必须用勺子背面导流。',
    '厚椰乳要冷藏过，常温的挂不住冰。'
  ],
  fidelity:'门店用咖啡机现萃，家用速溶版咖啡味会薄。想更接近，用深烘豆手冲 60ml 替代。',
  steps:[
    {title:'杯底铺满冰块', desc:'冰块装到杯身八分满。少了会不够冰，多了椰乳放不下。', act:'铺冰',
     add:[{name:'冰块', pct:52, color:'#DCEFF6'}]},
    {title:'倒入厚椰乳', desc:'沿杯壁缓慢倒 200ml。不要直接冲在冰块中心，会溅。', act:'倒入',
     add:[{name:'厚椰乳', pct:36, color:'#F0DFC8'}]},
    {title:'淋入浓缩咖啡', desc:'勺子背面贴着椰乳液面，把咖啡顺着勺背慢慢淋下去。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:12, color:'#6F4E37'}]},
    {title:'不要搅拌', desc:'喝的时候再搅。现在搅了分层就没了，拍照也不好看。', act:'完成', add:[]}
  ]
},

{
  id:'bingmeishi', name:'冰美式', category:'咖啡', brands:['瑞幸','星巴克','库迪','Manner','幸运咖'],
  method:'直调', difficulty:1, temp:'冰', volume:400, bg:'#FBBF24',
  layers:[
    {name:'冰水', pct:72, color:'#E8E1D5'},
    {name:'浓缩咖啡', pct:28, color:'#3B2416'}
  ],
  intro:'只有咖啡和水，做砸了没有任何东西能遮。豆子新鲜度和水比例全暴露在这一杯里。',
  ingredients:[
    {name:'浓缩咖啡', amount:'60ml', note:'2 份意式，或速溶 2g 加热水 60ml'},
    {name:'冰水', amount:'220ml', note:'纯净水，别用自来水'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['杯子'],
  pitfalls:[
    '速溶粉用热水化开再兑冷水，直接冷水会结块。',
    '冰块太多会把咖啡冲淡，八分满就够。'
  ],
  fidelity:'门店用现萃浓缩，苦味干净带果酸。速溶版只有苦，建议换挂耳或冷萃液。',
  steps:[
    {title:'冰块打底', desc:'杯里装八分满冰块。', act:'铺冰',
     add:[{name:'冰块', pct:48, color:'#DCEFF6'}]},
    {title:'倒冰水', desc:'倒 220ml 冰水，留出咖啡的空间。', act:'倒入',
     add:[{name:'冰水', pct:32, color:'#E8E1D5'}]},
    {title:'淋咖啡', desc:'浓缩 60ml 从勺背淋进去，会自然沉下去形成渐变。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:20, color:'#3B2416'}]},
    {title:'搅不搅都行', desc:'想喝均匀就搅开，想看分层就别动。', act:'完成', add:[]}
  ]
},

{
  id:'houru', name:'厚乳拿铁', category:'咖啡', brands:['瑞幸','星巴克','Manner'],
  method:'分层', difficulty:1, temp:'冰', volume:500, bg:'#FDE68A',
  layers:[
    {name:'浓缩咖啡', pct:22, color:'#5A3A22'},
    {name:'厚乳', pct:78, color:'#FBF0DC'}
  ],
  intro:'把普通牛奶换成厚乳，奶味重一倍，苦味被压得几乎没了。怕苦的人第一杯该喝这个。',
  ingredients:[
    {name:'厚乳', amount:'200ml', note:'没有就用全脂奶 150ml + 淡奶油 50ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'冰块', amount:'约 140g'},
    {name:'糖浆', amount:'8ml', optional:true}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '厚乳本身就甜，糖别多加，容易腻。',
    '厚乳脂肪高，不冷藏会分层浮油。'
  ],
  fidelity:'门店用专用厚乳（提纯牛奶），家庭版用淡奶油兑全脂奶能到八成。',
  steps:[
    {title:'冰块打底', desc:'冰块装到八分满。', act:'铺冰',
     add:[{name:'冰块', pct:50, color:'#DCEFF6'}]},
    {title:'倒厚乳', desc:'沿杯壁倒 200ml 厚乳。', act:'倒入',
     add:[{name:'厚乳', pct:38, color:'#FBF0DC'}]},
    {title:'淋咖啡', desc:'勺背导流，咖啡会浮在上面。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:12, color:'#5A3A22'}]}
  ]
},

{
  id:'jiaotangm', name:'焦糖玛奇朵', category:'咖啡', brands:['星巴克','库迪','CoCo'],
  method:'分层', difficulty:2, temp:'冰', volume:450, bg:'#FB923C',
  layers:[
    {name:'焦糖酱', pct:12, color:'#8B4A15'},
    {name:'浓缩咖啡', pct:24, color:'#5A3A22'},
    {name:'牛奶', pct:64, color:'#FAF4E9'}
  ],
  intro:'玛奇朵的意思是「做记号」——用焦糖在奶泡上画格纹。家庭版省掉拉花，但分层顺序不能省。',
  ingredients:[
    {name:'焦糖酱', amount:'20ml', note:'买现成的，或白糖 30g 干熬到琥珀色加淡奶油'},
    {name:'牛奶', amount:'180ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '焦糖酱要挂杯壁，直接沉底就没那层视觉了。',
    '牛奶打发过会消泡，做完尽快喝。'
  ],
  fidelity:'星巴克用蒸汽打发牛奶出细奶泡，家用打泡器奶泡粗，口感会差一点。',
  steps:[
    {title:'焦糖挂壁', desc:'焦糖酱 15ml 倒进空杯，转一圈让杯壁挂着糖痕。', act:'挂壁',
     add:[{name:'焦糖酱', pct:14, color:'#8B4A15'}]},
    {title:'加冰倒奶', desc:'放冰块，倒牛奶 180ml 到七分满。', act:'倒入',
     add:[{name:'牛奶', pct:52, color:'#FAF4E9'},{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'加浓缩', desc:'勺背导流，让咖啡浮在奶上。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:18, color:'#5A3A22'}]},
    {title:'画格纹', desc:'剩下 5ml 焦糖酱装进裱花袋或保鲜袋剪小口，在表面画三横三竖。', act:'铺面',
     add:[{name:'焦糖格纹', pct:4, color:'#A85A20'}]}
  ]
},

{
  id:'zangzang', name:'脏脏咖啡', category:'咖啡', brands:['Manner','M Stand','瑞幸'],
  method:'分层', difficulty:2, temp:'冰', volume:400, bg:'#FDBA74',
  layers:[
    {name:'冰博克牛奶', pct:62, color:'#FDFAF2'},
    {name:'浓缩咖啡', pct:38, color:'#4A3020'}
  ],
  intro:'不搅，靠倾倒的冲击力在奶面上挂出脏脏的纹路。看着脏，喝起来最香。',
  ingredients:[
    {name:'冰博克牛奶', amount:'220ml', note:'普通全脂牛奶也行，但没那么甜'},
    {name:'浓缩咖啡', amount:'80ml', note:'要浓，2 份意式'},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '咖啡要冲下去才有纹路，慢慢淋就只会分层不会脏。',
    '奶必须很冰，温的挂不住纹路。'
  ],
  fidelity:'门店用冰博克提纯奶，家庭版用全脂牛奶，甜度会差一截。',
  steps:[
    {title:'冰杯', desc:'杯子放冷冻 5 分钟，或装满冰块转一圈倒掉。', act:'冰杯',
     add:[{name:'冰块', pct:22, color:'#DCEFF6'}]},
    {title:'倒冰奶', desc:'冰博克牛奶 220ml 倒到七分满。', act:'倒入',
     add:[{name:'冰博克牛奶', pct:52, color:'#FDFAF2'}]},
    {title:'冲出纹路', desc:'浓缩咖啡从 10cm 高处直接冲进奶面，让咖啡炸开挂壁。', act:'冲出',
     add:[{name:'浓缩咖啡', pct:26, color:'#4A3020'}]},
    {title:'不要搅', desc:'端起来直接喝，第一口是咖啡，最后一口是甜奶。', act:'完成', add:[]}
  ]
},

{
  id:'yanmai', name:'燕麦拿铁', category:'咖啡', brands:['星巴克','Manner','库迪'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:450, bg:'#FDE047',
  layers:[
    {name:'浓缩咖啡', pct:24, color:'#6B4A30'},
    {name:'燕麦奶', pct:76, color:'#E8DCC4'}
  ],
  intro:'乳糖不耐受的救命款。燕麦奶自带谷物甜，比牛奶更容易和咖啡合得来。',
  ingredients:[
    {name:'燕麦奶', amount:'200ml', note:'用咖啡专用的（Oatly 灰瓶那类），普通燕麦奶会结块'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'冰块', amount:'约 130g', optional:true, note:'热饮版省掉'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '普通燕麦奶遇酸会絮状分离，必须用咖啡师版。',
    '燕麦奶加热别超 65℃，太高会糊底。'
  ],
  fidelity:'门店用咖啡师专用燕麦奶，脂肪配比调过。家用普通款做热饮容易分层。',
  steps:[
    {title:'准备基底', desc:'冰饮先铺八分满冰块；热饮跳过这步，把杯子烫热。', act:'铺冰',
     add:[{name:'冰块', pct:44, color:'#DCEFF6'}]},
    {title:'倒燕麦奶', desc:'倒 200ml 燕麦奶。', act:'倒入',
     add:[{name:'燕麦奶', pct:42, color:'#E8DCC4'}]},
    {title:'加浓缩', desc:'冰饮用勺背导流；热饮直接倒进去。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:14, color:'#6B4A30'}]}
  ]
},

{
  id:'shengluo', name:'生酪拿铁', category:'咖啡', brands:['瑞幸','库迪'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#FEF08A',
  layers:[
    {name:'浓缩咖啡', pct:20, color:'#5A3A22'},
    {name:'生酪奶盖', pct:32, color:'#FFF8E8'},
    {name:'牛奶', pct:48, color:'#FAF4E9'}
  ],
  intro:'瑞幸把奶油奶酪打进奶盖里，喝起来像液体芝士蛋糕。整杯的关键是那层咸甜的生酪。',
  ingredients:[
    {name:'奶油奶酪', amount:'40g', note:'要室温软化，冷的不容易打匀'},
    {name:'淡奶油', amount:'60ml'},
    {name:'牛奶', amount:'150ml'},
    {name:'浓缩咖啡', amount:'60ml', note:'浓缩+牛奶混合液'},
    {name:'糖', amount:'10g'},
    {name:'盐', amount:'1g', note:'一小撮，提味用，别省'}
  ],
  tools:['打泡器','杯子'],
  pitfalls:[
    '奶油奶酪不软化就打，会有颗粒感。',
    '那撮盐是灵魂，没有它整杯会腻得发闷。'
  ],
  fidelity:'门店用均质机打生酪，家庭打泡器会有小颗粒，过筛一次能救。',
  steps:[
    {title:'软化奶酪', desc:'奶油奶酪 40g 室温放 20 分钟，或微波 10 秒。', act:'备料', add:[]},
    {title:'打生酪', desc:'奶酪 + 淡奶油 60ml + 糖 10g + 盐 1g，打到顺滑无颗粒。', act:'搅拌',
     add:[{name:'生酪奶盖', pct:30, color:'#FFF8E8'}]},
    {title:'铺奶底', desc:'杯里加冰，倒牛奶 150ml。', act:'倒入',
     add:[{name:'牛奶', pct:44, color:'#FAF4E9'},{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'加咖啡', desc:'勺背导流倒浓缩，会卡在奶和奶酪之间。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:14, color:'#5A3A22'}]}
  ]
},

{
  id:'sirong', name:'丝绒拿铁', category:'咖啡', brands:['瑞幸'],
  method:'分层', difficulty:1, temp:'冰', volume:500, bg:'#FEF3C7',
  layers:[
    {name:'浓缩咖啡', pct:20, color:'#5A3A22'},
    {name:'丝绒奶', pct:80, color:'#FDF7EC'}
  ],
  intro:'厚乳再加淡奶油，奶感厚到像在喝奶昔。几乎喝不出咖啡的苦，是给完全怕苦的人准备的。',
  ingredients:[
    {name:'全脂牛奶', amount:'150ml'},
    {name:'淡奶油', amount:'50ml', note:'脂肪 35% 那种，别用喷射奶油'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'冰块', amount:'约 140g'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '淡奶油别过量，超过 60ml 会腻到发飘。',
    '这一杯热量很高，别当日常水喝。'
  ],
  fidelity:'瑞幸的丝绒是定制乳基底，家用淡奶油兑奶能还原七八成口感。',
  steps:[
    {title:'铺冰', desc:'冰块八分满。', act:'铺冰',
     add:[{name:'冰块', pct:50, color:'#DCEFF6'}]},
    {title:'调丝绒奶', desc:'牛奶 150ml + 淡奶油 50ml 混匀倒入。', act:'倒入',
     add:[{name:'丝绒奶', pct:38, color:'#FDF7EC'}]},
    {title:'淋咖啡', desc:'勺背导流。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:12, color:'#5A3A22'}]}
  ]
},

{
  id:'yunshi', name:'陨石拿铁', category:'咖啡', brands:['瑞幸'],
  method:'直调', difficulty:1, temp:'冰', volume:500, bg:'#FED7AA',
  layers:[
    {name:'黑糖珍珠', pct:25, color:'#2E1B10'},
    {name:'牛奶', pct:55, color:'#FAF4E9'},
    {name:'浓缩咖啡', pct:20, color:'#5A3A22'}
  ],
  intro:'就是加了黑糖珍珠的拿铁。名字起得好，珍珠沉在底下像陨石。',
  ingredients:[
    {name:'黑糖珍珠', amount:'70g', note:'冷冻珍珠煮 5 分钟就能用'},
    {name:'牛奶', amount:'200ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'黑糖浆', amount:'15ml'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '珍珠煮完要拌糖浆，不然没甜味也没光泽。',
    '别用吸管搅拌，珍珠会全沉底。'
  ],
  fidelity:'门店用现煮黑糖珍珠，家庭冷冻珍珠口感偏硬，煮久一点。',
  steps:[
    {title:'煮珍珠', desc:'水沸下珍珠，煮 5-8 分钟到全浮起。', timer:480, act:'加热',
     add:[{name:'珍珠', pct:24, color:'#2E1B10'}]},
    {title:'拌黑糖', desc:'捞出拌 15ml 黑糖浆，趁热倒进杯子。', act:'搅拌',
     add:[{name:'黑糖浆', pct:8, color:'#5A3A20'}]},
    {title:'加冰加奶', desc:'放冰块，倒牛奶 200ml。', act:'倒入',
     add:[{name:'牛奶', pct:50, color:'#FAF4E9'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'淋咖啡', desc:'勺背导流，咖啡浮在最上层。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:12, color:'#5A3A22'}]}
  ]
},

{
  id:'bingxi', name:'冰吸生椰拿铁', category:'咖啡', brands:['瑞幸'],
  method:'分层', difficulty:1, temp:'冰', volume:500, bg:'#FCA5A5',
  layers:[
    {name:'薄荷糖浆', pct:8, color:'#7FD4C1'},
    {name:'厚椰乳', pct:68, color:'#F0DFC8'},
    {name:'浓缩咖啡', pct:24, color:'#6F4E37'}
  ],
  intro:'生椰拿铁加薄荷，喝下去喉咙一阵凉。核心是薄荷糖浆，多了像牙膏，少了没感觉。',
  ingredients:[
    {name:'厚椰乳', amount:'180ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'薄荷糖浆', amount:'12ml', note:'别超 15ml，过量会有牙膏感'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '薄荷糖浆必须先在杯底，倒上去就没有那股从下往上窜的凉意。',
    '薄荷和椰乳容易打架，糖浆别贪多。'
  ],
  fidelity:'瑞幸的冰吸版用了特调薄荷基底，家用薄荷糖浆凉感更冲、层次更薄。',
  steps:[
    {title:'薄荷垫底', desc:'薄荷糖浆 12ml 倒进空杯。', act:'倒入',
     add:[{name:'薄荷糖浆', pct:10, color:'#7FD4C1'}]},
    {title:'铺冰倒椰乳', desc:'加冰块到八分满，倒厚椰乳 180ml。', act:'倒入',
     add:[{name:'厚椰乳', pct:62, color:'#F0DFC8'},{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'淋咖啡', desc:'勺背导流，咖啡浮面。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:16, color:'#6F4E37'}]}
  ]
},

{
  id:'moli-hua', name:'茉莉花香拿铁', category:'咖啡', brands:['瑞幸'],
  method:'直调', difficulty:2, temp:'冰', volume:500, bg:'#FECACA',
  layers:[
    {name:'茉莉茶汤', pct:35, color:'#E8D9B8'},
    {name:'牛奶', pct:42, color:'#FAF4E9'},
    {name:'浓缩咖啡', pct:23, color:'#6B4A30'}
  ],
  intro:'用茉莉茶汤替代一部分牛奶，花香从咖啡缝里钻出来。茶汤必须够浓，不然全被咖啡盖掉。',
  ingredients:[
    {name:'茉莉绿茶', amount:'6g', note:'要比平时泡得浓一倍'},
    {name:'热水', amount:'150ml', note:'85℃'},
    {name:'牛奶', amount:'130ml'},
    {name:'浓缩咖啡', amount:'50ml'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '茶汤淡了整杯就只剩咖啡味，茶叶加到 6g。',
    '茶汤要放凉再加奶，热的会有腥气。'
  ],
  fidelity:'门店用茉莉花茶浓缩液，家用现泡茶汤香气足但涩感也重，泡 3 分钟就滤掉。',
  steps:[
    {title:'泡浓茶', desc:'6g 茉莉绿茶用 85℃ 水 150ml 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'茉莉茶汤', pct:32, color:'#E8D9B8'}]},
    {title:'加冰降温', desc:'放冰块搅到茶汤不烫手。', act:'降温',
     add:[{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'倒奶', desc:'沿杯壁倒牛奶 130ml。', act:'倒入',
     add:[{name:'牛奶', pct:38, color:'#FAF4E9'}]},
    {title:'加咖啡', desc:'勺背导流倒浓缩 50ml，让它浮在最上面。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:18, color:'#6B4A30'}]}
  ]
},

{
  id:'jiangxiang', name:'酱香拿铁', category:'咖啡', brands:['瑞幸'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#FFEDD5',
  layers:[
    {name:'厚乳', pct:68, color:'#FBF0DC'},
    {name:'浓缩咖啡', pct:24, color:'#5A3A22'},
    {name:'白酒风味', pct:8, color:'#E8DCC0'}
  ],
  intro:'含酒精。白酒香精和咖啡混在一起，爱的人很爱，不喝的人一口就摇头。开车别喝。',
  ingredients:[
    {name:'厚乳', amount:'180ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'白酒', amount:'5ml', note:'高度白酒（53 度），只要几滴就够香'},
    {name:'糖浆', amount:'8ml'},
    {name:'冰块', amount:'约 140g'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '白酒超过 8ml 会盖掉所有咖啡味，变成一杯酒。',
    '含酒精，喝完别开车，小孩孕妇不要喝。'
  ],
  fidelity:'瑞幸用含酒精的厚乳预调液，家用直接滴白酒，酒味更冲、更散。',
  steps:[
    {title:'铺冰', desc:'冰块装到八分满。', act:'铺冰',
     add:[{name:'冰块', pct:48, color:'#DCEFF6'}]},
    {title:'调酒乳', desc:'厚乳 180ml + 白酒 5ml + 糖浆 8ml 混匀倒下。', act:'倒入',
     add:[{name:'厚乳', pct:40, color:'#FBF0DC'}]},
    {title:'淋咖啡', desc:'勺背导流倒浓缩。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:12, color:'#5A3A22'}]}
  ]
},

{
  id:'chengC', name:'橙 C 美式', category:'咖啡', brands:['瑞幸','库迪'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#F59E0B',
  layers:[
    {name:'橙汁', pct:55, color:'#F5A623'},
    {name:'美式咖啡', pct:45, color:'#4A3020'}
  ],
  intro:'橙汁的酸配咖啡的苦，两极分化得很厉害。橙汁一定要用鲜榨或 NFC，浓缩还原汁会腥。',
  ingredients:[
    {name:'橙汁', amount:'180ml', note:'NFC 鲜榨，别用浓缩还原'},
    {name:'浓缩咖啡', amount:'60ml', note:'要冷萃或冰镇过的'},
    {name:'冰块', amount:'约 150g'},
    {name:'糖浆', amount:'10ml', optional:true, note:'橙子酸就加'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '热咖啡倒进橙汁会瞬间变味，咖啡必须放凉。',
    '摇匀后要马上喝，放久会分层发苦。'
  ],
  fidelity:'瑞幸用 NFC 橙汁，家用鲜榨更香但维 C 氧化快，榨完 10 分钟内用完。',
  steps:[
    {title:'榨橙汁', desc:'榨 180ml 橙汁，去籽别带白瓤。', act:'备料',
     add:[{name:'橙汁', pct:52, color:'#F5A623'}]},
    {title:'加冰', desc:'橙汁里放冰块。', act:'铺冰',
     add:[{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'倒入咖啡', desc:'放凉的浓缩 60ml 沿杯壁倒进去。', act:'倒入',
     add:[{name:'美式咖啡', pct:36, color:'#4A3020'}]},
    {title:'轻摇', desc:'盖盖轻摇 5 下，别摇太狠会起沫。', timer:5, act:'摇匀', add:[]}
  ]
},

{
  id:'youjian', name:'柚见美式', category:'咖啡', brands:['库迪'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#F97316',
  layers:[
    {name:'西柚果肉', pct:18, color:'#F08080'},
    {name:'西柚汁', pct:38, color:'#FFA58C'},
    {name:'美式咖啡', pct:44, color:'#4A3020'}
  ],
  intro:'西柚的苦和咖啡的苦叠在一起，反而清爽。西柚要剥干净白膜，那层膜比咖啡还苦。',
  ingredients:[
    {name:'西柚', amount:'半个', note:'红心西柚，香气更足'},
    {name:'浓缩咖啡', amount:'60ml', note:'放凉'},
    {name:'糖浆', amount:'15ml', note:'西柚偏苦，糖别省'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '西柚白膜必须剥干净，那是苦味主要来源。',
    '咖啡要凉的，热的会让西柚发涩。'
  ],
  fidelity:'库迪用西柚浓缩汁，家用鲜果更清爽但苦味也更明显，糖要跟着加。',
  steps:[
    {title:'剥西柚', desc:'剥出果肉，把每一瓣的白膜撕掉。', act:'备料', add:[]},
    {title:'压果肉', desc:'一半果肉压出汁，另一半留着吃。', act:'捣碎',
     add:[{name:'西柚果肉', pct:20, color:'#F08080'}]},
    {title:'加糖加冰', desc:'倒糖浆 15ml，加冰块。', act:'倒入',
     add:[{name:'西柚汁', pct:30, color:'#FFA58C'},{name:'冰块', pct:14, color:'#DCEFF6'}]},
    {title:'倒咖啡摇匀', desc:'倒凉咖啡 60ml，盖盖摇 8 秒。', timer:8, act:'摇匀',
     add:[{name:'美式咖啡', pct:32, color:'#4A3020'}]}
  ]
},

{
  id:'panpasi', name:'潘帕斯蓝生酪茉莉拿铁', category:'咖啡', brands:['库迪'],
  method:'分层', difficulty:3, temp:'冰', volume:500, bg:'#93C5FD',
  layers:[
    {name:'蓝柑橘糖浆', pct:14, color:'#5FA8E8'},
    {name:'茉莉奶', pct:46, color:'#EAF0F5'},
    {name:'浓缩咖啡', pct:24, color:'#5A3A22'},
    {name:'生酪奶盖', pct:16, color:'#FFF8E8'}
  ],
  intro:'库迪的颜值担当，蓝白咖三层。蓝色来自蓝柑橘糖浆，不是色素也不影响味道，只是好看。',
  ingredients:[
    {name:'蓝柑橘糖浆', amount:'15ml', note:'Monin 蓝柑橘，主要作用是颜色'},
    {name:'茉莉绿茶', amount:'100ml', note:'泡浓一点'},
    {name:'牛奶', amount:'120ml'},
    {name:'浓缩咖啡', amount:'50ml'},
    {name:'奶油奶酪', amount:'25g'},
    {name:'淡奶油', amount:'40ml'}
  ],
  tools:['打泡器','杯子','勺子'],
  pitfalls:[
    '倒的顺序错了颜色会糊成一团，蓝色必须最底。',
    '蓝柑橘糖浆本身很甜，别再额外加糖。'
  ],
  fidelity:'门店用分层枪控制密度，家庭靠糖浆沉底 + 慢倒，层次会薄一些但颜色能还原。',
  steps:[
    {title:'蓝糖浆垫底', desc:'蓝柑橘糖浆 15ml 倒进空杯，加两块冰。', act:'倒入',
     add:[{name:'蓝柑橘糖浆', pct:16, color:'#5FA8E8'}]},
    {title:'调茉莉奶', desc:'浓泡茉莉茶 100ml 放凉，兑牛奶 120ml。', act:'备料',
     add:[{name:'茉莉奶', pct:42, color:'#EAF0F5'}]},
    {title:'慢倒茉莉奶', desc:'勺背贴着杯壁慢倒，让奶浮在蓝糖浆上。', act:'淋入', add:[]},
    {title:'加咖啡', desc:'再勺背导流倒浓缩 50ml。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:24, color:'#5A3A22'}]},
    {title:'铺生酪', desc:'奶油奶酪 + 淡奶油打发，铺在最上面。', act:'铺面',
     add:[{name:'生酪奶盖', pct:14, color:'#FFF8E8'}]}
  ]
},

{
  id:'kabuqinuo', name:'卡布奇诺', category:'咖啡', brands:['星巴克','瑞幸','Manner'],
  method:'直调', difficulty:2, temp:'热', volume:300, bg:'#FEF9C3',
  layers:[
    {name:'浓缩咖啡', pct:33, color:'#5A3A22'},
    {name:'热牛奶', pct:44, color:'#FAF4E9'},
    {name:'奶泡', pct:23, color:'#FFFFFF'}
  ],
  intro:'三分之一咖啡、三分之一奶、三分之一奶泡。奶泡要能立住勺子才算成功。',
  ingredients:[
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'全脂牛奶', amount:'120ml', note:'必须全脂，脱脂打不出泡'},
    {name:'肉桂粉', amount:'约 1g', optional:true, note:'撒表面，没有可不加'}
  ],
  tools:['打泡器','杯子'],
  pitfalls:[
    '奶温超过 70℃ 奶泡会散，手感烫手就停。',
    '打完的奶泡要震两下再倒，否则表面全是大气泡。'
  ],
  fidelity:'门店用蒸汽棒打奶泡，绵密度远胜家用打泡器。家用版奶泡会粗，但热度更好控制。',
  steps:[
    {title:'萃取浓缩', desc:'浓缩 60ml 进杯。', act:'备料',
     add:[{name:'浓缩咖啡', pct:34, color:'#5A3A22'}]},
    {title:'打发牛奶', desc:'全脂牛奶 120ml 打到 60℃，表面细密无大泡。', timer:30, act:'搅拌',
     add:[{name:'热牛奶', pct:42, color:'#FAF4E9'}]},
    {title:'倒奶', desc:'奶缸贴着杯壁先倒牛奶，最后把奶泡推到表面。', act:'倒入', add:[]},
    {title:'撒粉', desc:'表面撒一层肉桂粉。', act:'铺面',
     add:[{name:'奶泡', pct:24, color:'#FFFFFF'}]}
  ]
},

{
  id:'lengcui', name:'冷萃咖啡', category:'咖啡', brands:['星巴克','Manner','瑞幸'],
  method:'浸泡', difficulty:2, temp:'冰', volume:400, bg:'#BAE6FD',
  layers:[
    {name:'冷萃液', pct:70, color:'#3A2416'},
    {name:'冰块', pct:30, color:'#DCEFF6'}
  ],
  intro:'冷水泡 12 小时。没有高温萃取，苦味和酸味都出不来，只剩干净的甜。做完能放一周。',
  ingredients:[
    {name:'咖啡粉', amount:'40g', note:'中粗研磨，像粗砂糖'},
    {name:'冷水', amount:'400ml', note:'纯净水'},
    {name:'冰块', amount:'约 120g', optional:true}
  ],
  tools:['玻璃瓶','滤纸'],
  pitfalls:[
    '粉磨太细会堵住滤纸，泡出来一嘴渣。',
    '必须冷藏泡，室温泡 12 小时会发酵变酸。'
  ],
  fidelity:'门店用专用冷萃豆和恒温萃取，家庭版放冰箱就行，风味接近九成。',
  steps:[
    {title:'混合', desc:'咖啡粉 40g 倒进瓶里，加冷水 400ml，搅匀。', act:'备料',
     add:[{name:'咖啡粉液', pct:100, color:'#3A2416'}]},
    {title:'冷藏浸泡', desc:'盖盖放冰箱 12 小时，中途不用管。', timer:43200, act:'浸泡', add:[]},
    {title:'过滤', desc:'用滤纸或细滤网过滤两遍，滤到没有渣。', act:'冲洗', add:[]},
    {title:'加冰饮用', desc:'倒出来加冰块，冷藏能放 7 天。', act:'倒入',
     add:[{name:'冰块', pct:26, color:'#DCEFF6'}]}
  ]
},

{
  id:'xiangcao', name:'香草拿铁', category:'咖啡', brands:['幸运咖','瑞幸','星巴克'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:450, bg:'#FACC15',
  layers:[
    {name:'香草糖浆', pct:10, color:'#E8D6A8'},
    {name:'牛奶', pct:66, color:'#FAF4E9'},
    {name:'浓缩咖啡', pct:24, color:'#5A3A22'}
  ],
  intro:'最基础的风味拿铁。香草糖浆别买廉价的，香精味一喝就露馅。',
  ingredients:[
    {name:'香草糖浆', amount:'15ml', note:'带香草籽的那种，风味差很多'},
    {name:'牛奶', amount:'180ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'冰块', amount:'约 130g', optional:true, note:'热饮省掉'}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '糖浆先放杯底，最后加会沉不下去、喝到最后齁甜。',
    '香草糖浆本身甜，别再放糖。'
  ],
  fidelity:'门店用品牌香草糖浆，家用随便买的糖浆香精味会重，选带籽的贵一点值得。',
  steps:[
    {title:'糖浆垫底', desc:'香草糖浆 15ml 倒进杯底。', act:'倒入',
     add:[{name:'香草糖浆', pct:12, color:'#E8D6A8'}]},
    {title:'加冰倒奶', desc:'冰块八分满（热饮跳过），倒牛奶 180ml。', act:'倒入',
     add:[{name:'牛奶', pct:60, color:'#FAF4E9'},{name:'冰块', pct:12, color:'#DCEFF6'}]},
    {title:'加浓缩', desc:'勺背导流。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:16, color:'#5A3A22'}]}
  ]
},

{
  id:'moka', name:'摩卡', category:'咖啡', brands:['星巴克','瑞幸','CoCo'],
  method:'分层', difficulty:2, temp:'热', volume:400, bg:'#D97706',
  layers:[
    {name:'巧克力酱', pct:16, color:'#3E2415'},
    {name:'浓缩咖啡', pct:26, color:'#5A3A22'},
    {name:'热牛奶', pct:44, color:'#FAF4E9'},
    {name:'奶油顶', pct:14, color:'#FFFFFF'}
  ],
  intro:'拿铁加巧克力酱，甜党的入门款。巧克力酱要搅进咖啡里而不是沉底，不然喝到最后齁死。',
  ingredients:[
    {name:'巧克力酱', amount:'25g', note:'能挤出来的那种，不是巧克力块'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'牛奶', amount:'150ml'},
    {name:'淡奶油', amount:'40ml', optional:true},
    {name:'可可粉', amount:'2g', optional:true, note:'撒表面'}
  ],
  tools:['锅','打泡器','杯子'],
  pitfalls:[
    '巧克力酱要先和浓缩搅匀，直接铺杯底会沉成一块。',
    '牛奶别煮沸，70℃ 就够，沸了会结皮。'
  ],
  fidelity:'星巴克用摩卡酱（含糖可可），家庭用巧克力酱甜度更高，糖可以不放。',
  steps:[
    {title:'调巧克力咖啡', desc:'巧克力酱 25g 加浓缩 60ml，搅到完全融合。', act:'搅拌',
     add:[{name:'巧克力咖啡', pct:38, color:'#4A2C1A'}]},
    {title:'热牛奶', desc:'牛奶 150ml 加热到 65℃，打出薄泡。', timer:90, act:'加热',
     add:[{name:'热牛奶', pct:46, color:'#FAF4E9'}]},
    {title:'倒入', desc:'巧克力咖啡倒杯底，再倒热牛奶。', act:'倒入', add:[]},
    {title:'挤奶油', desc:'淡奶油 40ml 打发，挤在上面，筛一点可可粉。', timer:45, act:'铺面',
     add:[{name:'奶油顶', pct:14, color:'#FFFFFF'}]}
  ]
},

{
  id:'aobai', name:'澳白', category:'咖啡', brands:['Manner','星巴克','瑞幸'],
  method:'直调', difficulty:2, temp:'热', volume:240, bg:'#F5F5F4',
  layers:[
    {name:'浓缩咖啡', pct:42, color:'#4A2C17'},
    {name:'微泡牛奶', pct:58, color:'#FAF4E9'}
  ],
  intro:'和拿铁的区别就三点：奶少、咖啡重、奶泡薄到几乎没有。所以杯量小，240ml 是标准。',
  ingredients:[
    {name:'浓缩咖啡', amount:'60ml', note:'双份，不能减'},
    {name:'全脂牛奶', amount:'120ml', note:'比拿铁少三分之一'},
    {name:'糖', amount:'5g', optional:true, note:'澳白默认不加糖'}
  ],
  tools:['打泡器','杯子'],
  pitfalls:[
    '奶泡打厚了就不是澳白了，只要一层薄薄的丝绒感。',
    '奶量别按拿铁来，多了咖啡味就散了。'
  ],
  fidelity:'门店用双份 ristretto（短萃）更甜，家用普通浓缩会稍苦，可以少萃 5 秒。',
  steps:[
    {title:'萃双份', desc:'双份浓缩 60ml 进杯。', act:'备料',
     add:[{name:'浓缩咖啡', pct:42, color:'#4A2C17'}]},
    {title:'打薄奶', desc:'牛奶 120ml 打到 60℃，只出薄薄一层微泡。', timer:40, act:'搅拌',
     add:[{name:'微泡牛奶', pct:58, color:'#FAF4E9'}]},
    {title:'融合', desc:'奶缸贴杯壁倒入，让奶和咖啡融成一体，表面只有一层薄光。', act:'倒入', add:[]}
  ]
},

{
  id:'yeyun', name:'椰云拿铁', category:'咖啡', brands:['瑞幸'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#E7E5E4',
  layers:[
    {name:'厚椰乳', pct:44, color:'#F0DFC8'},
    {name:'浓缩咖啡', pct:22, color:'#6F4E37'},
    {name:'椰云顶', pct:34, color:'#FDFBF6'}
  ],
  intro:'生椰拿铁的升级版，多了一层「椰云」——椰浆打发成云朵状，浮在咖啡上面。喝的时候会沾一嘴。',
  ingredients:[
    {name:'厚椰乳', amount:'150ml'},
    {name:'浓缩咖啡', amount:'60ml'},
    {name:'椰浆', amount:'80ml', note:'浓椰浆，不是椰奶饮料'},
    {name:'糖', amount:'10g'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['打泡器','杯子','勺子'],
  pitfalls:[
    '椰浆要冷藏 12 小时以上才打得起来，常温的不行。',
    '椰云打过头会变成油水分离，打到浓稠能挂勺就停。'
  ],
  fidelity:'瑞幸用定制椰云基底，家庭用浓椰浆加糖打发能到八成，但稳定性差、会消泡。',
  steps:[
    {title:'铺冰倒椰乳', desc:'杯子加冰到八分满，倒厚椰乳 150ml。', act:'倒入',
     add:[{name:'厚椰乳', pct:44, color:'#F0DFC8'},{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'加咖啡', desc:'勺背导流倒浓缩，让它浮在椰乳上。', act:'淋入',
     add:[{name:'浓缩咖啡', pct:22, color:'#6F4E37'}]},
    {title:'打椰云', desc:'冷藏椰浆 80ml 加糖 10g，打到浓稠能缓慢流动。', timer:80, act:'搅拌',
     add:[{name:'椰云顶', pct:24, color:'#FDFBF6'}]},
    {title:'铺云顶', desc:'用勺子把椰云铺在最上面，堆成云朵形状。', act:'铺面', add:[]}
  ]
},

{
  id:'nongsuo', name:'浓缩咖啡', category:'咖啡', brands:['全行业通用'],
  method:'直调', difficulty:2, temp:'热', volume:60, bg:'#D6D3D1',
  layers:[{name:'浓缩咖啡', pct:100, color:'#3B2416'}],
  intro:'一切的起点。30 秒萃 30ml，表面那层金褐色的 crema 是判断好坏的标准。没有意式机用摩卡壶也行。',
  ingredients:[
    {name:'咖啡豆', amount:'18g', note:'细研磨，像面粉但略带颗粒'},
    {name:'水', amount:'—', note:'用意式机或摩卡壶，无需计量'}
  ],
  tools:['意式咖啡机','压粉器'],
  pitfalls:[
    '粉太粗会流速过快，30 秒萃出 60ml 就是过萃发苦。',
    '萃取时间超过 35 秒一定苦，短于 20 秒会酸。'
  ],
  fidelity:'家用意式机压力普遍不足 9bar，crema 会薄。摩卡壶浓度接近但压力不同，风味偏焦。',
  steps:[
    {title:'磨粉', desc:'咖啡豆 18g 磨成细粉，比手冲细一档。', act:'备料', add:[]},
    {title:'布粉压粉', desc:'倒进粉碗，刮平，用压粉器压平压实。', act:'备料', add:[]},
    {title:'萃取', desc:'扣上手柄立刻萃取，双份约 25-30 秒出 60ml。', timer:28, act:'加热',
     add:[{name:'浓缩咖啡', pct:100, color:'#3B2416'}]},
    {title:'看 crema', desc:'表面应有 3-5mm 金褐色泡沫。没有说明豆子不新鲜。', act:'完成', add:[]}
  ]
},

{
  id:'kangbaolan', name:'康宝蓝', category:'咖啡', brands:['意式咖啡馆'],
  method:'分层', difficulty:1, temp:'热', volume:120, bg:'#FAFAF9',
  layers:[
    {name:'浓缩咖啡', pct:55, color:'#3B2416'},
    {name:'打发淡奶油', pct:45, color:'#FFFFFF'}
  ],
  intro:'意大利的老式喝法：浓缩上堆一坨不加糖的打发奶油。不搅，直接喝，一口咖啡一口奶油。',
  ingredients:[
    {name:'浓缩咖啡', amount:'60ml', note:'双份'},
    {name:'淡奶油', amount:'50ml', note:'必须冷藏 12 小时以上'},
    {name:'糖粉', amount:'5g', optional:true, note:'撒奶油上'}
  ],
  tools:['打泡器','杯子'],
  pitfalls:[
    '奶油不加糖才能中和咖啡的苦，加了就变成甜品。',
    '奶油要打到能立住，稀的会直接沉进咖啡里。'
  ],
  fidelity:'意式咖啡馆用现打鲜奶油，家庭打泡器打到硬性发泡即可，差别不大。',
  steps:[
    {title:'萃浓缩', desc:'双份浓缩 60ml 进小杯。', act:'备料',
     add:[{name:'浓缩咖啡', pct:55, color:'#3B2416'}]},
    {title:'打奶油', desc:'冷藏淡奶油 50ml 打到硬性发泡，能立起直角尖。', timer:90, act:'搅拌',
     add:[{name:'打发淡奶油', pct:45, color:'#FFFFFF'}]},
    {title:'堆奶油', desc:'用两把勺子把奶油堆在咖啡上，堆成圆顶。', act:'铺面', add:[]}
  ]
},

{
  id:'lengcui-qipao', name:'冷萃气泡美式', category:'咖啡', brands:['星巴克','Manner'],
  method:'直调', difficulty:1, temp:'冰', volume:400, bg:'#FFFBEB',
  layers:[
    {name:'气泡水', pct:58, color:'#F5FAFC'},
    {name:'冷萃液', pct:42, color:'#3A2416'}
  ],
  intro:'气泡水加冷萃，喝起来像咖啡味的汽水。气泡会把咖啡香气顶上来，比普通冰美式香。',
  ingredients:[
    {name:'冷萃液', amount:'120ml', note:'没有就用浓缩 40ml + 冷水 80ml'},
    {name:'气泡水', amount:'180ml', note:'要冰的，常温的没气'},
    {name:'冰块', amount:'约 150g'},
    {name:'柠檬片', amount:'1 片', optional:true}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '气泡水最后倒，倒早了气泡全跑光。',
    '别用勺子搅，会加速消气，轻轻晃杯就行。'
  ],
  fidelity:'门店用现打气泡水，瓶装的二氧化碳压力低，气泡更粗、消散更快。',
  steps:[
    {title:'冰块打底', desc:'杯里装八分满冰块。', act:'铺冰',
     add:[{name:'冰块', pct:52, color:'#DCEFF6'}]},
    {title:'倒冷萃', desc:'冷萃液 120ml 倒进去。', act:'倒入',
     add:[{name:'冷萃液', pct:26, color:'#3A2416'}]},
    {title:'加气泡水', desc:'沿杯壁缓慢倒冰气泡水 180ml，会起一层沫。', act:'倒入',
     add:[{name:'气泡水', pct:22, color:'#F5FAFC'}]},
    {title:'不要搅', desc:'放一片柠檬，轻轻晃两下杯身就好。', act:'完成', add:[]}
  ]
},

{
  id:'chengxiang-lengcui', name:'橙香冷萃', category:'咖啡', brands:['瑞幸','Manner'],
  method:'摇匀', difficulty:1, temp:'冰', volume:400, bg:'#FFE4E6',
  layers:[
    {name:'橙汁', pct:40, color:'#F5A623'},
    {name:'冷萃液', pct:60, color:'#3A2416'}
  ],
  intro:'和橙 C 美式的区别是用冷萃而不是浓缩，酸苦都更柔和。橙皮油是香气来源，别只挤汁。',
  ingredients:[
    {name:'冷萃液', amount:'150ml'},
    {name:'橙子', amount:'1 个', note:'取汁 100ml，另削两条皮'},
    {name:'糖浆', amount:'10ml', optional:true},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '只挤汁不削皮，香气会少一半。',
    '橙皮只削黄色部分，白瓤会苦。'
  ],
  fidelity:'门店用橙皮精油喷雾，家庭削皮摇匀也能出香，但持久度差。',
  steps:[
    {title:'取橙汁橙皮', desc:'橙子挤汁 100ml，另削两条黄色表皮。', act:'备料',
     add:[{name:'橙汁', pct:38, color:'#F5A623'}]},
    {title:'摇匀', desc:'橙汁 + 冷萃 150ml + 橙皮 + 糖浆，加冰摇 12 秒。', timer:12, act:'摇匀',
     add:[{name:'冷萃液', pct:54, color:'#3A2416'}]},
    {title:'滤出装杯', desc:'滤掉橙皮，倒入杯子。', act:'倒入', add:[]}
  ]
},

{
  id:'yanmai-lengcui', name:'燕麦冷萃', category:'咖啡', brands:['星巴克','Manner'],
  method:'直调', difficulty:1, temp:'冰', volume:450, bg:'#FEFCE8',
  layers:[
    {name:'冷萃液', pct:40, color:'#3A2416'},
    {name:'燕麦奶', pct:60, color:'#E8DCC4'}
  ],
  intro:'冷萃本身酸度低、口感圆，配燕麦奶比配牛奶更顺。乳糖不耐受的人可以放心喝。',
  ingredients:[
    {name:'冷萃液', amount:'150ml'},
    {name:'燕麦奶', amount:'200ml', note:'咖啡师版，普通版会分层'},
    {name:'冰块', amount:'约 150g'},
    {name:'糖浆', amount:'8ml', optional:true}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '普通燕麦奶遇冷萃的酸会絮状分离，必须用咖啡师版。',
    '冷萃别兑水，浓度会太稀。'
  ],
  fidelity:'门店用同款燕麦奶，这一杯在家还原度能到九成五。',
  steps:[
    {title:'冰块打底', desc:'冰块八分满。', act:'铺冰',
     add:[{name:'冰块', pct:44, color:'#DCEFF6'}]},
    {title:'倒冷萃', desc:'冷萃 150ml 倒进去。', act:'倒入',
     add:[{name:'冷萃液', pct:22, color:'#3A2416'}]},
    {title:'加燕麦奶', desc:'沿杯壁倒燕麦奶 200ml，会自然形成渐变。', act:'倒入',
     add:[{name:'燕麦奶', pct:34, color:'#E8DCC4'}]}
  ]
}

]);
