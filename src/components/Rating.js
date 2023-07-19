import orangeStar from '../assets/img/star_orange.svg'
import greyStar from '../assets/img/star_grey.svg'

function Rating({rate, id}){
    let stars=[]
    for(let x=0; x<5; x++){
        if(x < rate){
            // Add orange star 
            stars.push(<img key={id+"-"+x} className="starIcon" src={orangeStar} alt="étoile de bonne note"/>)
        }else{
            // Add grey star
            stars.push(<img key={id+"-"+x} className="starIcon" src={greyStar} alt="étoile de mauvaise note"/>)
        }
        
    }

    return(
        <div className='starsContainer'>
            {stars}
        </div>
    )
}

export default Rating