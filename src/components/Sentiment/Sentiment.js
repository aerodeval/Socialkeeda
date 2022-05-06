import React from 'react';
import "./Sentiment.css";
import { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { fontSize, maxWidth, minWidth } from '@mui/system';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import {useState} from 'react';

function Sentiment(props) {

  const [senti, setSenti] = useState("Your Sentiment is BAD")
  useEffect(()=>{

    if (props.avg >= 0.3){
      setSenti("Near Positive, good work!")
    }
    else if(props.avg>-0.3 && props.avg<0.3)
    {
      setSenti("Neutral, can do better!")
    }
    else if(props.avg<=0.3)
    {
      setSenti("Near Negative, try to improve!")
    }

  }, [])
  
 
    return (
      <div className='sentiment'>
 <Card sx={{px:2,borderRadius: "40px",minWidth:500,maxWidth:650,minHeight:500,maxHeight:600,border:"4px solid #FF6F91",   background: "linear-gradient(90deg, hsla(242, 58%, 73%, 1) 0%, hsla(157, 72%, 82%, 1) 100%)" }}>
 <CardContent style={{
 }}>
<div className='sencon'>
<h1>Sentiment of the audience towards your content is</h1>
<ReactSpeedometer
  width={400}
  height={200}
  value={props.avg}
  maxValue={1.0}
  minValue={-1.0}
  maxSegmentLabels={5}
  segments={1000}
/>
<h1>{senti}</h1>
</div>
</CardContent>

 </Card>
 </div>
      
    )
  }
export default Sentiment
