import '../styles/DiscArticle.css';

function DiscArticle(props) {
    return (
        <article key={props.name} className={`disc-article ${ props.name === "Neat" ? "neat-disc" : "jtf-disc"}`}>
            <div className="disc-cover">
                {/* pour afficher les images, utiliser le process.env.PUBLIC_URL  */}
                <img src={process.env.PUBLIC_URL + props.cover} alt="front cover of the disc" />
            </div>
            <div className="disc-infos">
                <h2>{props.name}</h2>
                <span>{props.type} sorti en {props.yearRelease}</span>
                <p>{props.description}</p>
                <span>Nombre de morceaux: {props.tracks}</span><br/>
                <span>Durée: {props.totalLength}</span>
            </div>
        </article>
    )
}

export default DiscArticle;