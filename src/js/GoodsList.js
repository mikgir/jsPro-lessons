class GoodsList {
  constructor () {
    this.goods = []
  }
  fetchGoods () {
    this.goods = GOODS;
  }
  render () {
   let listHtml = '' ;
   this.goods.forEach(good => {
     const goodItem = new GoodItem(good.img, good.title, good.price);
     listHtml += goodItem.render();
   });
   document.querySelector('.goods-list').innerHTML = listHtml;
  }
  getTotalCost () {
    let totalCoast = 0;
    this.goods.forEach(good => totalCoast += good.price);
    console.log(totalCoast);
  }
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.getTotalCost();






