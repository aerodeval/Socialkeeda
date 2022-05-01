import React from 'react';
import "./Sentiment.css";
import { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { maxWidth, minWidth } from '@mui/system';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

export default class Sentiment extends Component {
  render() {
    return (
 <Card sx={{minWidth:500,maxWidth:750,minHeight:500,maxHeight:600}}>
<CardContent>
<h1>sentiment of audience towards your content is</h1>
<ReactSpeedometer
  width={600}
  height={300}
  
  value={0.4}
  maxValue={1.0}
  minValue={-1.0}
  maxSegmentLabels={5}
  segments={1000}
/>
<h1>It is near positive, you are right there!</h1>
</CardContent>

 </Card>

      
    )
  }
}
