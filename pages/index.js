import React ,{useState} from 'react';
import dynamic from 'next/dynamic'


import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAsterisk,faQuoteLeft,faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'


import Layout from '../components/layout'
import Countries_drawer from '../components/Countries_drawer'
import Cards from '../components/Cards'
import '../styles/styles.css'


import ScrollAnimation from 'react-animate-on-scroll'





const some_hotels = () => {
const tab_hotel = [
  {id:0 ,nom: 'radisson' , etoile:5 , pays:'Senegal' , ville:'Dakar',content:"best hotel forever" , img:'/images/savane.jpg'},
  {id:1 ,nom: 'radisson' , etoile:5 , pays:'Senegal' , ville:'Dakar',content:"best hotel forever" , img:'/images/savane.jpg'},
  {id:2,nom: 'radisson' , etoile:5 , pays:'Senegal' , ville:'Dakar',content:"best hotel forever" , img:'/images/savane.jpg'},
  {id:3 ,nom: 'radisson' , etoile:5 , pays:'Senegal' , ville:'Dakar',content:"best hotel forever" , img:'/images/savane.jpg'},
  {id:4 ,nom: 'radisson' , etoile:5 , pays:'Senegal' , ville:'Dakar',content:"best hotel forever" , img:'/images/savane.jpg'},
  {id:5 ,nom: 'radisson' , etoile:5 , pays:'Senegal' , ville:'Dakar',content:"best hotel forever" , img:'/images/savane.jpg'},
] 


   
 return tab_hotel
    
 
}


export default function Index() {

 

  const [drawer_countries,setDrawer_countries] = useState(false)


  const [tabVal,setTabVal] = useState(0)

  
const DynamicComponent = dynamic(()=>
  import('../components/Transition'),
  {loading: ()=> <h1>loading...</h1>,
  ssr:false}
 
)
  

   
  const show =  drawer_countries ? <Countries_drawer handle_drawer={(val)=>setDrawer_countries(val)} open_drawer={drawer_countries}/>:<Button variant="contained" size="medium" onClick={()=>setDrawer_countries(true)}>
  Countries and cities
</Button> 

const  handleTabVal = (event ,newValue) => {
  setTabVal(newValue)
}

  
  
  return (
   
    <Layout key={"ok"}>
     <div className="page">
      <header className="index_header">
   <DynamicComponent />

  <div className="index_header_countries">
    <h1 className="index_header_text"> <span className="first-letter">B</span>ienvenue en Afrique</h1>
    <div className="headline_description">
        <div className="separator">
          <div className="line line-left"></div>
          <div><FontAwesomeIcon icon={faAsterisk}/></div>
          <div className="line line-right"></div>
        </div>

        <div className="single-animation">
          <h5>l'or de l'humanité</h5>
         
        </div>
    </div>
    {show}
  </div>
 
  </header>

  <ScrollAnimation animateIn='fadeIn'
  >
    
    <div className="welcome_div">
     <h2>
       Bienvenue en Afrique
     </h2>

     
      <div className="welcome_text">
      <h3> Africa ! Berceau de l'humanité,continent des hommes intègres,Terre des grandes
        traditions.Prépares toi à tomber amoureux...
        </h3> 
      </div>
    </div>
    </ScrollAnimation>

    <div className="explore_hotel">
      <div className="head_content">
        <h2 className="head_content_1">
            <span className="first-letter">D</span>écouvrez
        </h2>
        <h1 className="head_content_2">Nos Hotels</h1>

        <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div>
      </div>


    <div className="hotels_description">
      
      <h2 className="hotels_description_titre">
        Elegance et confort,juste comme vous l'imaginer
      </h2>

      <p className="hotels_description_text">Nos hotels font partis des meilleurs de la région.Vos désirs sont leur priorité et 
        votre confort leur responsabilité. Ils répondent aux critères de plus grands hotels avec leur splendide décor.
        Vous en témoignerez vous-memes.
      </p>

      <button className="hotels_description_button">
        Explorez plus
      </button>
   
    </div>


      <div className="scroll_hotel">
  <Tabs

value={tabVal}
onChange={handleTabVal}
   indicatorColor="primary"
   textColor="primary"
   variant="scrollable"
   scrollButtons="auto"
   aria-label="scrollable auto tabs example"
  >

     {some_hotels().map(hotel => <Cards key={hotel.id} type="hotel" image={hotel.img} content={hotel.content} 
      title={hotel.nom}
     />)}
    
  </Tabs>
      </div>

    </div>

    

    <div className="explore_restaurants">

<div className="explore_restaurants_content">
  <div className="explore_restaurant_quote_div">
    
    <h3 className="explore_retaurant_quote"><FontAwesomeIcon icon={faQuoteLeft}/>  You can’t just eat good food. You’ve got to talk about it too. 
      And you’ve got to talk about it to somebody who understands that kind of food.  
         <FontAwesomeIcon icon={faQuoteRight}/>  ~ Kurt Vonnegut</h3>
  </div>
</div>

<div className="head_content head_content_restaurant">
        <h2 className="head_content_1">
            <span className="first-letter">D</span>écouvrez
        </h2>
        <h1 className="head_content_2 head_content_2_restaurant">Nos Restaurants</h1>

        <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div>
      </div>


      <div className="restaurant_description">
      
     

      <p className="hotels_description_text restaurant_text">Nos hotels font partis des meilleurs de la région.Vos désirs sont leur priorité et 
        votre confort leur responsabilité. Ils répondent aux critères de plus grands hotels avec leur splendide décor.
        Vous en témoignerez vous-memes.
      </p>

     <a href="#" className="restaurant_link">Voir nos restaurants</a>
   
    </div>

    <Grid container spacing={2} className="restaurants_info_images_div">
    <Grid item  xs={6}>
      <img alt="" className="restaurant-info-images side-image" src="/images/eggs.jpg"></img>
    </Grid>

    <Grid item  xs={6}>
    <img alt="" className="restaurant-info-images side-image" src="/images/plats.jpg"></img>
    </Grid>

    <Grid item >
    <img alt="" className="restaurant-info-images bottom-image"  src="/images/plats.jpg"></img>
    </Grid>

    </Grid>
    
    </div>
  </div>
  
  </Layout>
)
}



