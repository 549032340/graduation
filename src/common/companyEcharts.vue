<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import * as API from "@/api/company.js";
export default {
  data () {
    return {
      line: {
        options: {},
        width: '',
        height: '450'
      },
      echatrsData: {
        // dateData: [],
        // deliveryArr: [],
        // recruitArr: [],//我需要这个数组里的最大值
        dateData: ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07'],
        deliveryArr: [24, 35, 28, 36, 25, 10, 30],
        recruitArr: [12, 18, 20, 13, 20, 2, 15],
        maxNumber: 50
      },

    };
  },
  props: {
    chartData: {
      type: Object,
      default: () => { }
    }
  },
  watch:{
    echatrsData(val){
      this.options();
    }
  },
  mounted () {
    this.options();
  },
  methods: {
    options () {
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          color: ["#bdebec", "#ecbdd1"],
          data: ['投递人数', '招聘人数'],
          left: 'center',
          bottom: 'bottom'
        },
        grid: {
          top: 'middle',
          left: '3%',
          right: '4%',
          bottom: '3%',
          height: '80%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.echatrsData.dateData,
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },
        yAxis: {
          type: 'value',

          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#DDD'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#333"
            },
          },
          nameTextStyle: {
            color: "#999"
          },
          splitArea: {
            show: false
          }
        },
        series: [{
          name: '投递人数',
          type: 'line',
          data: this.echatrsData.deliveryArr,
          color: "#F58080",
          lineStyle: {
            normal: {
              width: 5,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#FFCAD4' // 0% 处的颜色
                }, {
                  offset: 0.4,
                  color: '#F58080' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#F58080' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(245,128,128, 0.5)',
              shadowBlur: 10,
              shadowOffsetY: 7
            }
          },
          itemStyle: {
            normal: {
              color: '#F58080',
              borderWidth: 10,
              /*shadowColor: 'rgba(72,216,191, 0.3)',
               shadowBlur: 100,*/
              borderColor: "#F58080"
            }
          },
          smooth: true
        },
        {
          name: '招聘人数',
          type: 'line',
          data: this.echatrsData.recruitArr,
          lineStyle: {
            normal: {
              width: 5,
              color: {
                type: 'linear',

                colorStops: [{
                  offset: 0,
                  color: '#AAF487' // 0% 处的颜色
                },
                {
                  offset: 0.4,
                  color: '#47D8BE' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#47D8BE' // 100% 处的颜色
                }
                ],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(71,216,190, 0.5)',
              shadowBlur: 10,
              shadowOffsetY: 7
            }
          },
          itemStyle: {
            normal: {
              color: '#AAF487',
              borderWidth: 10,
              /*shadowColor: 'rgba(72,216,191, 0.3)',
               shadowBlur: 100,*/
              borderColor: "#AAF487"
            }
          },
          smooth: true
        },
        ]
      };
      myChart.setOption(option);
    },
    initData () {
      API.recentDeliverNum({
        publicId: sessionStorage.getItem("userId"),
      }).then(res => {
        if (res.code == 200) {
          // let _data = JSON.parse(JSON.stringify(res.result));
          let _data = res.result;
          this.echatrsData = _data;
        }
      });

    }
  },
  created () {
    this.initData();
  }
};
</script>
