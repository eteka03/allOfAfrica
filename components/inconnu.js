import React from 'react'
import Grid from '@material-ui/core/Grid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAsterisk} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/styles.css'

export default function Inconnu() {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <h2 className="sub-headline">
                    <span className="first-letter">W</span>elcome
                </h2>
                <h1 className="headline">To Africa</h1>

                <div className="headline-description">
                    <div className="separator">
                        <div className="line line-left">

                        </div>
                        <div className="asterisk">
                            <FontAwesomeIcon icon={faAsterisk}/>
                        </div>
                    </div>
                    <div className="single-animation">
                        <h5>ready to be opened</h5>
                        <a href="#" className="btn cta-btn"></a>
                    </div>
                </div>
            </div>

        </section>
    )
}
