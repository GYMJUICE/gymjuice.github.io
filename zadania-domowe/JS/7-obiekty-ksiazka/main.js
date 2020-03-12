class Ksiazka {
    constructor(tytul, autor, Boolean){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = Boolean;
}
opiszKsiazke(){
    if(this.przeczytana === true){
        return('Książka ma tytuł' + this.tytul + ', autorem jest' + this.autor + 'i została przeczytana.');
    }
    else {
        return('Książka ma tytuł' + this.tytul + ', autorem jest' + this.autor + 'i nie została przeczytana.');
    }
}
}
let wiedzmin = new Ksiazka('Wiedżmin', 'Andrzej Sapkowski', true);
let sycylijczyk = new Ksiazka('Sycylijczyk', 'Mario Puzo', false);
let pielgrzym = new Ksiazka('Pielgrzym', 'Terry Hayes', false);

let ksiazki = [wiedzmin, sycylijczyk, pielgrzym];

function iloscPrzeczytanych(books) {
    var suma = 0;
    
    for(var i=0; i<ksiazki.length; i++) {
      if (ksiazki[i].przeczytana === true) {
        suma += 1;
       } 
      
      console.log(ksiazki[i].opiszKsiazke());
    }
  
    console.log('Przeczytane: ' + suma);
  }

iloscPrzeczytanych(ksiazki);



    
   

     
 



