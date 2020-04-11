import React from 'react'
import {countries} from '../../datas/countriesData'

import {
  Container,
  Row,
  Col,
  Carousel
} from 'reactstrap'


import {LazyLoadImage}from 'react-lazy-load-image-component'


import Caroussel from '../../components/Caroussel'
const Card = ({lesdatas}) => {



return (

  <Container style={{padding: 0,maxWidth:'100%' , margin: 0 , fontFamily:'Gadget'}}>

    <header className="product-header">
    

    <img style={{objectFit:'cover'}} width="100%" height="100%" alt="undefined" src={`/images/${lesdatas.image}`} />
  
<h1>{lesdatas.name}</h1>
    </header>

   <section className="product-welcome-section">
    <h1>Bienvenue !</h1>

    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>

   </section>

   { lesdatas.name ?

    <section className="product-rooms-section">
        <div className="descriptif-div">
          <h1>Rooms & Suites</h1>
          <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
        </div>

        <Row xs={1} md={2} lg={3} className="rooms-images">
            <Col className="rooms-col">
                <div className="rooms-image-div">

                  <LazyLoadImage src="/images/afric.jpg" alt="undefined" />
                  

                </div>

                  <h2>Single Room</h2>
                  <span>90$ / PER NIGHT</span>
            </Col>

            <Col className="rooms-col">
                <div className="rooms-image-div">

                  <LazyLoadImage src="/images/afric.jpg" alt="undefined"  />


                </div>

                  <h2>Family Room</h2>
                  <span>90$ / PER NIGHT</span>
            </Col>


            <Col className="rooms-col">
                <div className="rooms-image-div">

                  <LazyLoadImage src="/images/afric.jpg" alt="undefined" />


                </div>

                  <h2>Presidential Room</h2>
                  <span>90$ / PER NIGHT</span>
            </Col>

        </Row>

   </section>
   
   
   : <h1>no</h1>}

<section className="product-photos-section">
    <div className="descriptif-div">
        <h1>Photos</h1>
        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
    </div>


    <Caroussel />

</section>


<section className="product-adresses">

   <header><h1>A Best Place To Stay. Reserve Now!</h1></header> 

    <Row className="product-adresses-div" xs={1} >
      <Col className="adresses-col">
          <LazyLoadImage src='/images/icons/adress.svg' alt='undefined' className="product-icon"/>
          <span>Adress : </span>
           <h5>198 West 21th Street,
Suite 721 New York NY 10016</h5>
      </Col>

      <Col className="adresses-col">
      <LazyLoadImage src='/images/icons/call.svg' alt='undefined' className="product-icon"/>
          <span>Phone : </span>
        <h5>{lesdatas.adress ||    <a href="tel:+1-347-272-7227">+1 (347) 272-7227 (USA)</a> } </h5>
      </Col>

       <Col className="adresses-col">
       <LazyLoadImage src='/images/icons/gmail.svg' alt='undefined' className="product-icon"/>
          <span>Email : </span>
        <h5>{lesdatas.adress ||   <a href="mailto:alloafrica@outlook.fr">alloafrica@outlook.fr</a> } </h5>
      </Col>

     
      
    </Row>

      <Row className="adresses-social-media">
      <LazyLoadImage src='/images/icons/instagram.svg' alt='undefined' className="product-icon"/>

      <LazyLoadImage src='/images/icons/facebook.svg' alt='undefined' className="product-icon"/>
      </Row>
</section>
    
    

    <style jsx global>{`

   .product-header{
     height:80vh;
     width:100%
   }

   .product-header h1{
     position:relative;
     top:-50%;
     
     z-index:1500;
     
     color:white;
     text-align:center;
     
    font-weight:900;
    font-size:5rem;
    letter-spacing: 0.2em;
    
   }

   .product-header::after{
     display:block;
     content:'';
     height:80vh;
     width:100%;
     position:absolute;
     top:0;
     background-color:black;
     opacity:0.5
   }

   .product-welcome-section,
   .product-photos-section,
   .product-adresses
   {
     width:100%;
     
    padding:3rem;
    margin-bottom:6rem;
    
   }

   .product-welcome-section h1{
     font-weight:bold;
     font-family:"Arial Black", Gadget, sans-serif
   }

   .product-welcome-section span{
     font-size:1.3rem;
     
   }


   .descriptif-div{
    
     text-align:center;
    
     padding-bottom:2rem;
   }
   .descriptif-div h1{
    font-weight:bold;
    font-family:"Arial Black", Gadget, sans-serif
   }

   .descriptif-div span{
    
    font-size:1.5rem;
    text-align:center;
    padding-top:5rem;
   }

   .product-rooms-section{
    overflow-x:hidden;
   }

   .rooms-images{
     padding-top:2rem;
     

   }

   .rooms-col{
     text-align:center;
     padding-bottom:2rem;  
     font-weight:bold;
     font-family:"Arial Black", Gadget, sans-serif
   }

   .rooms-col span{
      color:#f0ad1e;
      
   }

   

   .rooms-image-div{
     height: 500px; 
     width:100%;
     padding-right:2rem;
     padding-left:2rem;

   }

   .rooms-image-div img{
      object-fit:cover;
      max-width:100%;
      height:100%;
      width:100%;
      padding-bottom:2rem;
   }

   .product-photos-section{
     
   }


   .product-adresses{
      text-align:center
   }

   .product-adresses header h1{

    font-weight:bold;
    font-family font-family:"Arial Black", Gadget, sans-serif;
    padding-bottom: 2rem;
   }

  
   .product-adresses-div span {
        font-size:2em;
        line-height:2.5;       

   }

   .product-icon{
     width : 150px;
     max-width:100%;
     height: 50px;
     object-fit:contain
   }


.adresses-col h5{
  padding-top: 1.5rem;
  font-weight:bold;
  font-family: Gadget;
}

.adresses-col a {
  text-decoration: none;
  color:#000
}

.adresses-social-media{
  padding-top:2rem;
  justify-content:center
  
}


    `}
    </style>
  </Container>
  

)

}

export async function getStaticProps({params}){

 
    const allpaths =  countries
 
    
   let  restos =[] 
   let leshotels = [];
    


     allpaths.map(pays => pays.restaurants).forEach(tabresto => tabresto.map(resto => restos.push(resto)))

     allpaths.map(pays => pays.hotels).forEach(tabhotel => tabhotel.map(hotel => leshotels.push(hotel)))
 
     const datas = restos.concat(leshotels)

     const lesdatas = datas.find(data => data.name === params.id)



   return {props: {lesdatas}}

}

export async function getStaticPaths(){
    
     const allpaths =  countries
  
     let paths = [] 
    let  restos =[] 
    let leshotels = [];
     


      allpaths.map(pays => pays.restaurants).forEach(tabresto => tabresto.map(resto => restos.push(resto)))

      allpaths.map(pays => pays.hotels).forEach(tabhotel => tabhotel.map(hotel => leshotels.push(hotel)))

      const datas = restos.concat(leshotels)

     paths = datas.map(data => ({
        params:{id: data.name}
    }))

     

     return{paths,fallback:false}
}

export default Card