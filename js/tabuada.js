function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Campo vazio! Digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}

// menu suspenso
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function fecharMenu() {
    document.getElementById('menu').style.display = "none";
}
