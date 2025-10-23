const cartIcon = document.getElementById("cart-icon");

const cart = document.getElementById("cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartEmpty = document.getElementById("cart-empty");
const cartTotal = document.getElementById("cart-total");

const checkoutBtn = document.getElementById("checkout-btn");

let itemsInCart = [];

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("active");
})
;

document.querySelectorAll(".order-btn, .order-button").forEach(button => {
  button.addEventListener("click", (o) => {
    const item = o.target.closest(".menu-item") || o.target.closest(".menu-card");

    const name = item.getAttribute("data-name");

    const price = parseFloat(item.getAttribute("data-price"));
    
    itemsInCart.push({ name, price });
    updateCart();
  } ) ;
} );

function updateCart() {
  cartItems.innerHTML = "";

  if (itemsInCart.length === 0) {
    cartEmpty.style.display = "block";
  } 
  else {
    cartEmpty.style.display = "none";
    itemsInCart.forEach((item, index) => {
      
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - $${item.price.toFixed(2)}
        <span class="remove-btn" data-index="${index}">❌</span>`;
      
        cartItems.appendChild(li);
    } );
  };

  cartCount.textContent = itemsInCart.length;
  
  const total = itemsInCart.reduce((sum, item) => sum + item.price, 0);
cartTotal.textContent = `Total: $${total.toFixed(2)}`;

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      
      const index = btn.getAttribute("data-index");
      
      itemsInCart.splice(index, 1);
      
      updateCart();
    });
  } );
}

checkoutBtn.addEventListener("click", () => {
  if (itemsInCart.length === 0) {
    alert("Your cart is empty!");
  } 
  else {
    alert("✅ Thank you for your order!" + " Your " + cartTotal.textContent);
    itemsInCart = [];
    updateCart();
  } });

  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});




