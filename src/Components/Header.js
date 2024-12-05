import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';


import formimage from '../Icons&Images/Form.png'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import {Avatar} from '@mui/material';
import Profile from '../Icons&Images/Profile.png'
import TemporaryDrower from './TemporaryDrower';
function Header() {
    return (
        <div className='header'>
            <div className='header_info'>
                <TemporaryDrower/>
                
                <img src={formimage} style={{width:"40px", height:"40px"}} alt='form' />
                <div className='info'>Forms</div>
            </div>
            <div className='header_search'>
            <IconButton><SearchIcon />
            </IconButton>
                <input type='text' placeholder='Search' alt="search" />

                
            </div>
            <div className='header_right'>
            <IconButton>
                <AppsIcon/>
                </IconButton>
                <IconButton>
                <Avatar src={Profile} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
















































// import React from 'react'

// import './Header.css'
// import Appicon from "../Icons&Images/apps_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
// import Search from '../Icons&Images/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
// import Profile from '../Icons&Images/account_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
// import TemporaryDrower from './TemporaryDrower';
// import Formicon from '../Icons&Images/description_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
// function Header() {
//     return (
//         <div>
//             <div className='header'>
//                 <div >
//                     <TemporaryDrower />

//                     <button className='Formbtnbox'>
//                             <img src={Formicon} alt="Form icon" className='Formicon' />
//                         </button>
//                     <span >Forms</span>
//                 </div>
//                 <div className='headersearchbox'>
//                     <div >
//                         <input type="text" placeholder='Search' className='searchbox' />
//                     </div>
//                     <div  >
//                         <button className='Searchbtnbox'>
//                             <img src={Search} alt="Search" className='serbtn' />
//                         </button>

//                     </div>

//                 </div>
//                 <div >
//                     <button className='btnbox'>
//                         <img src={Appicon} alt="Search" className='btn' />
//                     </button>
//                     <button className='btnbox'>
//                         <img src={Profile} alt="Search" className='btn' />
//                     </button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Header