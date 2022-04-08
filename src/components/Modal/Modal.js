import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import "./Modal.css";
<Box
    component="form"
    sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
    }}
    noValidate
    autoComplete="off"
></Box>

function Modal({ closeModal }) {
    return (
        <div className='ModalBg'>
            <div className='ModalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}><CancelIcon /></button>
                </div>

                <div className='inputLabel'>

                    <h1>To proceed please enter the link to your profile</h1>
                </div>

                <div className='inputBoxModal'>
                    <TextField id="outlined-basic" placeholder="eg. facebook/wasabi.com" variant="outlined" />
                    <button><SearchIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Modal