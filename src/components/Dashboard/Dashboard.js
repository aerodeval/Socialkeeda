import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import {useEffect} from 'react';
import Donut from '../Donut/Donut';
import Sentiment from '../Sentiment/Sentiment.js'

function Dashboard() {
    let location = useLocation();
    const [data, setData] = useState();
    var top_pos;
    var top_neg;
    var avg_comp;
    var full_data;
    var title;
    var donut;
    useEffect(()=>{
        setData(location.state);
        
       

    }, [])
    

    if(data){
        console.log(data)
        return (
            <div>
                <div>
                    <Donut pts={data.donut}/> 
               </div>
               <div>
                    <Sentiment avg={data.avg_comp}/>
               </div>
               <div>
                   Title is {data.title}
               </div>
            </div>
        )
        
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