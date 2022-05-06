import React from "react"
function AllComments(){
    return (

        <div>


            

            <div className='div6' id='full_data'>
                   
                 
                   
                   <table>
                   <tr>
                    <th align="center">Comments</th>
                    <th align="center">Emotion          </th>
                    
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
    )}


    export default AllComments