document.addEventListener("DOMContentLoaded", onkoKirjautunut)

function onkoKirjautunut(){
    let kirjautunut = "kyllä"
    if (kirjautunut == "kyllä"){
        document.getElementById('tervetuloa_teksti').textContent += " " + localStorage.getItem("nimi")
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value); 
}