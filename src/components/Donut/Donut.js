import React from 'react';
import "./Donut.css";
import { Component } from 'react'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { height } from '@mui/system';





  

function Donut(props) {
  

  ChartJS.register(ArcElement, Tooltip, Legend);
 let data = {
  labels: ['Negative', 'Positive', 'Neutral'],
  datasets: [
    {
      label: '# of Votes',
      data: [props.pts.neg , props.pts.pos, props.pts.neu],
      backgroundColor: [
        'rgba(230, 0, 0, 0.7)',
        'rgba(0, 204, 0, 0.7)',
        'rgba(0, 102, 204, 0.7)'
        
  
      ],
      borderColor: [
        'rgba(230, 0, 0, 1)',
        'rgba(0, 204, 0, 1)',
        'rgba(0, 102, 204, 1)'
        
      ],
      borderWidth: 1,
    
    },
  ],
};
   
      return (
<div>

        
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

   </div>  
        
      )
    
  }

  export default Donut
  