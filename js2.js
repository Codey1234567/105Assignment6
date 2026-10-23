let btn;
let colorlist = ["red", "orange", "yellow", "green", "blue", "orange", "gray", "black", "pink", "purple", "lime", "skyblue", "magenta"];
let rndColors = [];
let original = rndColors;
let rndnum = Math.floor(Math.random() * colorlist.length);
for (let i = 0; i < 10; i++) {
    rndColors.push(colorlist[rndnum]);
    rndnum = Math.floor(Math.random() * colorlist.length);
}

console.log(rndColors);

let buttonElements = [];
for (let i = 0; i < 10; i++) {
    btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
    btn.style.backgroundColor = rndColors[i];
    btn.style.width = "100px";
    btn.style.height = "50px";
    btn.style.margin = "10px";

    buttonElements.push(btn);
}
let p = document.createElement("P");
let select = document.createElement("SELECT");

p.textContent = "Choose option: ";
p.style.fontSize = "25px";
p.style.margin = "20px 10px";
p.appendChild(select);

select.style.fontSize = "20px";

select.appendChild(new Option("Choose", "choose"));
let red = select.appendChild(new Option("Red", "red"));
let green = select.appendChild(new Option("Green", "green"));
let blue = select.appendChild(new Option("Blue", "blue"));
let random = select.appendChild(new Option("Random", "random"));
let reset = select.appendChild(new Option("Reset", "reset"));
document.body.appendChild(p);

let submit = document.createElement("BUTTON");
submit.textContent = "Submit";
submit.style.width = "100px";
submit.style.height = "50px";
submit.style.fontSize = "20px";
submit.style.backgroundColor = "lime";
submit.style.margin = "10px";

submit.onclick = function() {
    if (red.selected) {
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].style.backgroundColor = "red";
        }
    }
    
    if (blue.selected) {
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].style.backgroundColor = "blue";
        }
    }
    
    if (green.selected) {
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].style.backgroundColor = "green";
        }
    }
    
    if (random.selected) {
        for (let i = 0; i < buttonElements.length; i++) {
            let newRandomIndex = Math.floor(Math.random() * colorlist.length);
            buttonElements[i].style.backgroundColor = colorlist[newRandomIndex];
        }
    }
    if (reset.selected) {
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].style.backgroundColor = original[i];
        }
    }
}

document.body.appendChild(submit);

