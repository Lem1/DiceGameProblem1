/**
 * Created by bcuser on 4/4/19.
 */

// set jQuery-like variable
var $ = function(id) {
    return document.getElementById(id);
};

const Dice = {
    elemImage1: $("image1"),
    elemImage2: $("image2"),
    equal: false,
    sum: 0,

    rollDie: function() {
        // get random numbers between 1 and 6
        let ranNum1 = Math.ceil((Math.random() * 6));
        let ranNum2 = Math.ceil((Math.random() * 6));
        // equal
        this.equal = ranNum1 === ranNum2; 
        // sum
        this.sum = ranNum1 + ranNum2;
        
        // update dice images
        this.elemImage1.src="./images/dice-"+ ranNum1 +".jpg";
        this.elemImage2.src="./images/dice-"+ ranNum2 + ".jpg";
    }
}

const DiceGame = {
    
    elemBalance: $("balance"),
    elemStatus: $("status"),
    elemTurnCount: $("turnCount"),
    elemButtonBet: $("ButtonBet"),
    elemButtonQuit: $("ButtonQuit"),
    buttons: $(':button'),
    turnCount: 0,
    bal: 5, 

    buttonBetClicked: function() {
        Dice.rollDie();
        
        // determine win/loss for round
        if (Dice.equal || Dice.sum===7 || Dice.sum===11) {
            // player won
            this.elemBalance.innerHTML=++this.bal;
            this.elemStatus.innerHTML="Win";
        } else {
            // player lost
            this.elemBalance.innerHTML=--this.bal;
            this.elemStatus.innerHTML="Loss";
        }

        // update turn
        this.turnCount+=1;
        
        // check win or lose
        this.elemTurnCount.innerHTML=this.turnCount;
        if (this.bal===0) {  
            this.elemStatus.innerHTML="Game Over - you lost...";
            //this.buttons.prop('disabled', true);
            this.elemButtonBet.disabled = true;
            this.elemButtonQuit.disabled = true;
        }
    },

    buttonQuitClicked: function() {
        this.elemStatus.innerHTML="Game Over - you take home $" + this.bal;
        //this.buttons.prop('disabled', true);
        this.elemButtonBet.disabled = true;
        this.elemButtonQuit.disabled = true;
    }
}

$("ButtonBet").addEventListener("click", function() { DiceGame.buttonBetClicked(); } );
$("ButtonQuit").addEventListener("click", function() { DiceGame.buttonQuitClicked(); } );

