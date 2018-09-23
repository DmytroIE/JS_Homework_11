//*eslint-disable*/
/* eslint linebreak-style: ['error', 'windows'] */

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2016,
    name: 'Macbook Air White 13"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2017,
    name: 'Macbook Air Gray 13"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'https://www.re-store.ru/upload/resize_cache/iblock/619/494_340_17f5c944b3b71591cc9304fac25365de2/619d9aedea6102641341df3d768d2ab4.jpg',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];


renderList(laptops);

// ***************************************************SUBMIT*********************************************************
const filterForm = document.querySelector('#filter-form');
filterForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const filter = { size: [], color: [], release_date: [] };
  const listOfChecked = filterForm.querySelectorAll('input[type=checkbox]:checked');
  Array.prototype.forEach.call(listOfChecked, item => {filter[item.getAttribute('name')].push(item.getAttribute('value')) });

  const filteredList = laptops.filter( ({size, color, release_date}) => {
    const sizeIsNotChecked = filter.size.length === 0;
    const colorIsNotChecked = filter.color.length === 0;
    const releaseDateIsNotChecked = filter.release_date.length === 0;

    return (sizeIsNotChecked || filter.size.includes('' + size)) &&
           (colorIsNotChecked || filter.color.includes(color)) &&
           (releaseDateIsNotChecked || filter.release_date.includes('' + release_date));
  });
  renderList(filteredList);


}
// ************************************************RESET*****************************************************
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener('click', handleReset);

function handleReset() {
  renderList(laptops);
}

// *******************************************AUX FUNCS*****************************************************
function renderList(list) {
  const source = document.querySelector('#product-card').innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = list.reduce((acc, item) => acc + template(item), '');
  const container = document.querySelector('#card-container');
  container.innerHTML = markup;
}