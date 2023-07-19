import { useState } from "react"
import leftArrow from '../assets/img/left_arrow.svg'
import rightArrow from '../assets/img/right_arrow.svg'

function Slider({pictures}){
    const nbPictures = pictures.length
    const [activePicture, updateActivePicture] = useState(0)
    const previousButton = function(){
        if(activePicture === 0){
            updateActivePicture(nbPictures-1)
        }else{
            updateActivePicture(activePicture-1)
        }
    }
    const nextButton = function(){
        if(activePicture === nbPictures-1){
            updateActivePicture(0)
        }else{
            updateActivePicture(activePicture+1)
        }
    }
    if(nbPictures > 1){
        // More than one picture to display in the carousel : Display picture counter and previous and next buttons
        return(
            <div>
                <div id="carousel">
                    <img className="carouselContainer__picture" src={pictures[activePicture]} alt="appartement"/>
                </div>
                <div className="carouselContainer__buttons">
                    <div onClick={previousButton}><img src={leftArrow} alt="fleche précédente"/></div>
                    <div onClick={nextButton}><img src={rightArrow} alt="fleche suivante"/></div>
                </div>
                <div className="carouselContainer__pictureCounter">
                    <p>{activePicture+1}/{nbPictures}</p>
                </div>
                
            </div>
        )
    }else{
        // Just one picture in the carousel, don't display the picture counter and buttons
        return(
            <div>
                <img className="carouselContainer__picture" src={pictures[0]} alt="appartement"/>
            </div>
        )
    }
}

export default Slider