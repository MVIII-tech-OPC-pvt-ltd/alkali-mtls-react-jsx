function generateUniqueId(digit=5) {
    return parseInt(Math.random(1000,2000)*(10**digit));
}

export {generateUniqueId};