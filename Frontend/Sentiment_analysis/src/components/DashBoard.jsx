import React from 'react'
import { useLocation } from 'react-router-dom'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from 'react';
import { Pie } from "react-chartjs-2";

// Topic Breakdown by sentiments
// Wordcloud
// Bar and pie chart of sentiments with respect to date

Chart.register(CategoryScale);

function DashBoard() {
    const location = useLocation()
    console.log(location.state.Sentiment)
    var Sentiment = {}
    const getCat = Object.values(location.state.Sentiment).forEach((item) => {
      // console.log(item)
      if (item in Sentiment) {
        Sentiment[item] += 1
      }
      else {
        Sentiment[item] = 1
      }
    }
    )
    const colorMap = {
      Positive: 'rgba(255, 99, 132, 0.6)',
      Negative: 'rgba(54, 162, 235, 0.6)',
      Neutral: 'rgba(255, 206, 86, 0.6)',
      // Add more labels and their corresponding colors as needed
    };
    const [chartData, setChartData] = useState({
      labels: Object.keys(Sentiment), 
      datasets: [
        {
          data:Object.values(Sentiment),
          backgroundColor: Object.keys(Sentiment).map((label) => colorMap[label]), // Add more colors as needed
          borderColor: "black",
          borderWidth: 2
        }
      ]
    });

  return (
    <div>
      DashBoard
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Sentiments"
            }
          }
        }}
      />
    </div>
  )
}

export default DashBoard