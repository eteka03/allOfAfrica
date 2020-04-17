import React,{useState} from 'react'

import Link from 'next/link'


import {countries as Pays } from '../datas/countriesData'
import Image from '../components/Image'
import Card from '../components/Cards'
import
{
Container,
Row,
Col,
Form,
FormGroup,
Label,
Input,


}from 'reactstrap'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {NextSeo} from 'next-seo'


const categories =  [
    {
        id:0,
        name:'Tous',
        titrediv:'Hotelerie restauration'
    },
    {
        id:1,
        name:'Hotelerie',
        titrediv:'Top Hotelerie'
    },
    {
        id:2,
        name:'restaurations',
        titrediv:'Top restaurations'
    }
]


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

const Discover = ({countries}) => {

        const [catVal,setCatVal] = useState('Tous')
        
    const handleChange = e => {

        setCatVal(e.target.value)
            
    }

   

    return(
        <Container className="discover-container" style={{padding: 0,maxWidth:'100%' , margin: 0}}>
          

          <NextSeo 
          title="discover page"
          description="page qui presente les hotels et restaurants"
        />


            <header className="discover-header" style={{backgroundImage:'url(/images/pagne.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
            </header>

            <section className="filtre-section">

               <div className="filter-div">
                <h3>Filtre :</h3>
        <FormGroup className="form-discover">
            <Label for="exampleSelect">Pays</Label>
            <Input type="select" name="select" id="exampleSelect">
            <option>Tout</option>
            <option>Senegal</option>
            <option>Burkina Faso</option>
          
            </Input>
      </FormGroup>
 
      <FormGroup className="form-discover">
        <Label for="exampleSelect">Catégorie</Label>
        <Input onChange={(e)=>handleChange(e)} type="select" name="select" id="exampleSelect">
    {categories.map(cat => <option key={cat.id}>{cat.name}</option>)}
        </Input>
      </FormGroup>
 
                  
               </div>
            </section>

            <section className="categories-section">

                {
                    catVal === 'Tous' ? categories.find(cat => cat.name === 'Tous' )
                    .titrediv.split(" ")
                .map(val => <div className="categories-div" key={val}><header><h1>{val}</h1></header>
                    {
                       val === "Hotelerie"?<Carousel containerClass="caroussel-container"  itemClass="caroussel-items" sliderClass="caroussel-slide"  responsive={responsive}>{countries.map(c=>c.hotels.map(h=><div className="card-div" key={h.name}><Link href={`/card/[id]`} as={`/card/${h.name}`} passHref><Card name={h.name} image={h.image} body={h.name} /></Link></div>))}</Carousel>:
                  <Carousel containerClass="caroussel-container"  itemClass="caroussel-items" sliderClass="caroussel-slide"  responsive={responsive}> { countries.map(c=>c.restaurants.map(h=><div className="card-div" key={h.name}><Link href={`/card/[id]`} as={`/card/${h.name}`} passHref><Card name={h.name} image={h.image} body={h.name} /></Link></div>))}</Carousel>  
                       }
                       </div>)
                    
                                :
                                
                categories.filter(cat =>  cat.name === catVal).map(cat => <div key={cat.id}><h1>{cat.name}</h1></div>)
                }

            </section>


    <style jsx global>{`

    
    .discover-container{
        overflow-x:hidden;
    }
    
    .discover{
        padding:0;
        max-width:100%;
        width:100%;
    }

    .discover-header{
        height:25vh;
    }

    .filtre-section label{
        font-weight:bold
    }

    .filter-div{
       padding:2rem;
    }

    .filter-div::after {
        content: "";
        clear: both;
        display: table;
      }

    .categories-section{
        width:100vw;
        padding: 1rem;

    }

    .categories-div{
        margin-bottom:2.5rem;
    }

    .categories-div header{
        padding-bottom:1.5rem;
        
    }

    .categories-div header h1{
        font-weight:bold;
    }

    

    .card-div{
   height:100%
    }

    .react-multi-carousel-list {
        width:100vw;
    }

    @media (min-width: 600px){
        .h1,h1{
            font-size: 2rem;
        }
        .categories-section{
            padding-left:3rem;
        }

        .form-discover{
            width:45% ;
            float:left;
            margin-left: 1em;
        }
    
        .caroussel-container{
            height: 600px;
            width:85vw;
        }

        .caroussel-items{
            height:100%;
            width:250px
        }

        .caroussel-slide{
            height:95%
        }
    
    }

    
    
    `}</style>

        </Container>
    )
}

export async function getStaticProps(){
 
    
 
    const countries = Pays

    

   

    return {props : {countries}}

}

export default Discover