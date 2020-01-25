import React from 'react'

import Grid from '@material-ui/core/Grid'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAsterisk,faChevronUp} from '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/fontawesome-svg-core/styles.css'

export default function Footer() {
    return (
        <footer>
          <Grid container justify='center'>
            <div className="back-to-top">
                <a href="#">
              <i className="fas fa-chevron-up"></i>
                </a>
            </div>

            <div className="footer-content">
                <div className="footer-content-about">
                    <h4>About AllOfAfrica</h4>
                    <div className="asterisk"><i className="fas fa-asterisk"></i></div>

                    <p>
                    Nos hotels font partis des meilleurs de la région.Vos désirs sont leur priorité et 
        votre confort leur responsabilité. Ils répondent aux critères de plus grands hotels avec leur splendide décor.
        Vous en témoignerez vous-memes.
                    </p>
                </div>
                <div className="footer-content-divider animate-bottom">
                    <div className="social-media">
                        <h4>Follow along</h4>
                        <ul className="social-icons">
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>

                            <li>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                            </li>

                            <li>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
          </Grid>
        </footer>
    )
}
