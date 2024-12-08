function changeValue(val) {
    val = val + 10;
}

let kval = 10;
console.log(kval);
changeValue(kval);
console.log(kval);

function changeName(obj) {
    obj.name = 'coder';
}

let shlee = {name: 'shlee'};

console.log(shlee);
changeName(shlee);
console.log(shlee);