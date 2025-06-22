

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

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Oculta o menu
    }
});
