var timeLublin = {};

(function () {
    var lublin = document.getElementById('Lublin');
    var newYork = document.getElementById('NewYork');
    var sydney = document.getElementById('Sydney');
    (function tick () {

        lublin.innerHTML = calcTime(1)

        newYork.innerHTML = calcTime(-5)

        sydney.innerHTML = calcTime(11)

        window.setTimeout(tick, 1000);
    }());
}());

function calcTime(offset) {

    var d = new Date();

    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var nd = new Date(utc + (3600000 * offset));

    return nd.toLocaleString();
}
