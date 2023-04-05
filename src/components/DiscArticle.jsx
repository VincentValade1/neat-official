import '../styles/DiscArticle.css';

function DiscArticle({ name, cover, yearRelease, description, type, tracks, totalLength}) {
    return (
        <article key={name} className={`disc-article ${ name === "Neat" ? "neat-disc" : "jtf-disc"}`}>
            <div className="disc-cover">
                <img src={cover} alt="front cover of the disc" />
            </div>
            <div className="disc-infos">
                <h2>{name}</h2>
                <span>{type} sorti en {yearRelease}</span>
                <p>{description}</p>
                <span>Nombre de morceaux: {tracks}</span><br/>
                <span>Durée: {totalLength}</span>
            </div>
        </article>
    )
}

export default DiscArticle;