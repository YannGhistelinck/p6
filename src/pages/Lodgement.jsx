import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import locations from '../assets/data/logements.json'
import Slider from "../components/Slider"
import Rating from "../components/Rating"
import Tags from "../components/Tags"
import Dropdown from "../components/Dropdown"

function Lodgement(){
    const location = useLocation()
    const data = location.state
    const navigate = useNavigate()
    let testID=0
    
    //Search the id recieved in package.json
    locations.map((loc) => (
        data.id === loc.id ? testID=1 : null
    ))

    //If ID don't exist --> redirect to error page with wrong link "/error"
    useEffect(() => {
        if(testID === 0){
            navigate("/error")
        }
    })
        
    
    return(
        <div>
            <div className="carouselContainer">
                <Slider pictures={data.pictures}/>
            </div>
            <div className="annonce">
                <div className="annonce__box annonce__box--titleContainer">
                    <h1 className="annonce__title">{data.title}</h1>
                    <p className="annonce__location">{data.location}</p>
                    <Tags tags={data.tags}/>
                </div>
                <div className="annonce__box annonce__box--hosting">
                    <div className="annonce__host">
                        <p className="annonce__host__p">{data.host.name}</p>
                        <img className="annonce__host__img" src={data.host.picture} alt="hôte"/>
                    </div>
                    <Rating rate={data.rating} id={data.id}/>
                </div>
                <div className="annonce__box">
                    <Dropdown title="Description" description={data.description}/>
                </div>
                <div className="annonce__box annonce__box--right">
                    <Dropdown title="Equipements" description={data.equipments}/>
                </div>
            </div>
            
        </div>
    )
    
}

export default Lodgement