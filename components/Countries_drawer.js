import React,{useState} from 'react'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes,faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'

const theme = createMuiTheme({
    overrides:{
        MuiDrawer:{
            paperAnchorBottom:{
                height:"100%"
            }
        }
    }
})

const Countries_drawer = props => {

    const {handle_drawer} = props

    const [open,setopen] = useState(true)

    const handleClick = ()=>{
        setopen(!open)
    }

    return(
       <ThemeProvider theme={theme}>
        <Drawer anchor ="bottom" open={props.open_drawer}>
     <div className="countries">
         <div className="countries_close">
             
<FontAwesomeIcon icon={faTimes} onClick={()=>handle_drawer(false)} size="3x" />
         </div>

         <div className="countries_div">
            <List component="div">
                <ListItem button onClick={handleClick}>
                     <ListItemText primary="West Africa" />
                     <ListItemIcon>
                        {open ?<FontAwesomeIcon icon={faAngleUp}/> :<FontAwesomeIcon icon={faAngleDown}/>}
                     </ListItemIcon>
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                           <ListItemText primary="Burkina Faso"/>
                        </ListItem> 

                        <ListItem>
                           <ListItemText primary="Senegal"/>
                        </ListItem>
                    </List>
                </Collapse>
                
            </List>
         </div>

     </div>
        </Drawer>
        </ThemeProvider>
    )
}

export default Countries_drawer