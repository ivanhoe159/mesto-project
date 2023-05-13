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

let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let addButton = page.querySelector('.profile__add');
let editButton = page.querySelector('.profile__edit');
let submitButton = page.querySelector('.popup__submit');
let closeButton = page.querySelector('.popup__close');
let profileTitle = page.querySelector('.profile__title');
let profileStatus = page.querySelector('.profile__status');
let popupFunc = page.querySelector('.popup__title');
let popupTitle = page.querySelector('#popup__title');
let popupStatus = page.querySelector('#popup__status');
let like = page.getElementsByClassName('elements__like');
let cardImage = page.getElementsByClassName('elements__img');
let cardTitle = page.getElementsByClassName('elements__title');
let currentCard = 0;

editButton.onclick = function() {
  popup.classList.add('popup_opened');
  page.querySelector('.popup__title').innerHTML = "Редактировать профиль";
  popupTitle.value = profileTitle.innerHTML;
  popupStatus.value = profileStatus.innerHTML;
}

addButton.onclick = function() {
  popup.classList.add('popup_opened');
  popupFunc.innerHTML = "Новое место";
  popupTitle.value = '';
  popupStatus.value = '';
  popupTitle.placeholder = 'Название';
  popupStatus.placeholder = 'Cсылка на картинку';
}

for(let i = 0; i < like.length; i++) {
  like[i].onclick = function() {
    if(like[i].style.backgroundImage != 'url("images/like_active.svg")')
      like[i].style.backgroundImage = 'url("images/like_active.svg")';
    else like[i].style.backgroundImage = 'url("images/like.svg")'
  }
}

closeButton.onclick = function() {
  popup.classList.remove('popup_opened');
}

submitButton.onclick = function() {
  popup.classList.remove('popup_opened');
  if(popupFunc.innerHTML == 'Редактировать профиль') {
    profileTitle.innerHTML = popupTitle.value; 
    profileStatus.innerHTML = popupStatus.value; 
  }
  else {
    cardTitle[currentCard].innerHTML = popupTitle.value;
    cardImage[currentCard].src = popupStatus.value;
    cardImage[currentCard].alt = popupTitle.value;
    currentCard = currentCard + 1;
    if(currentCard == 6)
      currentCard = 0;
  }
}

like.onclick = function() {
  popup.classList.remove('popup_opened');
  profileTitle.innerHTML = popupTitle.value; 
  profileStatus.innerHTML = popupStatus.value; 
}


