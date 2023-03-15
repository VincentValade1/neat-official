
import '../styles/Video.css'
import React, { useEffect, useRef } from "react";


export default function VideoBanner({src, alt}) {
    const videoEl = useRef(null);

    const attemptPlay = () => {
    videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (<video src={src} alt={alt} ref={videoEl} playsInline autoPlay loop muted />)
};