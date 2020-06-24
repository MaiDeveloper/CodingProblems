const longestCommonSubsequence = (wordX, wordY) => {
  const m = wordX.length,
        n = wordY.length,
        dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)),
        solution = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (wordX[i - 1] === wordY[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        solution[i][j] = 'diagonal';
        continue;
      }

      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      solution[i][j] = dp[i][j] === dp[i - 1][j] ? 'top' : 'left';
    }
  }

  console.log(printSolution(solution, wordX, m, n));

  return dp[m][n];
};

const printSolution = (solution, word, m, n) => {
  let x = solution[m][n],
      answer = '';
  
  while (x !== null) {
    if (x === 'diagonal') {
      answer = word[m - 1] + answer;
      m--;
      n--;
    } else if (x === 'top') {
      m--;
    } else if (x === 'left') {
      n--;
    }

    x = solution[m][n];
  }

  return answer;
};

console.log(longestCommonSubsequence('acbaed', 'abcadf'));

// [
//   [ null, null, null, null, null, null, null ],
//   [ null, 'diag', 'left', 'left', 'diag', 'left', 'left' ],
//   [ null, 'left', 'left', 'diag', 'left', 'left', 'left' ],
//   [ null, 'left', 'diag', 'left', 'left', 'left', 'left' ],
//   [ null, 'diag', 'left', 'left', 'diag', 'left', 'left' ],
//   [ null, 'left', 'left', 'left', 'left', 'left', 'left' ],
//   [ null, 'left', 'left', 'left', 'left', 'diag', 'left' ]
// ]
