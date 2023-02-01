// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


/*****************************************************
 *                                                   *
 *                    ON LOAD                        *
 *                                                   *
 ****************************************************/


// DEFINE HTML ELEMENTS 
const gridEl = document.getElementById('grid');
const startButtonEl = document.getElementById('start-game');

// BUTTON EVENT LISTENER 
startButtonEl.addEventListener('click', function () {
    generateGrid(gridEl, 100);
})

/*****************************************************
 *                                                   *
 *                  FUNCTIONS                        *
 *                                                   *
 ****************************************************/

// generateGrid(gridEl, 100)

function generateGrid(grid, dimension) {
    // reset grid 
    grid.innerHTML = ''
    // GENERO UN NUMERO DI QUADRATI PARI ALLA DIMENSIONE RICHIESTA 
    for (let i = 0; i < dimension; i++) {
        let newSquareEl = document.createElement('div');
        newSquareEl.classList.add('square');
        // INSERISCO NUMERO DEL QUADRATO 
        newSquareEl.append(i + 1);
        // AGGIUNGO QUADRATO ALLA GRIGLIA 
        grid.append(newSquareEl);
        // AGGIUNGO EVENT LISTENER PER IL CLICK UTENTE 
        newSquareEl.addEventListener('click',
            function () {
                // ATTIVO/DISATTIVO CLASSE .active 
                this.classList.toggle('active');
                // LOGGO NUMERO DEL QUADRATO IN CONSOLE
                console.log(this.innerHTML);
            }
        )

    }

}