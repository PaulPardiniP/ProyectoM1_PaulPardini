const botonpaleta = document.getElementById("btnmain");
const paletaOculta = document.getElementById("color-on");

botonpaleta.addEventListener("click", function() {
    paletaOculta.style.display ="flex";
    
    paletaOculta.scrollIntoView ({behavior:"smooth"});
} 
);

const optionpaleta = document.getElementById("palette-size");
const botonpaletaya = document.getElementById("actionbtn");
const resultadoscolores = document.querySelector(".color-yes");
const feedback = document.getElementById("feedback-m");

botonpaletaya.addEventListener("click", function() {
    const cantidadColores = optionpaleta.value;

    resultadoscolores.innerHTML ="";
    resultadoscolores.style.display ="flex";

    for(let i=0; i<cantidadColores; i++) {
        const colorHex = "#" + Math.floor(Math.random()*16777215)
        .toString(16) .padStart(6,"0");
    
        const tarjetaColor = document.createElement ("div");
        tarjetaColor.classList.add("color-card");
        tarjetaColor.style.backgroundColor = colorHex;
        tarjetaColor.textContent = colorHex;

        resultadoscolores.appendChild(tarjetaColor);}
        
        setTimeout(function() {
        resultadoscolores.scrollIntoView( {
            behavior: "smooth"
        });
    },400);

    feedback.style.display = "flex";
    feedback.style.opacity = "1";
    setTimeout(function() {
        feedback.style.opacity = "0";
    },2000);

    });



