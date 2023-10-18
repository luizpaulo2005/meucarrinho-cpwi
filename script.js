let valor = 0;
let produtos = [
    {product_name: 'Produto 1', value: 9.99, qtd: 1},
    {product_name: 'Produto 2', value: 19.99, qtd: 2},
    {product_name: 'Produto 3', value: 29.99, qtd: 3},
];
const product_name = document.querySelector('#product_name');
const valuee = document.querySelector('#value');
const qtd = document.querySelector('#qtd')
const addBtn = document.querySelector('#addBtn');

const adicionar = () => {
    if (product_name.value == '' || value.value <= 0 || qtd.value <= 0) {
        alert('Preencha todos os campos');
    } else {
        produtos.push({product_name: product_name.value, value: valuee.value, qtd: qtd.value})
        product_name.value = ''
        valuee.value = ''
        qtd.value = ''
        loadProducts();
        valorTotal();
    }
}

const loadProducts = () => {
    if (produtos.length > 0) {
        document.querySelector('#produtos').innerHTML = ''
        for ([index, item] of produtos.entries()){
            const newProduct = document.createElement('tr')
            newProduct.id = index
            newProduct.innerHTML = `
            <td class='flex items-center gap-2'>
            <img class='transition-colors p-[3px] rounded-md hover:cursor-pointer hover:bg-red-500' src='./trash-2.png' onclick=removeProduct(${index})> 
            ${item.product_name}
            </td>
            <td class='text-center'>${item.qtd}</td>
            <td class='text-center'>R$ ${item.value}</td> 
            <td class='text-end'>R$ ${item.value * item.qtd}</td>
            `
            document.querySelector('#produtos').appendChild(newProduct);
        }
        valorTotal();
    } else {
        document.querySelector('#produtos').innerHTML = 'Não há produtos cadastrados';
    }
}

const valorTotal = () => {
    if (produtos.length > 0) {
        document.querySelector('#finalValue').innerHTML = ''
        valor = 0
        for (item of produtos) {
            valor += parseFloat(item.value * item.qtd)
        }

    document.querySelector('#finalValue').innerHTML += `Valor Total: R$${valor.toFixed(2)}`
    } else {
        document.querySelector('#finalValue').innerHTML = 'Valor Total: R$0,00'
    }
}

const removeProduct = (id) => {
    produtos.splice(id, 1)
    loadProducts()
    valorTotal()
}

document.querySelector('body').onload = loadProducts();
addBtn.addEventListener('click', adicionar)