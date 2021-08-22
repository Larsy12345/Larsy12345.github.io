// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('charts_right'));

// 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center',
		textStyle:{
			color:'#fff'
		}
    },
    series: [
        {
            name: 'Sell Fees',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 7, name: 'Reflection to Holders'},
                {value: 4, name: 'Marketing/Development'},
                {value: 7, name: 'AutoBoost Function'}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option);

$(window).resize(function (){
    myChart1.resize()
})
