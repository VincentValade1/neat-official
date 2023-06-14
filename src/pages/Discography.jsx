import Header from "../components/Header"
import DiscArticle from "../components/DiscArticle"
import discography from "../datas/discography.json"
import '../styles/Discography.css'
import MainDisplay from "../components/MainDisplay"

function Discography() {
    
    return (
        <>
            <Header />
            <MainDisplay title={"DISCROGRAPHY"} className="discographySection">
                {discography.map(({ name, cover, yearRelease, description, type, tracks, totalLength}) =>
                    (
                        <DiscArticle  key={name} name={name} cover={cover} yearRelease={yearRelease} description={description} type={type} tracks={tracks} totalLength={totalLength} /> 
                    )
                )}
            </MainDisplay>
        </> 
    )
}

export default Discography