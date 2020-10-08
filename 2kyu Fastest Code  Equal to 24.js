function reparr(n, e, sadd, smain) {
  let str = [];
  for (let i = 0; i < n; i++) {
    str[str.length] = smain[i];
  }
  str[str.length] = sadd;
  for (let i = e; i < smain.length; i++) {
    str[str.length] = smain[i];
  }
  return str;
}

function solve(temp) {
  let max = []
  for (let i = 1; i < temp.length; i += 2) {
    if (Array.isArray(temp[i]))
      max[max.length] = temp[i][1];
  }
  max = Math.max(...max);

  for (let i = 1; i < temp.length; i += 2) {
    if (temp[i][1] == max) {
      return solve(reparr(i - 1, i + 2, ((a, b, c) => {
        if (c == '+') return a + b;
        else if (c == '-') return a - b;
        else if (c == '/') return a / b;
        else if (c == '*') return a * b;
      })(temp[i - 1], temp[i + 1], temp[i][0]), temp))
    }
  }
  return temp[0]
}

function p(a) {
  if (a == 1 || a == 2) return 1
  else if (a == 3 || a == 4) return 2
  else if (a == 5 || a == 6) return 2
}

function equalTo24(a, b, c, d) {

  let perm = [
    [a, b, c, d],
    [a, b, d, c],
    [a, c, b, d],
    [a, c, d, b],
    [a, d, b, c],
    [a, d, c, b],
    [b, a, c, d],
    [b, a, d, c],
    [b, c, a, d],
    [b, c, d, a],
    [b, d, a, c],
    [b, d, c, a],
    [c, a, b, d],
    [c, a, d, b],
    [c, b, a, d],
    [c, b, d, a],
    [c, d, a, b],
    [c, d, b, a],
    [d, a, b, c],
    [d, a, c, b],
    [d, b, a, c],
    [d, b, c, a],
    [d, c, a, b],
    [d, c, b, a]
  ]

  let arr = [];

  for (let p1 = 0; p1 <= 4; p1 += 2) {
    for (let p2 = 0; p2 <= 4; p2 += 2) {
      for (let p3 = 0; p3 <= 4; p3 += 2) {

        for (let i = 1; i <= 4; i++) {
          for (let j = 1; j <= 4; j++) {
            for (let k = 1; k <= 4; k++) {

              arr[arr.length] = {
                o1: (i => {
                  if (i == 1) return '+';
                  else if (i == 2) return '-';
                  else if (i == 3) return '*';
                  else if (i == 4) return '/';
                })(i),
                o2: (i => {
                  if (i == 1) return '+';
                  else if (i == 2) return '-';
                  else if (i == 3) return '*';
                  else if (i == 4) return '/';
                })(j),
                o3: (i => {
                  if (i == 1) return '+';
                  else if (i == 2) return '-';
                  else if (i == 3) return '*';
                  else if (i == 4) return '/';
                })(k),
                pr1: (i => {
                  if (i == 1 || i == 2) return 1;
                  else return 2;
                })(i) + p1,
                pr2: (i => {
                  if (i == 1 || i == 2) return 1;
                  else return 2;
                })(j) + p2,

                pr3: (i => {
                  if (i == 1 || i == 2) return 1;
                  else return 2;
                })(k) + p3
              }

            }
          }
        }


      }
    }
  }

  let temp = []
  for (let i = 0; i < arr.length; i++) {
    temp = []

    temp[1] = [arr[i].o1, arr[i].pr1];
    temp[3] = [arr[i].o2, arr[i].pr2];
    temp[5] = [arr[i].o3, arr[i].pr3];

    for (let i = 0; i < 24; i++) {
      temp[0] = perm[i][0]
      temp[2] = perm[i][1]
      temp[4] = perm[i][2]
      temp[6] = perm[i][3]

      if (solve(temp) == 24) {

        if (p(temp[1][1]) == 1 && p(temp[3][1]) == 1 && p(temp[5][1]) == 1) return `${temp[0]}${temp[1][0]}${temp[2]}${temp[3][0]}${temp[4]}${temp[5][0]}${temp[6]}`
        else if (p(temp[1][1]) == 2 && p(temp[3][1]) == 1 && p(temp[5][1]) == 1) return `(${temp[0]}${temp[1][0]}${temp[2]})${temp[3][0]}${temp[4]}${temp[5][0]}${temp[6]}`
        else if (p(temp[1][1]) == 1 && p(temp[3][1]) == 2 && p(temp[5][1]) == 1) return `${temp[0]}${temp[1][0]}(${temp[2]}${temp[3][0]}${temp[4]})${temp[5][0]}${temp[6]}`
        else if (p(temp[1][1]) == 1 && p(temp[3][1]) == 1 && p(temp[5][1]) == 2) return `${temp[0]}${temp[1][0]}${temp[2]}${temp[3][0]}(${temp[4]}${temp[5][0]}${temp[6]})`
        else if (p(temp[1][1]) == 2 && p(temp[3][1]) == 2 && p(temp[5][1]) == 1) return `(${temp[0]}${temp[1][0]}${temp[2]}${temp[3][0]}${temp[4]})${temp[5][0]}${temp[6]}`
        else if (p(temp[1][1]) == 1 && p(temp[3][1]) == 2 && p(temp[5][1]) == 2) return `${temp[0]}${temp[1][0]}(${temp[2]}${temp[3][0]}${temp[4]}${temp[5][0]}${temp[6]})`
        else if (p(temp[1][1]) == 3 && p(temp[3][1]) == 2 && p(temp[5][1]) == 1) return `((${temp[0]}${temp[1][0]}${temp[2]})${temp[3][0]}${temp[4]})${temp[5][0]}${temp[6]}`
        else if (p(temp[1][1]) == 2 && p(temp[3][1]) == 3 && p(temp[5][1]) == 1) return `(${temp[0]}${temp[1][0]}(${temp[2]}${temp[3][0]}${temp[4]}))${temp[5][0]}${temp[6]}`
        else if (p(temp[1][1]) == 1 && p(temp[3][1]) == 2 && p(temp[5][1]) == 3) return `${temp[0]}${temp[1][0]}(${temp[2]}${temp[3][0]}(${temp[4]}${temp[5][0]}${temp[6]}))`
        else if (p(temp[1][1]) == 1 && p(temp[3][1]) == 3 && p(temp[5][1]) == 2) return `${temp[0]}${temp[1][0]}((${temp[2]}${temp[3][0]}${temp[4]})${temp[5][0]}${temp[6]})`
        else if (p(temp[1][1]) == 2 && p(temp[3][1]) == 1 && p(temp[5][1]) == 2) return `(${temp[0]}${temp[1][0]}${temp[2]})${temp[3][0]}(${temp[4]}${temp[5][0]}${temp[6]})`

      }

    }
  }

  return "It's not possible!";

}