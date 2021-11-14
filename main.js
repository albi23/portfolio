window.onload = ()=>{
document.getElementById("age").innerText = (new Date().getFullYear() -1998)+ " years"
}

let idActiveEl = "prof";

function changeActive(isDiv) {
    if (isDiv === idActiveEl) {
        return;
    }
    let latest = document.getElementById(String(idActiveEl));
    if (latest && latest.classList) {
        latest.classList.toggle("active");
    }

    let elem = document.getElementById(isDiv);
    if (elem && elem.classList) {
        elem.classList.toggle("active");
    }
    idActiveEl = isDiv;
}

