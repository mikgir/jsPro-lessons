class GoodItem {
  constructor (id, img, title, price) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.price = price;
  }
  render () {
    let activeClass = '';
    let activeText = '';

    return `<div class="goods-item">
                <img src="${this.img}" alt="${this.title} photo">
                <h3>${this.title}</h3>
                <div class="goods-item__acts">
                    <p>Price <span>$ </span>${this.price}</p>
                    <button type="submit" class="goods-item__btn ${activeClass}" onclick="list.handlerLocalStore(this, `${id}`);">
                        ${activeText}
                    </button>
                </div>                
            </div>`
  }
}

const goodItem = new GoodItem();
