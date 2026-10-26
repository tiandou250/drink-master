/* 柠檬茶 9 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'lemon', name:'冰鲜柠檬水', category:'柠檬茶', brands:['蜜雪冰城'], nocaf:true,
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#BEF264',
  layers:[
    {name:'柠檬片', pct:14, color:'#F0DE7E'},
    {name:'柠檬水', pct:86, color:'#FAF7D8'}
  ],
  intro:'四块钱一杯的东西，配方简单到只有三样，但白瓤不去会苦。',
  ingredients:[
    {name:'柠檬', amount:'1 个', note:'黄柠檬，青柠太酸'},
    {name:'糖浆', amount:'30ml'},
    {name:'冰水', amount:'400ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','杯子'],
  pitfalls:[
    '柠檬皮下的白瓤一定要削掉，这是苦味来源。',
    '捶柠檬别太狠，皮里的精油打出来会发苦。'
  ],
  fidelity:'蜜雪用的是浓缩柠檬汁 + 鲜柠檬片，纯鲜柠檬版香气更足但酸度更高。',
  steps:[
    {title:'处理柠檬', desc:'削掉两头，切 5mm 厚片，把白瓤修掉。', act:'备料', add:[]},
    {title:'捶打', desc:'柠檬片放摇壶里，用捣棒压 5 下，出汁就停。', act:'捣碎',
     add:[{name:'柠檬片', pct:16, color:'#F0DE7E'}]},
    {title:'加糖加水', desc:'倒糖浆 30ml、冰水 400ml、冰块。', act:'倒入',
     add:[{name:'柠檬水', pct:72, color:'#FAF7D8'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'摇匀', desc:'盖紧摇 12 秒，摇到杯壁起雾。', timer:12, act:'摇匀',
     add:[{name:'柠檬水', pct:4, color:'#FAF7D8'}]}
  ]
},

{
  id:'yashixiang', name:'鸭屎香手打柠檬茶', category:'柠檬茶', brands:['柠季','丘大叔'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#86EFAC',
  layers:[
    {name:'柠檬片', pct:16, color:'#E8D96A'},
    {name:'鸭屎香茶汤', pct:84, color:'#C9B06A'}
  ],
  intro:'鸭屎香是凤凰单丛的一个品种，名字难听但香气极强。茶汤要浓，否则柠檬一压就没了。',
  ingredients:[
    {name:'鸭屎香单丛', amount:'8g', note:'条形茶，不是茶包'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'香水柠檬', amount:'1 个'},
    {name:'糖浆', amount:'35ml'},
    {name:'冰块', amount:'约 180g'}
  ],
  tools:['摇壶','捣棒','滤网'],
  pitfalls:[
    '茶汤必须完全放凉，热茶压柠檬会发苦。',
    '柠檬只捶 5-6 下，捶多了皮油全出来就是一股洗洁精味。'
  ],
  fidelity:'柠季用特浓鸭屎香茶底，家庭版茶叶加到 8g 并泡 5 分钟才够浓。',
  steps:[
    {title:'泡茶', desc:'95℃ 水 200ml 泡 5 分钟，滤掉茶叶，完全放凉。', timer:300, act:'冲泡',
     add:[{name:'鸭屎香茶汤', pct:80, color:'#C9B06A'}]},
    {title:'捶柠檬', desc:'香水柠檬切片去籽，放摇壶捶 6 下。', act:'捣碎',
     add:[{name:'柠檬片', pct:16, color:'#E8D96A'}]},
    {title:'加糖加冰', desc:'倒糖浆 35ml，加冰块到八分满。', act:'倒入', add:[]},
    {title:'摇匀', desc:'倒入冷茶汤，盖紧摇 15 秒，摇到手酸就对了。', timer:15, act:'摇匀', add:[]}
  ]
},

{
  id:'shouda', name:'手打柠檬茶', category:'柠檬茶', brands:['柠季','林香柠'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#D9F99D',
  layers:[
    {name:'柠檬片', pct:16, color:'#F0DE7E'},
    {name:'红茶汤', pct:84, color:'#B8860B'}
  ],
  intro:'柠檬茶的基础款，红茶底。糖量决定它是解渴还是齁人，35ml 是个安全值。',
  ingredients:[
    {name:'锡兰红茶', amount:'8g'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'香水柠檬', amount:'1 个'},
    {name:'糖浆', amount:'35ml'}
  ],
  tools:['摇壶','捣棒','滤网'],
  pitfalls:[
    '红茶要泡浓，淡了压不住柠檬。',
    '柠檬籽要去掉，籽压碎很苦。'
  ],
  fidelity:'柠季用现萃浓茶，家庭版注意茶要够浓、必须放凉。',
  steps:[
    {title:'泡红茶', desc:'95℃ 水 200ml 泡 5 分钟，滤掉茶叶放凉。', timer:300, act:'冲泡',
     add:[{name:'红茶汤', pct:80, color:'#B8860B'}]},
    {title:'捶柠檬', desc:'柠檬切片去籽，捶 6 下。', act:'捣碎',
     add:[{name:'柠檬片', pct:16, color:'#F0DE7E'}]},
    {title:'摇匀', desc:'加糖浆 35ml、冰块、冷茶汤，摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
},

{
  id:'baixiang-shuang', name:'百香双响炮', category:'柠檬茶', brands:['CoCo 都可','蜜雪冰城'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FDE047',
  layers:[
    {name:'百香果籽', pct:14, color:'#D4A017'},
    {name:'柠檬片', pct:12, color:'#F0DE7E'},
    {name:'茶汤', pct:74, color:'#E8C86A'}
  ],
  intro:'「双响」说的是百香果和柠檬两样酸一起上。酸度很高，糖必须给够。',
  ingredients:[
    {name:'百香果', amount:'2 个'},
    {name:'香水柠檬', amount:'半个'},
    {name:'茉莉绿茶', amount:'200ml'},
    {name:'糖浆', amount:'40ml', note:'两样酸叠加，糖少了没法喝'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['摇壶','捣棒','杯子'],
  pitfalls:[
    '糖少于 35ml 就酸到倒牙。',
    '百香果籽要留着，那是口感的一部分。'
  ],
  fidelity:'CoCo 用双份浓缩果浆，家庭鲜果版更清爽但要加糖。',
  steps:[
    {title:'挖百香果', desc:'两个百香果连籽挖出。', act:'备料',
     add:[{name:'百香果籽', pct:16, color:'#D4A017'}]},
    {title:'捶柠檬', desc:'半个柠檬切片捶 4 下。', act:'捣碎',
     add:[{name:'柠檬片', pct:12, color:'#F0DE7E'}]},
    {title:'泡茶', desc:'茉莉绿茶 6g 用 85℃ 水 200ml 泡 3 分钟，放凉。', timer:180, act:'冲泡',
     add:[{name:'茶汤', pct:64, color:'#E8C86A'}]},
    {title:'摇匀', desc:'全部倒进摇壶，加糖浆 40ml 和冰，摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]}
  ]
},

{
  id:'guiziyou', name:'桂子油柠檬茶', category:'柠檬茶', brands:['柠季'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#A7F3D0',
  layers:[
    {name:'柠檬片', pct:15, color:'#F0DE7E'},
    {name:'桂花乌龙', pct:85, color:'#D4B978'}
  ],
  intro:'桂子油是湖南特色调料，带一点点清凉感。听着玄，实际就是桂花加薄荷的那种清爽。',
  ingredients:[
    {name:'桂花乌龙', amount:'7g'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'香水柠檬', amount:'1 个'},
    {name:'桂花蜜', amount:'20ml'},
    {name:'糖浆', amount:'15ml'},
    {name:'薄荷叶', amount:'3 片', optional:true}
  ],
  tools:['摇壶','捣棒','滤网'],
  pitfalls:[
    '桂花蜜最后加，不然和柠檬一起捶会发苦。',
    '薄荷只放三片，多了像牙膏。'
  ],
  fidelity:'柠季用特调桂子油糖浆，家庭用桂花蜜 + 薄荷叶能还原八成。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 200ml 泡 4 分钟，放凉。', timer:240, act:'冲泡',
     add:[{name:'桂花乌龙', pct:80, color:'#D4B978'}]},
    {title:'捶柠檬薄荷', desc:'柠檬切片加薄荷叶捶 5 下。', act:'捣碎',
     add:[{name:'柠檬片', pct:15, color:'#F0DE7E'}]},
    {title:'摇匀', desc:'加桂花蜜 20ml、糖浆 15ml、冰块，摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'冰块', pct:5, color:'#DCEFF6'}]}
  ]
},

{
  id:'huangpi', name:'黄皮柠檬茶', category:'柠檬茶', brands:['LINLEE'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#FDE68A',
  layers:[
    {name:'黄皮果肉', pct:20, color:'#D4B86A'},
    {name:'柠檬片', pct:12, color:'#F0DE7E'},
    {name:'茶汤', pct:68, color:'#E0CC90'}
  ],
  intro:'黄皮是岭南的果子，带一点药材香和回甘。北方人可能喝不惯，广东人当成宝。',
  ingredients:[
    {name:'黄皮', amount:'100g', note:'带核，去核后约 70g'},
    {name:'香水柠檬', amount:'半个'},
    {name:'鸭屎香茶汤', amount:'180ml'},
    {name:'糖浆', amount:'30ml'},
    {name:'盐', amount:'2g', note:'一小撮，压黄皮的涩'}
  ],
  tools:['摇壶','捣棒','杯子'],
  pitfalls:[
    '黄皮核要去掉，核极苦。',
    '黄皮皮别剥太干净，香气都在皮上。'
  ],
  fidelity:'LINLEE 用当季鲜黄皮，家庭买不到的话这一杯做不了。',
  steps:[
    {title:'处理黄皮', desc:'黄皮洗净，去核，留皮。', act:'备料',
     add:[{name:'黄皮果肉', pct:22, color:'#D4B86A'}]},
    {title:'捶打', desc:'黄皮 + 柠檬片 + 盐 2g，捶 6 下。', act:'捣碎',
     add:[{name:'柠檬片', pct:12, color:'#F0DE7E'}]},
    {title:'泡茶', desc:'鸭屎香 7g 用 95℃ 水 180ml 泡 5 分钟，放凉。', timer:300, act:'冲泡',
     add:[{name:'茶汤', pct:60, color:'#E0CC90'}]},
    {title:'摇匀', desc:'加糖浆 30ml、冰块，摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'baoda-lv', name:'暴打柠檬绿', category:'柠檬茶', brands:['喜茶','古茗'],
  method:'摇匀', difficulty:1, temp:'冰', volume:500, bg:'#BBF7D0',
  layers:[
    {name:'柠檬片', pct:18, color:'#DCE87A'},
    {name:'绿茶汤', pct:82, color:'#D4E3A0'}
  ],
  intro:'绿茶底比红茶底清爽，夏天喝更解渴。绿茶不能泡久，否则涩味会盖掉柠檬香。',
  ingredients:[
    {name:'茉莉绿茶', amount:'7g'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'香水柠檬', amount:'1 个'},
    {name:'糖浆', amount:'30ml'},
    {name:'冰块', amount:'约 180g'}
  ],
  tools:['摇壶','捣棒','滤网'],
  pitfalls:[
    '绿茶泡超 3 分钟就涩，定好时间。',
    '绿茶汤必须彻底放凉，温的会发闷。'
  ],
  fidelity:'喜茶用现萃绿茶，家庭版泡 3 分钟、放凉，还原度很高。',
  steps:[
    {title:'泡绿茶', desc:'85℃ 水 200ml 泡 3 分钟，滤掉茶叶，放凉。', timer:180, act:'冲泡',
     add:[{name:'绿茶汤', pct:78, color:'#D4E3A0'}]},
    {title:'捶柠檬', desc:'柠檬切片去籽，捶 6 下。', act:'捣碎',
     add:[{name:'柠檬片', pct:18, color:'#DCE87A'}]},
    {title:'摇匀', desc:'加糖浆 30ml、冰块、茶汤，摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
},

{
  id:'xiangshui-maofeng', name:'香水柠檬毛峰', category:'柠檬茶', brands:['卡旺卡'],
  method:'摇匀', difficulty:2, temp:'冰', volume:500, bg:'#ECFCCB',
  layers:[
    {name:'香水柠檬', pct:18, color:'#E8E07A'},
    {name:'毛峰绿茶', pct:82, color:'#CBD88A'}
  ],
  intro:'毛峰是黄山绿茶，自带兰花香。香水柠檬的皮油香气比普通柠檬浓十倍，两样一起就是香气炸弹。',
  ingredients:[
    {name:'黄山毛峰', amount:'7g', note:'别用普通绿茶替代，香气差很远'},
    {name:'热水', amount:'200ml', note:'85℃'},
    {name:'香水柠檬', amount:'1 个'},
    {name:'糖浆', amount:'28ml'},
    {name:'冰块', amount:'约 180g'}
  ],
  tools:['摇壶','捣棒','滤网'],
  pitfalls:[
    '毛峰是嫩芽绿茶，85℃ 泡 2 分半就够，别泡老。',
    '香水柠檬皮要削掉一部分，太多皮油会苦。'
  ],
  fidelity:'卡旺卡用当季香水柠檬，这支只有部分门店有，家庭版可还原九成。',
  steps:[
    {title:'泡毛峰', desc:'85℃ 水 200ml 泡 2 分半，滤掉茶叶，放凉。', timer:150, act:'冲泡',
     add:[{name:'毛峰绿茶', pct:78, color:'#CBD88A'}]},
    {title:'捶柠檬', desc:'香水柠檬切片，削掉部分白瓤，捶 5 下。', act:'捣碎',
     add:[{name:'香水柠檬', pct:18, color:'#E8E07A'}]},
    {title:'摇匀', desc:'加糖浆 28ml、冰块，摇 15 秒。', timer:15, act:'摇匀',
     add:[{name:'冰块', pct:4, color:'#DCEFF6'}]}
  ]
},

{
  id:'xianningqi', name:'咸柠七', category:'柠檬茶', brands:['港式茶餐厅'],
  method:'直调', difficulty:1, temp:'冰', volume:400, bg:'#FEF08A',
  layers:[
    {name:'咸柠檬', pct:20, color:'#8B7A3A'},
    {name:'七喜', pct:80, color:'#FAF6D0'}
  ],
  intro:'咸柠檬是腌过的柠檬，咸酸带甘。配七喜就是港式茶餐厅的经典，解腻一流。',
  ingredients:[
    {name:'咸柠檬', amount:'1 颗', note:'腌了半年以上的，超市有卖'},
    {name:'七喜', amount:'300ml', note:'冰镇的'},
    {name:'冰块', amount:'约 120g'},
    {name:'新鲜柠檬片', amount:'2 片', optional:true}
  ],
  tools:['杯子','勺子'],
  pitfalls:[
    '咸柠檬很咸，一颗就够，切开用一半也行。',
    '七喜要冰的，常温倒进去就没气了。'
  ],
  fidelity:'茶餐厅用自制腌柠檬，超市买的咸柠檬风味接近但咸度更高，可以只用半颗。',
  steps:[
    {title:'处理咸柠檬', desc:'咸柠檬切两半，用勺子压一下出味。', act:'捣碎',
     add:[{name:'咸柠檬', pct:22, color:'#8B7A3A'}]},
    {title:'加冰', desc:'杯里放冰块八分满。', act:'铺冰',
     add:[{name:'冰块', pct:28, color:'#DCEFF6'}]},
    {title:'倒七喜', desc:'沿杯壁倒冰七喜 300ml，会起泡。', act:'倒入',
     add:[{name:'七喜', pct:50, color:'#FAF6D0'}]},
    {title:'放柠檬片', desc:'表面放两片新鲜柠檬。', act:'铺面', add:[]}
  ]
}

]);
