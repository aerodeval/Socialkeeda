import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Donut from '../Donut/Donut';
import Sentiment from '../Sentiment/Sentiment.js'
import './Dashboard.css'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import lottie from 'lottie-web';
import Grid from '@material-ui/core/Grid';
import { GridViewTwoTone } from '@mui/icons-material';

function Dashboard() {
    let location = useLocation();
    const [data, setData] = useState();
    var top_posc = [];
    var top_negc;
    const [com, comset] = useState()
    var full_datac = [];
    var full_datae = [];
    var title = [];
    var donut;
    let vals = [];
    const container = useRef(null)
    useEffect(() => {
        setData(location.state);
        console.log(data)
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../static/svg/socialmedia.json")
        })

    }, [data])

    if (data) {

        if (data.platform == 'youtube') {
            top_negc = Object.values(data.top_neg.Comments)
            top_posc = Object.values(data.top_pos.Comments)
            full_datac = Object.values(data.full_data.Comments)
            full_datae = Object.values(data.full_data.comp_score)
            for (var j in full_datae) {
                if (full_datae[j] === 'neg') {
                    full_datae[j] = '😞';

                }
                else if (full_datae[j] === 'pos') {
                    full_datae[j] = '🙂';
                }
                else {
                    full_datae[j] = '😐';
                }
            }
            return (
                    <div className='Apes'>
                        <div className="AppGlass">
                            <div className='parentContainer'>
                                <div className='Cards'>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={4}>
                                        <Donut pts={data.donut} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <Sentiment avg={data.avg_comp}/>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <Card sx={{ borderRadius: "40px",minWidth:400,maxWidth:633,minHeight:300,maxHeight:1100,border:"4px solid #FF6F91"}}>
  <CardContent style={{background: "linear-gradient(90deg, hsla(242, 58%, 73%, 1) 0%, hsla(157, 72%, 82%, 1) 100%)" }}>
                               <h1> Comment sentiment analysis on your video  </h1>
                              <div className='homerun'><div id='full_data'>
                                   <table >
                                       <tr>
                                           <th align="center">Comments</th>
                                           <th align="center">Emotion          </th>

                                       </tr>
                                       {full_datac.map((name, i) => (
                                           <tr>
                                               <td>{name}</td>
                                               <td>{full_datae[i]}</td>
                                           </tr>

                                       ))}
                                   </table>
                               </div></div>
                               </CardContent>
                               </Card>
                               
                          </Grid>
                
                                        <Grid item xs={12} sm={6}>
                                        <Card sx={{ borderRadius: "40px",border:"4px solid #FF6F91"}}>
  <CardContent style={{background: "linear-gradient(90deg, hsla(242, 58%, 73%, 1) 0%, hsla(157, 72%, 82%, 1) 100%)" }}>
                                            <div className="comlist" id='top pos'>

                                                <h1 className='top10'> Top ten Postive Comments </h1>
                                                {top_posc.map(name => (
                                                    <li>
                                                        {name}
                                                    </li>
                                                ))}
                                            </div>
                                            </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <Card sx={{ borderRadius: "40px",border:"4px solid #FF6F91"}}>
  <CardContent style={{background: "linear-gradient(90deg, hsla(242, 58%, 73%, 1) 0%, hsla(157, 72%, 82%, 1) 100%)" }}>
                                           <div className="comlist" id='top neg'>

                                                <h1 className='top10'> Top ten negative Comments </h1>
                                                {top_negc.map(name => (
                                                    <li>
                                                        {name}
                                                    </li>
                                                ))}

                                            </div> 
                                            </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                   
                                    
                                  


                                </div>




                            </div>

                        </div>
                    </div>
                )
            }
    
        else if (data.platform == 'twitter') {

            full_datac = Object.values(data.full_data.Tweet)
            full_datae = Object.values(data.full_data.comp_score)
            for (var j in full_datae) {
                if (full_datae[j] === 'neg') {
                    full_datae[j] = '😞';

                }
                else if (full_datae[j] === 'pos') {
                    full_datae[j] = '🙂';
                }
                else {
                    full_datae[j] = '😐';
                }
            }
            console.log(data)
            return (

              
                <div className='Apes'>
                    <div className='AppGlass'>
                      <Grid container spacing={6}>
                           <Grid item xs={12} sm={6}>  <Donut pts={data.donut} /></Grid>
                           <Grid item xs={12} sm={6}> <Sentiment avg={data.avg_comp} /></Grid>
                           <Grid item xs={12} sm={6}> <div className='homerun2'>
                    <div id='full_data'>

                        <h1> Sentiment of audience for your recent tweets</h1>
                        <table>
                            <tr>
                                <td>Comments</td>
                                <td>emotion</td>

                            </tr>
                            {full_datac.map((name, i) => (
                                <tr>
                                    <td>{name}</td>
                                    <td>{full_datae[i]}</td>
                                </tr>

                            ))}
                        </table>

                    </div>
                    </div>
                    </Grid>
                    </Grid>
                        
                    </div>
</div>)

        }
    }
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }

    }
    

export default Dashboard