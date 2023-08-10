const btn = document.querySelector("button");
const div = document.querySelector("div[style='padding: 5px; background-color: green;']");


div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

btn.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!");
})

mostrarAlerta = null;
