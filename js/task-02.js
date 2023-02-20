const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const itemsRef = ingredients.map((name) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = name;
  return itemRef;
});

console.log(itemsRef);

listRef.append(...itemsRef);
