let user = {
    name: 'Sung',
    gender: 'male'
};

let changeName = function (user, newName) {
    let newUser = user;
    newUser.name = newName;
    return newUser;
};

let user2 = changeName(user, 'Sung-Dong');

if (user !== user2) {
    console.log('유저 정보가 변경되었음!');
} else {
    console.log('유저 정보가 변경되지 않았음!');
}

console.log(user.name, user2.name);
console.log(user === user2);