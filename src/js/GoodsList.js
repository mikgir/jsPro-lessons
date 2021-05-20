class GoodsList {
  constructor () {
    this.goods = [];
    this.classNameActive = 'goods-item__btn_active';
    this.labelAdd = 'Add to cart';
    this.labelRemove = 'Delete';
  }
  handlerLocalStore (element, id) {
    const {pushProduct, products} = localStorageUtil.putProducts (id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.labelAdd;
    }
  }

  fetchGoods () {
     makeGETRequest('GET', API_URL)
     .then(data => {
       const productsStore = localStorageUtil.getProducts();
       let listHtml = '' ;
       data.forEach(good => {
         const goodItem = new GoodItem(good.id, good.img, good.title, good.price);
         listHtml += goodItem.render();
       });
       GOODS_LIST.innerHTML = listHtml;
     })
     .catch(err => console.log(err))
  }
  // render () {
  //  let listHtml = '' ;
  //  this.goods.forEach(good => {
  //    const goodItem = new GoodItem(good.id_product, good.img, good.product_name, good.price);
  //    listHtml += goodItem.render();
  //  });
  //  document.querySelector('.goods-list').innerHTML = listHtml;
  // }
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






