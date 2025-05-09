const form = document.getElementById('cadastro');
const nomeUsuario = document.getElementById('nomeUsuario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    // Cria a div para mostrar o nome
    const div = document.createElement('div');
    div.className = 'usuario';
    div.style.fontSize = '20px';
    div.style.fontWeight = 'bold'; 
    div.style.backgroundColor = '#ffdee9'
    div.style.margin = '0';
    div.padding = '30px'

    div.innerHTML = `🌺 ${senha} 💖`;

    nomeUsuario.appendChild(div);

    form.reset();
});