const axios = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    cloneArray: (arr) => [...arr],
    createUser: () => {
        const user = { firstName: "Reham" }
        user['secName'] = "Hussein"
        return user;
    },
    featchUser: (id) => axios.get( `https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data).catch(err => "error")
    
}

module.exports = functions;