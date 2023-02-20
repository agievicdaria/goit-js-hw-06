const ulRef = document.querySelector('#categories');
const liRef = ulRef.querySelectorAll('.item');

console.log('Number of categories:', liRef.length);

const nameAndAmountOfCategories = [...liRef].map(categories => {
    console.log('Category:', categories.children[0].textContent);
    console.log('Elements:', categories.children[1].children.length);
})
