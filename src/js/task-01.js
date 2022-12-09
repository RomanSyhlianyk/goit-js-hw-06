const categoriesRef = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesRef.children.length}`);


const itemsRef = document.querySelectorAll('.item')
itemsRef.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})
