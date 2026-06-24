document.addEventListener("DOMContentLoaded", function(){
    const data = new Date();
    const dataElemento = document.getElementById("data");

    if(dataElemento != null){
        dataElemento.textContent = "Hoje \u00e9 " + data.toLocaleDateString("pt-BR");
    }

    let visitas = localStorage.getItem("visitas");

    if(visitas == null){
        visitas = 1;
    }else{
        visitas++;
    }

    localStorage.setItem("visitas", visitas);

    console.log("Voc\u00ea visitou este site " + visitas + " vezes.");

    const jogos = document.querySelectorAll(".jogos-img img");

    jogos.forEach(function(jogo){
        jogo.addEventListener("click", function(){
            if(jogo.style.transform == "scale(1.3)"){
                jogo.style.transform = "scale(1)";
            }else{
                jogo.style.transform = "scale(1.3)";
            }

            alert("Voc\u00ea selecionou: " + jogo.alt);
        });
    });
});
