<template>
  <canvas id="chart"></canvas>
</template>

<script>
import Chart from "chart.js"

/*function getCSV() {
    //CSVファイルを文字列として取得
    const str = new XMLHttpRequest();
    str.open("GET", "https://tsuyama-craft.github.io/covid-19_test/data/kansenshasuu0420.csv", false);
    try {
      str.send(null);
    } catch (err) {
      console.log(err)
    }

    req.onload = function() {
      CSVtoArray(str.responseText);
    }
}*/

export default {
  methods: {
    
    
    renderChart() {
      const ctx = document.getElementById("chart");

      new Chart(ctx, {
        type: "bar",
        data:{
          labels: ["8月1日", "8月2日", "8月3日", "8月4日", "8月5日", "8月6日", "8月7日"],
          datasets: [{
            label: "新規感染者数",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "#00B0F0",
          }]
        },
        options: {
          plugins: {
            pan: {
              enabled: true,
              mode: "xy",
            },
            zoom: {
              enabled: true,
              drag: true,
              mode: "xy",
            },
          },
          scales: {
            xAxes: [{
                stacked: true,
              }],
            yAxes: [{
                ticks: {
                  beginAtZero: true,
                  userCallback: function(label){
                    if(Math.floor(label)===label){
                      return label
                    }
                  },
                  fontSize: 15
                },
              }],
          },
        },
      });
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>

<style>

</style>