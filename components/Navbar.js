import React,{useState} from 'react'

export default function Navbar() {

    const [isOpen,setIsOpen] = useState(false);
    const responsive = ''

    const handleClick = (e) => {
            e.preventDefault();
            setIsOpen(!isOpen)
        
        
    }
  
    return (
    <nav className={`navigation-top ${isOpen ? "responsive" : " "}`}>
        <a href="/">Home</a>

        <a href="/">Destinations</a>

        <a href="/">Restaurants</a>

        <a href="/">Hotels</a>
        

      <a  className={`icon ${isOpen ? "responsive" : ""}`} onClick={(e)=>handleClick(e)}>
          <i className="fa fa-bars"></i>
      </a>  

        <style jsx>{`
        
        .navigation-top{
            width:100%;
           
            background-color:transparent
        }
        
        .navigation-top a{
            display: block;
            float:left;    
            text-align:center;
            text-decoration: none;
            padding:10px
        }

        .navigation-top a:hover{
            background-color:black;
            color:white;
        }

        .navigation-top .icon{
            display:none;
        }

        @media screen and (max-width:600px){

            .navigation-top a:not(:first-child){
                display:none
            }

            .navigation-top a.icon{
                display:block;
                float:right
            }
        }

        @media screen and (max-width:600px){
            .navigation-top.responsive{position:relative}

            .navigation-top.responsive .icon{
                position:absolute;
                right:0;
                top:0;
            }

            .navigation-top.responsive a {
                float:none;
                display:block;
                text-align:center;
            }
        }
       
        `}</style>
        </nav>


    )
}
