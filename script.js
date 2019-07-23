let theNumber = Math.floor(Math.random() * 101) + 1;
let chances = 6;
let gameOver = false;
let levelBnts = document.querySelectorAll('.levelsBtns button');
let lifes = document.querySelector('.lifes');
console.log(theNumber);
levelBnts.forEach(e => {
   e.addEventListener('click', () => {
      levelBnts.forEach(e => {
         e.classList.remove('active');
      })
      e.classList.add('active');
      if (e.textContent.toLowerCase() === 'easy') {
         chances = 8;
         document.querySelector('footer').innerHTML = ``;
         gameOver = false;
         lifes.innerHTML = `
            <img class='img-1' src="imgs/heart.png" alt="heart">
            <img class='img-2' src="imgs/heart.png" alt="heart">
            <img class='img-3' src="imgs/heart.png" alt="heart">   
            <img class='img-4' src="imgs/heart.png" alt="heart">
            <img class='img-5' src="imgs/heart.png" alt="heart">
            <img class='img-6' src="imgs/heart.png" alt="heart">
            <img class='img-7' src="imgs/heart.png" alt="heart">`
      } else if (e.textContent.toLowerCase() === 'medium') {
         chances = 6;
         document.querySelector('footer').innerHTML = ``;
         gameOver = false;
         lifes.innerHTML = `
            <img class='img-1' src="imgs/heart.png" alt="heart">
            <img class='img-2' src="imgs/heart.png" alt="heart">
            <img class='img-3' src="imgs/heart.png" alt="heart">   
            <img class='img-4' src="imgs/heart.png" alt="heart">
            <img class='img-5' src="imgs/heart.png" alt="heart">`
      } else if (e.textContent.toLowerCase() === 'hard') {
         chances = 4;
         document.querySelector('footer').innerHTML = ``;
         gameOver = false;

         lifes.innerHTML = `
            <img class='img-1' src="imgs/heart.png" alt="heart">
            <img class='img-2' src="imgs/heart.png" alt="heart">
            <img class='img-3' src="imgs/heart.png" alt="heart"> `
      }
      document.querySelector(`#player-1-num`).value = '';

   })
})

document.querySelector(`#player-1-Btn`).addEventListener('click', () => {
   if (!gameOver) {
      let currentNum = document.querySelector(`#player-1-num`).value;
      if (currentNum) {
         chances--;
         document.querySelector(`.img-${chances}`).src = `imgs/black-heart.png`;
         if (parseInt(currentNum) === theNumber) {
            document.querySelector('footer').innerHTML = `<h1>You Won</h1>`;
            gameOver = true;
         } else if (currentNum < theNumber) {
            console.log(currentNum > (theNumber  - 11))
             if(currentNum > (theNumber  - 11)) {
            document.querySelector('footer').innerHTML = `<h1>Just a little Up, Almost There</h1>`;
                
             }else {
               document.querySelector('footer').innerHTML = `<h1>Too Small</h1>`;

             }

         } else if(currentNum > theNumber) {
            if(currentNum < (theNumber   + 11)) {
            document.querySelector('footer').innerHTML = `<h1>Just a little Low, Almot there</h1>`;

            }else {
               document.querySelector('footer').innerHTML = `<h1>Too Big</h1>`;

            }

         }
         if (chances <= 1) {
            document.querySelector('footer').innerHTML = `<h1>Sorry, You Lost All your Chances</h1>`;
            gameOver = true;

         }
      } else {
         document.querySelector('footer').innerHTML = `<h1>Enter a Number First</h1>`;

      }
      document.querySelector(`#player-1-num`).value = '';

   }

})
document.querySelector('input[type="button"]').addEventListener('click', () => {
   gameOver = false;
   theNumber = Math.floor(Math.random() * 101) + 1;
   chances = 6;
   document.querySelector('.medium').click()
   document.querySelector(`#player-1-num`).value = '';
console.log(theNumber);
})





