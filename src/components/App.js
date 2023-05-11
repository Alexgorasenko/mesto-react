import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm
          title="Обновить аватар"
          name="avatar-edit"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <label className="popup__form-label">
            <input
              type="url"
              className="popup__input popup__input_type_link"
              name="avatar"
              id="avatar-input"
              placeholder="Ссылка на картинку"
              required/>
            <span className="form__input-error avatar-input-error">
              Введите адрес сайта.
            </span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Редактировать профиль"
          name="editing"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <label className="popup__form-label">
            <input
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Введите имя"
              id="name-input"
              required/>
            <span className="form__input-error name-input-error">
              Вы пропустили это поле.
            </span>
          </label>
          <label className="popup__form-label">
            <input
              type="text"
              className="popup__input popup__input_type_vocation"
              name="about"
              placeholder="Введите описание"
              id="vocation-input"
              required/>
            <span className="form__input-error vocation-input-error">
              Вы пропустили это поле.
            </span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="add"
          buttonText="Cоздать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <label className="popup__form-label">
            <input
              required
              type="text"
              className="popup__input popup__input_type_title"
              name="name"
              id="title-input"
              placeholder="Название"/>
            <span className="form__input-error title-input-error">
              Вы пропустили это поле.
            </span>
          </label>
          <label className="popup__form-label">
            <input
              type="url"
              className="popup__input popup__input_type_link"
              name="link"
              id="link-input"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error link-input-error">
              Введите адрес сайта.
            </span>
          </label>
        </PopupWithForm>
        <ImagePopup
          name="img"
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={selectedCard}
        />
      </div>
    </>
  );
}

export default App;
