const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('.gallery');
// -----v1-----
const gallaryListEl = images
  .map((image) => `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

// console.log(gallaryListEl);
galleryListRef.insertAdjacentHTML("beforeend", gallaryListEl);

// -----v2-----
// const gallaryListEl = images
//   .map((image) => {
//     const gallaryLiEl = document.createElement("li");
//      gallaryLiEl.classList.add("gallery__item");
//     const gallaryImgEl = document.createElement("img");
//     gallaryImgEl.classList.add("gallery__img");
//     gallaryImgEl.src = image.url;
//     gallaryImgEl.alt = image.alt;
//     gallaryLiEl.appendChild(gallaryImgEl);
//     // console.log(gallaryLiEl);
//     return gallaryLiEl;
//   });
//   console.log(gallaryListEl);
// galleryListRef.append(...gallaryListEl);