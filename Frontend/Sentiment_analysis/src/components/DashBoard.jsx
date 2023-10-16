import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import CommentTable from './CommentTable';
import Cards from './Cards';
import LineChart from './LineChart';
import WordCloudChart from './WordCloud';
import InfoCards from './InfoCard';
import TableCustomized from './Table';
import axios from 'axios';

Chart.register(CategoryScale);

function DashBoard() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [Sentiment, setSentiment] = useState({});
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/getVideoData', {
    params: {
      id: location.state.id
    }
  }).then((res) => {
    console.log(res.data);
    setVideoData(res.data);
  })
  // console.log(location.state.id);
  }, []);

  const getCat = () => {
    const newData = [];
    const newSentiment = { ...Sentiment };

    Object.values(location.state.comment).forEach((item) => {
      const commentData = {
        author: item.AuthorName,
        Comment: item.Comments,
        Sentiment: item.Sentiment,
      };

      // Add commentData to the newData array
      newData.push(commentData);

      if (item.Sentiment in newSentiment) {
        newSentiment[item.Sentiment] += 1;
      } else {
        newSentiment[item.Sentiment] = 1;
      }
    });

    // Update the state once with the new data and sentiment
    setData([...data, ...newData]);
    setSentiment(newSentiment);
  };

  useEffect(() => {
    getCat();
  }, [location.state]);

  useEffect(() => {
    const colorMap = {
      Positive: 'rgba(255, 99, 100, 1)',
      Negative: 'rgba(54, 162, 235, 1)',
      Neutral: 'rgba(255, 206, 86, 1)',
    };

    setChartData({
      labels: Object.keys(Sentiment),
      datasets: [
        {
          data: Object.values(Sentiment),
          backgroundColor: Object.keys(Sentiment).map((label) => colorMap[label]), // Add more colors as needed
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    });
  }, [Sentiment]); // Trigger the effect when Sentiment changes

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  return (
    <div>
      <div className='flex justify-center'>
        <InfoCards title={videoData.videoTitle }/>
        <InfoCards title={videoData.channelName }/>
        <InfoCards title={videoData.videoPublishDate}/>

      </div>
      <div className='flex flex-row w-full justify-around'>
        <div className='w-full flex flex-row justify-around m-4'>
          <div className='w-2/5'>
            <Pie
              data={chartData}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Users Sentiments',
                  },
                },
              }}
            />
          </div>
          {/* <div className='w-[100%]'>
            <LineChart />
          </div> */}
          {/* <WordCloudChart /> */}
          <div>
            <TableCustomized />
          </div>
        </div>
      </div>
      <div className='flex'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        {/* <Cards /> */}
      </div>
    </div>
  );
}

export default DashBoard;
