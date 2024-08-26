document.getElementById('play').addEventListener('click', function() {
    const grid = document.getElementById('grid');
    const scoreElement = document.getElementById('score');
    grid.innerHTML = '';

    let size;
    const difficulty = document.getElementById('difficulty').value;
    let score = 0;

     // Aggiorna il punteggio visualizzato
     scoreElement.innerText = score;

    if (difficulty == '1') {
        size = 100;
    } else if (difficulty == '2') {
        size = 81;
    } else if (difficulty == '3') {
        size = 49;
    }

    const bombs = generateBombs(size);
    console.log('Bombs: ', bombs); // Verifica in console

    grid.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;

    for (let i = 1; i <= size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = i;

        cell.addEventListener('click', function() {
            if (!this.classList.contains('clicked')) {
                this.classList.add('clicked');
                if (bombs.includes(i)) {
                    this.style.backgroundColor = 'red'; // Cella rossa = bomba
                    alert(`Game Over! Hai calpestato una bomba. Punteggio: ${score}`); // Logica per terminare la partita           
                    console.log('Game Over');
                     // Mostra tutte le bombe alla fine del gioco
                     document.querySelectorAll('.cell').forEach(cell => {
                        if (bombs.includes(parseInt(cell.innerText))) {
                            cell.style.backgroundColor = 'red';
                        }
                    });
                } else {
                    this.style.backgroundColor = 'blue'; // Cella sicura
                    score++;scoreElement.innerText = score; // Aggiorna il punteggio visibile
                    if (score === size - 16) {
                        alert(`Hai vinto! Punteggio: ${score}`);
                    }
                    console.log(`Score: ${score}`);
                }
            }
        });
        grid.appendChild(cell);
    }
});

function generateBombs(size) {
    const bombs = new Set();
    while (bombs.size < 16) {
        const bomb = Math.floor(Math.random() * size) + 1;
        bombs.add(bomb);
    }
    return Array.from(bombs);
}