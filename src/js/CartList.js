class CartList {
  constructor () {
    this.goodsCart = [];
  }
  handlerClear () {
    GOODS_CART.innerHTML = '';
  }

  render () {
    const productsStore = localStorageUtil.getProducts();
    let cartHtml = '';

    this.handlerClear();

    this.goodsCart.forEach(({id, img, title, price}) => {
      // const cartItem = new CartItem(item.id, item.img, item.title, item.price);
      if (productsStore.indexOf(id) !== -1) {
        cartHtml += `
              <div class="goods-item">
                <img src="${img}" alt="${title} photo">
                <h3>${title}</h3>
                <div class="goods-item__acts">
                    <p>Price <span>$ </span>${price}</p>
                </div>
            </div>`;
      }
      GOODS_CART.innerHTML = cartHtml;
    });
  }

  fetchGoods () {
    makeGETRequest('GET', API_URL)
      .then(data => {
        this.goodsCart = data;
        this.render();
      })
      .catch(err => console.log(err))
  }
}

const cartList = new CartList();
cartList.fetchGoods();




CART_BTN.addEventListener('click', event => {
  document.querySelector('.modal').classList.toggle('hidden');
})
CLOSE_BTN.addEventListener('click', event => {
  document.querySelector('.modal').classList.toggle('hidden');
});


