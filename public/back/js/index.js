$(function(){
    // 1.初始化echart实例
var mychart1 = echarts.init(document.getElementById('chart1'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '2020注册人数'
    },
    tooltip: {},
    legend: {
        data: ['男', '女']
    },
    xAxis: {
        data: ["一月", "二月", "三月", "四月", "五月", "六月"]
    },
    yAxis: {},
    series: [{
        name: '男',
        type: 'bar',
        data: [5, 20, 76, 10, 10, 20]
    },
    {
        name: '女',
        type: 'bar',
        data: [5, 40, 36, 30, 10, 9]
    }]
};

// 使用刚指定的配置项和数据显示图表。
mychart1.setOption(option);



// 2-图表2
// 1.初始化echart实例
var mychart2 = echarts.init(document.getElementById('chart2'));
// 指定图表的配置项和数据
var option2 = {
    title: {
        text: '销量统计',
        subtext: '纯属虚构',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['耐克','阿迪','亚瑟士','匡威','美津浓'],

        
    },
    series: [
        {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [
                {value:335,name:'耐克'},
                {value:400,name:'阿迪'},
                {value:255,name:'亚瑟士'},
                {value:705,name:'匡威'},
                {value:100,name:'美津浓'}
            ],
            
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
mychart2.setOption(option2);
})