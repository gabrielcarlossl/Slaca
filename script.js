function botaoVerMais(){
    let pontos = document.getElementById("pontos")
    let maisTexto = document.getElementById("mais")
    let verMais = document.getElementById("verMais")

    if (pontos.style.display === "none"){

        pontos.style.display = "inline"
        maisTexto.style.display = "none"
        verMais.innerHTML = "Ver Mais"
    }else{
        pontos.style.display = "none"
        maisTexto.style.display = "inline"
        verMais.innerHTML = "Ver Menos"
    }
}