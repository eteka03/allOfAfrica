
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap'

export default function index() {


    return (
        <>
     <div className="index-page">
       <div className="index-header">
          <div className="presentation">
             <h3 className="allOf"></h3>
             <h1 className="africa" >Africa</h1>
            
            <a  className="explore-link">Explorez</a>
          </div>
       </div>

      <div className="main-business">

        <div className="services">

         
          <div className="row">

              <div>
                  <img className="services-image" width="100%" height="60%" src={require('../public/images/icons/hotel.svg')} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Hotelerie</h5>
              </div>

              <div>
                  <img className="services-image" width="100%" height="75%" src={require('../public/images/icons/hotel.svg')} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Hotelerie</h5>
              </div>

        
          </div>
          
          <div className="row">
                <div>
                  <img className="services-image" width="100%" height="50%" src={require('../public/images/icons/hotel.svg')} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Hotelerie</h5>
              </div>

              <div>
                  <img className="services-image" width="100%" height="75%" src={require('../public/images/icons/hotel.svg')} 
                    alt="undefined"
                    title="hotelerie"
                  />

                  <h5 className="services-description">Hotelerie</h5>
              </div>
          </div>
          
        </div>


        <div className="culture-div">
          <div className="div-title">
              <h1>Découvrez nos paysages</h1>
          </div>

          <div className="culture-text-image-div">
            <div className="culture-image-div">
              <img width="100%" height="100%" src={require('../public/images/paysage_vert.jpg')} alt="undefined" title="paysage" />
            </div>

            <div className="culture-text-div">
              <h3 className="card-header">En Afrique,</h3>

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
                  <img src={require('../public/images/cuisine_photo.jpg')} alt="undefined" width="100%" height="100%"/>
                </div>

                <div className="cuisine-image-div">
                  <img src={require('../public/images/cooking-dishes.jpg')} alt="undefined" width="100%" height="100%"/>
                </div>
              </div>

              <div className="cuisine-div-text">
              <h3 className="card-header">En Afrique,</h3>

              <h4 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna</h4>

              <a >Visitez</a>
            </div>
        </div>


        <div className="culture">
              <h1 style={{textAlign:'center'}}>culture</h1>
           
           <div style={{width:'100%',height:'80%',filter:'drop-shadow(6px 6px 8px black)'}}>
             <img alt="undefined" src={require('../public/images/three-women-wearing-black-clothes.jpg')} width="100%" height="100%" style={{objectFit:'contain'}}/>
           </div>
              <div style={{textAlign:'center',marginTop:'1rem'}}>
             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna</span>
              
              <a >Parcourir</a>
              </div>

        </div>


          <div>
     
          </div>

      </div>

     </div>

     <style jsx>{`


      .presentation{
        display:block;
        text-align:center;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:white;
        z-index:1500;
       
       
      }

      .presentation h3{
        padding:0;
        margin:0;
       color:rgba(45,45,45,1);
        text-shadow: 0 2px 0 rgba(0,0,0,0.5);
        
       font-size:3rem
      }

      .allOf:after{
        content:'All of';
       color:rgba(45,45,45,1);
       font-size: 4rem;
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
  
        background-image:url('../images/afric.jpg') ; 
        
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
       
        
        margin-top: 8vh;
       display:block;

    }

   

    .cuisine-div-text{
      width: 50%;
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
      display:block;
      width:100%;
      background-color:rgb(0,0,0,0.02);
      margin-top:10vh;
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

    @media only screen and (max-width: 600px) {
      .cuisine-div-text{
        width:100%;
        display:block;
        margin-top:5%;
      }
  
     `}

     </style>
       </>
    )
}
