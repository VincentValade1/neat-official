import React from 'react'
import '../styles/Home.css'
import VideoBanner from '../components/VideoBanner'
import homeVideo from '../assets/eye_site_background_NB.mp4'
import eyeMini from '../assets/eye_clip_mini.webp'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Home() {
    return (
        <div className="home-page-div">
            <Header className="logo-anim" />
            <VideoBanner src={homeVideo} alt={"eye clip teaser"} />
            <main>
                <section className="clip-link-section">
                    <h1>Découvrez le clip du morceau "Eye" issu du premier Album de Neat</h1> 
                    <div className="eye-mini-div">
                        <a href='https://www.youtube.com/watch?v=OWrKXXgIfxE' target="_blank" rel="noreferrer noopener">
                        <img src={eyeMini} alt="miniature de clip Eye de Neat" />          
                        <FontAwesomeIcon icon={faYoutube} shake className="eyeLinkIcon" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
        
    )
}

export default Home