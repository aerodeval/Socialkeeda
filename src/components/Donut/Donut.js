import React from 'react';
import "./Donut.css";
import { Component } from 'react'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { height } from '@mui/system';




ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Negative', 'Positive', 'Neutral'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
  
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    
    },
  ],
};
  

export default class Donut extends Component {
    render() {
      return (


        
   <Card sx={{minWidth:500,maxWidth:50,minHeight:500,maxHeight:600}}>
  <CardContent>
 <Doughnut data={data}  options={{
      responsive: true,
      maintainAspectRatio: true, plugins: {
        title: {
          display: true,
          text: 'Overall Sentiment of Content ',
        },
      },

 

        }}
/>;

  </CardContent>
  
   </Card>
  
        
      )
    }
  }
  