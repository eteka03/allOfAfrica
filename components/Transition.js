import React,{useEffect,useState,useRef} from 'react'
import { useTransition, animated, config } from 'react-spring'
import useWindowDimensions from '../hooks/useWindowDimensions'
import useInterval from '../hooks/useInterval'

const images_for_screens = ()=>
{
  const {width} = useWindowDimensions() ;

  const small_images = [
    {id:0 , url:'/images/savane.jpg'},
    {id:1 ,  url:'/images/marche.jpg'},
    {id:2 , url:'/images/zebre.jpg'},
    {id:3 , url:'/images/plage.jpg'},
  ]

  const big_images = [
    {id:0,url:'hhhh'}
  ]
  
  const images = width > 900 ? big_images : small_images

  return images
  
}


export default function Transition() {


    const [index,setIndex] = useState(0)
    
    const images  = images_for_screens()
        const [image,setImage] = useState(images[0])



  useInterval(() => {
    // Your custom logic here

    const increment_index =  async()=>{
            setIndex(index+1);
            return index
    }
 

    increment_index().then(()=>{
        index <= images.length - 1 ? setImage(images[index]) : setIndex(0) ;
    }).then(console.log(index))
  }, 10000);

useEffect(()=>{
    return ()=>{console.log('unmount')}
},[index])
    
       return (<div 
        className="bg"
        style={{  backgroundImage: `linear-gradient(rgba(92, 79, 79, 0.452), rgba(92, 79, 79, 0.452)),url(${image.url})` }}>
      
      </div>
      )
}
