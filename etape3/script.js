"use strict";  // slide 51

// slides 37, 51
let lignes = 0;

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
    lignes++;
    const num = lignes;
    doInsertRowTable(num, nom, prenom, points);
}

// slides 33, 38
function consoleTableau() {
    console.log(persons);
}
