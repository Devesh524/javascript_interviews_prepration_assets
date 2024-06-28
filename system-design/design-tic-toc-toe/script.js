document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const status = document.getElementById('status');
  const reset = document.getElementById('reset');
  const cells = Array.from(document.getElementsByClassName('cell'));
  let currentPlayer = 'X';
  let moves = 0;
  let winner = false;

  status.innerText = `Player ${currentPlayer}'s turn`;

  reset.addEventListener('click', () => {
    cells.forEach((cell) => {
      cell.innerText = '';
    });
    currentPlayer = 'X';
    moves = 0;
    winner = false;
    status.innerText = `Player ${currentPlayer}'s turn`;
  });

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.innerText || winner) return;
      cell.innerText = currentPlayer;
      moves++;
      checkWinner();
      if (winner) {
        status.innerText = `Player ${currentPlayer} wins!`;
        return;
      }
      if (moves === 9) {
        status.innerText = "It's a tie!";
        return;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.innerText = `Player ${currentPlayer}'s turn`;
    });
  });

  const checkWinner = () => {
    cells.forEach((cell, index) => {
      if (index % 3 === 0) {
        if (
          cell.innerText &&
          cell.innerText === cells[index + 1].innerText &&
          cell.innerText === cells[index + 2].innerText
        ) {
          winner = true;
        }
      }
      if (index < 3) {
        if (
          cell.innerText &&
          cell.innerText === cells[index + 3].innerText &&
          cell.innerText === cells[index + 6].innerText
        ) {
          winner = true;
        }
      }
      if (index === 0) {
        if (
          cell.innerText &&
          cell.innerText === cells[index + 4].innerText &&
          cell.innerText === cells[index + 8].innerText
        ) {
          winner = true;
        }
      }
      if (index === 2) {
        if (
          cell.innerText &&
          cell.innerText === cells[index + 2].innerText &&
          cell.innerText === cells[index + 4].innerText
        ) {
          winner = true;
        }
      }
    });
  };
});
