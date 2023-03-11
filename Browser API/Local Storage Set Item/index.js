document.getElementById('add-item').addEventListener('click', function() {
    const productField = document.getElementById('product-field');
    const product = productField.value;
    productField.value = '';
    // const product = JSON.stringify(productFieldString);
    // console.log(product);
    const quantityField = document.getElementById('quantity-field');
    const quantity = quantityField.value;
    quantityField.value = '';
    // const quantity = JSON.stringify(quantityFieldString);
    // console.log(quantity);
    addItemToUi(product, quantity);
    getPreLocalStorage(product, quantity);
    addItemToLocalStorage(product, quantity);
})

const addItemToUi = (product, quantity) => {
    const container = document.getElementById('container');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity}`;
    ul.appendChild(li);
    container.appendChild(ul);
}

const getPreLocalStorage = () => {
    let item = {};
    const storedItem = localStorage.getItem('item');
    if(storedItem) {
        item = JSON.parse(storedItem);
    }
    return item;
}

const addItemToLocalStorage = (product, quantity) => {
    const item = getPreLocalStorage();
    item[product] = quantity;
    const stringifiedItem = JSON.stringify(item);
    localStorage.setItem('item', stringifiedItem);
}

const addPreLocalStorageToUi = () => {
    const savedItem = getPreLocalStorage();
    for(const product in savedItem) {
        const quantity = savedItem[product];
        addItemToUi(product, quantity);
    }
}

addPreLocalStorageToUi();