import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import {useEffect} from 'react';
import { useRef} from 'react';
import Donut from '../Donut/Donut';
import Sentiment from '../Sentiment/Sentiment.js'
import './Dashboard.css'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import lottie from 'lottie-web';

function Dashboard() {
    let location = useLocation();
    const [data, setData] = useState();
    var top_posc=[];
    var top_negc;
    const[com,comset]=useState()
    var full_datac=[];
    var full_datae=[];
    var title=[];
    var donut;
    let vals = [];
    const container = useRef(null)
    useEffect(()=>{
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
    
if(data){

    if(data.platform == 'youtube'){
        top_negc=Object.values(data.top_neg.Comments)
        top_posc=Object.values(data.top_pos.Comments)
        full_datac=Object.values(data.full_data.Comments)
        full_datae=Object.values(data.full_data.comp_score)
        for(var j in full_datae){
            if(full_datae[j] ==='neg'){
                full_datae[j]='😞';
    
            }
            else if(full_datae[j] ==='pos'){
                full_datae[j]='🙂';
            }
            else {
                full_datae[j]='😐';
            }
        } 
        
        
       
        return (
<div className='Apes'>
<div className="AppGlass">
<Sidebar/>
<div className='parentContainer'>
<div className='Cards'>
 <Donut pts={data.donut}/>

<Sentiment avg={data.avg_comp}/>
 </div>
</div>
<div className='smedia' ref={container}></div>

{/* <Card sx={{ borderRadius: "40px",minWidth:500,maxWidth:50,minHeight:500,maxHeight:600,border:"4px solid #e2b714"}}>
 <CardContent style={{backgroundColor: "white"}}>               
  <div className='div3' id='top neg'>
                   
                  <h1> Top ten negative Comments </h1>
                  {top_negc.map(name => (  
                      <li>  
                         {name}  
                      </li>  
                     ))}   
                      
              </div> </CardContent>
                      </Card> */}
</div>


</div>);

}
//             <div className='parent'>
                
//        
                   
//    
               
//                       <Card sx={{ borderRadius: "40px",minWidth:500,maxWidth:50,minHeight:500,maxHeight:600,border:"4px solid #e2b714"}}>
//   <CardContent style={{backgroundColor: "white"}}>
//                <div className='div4' id='top pos'>
                   
//                     <h1> Top ten Postive Comments </h1>
//                     {top_posc.map(name => (  
//                         <li>  
//                             {name}  
//                         </li>  
//                       ))}   
//                       </div></CardContent></Card>

    
//                </div>
//                <div className='div5'>
//                <h1> Comment sentiment analysis on your video  </h1>
//                </div>
//                <div className='div6' id='full_data'>
                   
                 
                   
//                    <table>
//                    <tr>
//                     <th align="center">Comments</th>
//                     <th align="center">Emotion          </th>
                    
//                   </tr>
//                    {full_datac.map((name,i) => (
//                        <tr>
//                        <td>{name}</td>
//                        <td>{full_datae[i]}</td>
//                      </tr>  
                       
//                      ))}    
//                   </table>
   
//               </div>
               
//             </div>

          
//         )

//     }

    else if(data.platform == 'twitter')
    {
       
        full_datac=Object.values(data.full_data.Tweet)
        full_datae=Object.values(data.full_data.comp_score)
        for(var j in full_datae){
            if(full_datae[j] ==='neg'){
                full_datae[j]='😞';
    
            }
            else if(full_datae[j] ==='pos'){
                full_datae[j]='🙂';
            }
            else {
                full_datae[j]='😐';
            }
        } 
        console.log(data)
                return (
            <div className='mdashboard'>
            <div>
                <Donut pts={data.donut}/> 
           </div>
           <div>
                <Sentiment avg={data.avg_comp}/>
           </div>
          
           <div id='full_data'>
                   
                   <h1> All Comments </h1>
                   <table>
                   <tr>
                    <td>Comments</td>
                    <td>emotion</td>
                    
                  </tr>
                   {full_datac.map((name,i) => (
                       <tr>
                       <td>{name}</td>
                       <td>{full_datae[i]}</td>
                     </tr>  
                       
                     ))}    
                  </table>
   
              </div>

           
           
        </div>

        )
    }
}


    else{
        return (
            <div>
                Loading...
            </div>
        )
    }
       

}
export default Dashboard