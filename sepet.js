// Sepet verilerini saklamak için bir dizi
const cart = [];
let totalPrice = 0;

// "Sepete Ekle" butonlarına tıklama olayını dinle
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Sepete ürünü ekle
            cart.push({ name: productName, price: productPrice });

            // Toplam fiyatı güncelle
            totalPrice += productPrice;

            // Sepeti güncelle
            updateCart();
        });
    });
});

// Sepeti güncelleyen fonksiyon
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Sepet listesini temizle
    cartItems.innerHTML = '';

    // Her bir ürünü listeye ekle
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${item.name}</span>
            <span class="badge bg-primary rounded-pill">${item.price}₺</span>
        `;
        cartItems.appendChild(li);
    });

    // Toplam fiyatı güncelle
    totalPriceElement.textContent = totalPrice.toFixed(2);
}