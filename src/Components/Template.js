import React from 'react'
import { IconButton } from '@mui/material';
import UnfoldMoreSharpIcon from '@mui/icons-material/UnfoldMoreSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import './Template.css'
import Blank from "../images/forms-blank-googlecolors.png"
import Contact from "../images/CI.png"
import Party from "../images/Party.png"
import uuid from 'react-uuid'
import { useNavigate } from "react-router-dom";


function Template() {
    let navigate = useNavigate();
    // const navigate = useNavigate();
    function createform() {
        
        const id = uuid();
        console.log(id);
        navigate('forms/'+id)
    }
    return (
        <div className='template_section'>
            <div className='template_top'>
                <div className='template_left'>
                    <span style={{ fontSize: "16px", color: "#202124" }}>Start New form</span>
                </div>
                <div className='template_right'>
                    <div className='gallery_button'>
                        Template Gallery
                        <UnfoldMoreSharpIcon />
                        <IconButton>
                            <MoreVertSharpIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='template_body'>
                <div className='card' onClick={createform}>
                    <img src={Blank} alt="Blank" className='cardimage' />
                    <p className='card_title'>  Blank</p>
                </div>

                <div className='card'>
                    <img src={Party} alt="Blank" className='cardimage' />
                    <p className='card_title'>  Party Invite</p>

                </div>
                <div className='card'>
                    <img src={Contact} alt="Blank" className='cardimage' />
                    <p className='card_title'>   Contact Information</p>

                </div>
            </div>
        </div>

    )
}

export default Template