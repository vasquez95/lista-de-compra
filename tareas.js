document.getElementById('addItemBtn').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const quantityInput = document.getElementById('quantityInput');
    const itemText = itemInput.value.trim();
    const itemQuantity = quantityInput.value.trim();

    if (itemText !== "" && itemQuantity !== "") {
        addItem(itemText, itemQuantity);
        itemInput.value = "";
        quantityInput.value = "";
    }
});

function addItem(itemText, itemQuantity) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${itemText} - Cantidad: ${itemQuantity}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    document.getElementById('itemList').appendChild(li);
}
