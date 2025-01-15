
//mnefj 
let cart = [];

let totalPrice = 0;


function addToCart(item, price) {

    cart.push({ item, price });

    totalPrice += price;

    updateCart();

}


function removeFromCart(item) {

    const index = cart.findIndex(cartItem => cartItem.item === item);

    if (index !== -1) {

        totalPrice -= cart[index].price;

        cart.splice(index, 1);

    }

    updateCart();

}


function updateCart() {

    const cartElement = document.getElementById("cart");

    const totalElement = document.getElementById("total");


    // Clear existing cart contents

    cartElement.innerHTML = '';


    // Populate cart with items

    cart.forEach(cartItem => {

        const li = document.createElement("li");

        li.textContent = `${cartItem.item} - $${cartItem.price}`;


        const removeButton = document.createElement("button");

        removeButton.textContent = "Delete";

        removeButton.onclick = () => removeFromCart(cartItem.item);


        li.appendChild(removeButton);

        cartElement.appendChild(li);

    });


    // Update total price

    totalElement.textContent = totalPrice.toFixed();

}