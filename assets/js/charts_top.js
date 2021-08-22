// import * as echarts from 'echarts';
 window.onload=function (){
     var chartDom = document.getElementById('main');
     var myChart = echarts.init(chartDom);
     var option;
     option =  {
         tooltip: {
             trigger: 'axis',
             axisPointer: {            // Use axis to trigger tooltip
                 type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
             }
         },
         legend: {
             data: ['distribution', 'MarketWallet', 'Pool repo', 'receive Token']
         },
         grid: {
             // left: '3%',
             // right: '4%',
             // bottom: '3%',
             containLabel: true
         },
         xAxis: {
             type: 'value',
             splitLine:{show: false},
             scale: false
         },
         yAxis: {
             type: 'category',
             data: ['every transaction'],
             splitLine:{show: false},
             scale: false
         },
         series: [
             {
                 name: 'distribution',
                 type: 'bar',
                 stack: 'total',
                 label: {
                     show: true
                 },
                 emphasis: {
                     focus: 'series'
                 },
                 data: [6]
             },
             {
                 name: 'MarketWallet',
                 type: 'bar',
                 stack: 'total',
                 label: {
                     show: true
                 },
                 emphasis: {
                     focus: 'series'
                 },
                 data: [3]
             },
             {
                 name: 'Pool repo',
                 type: 'bar',
                 stack: 'total',
                 label: {
                     show: true
                 },
                 emphasis: {
                     focus: 'series'
                 },
                 data: [3]
             },
             {
                 name: 'receive Token',
                 type: 'bar',
                 stack: 'total',
                 label: {
                     show: true
                 },
                 emphasis: {
                     focus: 'series'
                 },
                 data: [88]
             }
         ]
     };
     option && myChart.setOption(option);
 }