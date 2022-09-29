var searchButton = document.querySelector(".search-button");

var cartCount = document.querySelector("#cart-count");

var bookButton = document.querySelector(".book-btn");

var hobbitButton = document.querySelector("#hobbit-btn");

var lonesomeButton = document.querySelector("#lonesome-btn");

var suttreeButton = document.querySelector("#suttree-btn");

var fireButton = document.querySelector("#fire-btn");

var facebook = document.querySelector("#facebook");

var instagram = document.querySelector("#instagram");

var twitter = document.querySelector("#twitter");

var emailInput = document.querySelector("input");

var signUP = document.querySelector("#sign-up");

var footer = document.querySelector("footer");

var newsletter = document.querySelector("#newsletter");

var count = 0;

function addToCartCount() {
  count = count + 1;
   if (count === 1) {
    cartCount.textContent = "1 item"
  }
  else if (count === 2) {
    cartCount.textContent = "2 items"
  }
    else if (count === 3) {
    cartCount.textContent = "3 items"
  }
    else if (count === 4) {
    cartCount.textContent = "4 items"
  }
}

bookButton.addEventListener("click", addToCartCount);

hobbitButton.addEventListener("click", addToCartCount);

lonesomeButton.addEventListener("click", addToCartCount);

suttreeButton.addEventListener("click", addToCartCount);

fireButton.addEventListener("click", addToCartCount);

function emailSignUp() {
  var confirmationMsg = document.createElement('p')
  confirmationMsg.textContent = "Thank you for subscribing!", + emailInput.value
newsletter.remove();
  
footer.appendChild(confirmationMsg)
}

signUP.addEventListener("click", emailSignUp);