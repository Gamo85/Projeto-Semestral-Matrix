// Adicionando produtos
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    
    let products = JSON.parse(localStorage.getItem('products')) || [];
    
    products.push({ name: productName, price: productPrice });
    localStorage.setItem('products', JSON.stringify(products));
    
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    
    displayProducts();
});

// Cadastrando os clientes
document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;
    const clientEmail = document.getElementById('clientEmail').value;

    let clients = JSON.parse(localStorage.getItem('clients')) || [];

    clients.push({ name: clientName, email: clientEmail });
    localStorage.setItem('clients', JSON.stringify(clients));

    document.getElementById('clientName').value = '';
    document.getElementById('clientEmail').value = '';

    displayClients();
});

// Exibir produtos
function displayProducts() {
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    productTable.innerHTML = '';
    
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    products.forEach((product, index) => {
        const row = productTable.insertRow();
        row.insertCell(0).innerText = product.name;
        row.insertCell(1).innerText = `R$ ${parseFloat(product.price).toFixed(2)}`;
        
        // Botão de remover
        const removeCell = row.insertCell(2);
        const removeButton = document.createElement('button');
        removeButton.innerText = "Remover";
        removeButton.onclick = function() {
            removeProduct(index);
        };
        removeCell.appendChild(removeButton);
    });
}

// Remover produto
function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);  // Remove o produto pelo índice
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();  // Atualiza a lista exibida
}

// Exibir Clientes
function displayClients() {
    const clientTable = document.getElementById('clientTable').getElementsByTagName('tbody')[0];
    clientTable.innerHTML = '';
    
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    
    clients.forEach(client => {
        const row = clientTable.insertRow();
        row.insertCell(0).innerText = client.name;
        row.insertCell(1).innerText = client.email;
    });
}


window.addEventListener('pageshow', function() {
    displayProducts();
    displayClients();
});
//

