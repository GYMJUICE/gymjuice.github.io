
let mojaTablica = [0,1,2,3,4,5];
function mojaFunkcja(parametr){
let kwadrat = 0;
for(let i=0; i < parametr.length; i++){
kwadrat += Math.pow(parametr[i], 2);
}
console.log(kwadrat);
}
mojaFunkcja(mojaTablica);




// Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math.


// let mojaTablica = [65, 44, 12, 4];
// function myFunction(parametr){
// let dodawanie = 0;
// let mnozenie = 1;
// for (let i=0; i < parametr.length; i++){
// dodawanie += parametr[i];
// mnozenie *= parametr[i];
// }
// console.log('Suma:' + dodawanie + ', Iloczyn:' + mnozenie); 
// }
// myFunction(mojaTablica);


