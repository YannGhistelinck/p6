import { Link } from 'react-router-dom'
import Annonce from '../../pages/Lodgement'

/*
    To ad a card of logment
*/

function LocationCard({locData}){
    return (
        <Link className="linkLocation" to="/logement" state={locData} element={<Annonce />}>
            <div className='locCard'>
                <img className='locCard__img' src={locData.cover} alt="Illustration de couverture de la location"/>
                <p className='locCard__title'>{locData.title}</p>
            </div>
        </Link>
        
    )
}

export default LocationCard