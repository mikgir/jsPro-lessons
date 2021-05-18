class GoodItem {
  constructor (img, title, price) {
    this.img = img;
    this.title = title;
    this.price = price;
  }
  render () {
    return `<div class="goods-item">
                <img src="${this.img}" alt="${this.title} photo">
                <h3>${this.title}</h3>
                <div class="goods-item__acts">
                    <p><span>$ </span>${this.price}</p>
                    <button class="goods-item__btn">Add to cart</button>
                </div>                
            </div>`
  }
}

const goodItem = new GoodItem();
goodItem.render();