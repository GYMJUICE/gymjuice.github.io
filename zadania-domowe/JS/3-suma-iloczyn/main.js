let mojaTablica = [65, 44, 12, 4];
function myFunction(parametr){
let dodawanie = 0;
let mnozenie = 1;
for (let i=0; i < parametr.length; i++){
dodawanie += parametr[i];
mnozenie *= parametr[i];
}
console.log('Suma:' + dodawanie + ', Iloczyn:' + mnozenie); 
}
myFunction(mojaTablica);


// let mojaTablica = [1, 2, 3, 4, 5, 6];
//     mojaTablica.forEach(mojaFunkcja);
// function mojaFunkcja (tablica){
//     sum += tablica;
//     console.log(sum);
// }


// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - użyj pętli for lub forEach w zadaniu.