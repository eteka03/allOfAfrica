import React from 'react'
import { 
    Card,

    CardImg, 
    CardText,
     CardBody,
    CardTitle, 
    CardSubtitle,
     Button
} from 'reactstrap'



export default React.forwardRef( ({onClick,href,image, body , name},ref)=>{

 

    console.log(image)

    return(
        
        <a href={href} onClick={onClick} ref={ref}>
        <Card  className="card-container">
            <CardImg  className="image-card" height="75%"  top  src={`../images/${image}`}
            />

    

    <CardBody>
         <CardTitle>{name}</CardTitle>
         <CardText>
             {body}
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est.
         </CardText>
    </CardBody>
        </Card>
        

        <style jsx global>{`
        
        a{
            text-decoration:none;
        color:#000;
        
        }

        .card-container{
            width: 90%;
            height: 100%;
        }

       

        .image-card{
           
        }

        @media only screen and (max-width: 650px){
            .card-container{
                width: 95%;
                height:auto
            }
        }
        
        `}

        </style>
        </a>
    )


})