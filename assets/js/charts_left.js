// 基于准备好的dom，初始化echarts实例
		        var myChart = echarts.init(document.getElementById('charts_left'));

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
		                name: 'Buy Fees',
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
		                    {value: 2, name: 'Reflection to Holders'},
		                    {value: 4, name: 'Marketing/Development'},
		                    {value: 6, name: 'AutoBoost Function'}
		                ]
		            }
		        ]
		    };
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart.on('click',function(params){
	if(params.name=='Reflection to Holders'){
		alert(params.name);
	}
})
$(window).resize(function (){
	myChart.resize()
})
