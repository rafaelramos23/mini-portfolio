//passo 1 - identificar abas
const abas = document.querySelectorAll(".aba");

//passo 2 - percorrer abas
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba);
        mostrarInformacaoAba(aba);
        
    });
});

function selecionarAba(aba){

    //passo 3 - quando clicar desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar nova aba com selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacaoAba(aba){
      //passo 5 - esconder conteudo anterior
      const informacaoSelecionada = document.querySelector(".informacao.selecionado");
      informacaoSelecionada.classList.remove("selecionado");

      //passo 6 - mostrar conteudo da aba selecionado
      const idDoElementoDeInformcaoesDaAba = `informacao-${aba.id}`
      
      const informacaoASerMostrada =  document.getElementById(idDoElementoDeInformcaoesDaAba);
      informacaoASerMostrada.classList.add("selecionado");
}