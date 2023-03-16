import Logo from '../assets/logoofficiel.png'
import '../styles/LogoLoader.css'

function LogoLoader() {
    return(
        <div className='logo-loader-div'>
            <img src={Logo} alt="logo du groupe Neat" />
        </div>
    )
}

export default LogoLoader