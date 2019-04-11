/**
 * Created by bcuser on 4/4/19.
 */
let image1 = document.getElementById("image1");
let image2= document.getElementById("image2");
let balance =document.getElementById("balance");
let turnCount =document.getElementById("turnCount");
let status =document.getElementById("status");
let ButtonBet =document.getElementById("ButtonBet");

let count =0;
let bal =5; 
function buttonClicked()
{

let ranNum1 = Math.floor((Math.random() * 6) + 1);
let ranNum2 = Math.floor((Math.random() * 6) + 1);
image1.src="./images/dice-"+ ranNum1 +".jpg";
image2.src ="./images/dice-"+ ranNum2 + ".jpg";
let sumnum= ranNum1 + ranNum2;

if(ranNum1===ranNum2 || sumnum===7 || sumnum===11)
{
bal+=1;
balance.innerHTML=bal;
status.innerHTML="Win";
}

else
{
bal -=1;
balance.innerHTML=bal;
status.innerHTML=" You Lost";

}

count+=1;
turnCount.innerHTML=count;
if(count==45)
{
status.innerHTML="Game Over";
ButtonBet.style.display==="none";
}
else if(bal===0)
{
status.innerHTML="Game Over!";
ButtonBet.style.display="none";
}

}