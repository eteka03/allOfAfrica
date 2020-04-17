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
            

            <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png"/>
<link rel="manifest" href="/images/icons/site.webmanifest"/>
<link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5"/>
<link rel="shortcut icon" href="/images/icons/favicon.ico"/>
<meta name="msapplication-TileColor" content="#da532c"></meta>
<meta name="msapplication-config" content="/images/icons/browserconfig.xml"></meta>
<meta name="theme-color" content="#ffffff"></meta>
            </Head>

           <header className='app-head'>
                <Navbar />
           </header>
           
            <main className='app-page'>
                {children}
            </main>

            <div style={{clear:'both'}}></div>
           
            <footer className="app-footer">
                <Footer styl={{couleur:'#fff', back:'#000'}}/>
            </footer>

         


            <style jsx global>{
                `
                html,body{
                    margin:0;
                    padding:0;
                    
                   
                    font-family:'Open Sans', sans-serif;
                }

                
                .layout{
                    min-height: 100%;
                    display: flex;
                    flex-direction: column;                             
                }

                .app-head,
                .app-footer{
                    flex-shrink: 0;
                }

                .app-head{
                    position:absolute;
                    top:0;
                    z-index: 1900;
                    width:100%;
                    
                    overflow:hidden

                }

                .app-page{
                    flex-grow: 1;
                    position:relative;
                    top:0;
         
                   
                }



                @media (min-width:769px){
                    html,body{
                        font-size: calc(13px + 10 * ((100vw - 769px) / 2048))
                    }
                }

                @media (max-width:768px){
                    html,body{
                        font-size: calc(14px + 2 * ((100vw - 360px) / 768))
                    }
                }
                
                `
            }

            </style>
        </div>
    )
}
