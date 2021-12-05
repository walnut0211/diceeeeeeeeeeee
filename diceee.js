const randomOne = Math.floor(Math.random() * 6) + 1;
const randomTwo = Math.floor(Math.random() * 6) + 1;

const diceImgOne = 'images/dice' + randomOne + '.png';
const diceImgTwo = 'images/dice' + randomTwo + '.png';

document.querySelectorAll('img')[0].setAttribute('src',diceImgOne);
document.querySelectorAll('img')[1].setAttribute('src',diceImgTwo);

if (randomOne > randomTwo){
  document.querySelector('h1').innerHTML = "😜Player 1 WINS";
}
else if (randomTwo > randomOne){
  document.querySelector('h1').innerHTML = "Player 2 WINS😝";
}
else{
  document.querySelector('h1').innerHTML = "😕Draw😕";
}
