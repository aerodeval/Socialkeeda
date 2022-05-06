import React from 'react';
import "./Donut.css";
import { Component } from 'react'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { fontSize, height } from '@mui/system';
import { defaults } from 'chart.js';




  
defaults.font.family = "'Heebo', sans-serif";
defaults.font.color="red";
function Donut(props) {
  

  ChartJS.register(ArcElement, Tooltip, Legend);
 let data = {
  labels: ['Negative', 'Positive', 'Neutral'],
  datasets: [
    {
      label: '# of Votes',
      data: [props.pts.neg , props.pts.pos, props.pts.neu],
      backgroundColor: [
        'rgba(230, 90, 90, 1)',
        'rgba(51, 211, 142, 1.0)',
        'rgba(47, 119, 156, 1)'
        
  
      ],
      borderColor: [
        'rgba(230, 0, 0, 1)',
        'rgba(0, 204, 0, 1)',
        'rgba(0, 102, 204, 1)'
        
      ],
      borderWidth: 1,
      pointLabels: {
      }
      
    },
  ],
};
   
      return (
<div>

        
   <Card sx={{ borderRadius: "40px",minWidth:400,maxWidth:633,minHeight:300,maxHeight:900,border:"4px solid #FF6F91"}}>
  <CardContent style={{background: "linear-gradient(90deg, hsla(242, 58%, 73%, 1) 0%, hsla(157, 72%, 82%, 1) 100%)" }}>
 <h1 className='mainh1'>Overall Sentiment of Data</h1>
 <Doughnut data={data}  options={{
      responsive: true,
      maintainAspectRatio: true, plugins: {
        title: {
          display: true,
  
       
        },
        label:{
          color:"White",
        }
      },

 

        }}
/>;

  </CardContent>
  
   </Card>

   </div>  
        
      )
    
  }

  export default Donut
  