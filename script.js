// LOADER

window.addEventListener("load", function () {

  setTimeout(function () {
    document.querySelector(".loader")
      .classList.add("hide");
  }, 1500);

});


// MENU FILTER

const filterButtons =
  document.querySelectorAll(".filters button");

const cards =
  document.querySelectorAll(".card");

filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    filterButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(function(card) {

      if (
        filter === "all" ||
        card.dataset.type === filter
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});


// CART

let cart = [];

const cartBox =
  document.getElementById("cart");

const count =
  document.getElementById("count");

const items =
  document.getElementById("items");

const total =
  document.getElementById("total");


// ADD TO CART

document.querySelectorAll(".add").forEach(function(button) {

  button.addEventListener("click", function() {

    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    cart.push({
      name: name,
      price: price
    });

    updateCart();

    button.innerText = "✓";

    setTimeout(function() {
      button.innerText = "+";
    }, 600);

  });

});


// UPDATE CART

function updateCart() {

  count.innerText = cart.length;

  items.innerHTML = "";

  let sum = 0;

  cart.forEach(function(item) {

    sum += item.price;

    const div =
      document.createElement("div");

    div.className = "cartItem";

    div.innerHTML =
      `<span>${item.name}</span>
       <strong>₹${item.price}</strong>`;

    items.appendChild(div);

  });

  total.innerText = "₹" + sum;

}


// OPEN CART

document
  .getElementById("cartBtn")
  .addEventListener("click", function() {

    cartBox.classList.add("open");

  });


// CLOSE CART

document
  .getElementById("close")
  .addEventListener("click", function() {

    cartBox.classList.remove("open");

  });


// CLOSE WHEN CLICKING OUTSIDE

cartBox.addEventListener("click", function(event) {

  if (event.target === cartBox) {
    cartBox.classList.remove("open");
  }

});


// CHECKOUT

document
  .querySelector(".checkout")
  .addEventListener("click", function() {

    if (cart.length === 0) {

      alert("Cart is empty! 🍔");

    } else {

      alert(
        "Order received! 🍔🔥\n\nThanks for choosing BITECRAFT!"
      );

    }

  });


// BURGER MOUSE EFFECT

const burger =
  document.querySelector(".burger");

document.addEventListener("mousemove", function(event) {

  const x =
    (event.clientX - window.innerWidth / 2) / 60;

  const y =
    (event.clientY - window.innerHeight / 2) / 60;

  burger.style.marginLeft = x + "px";
  burger.style.marginTop = y + "px";

});
