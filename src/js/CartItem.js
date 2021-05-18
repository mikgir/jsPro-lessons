class CartItem extends GoodItem {
  constructor (...args) {
    super(...args);
    this.count = 0;
  }
  render () {
    return `<div class="goods-item">
                <img src="${this.img}" alt="${this.title} photo">
                <h3>${this.title}</h3>
                <p><span>$ </span>${this.price}</p>
                <input type="number" min="1" max="10" value="1">
                <button class="goods-item__btn">Remove from cart</button>
            </div>`
  }
  addQuantity () {

  }

  removeQuantity () {

  }
}

const cartItem = new CartItem();
cartItem.render();