const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulRef = document.querySelector('#ingredients');
// v1
// ingredients.forEach(name => {
//   const itemRef = document.createElement('li');
//   itemRef.classList.add('item');
//   itemRef.textContent = name;

//   ulRef.append(itemRef);
// })

// v2
const itemsRef = ingredients.map(name => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = name;
  return itemRef;
})

console.log(itemsRef);

ulRef.append(...itemsRef);