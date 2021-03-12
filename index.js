const challengeFunction = function(rookCell, destinationCell){

    let optionOne = rookCell.split("")
    let optionTwo = destinationCell.split("")
    return (optionOne[0] === optionTwo[0] || optionOne[1] === optionTwo[1])
}

module.exports = challengeFunction
