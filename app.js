const nomes = [];

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;
    if(nome==""||nome==" "){
        alert("Erro: Não é possível armazenar um nome vazio. O jogo será reiniciado!");
        location.reload();
    }
    else{
    nomes.push(nome);
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = `Amigos adicionados: ${nomes.join(", ")}`;
    }
    
}

function sortearAmigo(){
    if(nomes.length==1){
        alert("Há apenas um nome na lista de sorteio, por favor inserir mais de 1 nome")
        location.reload();
    }
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = `O amigo sorteado foi: ${nomes[indiceAleatorio]}`;

    const botao = document.getElementsByClassName("button-draw")[0];

    botao.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Reiniciar`;

    botao.onclick = function() {
        location.reload(); // Recarrega a página
    };
}
