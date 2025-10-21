let bread = document.querySelector('.bread');
let bakery = document.querySelector('.bakery');
let desserts = document.querySelector('.desserts');
let breakfasts = document.querySelector('.breakfasts');
let drinks = document.querySelector('.drinks');
let wrapperOne = document.querySelector('.explore_card_wrapper_one');
let wrapperTwo = document.querySelector('.explore_card_wrapper_two');
let wrapperThree = document.querySelector('.explore_card_wrapper_three');
let wrapperFour = document.querySelector('.explore_card_wrapper_four');
let wrapperFive = document.querySelector('.explore_card_wrapper_five');


bread.onclick = function () {
  wrapperOne.style.display = 'grid';
  wrapperTwo.style.display = 'none';
  wrapperThree.style.display = 'none';
  wrapperFour.style.display = 'none';
  wrapperFive.style.display = 'none';
  bread.style.color = '#000000'
  bakery.style.color = '#AEAEAE'
  desserts.style.color = '#AEAEAE'
  breakfasts.style.color = '#AEAEAE'
  drinks.style.color = '#AEAEAE'
}

bakery.onclick = function () {
  wrapperTwo.style.display = 'grid';
  wrapperOne.style.display = 'none';
  wrapperThree.style.display = 'none';
  wrapperFour.style.display = 'none';
  wrapperFive.style.display = 'none';
  bakery.style.color = '#000000'
  bread.style.color = '#AEAEAE'
  desserts.style.color = '#AEAEAE'
  breakfasts.style.color = '#AEAEAE'
  drinks.style.color = '#AEAEAE'
}

desserts.onclick = function () {
  wrapperThree.style.display = 'grid';
  wrapperOne.style.display = 'none';
  wrapperTwo.style.display = 'none';
  wrapperFour.style.display = 'none';
  wrapperFive.style.display = 'none';
  desserts.style.color = '#000000'
  bread.style.color = '#AEAEAE'
  bakery.style.color = '#AEAEAE'
  breakfasts.style.color = '#AEAEAE'
  drinks.style.color = '#AEAEAE'
}

breakfasts.onclick = function () {
  wrapperFour.style.display = 'grid';
  wrapperOne.style.display = 'none';
  wrapperTwo.style.display = 'none';
  wrapperThree.style.display = 'none';
  wrapperFive.style.display = 'none';
  breakfasts.style.color = '#000000'
  bread.style.color = '#AEAEAE'
  bakery.style.color = '#AEAEAE'
  desserts.style.color = '#AEAEAE'
  drinks.style.color = '#AEAEAE'
}

drinks.onclick = function () {
  wrapperFive.style.display = 'grid';
  wrapperOne.style.display = 'none';
  wrapperTwo.style.display = 'none';
  wrapperThree.style.display = 'none';
  wrapperFour.style.display = 'none';
  drinks.style.color = '#000000'
  bread.style.color = '#AEAEAE'
  bakery.style.color = '#AEAEAE'
  desserts.style.color = '#AEAEAE'
  breakfasts.style.color = '#AEAEAE'
}
