function AddItems() {





    let a = parseInt(document.getElementById('Espresso').value);
    let b = parseInt(document.getElementById('Latte').value);
    let c = parseInt(document.getElementById('Mocha').value);
    let d = parseInt(document.getElementById('FlatWhite').value);
    let e = parseInt(document.getElementById('Turkish').value);

    let total = a + b + c + d + e;

    document.getElementById('items').innerHTML = ` Quantity of items is: ${total}`;

    let totalPrice = a * 10 + b * 12 + c * 15 + d * 18 + e * 20 / 2;
    document.getElementById('total').innerHTML = `${totalPrice}$`;




}




function remove() {

    document.getElementById('total').style.display = "none";
    document.getElementById('items').style.display = "none";

    document.getElementById('Espresso').style.display = "none";
    document.getElementById('Latte').style.display = "none";
    document.getElementById('Mocha').style.display = "none";
    document.getElementById('FlatWhite').style.display = "none";
    document.getElementById('Turkish').style.display = "none";



}























