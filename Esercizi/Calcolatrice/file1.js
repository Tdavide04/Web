/*
var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof (B) + "\n");


A = 3
console.log("Il tipo della var A è " + typeof(A) + "\n")
A = "Ciao"
console.log("Il tipo della var A è " + typeof(A) + "\n")

*/

/*
var iPosizione;
var sMiaStringa;
sMiaStringa = "peppez"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
    console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");

*/

/*
sMiaStringa = "peppfez"
iPosizione = sMiaStringa.indexOf("f");
if((iPosizione > 0))
    console.log("La f è presente")
else
	console.log("La f non è presente");

*/

function TerminaConLettera(sStringa, sTermine)
{
    len = sStringa.length
    len_termine = sTermine.length
    iPosizione = sStringa.indexOf(sTermine, len - len_termine)
    if (iPosizione>= 0)
        return 1
    else
        return 0
}

bRet = TerminaConLettera("paperino", "u")
if (bRet == 1)
    console.log("paperino termina con u")
else
console.log("paperino non termina con u")
