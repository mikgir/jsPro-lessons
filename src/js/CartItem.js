class CartItem {
  constructor () {
    this.count = 0;
  }
  addQuantity () {
    const item = document.querySelector('.goods-item__acts')
    item.insertAdjacentHTML('afterbegin', `
       <label for="goods-item__quantity">Quantity
          <input type="number" class="goods-item__quantity" min="1" max="10" step="1" value="1">
       </label>
    `)
    const itemQuantity = document.querySelector('.goods-item__quantity')
    itemQuantity.addEventListener('input', event => {
      this.count = +event.target.value;
    })
    return this.count;
  }

  getTotalCost () {
    return this.addQuantity() * this.price;
  }
}

const cartItem = new CartItem();
