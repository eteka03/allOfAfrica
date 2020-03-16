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
    Button
        } from 'reactstrap'

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

                <Col >
                 <h1>follow us</h1>
                </Col>

               
            </Row>


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
    
    `}</style>
            </Container>
        
    )
}
