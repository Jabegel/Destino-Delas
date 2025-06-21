// script.js
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function toggleDetalhes(id) {
    const detalhesDiv = document.getElementById(`detalhes-${id}`);
    // Se você usa a lógica de fechar outros menus:
    document.querySelectorAll('.detalhes-viagem.show').forEach(div => {
        if (div.id !== `detalhes-${id}`) {
            div.classList.remove('show');
        }
    });
    detalhesDiv.classList.toggle('show');
}