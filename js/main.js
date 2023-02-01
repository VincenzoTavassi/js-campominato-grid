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
const resetButtonEl = document.getElementById('reset-game');
// const difficultyEl = document.getElementById('difficulty').value;
// console.log(difficultyEl);

// BUTTON EVENT LISTENERS 

// start game button 
startButtonEl.addEventListener('click',
    function () {
        const difficultyEl = document.getElementById('difficulty').value;
        let difficultyValue = 1;
        if (difficultyEl == 'medium') {
            difficultyValue = 2;
        } else if (difficultyEl == 'hard') {
            difficultyValue = 3;
        }
        generateGrid(gridEl, difficultyValue);
    });

// reset game button 
resetButtonEl.addEventListener('click', function () {
    gridEl.innerHTML = '';
})



/*****************************************************
 *                                                   *
 *                  FUNCTIONS                        *
 *                                                   *
 ****************************************************/

// generateGrid(gridEl, 100)

/****************************************************
 * 
 * Generates a grid based on the difficulty level 
 * ( 1 = easy, 2 = medium, 3 = hard);
 * 
 * @param {HTMLElement} grid the HTML Element of the grid
 * @param {int} difficulty a number betwen 1, 2 and 3
 * 
 * 
****************************************************/

function generateGrid(grid, difficulty) {
    // reset grid 
    grid.innerHTML = ''
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