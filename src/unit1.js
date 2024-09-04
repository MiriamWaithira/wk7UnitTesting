//the name of the function is isEven
function isEven( number ){ //check if a number is even
    if (typeof number !== 'number') { //checks the type of the input parameter
        throw new Error ('Input must be a number'); //if input is not a number
    }

    return number % 2 === 0; //get remainder of the division by 2
    //if remainder is 0 the no. is even
    //if the remainder is not 0 the no. is odd

}

module.exports = isEven; //export the even function so that it can be imported and used by other files

//install mocha for unit testing