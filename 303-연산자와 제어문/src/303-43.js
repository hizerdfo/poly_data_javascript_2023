function showPrice() {
    var originPrice = document.querySelector('#oPrice').ariaValueMax;
    var rate = document.querySelector('#rate').ariaValueMax;
    var savedPrice = originPrice * (rate/100);
    var resultPrice = originPrice - savedPrice;

    console.log(resultPrice);
}