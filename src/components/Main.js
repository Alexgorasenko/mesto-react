import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      });
    api
      .getPlaceCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__information">
            <div className="profile__avatar-container">
              <img
                src={userAvatar}
                alt="Аватар профиля"
                className="profile__avatar"
              />
              <button
                className="profile__avatar-edit"
                aria-label="Редактирование аватара профиля"
                type="button"
                onClick={props.onEditAvatar}
              ></button>
            </div>
            <div className="profile__description">
              <div className="profile__editing">
                <h1 className="profile__name">{userName}</h1>
                <button
                  aria-label="Добавление места "
                  type="button"
                  className="profile__button profile__button_type_edit"
                  onClick={props.onEditProfile}
                ></button>
              </div>
              <p className="profile__vocation">{userDescription}</p>
            </div>
          </div>
          <button
            aria-label="Добавление места"
            type="button"
            className="profile__add"
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section className="places">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
