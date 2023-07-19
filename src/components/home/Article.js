import LocationCard from './LocationCard'
import locations from '../../assets/data/logements.json'

/*
    Article is the container to recieve cards of logments announcements 
*/

function Article(){
    return (
        <div>
            <article className='articleLocation'>
                <div className='articleLocation__container'>
                    {locations.map((loc) => (
                        <div key={loc.id}>
                            <LocationCard locData={loc}/>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Article