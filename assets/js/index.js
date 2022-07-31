/*

OBJETIVO 1: quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    OK PASSO 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - - const btnAvancar = document.getElementById('btn__avancar');
    PASSO 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - - btnAvancar.addEventListener('click')
    PASSO 3 - fazer aparecer o próximo cartão da lista
    - - itemAtual++;
        itens[itemAtual].classList.add('conteudo__item--selecionado');
    PASSO 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2: quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    OK PASSO 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - - const btnAvancar = document.getElementById('btn__voltar');
    PASSO 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - - btnAvancar.addEventListener('click')
    PASSO 3 - fazer aparecer o cartão anterior da lista
    PASSO 4 - buscar o cartão que está selecionado e esconder

*/
const btnAvancar = document.getElementById('btn__avancar');
const btnVoltar = document.getElementById('btn__voltar');
const itens = document.querySelectorAll('.conteudo__item');
let itemAtual = 0;

function esconderItemSelecionado(){
    const itemSelecionado = document.querySelector('.conteudo__item--selecionado');
    itemSelecionado.classList.remove('conteudo__item--selecionado');
}

function mostrarItem(indiceItem){
    itens[indiceItem].classList.add('conteudo__item--selecionado');
}

btnAvancar.addEventListener('click', function(){

    if (itemAtual === itens.length - 1) return;

    esconderItemSelecionado();

    itemAtual++;
    
    mostrarItem(itemAtual);
})

btnVoltar.addEventListener('click', function(){

    if (itemAtual === 0) return;

    esconderItemSelecionado();

    itemAtual--;

    mostrarItem(itemAtual);  
})
