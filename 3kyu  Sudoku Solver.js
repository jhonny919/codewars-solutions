function check3x3(i, j, arr, isarr) {
  let ic, jc;
  if (i >= 0 && i <= 2 && j >= 0 && j <= 2) {
    ic = 0;
    jc = 0;
  } else if (i >= 3 && i <= 5 && j >= 0 && j <= 2) {
    ic = 3;
    jc = 0;
  } else if (i >= 6 && i <= 8 && j >= 0 && j <= 2) {
    ic = 6;
    jc = 0;
  } else if (i >= 0 && i <= 2 && j >= 3 && j <= 5) {
    ic = 0;
    jc = 3;
  } else if (i >= 3 && i <= 5 && j >= 3 && j <= 5) {
    ic = 3;
    jc = 3;
  } else if (i >= 6 && i <= 8 && j >= 3 && j <= 5) {
    ic = 6;
    jc = 3;
  } else if (i >= 0 && i <= 2 && j >= 6 && j <= 8) {
    ic = 0;
    jc = 6;
  } else if (i >= 3 && i <= 5 && j >= 6 && j <= 8) {
    ic = 3;
    jc = 6;
  } else if (i >= 6 && i <= 8 && j >= 6 && j <= 8) {
    ic = 6;
    jc = 6;
  }

  for (let ii = ic; ii < ic + 3; ii++) {
    for (let jj = jc; jj < jc + 3; jj++) {
      if (arr[ii][jj].is != 0) {
        isarr[arr[ii][jj].is - 1] = 0;
      }
    }
  }
  return isarr;
}

function checkXY(i, j, arr, isarr) {
  for (let ii = 0; ii < 9; ii++) {
    if (arr[ii][j].is != 0) {
      isarr[arr[ii][j].is - 1] = 0;
    }
  }
  for (let jj = 0; jj < 9; jj++) {
    if (arr[i][jj].is != 0) {
      isarr[arr[i][jj].is - 1] = 0;
    }
  }
  return isarr;
}

function sudoku(arr) {
  let count = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] != 0) {
        arr[i][j] = {
          is: arr[i][j],
          ispos: [],
        };
        count++;
      } else {
        arr[i][j] = {
          is: 0,
          ispos: [],
        };
      }
    }
  }

  while (count < 81) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (arr[i][j].ispos.length == 1 && arr[i][j].is == 0) {
          arr[i][j].is = arr[i][j].ispos[0];
          arr[i][j].ispos = [];
          count++;
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].is == 0) {
          let isarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

          isarr = checkXY(i, j, arr, isarr);
          isarr = check3x3(i, j, arr, isarr);

          arr[i][j].ispos = ((isarr) => {
            let ret = [];
            isarr.sort(function (a, b) {
              return a - b;
            });
            for (let k = 0; k < isarr.length; k++)
              if (isarr[k] != 0) ret[ret.length] = isarr[k];
            return ret;
          })(isarr);
        }
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      arr[i][j] = arr[i][j].is;
    }
  }

  return arr
}