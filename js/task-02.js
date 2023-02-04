const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredientEl = ingredients.map((ingredient) => {
  const liMarkup = document.createElement("li");
  liMarkup.classList.add("item");
  liMarkup.textContent = `${ingredient}`;
  return liMarkup;
});
ingredientsEl.append(...ingredientEl);
console.log(ingredientEl);
