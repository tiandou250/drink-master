/* 奶茶 20 款 */
window.DRINKS = (window.DRINKS || []).concat([

{
  id:'heizhen', name:'黑糖珍珠奶茶', category:'奶茶', brands:['喜茶','一点点','蜜雪冰城','CoCo'],
  method:'需煮', difficulty:2, temp:'冰', volume:500, bg:'#FDBA74',
  layers:[
    {name:'黑糖珍珠', pct:22, color:'#3A2418'},
    {name:'鲜奶', pct:58, color:'#FAF4E9'},
    {name:'奶盖', pct:20, color:'#FFFFFF'}
  ],
  intro:'黑糖挂壁是这杯的灵魂。珍珠煮不好，整杯就废了。',
  ingredients:[
    {name:'黑糖珍珠', amount:'80g', note:'买冷冻珍珠最稳，自煮比较费时间'},
    {name:'鲜奶', amount:'250ml'},
    {name:'红茶', amount:'100ml', note:'滇红或阿萨姆，浓泡'},
    {name:'黑糖浆', amount:'20ml'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '珍珠煮完放超过 4 小时会返硬，必须现煮现用。',
    '黑糖浆要趁热倒进杯子转一圈挂壁，凉了就挂不上。'
  ],
  fidelity:'门店用现熬黑糖珍珠，家庭版用冷冻珍珠更稳。奶盖可以省，但不省就少了层次。',
  steps:[
    {title:'煮珍珠', desc:'水沸后下珍珠，中火煮 25 分钟，中途搅两次防粘底。', timer:1500, act:'加热',
     add:[{name:'珍珠', pct:60, color:'#4A3020'}]},
    {title:'关火焖', desc:'关火盖盖焖 10 分钟，焖完珍珠才透心。', timer:600, act:'焖', add:[]},
    {title:'过冷水拌黑糖', desc:'捞出来冲冷水到不烫手，拌入 10ml 黑糖浆。', act:'搅拌',
     add:[{name:'黑糖浆', pct:10, color:'#5A3A20'}]},
    {title:'挂壁', desc:'剩下的黑糖浆倒进空杯，转一圈让杯壁挂着糖痕。', act:'挂壁',
     add:[{name:'黑糖浆挂壁', pct:8, color:'#8B5E3C'}]},
    {title:'加冰加奶', desc:'放珍珠、加冰块，倒鲜奶 250ml 到八分满。', act:'倒入',
     add:[{name:'鲜奶', pct:52, color:'#FAF4E9'},{name:'冰块', pct:10, color:'#DCEFF6'}]},
    {title:'倒茶收尾', desc:'最后沿杯壁倒红茶 100ml，让颜色分层。', act:'倒入',
     add:[{name:'红茶', pct:22, color:'#8B5A2B'}]}
  ]
},

{
  id:'heiquan', name:'黑全套奶茶', category:'奶茶', brands:['卡旺卡'],
  method:'需煮', difficulty:3, temp:'冷热皆可', volume:600, bg:'#FED7AA',
  layers:[
    {name:'黑糖布丁', pct:16, color:'#C98A45'},
    {name:'黑米爆珠', pct:12, color:'#3D2B1F'},
    {name:'芋圆', pct:14, color:'#E0C7A8'},
    {name:'奶茶', pct:44, color:'#D9B48C'},
    {name:'香草奶油', pct:10, color:'#FFFFFF'},
    {name:'碧根果碎', pct:4, color:'#B08850'}
  ],
  intro:'卡旺卡的招牌，一杯六种料，13 块钱喝出喝粥的感觉。料多到手忙脚乱，但这就是它的全部意义。',
  ingredients:[
    {name:'锡兰红茶', amount:'8g'},
    {name:'热水', amount:'200ml', note:'95℃'},
    {name:'鲜奶', amount:'180ml'},
    {name:'黑糖布丁', amount:'80g', note:'买现成的，或吉利丁 + 黑糖自制'},
    {name:'黑米爆珠', amount:'40g'},
    {name:'芋圆', amount:'50g'},
    {name:'淡奶油', amount:'40ml'},
    {name:'碧根果', amount:'15g', note:'压碎'},
    {name:'糖浆', amount:'15ml'}
  ],
  tools:['锅','打泡器','杯子'],
  pitfalls:[
    '六种料要分层放，全倒进去会糊成一坨看不出颜色。',
    '奶油必须最后打，早了会塌。'
  ],
  fidelity:'门店的料是中央厨房配好的，家庭版要自己备六样，做好一次至少 40 分钟。',
  steps:[
    {title:'煮芋圆', desc:'水沸下芋圆，煮到全浮起再煮 2 分钟，捞出过冷水。', timer:480, act:'加热',
     add:[{name:'芋圆', pct:16, color:'#E0C7A8'}]},
    {title:'泡红茶', desc:'锡兰红茶 8g 用 95℃ 水 200ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'红茶汤', pct:22, color:'#8B5A2B'}]},
    {title:'铺底料', desc:'杯底依次放黑糖布丁、黑米爆珠、芋圆。', act:'备料',
     add:[{name:'黑糖布丁', pct:14, color:'#C98A45'},{name:'黑米爆珠', pct:10, color:'#3D2B1F'}]},
    {title:'倒奶茶', desc:'红茶汤 + 鲜奶 180ml + 糖浆 15ml 混匀，倒进杯子。', act:'倒入',
     add:[{name:'奶茶', pct:36, color:'#D9B48C'}]},
    {title:'打奶油', desc:'淡奶油 40ml 打到七分发，能立起软尖。', timer:45, act:'搅拌',
     add:[{name:'香草奶油', pct:9, color:'#FFFFFF'}]},
    {title:'铺面撒坚果', desc:'奶油铺在最上面，撒压碎的碧根果。', act:'铺面',
     add:[{name:'碧根果碎', pct:5, color:'#B08850'}]}
  ]
},

{
  id:'shaoxiancao', name:'烧仙草奶茶', category:'奶茶', brands:['书亦烧仙草','古茗'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#FCA5A5',
  layers:[
    {name:'烧仙草', pct:30, color:'#2A2A2A'},
    {name:'花生红豆', pct:12, color:'#C4763C'},
    {name:'奶茶', pct:50, color:'#D9B48C'},
    {name:'奶盖', pct:8, color:'#FFFFFF'}
  ],
  intro:'半杯都是料。仙草冻滑、花生脆、红豆糯，三种口感叠在一起才是「烧仙草」。',
  ingredients:[
    {name:'仙草粉', amount:'20g', note:'或买现成仙草冻 150g'},
    {name:'水', amount:'500ml', note:'冲仙草粉用'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'150ml'},
    {name:'熟花生', amount:'20g', note:'要炒过或烤过的，生的不香'},
    {name:'蜜红豆', amount:'40g'},
    {name:'糖浆', amount:'15ml'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '仙草粉要用冷水先化开再加热，直接倒热水会结块。',
    '仙草冻煮好后必须完全放凉才凝固，急不得。'
  ],
  fidelity:'门店用仙草干熬煮 4 小时，家庭版用仙草粉，草香会淡但口感接近。',
  steps:[
    {title:'化仙草粉', desc:'仙草粉 20g 先用 100ml 冷水化开，搅到无颗粒。', act:'备料', add:[]},
    {title:'煮仙草冻', desc:'剩下 400ml 水烧开，倒入仙草液边倒边搅，煮沸后关火。', timer:300, act:'加热',
     add:[{name:'烧仙草', pct:30, color:'#2A2A2A'}]},
    {title:'冷却凝固', desc:'倒进容器放凉，冷藏 2 小时到完全凝固，切块。', timer:7200, act:'焖', add:[]},
    {title:'调奶茶', desc:'红茶 150ml + 鲜奶 150ml + 糖浆 15ml 混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:46, color:'#D9B48C'}]},
    {title:'组装', desc:'杯底放仙草块，加蜜红豆和花生，倒奶茶。', act:'倒入',
     add:[{name:'花生红豆', pct:14, color:'#C4763C'}]},
    {title:'封顶', desc:'表面铺一层奶盖。', act:'铺面',
     add:[{name:'奶盖', pct:10, color:'#FFFFFF'}]}
  ]
},

{
  id:'yuni', name:'芋泥奶茶', category:'奶茶', brands:['茶百道','沪上阿姨','古茗'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#FBCFE8',
  layers:[
    {name:'芋泥', pct:32, color:'#C9A0DC'},
    {name:'芋圆', pct:10, color:'#E0C7A8'},
    {name:'奶茶', pct:46, color:'#D9B48C'},
    {name:'奶盖', pct:12, color:'#FFFFFF'}
  ],
  intro:'芋泥要自己蒸自己压，用芋泥粉冲的那是糖水。荔浦芋头最粉，做出来才绵。',
  ingredients:[
    {name:'荔浦芋头', amount:'200g', note:'别的芋头水分大，做不绵'},
    {name:'淡奶油', amount:'30ml'},
    {name:'糖', amount:'25g'},
    {name:'牛奶', amount:'100ml', note:'压芋泥用'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'120ml'},
    {name:'芋圆', amount:'40g', optional:true}
  ],
  tools:['锅','蒸锅','料理机'],
  pitfalls:[
    '芋头蒸到能用筷子轻松戳穿，没熟透会有麻嘴感。',
    '芋泥别打太细，留一点颗粒才有手作感。'
  ],
  fidelity:'门店用芋泥预拌粉 + 鲜芋头混合，家庭纯芋头香气更足但颜色偏灰，可以加一小块紫薯调色。',
  steps:[
    {title:'蒸芋头', desc:'芋头去皮切块，上锅蒸 25 分钟到软透。', timer:1500, act:'加热', add:[]},
    {title:'压芋泥', desc:'趁热加糖 25g、牛奶 100ml、淡奶油 30ml，压成泥，留一点颗粒。', act:'捣碎',
     add:[{name:'芋泥', pct:34, color:'#C9A0DC'}]},
    {title:'煮芋圆', desc:'芋圆煮到浮起再过冷水。', timer:480, act:'加热',
     add:[{name:'芋圆', pct:12, color:'#E0C7A8'}]},
    {title:'调奶茶', desc:'红茶 150ml + 鲜奶 120ml 混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:42, color:'#D9B48C'}]},
    {title:'挂壁组装', desc:'芋泥抹在杯壁和杯底，放芋圆，倒奶茶。', act:'铺面',
     add:[{name:'奶盖', pct:12, color:'#FFFFFF'}]}
  ]
},

{
  id:'xuenuo', name:'血糯米奶茶', category:'奶茶', brands:['沪上阿姨','古茗'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#FDA4AF',
  layers:[
    {name:'血糯米', pct:30, color:'#6B2C3E'},
    {name:'奶茶', pct:58, color:'#C9A27E'},
    {name:'奶盖', pct:12, color:'#FFFFFF'}
  ],
  intro:'血糯米要提前泡，不泡煮不烂。煮到软糯带一点嚼劲，是这杯的全部价值。',
  ingredients:[
    {name:'血糯米', amount:'80g', note:'提前泡 4 小时，不泡要煮 1 小时'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'180ml'},
    {name:'糖', amount:'20g'},
    {name:'炼乳', amount:'10g', optional:true}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '血糯米不泡直接煮，外烂内硬。',
    '煮的时候水要没过米两指，中途别加水。'
  ],
  fidelity:'门店用压力锅压 20 分钟，家庭普通锅要煮 40 分钟，口感会稍硬一点。',
  steps:[
    {title:'泡米', desc:'血糯米 80g 淘洗后泡 4 小时，泡到能用指甲掐断。', timer:14400, act:'浸泡', add:[]},
    {title:'煮糯米', desc:'水没过两指，大火烧开转小火煮 40 分钟，加糖 20g 拌匀。', timer:2400, act:'加热',
     add:[{name:'血糯米', pct:32, color:'#6B2C3E'}]},
    {title:'调奶茶', desc:'红茶 150ml + 鲜奶 180ml + 炼乳 10g 混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:56, color:'#C9A27E'}]},
    {title:'组装', desc:'糯米铺底压实，倒奶茶，表面加奶盖。', act:'倒入',
     add:[{name:'奶盖', pct:12, color:'#FFFFFF'}]}
  ]
},

{
  id:'douru', name:'豆乳玉麒麟', category:'奶茶', brands:['茶百道'],
  method:'需煮', difficulty:3, temp:'冷热皆可', volume:500, bg:'#FDE68A',
  layers:[
    {name:'豆乳布丁', pct:26, color:'#EDD9A8'},
    {name:'奶茶', pct:52, color:'#D9C09A'},
    {name:'豆乳奶盖', pct:16, color:'#F5E6C8'},
    {name:'黄豆粉', pct:6, color:'#C9A227'}
  ],
  intro:'豆乳 + 布丁 + 黄豆粉，咸甜口。黄豆粉一定要最后撒，早了会受潮结块。',
  ingredients:[
    {name:'豆浆粉', amount:'30g', note:'无糖纯豆浆粉，不是豆奶粉'},
    {name:'热水', amount:'150ml'},
    {name:'鲜奶', amount:'100ml'},
    {name:'红茶', amount:'100ml'},
    {name:'吉利丁片', amount:'5g', note:'做豆乳布丁用'},
    {name:'淡奶油', amount:'50ml'},
    {name:'熟黄豆粉', amount:'10g'},
    {name:'盐', amount:'0.5g', note:'一点点，提豆香'}
  ],
  tools:['锅','打泡器','杯子'],
  pitfalls:[
    '豆浆粉遇沸水会结块，用 80℃ 水冲。',
    '黄豆粉撒上去 10 分钟内要喝完，受潮就结块了。'
  ],
  fidelity:'茶百道用现磨豆浆，家庭豆浆粉冲的豆香薄一些，把粉量加到 35g 能补回来。',
  steps:[
    {title:'冲豆浆', desc:'豆浆粉 30g 用 80℃ 热水 150ml 冲开，搅到无颗粒。', act:'冲泡',
     add:[{name:'豆浆', pct:30, color:'#EDD9A8'}]},
    {title:'做豆乳布丁', desc:'取 100ml 豆浆加泡软的吉利丁 5g，搅化后冷藏 3 小时。', timer:10800, act:'焖',
     add:[{name:'豆乳布丁', pct:22, color:'#EDD9A8'}]},
    {title:'调豆乳奶', desc:'剩的豆浆 + 鲜奶 100ml + 红茶 100ml 混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:38, color:'#D9C09A'}]},
    {title:'打豆乳奶盖', desc:'淡奶油 50ml + 一小撮盐打发，拌入 10ml 豆浆。', timer:40, act:'搅拌',
     add:[{name:'豆乳奶盖', pct:14, color:'#F5E6C8'}]},
    {title:'组装撒粉', desc:'布丁切块垫底，倒奶茶，铺奶盖，最后筛一层黄豆粉。', act:'铺面',
     add:[{name:'黄豆粉', pct:6, color:'#C9A227'}]}
  ]
},

{
  id:'huizhou', name:'徽州酒酿', category:'奶茶', brands:['卡旺卡'],
  method:'需煮', difficulty:2, temp:'冰', volume:500, bg:'#FECDD3',
  layers:[
    {name:'马蹄丸子', pct:18, color:'#F0E6D2'},
    {name:'酒酿', pct:26, color:'#F5EBDC'},
    {name:'厚乳冰沙', pct:56, color:'#FDFAF2'}
  ],
  intro:'含微量酒精。0.5 度黄山米酒配有机糯米，酒香很淡但很勾人。马蹄丸子是脆的，别煮久了。',
  ingredients:[
    {name:'酒酿', amount:'100g', note:'超市冷藏区有，带米粒的那种'},
    {name:'厚乳', amount:'150ml'},
    {name:'牛奶', amount:'100ml'},
    {name:'马蹄', amount:'60g', note:'或买现成马蹄丸子'},
    {name:'糯米粉', amount:'30g', note:'做马蹄丸子用'},
    {name:'糖', amount:'10g'}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '马蹄丸子煮 2 分钟就够，久了就不脆了。',
    '含微量酒精，小孩孕妇别喝。'
  ],
  fidelity:'卡旺卡用非遗工艺的黄山米酒，家庭版用超市酒酿，酒香会弱一些但米粒口感接近。',
  steps:[
    {title:'做马蹄丸子', desc:'马蹄切碎拌糯米粉，搓成小丸子。', act:'备料', add:[]},
    {title:'煮丸子', desc:'水沸下丸子，浮起后再煮 2 分钟，捞出过冷水。', timer:180, act:'加热',
     add:[{name:'马蹄丸子', pct:20, color:'#F0E6D2'}]},
    {title:'打冰沙', desc:'厚乳 150ml + 牛奶 100ml + 糖 10g + 冰块，打成绵密冰沙。', timer:30, act:'打泥',
     add:[{name:'厚乳冰沙', pct:52, color:'#FDFAF2'}]},
    {title:'加酒酿', desc:'杯底放酒酿 100g，倒冰沙，最后放马蹄丸子。', act:'倒入',
     add:[{name:'酒酿', pct:28, color:'#F5EBDC'}]}
  ]
},

{
  id:'siji', name:'四季奶青', category:'奶茶', brands:['一点点'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:500, bg:'#FFEDD5',
  layers:[
    {name:'四季春茶', pct:55, color:'#D9C48A'},
    {name:'奶精奶', pct:35, color:'#F5EEDC'},
    {name:'椰果', pct:10, color:'#FBF6E4'}
  ],
  intro:'一点点最经典的常青款。四季春茶带兰花香气，配奶精才有那个独特的古早味——换鲜奶就不是这个味了。',
  ingredients:[
    {name:'四季春茶叶', amount:'8g'},
    {name:'热水', amount:'250ml', note:'95℃'},
    {name:'奶精粉', amount:'25g', note:'这一杯就是要用奶精，鲜奶版完全不同'},
    {name:'糖浆', amount:'20ml'},
    {name:'椰果', amount:'50g', optional:true}
  ],
  tools:['杯子','滤网','摇壶'],
  pitfalls:[
    '奶精粉要用少量热水先化开，直接倒会结块。',
    '茶汤泡超过 6 分钟会涩，定好闹钟。'
  ],
  fidelity:'门店用定量奶精和糖浆，家庭版完全可复刻，这一杯还原度能到九成五。',
  steps:[
    {title:'泡四季春', desc:'8g 茶叶用 95℃ 水 250ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'四季春茶', pct:58, color:'#D9C48A'}]},
    {title:'化奶精', desc:'奶精粉 25g 用 30ml 热茶汤化开，搅到无颗粒。', act:'搅拌',
     add:[{name:'奶精奶', pct:32, color:'#F5EEDC'}]},
    {title:'混合', desc:'茶汤 + 奶精液 + 糖浆 20ml 拌匀，加冰块。', act:'倒入',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加椰果', desc:'杯底放椰果 50g，倒进去。', act:'铺面',
     add:[{name:'椰果', pct:10, color:'#FBF6E4'}]}
  ]
},

{
  id:'yuyuan', name:'芋圆奶茶', category:'奶茶', brands:['书亦烧仙草','卡旺卡'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#F9A8D4',
  layers:[
    {name:'三色芋圆', pct:28, color:'#D8AFC4'},
    {name:'奶茶', pct:60, color:'#D9B48C'},
    {name:'奶盖', pct:12, color:'#FFFFFF'}
  ],
  intro:'芋圆要煮到全浮起再多煮 2 分钟，少一分钟中间就是硬的。三色芋圆比单色好看，但味道差不多。',
  ingredients:[
    {name:'三色芋圆', amount:'100g', note:'冷冻的，别买干的'},
    {name:'红茶', amount:'150ml'},
    {name:'鲜奶', amount:'180ml'},
    {name:'糖浆', amount:'15ml'},
    {name:'淡奶油', amount:'40ml', optional:true}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '芋圆必须水沸下锅，冷水下会散。',
    '煮好后过冷水才 Q，不过冷水会粘成一团。'
  ],
  fidelity:'门店现煮现用，家庭冷冻芋圆煮久一点也能接近，关键是过冷水这步。',
  steps:[
    {title:'煮芋圆', desc:'水沸下芋圆，煮到全浮起，再煮 2 分钟。', timer:420, act:'加热',
     add:[{name:'三色芋圆', pct:30, color:'#D8AFC4'}]},
    {title:'过冷水', desc:'捞出冲冷水 30 秒，冲到不粘手。', timer:30, act:'冲洗', add:[]},
    {title:'调奶茶', desc:'红茶 150ml + 鲜奶 180ml + 糖浆 15ml 混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:56, color:'#D9B48C'}]},
    {title:'组装', desc:'芋圆垫底，倒奶茶，表面铺打发的淡奶油。', timer:40, act:'铺面',
     add:[{name:'奶盖', pct:14, color:'#FFFFFF'}]}
  ]
},

{
  id:'nailv', name:'奶绿', category:'奶茶', brands:['古茗','蜜雪冰城','一点点'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:500, bg:'#FECACA',
  layers:[
    {name:'茉莉绿茶', pct:58, color:'#DCE3C0'},
    {name:'奶液', pct:36, color:'#F5EEDC'},
    {name:'冰块', pct:6, color:'#DCEFF6'}
  ],
  intro:'绿茶底加奶，比红茶奶茶清爽。绿茶泡过头会苦，水温也不能太高。',
  ingredients:[
    {name:'茉莉绿茶', amount:'7g'},
    {name:'热水', amount:'250ml', note:'85℃，沸水会把绿茶烫苦'},
    {name:'鲜奶', amount:'150ml'},
    {name:'糖浆', amount:'20ml'},
    {name:'冰块', amount:'约 120g'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '绿茶用沸水泡会涩到发苦，水温降到 85℃。',
    '茶汤要放凉再加奶，热的会让奶变腥。'
  ],
  fidelity:'门店用现萃茶汤，家用泡 3 分钟就够，久了涩味压不住。',
  steps:[
    {title:'泡绿茶', desc:'85℃ 水 250ml 泡 3 分钟，滤掉茶叶。', timer:180, act:'冲泡',
     add:[{name:'茉莉绿茶', pct:56, color:'#DCE3C0'}]},
    {title:'降温', desc:'加冰块搅到茶汤不烫手。', act:'降温',
     add:[{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'加奶调甜', desc:'倒鲜奶 150ml、糖浆 20ml，轻搅两下。', act:'搅拌',
     add:[{name:'奶液', pct:36, color:'#F5EEDC'}]}
  ]
},

{
  id:'bulei', name:'布蕾脆脆奶芙', category:'奶茶', brands:['古茗'],
  method:'分层', difficulty:2, temp:'冰', volume:500, bg:'#FFE4E6',
  layers:[
    {name:'布蕾', pct:26, color:'#F2C879'},
    {name:'脆啵啵', pct:12, color:'#C98A45'},
    {name:'奶茶', pct:48, color:'#D9B48C'},
    {name:'奶芙', pct:14, color:'#FFFFFF'}
  ],
  intro:'布蕾要自己烤或者用现成的，脆啵啵提供那口「嘎吱」。奶芙是淡奶油打发的，不是奶盖。',
  ingredients:[
    {name:'布蕾粉', amount:'40g', note:'或直接买现成布蕾'},
    {name:'牛奶', amount:'200ml'},
    {name:'脆啵啵', amount:'40g'},
    {name:'红茶', amount:'150ml'},
    {name:'淡奶油', amount:'60ml'},
    {name:'糖', amount:'15g'}
  ],
  tools:['锅','打泡器','杯子'],
  pitfalls:[
    '布蕾要完全冷却凝固才切，热的时候切会糊。',
    '脆啵啵最后放，泡久了就不脆了。'
  ],
  fidelity:'古茗的布蕾是中央厨房配送，家庭用布蕾粉做，口感软一点但焦糖香接近。',
  steps:[
    {title:'做布蕾', desc:'布蕾粉 40g + 牛奶 200ml 搅匀，小火加热到浓稠，倒模冷藏 2 小时。', timer:7200, act:'加热',
     add:[{name:'布蕾', pct:28, color:'#F2C879'}]},
    {title:'调奶茶', desc:'红茶 150ml + 剩余牛奶 + 糖 15g 混匀，加冰。', act:'搅拌',
     add:[{name:'奶茶', pct:46, color:'#D9B48C'},{name:'冰块', pct:8, color:'#DCEFF6'}]},
    {title:'打奶芙', desc:'淡奶油 60ml 打到六分发，能缓慢流动。', timer:40, act:'搅拌',
     add:[{name:'奶芙', pct:12, color:'#FFFFFF'}]},
    {title:'组装', desc:'布蕾切块垫底，倒奶茶，铺奶芙，最后撒脆啵啵。', act:'铺面',
     add:[{name:'脆啵啵', pct:10, color:'#C98A45'}]}
  ]
},

{
  id:'mocha-nt', name:'抹茶拿铁', category:'奶茶', brands:['星巴克','瑞幸','真茶屋'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:450, bg:'#D9F99D',
  layers:[
    {name:'抹茶液', pct:40, color:'#7BA05B'},
    {name:'牛奶', pct:60, color:'#FAF4E9'}
  ],
  intro:'抹茶最怕两件事：水温太高发苦、粉没筛开结块。筛粉这一步别省。',
  ingredients:[
    {name:'抹茶粉', amount:'6g', note:'食品级纯抹茶，别用含糖抹茶饮料粉'},
    {name:'热水', amount:'60ml', note:'80℃，不要沸水'},
    {name:'牛奶', amount:'200ml'},
    {name:'糖', amount:'12g', optional:true}
  ],
  tools:['茶筅','杯子'],
  pitfalls:[
    '抹茶粉不筛直接冲，一定有结块。',
    '沸水冲抹茶会瞬间变苦变黄，80℃ 是上限。'
  ],
  fidelity:'星巴克用预调抹茶液，真茶屋用一级千目抹茶。家用抹茶粉质量差异极大，买日式料理级。',
  steps:[
    {title:'筛抹茶', desc:'抹茶粉 6g 过筛到碗里。', act:'备料', add:[]},
    {title:'点茶', desc:'加 80℃ 热水 60ml，用茶筅 W 字形刷 30 秒到起细泡。', timer:30, act:'搅拌',
     add:[{name:'抹茶液', pct:38, color:'#7BA05B'}]},
    {title:'调奶', desc:'牛奶 200ml 加糖 12g 温热或加冰，倒入抹茶液。', act:'倒入',
     add:[{name:'牛奶', pct:62, color:'#FAF4E9'}]}
  ]
},

{
  id:'siwa', name:'港式丝袜奶茶', category:'奶茶', brands:['兰芳园','港式茶餐厅'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:400, bg:'#FCD34D',
  layers:[
    {name:'浓茶汤', pct:55, color:'#8B5A2B'},
    {name:'淡奶', pct:45, color:'#F5E6C8'}
  ],
  intro:'「丝袜」说的是滤茶的那个棉布网，越用越黑。要撞茶——茶汤从高处冲进壶里，来回撞四次才够滑。',
  ingredients:[
    {name:'锡兰红茶', amount:'15g', note:'粗茶粉，CTC 工艺的最好'},
    {name:'水', amount:'300ml'},
    {name:'淡奶', amount:'100ml', note:'三花淡奶，不是淡奶油'},
    {name:'糖', amount:'15g'}
  ],
  tools:['锅','滤网','两个壶'],
  pitfalls:[
    '撞茶是关键，不撞的话茶味闷、不滑。',
    '淡奶不能换成牛奶，浓度差一倍。'
  ],
  fidelity:'门店用棉布茶袋反复撞茶，家庭用滤网撞四次也能出七成效果。',
  steps:[
    {title:'煮茶', desc:'水 300ml 烧开，下 15g 红茶煮 3 分钟。', timer:180, act:'加热',
     add:[{name:'浓茶汤', pct:58, color:'#8B5A2B'}]},
    {title:'撞茶', desc:'茶汤从 30cm 高处冲进另一个壶，来回撞 4 次。', act:'冲出', add:[]},
    {title:'加淡奶', desc:'淡奶 100ml 倒进杯里，再冲入茶汤。', act:'倒入',
     add:[{name:'淡奶', pct:42, color:'#F5E6C8'}]},
    {title:'调甜', desc:'加糖 15g，搅匀。', act:'搅拌', add:[]}
  ]
},

{
  id:'taishi', name:'泰式奶茶', category:'奶茶', brands:['泰式茶饮店'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#FB923C',
  layers:[
    {name:'炼乳', pct:18, color:'#E8C99A'},
    {name:'泰茶汤', pct:52, color:'#D2691E'},
    {name:'牛奶', pct:30, color:'#F5E6C8'}
  ],
  intro:'橘红色是泰茶的天然颜色，不是色素。炼乳给甜，淡奶给滑，两样都不能少。',
  ingredients:[
    {name:'泰式红茶', amount:'10g', note:'泰国手标牌，带香兰叶香'},
    {name:'热水', amount:'250ml'},
    {name:'炼乳', amount:'40g'},
    {name:'淡奶', amount:'60ml'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['锅','滤网','杯子'],
  pitfalls:[
    '炼乳很甜，先少放，尝了再补。',
    '泰茶粉很细，要用细滤网滤两遍才不牙碜。'
  ],
  fidelity:'门店用正宗手标泰茶，家庭买得到同款，这杯还原度很高。',
  steps:[
    {title:'煮泰茶', desc:'水 250ml 烧开下 10g 泰茶，煮 3 分钟。', timer:180, act:'加热',
     add:[{name:'泰茶汤', pct:56, color:'#D2691E'}]},
    {title:'过滤', desc:'用细滤网滤两遍，滤到无渣。', act:'冲洗', add:[]},
    {title:'调炼乳', desc:'杯底放炼乳 40g，冲入热茶汤搅化。', act:'搅拌',
     add:[{name:'炼乳', pct:16, color:'#E8C99A'}]},
    {title:'加冰加奶', desc:'加冰块，最后淋淡奶 60ml 浮在表面。', act:'倒入',
     add:[{name:'牛奶', pct:28, color:'#F5E6C8'}]}
  ]
},

{
  id:'keke', name:'可可奶茶', category:'奶茶', brands:['星巴克','蜜雪冰城','CoCo'],
  method:'直调', difficulty:1, temp:'热', volume:400, bg:'#FEE2E2',
  layers:[
    {name:'可可液', pct:45, color:'#6B4423'},
    {name:'热牛奶', pct:55, color:'#FAF4E9'}
  ],
  intro:'可可粉要用少量热水先调成糊再兑奶，直接撒进热奶会全是疙瘩。',
  ingredients:[
    {name:'无糖可可粉', amount:'15g'},
    {name:'热水', amount:'60ml', note:'先调糊用'},
    {name:'牛奶', amount:'250ml'},
    {name:'糖', amount:'20g'},
    {name:'淡奶油', amount:'30ml', optional:true}
  ],
  tools:['锅','打泡器'],
  pitfalls:[
    '可可粉直接倒进热奶必结块，先在碗里调成糊。',
    '可可粉要无糖的，含糖可可饮料粉会太甜。'
  ],
  fidelity:'门店用巧克力酱，家庭用可可粉更苦更纯粹，糖要多一点。',
  steps:[
    {title:'调可可糊', desc:'可可粉 15g + 糖 20g + 热水 60ml，搅成顺滑糊状。', act:'搅拌',
     add:[{name:'可可液', pct:28, color:'#6B4423'}]},
    {title:'热牛奶', desc:'牛奶 250ml 加热到 65℃，别煮沸。', timer:90, act:'加热',
     add:[{name:'热牛奶', pct:62, color:'#FAF4E9'}]},
    {title:'混合', desc:'可可糊倒进热奶，边倒边搅。', act:'搅拌', add:[]},
    {title:'加奶油', desc:'表面挤一圈打发淡奶油。', timer:40, act:'铺面',
     add:[{name:'淡奶油', pct:10, color:'#FFFFFF'}]}
  ]
},

{
  id:'zangzang-nt', name:'脏脏奶茶', category:'奶茶', brands:['喜茶','乐乐茶','蜜雪冰城'],
  method:'分层', difficulty:1, temp:'冰', volume:500, bg:'#F87171',
  layers:[
    {name:'可可挂壁', pct:14, color:'#4A2C17'},
    {name:'黑糖珍珠', pct:20, color:'#3A2418'},
    {name:'鲜奶', pct:66, color:'#FAF4E9'}
  ],
  intro:'可可粉调稠了抹在杯壁，喝的时候会往下流，越喝越脏。视觉大于味道，但确实香。',
  ingredients:[
    {name:'可可粉', amount:'15g'},
    {name:'热水', amount:'40ml'},
    {name:'黑糖珍珠', amount:'60g'},
    {name:'鲜奶', amount:'250ml'},
    {name:'糖浆', amount:'15ml'}
  ],
  tools:['锅','勺子','杯子'],
  pitfalls:[
    '可可糊要调得够稠才能挂壁，稀了会直接滑到底。',
    '挂壁后尽快倒奶，久了会干成一片。'
  ],
  fidelity:'门店用巧克力酱挂壁更亮，家庭可可粉偏哑光但更香。',
  steps:[
    {title:'煮珍珠', desc:'水沸下珍珠煮 15 分钟，捞出过冷水。', timer:900, act:'加热',
     add:[{name:'珍珠', pct:20, color:'#3A2418'}]},
    {title:'调可可糊', desc:'可可粉 15g + 热水 40ml 调成稠糊。', act:'搅拌',
     add:[{name:'可可糊', pct:12, color:'#4A2C17'}]},
    {title:'挂壁', desc:'用勺背把可可糊抹在杯壁内侧，抹成不规则纹路。', act:'挂壁', add:[]},
    {title:'组装', desc:'放珍珠，倒鲜奶 250ml 和糖浆，别搅。', act:'倒入',
     add:[{name:'鲜奶', pct:62, color:'#FAF4E9'}]}
  ]
},

{
  id:'yanmai-nt', name:'燕麦奶茶', category:'奶茶', brands:['星巴克','库迪'],
  method:'直调', difficulty:1, temp:'热', volume:450, bg:'#FEF9C3',
  layers:[
    {name:'红茶', pct:42, color:'#A0764A'},
    {name:'燕麦奶', pct:58, color:'#E8DCC4'}
  ],
  intro:'燕麦奶茶比燕麦拿铁更容易接受，因为没有咖啡的苦来抢戏。谷物的甜和红茶的麦芽香很搭。',
  ingredients:[
    {name:'锡兰红茶', amount:'6g'},
    {name:'热水', amount:'200ml'},
    {name:'燕麦奶', amount:'200ml', note:'咖啡师版，普通版加热会分层'},
    {name:'糖浆', amount:'12ml', optional:true}
  ],
  tools:['杯子','滤网','锅'],
  pitfalls:[
    '燕麦奶别煮沸，超过 70℃ 会糊底发苦。',
    '普通燕麦奶加热易分层，用咖啡专用的。'
  ],
  fidelity:'门店用专用燕麦奶，家用同款能还原九成。',
  steps:[
    {title:'泡红茶', desc:'6g 红茶用 95℃ 水 200ml 泡 4 分钟。', timer:240, act:'冲泡',
     add:[{name:'红茶', pct:44, color:'#A0764A'}]},
    {title:'温燕麦奶', desc:'燕麦奶 200ml 加热到 65℃，别沸腾。', timer:60, act:'加热',
     add:[{name:'燕麦奶', pct:56, color:'#E8DCC4'}]},
    {title:'混合', desc:'茶汤滤掉茶叶，倒入燕麦奶，加糖浆。', act:'倒入', add:[]}
  ]
},

{
  id:'jiaotang-nt', name:'焦糖奶茶', category:'奶茶', brands:['一点点','CoCo','蜜雪冰城'],
  method:'直调', difficulty:1, temp:'热', volume:450, bg:'#FACC15',
  layers:[
    {name:'焦糖酱', pct:14, color:'#8B4A15'},
    {name:'红茶', pct:42, color:'#A0764A'},
    {name:'热牛奶', pct:44, color:'#FAF4E9'}
  ],
  intro:'焦糖酱自己做比买的好——白糖干熬到琥珀色，加一点热水就是。比市售的少了股香精味。',
  ingredients:[
    {name:'白糖', amount:'40g', note:'熬焦糖用'},
    {name:'热水', amount:'30ml', note:'熬焦糖时加，小心溅'},
    {name:'红茶', amount:'180ml'},
    {name:'牛奶', amount:'180ml'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '熬焦糖加冷水会炸，一定用热水，站远一点。',
    '糖色到琥珀就关火，再深就发苦了。'
  ],
  fidelity:'门店用品牌焦糖酱，自制焦糖香更浓但颜色更深，这杯自制反而更好。',
  steps:[
    {title:'熬焦糖', desc:'白糖 40g 干锅小火熬到琥珀色，关火加 30ml 热水搅匀。', timer:300, act:'加热',
     add:[{name:'焦糖酱', pct:16, color:'#8B4A15'}]},
    {title:'泡红茶', desc:'红茶 180ml 泡好备用。', timer:240, act:'冲泡',
     add:[{name:'红茶', pct:40, color:'#A0764A'}]},
    {title:'混合', desc:'焦糖酱抹杯底，倒红茶和热牛奶 180ml，搅匀。', act:'倒入',
     add:[{name:'热牛奶', pct:44, color:'#FAF4E9'}]}
  ]
},

{
  id:'guihua-ol', name:'桂花乌龙奶茶', category:'奶茶', brands:['沪上阿姨','古茗','阿嬷手作'],
  method:'直调', difficulty:1, temp:'冷热皆可', volume:450, bg:'#FEF08A',
  layers:[
    {name:'桂花乌龙', pct:52, color:'#C9A227'},
    {name:'牛奶', pct:44, color:'#FAF4E9'},
    {name:'桂花蜜', pct:4, color:'#E8B923'}
  ],
  intro:'乌龙茶的焙火香配桂花，秋天感很强。桂花蜜最后加，早了香气会被奶盖掉。',
  ingredients:[
    {name:'乌龙茶叶', amount:'7g', note:'铁观音或单丛'},
    {name:'热水', amount:'220ml', note:'95℃'},
    {name:'牛奶', amount:'180ml'},
    {name:'桂花蜜', amount:'15ml'},
    {name:'干桂花', amount:'1g', optional:true, note:'撒表面'}
  ],
  tools:['杯子','滤网'],
  pitfalls:[
    '桂花蜜最后加，和奶一起煮会失去花香。',
    '乌龙要沸水泡，85℃ 泡不出焙火味。'
  ],
  fidelity:'门店用桂花乌龙预调液，家用现泡 + 桂花蜜，花香更真但持久度差。',
  steps:[
    {title:'泡乌龙', desc:'95℃ 水 220ml 泡 4 分钟，滤掉茶叶。', timer:240, act:'冲泡',
     add:[{name:'桂花乌龙', pct:54, color:'#C9A227'}]},
    {title:'加奶', desc:'倒牛奶 180ml，热饮加热、冰饮加冰。', act:'倒入',
     add:[{name:'牛奶', pct:42, color:'#FAF4E9'}]},
    {title:'加桂花蜜', desc:'最后淋 15ml 桂花蜜，撒干桂花。', act:'铺面',
     add:[{name:'桂花蜜', pct:4, color:'#E8B923'}]}
  ]
},

{
  id:'wuqimomo', name:'乌漆嘛黑', category:'奶茶', brands:['茶百道'],
  method:'需煮', difficulty:2, temp:'冰', volume:500, bg:'#D1D5DB',
  layers:[
    {name:'黑芝麻糊', pct:34, color:'#2B2B2B'},
    {name:'黑芝麻奶', pct:54, color:'#4A4A4A'},
    {name:'奶盖', pct:12, color:'#F5F5F5'}
  ],
  intro:'黑芝麻要炒过再磨，生的有土腥味。名字很土，但芝麻香配上奶盖意外地高级。',
  ingredients:[
    {name:'黑芝麻', amount:'60g', note:'生芝麻要自己炒香'},
    {name:'糯米粉', amount:'15g', note:'增加浓稠度'},
    {name:'牛奶', amount:'300ml'},
    {name:'糖', amount:'25g'},
    {name:'淡奶油', amount:'50ml', optional:true}
  ],
  tools:['锅','料理机','杯子'],
  pitfalls:[
    '黑芝麻不炒直接磨，会有生腥味。',
    '芝麻糊要过筛，不然有粗颗粒拉嗓子。'
  ],
  fidelity:'茶百道用现磨黑芝麻，家庭用破壁机打，细腻度会差一点但香气足。',
  steps:[
    {title:'炒芝麻', desc:'黑芝麻小火干炒 3 分钟，炒到有香气跳锅。', timer:180, act:'加热', add:[]},
    {title:'磨糊', desc:'炒好的芝麻 + 100ml 牛奶打成细糊，过筛一次。', act:'打泥',
     add:[{name:'黑芝麻糊', pct:34, color:'#2B2B2B'}]},
    {title:'煮芝麻奶', desc:'芝麻糊 + 剩 200ml 牛奶 + 糯米粉 + 糖，小火煮到浓稠。', timer:300, act:'加热',
     add:[{name:'黑芝麻奶', pct:54, color:'#4A4A4A'}]},
    {title:'封顶', desc:'倒进杯子，表面铺打发的淡奶油。', timer:40, act:'铺面',
     add:[{name:'奶盖', pct:12, color:'#F5F5F5'}]}
  ]
},

{
  id:'lujiao-heitang', name:'黑糖鹿丸鲜奶', category:'奶茶', brands:['鹿角巷'], nocaf:true,
  method:'需煮', difficulty:2, temp:'冰', volume:500, bg:'#FB7185',
  layers:[
    {name:'黑糖挂壁', pct:12, color:'#6B4423'},
    {name:'黑糖鹿丸', pct:26, color:'#3A2418'},
    {name:'鲜奶', pct:62, color:'#FAF4E9'}
  ],
  intro:'鹿角巷带火的那一杯。**不含茶**，就是黑糖珍珠加鲜奶，但挂壁的花纹是全部看点，做好了一端上来就有人拍照。',
  ingredients:[
    {name:'黑糖珍珠', amount:'80g', note:'越小颗越像鹿丸'},
    {name:'鲜奶', amount:'300ml', note:'全脂，冰镇'},
    {name:'黑糖浆', amount:'30ml'},
    {name:'冰块', amount:'约 100g'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '黑糖浆必须趁热挂壁，凉了挂不上，只能沉底。',
    '奶要很冰，温奶会把挂壁的黑糖冲化。'
  ],
  fidelity:'鹿角巷用现熬黑糖鹿丸，家庭冷冻珍珠煮久一点也能接近，但挂壁花纹需要练几次。',
  steps:[
    {title:'煮鹿丸', desc:'水沸下珍珠，中火煮 25 分钟，关火焖 10 分钟。', timer:1500, act:'加热',
     add:[{name:'鹿丸', pct:26, color:'#3A2418'}]},
    {title:'过冷水拌糖', desc:'捞出冲冷水，拌 15ml 黑糖浆。', act:'搅拌', add:[]},
    {title:'挂壁', desc:'剩的 15ml 黑糖浆倒进空杯，转圈让杯壁挂出不规则糖痕。', act:'挂壁',
     add:[{name:'黑糖挂壁', pct:12, color:'#6B4423'}]},
    {title:'放鹿丸', desc:'趁糖还没凉，把鹿丸倒进去，会带出更多纹路。', act:'备料', add:[]},
    {title:'倒冰奶', desc:'加冰块，沿杯壁倒冰鲜奶 300ml，别搅。', act:'倒入',
     add:[{name:'鲜奶', pct:60, color:'#FAF4E9'}]}
  ]
},

{
  id:'chunshuitang', name:'春水堂珍珠奶茶', category:'奶茶', brands:['春水堂'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#F472B6',
  layers:[
    {name:'小珍珠', pct:22, color:'#2E1B10'},
    {name:'奶茶', pct:78, color:'#C9A27E'}
  ],
  intro:'1987 年台中春水堂发明的那一杯，全世界珍珠奶茶的起点。它不用黑糖挂壁，就是红茶奶茶加小颗珍珠，朴素得多。',
  ingredients:[
    {name:'木薯小珍珠', amount:'60g', note:'比常规珍珠小一半'},
    {name:'锡兰红茶', amount:'8g'},
    {name:'热水', amount:'250ml', note:'95℃'},
    {name:'鲜奶', amount:'120ml'},
    {name:'糖', amount:'20g'}
  ],
  tools:['锅','杯子','滤网'],
  pitfalls:[
    '小珍珠煮的时间比大珍珠短，12 分钟就够，久了会烂。',
    '春水堂版本不加黑糖浆，甜味来自奶茶本身，别习惯性去挂壁。'
  ],
  fidelity:'原版用奶精和糖浆，口感更「古早」。换成鲜奶会清淡，但更健康，看你想要哪个。',
  steps:[
    {title:'煮小珍珠', desc:'水沸下小珍珠，煮 12 分钟，关火焖 5 分钟。', timer:720, act:'加热',
     add:[{name:'小珍珠', pct:22, color:'#2E1B10'}]},
    {title:'过冷水', desc:'捞出冲冷水到不粘。', act:'冲洗', add:[]},
    {title:'泡红茶', desc:'95℃ 水 250ml 泡 5 分钟，滤掉茶叶。', timer:300, act:'冲泡',
     add:[{name:'红茶汤', pct:50, color:'#B8860B'}]},
    {title:'调奶茶', desc:'红茶汤 + 鲜奶 120ml + 糖 20g 搅匀。', act:'搅拌',
     add:[{name:'奶茶', pct:50, color:'#C9A27E'}]},
    {title:'加珍珠', desc:'珍珠放杯底，倒奶茶，热饮加热、冰饮加冰。', act:'倒入',
     add:[{name:'冰块', pct:6, color:'#DCEFF6'}]}
  ]
},

{
  id:'yuni-mashu', name:'芋泥麻薯奶茶', category:'奶茶', brands:['茶百道','古茗','沪上阿姨'],
  method:'需煮', difficulty:3, temp:'冷热皆可', volume:500, bg:'#E9D5FF',
  layers:[
    {name:'芋泥', pct:28, color:'#C9A0DC'},
    {name:'麻薯', pct:20, color:'#F5EFE0'},
    {name:'奶茶', pct:42, color:'#D9B48C'},
    {name:'奶盖', pct:10, color:'#FFFFFF'}
  ],
  intro:'麻薯是这杯的难点——拉丝感靠糯米粉和水的比例，稀了成糊，稠了成块。做好了能用勺子拉出丝。',
  ingredients:[
    {name:'荔浦芋头', amount:'150g'},
    {name:'糯米粉', amount:'50g', note:'做麻薯'},
    {name:'牛奶', amount:'250ml'},
    {name:'糖', amount:'35g'},
    {name:'红茶', amount:'120ml'},
    {name:'淡奶油', amount:'30ml'}
  ],
  tools:['蒸锅','锅','料理机'],
  pitfalls:[
    '麻薯要小火边煮边搅，一停就糊底。',
    '糯米粉和水的比例约 1:1.2，太稀拉不出丝。'
  ],
  fidelity:'门店用麻薯预拌粉，出丝稳定。家庭用糯米粉需要试一两次才能找到手感。',
  steps:[
    {title:'蒸芋头', desc:'芋头蒸 25 分钟到软透。', timer:1500, act:'加热', add:[]},
    {title:'压芋泥', desc:'加糖 20g、牛奶 80ml、淡奶油，压成带颗粒的泥。', act:'捣碎',
     add:[{name:'芋泥', pct:28, color:'#C9A0DC'}]},
    {title:'做麻薯', desc:'糯米粉 50g + 牛奶 60ml + 糖 15g 搅匀，小火边煮边搅 5 分钟到成团。', timer:300, act:'加热',
     add:[{name:'麻薯', pct:20, color:'#F5EFE0'}]},
    {title:'调奶茶', desc:'红茶 120ml + 剩的牛奶混匀。', act:'搅拌',
     add:[{name:'奶茶', pct:40, color:'#D9B48C'}]},
    {title:'组装', desc:'芋泥抹杯壁，放麻薯，倒奶茶，表面加奶盖。', act:'铺面',
     add:[{name:'奶盖', pct:10, color:'#FFFFFF'}]}
  ]
},

{
  id:'donggua', name:'冬瓜茶', category:'奶茶', brands:['台湾古早味'], nocaf:true,
  method:'需煮', difficulty:1, temp:'冰', volume:500, bg:'#FFF7ED',
  layers:[
    {name:'冬瓜茶冻', pct:18, color:'#A8763E'},
    {name:'冬瓜茶', pct:82, color:'#C99A5E'}
  ],
  intro:'**不含茶，也不含咖啡因**。台湾最古早的消暑饮料，冬瓜糖砖熬出来的，甜得很直接。夏天冰镇一壶能喝三天。',
  ingredients:[
    {name:'冬瓜茶砖', amount:'80g', note:'超市或网购，一块约 80g'},
    {name:'水', amount:'600ml'},
    {name:'柠檬片', amount:'2 片', optional:true, note:'几滴柠檬汁解腻'},
    {name:'冰块', amount:'约 150g'}
  ],
  tools:['锅','杯子'],
  pitfalls:[
    '冬瓜茶砖本身极甜，别再放糖，可以加水稀释。',
    '熬的时候要搅，糖砖容易沉底糊锅。'
  ],
  fidelity:'台湾老店用冬瓜加黑糖慢熬 4 小时，茶砖版风味接近但少了点焦香。',
  steps:[
    {title:'化糖砖', desc:'冬瓜茶砖 80g 切碎，加 200ml 水小火化开。', timer:300, act:'加热',
     add:[{name:'冬瓜茶浓缩', pct:30, color:'#A8763E'}]},
    {title:'稀释', desc:'加剩的 400ml 水，煮开后关火放凉。', act:'倒入',
     add:[{name:'冬瓜茶', pct:56, color:'#C99A5E'}]},
    {title:'加冰', desc:'杯中放冰块，倒冬瓜茶，挤几滴柠檬汁。', act:'铺冰',
     add:[{name:'冰块', pct:14, color:'#DCEFF6'}]}
  ]
},

{
  id:'yuanyang', name:'港式鸳鸯', category:'奶茶', brands:['兰芳园','港式茶餐厅'],
  method:'需煮', difficulty:2, temp:'热', volume:400, bg:'#E7E5E4',
  layers:[
    {name:'咖啡', pct:30, color:'#4A2C17'},
    {name:'丝袜奶茶', pct:70, color:'#C9A27E'}
  ],
  intro:'七分奶茶三分咖啡，是港式茶餐厅的标配。「鸳鸯」就是两种东西混在一起，比例可以自己调。',
  ingredients:[
    {name:'锡兰红茶', amount:'12g'},
    {name:'水', amount:'250ml'},
    {name:'淡奶', amount:'80ml'},
    {name:'浓缩咖啡', amount:'60ml', note:'或速溶黑咖啡 3g'},
    {name:'糖', amount:'15g'}
  ],
  tools:['锅','滤网','两个壶'],
  pitfalls:[
    '咖啡别超过 40%，多了就是咖啡不是鸳鸯。',
    '茶要够浓，鸳鸯的厚度全靠红茶撑。'
  ],
  fidelity:'茶餐厅用现撞的丝袜奶茶 + 现萃咖啡，家庭版用滤网撞茶也能到八成。',
  steps:[
    {title:'煮浓茶', desc:'水 250ml 烧开，下红茶煮 4 分钟。', timer:240, act:'加热',
     add:[{name:'浓茶汤', pct:50, color:'#8B5A2B'}]},
    {title:'撞茶', desc:'茶汤从高处冲进另一个壶，来回撞 3 次。', act:'冲出', add:[]},
    {title:'调奶茶', desc:'茶汤加淡奶 80ml、糖 15g。', act:'搅拌',
     add:[{name:'丝袜奶茶', pct:50, color:'#C9A27E'}]},
    {title:'兑咖啡', desc:'加浓缩咖啡 60ml，搅匀。', act:'倒入',
     add:[{name:'咖啡', pct:20, color:'#4A2C17'}]}
  ]
},

{
  id:'yinla-cha', name:'印度拉茶', category:'奶茶', brands:['印度餐厅'],
  method:'需煮', difficulty:3, temp:'热', volume:400, bg:'#EAB308',
  layers:[
    {name:'拉茶', pct:100, color:'#C98A45'}
  ],
  intro:'「拉」是动作也是技术——茶在两个杯子间高处来回倒，靠落差打出泡沫。拉得越长，茶越滑。',
  ingredients:[
    {name:'阿萨姆红茶', amount:'10g', note:'CTC 碎茶最好'},
    {name:'水', amount:'250ml'},
    {name:'牛奶', amount:'150ml'},
    {name:'炼乳', amount:'30g'},
    {name:'姜', amount:'3 片', optional:true},
    {name:'小豆蔻', amount:'2 颗', optional:true}
  ],
  tools:['锅','两个高杯'],
  pitfalls:[
    '拉的时候要贴近杯子再倒，一开始拉太高会洒一地。',
    '茶要煮够 5 分钟，煮出浓度才有拉的意义。'
  ],
  fidelity:'印度街边用铜壶高拉，泡沫极细。家庭能拉出泡但持久度差，趁热喝。',
  steps:[
    {title:'煮茶', desc:'水 250ml 烧开，下红茶、姜、豆蔻煮 5 分钟。', timer:300, act:'加热',
     add:[{name:'香料茶汤', pct:60, color:'#A8703A'}]},
    {title:'加奶炼乳', desc:'倒牛奶 150ml、炼乳 30g，再煮 2 分钟。', timer:120, act:'加热',
     add:[{name:'奶茶', pct:40, color:'#C98A45'}]},
    {title:'拉茶', desc:'在两个杯子间来回倾倒 6 次，落差 20-30cm。', timer:30, act:'冲出', add:[]},
    {title:'趁热喝', desc:'表面应有细密泡沫，凉了会消失。', act:'完成', add:[]}
  ]
},

{
  id:'jiangzhuangnai', name:'姜撞奶', category:'奶茶', brands:['港式甜品店','顺德'], nocaf:true,
  method:'直调', difficulty:3, temp:'热', volume:250, bg:'#FEF3C7',
  layers:[
    {name:'姜汁', pct:8, color:'#E8D9A0'},
    {name:'水牛奶凝乳', pct:92, color:'#FDFBF6'}
  ],
  intro:'**不含茶，靠姜的蛋白酶让牛奶凝固**，不加任何凝固剂。成败全看温度——70-80℃ 冲下去才凝，高了低了都是失败。',
  ingredients:[
    {name:'老姜', amount:'60g', note:'要老的，嫩姜酶不够'},
    {name:'水牛奶', amount:'200ml', note:'没有就用全脂牛奶 + 10ml 淡奶油'},
    {name:'糖', amount:'15g'}
  ],
  tools:['擦姜板','锅','碗'],
  pitfalls:[
    '奶温超过 85℃ 酶失活，不凝固。低于 60℃ 也凝不了。',
    '冲下去后绝对不能搅，一搅就散。',
    '姜汁要现磨现用，放半小时酶就弱了。'
  ],
  fidelity:'顺德用水牛奶（脂肪 8%），普通牛奶凝得没那么结实，加淡奶油能改善。',
  steps:[
    {title:'磨姜汁', desc:'老姜 60g 磨成蓉，用纱布挤出 15ml 姜汁，分到碗里。', act:'捣碎',
     add:[{name:'姜汁', pct:10, color:'#E8D9A0'}]},
    {title:'热奶', desc:'水牛奶 200ml 加糖 15g 加热到 75℃。', timer:120, act:'加热',
     add:[{name:'热奶', pct:60, color:'#FDFBF6'}]},
    {title:'冲', desc:'把奶从 15cm 高处一次性冲进姜汁碗里，别搅。', act:'冲出', add:[]},
    {title:'静置', desc:'盖盖静置 8 分钟，凝固到能托住勺子。', timer:480, act:'焖',
     add:[{name:'水牛奶凝乳', pct:30, color:'#FDFBF6'}]}
  ]
},

{
  id:'mocha-hongdou', name:'抹茶红豆奶茶', category:'奶茶', brands:['各品牌通用'],
  method:'需煮', difficulty:2, temp:'冷热皆可', volume:500, bg:'#BEF264',
  layers:[
    {name:'蜜红豆', pct:22, color:'#8B3A3A'},
    {name:'抹茶奶', pct:64, color:'#8FAE6A'},
    {name:'奶盖', pct:14, color:'#FFFFFF'}
  ],
  intro:'抹茶的苦配红豆的甜，日式搭配里最稳的一对。红豆要自己做，罐头的太甜会压住抹茶。',
  ingredients:[
    {name:'抹茶粉', amount:'6g'},
    {name:'热水', amount:'50ml', note:'80℃'},
    {name:'牛奶', amount:'200ml'},
    {name:'蜜红豆', amount:'60g', note:'自己做见「蜜红豆」基底'},
    {name:'糖', amount:'15g'},
    {name:'淡奶油', amount:'40ml', optional:true}
  ],
  tools:['茶筅','打泡器','杯子'],
  pitfalls:[
    '抹茶粉必须过筛，不然一嘴颗粒。',
    '红豆别放太多，会盖掉抹茶味。'
  ],
  fidelity:'门店用抹茶粉 + 罐头红豆，家庭自制红豆更香但费时。',
  steps:[
    {title:'点抹茶', desc:'抹茶 6g 过筛，加 80℃ 水 50ml 用茶筅刷 30 秒。', timer:30, act:'搅拌',
     add:[{name:'抹茶液', pct:16, color:'#5C8040'}]},
    {title:'调抹茶奶', desc:'抹茶液 + 牛奶 200ml + 糖 15g 搅匀。', act:'搅拌',
     add:[{name:'抹茶奶', pct:52, color:'#8FAE6A'}]},
    {title:'铺红豆', desc:'杯底放蜜红豆 60g，倒抹茶奶。', act:'倒入',
     add:[{name:'蜜红豆', pct:18, color:'#8B3A3A'},{name:'冰块', pct:7, color:'#DCEFF6'}]},
    {title:'加奶盖', desc:'表面铺打发的淡奶油。', timer:40, act:'铺面',
     add:[{name:'奶盖', pct:12, color:'#FFFFFF'}]}
  ]
}

]);
