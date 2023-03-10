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
// grid 
const gridEl = document.getElementById('grid');
// start and reset buttons 
const startButtonEl = document.getElementById('start-game');
const resetButtonEl = document.getElementById('reset-game');
// difficulty select tag
const difficultyInputEl = document.getElementById('difficulty');
// number of squares range input tag 
const selectedSquaresButtonEl = document.getElementById('square-number');
// selected squares span element - prints the selected squares
const selectedSquaresNumberEl = document.getElementById('selected-square-number');
// radio buttons
const difficultyRadio = document.getElementById('selezione-difficolta');
const generateSquaresRadio = document.getElementById('selezione-libera');

/*****************************************************
 *                                                   *
 *               EVENT LISTENERS                     *
 *                                                   *
 ****************************************************/


// RADIO BUTTON EVENT LISTENERS 
// Radio input per la select. Disabilita l'input di range se la difficoltà viene scelta dall'utente tramite SELECT.
difficultyRadio.addEventListener('click', function () {
    selectedSquaresButtonEl.disabled = true;
    difficultyInputEl.disabled = false;
})

// Radio per il range input button. Disabilita la SELECT se l'input range viene usato. Mostra selezione al click.
generateSquaresRadio.addEventListener('click', function () {
    selectedSquaresButtonEl.disabled = false;
    difficultyInputEl.disabled = true;
    selectedSquaresNumberEl.innerHTML = selectedSquaresButtonEl.value;
})

// Mostra selezione del range input.
selectedSquaresButtonEl.addEventListener('input', function () {
    selectedSquaresNumberEl.innerHTML = selectedSquaresButtonEl.value;
})

// start game button. Comincia il gioco in base alla difficoltà scelta dall'utente OPPURE in base al numero di quadrati selezionati.
startButtonEl.addEventListener('click',
    function () {
        const selectedDifficulty = difficultyInputEl.value;
        let difficultyValue = 1;
        // se la SELCT è attiva seleziono livello di difficoltà in base alla scelta utente 
        if (difficultyInputEl.disabled == false) {
            if (selectedDifficulty == 'medium') {
                difficultyValue = 2;
            } else if (selectedDifficulty == 'hard') {
                difficultyValue = 3;
            }
        } else {
            // altrimenti si finisce nell'input range e la griglia genererà un numero equivalente di quadrati all'input utente 
            difficultyValue = selectedSquaresButtonEl.value;
        }
        generateGrid(gridEl, difficultyValue);
    });

// reset game button 
resetButtonEl.addEventListener('click', function () {
    gridEl.innerHTML = '';
    selectedSquaresButtonEl.value = 100;
    selectedSquaresNumberEl.innerHTML = selectedSquaresButtonEl.value;
})



/*****************************************************
 *                                                   *
 *                  FUNCTIONS                        *
 *                                                   *
 ****************************************************/

/************************************************************************************************
 * 
 * Generates a grid based on the difficulty level 
 * ( 1 = easy, 2 = medium, 3 = hard, any other number = number of squares);
 * 
 * @param {HTMLElement} grid the HTML Element of the grid
 * @param {int} difficulty any number. If 1, 2 o 3 are specified the grid is set 
 * to work with 100, 81 or 49 squares.
 * 
 * 
************************************************************************************************/

function generateGrid(grid, difficulty) {
    // reset grid 
    grid.innerHTML = '';
    // STABILISCO LIVELLO DI DIFFICOLTA'
    let squareClass;
    let gridDimension;
    if (difficulty == 1) {
        gridDimension = 100;
        squareClass = 'easy'
    } else if (difficulty == 2) {
        gridDimension = 81;
        squareClass = 'medium'
    } else if (difficulty == 3) {
        gridDimension = 49;
        squareClass = 'hard'
    } else {
        // se non c'è un livello di difficoltà (1,2 o 3) , la dimensione della grid è pari al parametro inviato 
        gridDimension = difficulty;
        squareClass = 'easy'
    }

    // GENERO UN NUMERO DI QUADRATI PARI ALLA DIMENSIONE RICHIESTA 
    for (let i = 0; i < gridDimension; i++) {
        let newSquareEl = document.createElement('div');
        // AGGIUNGO QUADRATO CON CLASSE IN BASE ALLA DIFFICOLTA' 
        newSquareEl.classList.add('square', squareClass);
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