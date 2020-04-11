
import React from 'react'

import Caroussel from '../components/Caroussel'

import {LazyLoadImage} from 'react-lazy-load-image-component'

import {
  Row,
  Col,
  Carousel,
} from 'reactstrap'


export default function index() {


    return (
        <>
     <div className="index-page">
       <div className="index-header" >
          <div className="presentation">
             <h3 className="allOf"></h3>
             <h1 className="africa" >Africa</h1>
            
            <a  className="explore-link">Explorez</a>
          </div>
       </div>

      <div className="main-business">

        <div className="services">

         
          <div className="row-services">

              <div>
                  <img className="services-image" width="100%" height="60%" src={'/images/icons/hotel.svg'} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Hotelerie</h5>
              </div>

              <div>
                  <img className="services-image" width="100%" height="75%" src={'/images/icons/resto.svg'} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Restauration</h5>
              </div>

        
          </div>
          
          <div className="row-services">
                <div>
                  <img className="services-image" width="100%" height="50%" src={'/images/icons/tourism.svg'} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Tourisme</h5>
              </div>

              <div>
                  <img className="services-image" width="100%" height="75%" src={'/images/icons/culture.svg'} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">culture</h5>
              </div>
          </div>
          
        </div>


        <div className="culture-div">
          <div className="div-title">
              <h1>Découvrez nos paysages</h1>
          </div>

          <div className="culture-text-image-div">
            <div className="culture-image-div">
              <img width="100%" height="100%" src={'/images/paysage_vert.jpg'} alt="undefined" title="paysage" />
            </div>

            <div className="culture-text-div">
              <h3 className="">En Afrique,</h3>

              <h4 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna</h4>

              <a>Visitez</a>
            </div>
          </div>
        </div>

        <div className="cuisine-div">
            <div className="div-title">
                  <h1>Découvrez notre cuisine</h1>
              </div>

              <div className="cuisine-images-carousel">
                <div className="cuisine-image-div">
                  <LazyLoadImage src={'/images/cuisine_photo.jpg'} alt="undefined" width="100%" height="100%"/>
                </div>

                <div className="cuisine-image-div">
                  <LazyLoadImage  src={'/images/cooking-dishes.jpg'} alt="undefined" width="100%" height="100%"/>
                </div>
              </div>

              <div className="cuisine-div-text">
              <h3 className="">En Afrique,</h3>

              <h4 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna</h4>

              <a >Visitez</a>
            </div>
        </div>


        <div className="culture">
              <h1 style={{textAlign:'center'}}>culture</h1>
           
           <div style={{width:'100%',height:'80%',filter:'drop-shadow(6px 6px 8px black)',WebkitFilter:'drop-shadow(6px 6px 8px black)'}}>
             <LazyLoadImage alt="undefined" src={'/images/three-women-wearing-black-clothe.jpg'} width="100%" height="100%" style={{objectFit:'contain'}} />
           </div>
              <div style={{textAlign:'center',marginTop:'1rem'}}>
             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna</span>
              
              <a >Parcourir</a>
              </div>

        </div>


                <section className="bigscreen-section" >

                    <header><h1>Découvrez et vivez des experiences inoubliables</h1></header>

                    <div className="bigscreen-wrapper-div" >
                        <div className="bigscreen-left-div" >
                          hi
                        </div>

                        <div  className="bigscreen-right-div">
                            <div className="right-div-up">
                                
                            </div>

                            <div className="right-div-down">

                            </div>
                        </div>
                    </div>

                 </section>

                 <section className="bigscreen-cuisine-section">
                      <header><h1>Laissez vous emportez par la cuisine africaine</h1></header>
                    <div className="cuisine-wrapper">

                      <div className="plat-card"><h1>image</h1></div>

                      <div className="plat-card"><h1>image</h1></div>

                     <div className="plat-card"><h1>image</h1></div>

                    

                    </div>
                 </section>


                 <section className="bigscreen-culture-section">

                      <header><h1>Apprenez encore plus sur notre culture</h1></header>

                      <div className="caroussel-div">
                          <Caroussel />
                      </div>

                     
                 </section>

             
                 <section className="bigscreen-services-section">
                      <header><h1>Nos services</h1></header>
                    <div className="bigscreen-services-cards-wrapper">

                   
                      <div className="bigscreen-services-card">
                          <img src="/images/icons/hotel.svg" alt="undefined" />
                         <h3>Hotelerie</h3>
                      </div>

                       <div className="bigscreen-services-card">
                          <img src="/images/icons/resto.svg" alt="undefined" />

                          <h3>Restauration</h3>
                      </div>


                       <div className="bigscreen-services-card">
                          <img src="/images/icons/tourism.svg" alt="undefined" />
                          <h3>Tourisme</h3>
                      </div>

                      </div>
                 </section>
               

      </div>

          
     </div>

     <style jsx>{`




      .presentation{
        display:block;
        text-align:center;
        position:absolute;
        top:50%;
        
        transform:translate(-50%,50%)
        color:white;
        z-index:1500;
       
       
      }

      .presentation h3{
        padding:0;
        margin:0;
       color:rgba(45,45,45,1);
        text-shadow: 0 2px 0 rgba(0,0,0,0.5);
        
       font-size:5rem;
       font-family:'sans-serif';
       font-weight:900;
      }

      .allOf:after{
        content:'All of';
       color:rgba(45,45,45,1);
       font-size: 5rem;
       font-weight:900;
      }

      


      .explore-link{
       display:inline-block;
       border-style:solid;
       border-color:#fff;
        padding: 2% 10% 2% 10% ;
        margin-top: 3vh ; 
        background-color: #020202 ;
        color : #fefcfc ;
        border-radius: 5%;
       font-weight: 700;
       letter-spacing: 0.1em;
     
      }

      .index-header{
         
        display:block;
        width:100%;
        height:100vh;
  
        
      
        background-size:cover;
        background-position:center;
        position:relative
  
      }
  
      .index-header::after{
       content:"";
       top:0;
       left:0;
       right:0;
       bottom:0;
       position:absolute;
      
       background-color:black;
       opacity:0.3
      }

      .main-business{
        height:100%;
        display:block;
        padding:2%;

      }

     
      

      .cuisine-div{
       
        
        margin-top: 20vh;
     

    }

   

    .cuisine-div-text{
      width: 100%;
      height: 100%;
      padding:1rem;
     float: left;
     
          display: block;
          border: 3px solid #333333;
        
          border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
         font-size: 1rem;
         line-height: 1.5rem;
        white-space: pre-line;
       
          background: #ffffff;
          position: relative;
          text-align: center;
    }
    .cuisine-div-text::before{
      content: '';
                border: 2px solid #353535;
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
                border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
      
    }
      
    

      
    
    }

    .cuisine-div-text > a {
      width: 50%;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border-style: solid;
    border-color: #000;
    padding: 0.5vh;
    color: #ffffff;
    background-color: #333333;
    text-transform: uppercase;
    }


    .culture{
     
      width:100%;
      background-color:rgb(0,0,0,0.02);
      margin-top:6rem;
      margin-bottom:2rem;
      padding:1rem;
     
    
    } 
  

    .culture a{
      display:block;

      width: 50%;

      display: block;
      margin-top:1.5rem;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      border-style: solid;
      border-color: #000;
      padding: 0.5vh;
      color: #ffffff;
      background-color: #333333;
      text-transform: uppercase;
      transform: translate(50%);
    }
   

    .culture span{
        font-weight:bold;
    }

   
     
  
    .bigscreen-section{
      width:100%;
      height:60vh;
      font-size: 16px ;
      margin-bottom:2.7rem;
    }

    .bigscreen-section  header{
      text-align:center;
     padding-bottom: 1rem;
     
    }

    .bigscreen-section  h1{
      font-size: 2em;
    }

  

    .bigscreen-wrapper-div{
      display:flex;
      flex-direction:row;
      justify-content:space-evenly;
      width:100%;
      height:90%;
      

    }


    

    .bigscreen-left-div{
      width:47%;
      background-image:url(/images/ville.jpg);
      background-size:cover;
      background-repeat:no-repeat;
    }

    .bigscreen-right-div{
      width:47%;
      display:flex;
      flex-direction:column;
     justify-content:space-evenly;   
    }


    .right-div-up{
      width:100%;
      height: 47%;
      background-image:url(/images/ville.jpg);
      background-size:cover;
      background-repeat:no-repeat;
    }

    .right-div-down{
      width:100%;
      height:47%;
      background-image:url(/images/ville.jpg);
      background-size:cover;
      background-repeat:no-repeat;
    }

   .bigscreen-cuisine-section{
     width:100%;
     height:60vh;
     padding: 1rem;
     font-size:16px;
     margin-bottom:2.7rem;
     
   }

   .bigscreen-cuisine-section header{
     text-align:center;
     padding-bottom:1.7rem
   }


   .bigscreen-cuisine-section header h1{
     font-size: 2em;
   }


   .cuisine-wrapper{
     display:flex;
     height:85%;
     flex-direction: row;
     justify-content:center;
     
   }

   .plat-card{

      height: 100% ;
      width:32%;
      background-color: #17141d;
      border-radius: 10px;
      box-shadow:-1rem 0 3rem #000;
      transition: 0.4s ease-out;
      position: relative;
      left: 0px;

   }

   .plat-card:not(:first-child) {
    margin-left: -50px;
}

.plat-card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.plat-card:hover ~ .plat-card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}


.bigscreen-culture-section{
margin-bottom:3rem;
}


.bigscreen-culture-section header{

  text-align:center;
  padding-bottom:1.7rem
  
}

.bigscreen-culture-section header h1{

font-size:2em
}


.bigscreen-culture-section:not(header){
  width:75%;
  margin-left:13%
}


.bigscreen-services-section header{
  
text-align:center;
font-size:1.5em;
padding-bottom:1.7rem;

}




.bigscreen-services-section{
  height:500px;
  font-size:16px;
}

.bigscreen-services-cards-wrapper{
  display:flex;
  flex-direction:row;
  justify-content:space-evenly
}

.bigscreen-services-card{
  height:300px;
  width:32%;
  background-color:#fff;
  border-style:solid
  
}

.bigscreen-services-card img{
  height:50%;
  object-fit:contain;
  width:100%
}
    
.bigscreen-services-card h3{
  text-align:center;
  padding-top:11%;
}


 

     `}

     </style>
       </>
    )
}
