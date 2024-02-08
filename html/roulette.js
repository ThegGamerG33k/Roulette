"use strict"


let roulette = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];
let number = ["zero", "Trente-quatre", "dix", "vingt et un", "vingt-huit", "quatre", "dix-huit", "neuf", "vingt-sept", "vingt-deux", "douze", "trois", "dix-sept", 
"vingt", "onze", "Trente-trois", "deux", "dix", "Trente-deux", "double zero", "quinze", "huit", "vingt-cinq", "un", "Trente et un", "vingt", "quatorze", "trente", 
"sept", "vingt-quatre", "vingt-neuf", "Trente-cinq", "six", "treize", "vingt-trois", "dix-neuf", "cinq", "Trente-six"];

function forp(val)
{
    if (val >18 || val == "00")
    {
        return "passe";
    }
    else
    {
        return "manque";
    }

}

function col(val)
{
    if (val % 2 == 0)
    {
        return "rouge";
    }
    else
    {
        return "noir";
    }
}

function even(val)
{
    if (val % 2 == 0)
    {
        return "pair";
    }
    else
    {
        return "impair";
    }
}


function spin() 
{
    let randspin = Math.floor(Math.random() * 38);

    let rand = roulette[randspin];

    let spinValue = [number[randspin], col(randspin), even(rand), forp(rand)]; 
    let s = JSON.stringify(spinValue);
    sock.send(s);
}

function childAdd(spinValue)
{
    let elem = document.createElement("tr");
    elem.className = "row";

    for (let i = 0; i < 4; i++)
    {
        let data = document.createElement("td");
        data.appendChild(document.createTextNode(spinValue[i]));
        data.className = spinValue[i];
        elem.appendChild(data);
    }

    let table = document.getElementById("roulette");
    table.appendChild(elem);
    spinValue = [];
}