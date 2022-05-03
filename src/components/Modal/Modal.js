import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import "./Modal.css";
import { useNavigate } from 'react-router-dom';


<Box
    component="form"
    sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
    }}
    noValidate
    autoComplete="off"
></Box>

function Modal(props, { closeModal }) {

    let navigate = useNavigate ();

    const getData = () => {
        let link = document.getElementById("outlined-basic").value
        console.log(props.link);
        let platform = props.link;
        let data = {link_data : link};
        // axios.post("http://127.0.0.1:5000/"+platform, data).then((req, response) => {
        //     console.log(response)
          
        // }).catch((err)=>{console.log(err)}) 

        (async () => {
            const rawResponse = await fetch("http://127.0.0.1:5000/"+platform, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              body: JSON.stringify(data)
            });
            var content = await rawResponse.json();
            content['platform'] = platform;
            navigate('/Dashboard', {state:content});
            console.log(content);
          })();

        // fetch("http://127.0.0.1:5000/"+platform,  {
        //     method: "GET",
        //     headers:{'content-type': 'application/json'},
        //     mode: 'cors'
        //   }).then((req, response) => {
             
        //     console.log(response)
          
        // }).catch((err)=>{console.log(err)})
        
    }
    return (

        <div className='ModalBg'>
            <div className='ModalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => props.closeModal(false)}><CancelIcon /></button>
                </div>

                <div className='inputLabel'>

                    <h1>To proceed please enter the link to your profile</h1>
                </div>

                <div className='inputBoxModal'>
                    <TextField id="outlined-basic" placeholder="eg. facebook/wasabi.com" variant="outlined" />
                    <button onClick={() => getData()}><SearchIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Modal