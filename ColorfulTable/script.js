function getRandomColor(){
    const letter= "0123456789ABCDEF"; //Colore HTML
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}


function createtab(){
    var x = document.getElementById("rows").value;
    var y = document.getElementById("columns").value;
        const table = document.createElement("table");
        table.border = 1;
        let counter = 1;
        for (let i = 0; i < x; i++){
            const tr = document.createElement("tr");
            for (let k = 0; k < y;k++){
                const td = document.createElement("td");
                td.textContent = counter++;
                td.addEventListener("click", function() {
                    td.style.backgroundColor = getRandomColor();})
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.getElementById("tabella").appendChild(table);

}


document.getElementById("finishbutton").onclick = createtab; 