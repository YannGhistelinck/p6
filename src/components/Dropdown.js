import arrowUp from "../assets/img/arrow_up.svg";

function Dropdown({ title, description }) {
  const show = function () {
    document.getElementById(title).classList.toggle("menu__description--hidden");
    document.getElementById(title+"p").classList.toggle("menu__description__content--hidden");
    document.getElementById(title+"p").classList.toggle("menu__description__content");
    document.getElementById(title + "up").classList.toggle("menu__title__icon__arrow--return");
  };
  return (
    <div className="menu">
      <div className="menu__title">
        <p>{title}</p>
        <div className="menu__title__icon" onClick={show}>
          <img id={title + "up"} className="menu__title__icon__arrow" src={arrowUp} alt="Flèche ouverture/fermeture menu déroulant"/>
        </div>
      </div>
      <div className="menu__description menu__description--hidden" id={title}>
        {Array.isArray(description) ? (
          <ul id={title+"p"} className="menu__description__content--list menu__description__content--hidden">
            {description.map((equipment) => {
              return <li key={title+equipment}>{equipment}</li>;
            })}
          </ul>
        ) : (
          <p id={title+"p"} className="menu__description__content--hidden">{description}</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

/**
{Array.isArray(description) ? (
          <ul id={title+"p"} className="menu__description__content--list menu__description__content menu__description__content--hidden">
            {description.map((equipment) => {
              return <li>{equipment}</li>;
            })}
          </ul>
        ) : (
          <p id={title+"p"} className="menu__description__content menu__description__content--hidden">{description}</p>
        )}
 */