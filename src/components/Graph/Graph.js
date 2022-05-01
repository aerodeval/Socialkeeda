import React from 'react';
import "./Graph.css";
import { Component } from 'react'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Sentiment of content over the months ',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

// const data = [
//     {x: 0, y: 8},
//     {x: 1, y: 5},
//     {x: 2, y: 4},
//     {x: 3, y: 9},
//     {x: 4, y: 1},
//     {x: 5, y: 7},
//     {x: 6, y: 6},
//     {x: 7, y: 3},
//     {x: 8, y: 2},
//     {x: 9, y: 0}
//   ];
export default class Graph extends Component {
    render() {
      return (


        
   <Card sx={{minWidth:500,maxWidth:750,minHeight:500,maxHeight:600}}>
  <CardContent>
  <Bar options={options} data={data} />
  </CardContent>
  
   </Card>
  
        
      )
    }
  }
  