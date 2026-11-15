"use strict";  // slide 51

// slides 37, 51
let lignes = 0;

// slides 37, 51
let total_points = 0;

// slides 39-40
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// slide 46
init();

function init() {
    // slide 44
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

// slides 45-46
function doInsertRowTable(num, nom, prenom, points) {

    // slides 61-63
    const table = document.getElementById("table_persons");

    // slides 104-105
    const row = document.createElement("tr");

    // slide 107
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // slide 91
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");  // slide 107
    col5.append(checkbox);  // slide 98

    // slide 107
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // slide 98
    row.append(col1, col2, col3, col4, col5);

    table.append(row);
}

// slides 45-46
function doInsert(nom, prenom, points) {
    // slide 41
    total_points += points;
    lignes++;
    const num = lignes;
    doInsertRowTable(num, nom, prenom, points);
    update_summary();
}

// slides 33, 38
function consoleTableau() {
    console.log(persons);
}

// slides 61-63, 91
function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

// slides 20-21, 129-133
function doNewData() {
    // slides 61-63
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // slide 93
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // slides 42, 41
    if (nom.trim() === "" || prenom.trim() === "" || Number.isNaN(points)) {
        // slide 116
        alert("Formulaire incomplet !");
    } else {
        doInsert(nom, prenom, points);
        persons.push({ nom: nom, prenom: prenom, points: points });
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function deleteRow() {

    // slide 42
    if (lignes === 0) {
        alert("Le tableau est vide !");  // slide 116
        return;
    }

    // slides 76-77
    const table = document.querySelector("#table_persons");
    const checked = table.querySelectorAll(".col_chkbox input:checked");

    if (checked.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // slide 116
    if (!confirm("Supprimer " + checked.length + " ligne(s) ?")) {
        return;
    }

    // slides 76-77
    const rows = table.querySelectorAll("tr.row");

    // slide 44
    for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        const chk = row.querySelector(".col_chkbox input");
        if (chk.checked) {
            // slide 91
            const points = parseInt(row.cells[3].innerText);
            total_points -= points;
            lignes--;
            row.remove();  // slide 100
            persons.splice(i, 1);
        }
    }

    // slides 44, 46
    table.querySelectorAll("tr.row").forEach((row, index) => {
        row.cells[0].innerText = index + 1;
    });

    alert(checked.length + " ligne(s) supprimée(s) !");
    update_summary();
}

// slides 139, 46
document.getElementById("chk_all").addEventListener("change", (e) => {
    const rows = document.querySelectorAll("#table_persons tr.row");
    rows.forEach((row) => {
        if (row.style.display !== "none") {
            row.querySelector(".col_chkbox input").checked = e.target.checked;
        }
    });
});

// slides 139, 95
document.getElementById("search").addEventListener("input", (e) => {
    const texte = e.target.value.toLowerCase();
    const rows = document.querySelectorAll("#table_persons tr.row");
    rows.forEach((row) => {
        const contenu = (row.cells[1].innerText + " " + row.cells[2].innerText).toLowerCase();
        row.style.display = contenu.includes(texte) ? "" : "none";
    });
});

// slide 139
document.querySelectorAll(".form_field").forEach((champ) => {
    champ.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            doNewData();
        }
    });
});
