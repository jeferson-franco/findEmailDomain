function solution(address) {
    return address.substring(address.lastIndexOf('@') + 1);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test findEmailDomain

// alternative solution
