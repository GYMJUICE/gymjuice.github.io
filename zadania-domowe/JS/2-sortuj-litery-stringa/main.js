function sortString(napis){
    let tekst = napis;
    let stringPodzial = [];
    stringPodzial = tekst.split('').sort().join("");
    console.log(stringPodzial);
}
sortString("Akademia 108");
 

const arr = ["Kocham" , "Java" , "Script", "Ponad", "Dupa"];
const arr1 =  arr.sort(function (a, b) {
    return (" " + a).localeCompare(b);
});
console.log(arr1);


// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.

// Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach