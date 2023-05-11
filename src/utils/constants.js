export const aboutButton = document.querySelector(".profile__button_type_edit");
export const popupEditProfile = document.querySelector(".popup-editing");
export const popupEditProfileFormName = popupEditProfile.querySelector(".popup__input_type_name");
export const popupEditProfileFormVocation = popupEditProfile.querySelector(".popup__input_type_vocation");
export const popupFormEditElement = document.forms["form-edit-profile"];
export const popupFormEditAvatar = document.forms["form-edit-avatar"];
export const placesContainer = document.querySelector(".places");
export const popupAdd = document.querySelector(".popup-add");
export const popupAddFormLinkElement = document.forms["form-add-place"];
export const addPlaceButton = document.querySelector(".profile__add");
export const editAvatarButton = document.querySelector(".profile__avatar-edit")
export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  submitButtonSelector: ".popup__save",
};
