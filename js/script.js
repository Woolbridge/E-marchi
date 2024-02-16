// script.js
let cartItems = [];
let cartCounter = document.getElementById('cart-counter');

function addToCart(productId) {
  // Simulate adding product to cart
  cartItems.push(productId);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = ''; // Clear previous items

  cartItems.forEach(itemId => {
    const item = document.createElement('li');
    item.textContent = `Product ${itemId}`;
    cartList.appendChild(item);
  });

  // Update cart counter
  cartCounter.textContent = cartItems.length;
}

function checkout() {
  // Simulate checkout process
  alert('Thank you for your purchase!');
  cartItems = []; // Clear cart
  updateCart();
}

// Hover animation for product description
const productDescriptions = document.querySelectorAll('.product p');
productDescriptions.forEach(description => {
  description.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
  });
  description.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});
