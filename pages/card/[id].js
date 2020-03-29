import React from 'react'
import fetch from 'node-fetch'

const Card = ({lesdatas}) => {

return <h1>{lesdatas.name}</h1>

}

export async function getStaticProps({params}){

    const rep = await fetch('http://localhost:3000/api/all/discover')
    const allpaths =  await rep.json();
 
    
   let  restos =[] 
   let leshotels = [];
    


     allpaths.map(pays => pays.restaurants).forEach(tabresto => tabresto.map(resto => restos.push(resto)))

     allpaths.map(pays => pays.hotels).forEach(tabhotel => tabhotel.map(hotel => leshotels.push(hotel)))
 
     const datas = restos.concat(leshotels)

     const lesdatas = datas.find(data => data.name === params.id)



   return {props: {lesdatas}}

}

export async function getStaticPaths(){
    const rep = await fetch('http://localhost:3000/api/all/discover')
     const allpaths =  await rep.json();
  
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