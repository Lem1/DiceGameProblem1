/**
 * Created by bcuser on 4/4/19.
 */

// set jQuery-like variable
var $ = function(id) {
    return document.getElementById(id);
};

const DiceGame = {
    image1: $("image1"),
    image2: $("image2"),
    balance: $("balance"),
    turnCount: $("turnCount"),
    status: $("status"),
    ButtonBet: $("ButtonBet"),
    count: 0,
    bal: 5, 

    buttonClicked: function() {
        // get random numbers between 1 and 6
        let ranNum1 = Math.ceil((Math.random() * 6));
        let ranNum2 = Math.ceil((Math.random() * 6));
        // update dice images
        this.image1.src="./images/dice-"+ ranNum1 +".jpg";
        this.image2.src ="./images/dice-"+ ranNum2 + ".jpg";
        
        // add dice count together
        let sumnum= ranNum1 + ranNum2;
        if (ranNum1===ranNum2 || sumnum===7 || sumnum===11) {
            // player won
            this.bal+=1;
            this.balance.innerHTML=this.bal;
            this.status.innerHTML="Win";
        } else {
            // player lost
            this.bal -=1;
            this.balance.innerHTML=this.bal;
            this.status.innerHTML=" You Lost";
        }

        // update turn
        this.count+=1;
        
        // check win or lose
        this.turnCount.innerHTML=this.count;
        if (this.count==45) {
            this.status.innerHTML="Game Over - you take home $" + this.bal;
            this.ButtonBet.disabled = true;
        } else if (this.bal===0) {  
            this.status.innerHTML="Game Over - you lost...";
            this.ButtonBet.disabled = true;;
        }
    }
}

$("ButtonBet").addEventListener("click", function() { DiceGame.buttonClicked(); } );

