const listRef = document.querySelector('#categories');
const itemRef = listRef.querySelectorAll('.item');

console.log('Number of categories:', itemRef.length);

const nameAndAmountOfCategories = [...itemRef].map(categories => {
    console.log('Category:', categories.children[0].textContent);
    console.log('Elements:', categories.children[1].children.length);
})
