const testData = [{
      pName: "IC/FPGA测试工程师",
      postRequirement: "面议 | 天津 | 统招本科 | 应届毕业生",
      postRequirement2: "<span style='color:red;'>面议</span> | 天津 | 统招本科 | 应届毕业生",
      publicTime: "2019-11-20 11:36",
      companyName: "天津市滨海新区信息技术创新中心",
      trade: "政府/公共事业/非营利机构",
      companyWelfare: [
        "绩效奖金",
        "五险一金",
        "带薪年假",
        "定期体检",
        "岗位晋升",
        "发展空间大"
      ]
    },
    {
      pName: "数据库工程师",
      postRequirement: "10-15k·12薪 | 天津-和平路 | 大专及以上 | 实习生",
      postRequirement2: "<span style='color:red;'>10-15k·12薪</span> | 天津-和平路 | 大专及以上 | 实习生",
      publicTime: "2019-11-19 13:15",
      companyName: "软通动力技术服务",
      trade: "互联网/移动互联网/电子商务",
      companyWelfare: [
        "绩效奖金",
        "五险一金",
        "带薪年假",
        "定期体检",
        "岗位晋升",
        "发展空间大"
      ]
    },
    {
      pName: "IC/FPGA测试工程师",
      postRequirement: "面议 | 天津 | 统招本科 | 应届毕业生",
      postRequirement2: "<span style='color:red;'>面议</span> | 天津 | 统招本科 | 应届毕业生",
      publicTime: "2019-11-18 10:37",
      companyName: "天津市滨海新区信息技术创新中心",
      trade: "政府/公共事业/非营利机构",
      companyWelfare: [
        "绩效奖金",
        "五险一金",
        "带薪年假",
        "定期体检",
        "岗位晋升",
        "发展空间大"
      ]
    },
    {
      pName: "数据库工程师",
      postRequirement: "10-15k·12薪 | 天津-和平路 | 大专及以上 | 实习生",
      postRequirement2: "<span style='color:red;'>10-15k·12薪</span> | 天津-和平路 | 大专及以上 | 实习生",
      publicTime: "2019-11-17 15:19",
      companyName: "软通动力技术服务",
      trade: "互联网/移动互联网/电子商务",
      companyWelfare: [
        "绩效奖金",
        "五险一金",
        "带薪年假",
        "定期体检",
        "岗位晋升",
        "发展空间大"
      ]
    },
    {
      pName: "IC/FPGA测试工程师",
      postRequirement: "面议 | 天津 | 统招本科 | 应届毕业生",
      postRequirement2: "<span style='color:red;'>面议</span> | 天津 | 统招本科 | 应届毕业生",
      publicTime: "2019-11-16 09:36",
      companyName: "天津市滨海新区信息技术创新中心",
      trade: "政府/公共事业/非营利机构",
      companyWelfare: [
        "绩效奖金",
        "五险一金",
        "带薪年假",
        "定期体检",
        "岗位晋升",
        "发展空间大"
      ]
    },
    {
      pName: "数据库工程师",
      postRequirement: "10-15k·12薪 | 天津-和平路 | 大专及以上 | 实习生",
      postRequirement2: "<span style='color:red;'>10-15k·12薪</span> | 天津-和平路 | 大专及以上 | 实习生",
      publicTime: "2019-11-15 18:18",
      companyName: "软通动力技术服务",
      trade: "互联网/移动互联网/电子商务",
      companyWelfare: [
        "绩效奖金",
        "五险一金",
        "带薪年假",
        "定期体检",
        "岗位晋升",
        "发展空间大"
      ]
    }
  ],
  workCityLists = [{
      name: "不限",
      code: "city00",
      choose: true
    },
    {
      name: "北京",
      code: "110100",
      choose: false
    },
    {
      name: "上海",
      code: "310100",
      choose: false
    },
    {
      name: "广州",
      code: "440100",
      choose: false
    },
    {
      name: "深圳",
      code: "440300",
      choose: false
    },
    {
      name: "杭州",
      code: "330100",
      choose: false
    },
    {
      name: "苏州",
      code: "320500",
      choose: false
    },
    {
      name: "济南",
      code: "370100",
      choose: false
    },
    {
      name: "青岛",
      code: "370200",
      choose: false
    },
    {
      name: "武汉",
      code: "420100",
      choose: false
    },
    {
      name: "天津",
      code: "120100",
      choose: false
    },
    {
      name: "杭州",
      code: "330100",
      choose: false
    }

  ],
  workCharacterLists = [{
      name: "不限",
      code: "type00",
      choose: true
    },
    {
      name: "应届",
      code: "type01",
      choose: false
    },
    {
      name: "实习",
      code: "type02",
      choose: false
    }
  ],
  partTimeLists = [
    {
      name: "不限",
      code: "ptype00",
      choose: false
    },
    {
    name: "家教",
    code: "ptype01",
    choose: true
  },
  {
    name: "保姆",
    code: "ptype02",
    choose: false
  },
  {
    name: "传单",
    code: "ptype03",
    choose: false
  },
  {
    name: "替考",
    code: "ptype04",
    choose: false
  },
  {
    name: "服务员",
    code: "ptype05",
    choose: false
  },
  {
    name: "推销员",
    code: "ptype06",
    choose: false
  },
  {
    name: "外卖员",
    code: "ptype07",
    choose: false
  },
  {
    name: "打字员",
    code: "ptype08",
    choose: false
  },
  {
    name: "话务员",
    code: "ptype09",
    choose: false
  },
  {
    name: "自媒体",
    code: "ptype10",
    choose: false
  },
  {
    name: "其他",
    code: "ptype11",
    choose: false
  },
  
],
  functionTypeLists = [{
      name: "不限",
      code: "type00",
      choose: true
    },
    {
      name: "高级管理",
      code: "type01",
      choose: false
    },
    {
      name: "技术",
      code: "type02",
      choose: false
    },
    {
      name: "产品",
      code: "type03",
      choose: false
    },
    {
      name: "运营",
      code: "type04",
      choose: false
    },
    {
      name: "设计",
      code: "type05",
      choose: false
    },
    {
      name: "销售/客服",
      code: "type06",
      choose: false
    },
    {
      name: "市场/公关/广告/会展",
      code: "type07",
      choose: false
    },
    {
      name: "人力/财务/行政",
      code: "type08",
      choose: false
    },
    {
      name: "法务",
      code: "type09",
      choose: false
    },
    {
      name: "金融",
      code: "type10",
      choose: false
    },
    {
      name: "汽车",
      code: "type11",
      choose: false
    },
    {
      name: "房地产/建筑/物业",
      code: "type12",
      choose: false
    },
    {
      name: "生产/制造",
      code: "type13",
      choose: false
    },
    {
      name: "医疗护理/生物制药",
      code: "type14",
      choose: false
    },
    {
      name: "教育/培训",
      code: "type15",
      choose: false
    },
    {
      name: "生活服务",
      code: "type16",
      choose: false
    },
    {
      name: "能源/矿产/环保",
      code: "type17",
      choose: false
    },
    {
      name: "影视/媒体/写作/出版",
      code: "type18",
      choose: false
    },
    {
      name: "咨询/翻译",
      code: "type19",
      choose: false
    },
    {
      name: "项目管理",
      code: "type20",
      choose: false
    },
    {
      name: "采购/贸易",
      code: "type21",
      choose: false
    },
    {
      name: "供应链/物流/运输",
      code: "type22",
      choose: false
    },
    {
      name: "公务员/农林牧渔/其他",
      code: "type23",
      choose: false
    }
  ],
  companyTypeLists = [{
      name: "不限",
      code: "type00",
      choose: true
    },
    {
      name: "外商独资/外企办事处",
      code: "type01",
      choose: false
    },
    {
      name: "中外合营(合资/合作)",
      code: "type02",
      choose: false
    },
    {
      name: "私营/民营企业",
      code: "type03",
      choose: false
    },
    {
      name: "国有企业",
      code: "type04",
      choose: false
    },
    {
      name: "国内上市公司",
      code: "type05",
      choose: false
    },
    {
      name: "政府机关/非盈利机构",
      code: "type06",
      choose: false
    },
    {
      name: "事业单位",
      code: "type07",
      choose: false
    },
    {
      name: "其它",
      code: "type08",
      choose: false
    }
  ],
  workTypeLists = [{
      name: "不限",
      code: "type00",
      choose: true
    },
    {
      name: "互联网/游戏/软件",
      code: "type01",
      choose: false
    },
    {
      name: "电子/通信/硬件",
      code: "type02",
      choose: false
    },
    {
      name: "房地产/建筑/物业",
      code: "type03",
      choose: false
    },
    {
      name: "金融",
      code: "type04",
      choose: false
    },
    {
      name: "消费品",
      code: "type05",
      choose: false
    },
    {
      name: "汽车/机械/制造",
      code: "type06",
      choose: false
    },
    {
      name: "服务/外包/中介",
      code: "type07",
      choose: false
    },
    {
      name: "广告/传媒/教育/文化",
      code: "type08",
      choose: false
    },
    {
      name: "交通/贸易/物流",
      code: "type09",
      choose: false
    },
    {
      name: "制药/医疗",
      code: "type10",
      choose: false
    },
    {
      name: "能源/化工/环保",
      code: "type11",
      choose: false
    },
    {
      name: "政府/农林牧渔",
      code: "type12",
      choose: false
    }
  ],
  sortTypeLists = [{
      name: "默认排序",
      code: "type01",
      choose: true
    },
    {
      name: "新职位优先",
      code: "type02",
      choose: false
    },
    {
      name: "高年薪优先",
      code: "type03",
      choose: false
    }
  ],
  recruitData = [{
      id: '1',
      name: '招商代表/专员',
      address: '南京',
      time: '2020-02-02 12:14',
      degree: '应届',
      salary: '年薪7-8w',
      company: '金赛罗药业',
      workType: '制药·医疗',
      imgage: '@/assets/images/company.png',
      tagShow: false,
      tagData: [{
        name: '五险一金'
      }, {
        name: '绩效奖金'
      }, {
        name: '通讯津贴'
      }, ]
    },
    {
      id: '2',
      name: '招商代表/专员',
      address: '南京',
      time: '2020-02-02 12:14',
      degree: '应届',
      salary: '年薪7-8w',
      company: '金赛罗药业',
      workType: '制药·医疗',
      imgage: '@/assets/images/company.png',
      tagShow: false,
      tagData: [{
        name: '五险一金'
      }, {
        name: '绩效奖金'
      }, {
        name: '通讯津贴'
      }, ]
    },
    {
      id: '3',
      name: '招商代表/专员',
      address: '南京',
      time: '2020-02-02 12:14',
      degree: '应届',
      salary: '年薪7-8w',
      company: '金赛罗药业',
      workType: '制药·医疗',
      imgage: '@/assets/images/company.png',
      tagShow: false,
      tagData: [{
        name: '五险一金'
      }, {
        name: '绩效奖金'
      }, {
        name: '通讯津贴'
      }, ]
    },
    {
      id: '4',
      name: '招商代表/专员',
      address: '南京',
      time: '2020-02-02 12:14',
      degree: '应届',
      salary: '年薪7-8w',
      company: '金赛罗药业',
      workType: '制药·医疗',
      imgage: '@/assets/images/company.png',
      tagShow: false,
      tagData: [{
        name: '五险一金'
      }, {
        name: '绩效奖金'
      }, {
        name: '通讯津贴'
      }, ]
    },
    {
      id: '5',
      name: '招商代表/专员',
      address: '南京',
      time: '2020-02-02 12:14',
      degree: '应届',
      salary: '年薪7-8w',
      company: '金赛罗药业',
      workType: '制药·医疗',
      imgage: '@/assets/images/company.png',
      tagShow: false,
      tagData: [{
        name: '五险一金'
      }, {
        name: '绩效奖金'
      }, {
        name: '通讯津贴'
      }, ]
    },
    {
      id: '6',
      name: '招商代表/专员',
      address: '南京',
      time: '2020-02-02 12:14',
      degree: '应届',
      salary: '年薪7-8w',
      company: '金赛罗药业',
      workType: '制药·医疗',
      imgage: '@/assets/images/company.png',
      tagShow: false,
      tagData: [{
        name: '五险一金'
      }, {
        name: '绩效奖金'
      }, {
        name: '通讯津贴'
      }, ]
    }

  ],
  workWelfareData = [{
      label:'五险一金',
      value: '五险一金'
    },
    {
      label:'带薪年假',
      value: '带薪年假'
    },
    {
      label:'弹性工作',
      value: '弹性工作'
    },
    {
      label:'定期体检',
      value: '定期体检'
    },
    {
      label:'节日礼物',
      value: '节日礼物'
    },
    {
      label:'绩效奖金',
      value: '绩效奖金'
    },
    {
      label:'五险一金',
      value: '通讯津贴'
    },
    {
      label:'午餐补助',
      value: '午餐补助'
    },
    {
      label:'岗位晋升',
      value: '岗位晋升'
    },
    {
      label:'技能培训',
      value: '技能培训'
    },
  ]
  // workWelfareData = ['五险一金','带薪年假','弹性工作','定期体检','节日礼物','绩效奖金','通讯津贴','午餐补助','岗位晋升','技能培训']

export default {
  testData,
  workCityLists,
  partTimeLists,
  workCharacterLists,
  functionTypeLists,
  companyTypeLists,
  workTypeLists,
  sortTypeLists,
  recruitData,
  workWelfareData
}
