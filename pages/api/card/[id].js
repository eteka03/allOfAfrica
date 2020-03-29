import {countries} from '../../../datas/countriesData'

export default (req,res) => {
   
   
 const datafilter = [] 
   let rep = [];
   let final_reponse
   
   countries.forEach(donnee => datafilter.push(donnee.hotels))

     datafilter.forEach(el => el.map(child => rep.push(child)))

    final_reponse = rep.filter(el => el.id === req.query.id)

    
    final_reponse.length ?  res.status(200).json({id:req.query.id,name:final_reponse[0].name,datas:final_reponse}) : res.status(404).json({name: `this details of id: ${req.query.id} does not exist`})
    
   
   
        
}