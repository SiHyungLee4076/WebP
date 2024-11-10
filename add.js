onmessage = function (e) {
    let sum = 0;
    let num1 = parseInt(e.data.a);
    let num2 = parseInt(e.data.b);
    sum = num1 * num2;
    this.postMessage(sum);
}