const initialCards = [
  {
    name: 'Фиджи',
    link: 'https://i.imgur.com/8tu458O.png'
  },
  {
    name: 'Байкал',
    link: 'https://i.imgur.com/s4PVMfx.png'
  },
  {
    name: 'Домбай',
    link: 'https://i.imgur.com/PcDX4xN.png'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://i.imgur.com/h7lkQGa.png'
  },
  {
    name: 'Обь',
    link: 'https://i.imgur.com/KSj7Mfu.png'
  },
  {
    name: 'Эйяфьядлайёкюдль',
    link: 'https://i.imgur.com/2KOIoIy.png'
  }
]; 

const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const imgpopup = page.querySelector('.imgpopup');
const formElement = page.querySelector('.popup__form');
const addButton = page.querySelector('.profile__add');
const editButton = page.querySelector('.profile__edit');
const submitButton = page.querySelector('.popup__submit');
const closeButton = page.querySelector('.popup__close');
const closeImgButton = page.querySelector('.imgpopup__close');
const profileTitle = page.querySelector('.profile__title');
const profileStatus = page.querySelector('.profile__status');
const popupFunc = page.querySelector('.popup__title');
const popupTitle = page.querySelector('#popup__title');
const popupStatus = page.querySelector('#popup__status');
const imgPopupImage = page.querySelector('.imgpopup__image');
const imgPopupTitle = page.querySelector('.imgpopup__title');
const elements = page.querySelector('.elements');

function addNewCard (cardTitle, cardLink) {
  const newElement = document.createElement('div');
  const imageElement = document.createElement('img');
  const groupElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const likeElement = document.createElement('button');
  const deleteElement = document.createElement('button');
  newElement.classList.add('elements__element');
  deleteElement.classList.add('elements__delete');
  deleteElement.name = cardTitle;
  imageElement.classList.add('elements__img');
  imageElement.src = cardLink;
  imageElement.alt = cardTitle;
  groupElement.classList.add('elements__group');
  titleElement.classList.add('elements__title');
  titleElement.textContent = cardTitle;
  likeElement.classList.add('elements__like');

  imageElement.onclick = function() {
    imgpopup.classList.add('imgpopup_opened');
    imgPopupImage.src = cardLink;
    imgPopupImage.alt = cardTitle;
    imgPopupTitle.textContent = cardTitle;
  }

  likeElement.onclick = function() {
    if(likeElement.style.backgroundImage != 'url("images/like_active.svg")')
      likeElement.style.backgroundImage = 'url("images/like_active.svg")';
    else likeElement.style.backgroundImage = 'url("images/like.svg")'
  }

  deleteElement.onclick = function() {
    const dieElement = deleteElement.closest('.elements__element');
    dieElement.remove();
  }

  newElement.append(deleteElement);
  newElement.append(imageElement);
  groupElement.append(titleElement);
  groupElement.append(likeElement);
  newElement.append(groupElement);
  elements.prepend(newElement);
}

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    popup.classList.remove('popup_opened');
    if(popupFunc.innerHTML == 'Редактировать профиль') {
      profileTitle.innerHTML = popupTitle.value; 
      profileStatus.innerHTML = popupStatus.value; 
      editButton.removeAttribute('hidden');
    }
    else {
      addNewCard(popupTitle.value, popupStatus.value);
    }
}

function editProfile() {
  popup.classList.add('popup_opened');
  page.querySelector('.popup__title').innerHTML = "Редактировать профиль";
  popupTitle.value = profileTitle.innerHTML;
  popupStatus.value = profileStatus.innerHTML;
}

function addPlace() {
  popup.classList.add('popup_opened');
  popupFunc.innerHTML = "Новое место";
  popupTitle.value = '';
  popupStatus.value = '';
  popupTitle.placeholder = 'Название';
  popupStatus.placeholder = 'Cсылка на картинку';
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function closeImgPopup() {
  imgpopup.classList.remove('imgpopup_opened');
}

editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', addPlace);
closeButton.addEventListener('click', closePopup);
closeImgButton.addEventListener('click', closeImgPopup);
formElement.addEventListener('submit', handleFormSubmit);
for(let i = initialCards.length - 1; i >= 0; i--) {
  addNewCard(initialCards[i].name, initialCards[i].link);
}




