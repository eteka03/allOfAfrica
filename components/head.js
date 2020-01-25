import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import useWindowDimensions from '../hooks/useWindowDimensions'

import NavMobile from './NavMobile'
import NavBig from './NavBig'

import '../styles/styles.css'


const useStyles =  makeStyles(theme => ({

  
   
}))




export default function Navbar(props) {

    const classes = useStyles()

    const {  width } = useWindowDimensions();
  /* you can also use default values or alias to use only one prop: */
  // const { height: windowHeight = 480 } useWindowDimensions();


     const navBar  = width > 900 ? <NavBig /> : <NavMobile />

  return (
      <>
    {navBar}
    </>
  );
}
