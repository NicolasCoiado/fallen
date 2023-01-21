var titulos = document.querySelector("#sec-titulos")
function onLoad(){
    titulos.style.display= "none"
}

function verTitulos(){
    if(titulos.style.display=="none"){
        titulos.style.display= "flex"
    }else{
        titulos.style.display= "none"
    }
}