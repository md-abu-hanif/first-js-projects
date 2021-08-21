// Button Function //
function updatePrice(product, price) {
    const itemPrice = document.getElementById(product + '-cost')
    itemPrice.innerText = price;
    calculateTotal();
}
//  Button //
document.getElementById('memory-btn1').addEventListener('click', function () {
    updatePrice('memory', 0);
})
document.getElementById('memory-btn2').addEventListener('click', function () {
    updatePrice('memory', 180);
})
document.getElementById('storage-btn1').addEventListener('click', function () {
    updatePrice('storage', 0);
})
document.getElementById('storage-btn2').addEventListener('click', function () {
    updatePrice('storage', 100);
})
document.getElementById('storage-btn3').addEventListener('click', function () {
    updatePrice('storage', 180);
})
document.getElementById('delivery-btn1').addEventListener('click', function () {
    updatePrice('delivery', 0);
})
document.getElementById('delivery-btn2').addEventListener('click', function () {
    updatePrice('delivery', 20);
})
//  Button //

//  Calculation Start //
function getInput(product) {
    const inputValue = document.getElementById(product + '-cost').innerText;
    const value = parseInt(inputValue);
    return value;
}
function calculateTotal() {
    const basePrice = getInput('base');
    const memoryPrice = getInput('memory');
    const storagePrice = getInput('storage');
    const deliveryPrice = getInput('delivery');

    const total = basePrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-cost').innerText = total;
    document.getElementById('total').innerText = total;

}
//  Calculation End //


//  Promo Start //
document.getElementById('promo-code').addEventListener('click', function () {
    const input = document.getElementById('promo-input').value;
    const code = 'stevekaku';
    const total = document.getElementById('total-cost').innerText;
    const success = document.getElementById('promo-success');
    const fail = document.getElementById('promo-error');
    document.getElementById('promo-input').value = '';
    if (input == code) {
        const last = parseFloat(total - ((total / 100) * 20));
        document.getElementById('total').innerText = last;

    }

})
// promo End //












