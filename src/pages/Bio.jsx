import '../styles/Logo.css'
import '../styles/Bio.css'
import Header from '../components/Header'
import MainDisplay from '../components/MainDisplay'
import bandPortrait from '../assets/BanderoleYT_FondNoir3_72.jpg'

function Bio() {
    return (
        <>
            <Header />
            <div className='img-and-bio-div'>
                <img className='img-bio' src={bandPortrait} alt="portrait des membres" />
                <MainDisplay title={"BIOGRAPHY"} className="bioSection">
                    <p>Projet lancé en 2014 mais qui n'a trouvé son
                        line up actuel et ses premiers concerts qu'en 2017,
                        NEAT est un groupe originaire de Toulouse
                        composé de 5 membres fortement imprégnés de
                        la scène Nü-Metal américain des années 90
                        (Korn,Deftones, System of a Down...), mais aussi
                        d'influences plus modernes, allant chercher dans
                        le Metal Progressif et Alternatif (Meshuggah,
                        Twelve Foot Ninja, Periphery) voir même du Muse
                        ou du Queen sur certains passages.
                    </p>
                    <p>
                        Par ce mélange d'influences, Neat cherche à
                        moderniser l'image du Nü-Metal en y ajoutant sa
                        patte personnelle.
                        Le groupe sort son premier EP autoproduit "Join
                        The Family" en Février 2019 et dans la foulée sur sa
                        chaîne Youtube, le clip vidéo du morceau "Crap
                        Out". Un autre clip sort en décembre 2020 pour le
                        morceau “Buried”.
                    </p>
                    <p>
                        Ils ne s'arrêtent pas dans leur élan car c'est en
                        Mars 2022, qu'ils sortent leur premier Album
                        éponyme. Le clip du morceau "Eye", issu de cet
                        album, est déjà disponible sur Youtube.
                        Avec une quinzaine de morceaux et une
                        quarantaine de concerts au compteur et après
                        ces premières expériences de groupe, l'envie
                        aujourd'hui pour NEAT est de passer à la vitesse
                        supérieure.
                    </p>
                    <p>
                        Le projet pour Neat est de s'attaquer à de plus
                        grosses scènes (premières parties/festivals) et de
                        s'exporter, afin de défendre son premier album
                        tout en continuant à travailler sur le prochain
                        dans les années à suivre.
                    </p>
                </MainDisplay>
            </div>
            
        </> 
    )
}

export default Bio