var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom, { renderer: "svg" });
var option;

option = {
  backgroundColor: "#150220",
  color: ["#ef476f", "#f4a261", "#ffd166", "#06d6a0", "#118ab2", "#073b4c", "#f8961e"],
  legend: {
    show: true,
    textStyle: {
      color: "#ffffff",
      fontFamily: "Press Start 2P",
      fontSize: 12,
    },
  },
  toolbox: {
    show: false,
    feature: {
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "Tokenomics",
      type: "pie",
      radius: "55%",
      label: {
        position: "outer",
        formatter: "{b}: {d}%",
        fontFamily: "Press Start 2P",
        fontSize: 12,
        color: "#ffffff",
        overflow: "break",
        lineHeight: 18,
      },
      data: [
        { value: 35, name: "CoinSale" },
        { value: 55, name: "Staking Rewards" },
        { value: 5, name: "Team" },
        { value: 5, name: "Initiatives" },
      ]
    }
  ]
};

option && myChart.setOption(option);
