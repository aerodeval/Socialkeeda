
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import Home from './components/Home.js'
import Sentiment from './components/Sentiment/Sentiment.js';
import HomePage  from './components/HomePage/HomePage.js';
import Graph from './components/Graph/Graph.js';



export default function ActionArea(){ 
   return (

    <Router>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/Sentiment" element={<Sentiment/>}/>
<Route exact path="/Home" element={<HomePage/>}/>
<Route exact path="/Graph" element={<Graph/>}/>




</Routes>

      
    </Router>
 
  );
}


