import React from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Button,
    
        } from 'reactstrap';

import Face from '../public/images/icons/facebook.svg'
import Instagram from '../public/images/icons/instagram.svg'

export default function Footer(props) {
    return (
       
            <Container   className='footer-container '>

            <Row xs={1} md={2} lg={3}>
                <Col className="about-div"> 
                 <h3>About us</h3>

                 <span className="about-text">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna
                 </span>
                </Col>

                <Col className="contact-div">
                 <h3>contact  us</h3>

                 <Form className="contact-form">
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                       
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                   
                        <Label for="exampleText">Message</Label>
                         <Input type="textarea" name="text" id="exampleText" />
                   
                    </FormGroup>
                    <Button style={{backgroundColor:'white',color:'black'}}>Envoyer</Button>
                  </Form>
                </Col>

                <Col className="social-media-links">
                 <h3>Follow Us</h3>

                 <div className="social-media-div">
                 <a href="https://www.facebook.com/allofafrica">
                   <Face />

                   </a>

                   <a href="https://www.instagram.com/all_of_africa_aoa">
                 
                    <Instagram />
                   </a>
             
                   </div>

                   <div className="tel-mail-div">
                   <address>
                       <p>Tel:</p>
                        <a href="tel:+1-347-272-7227">+1 (347) 272-7227 (USA)</a>
                        <a href="tel:+33788 735324">+33 788 735324 (France)</a>
                        <a href="tel:+221778012953">+221 7780 12953" (Dakar)</a>

                        <p style={{lineHeight:'1.5rem'}}>Email: </p>
                      <a href="mailto:alloafrica@outlook.fr">alloafrica@outlook.fr</a>
                    </address>  
                   </div>
                </Col>

               
            </Row>

            <div className="copyright-div">
            <i className='fas fa-copyright'><span>copyright 2020</span></i>
            </div>

    <style jsx global>{`
    
    
    .footer-container{
      max-width:100%;
      margin:0;
        background-color:${props.styl.back};
        color:${props.styl.couleur}
    }


    .about-div{
        margin-top:1rem;
        margin-bottom:2rem;
    }


    .contact-div{
        margin-bottom:2rem;
    }
    

    .social-media-div{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        width:100%;
        margin-bottom:1.5rem;
    }

    .social-media-div a{
       width:4rem;
       text-decoration:none;
      margin-left:0.7rem;
    }



    .tel-mail-div a{

        display:block;
        color:#fff;
        line-height:1.5rem;
      
    }

    .copyright-div{
        display:block;
        width:100%;
        text-align:center;
        border-top-style:solid;
        border-width:1px;
    }
    
    `}</style>
            </Container>
        
    )
}
