let equal = require('deep-equal')
let verifyEquals = (a, b) => {
    if(!equal(a,b)) {
        throw new Error("Equality test failed")
    }
}
module.exports = verifyEquals