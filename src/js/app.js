
const goods = [
  { title: 'Shirt',
    price: 150,
    img: `<img src="img/shirt.jpg" alt="shirt photo">`
  },
  { title: 'Socks',
    price: 50,
    img: `<img src="img/socks.jpg" alt="socks photo">`
  },
  { title: 'Jacket',
    price: 350,
    img: `<img src="img/jacket.jpg" alt="jacket photo">`
  },
  { title: 'Shoes',
    price: 250,
    img: `<img src="img/shoes.jpg" alt="shoes photo">`
  }
];
//
// const renderGoodsItem = (img = 'photo', title = 'title', price = '$ 0') => {
//   return `<div class="goods-item">${img}<h3>${title}</h3><p><span>$ </span>${price}</p></div>`;
// };
//
// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price)).join('');
//   document.querySelector('.goods-list').innerHTML = goodsList;
// }
//
// renderGoodsList(goods);

let [{title, price, img}] = goods;

goods.forEach(good => {
  document.querySelector('.goods-list').insertAdjacentHTML('beforeend', `
    <div class="goods-item">${good.img}<h3>${good.title}</h3><p><span>$ </span>${good.price}</p></div>
  `)
});