
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from './Modal/Modal.js';
import { useEffect, useRef, useState } from 'react';
import instagram from "./static/images/cards/instagram.png";
import twitter from "./static/images/cards/twitter.png";
import youtube from "./static/images/cards/youtube.png";
import facebook from "./static/images/cards/facebook.png";
import lottie from 'lottie-web';
import hbee from "./static/svg/hbee.json";
import { motion } from "framer-motion"

export default function Home() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  const [openModal, setOpenModal] = useState(false);
  const [modalLink, setLink] = useState("");
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./static/svg/hbee.json")
 
    })
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./static/svg/stars.json")
 
    })


  }, [])

  return (


    <div class="main-app">
       
      {openModal && <Modal link={modalLink} closeModal={setOpenModal} />}
      <div className='card'>
        <div onClick={() => { setLink("youtube"); setOpenModal(true) }}>
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

        <div onClick={() => { setLink("twitter"); setOpenModal(true) }}>
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
                <Typography className="App-name" gutterBottom variant="h5" component="div">
                  Twitter
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        
      </div>
      <motion.div transition={{ duration:14}} initial={{x:0,y:-450}} animate={{ x: 780 }} exit={{x:1600}} className='containers' ref={container}/>
      

 

    </div>


  );
}


