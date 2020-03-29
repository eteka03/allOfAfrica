import React,{useState} from 'react'

import Link from 'next/link'
import {useRouter} from 'next/router'
import fetch from 'node-fetch'

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
        const router = useRouter()
    const handleChange = e => {

        setCatVal(e.target.value)
            
    }

    const handleRoute = h => {
   
        router.push(`/card/[id]?Id=${h.id}&dataId=${h.name}`,`/card/[id]?Id=${h.id}&dataId=${h.name}`)
       
    }

    return(
        <Container style={{padding: 0,maxWidth:'100%' , margin: 0}}>
          
            <header className="discover-header">
                <Image image={{width:'100%',height:'100%',alt:'pagne img',src:'/images/pagne.jpg'}} />
            </header>

            <section className="filtre-section">

               <div className="filter-div">
                <h3>Filtre :</h3>
        <FormGroup className="form-discover">
            <Label for="exampleSelect">Pays</Label>
            <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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
                    .map(val => <div key={val}><h1>{val}</h1>
                    {
                       val === "Hotelerie"?<Carousel responsive={responsive}>{countries.map(c=>c.hotels.map(h=><div key={h.name}><Link href={`/card/[id]`} as={`/card/${h.name}`} passHref><Card name={h.name} image={h.image} body={h.name} /></Link></div>))}</Carousel>:
                  <Carousel responsive={responsive}> {  countries.map(c=>c.restaurants.map(h=><div key={h.name}><Link href={`/card/[id]`} as={`/card/${h.name}`}><h1>{h.name}</h1></Link></div>))}</Carousel>  
                       }
                       </div>)
                    
                                :
                                
                categories.filter(cat =>  cat.name === catVal).map(cat => <div key={cat.id}><h1>{cat.name}</h1></div>)
                }

            </section>


    <style jsx>{`
    
    .discover{
        padding:0;
        max-width:100%;
        width:100%;
    }

    .discover-header{
        height:25vh;
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

    .react-multi-carousel-list {
        width:100vw;
    }

    @media only screen and (min-width:600px){
        .form-discover{
            width:45% ;
            float:left;
            margin-left: 1em;
        }
    }
    
    `}</style>

        </Container>
    )
}

export async function getStaticProps(){
    const res =  await fetch('http://localhost:3000/api/all/discover')
    
 
    const countries = await res.json()

    

   

    return {props : {countries}}

}

export default Discover