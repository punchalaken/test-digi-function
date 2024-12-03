function allCharacters() {

    console.log('Все характеристики данного товара:')
    const charactersLi = document.querySelectorAll('li.tab-pane-product-parameter-item')

    const articlesOnPage = Array.from(charactersLi).map((el) => {

        const characterName = el.querySelector('.parameter-name').childNodes[0].textContent.trim()
        const characterValue = el.querySelector('.parameter-value')?.textContent.trim()

        if (characterName && characterValue) {
            console.log(`${characterName}: ${characterValue}`)
        }
    })
}
