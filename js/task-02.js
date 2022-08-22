const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrListRef = document.querySelector("#ingredients");
// console.log(ingrListRef);

// -----v1-----
const ingrListEl = [];

ingredients.forEach((ingredient) => {
  const ingrListItem = document.createElement("li");
  ingrListItem.textContent = ingredient;
  ingrListItem.classList.add("item");
  // console.log(ingrListItem);
  ingrListEl.push(ingrListItem);
});

// console.log(ingrListEl);

ingrListRef.append(...ingrListEl);

// -----v2-----
// const ingrListEl = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

//   // console.log(ingrListEl);
// ingrListRef.insertAdjacentHTML("beforeend", ingrListEl);
