let punteggio = localStorage.getItem("punteggio")

if (punteggio === null) {
  punteggio = correctAnswersCount
} else {
  punteggio = parseInt(punteggio, 10)
}
let myCanvas = document.getElementById("myCanvas").getContext("2d")
myCanvas.width = 400
myCanvas.height = 400
let myLabels
let myData = [10 - punteggio, punteggio]
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
            let label = tooltipItem.label || ""
            let dataIndex = tooltipItem.dataIndex
            let value = tooltipItem.raw
            if (dataIndex === 0) {
              return `${label} ${value} Risposte sbagliate `
            } else if (dataIndex === 1) {
              return `${label} ${value} Risposte corrette`
            }
            return label
          },
        },
      },
    },
    cutout: "70%",
  },
})

if (punteggio > 5) {
  const exampassed = document.getElementById("paragrafo-centro1")
  const exampassed2 = document.getElementById("paragrafo-centro3")
  const exampassed3 = document.getElementById("paragrafo-centro2")
  exampassed.innerHTML = `Congratulations !`
  exampassed2.innerHTML = `You passed the exam.`
  exampassed3.innerHTML = `we'll send you the certificate <br />in few minutes.<br />check your
        email (including <br />promotions / spam folder)`
} else if (punteggio >= 0 && punteggio <= 5) {
  const examfailed = document.getElementById("paragrafo-centro1")
  const examfailed2 = document.getElementById("paragrafo-centro4")
  const examfailed3 = document.getElementById("paragrafo-centro2")
  examfailed.innerHTML = `Too bad !`
  examfailed2.innerHTML = `You failed the exam`
  examfailed3.innerHTML = `You have another chance next month,<br/> and with a bit more preparation,<br/> you'll definitely do better.<br/> Keep pushing forward, and use this time<br/> to focus on the<br/> areas that need improvement!`
}

const percent = function () {
  const wrongAnswer = 10 - punteggio
  const totAnswer = 10
  const percentCorrectAnswer = (punteggio / totAnswer) * 100
  const percentWrongAnswer = (wrongAnswer / totAnswer) * 100

  const container1 = document.getElementById("result-counterrigth")

  const correct = document.createElement("h3")
  correct.innerText = "Correct"
  correct.innerHTML = `${"Correct"} <p><strong>${Math.floor(
    percentCorrectAnswer
  )}%</strong></p> <p class="likeH3">${punteggio}/10 questions</p>`
  container1.appendChild(correct)

  const container2 = document.getElementById("result-counterwrong")
  const wrong = document.createElement("h3")
  wrong.innerText = "Wrong"
  wrong.innerHTML = `${"Wrong"} <p><strong>${Math.floor(
    percentWrongAnswer
  )}%</strong></p> <p class="likeH3">${wrongAnswer}/10 questions</p>`
  container2.appendChild(wrong)
}

percent()
