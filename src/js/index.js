
const botaoMostrar = document.querySelector('.btn-mostrar-projetos');
const botaoEsconder = document.querySelector('.btn-esconder-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrar.addEventListener('click', () => {
    MostrarMaisProjetos();

    botaoMostrar.classList.add('remover');
    botaoEsconder.classList.remove('remover');
});

botaoEsconder.addEventListener('click', () => {
    MostrarMenosProjetos();
    botaoEsconder.classList.add('remover');
    botaoMostrar.classList.remove('remover');
});



function MostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

