

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

// MENU LATERAL
document.addEventListener('DOMContentLoaded', function () {
  const trigger = document.getElementById('menu-trigger');
  const menu = document.getElementById('side-menu');

  if (trigger && menu) {
    trigger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }
});


