// 일급 함수: 함수를 변수에 저장할 수 있음
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}

// 함수를 변수에 저장
let p = plus;

// 함수를 파라미터로 받는 함수
function calculate(a, b, func) {
    return func(a, b);
}

// 함수를 반환하는 함수
function getOperation(type) {
    if (type === "plus") {
        return plus;
    } else if (type === "minus") {
        return minus;
    } else {
        throw new Error("Invalid operation type");
    }
}

// 사용 예제
console.log(calculate(10, 20, minus)); // 10 - 20 = -10
console.log(calculate(10, 20, plus)); // 10 + 20 = 30
console.log("10 + 20 = %d", p(10, 20)); // 10 + 20 = 30

// 함수를 반환받아 사용
let operation = getOperation("minus");
console.log("20 - 10 = %d", operation(20, 10)); // 20 - 10 = 10

operation = getOperation("plus");
console.log("20 + 10 = %d", operation(20, 10)); // 20 + 10 = 30