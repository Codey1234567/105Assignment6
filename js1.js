let num1 = window.prompt("Pick a number: ");
var p;
for (let i = 1; i <= num1; i++) {
    p = document.createElement("P");
    p.innerHTML = `${i} * ${num1} = ${i * num1}`;
    document.body.appendChild(p);
    p.style.textAlign = "center";
    p.style.fontSize = "25px";
    p.style.border = "2px solid black";
    p.style.margin = "0";
    p.style.padding = "5px";
    if (i % 2 === 0) {
        p.style.backgroundColor = "white";
    } else {
        p.style.backgroundColor = "gray";
    }
}