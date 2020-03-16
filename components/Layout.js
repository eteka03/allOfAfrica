import React from 'react'
import Head from 'next/head'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({children}) {
    return (
        <div className="layout grid-container">
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
            
            </Head>

           <header className='app-head'>
                <Navbar />
           </header>
           
            <main className='app-page'>
                {children}
            </main>
           
            <footer className="app-footer">
                <Footer styl={{couleur:'#fff', back:'#000'}}/>
            </footer>

         


            <style jsx global>{
                `
                html,body{
                    margin:0;
                    padding:0;
                    
                    overflow-x: hidden;
                    font-family:'Open Sans', sans-serif;
                }

                .h1,h1{
                    margin-bottom:1rem;
                }
                .layout{
                    display:grid ;
                    
                    grid-template-rows: 1fr auto;                               
                }

                .app-head{
                    position:absolute;
                    top:0;
                    z-index: 10;
                    width:100vw;
                    
                    overflow:hidden

                }

                .app-page{
                    position:relative;
                    top:0;
         
                   
                }

                .app-footer{
                  
                   
                    grid-row: 2 / 3; 
                }


                @media (min-width:769px){
                    html,body{
                        font-size: calc(14px + 10 * ((100vw - 769px) / 2048))
                    }
                }

                @media (max-width:768px){
                    html,body{
                        font-size: calc(12px + 2 * ((100vw - 360px) / 768))
                    }
                }
                
                `
            }

            </style>
        </div>
    )
}
