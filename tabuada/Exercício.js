function tabuada() {
    const numStr = document.getElementById('num').value;
    const num = parseInt(numStr); 
    const saida = document.getElementById('saida');

    if (isNaN(num) || num < 1) {
        saida.innerHTML = "Insira um número válido.";
        return; 
    }

    let html = '';
    
    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        const linha = `${num} x ${i} = ${resultado}<br>`;
        html += linha;
    }

    saida.innerHTML = html;
}
window.onload = tabuada;