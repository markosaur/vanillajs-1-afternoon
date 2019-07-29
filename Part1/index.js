console.log('Hello Mark');

// reassign value from x to o when the board is clicked

const playerValues = [];
const play = (clickedId) => {
    const playerSpan = document.getElementById('player');
    console.dir(playerSpan.innerText)
    const clickedElement = document.getElementById(clickedId);
    clickedElement.innerText = playerSpan.innerText
    playerValues[clickedId] = playerSpan.innnerText

    //horizontal
    if(playerValues[0] !== undefined && playerValues[0]===playerValues[1] &&playerValues[1]===playerValues[2]){
        console.log('YOLO')
            alert(`${playerSpan.innerText} is the winner!`)
    }
    if(playerValues[3] !== undefined && playerValues[3]===playerValues[4] &&playerValues[4]===playerValues[5]){
        alert(`${playerSpan.innerText} is the winner!`)
    }
    if(playerValues[6] !== undefined && playerValues[6]===playerValues[7] &&playerValues[7]===playerValues[8]){
        alert(`${playerSpan.innerText} is the winner!`)
    }
    
    //Vertical
    if(playerValues[0] !== undefined && playerValues[0]===playerValues[3] &&playerValues[3]===playerValues[6]){
        
        alert(`${playerSpan.innerText} is the winner!`)
    }
    if(playerValues[1] !== undefined && playerValues[1]===playerValues[4] &&playerValues[4]===playerValues[7]){
        window.alert(`${playerSpan.innerText} is the winner!`)
    }
    if(playerValues[2] !== undefined && playerValues[2]===playerValues[5] &&playerValues[5]===playerValues[8]){
        alert(`${playerSpan.innerText} is the winner!`)
    }

    //Diagonal
    if(playerValues[0] !== undefined && playerValues[0]===playerValues[4] &&playerValues[4]===playerValues[8]){
        alert(`${playerSpan.innerText} is the winner!`)
    }
    if(playerValues[2] !== undefined && playerValues[2]===playerValues[4] &&playerValues[4]===playerValues[6]){
        alert(`${playerSpan.innerText} is the winner!`)
    }
    //at end change to other players turn
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O' 
        console.log("OOO")
    } else if (playerSpan.innerText === 'O'){
        playerSpan.innerText = 'X'
        console.log("XXX")
    }
    console.dir(playerSpan.innerText)
    console.log(playerValues);
};

