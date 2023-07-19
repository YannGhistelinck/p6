import arrowUp from '../assets/img/arrow_up.svg'

function Menu({title, description}){
    let open=0
    const show = function(){
        document.getElementById(title).classList.toggle("menu__description--hidden");

        if(open===0){
            open = 1
        }else{
            open = 0
        }
        document.getElementById(title+"up").classList.toggle("menu__title__icon__arrow--return");
    }
    return (
        <div className="menu">
            <div className="menu__title">
                <p>{title}</p>
                <div className="menu__title__icon" onClick={show}>
                    <img id={title+"up"} className="menu__title__icon__arrow" src={arrowUp} alt="Flèche vers le haut"/>
                </div>
            </div>
            <div className="menu__description menu__description--hidden" id={title}>
                {description}
            </div>
        </div>
        
    )
}


export default Menu