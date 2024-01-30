


roulette = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];
number = ["zéro", "Trente-quatre", "dix", "vingt et un", "vingt-huit", "quatre", "dix-huit", "neuf", "vingt-sept", "vingt-deux", "douze", "trois", "dix-sept", 
"vingt", "onze", "Trente-trois", "deux", "dix", "Trente-deux", "double zéro", "quinze", "huit", "vingt-cinq", "un", "Trente et un", "vingt", "quatorze", "trente", 
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
        return "rouge, ";
    }
    else
    {
        return "noir, ";
    }
}

function even(val)
{
    if (val % 2 == 0)
    {
        return "pair, ";
    }
    else
    {
        return "impair, ";
    }
}

function spin() 
{
    randspin = Math.floor(Math.random() * 38);

    rand = roulette[randspin];

    if (rand == "00")
    {
        return "double zéro, noir, pair, passe";
    }
    else if (rand == 0)
    {
        return "zéro, rouge, impair, and manque";
    }
    else 
    {
        spin = number[randspin] + ", " + col(randspin) + even(rand) + forp(rand);
        console.log(spin);
    }
}

spin();