import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'

const Cards = props =>{

    const {type,image,title,content} = props


    if(type ===  "hotel"){

        return(
            <Card style={{minWidth:275,margin:"2%"}}>
                <CardMedia
                image={image}
                title={title}

                style={
                   { height: 0,
                    paddingTop: '100%', // 16:9
                }
                  }
                />

                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{title}</Typography> 
             <Typography variant="body2" color="textSecondary" component="p" >{content}</Typography>  
                </CardContent>

                <CardActions>
                <FontAwesomeIcon icon={faHeart} />
                </CardActions>
             
            </Card>
        )

    }
}

export default Cards