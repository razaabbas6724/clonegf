import React from 'react'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';
import {Tabs} from '@mui/material';
import {Tab} from '@mui/material';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    tab:{
      fontSize:12,
      color:"#5f6368",
      textTransform:"capitalize",
      height:10,
      fontWeight:'600',
      fontFamily:"Roboto",
    },
    tabs:{
      height:10,
    }
   

}))

function Centertabs() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
 
      <Tabs label="Primary" 
      textColor="Primary"
      indicatorColor="Primary"
      centered
      className={classes.tabs}
      >

     
        <Tab label="Questions" className={classes.tab} ></Tab>
        <Tab label="Responses" className={classes.tab} ></Tab>
        
      </Tabs>
    </Paper>
  )
}

export default Centertabs