import React , {useState}from 'react'

import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'
import IconButton from  '@material-ui/core/IconButton'
import { Grid } from '@material-ui/core'


import SideBar from './Drawer'

const theme = createMuiTheme({

    overrides:{
        MuiPaper:{
         elevation4:{
             boxShadow:'0px'
         },
         root:{
             backgroundColor:''
         }
        },

        MuiAppBar:{
        colorPrimary:{
            backgroundColor:'',
            color:'white',
            backgroundImage:'linear-gradient(to bottom,white,transparent)'
        },
                   root:{
                 
                       zIndex:2
                   }
        }
    }
})


export default function NavMobile() {


    const [side,setside] = useState(false)

        if(side){
            return(<SideBar openside={side} change={(valeur)=>setside(valeur)}/>)
        }

    return (
        <ThemeProvider theme={theme}>

        <AppBar  color="primary" >
                    
            <Toolbar>
             <Grid container direction="row" justify="space-between" alignItems="center">

                    
                
                <IconButton >
                    <img height="55px"  src="/images/logo_transparent.png" alt=""/>
                </IconButton>

                
                    <FontAwesomeIcon color="white" size="2x" icon={faBars} onClick={()=>setside(true)}/>
                
            </Grid>
             </Toolbar>
             
        </AppBar>

        

        </ThemeProvider>
        
    )
}
