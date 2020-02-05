const data = [
  { date: '1月20日', 确诊: 291, 重症: null, 死亡: 6, 治愈:25, 疑似:null },
  { date: '1月21日', 确诊: 440, 重症: 102, 死亡: 9, 治愈:28, 疑似:null },
  { date: '1月22日', 确诊: 571, 重症: 95, 死亡: 17, 治愈:28, 疑似:393 },
  { date: '1月23日', 确诊: 830, 重症: 177, 死亡: 25, 治愈:34, 疑似:1072 },
  { date: '1月24日', 确诊: 1287, 重症: 237, 死亡: 41, 治愈:38, 疑似:1965 },
  { date: '1月25日', 确诊: 1975, 重症: 324, 死亡: 56, 治愈:49, 疑似:2684 },
  { date: '1月26日', 确诊: 2744, 重症: 461, 死亡: 80, 治愈:51, 疑似:5794 },
  { date: '1月27日', 确诊: 4515, 重症: 976, 死亡: 106, 治愈:60, 疑似:6973 },
  { date: '1月28日', 确诊: 5974, 重症: 1239, 死亡: 132, 治愈:103, 疑似:9239 },
  { date: '1月29日', 确诊: 7711, 重症: 1370, 死亡: 170, 治愈:124, 疑似:12167 },
  { date: '1月30日', 确诊: 9692, 重症: 1527, 死亡: 213, 治愈:171, 疑似:15238 },
  { date: '1月31日', 确诊: 11791, 重症: 1795, 死亡: 259, 治愈:243, 疑似:17988 },
  { date: '2月1日', 确诊: 14380, 重症: 2110, 死亡: 304, 治愈:328, 疑似:19544 },
  { date: '2月2日', 确诊: 17205, 重症: 2296, 死亡: 361, 治愈:475, 疑似:21558 },
  { date: '2月3日', 确诊: 20438, 重症: 2788, 死亡: 425, 治愈:632, 疑似:23214 },
  { date: '2月4日', 确诊: 24324, 重症: 3219, 死亡: 490, 治愈:892, 疑似:23260 }
];
const ds = new DataSet();
const dv = ds.createView().source(data);
// fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
dv.transform({
  type: 'fold',
  fields: [ '确诊', '重症', '死亡', '治愈', '疑似' ], // 展开字段集
  key: 'type', // key字段
  value: 'value' // value字段
});
const chart = new G2.Chart({
  container: 'container',
  forceFit: true,
  height: 500
});
chart.source(dv, {
  date: {
	range: [ 0, .8 ]
  }
});
chart.tooltip({
  crosshairs: {
	type: 'line'
  }
});
chart.axis('value', {
  label: {
	formatter: val => {
	  return val + '例';
	}
  }
});
chart
  .line()
  .position('date*value')
  .color('type', ['#178DF9', '#e00', '#422', '#0b0','#fd0'])
  .shape('smooth');
chart
  .point()
  .position('date*value')
  .color('type', ['#178DF9', '#e00', '#422', '#0b0','#fd0'])
  .size(4)
  .shape('circle')
  .style({
	stroke: '#fff',
	lineWidth: 1
  });
chart.render();