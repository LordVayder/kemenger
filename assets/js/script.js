// swiper
var swiper = new Swiper(".catalog__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".comments__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const podrobne = document.querySelectorAll(".catalog__slide-podrobnee")
// const catalogSubjects = document.querySelectorAll(".catalog__slide-subjects2")
// console.log(catalogSubjects)
// catalogSubjects.forEach(e => e.classList.remove("hidden"))


// function linkAction(n) {
//   n.target.classList.add("hidden")
//   console.log(n.target)
//   console.log(n.path)
// }

// podrobne.forEach(n => n.addEventListener('click', linkAction))

const certImg = document.querySelectorAll('.cert__img')
const header = document.getElementById('header')
const main = document.querySelector('.main')
const certImgPopUpBox = document.querySelector('.certImgPopUpBox')
const certImgPopUpClose = document.querySelector('.certImgPopUpClose')

certImg.forEach(n => n.addEventListener('click', certImgPopUp))

function certImgPopUp (n) {
  let certImgSrc = n.target.src
  let certImgPopUpImg = `
    <img src="${certImgSrc}" class="certImgPopUpImg">
  `
  certImgPopUpBox.classList.add('certImgPopUpBoxStyles')
  certImgPopUpBox.insertAdjacentHTML('afterbegin', certImgPopUpImg)
  header.classList.add('zIndex-1')
  main.classList.add('zIndex-1')
}

window.onclick = e => {
  if(e.target == certImgPopUpBox) {
    certImgPopUpBox.classList.remove('certImgPopUpBoxStyles')
    certImgPopUpBox.innerHTML = ''
    let certCloseBtn = `
      <span class="certImgPopUpClose" onclick="certImgClose()">&times</span>
    `
    certImgPopUpBox.insertAdjacentHTML('beforeend', certCloseBtn)
    header.classList.remove('zIndex-1')
    main.classList.remove('zIndex-1')
  }
}

function certImgClose() {
  certImgPopUpBox.classList.remove('certImgPopUpBoxStyles')
    certImgPopUpBox.innerHTML = ''
    let certCloseBtn = `
      <span class="certImgPopUpClose" onclick="certImgClose()">&times</span>
    `
    certImgPopUpBox.insertAdjacentHTML('beforeend', certCloseBtn)
    header.classList.remove('zIndex-1')
    main.classList.remove('zIndex-1')
}

const headerBtn = document.querySelector('.header__btn')
const headerPopUpBox = document.querySelector('.headerPopUpBox')
const headerPopUpContent = document.querySelector('.headerPopUpContent')
const headerPopUpContent2 = document.querySelector('.headerPopUpContent2')
const headerPopUpInfo2 = document.querySelector('.header__popup-info2')
const headerPopUpBtn = document.querySelector('.header__popup-btn')
const headerInput1 = document.querySelector('.header__input1')
const headerInput2 = document.querySelector('.header__input2')
const headerTextarea = document.querySelector('.header__textarea')

headerBtn.addEventListener('click', headerPopUp)

function headerPopUp() {
  headerPopUpContent.classList.remove('hidden')
  headerPopUpBox.classList.add('headerPopUpBoxStyles')
  header.classList.remove('zIndex-1')
  main.classList.remove('zIndex-1')
}

function headerPopUp2 () {
  if (headerInput1.value !== "" && headerInput2.value !== "" && headerTextarea.value !== "") {
    console.log('21')
    headerPopUpContent.classList.add('hidden')
    headerPopUpContent2.classList.remove('hidden')
    headerPopUpInfo2.classList.remove('hidden')
    headerPopUpContent2.style.width = '400px'
  }
}

headerPopUpBtn.addEventListener('click', headerPopUp2)