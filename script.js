// Inisialisasi state keranjang
let cart = [];

// Logika menambah produk ke keranjang
function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    updateCartUI();
}

// Logika kalkulasi total harga
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Format mata uang rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

// Update tampilan keranjang
function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    cartContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<i style="color: #888;">Keranjang kosong</i>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.style.marginBottom = '5px';
            itemElement.innerHTML = `<strong>${item.name}</strong> - ${item.quantity}x <span style="float:right;">${formatRupiah(item.price * item.quantity)}</span>`;
            cartContainer.appendChild(itemElement);
        });
    }
    
    totalElement.textContent = `Total: ${formatRupiah(calculateTotal())}`;
}

// Logika Dispatching ke WhatsApp
function checkoutWhatsApp(paymentMethod) {
    if (cart.length === 0) {
        alert("Keranjang masih kosong! Silakan tambah produk terlebih dahulu.");
        return;
    }

    // PENTING: Ganti nomor di bawah dengan nomor WhatsApp Admin Kantin Kontainer FakDa
    const adminPhoneNumber = "628XXXXXXXXXX"; 
    
    let message = "*Pesanan Baru Kantin Kontainer FakDa*%0A%0A";
    message += "Rincian Pesanan:%0A";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatRupiah(item.price * item.quantity)}%0A`;
    });
    
    message += `%0A*Total Pembayaran: ${formatRupiah(calculateTotal())}*%0A`;
    message += `Metode Pembayaran: *${paymentMethod}*%0A%0A`;

    if (paymentMethod === 'QRIS') {
        message += "_Saya akan melampirkan bukti transfer QRIS setelah pesan ini._";
    } else {
        message += "_Saya akan membayar tunai saat pengambilan pesanan._";
    }

    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset keranjang setelah proses checkout dimulai
    cart = [];
    updateCartUI();
}

// Event listener untuk tombol pembayaran
document.getElementById('btn-cash').addEventListener('click', () => checkoutWhatsApp('Tunai'));
document.getElementById('btn-qris').addEventListener('click', () => checkoutWhatsApp('QRIS'));
