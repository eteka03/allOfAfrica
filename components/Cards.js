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
        <Card >
            <CardImg top width="100%" src={`../images/${image}`}
            />

    

    <CardBody>
         <CardTitle>{name}</CardTitle>
         <CardText>
             {body}
         </CardText>
    </CardBody>
        </Card>

        </a>
    )


})