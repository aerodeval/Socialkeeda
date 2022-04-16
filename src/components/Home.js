
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from './Modal/Modal.js';
import { useState } from 'react';
import instagram from "./static/images/cards/instagram.png";
import twitter from "./static/images/cards/twitter.png";
import  youtube from "./static/images/cards/youtube.png";
import facebook from "./static/images/cards/facebook.png";
export default function Home(){ 

const [openModal,setOpenModal]=useState(false);
const [modalLink, setLink] = useState("");


    return (
      <div>
      {openModal && <Modal link = {modalLink} closeModal={setOpenModal}/>}
     
        <div className='card'>
  
        <div onClick={() =>{setLink("instagram"); setOpenModal(true) }}>
               {/*Instagram*/}

          {console.log(modalLink)}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                width="400"
                image={instagram}
                
        alt='insta'
              />
              <CardContent>
                <Typography className="App-name"gutterBottom variant="h5" component="div">
                Instagram
                </Typography>
               
              </CardContent>
            </CardActionArea>
          </Card>
         </div>
         
        <div onClick={() =>{setLink("facebook"); setOpenModal(true)}}>
          {/* Facebook */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                width="400"
                image={facebook}
                alt="insta"
              />
              <CardContent>
                <Typography className="App-name" gutterBottom variant="h5" component="div">
             Facebook
                </Typography>
              
              </CardContent>
            </CardActionArea>
          </Card>
          </div>

          <div onClick={() =>{setLink("youtube");setOpenModal(true)}}>
           {/* Youtube*/}
           <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                width="400"
                image={youtube}
                alt="insta"
              />
              <CardContent>
                <Typography className="App-name" gutterBottom variant="h5" component="div">
                  Youtube
                </Typography>
           
              </CardContent>
            </CardActionArea>
          </Card>
</div>

<div onClick={() =>{setLink("twitter"); setOpenModal(true)}}>
           {/* Twitter */}
           <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                width="400"
                image={twitter}
                alt="insta"
              />
              <CardContent>
                <Typography className="App-name"gutterBottom variant="h5" component="div">
                  Twitter
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
</div>
    
          </div>
          </div>

        );
    }
 

