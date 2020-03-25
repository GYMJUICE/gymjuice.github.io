
function loaddata(){
fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
  .then (response => response.json())
  .then (response => {
        console.log(response);  
        //    Tworzę div
            let createDiv = document.createElement('div')
        //    Nadaje klasę
            createDiv.setAttribute('class', 'daneUsera')
        //    Listuje dane które sie mają wyświetlić
            createDiv.innerHTML = 'Imię: ' + response.imie + ',<br/> ' + 'Nazwisko: ' + response.nazwisko + ',<br/> ' + 'Zawód: ' + response.zawod + ',<br/> ' + 'Firma: ' + response.firma
        //    Wywołuje dane do wyświetlenia w utworzonym divie
            document.body.appendChild(createDiv)    
                   
        })
    }    
 
test    

// Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

// Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

// https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

// Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

// Zadanie domowe zrób za pomocą GitHub Pages.

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery