var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom, { redered: "svg" });
var option;


option = {
  backgroundColor: "#171717",
  color: ["#ef476f", "#f4a261", "#ffd166", "#06d6a0", "#118ab2", "#073b4c", "#f8961e"],
  legend: {
    orient: "horizontal",
    left: "left"
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "Tokenomics",
      type: "pie",
      roseType: null,
      radius: "55%",
      label: {
        position: "outer",
        alignTo: "labelLine",
        bleedMargin: 5,
        formatter: "{title|{b}} {per|	 {d}%}",
        rich: {
          title: {
            fontSize: 26,
            fontFamily: "Bai Jamjuree",
            fontWeight: 700
          },
          per: {
            fontSize: 20,
            fontFamily: "Bai Jamjuree",
            fontWeight: 700,
            verticalAlign: "middle"
          }
        }
      },
      labelLine: {
        length2: 30,
        lineStyle: {
          width: 3
        }
      },
      itemStyle: {
        borderRadius: 0
      },
      data: [
        { value: 40, name: "Reserves" },
        { value: 20, name: "Investors" },
        { value: 20, name: "Team" },
        { value: 10, name: "Treasury" },
        { value: 5, name: "IDO / IEO" },
        { value: 5, name: "Others" },
      ]
    }
  ]
};

option && myChart.setOption(option);
