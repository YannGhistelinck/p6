import { useLocation } from "react-router-dom"
import Menu from "../components/Menu"
import Slider from "../components/Slider"
import Rating from "../components/Rating"
import Tags from "../components/Tags"

function Lodgement(){
    const location = useLocation()
    const data = location.state

    const equipments = function(){
        return(
            <ul>
                {data.equipments.map((equipment) => (
                    <li key={data.id+equipment}>{equipment}</li>
                ))}
            </ul>
        )
    }
    if(data.id){
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
                        <Menu title="Description" description={data.description}/>
                    </div>
                    <div className="annonce__box annonce__box--right">
                        <Menu title="Equipements" description={equipments()}/>
                    </div>
                </div>
                
            </div>
        )
    }else{
        {window.location.replace("/error")}
    }
    
}

export default Lodgement

/*

<div className="annonce__box">
    <h1 className="annonce__title">{data.title}</h1>
    <p className="annonce__location">{data.location}</p>
</div>

<div className="annonce__host annonce__box annonce__box--right">
    <p>{data.host.name}</p>
    <img src={data.host.picture} alt="hôte"/>
</div>
<div className="annonce__box">
    <Tags tags={data.tags}/>
</div>
<div className="annonce__box annonce__box--right">
    <Rating rate={data.rating} id={data.id}/>
</div>
<div className="annonce__box">
    <Menu title="Description" description={data.description}/>
</div>
<div className="annonce__box annonce__box--right">
    <Menu title="Equipements" description={equipments()}/>
</div>

*/

/*
.annonce
    color : $primaryTextColor
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    gap: 20px
    margin: 5%
    &__box
        width: 47%
        @media (max-width: $mobileStyle)
            width: 100%
        &--right
            display: flex
            flex-direction: row 
            justify-content: end
    &__title
        font-size: 36px
        margin: 0
        margin-bottom: 8px
    &__location
        margin: 0
    &__host
        & p
            width: 55px
            text-align: right
            margin-right: 10px
            
        & img
            height: 64px
            width: 64px
            border-radius: 32px
*/