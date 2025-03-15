let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {  
    return l.includes(Number(n));
}

function adicionar() {
    let numero = Number(num.value);
    
    if (isNumero(numero) && !inLista(numero, valores)) {
        valores.push(numero);

        let item = document.createElement('option');
        item.text = `Valor ${numero} adicionado`;
        lista.appendChild(item);

        res.innerHTML = '';
    } else {
        alert('Número inválido ou já adicionado!');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length === 0) {
        alert('Adicione valores antes de finalizar');
        return;
    }

    let soma = valores.reduce((total, num) => total + num, 0);
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    let media = soma / valores.length;

    res.innerHTML = `
        <p>Total de números cadastrados: ${valores.length}</p>
        <p>Maior valor: ${maior}</p>
        <p>Menor valor: ${menor}</p>
        <p>Soma dos valores: ${soma}</p>
        <p>Média dos valores: ${media.toFixed(2)}</p>
    `;
}

// Função para alternar a exibição do menu suspenso
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// Função para fechar o menu suspenso
function fecharMenu() {
    document.getElementById('menu').style.display = "none";
}
