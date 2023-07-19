import { Link } from "react-router-dom"

function Error(){
    return (
        <div className="errorPage">
            <h1 className="errorPage__title">404</h1>
            <h2 className="errorPage__sentence">Oups ! La page que vous demandez n'existe pas.</h2>
            <Link className="errorPage__link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error