function allProductsArticles() {

    const productDIV= document.querySelectorAll('div._product')

    const articlesOnPage = Array.from(productDIV).map((el) => el.getAttribute('data-product-mini-card'))

    console.log('Артикулы товаров на странице:', articlesOnPage)
}


