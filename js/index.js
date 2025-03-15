// Atualiza o horário em tempo real
function atualizarHorario() {
    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    document.getElementById('horario').innerText = `Hora Atual: ${horas}:${minutos}`;
}
setInterval(atualizarHorario, 1000);

// Verifica idade e exibe o menu suspenso
function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let fano = document.getElementById('txtano');
    let nascimento = Number(fano.value);

    if (fano.value.length == 0 || nascimento <= 0 || nascimento > anoAtual) {
        alert("Ano de nascimento inválido!");
    } else {
        let idade = anoAtual - nascimento;
        alert(`Você tem ${idade} anos.`);
        document.getElementById('menu').style.display = "block";
    }
}

// Fecha o menu suspenso
function fecharMenu() {
    document.getElementById('menu').style.display = "none";
}
