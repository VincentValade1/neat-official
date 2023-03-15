import React from 'react'
import VideoBanner from '../components/VideoBanner'
import homeVideo from '../assets/eye_site_background_NB.mp4'
// import { Player } from 'video-react'


function Home() {
    return (
        <main>
            <div className='home-video-div'>
                <VideoBanner src={homeVideo} alt={"eye clip teaser"} />
            </div>
        </main>
    )
}

export default Home