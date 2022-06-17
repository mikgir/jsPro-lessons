class GoodsList {
  constructor () {
    this.goods = [];
    this.filteredGoods = [];
    this.classNameActive = 'goods-item__btn_active';
    this.labelAdd = 'Add to cart';
    this.labelRemove = 'Delete';
  }
  handlerLocalStore (element, id) {
    const {pushProduct, products} = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
      cartList.render();
    } else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.labelAdd;
      cartList.render();
    }
    function renderQuantity () {
      if (products.length !== 0) {
        CART_QUANTITY.classList.remove('hidden')
        CART_QUANTITY.innerText = products.length;
      } else {
        CART_QUANTITY.classList.add('hidden')
        CART_QUANTITY.innerText = 0;
      }
    }
    renderQuantity();
  }

  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.title));
    this.render();
  }

  render () {
    const productsStore = localStorageUtil.getProducts();
    let listHtml = '' ;
    this.filteredGoods.forEach(({id, img, title, price}) => {
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
        this.filteredGoods = data;
        this.render();

      })
      .catch(err => console.log(err))
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

SEARCH_BTN.addEventListener('click', event => {
  const value = SEARCH_INPUT.value;
  list.filterGoods(value);
});

SEARCH_INPUT.addEventListener('keydown', event => {
  const value = SEARCH_INPUT.value;
  list.filterGoods(value);
});


