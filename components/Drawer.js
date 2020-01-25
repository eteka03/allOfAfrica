import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import{ThemeProvider,createMuiTheme,makeStyles} from '@material-ui/core/styles'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagic,faPlaneDeparture,faBook} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/styles.css'

const theme = createMuiTheme({

    overrides:{
        MuiDrawer:{
            paper:{
                width:"60%"
            }
        }
       
        
        
    }
})

const useStyles = makeStyles({
    
    root:{
        backgroundColor:'white',
        
    }
})

export default function SideBar(props) {

    const classes = useStyles()
   const {openside,change} = props

    return (
        <ThemeProvider theme={theme}>
       <Drawer 
       anchor='right' 
        open={openside}
        onClick={()=>console.log("ferme")}
    ModalProps={{onBackdropClick: ()=>change(false)}}
        >

           <List component="ul" style={{fontSize:"x-large"}} >
               <ListItem button    className={classes.root}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faMagic} />
                </ListItemIcon>
                <ListItemText primary="Explore" />
               </ListItem>

               <ListItem button >
                <ListItemIcon>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </ListItemIcon>
                <ListItemText primary="Destinations" />
               </ListItem>

               <ListItem  button >
                <ListItemIcon>
                    <FontAwesomeIcon icon={faBook} />
                </ListItemIcon>
                <ListItemText primary="About Us" />
               </ListItem>
           </List>

           
      
       </Drawer>
       </ThemeProvider>
    )
}
