let myCanvas = document.getElementById("myCanvas").getContext("2d");
myCanvas.width = 400;
myCanvas.height = 400;
let myLabels = ["Risposte sbagliate", "Risposte corrette"];
let myData = [4, 6];
let chart = new Chart(myCanvas, {
  type: "doughnut",
  data: {
    labels: myLabels,
    datasets: [
      {
        label: "Risposte",
        data: myData,
        backgroundColor: ["#C2128D", "#00FFFF"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    rotation: Math.PI,
    responsive: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.label || "";
            let dataIndex = tooltipItem.dataIndex;
            let value = tooltipItem.raw;
            if (dataIndex === 0) {
              return `${label} ${value} `;
            } else if (dataIndex === 1) {
              return `${label} ${value} `;
            }
            return label;
          },
        },
      },
    },
    cutout: "70%",
  },
});
