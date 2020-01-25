
import React from 'react'
import Grid from '@material-ui/core/Grid'





import Navbar from '../components/head'
import Footer from '../components/Footer'

const Layout = props => {

    return(
        
        <Grid  component="div" className="layout" >   
            

          
           <Navbar />
           
               
         
           
              {props.children}
            
               
        <Footer/>
        </Grid>
       
    )
}

export default Layout
