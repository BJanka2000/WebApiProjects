
window.onload = function letöltés() {
    fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {

    let k = document.getElementById("kerdes")

    for (var i = 0; i < d.length; i++) {

        console.log(d[i].question)

        let kérdés = document.createElement("div")
        kérdés.innerHTML = d[i].question
        k.appendChild(kérdés)
        

    }


}