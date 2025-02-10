const wrapper = document.querySelector(".sliderWrapper");
console.log(wrapper);
wrapper.style.transform = "translateX(10px)";
const menuItem = document.querySelectorAll(".MenuItem");
menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('span:nth-child(2)').innerText.replace('$', ''));
        totalPrice += price;
    });
    const cartTotalElement = document.getElementById('cartTotal');
    cartTotalElement.innerText = `$${totalPrice.toFixed(2)}`;
}

function addToCart(productName, productPrice) {
    const cartItems = document.querySelector('.cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span>${productName}</span>
        <span>${productPrice}</span>
    `;
    cartItems.appendChild(cartItem);
    updateCartTotal();
}

function proceedToPayment() {
    alert("Redirecting to payment site...");
    clearCart();
}

function clearCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = ''; 
    updateCartTotal(); 
}

const addToCartButtons = document.querySelectorAll('.card button');
const buyNowButtons = document.querySelectorAll('.buy');
const checkoutButton = document.querySelector('.paybutton');
const closeButton = document.querySelector('.close');
const paymentModal = document.querySelector('.payments');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.card');
        const productName = product.querySelector('h1').innerText;
        const productPrice = product.querySelector('.price').innerText;
        addToCart(productName, productPrice);
    });
});


checkoutButton.addEventListener('click', () => {
    paymentModal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});


buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.slideritem');
        const productName = product.querySelector('.slidertitle').innerText;
        const productPrice = product.querySelector('.sliderprice').innerText;
        addToCart(productName, productPrice);
    });
});

checkoutButton.addEventListener('click', () => {
    paymentModal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});
