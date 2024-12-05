import React from 'react'
import formimage from "../images/forms_2020q4_48dp.png";
import { FiStar, FiSettings} from "react-icons/fi";
import { AiOutlineEye } from 'react-icons/ai';
import { IconButton } from '@mui/material';
import Profile from '../images/2.jpg'
import { IoMdFolderOpen } from 'react-icons/io';
import { ColorLens } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { Button } from '@mui/material';
import {Avatar} from '@mui/material';
import './FormHeader.css'
function FormHeader() {
  return (
    <div className='form_header'>
        <div className='form_header_left'>
            <img src={formimage} style={{height:'45px',width:'40px'}} alt="formimage" />
    <input type="text" placeholder="Untitled Form" className='form_name' />
    <IoMdFolderOpen className='form_header_icon' style={{marginRight:'10px'}} ></IoMdFolderOpen>
    <FiStar className='form_header_icon' style={{marginRight:'10px'}} ></FiStar>
    <span style={{fontsize:'12px', fontWeight:'600'}}>All changes saved in drive</span>
    </div>
    <div className='form_header__right'>
        <IconButton>
            <ColorLens size='small' className='form_header_icon'/>
        </IconButton>
        <IconButton>
            <AiOutlineEye className='form_header_icon'/>
        </IconButton>
        <IconButton>
            <FiSettings className='form_header_icon'/>
        </IconButton>
        <Button variant='contained' color='primary' href='#contained buttons' className='form_header_button'>Save</Button>
  
        <IconButton>
            <MoreVert className='form_header_icon'/>
        </IconButton>
        <IconButton>
            <Avatar className='form_header_icon' src={Profile} style={{width:'30px', height:'30px'}}/>
        </IconButton>
         </div>


    </div>
  )
}

export default FormHeader