// import React, { useEffect, useRef } from "react";
import '../styles/Video.css'

export default function VideoBanner({src, alt}) {
    // const videoEl = useRef(null);

    // const attemptPlay = () => {
    // videoEl &&
    //     videoEl.current &&
    //     videoEl.current.play().catch(error => {
    //     console.error("Error attempting to play", error);
    //     });
    // };

    // useEffect(() => {
    //     attemptPlay();
    // }, []);

    return (
        <div className='home-video-div'>
            <div className="overlay"></div>
            {/* ref={videoEl} ajouter a <video> */}
            <video src={src} alt={alt} playsInline autoPlay loop muted />)
        </div>
    )
};