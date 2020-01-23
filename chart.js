// 在一行中保存多个城市的数据，需要将数据转换成
// {month: 'Jan', city: 'Tokyo', temperature: 3.9}
const data = [
  { date: '1月20日', 确诊: 291, 重症: null, 死亡: 6, 治愈:25 },
  { date: '1月21日', 确诊: 440, 重症: 102, 死亡: 9, 治愈:28 },
  { date: '1月22日', 确诊: 571, 重症: 95, 死亡: 17, 治愈:28 },
];
const ds = new DataSet();
const dv = ds.createView().source(data);
// fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
dv.transform({
  type: 'fold',
  fields: [ '确诊', '重症', '死亡', '治愈' ], // 展开字段集
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
	range: [ 0, .7 ]
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
  .color('type', ['#178DF9', '#e00', '#422', '#0b0'])
  .shape('smooth');
chart
  .point()
  .position('date*value')
  .color('type', ['#178DF9', '#e00', '#422', '#0b0'])
  .size(4)
  .shape('circle')
  .style({
	stroke: '#fff',
	lineWidth: 1
  });
chart.render();
