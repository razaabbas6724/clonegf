import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Drawer } from '@mui/material';
import {Divider} from '@mui/material';
// import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import formimage from "../images/forms_2020q4_48dp.png";
import docimage from "../images/google-docs--v1.png";
import excelsheetimage from "../images/google-sheets.png";
import slidesimage from "../images/google-slides.png";
import { List , ListItem} from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Drawer.css'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import driveimage from "../images/google-drive--v1.png";
const useStyles = makeStyles({
    ListItem:{
        marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"
    },
    
    listsize:{
        height:"30px",width:"30px"
    },
    listdooo:{
        color: "Green", fontWeight: "700", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" 
    },
    listdooodocs:{
        color: "#5f6368", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif"
    }
});
function TemporaryDrower() {
    const Classes=useStyles();
    const [state,setstate]=React.useState({ 
      left: false,
    })
    const toggleDrawer = (anchor, open) => (event) => {
        setstate({ ...state, [anchor]: open });
    }
    
    const list = (anchor) =>{
        return(<>
        <div style={{width:250}} role="presentation"  >
           <Divider/>
            <List className="logo_title">
            <ListItem style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span className={Classes.listdooo}>D</span>
            <span className={Classes.listdooo}>o</span>
            <span className={Classes.listdooo}>o</span>
            <span className={Classes.listdooo}>o</span>
            {/* <span style={{ color: "green", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>l</span>
            <span style={{ color: "red", fontWeight: "500", fontSize: "22px", marginRight: "10px", fontFamily: "'Product Sans',Arial,sans-serif" }}>e</span> */}
            <span className={Classes.listdooodocs}> Docs</span>
          

            </ListItem>
        </List>
        <Divider />
      <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
        <ListItem className="list-item">
          <img src={docimage} alt="noImage" className={Classes.listsize}/>
          <div className={Classes.ListItem}> Docs</div>
        </ListItem>

        <ListItem className="list-item">
          <img src={excelsheetimage} alt="noImage" className={Classes.listsize}/>
          <div className={Classes.ListItem}>Sheets</div>
        </ListItem>

        <ListItem className="list-item">
          <img src={slidesimage} alt="noImage" className={Classes.listsize} />
          <div className={Classes.ListItem}>Slides</div>
        </ListItem>

        <ListItem className="list-item">
          <img src={formimage} alt="noImage" className={Classes.listsize}/>
          <div className={Classes.ListItem}> Forms</div>
        </ListItem>
      </List>

   
      <Divider />
      <List style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}>
        <ListItem className="list-item" >
          <SettingsSharpIcon className={Classes.ListItem}/>
          <div className={Classes.ListItem}> Settings</div>
        </ListItem>

        <ListItem className="list-item">
          <HelpOutlineSharpIcon className={Classes.ListItem}/>
          <div className={Classes.ListItem}> Help & Feedback</div>
        </ListItem>
      </List>

      <Divider />
      <List style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}>
        <ListItem className="list-item">
          <img src={driveimage} alt="noImage" className={Classes.listsize}/>
          <div style={{ marginLeft: "20px", fontSize: "14px" }}> Drive</div>
        </ListItem>
      </List>
      <Divider />
        
        </div>
        </>)
    }
  return (
    <div>
    <React.Fragment>
    <IconButton onClick={toggleDrawer('left',true)}>
    <MenuIcon />
    </IconButton>
    <Drawer open={state['left']} onClose={toggleDrawer('left',false)} anchor='left'>
        {list('left')}
    </Drawer>
    </React.Fragment>
    
    </div>
  )
}

export default TemporaryDrower






















































// import React from 'react'
// import './Header.css'
// import IconButton from '@mui/material/IconButton';

// // import menu from "../Icons&Images/Menu.png"
// // import Drower from '../Icons&Images/bottom_drawer_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'

// function TemporaryDrower() {

//   return (
//     <> 
//       {/* <React.Fragment>
//       <button className='btnbox' onClick={toggleDrawer("left",true)}>
//         <img src={menu} alt="Menu" className='btn'/>

//         </button>

//         <button className='btnbox' open={state['left']} onClick={toggleDrawer("left",false)} anchor={"left"}>
//               // <img src={Drower} alt="Drower" className='btn'/>
              
//         </button>

//       </React.Fragment> */}
//       <React.Fragment>
//         <IconButton>
          
//         </IconButton>

//       </React.Fragment>
//     </>
//   )
// }

// export default TemporaryDrower