
var random;

// h2 determining jackpot or loose
var victory = document.querySelector("#title h2");

// Img inside the slot machine
var images = document.querySelectorAll("#content .img img");


function Play(){

    random = [];
    // assigning random array with random variables
    for(var i = 0; i < 3; i++){
        random.push(Math.floor(Math.random() * 3 + 1));
    }


    // iterating the images randomly
    for(var i = 0; i < 3; i++){
        var items = "images/item" + random[i] + ".jpg";
        var itemsAll = images[i];
        itemsAll.setAttribute("src" , items);
        
        
    }
    // determing win or loose
    if (random[0] === random[1]  && random[1] == random[2] && random[2] == random[0]){
    
        victory.innerText = "Jackpot!";

    }
    else{
 
        victory.innerText = "You loose!";

    
    }

}

// function Play(){
//     window.location.reload(true);
// }








 









