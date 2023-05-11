import React from 'react';


function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
       
      } 


  return (
    <article className="place-card">
    <div className="place-card__picture">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="place-card__image"
        onClick={handleClick}
      />
      <button
        aria-label="Кнопка удалить"
        type="button"
        className="place-card__delete"
      ></button>
    </div>
    <div className="place-card__description">
      <h2 className="place-card__title">{props.card.name}</h2>
      <div className="place-card__like-container">
        <button
          aria-label="Кнопка понравилось"
          type="button"
          className="place-card__like"
        ></button>
        <p className="place-card__like-count">{props.card.likes.length}</p>
      </div>
    </div>
  </article>
  );
}

export default Card;