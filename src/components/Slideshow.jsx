import '../styles/Slideshow.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import picturesData from '../datas/pictures.json';

function  Slideshow() {
    const [pictures, setPictures] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        setPictures(picturesData);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // si la fenetre popup n'est pas ouverte, on fait défiler les images
            if (!isPopupOpen) {
                setCurrentIndex(prevIndex => (prevIndex + 1) % pictures.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [pictures, isPopupOpen]);

    if (pictures.length === 0) {
        return <div>Loading...</div>;
    }

    let slideLength = pictures.length;

    const firstIndicePicture = 0;
        
    // variable représentant la position de la dernière image du slide
    const lastIndicePicture = slideLength -1;
    
    function nextSlide() {
        setCurrentIndex(currentIndex !== lastIndicePicture ? currentIndex +1 : firstIndicePicture);
    }

    // fonction pour le clic sur précédant qui set le currentIndex à -1 mais à lastIndicePicture lorsqu'on arrive sur la première image pour revenir à la dernière
    function previousSlide() {
        setCurrentIndex(currentIndex !== firstIndicePicture ? currentIndex -1 : lastIndicePicture);
    }

    // fonction de l'ouverture de la fenetre popup
    function openPopup(e) {
        e.preventDefault();
        setIsPopupOpen(true);
    };
    
    function closePopup() {
        setIsPopupOpen(false);
    };

    const { imageUrl, alt, link } = pictures[currentIndex];
    //  {`logo-div ${ className ? 'logo-anim' : ""}`}
    return (
        <section className={`slideshow ${ currentIndex ? 'active' : ""}`}>
            <img src={process.env.PUBLIC_URL + imageUrl} alt={alt} />
            <FaChevronLeft className="arrow left" onClick={previousSlide} />
            <FaChevronRight className="arrow right" onClick={nextSlide} />
            <a href={link} className='carousel-link' onClick={openPopup}>Voir plus</a>

            {isPopupOpen && (
                <div className="carousel-link-popup-div">
                    <FontAwesomeIcon icon={faXmark} className="cross-pop-up" onClick={closePopup} />
                    <h2>Popup Content</h2>
                    <a href={link} target="_blank" rel="noreferrer noopener">Découvrez ses réseaux ici</a>
                </div>
            )}
        </section>
    );
};

export default Slideshow;