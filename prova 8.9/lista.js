var listar = document.querySelector("#tbody")

function adicionar(){
    let item = document.querySelector("#item").value;

    let row = document.createElement("tr")

    for(i = 0; i >= 1 ; i++){
        let col = document.createElement("td")
        col.innerHTML = item[i]

        row.appendChild(col)
    }

    listar.appendChild(row)
}