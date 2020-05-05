本项目为本人学习前端开发的练习，显示新型冠状病毒肺炎中国疫情趋势折线图和现有确诊病例数。
折线图利用 [AntV G2](https://antv-g2.gitee.io/zh) 可视化引擎创建，数据来自[国家卫生健康委员会官方网站](http://www.nhc.gov.cn/xcs/yqtb/list_gzbd.shtml)，手动更新到`chart_0405.js`，2020年4月5日24时后不再更新。
中国现有确诊病例数据动态地从 [Isaac Lin](https://github.com/BlankerL) 提供的 [API](https://lab.isaaclin.cn/nCoV/zh) 上获取，成功获取后才会显示在页面上。