(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.JiangchengData=factory();}(typeof window!=='undefined'?window:this,function(){
'use strict';
// All names, art and tuning below belong to this adaptation. They are not an official balance dump.
var attrs=['健康','头脑','口感','香气','外观','分量','稀有','魅力'];
function dish(id,name,type,price,cost,taste,appeal,values){return{id:id,name:name,type:type,price:price,cost:cost,taste:taste,appeal:appeal,attrs:values};}
var dishes=[
dish('noodle','芝麻热干面','主食',26,42,38,36,[10,15,35,45,40,10,35,12]),
dish('wine','桂花糊米酒','甜饮',22,30,35,40,[20,15,15,35,22,30,15,25]),
dish('rice','蛋炒饭','饭食',28,45,40,32,[25,20,25,25,30,15,45,10]),
dish('sour','酸豆角拌面','主食',34,50,46,45,[20,15,40,45,25,40,35,15]),
dish('beef','牛肉热干面','主食',48,76,58,50,[25,20,45,55,60,10,55,28]),
dish('shrimpnoodle','虾仁拌面','主食',58,90,65,62,[40,35,60,45,40,30,40,55]),
dish('osmanthus','桂花冰米酒','甜饮',30,40,46,52,[25,20,20,55,15,65,15,35]),
dish('beanwine','红豆糊米酒','甜饮',38,48,53,50,[40,30,35,40,45,30,30,35]),
dish('lotuswine','莲子银耳羹','甜饮',55,64,65,64,[70,40,40,40,30,50,30,65]),
dish('doupi','三鲜豆皮','饭食',42,60,52,48,[25,25,60,45,45,20,50,25]),
dish('meatdoupi','鲜肉豆皮','饭食',55,80,61,52,[30,25,65,55,65,15,65,35]),
dish('shrimpdoupi','虾仁豆皮','饭食',64,90,68,65,[45,40,70,50,40,35,50,60]),
dish('soup','排骨藕汤','汤品',58,78,64,56,[70,35,45,55,50,35,45,45]),
dish('fishsoup','鲜鱼糊汤粉','汤品',52,70,60,58,[50,40,55,60,35,40,40,35]),
dish('lotus','桂花糖藕','甜品',48,58,58,60,[55,25,60,65,35,40,25,55]),
dish('cake','桂花米糕','甜品',42,52,54,60,[35,30,55,65,35,35,30,50]),
dish('duck','香辣鸭脖','小食',62,84,65,70,[20,15,65,70,65,10,30,40]),
dish('fish','清蒸武昌鱼','鱼鲜',88,115,78,76,[75,60,75,65,45,65,65,80]),
dish('cray','香辣小龙虾','鱼鲜',98,138,80,85,[45,35,80,90,75,15,65,70]),
dish('ricefish','鱼鲜盖浇饭','饭食',78,100,72,72,[60,55,60,65,50,45,75,60]),
dish('feast','江城三鲜拼盘','名宴',120,160,88,90,[70,65,85,85,75,55,85,85]),
dish('lotusfeast','莲藕养生宴','名宴',108,140,85,82,[95,70,70,70,55,75,65,85]),
dish('riverfeast','长江鲜味宴','名宴',148,190,94,96,[85,85,95,90,65,75,85,98]),
dish('signature','江城一品宴','名宴',168,220,99,100,[90,90,95,98,90,80,95,100])
];
var ingredients=[
{id:'sesame',name:'芝麻酱',taste:6,appeal:3,attrs:[0,-2,4,10,-3,6,-2,1],price:65,area:0},
{id:'pickles',name:'酸豆角',taste:4,appeal:6,attrs:[5,-3,-2,5,8,4,-2,0],price:65,area:0},
{id:'flower',name:'金桂花',taste:4,appeal:8,attrs:[0,2,-2,12,5,-3,2,5],price:75,area:0},
{id:'egg',name:'土鸡蛋',taste:7,appeal:2,attrs:[8,6,6,0,3,4,-3,-2],price:80,area:0},
{id:'beef',name:'黄牛肉',taste:10,appeal:5,attrs:[5,-4,10,5,-3,12,6,3],price:140,area:1},
{id:'beans',name:'蜜红豆',taste:6,appeal:6,attrs:[9,4,-3,3,5,5,-2,0],price:100,area:1},
{id:'lotus',name:'洪湖莲藕',taste:8,appeal:5,attrs:[15,4,12,2,-4,6,2,-2],price:130,area:1},
{id:'pork',name:'鲜排骨',taste:11,appeal:5,attrs:[8,3,8,8,-5,12,-3,3],price:150,area:1},
{id:'shrimp',name:'长江虾仁',taste:12,appeal:9,attrs:[-3,12,13,-2,3,7,8,12],price:210,area:2},
{id:'fish',name:'武昌鲜鱼',taste:13,appeal:8,attrs:[14,14,12,-3,-3,10,6,14],price:230,area:2},
{id:'chili',name:'秘制辣卤',taste:10,appeal:12,attrs:[-6,-3,8,15,10,3,-2,3],price:180,area:2},
{id:'silver',name:'银耳莲子',taste:8,appeal:10,attrs:[18,10,-2,5,0,4,6,12],price:190,area:2},
{id:'cray',name:'清水小龙虾',taste:15,appeal:14,attrs:[8,-4,16,12,-4,9,8,12],price:290,area:3},
{id:'secret',name:'家传卤汁',taste:17,appeal:12,attrs:[-3,8,12,16,18,-5,8,15],price:350,area:3},
{id:'truffle',name:'山珍菌菇',taste:14,appeal:15,attrs:[20,12,12,14,-4,-3,8,18],price:330,area:3},
{id:'pearl',name:'珍藏香料',taste:18,appeal:18,attrs:[-4,15,15,20,8,-4,15,25],price:420,area:3}
];
// Explicit transformations, not a lottery. Ingredients may be selected in either order.
var recipes=[['noodle',['pickles'],'sour'],['noodle',['beef'],'beef'],['sour',['shrimp'],'shrimpnoodle'],['wine',['flower'],'osmanthus'],['wine',['beans'],'beanwine'],['beanwine',['silver'],'lotuswine'],['rice',['egg','pork'],'doupi'],['doupi',['pork'],'meatdoupi'],['doupi',['shrimp'],'shrimpdoupi'],['rice',['lotus','pork'],'soup'],['noodle',['fish'],'fishsoup'],['osmanthus',['lotus'],'lotus'],['rice',['flower','egg'],'cake'],['meatdoupi',['chili'],'duck'],['fishsoup',['fish','flower'],'fish'],['shrimpdoupi',['cray','chili'],'cray'],['rice',['fish','shrimp'],'ricefish'],['shrimpdoupi',['fish','secret'],'feast'],['soup',['silver','truffle'],'lotusfeast'],['fish',['shrimp','pearl'],'riverfeast'],['feast',['truffle','pearl'],'signature']];
var jobs=[
{id:'rookie',name:'见习厨师',max:5,need:[],growth:[1,1,4,2],skill:'拿手家常',effect:'调理 +8'},
{id:'floor',name:'前厅店员',max:5,need:[],growth:[4,4,1,1],skill:'快步招呼',effect:'移动速度 +25%'},
{id:'chef',name:'中餐厨师',max:5,need:['rookie'],growth:[2,1,5,3],skill:'旺火快炒',effect:'烹饪时间 −20%'},
{id:'host',name:'接客达人',max:5,need:['floor'],growth:[3,6,1,2],skill:'街坊闲谈',effect:'顾客评价 +6'},
{id:'researcher',name:'食材行家',max:5,need:['rookie'],growth:[2,2,3,6],skill:'精挑细选',effect:'探索收获 +1'},
{id:'master',name:'江城名厨',max:5,need:['chef','researcher'],growth:[3,3,7,6],skill:'火候真传',effect:'菜品呈味 +12'},
{id:'manager',name:'餐厅经理',max:5,need:['host','chef'],growth:[5,6,3,4],skill:'从容调度',effect:'送餐速度 +35%'},
{id:'five',name:'五星料理人',max:5,need:['master','manager'],growth:[5,6,8,8],skill:'一品匠心',effect:'研发上限 +35'}
];
var staff=[
{id:'owner',name:'阿江',job:'rookie',stats:[35,28,48,40],wage:0,fee:0,unlock:0},
{id:'man',name:'小满',job:'floor',stats:[48,42,25,28],wage:180,fee:120,unlock:0},
{id:'cheng',name:'阿诚',job:'rookie',stats:[35,25,58,45],wage:240,fee:200,unlock:0},
{id:'gui',name:'桂姨',job:'floor',stats:[34,60,35,42],wage:220,fee:180,unlock:0},
{id:'ye',name:'小叶',job:'floor',stats:[65,40,28,34],wage:320,fee:300,unlock:1},
{id:'zhou',name:'周师傅',job:'chef',stats:[40,32,78,65],wage:480,fee:500,unlock:1},
{id:'lan',name:'阿岚',job:'researcher',stats:[46,52,52,80],wage:460,fee:480,unlock:1},
{id:'he',name:'何姐',job:'host',stats:[55,82,35,52],wage:500,fee:520,unlock:1},
{id:'lin',name:'林大厨',job:'chef',stats:[55,45,96,82],wage:700,fee:850,unlock:2},
{id:'tian',name:'田师傅',job:'researcher',stats:[48,54,65,110],wage:750,fee:900,unlock:2},
{id:'qing',name:'青禾',job:'host',stats:[76,95,48,66],wage:720,fee:850,unlock:2},
{id:'boss',name:'苏掌柜',job:'manager',stats:[88,96,72,84],wage:980,fee:1200,unlock:3}
];
var clients=[
{id:'student',name:'放学学生',area:0,likes:[1,7,2],appetite:1,friends:1,reward:'flyer',next:'worker'},
{id:'worker',name:'下班白领',area:0,likes:[2,3,5],appetite:1,friends:1,reward:'hire',next:'neighbor'},
{id:'neighbor',name:'老街街坊',area:0,likes:[0,2,6],appetite:2,friends:2,reward:'tea',next:'driver'},
{id:'driver',name:'夜班司机',area:0,likes:[4,6,3],appetite:2,friends:1,reward:'wholesale',next:null},
{id:'runner',name:'江边跑友',area:1,likes:[0,5,2],appetite:1,friends:2,reward:'garden',next:'family'},
{id:'family',name:'亲子家庭',area:1,likes:[0,1,6],appetite:2,friends:4,reward:'family',next:'tourist'},
{id:'tourist',name:'江城游客',area:1,likes:[3,7,2],appetite:2,friends:3,reward:'guide',next:null},
{id:'foodie',name:'美食编辑',area:2,likes:[2,3,7],appetite:2,friends:2,reward:'showcase',next:'director'},
{id:'director',name:'公司社长',area:2,likes:[7,4,3],appetite:2,friends:4,reward:'banquet',next:null},
{id:'critic',name:'料理评审',area:3,likes:[2,7,3],appetite:2,friends:2,reward:'five',next:'master'},
{id:'master',name:'江城老饕',area:3,likes:[2,4,7],appetite:3,friends:4,reward:'legacy',next:null}
];
var regions=[
{id:0,name:'汉口老街',tag:'街坊 · 学生',threshold:1100,baseline:20,search:'老街早市',map:'old'},
{id:1,name:'武昌学府',tag:'家庭 · 跑友',threshold:2600,baseline:27,search:'洪湖食材集',map:'campus'},
{id:2,name:'江汉商圈',tag:'白领 · 美食编辑',threshold:5100,baseline:32,search:'长江鱼市',map:'city'},
{id:3,name:'江滩风景区',tag:'老饕 · 宴请',threshold:9200,baseline:38,search:'山珍采购会',map:'river'}
];
var furniture=[
{id:'table',name:'双人木桌',cost:150,seats:2,space:1,pop:3,comfort:4,needs:0},
{id:'family',name:'四人圆桌',cost:480,seats:4,space:2,pop:8,comfort:9,needs:'family'},
{id:'fine',name:'雅座',cost:750,seats:2,space:1,pop:12,comfort:15,needs:'showcase'},
{id:'lantern',name:'暖光灯笼',cost:110,seats:0,space:1,pop:4,comfort:2,needs:0},
{id:'plant',name:'桂花盆景',cost:220,seats:0,space:1,pop:6,comfort:4,needs:'garden'},
{id:'tea',name:'自助茶台',cost:360,seats:0,space:1,pop:8,comfort:6,needs:'tea'}
];
var invitations=[
{id:'neighbor',area:0,name:'街坊试吃邀请',reward:'beans',desc:'老街街坊想试试你的招牌菜。评价达到80分，会介绍新的食材。'},
{id:'tourist',area:1,name:'学府探店邀请',reward:'lotus',desc:'用香气、口感和店内环境招待来访游客。'},
{id:'director',area:2,name:'商圈宴请考察',reward:'silver',desc:'公司社长看重外观与魅力，也留意服务。'},
{id:'master',area:3,name:'江城老饕来访',reward:'pearl',desc:'老饕要品尝你的第一道招牌。菜品、环境、服务共同评分。'}
];
var plans=[
{id:'flyer',name:'街坊传单',cost:160,seconds:8,desc:'老街学生愿意帮忙宣传。客源 +5。'},
{id:'hire',name:'招募广告',cost:100,seconds:6,desc:'解锁更多招聘名额。偶数月可以再次发布。'},
{id:'tea',name:'街坊茶水服务',cost:250,seconds:10,desc:'开放自助茶台，减少等餐焦躁。'},
{id:'wholesale',name:'早市批发渠道',cost:300,seconds:10,desc:'食材采购价格降低15%。'},
{id:'garden',name:'庭院改造',cost:550,seconds:12,desc:'开放桂花盆景，提升店内环境。'},
{id:'family',name:'家庭用餐计划',cost:650,seconds:12,desc:'开放四人圆桌，接待结伴来访的客人。'},
{id:'guide',name:'城市美食指南',cost:850,seconds:16,desc:'分店客源 +8。'},
{id:'showcase',name:'招牌展示计划',cost:1200,seconds:16,desc:'开放雅座，让商圈客人坐得舒心。'},
{id:'banquet',name:'江城宴席计划',cost:1800,seconds:18,desc:'菜单容量 +2，宴请客人更容易多点一道。'},
{id:'five',name:'五星食堂认证',cost:2500,seconds:22,desc:'所有分店人气 +15。'},
{id:'legacy',name:'江城老味道传承',cost:3600,seconds:24,desc:'全区域声誉提升，记录一项传承成就。'}
];
dishes.forEach(function(d){d.maxTaste=Math.min(240,90+d.price);d.maxAppeal=Math.min(260,100+d.price);d.maxPrice=d.price*2;});
ingredients.forEach(function(i){i.stars=1+i.area*2;});
function map(a){var o={};a.forEach(function(x){o[x.id]=x;});return o;}
return{attrs:attrs,dishes:map(dishes),ingredients:map(ingredients),recipes:recipes,jobs:map(jobs),staff:map(staff),clients:map(clients),regions:regions,furniture:map(furniture),plans:map(plans),invitations:invitations,monthSeconds:48,endingMonth:180};
}));
