const categoriesNumberElems = document.querySelectorAll(
  "ul#categories > li.item"
);
console.log(`Number of categories: ${categoriesNumberElems.length}`);

const categoryNameElems = document.querySelectorAll("ul#categories > li.item");

categoryNameElems.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
