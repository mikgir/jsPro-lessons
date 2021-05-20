class CartList {
  constructor () {
    this.goodsCart = [];
  }
  handlerClear () {
    GOODS_CART.innerHTML = '';
  }

  addGood () {
    const productsStore = localStorageUtil.getProducts();
    let cartHtml = '';
    let totalCost = 0;
    this.goodsCart = productsStore;
    this.goodsCart.forEach(item => {
      const cartItem = new CartItem(item.id, item.img, item.title, item.price);
      cartHtml += cartItem.render(cartItem.addQuantity());

    });
    GOODS_CART.innerHTML = cartHtml;

  }
  removeGood () {

  }
}

