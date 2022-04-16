import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import "./Modal.css";
import axios from 'axios';

<Box
    component="form"
    sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
    }}
    noValidate
    autoComplete="off"
></Box>

function Modal(props, { closeModal }) {
    
    const getData = () => {
        let link = document.getElementById("outlined-basic").value
        console.log(props.link)
        let platform = props.link
        let data = {link_data : link}
        axios.post("http://127.0.0.1:5000/"+platform, data).then((req, res) => {
            console.log(res)
        }).catch((err)=>{console.log(err)}) 
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