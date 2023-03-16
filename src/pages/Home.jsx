import React from 'react'
import VideoBanner from '../components/VideoBanner'
import homeVideo from '../assets/eye_site_background_NB.mp4'
import LogoLoader from '../components/LogoLoader'


function Home() {
    return (
        <main>
        
            <div className='home-video-div'>
                <LogoLoader />

                <div className="overlay"></div>
                <VideoBanner src={homeVideo} alt={"eye clip teaser"} />
            </div>
        </main>
    )
}

export default Home