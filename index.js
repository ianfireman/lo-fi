// Main package function
function loFi(input) {
    // Returns true if the input is either undefined, null, or empty, false otherwise
    return (input === undefined || input === null || input === '');
}

// Make the main function available to other packages that require us
module.exports = loFi;