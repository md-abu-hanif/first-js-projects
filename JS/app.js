document.getElementById('memory-btn1').addEventListener('click', function () {
    const memory = document.getElementById('memory-btn1').value;
    const value = parseInt(memory + '0');

    document.getElementById('memory-cost').innerText = value;

})


document.getElementById('memory-btn2').addEventListener('click', function () {
    const memory = document.getElementById('memory-btn2').value;
    const value = parseInt(memory + '180');

    document.getElementById('memory-cost').innerText = value;



})





document.getElementById('storage-btn1').addEventListener('click', function () {
    const memory = document.getElementById('storage-btn1').value;
    const value = parseInt(memory + '0');

    document.getElementById('storage-cost').innerText = value;

})
document.getElementById('storage-btn2').addEventListener('click', function () {
    const memory = document.getElementById('storage-btn2').value;
    const value = parseInt(memory + '100');

    document.getElementById('storage-cost').innerText = value;

})
document.getElementById('storage-btn3').addEventListener('click', function () {
    const memory = document.getElementById('storage-btn3').value;
    const value = parseInt(memory + '180');

    document.getElementById('storage-cost').innerText = value;

})









document.getElementById('delivery-btn1').addEventListener('click', function () {
    const memory = document.getElementById('delivery-btn1').value;
    const value = parseInt(memory + '0');

    document.getElementById('delivery-cost').innerText = value;

})
document.getElementById('delivery-btn2').addEventListener('click', function () {
    const memory = document.getElementById('delivery-btn2').value;
    const value = parseInt(memory + '20');

    document.getElementById('delivery-cost').innerText = value;

})


function conclusion() {
    const delivery = document.getElementById('delivery-cost').innerText;
    const storage = document.getElementById('storage-cost').innerText;
    const memory = document.getElementById('storage-cost').innerText;

    const total = delivery + storage + memory;

    console.log(total);

    document.getElementById('total-cost').innerText = total;


}