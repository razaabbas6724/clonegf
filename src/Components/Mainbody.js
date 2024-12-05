import React from 'react'
import './Mainbody.css'
import { MoreVert, Storage } from '@mui/icons-material'
import { ArrowDownward } from '@mui/icons-material'
import { FolderOpen } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Docimg from '../images/forms_2020q4_48dp.png'

function Mainbody() {
    return (
        <div className='main_body'>
            <div className=" mainbody_top">
            <div className=" mainbody_left">
            Rexent forms
</div >
<div className=" mainbody_top_right" style={{fontSize:"20px",fontWeight:"bold"}}>
         <div className=" mainbody_top_center" style={{fontSize:"16px",marginRight:"125px"}}>   Owned by anyone
            <ArrowDownward style={{fontSize:'16px',color:"black"}}/>
            </div><IconButton>
                <Storage style={{fontSize:'16px',color:"black"}}/>

            </IconButton>
            <IconButton>
                <FolderOpen style={{fontSize:'16px',color:"black"}}/>
             
            </IconButton>
            </div >
            </div >
            <div className=" mainbody_docs">
                <div className='doc_card'>
                    <img src={Docimg} className='doc_img' alt='docimg'/>
                    <div className='doc_card_content'>
                        
                        <div className='doc_content' style={{fontSize:"12px",color:'grey'}}>
                            <div className='content_left'>
                            <Storage style={{color:"white", fontSize:'12px',backgroundColor:"black",padding:"3px", marginRight:"3px", borderRadius:"3px"}}/>
                            open

                            </div>
            <MoreVert style={{fontSize:"16px",color:'grey'}}/>
                        </div>

                    </div>

                </div>
            </div >

        </div>
    )
}

export default Mainbody