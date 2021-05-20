class GoodsList {
  constructor () {
    this.goods = [];
    this.classNameActive = 'goods-item__btn_active';
    this.labelAdd = 'Add to cart';
    this.labelRemove = 'Delete';
  }
  handlerLocalStore (element, id) {
    const {pushProduct, products} = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.labelAdd;
    }
  }

  render () {
    const productsStore = localStorageUtil.getProducts();
    let listHtml = '' ;
    this.goods.forEach(({id, img, title, price}) => {
      let activeClass = '';
      let activeText = '';
      // const goodItem = new GoodItem(this.id, this.img, this.title, this.price);

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText = this.labelRemove;
      }
      listHtml += `
            <div class="goods-item">
                <img src="${img}" alt="${title} photo">
                <h3>${title}</h3>
                <div class="goods-item__acts">
                    <p>Price <span>$ </span>${price}</p>
                    <button type="submit" class="goods-item__btn${activeClass}" onclick="list.handlerLocalStore(this, '${id}');">
                       ${activeText}
                    </button>
                </div>                
            </div>`
    });
    GOODS_LIST.innerHTML = listHtml;
  }
  fetchGoods () {
    makeGETRequest('GET', API_URL)
      .then(data => {
        this.goods = data;
        this.render();

      })
      .catch(err => console.log(err))
  }
  getTotalCost () {
    let totalCoast = 0;
    this.goods.forEach(good => totalCoast += good.price);
    console.log(totalCoast);
  }
}

function makeGETRequest(method, url) {
  return fetch(url)
    .then(response => {
    if (response.ok) {
      return response.json()
    }
    return response.json()
      .then(error => {
      const err = new Error('Что-то пошло не так')
      err.data = error
      throw err
    })
})

}

const list = new GoodsList();
list.fetchGoods();
// list.render();
// list.getTotalCost();






