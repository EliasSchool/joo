document.addEventListener("DOMContentLoaded", onkoKirjautunut)

function onkoKirjautunut(){
    if (localStorage.getItem("kirjautunut") == "kyllä"){
        document.getElementById('tervetuloa_teksti').textContent += " " + localStorage.getItem("nimi"); 
        document.getElementById("kirjautumis_lomake").style.display = "none"; 
        document.getElementById("kirjaudu_ulos").style.display = ""
    }
    else {
        document.getElementById("kirjaudu_ulos").style.display = "none"  
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value); 
    localStorage.setItem("kirjautunut", "kyllä"); 
}

function kirjaudu_ulos(){
    localStorage.setItem("kirjautunut", "ei")
    document.getElementById("kirjautumis_lomake").style.display = ""
    document.getElementById("kirjaudu_ulos").style.display = "none"
    document.getElementById('tervetuloa_teksti').textContent = "Tervetuloa"
}