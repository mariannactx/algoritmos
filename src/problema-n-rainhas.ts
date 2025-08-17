function solveNQueens(n: number): string[][] {
  const solutions: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(row: number, col: number): boolean {
    console.log("isSafe", row, col);
    // Verifica a coluna acima
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Verifica a diagonal superior esquerda
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Verifica a diagonal superior direita
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row: number) {
    console.log("backtrack", row);
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        console.log("add rainha", row, col);
        board[row][col] = "Q"; // Coloca a rainha
        backtrack(row + 1); // Próxima linha
        console.log("remove rainha", row, col);
        board[row][col] = "."; // Remove a rainha (backtrack)
      }
    }
  }

  backtrack(0);
  return solutions;
}

// Teste com N = 4
console.log(solveNQueens(4));
