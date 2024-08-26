document.getElementById('play').addEventListener('click', function() {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // Svuota la griglia esistente

    let size;
    const difficulty = document.getElementById('difficulty').value;

    if (difficulty == '1') {
        size = 10; // Griglia 10x10
    } else if (difficulty == '2') {
        size = 9; // Griglia 9x9
    } else if (difficulty == '3') {
        size = 7; // Griglia 7x7
    }

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = i;
        cell.addEventListener('click', function() {
            this.classList.add('clicked');
            console.log(`Cell clicked: ${i}`);
        });
        grid.appendChild(cell);
    }
});