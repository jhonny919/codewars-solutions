function rep(n, e, sadd, smain) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += smain[i];
    }
    str += sadd;
    for (let i = e; i < smain.length; i++) {
        str += smain[i];
    }
    return str;
}


function encodeRailFenceCipher(str, n) {

    let arr = []

    for (let i = 0; i < n; i++) arr[i] = '';

    let i = 0,
        dir = true,
        k = 0;
    while (i != str.length) {

        if (dir) {
            arr[k] += str[i]

            if ((k + 1) % n == 0) {
                dir = false;
                k -= 2;
            }

            i++;
            k++;

        } else {

            arr[k] += str[i]

            if (k == 0) {
                dir = true;
                k += 2;
            }

            i++;
            k--;

        }

    }
    str = '';
    for (let j = 0; j < arr.length; j++) str += arr[j]

    return str
}

function decodeRailFenceCipher(str, n) {

    let arr = []

    for (let i = 0; i < n; i++) arr[i] = 0;

    let i = 0,
        dir = true,
        k = 0;
    while (i != str.length) {

        if (dir) {
            arr[k] += 1

            if ((k + 1) % n == 0) {
                dir = false;
                k -= 2;
            }

            i++;
            k++;

        } else {

            arr[k] += 1

            if (k == 0) {
                dir = true;
                k += 2;
            }

            i++;
            k--;

        }

    }

    let kk = 0,
        pl = 0;
    let ch = []

    for (let i = 0; i < n; i++) ch[i] = '';

    for (let i = 0; i < n; i++) {
        for (; kk < arr[i] + pl; kk++) {
            ch[i] += str[kk];
        }
        pl += arr[i]
    }

    str = '';

    i = 0
    dir = true
    k = 0;

    while (str.length != pl) {

        if (dir) {

            str += ch[k][0]
            ch[k] = rep(0, 1, '', ch[k])

            if ((k + 1) % n == 0) {
                dir = false;
                k -= 2;
            }

            k++;

        } else {

            str += ch[k][0]
            ch[k] = rep(0, 1, '', ch[k])

            if (k == 0) {
                dir = true;
                k += 2;
            }
          
            k--;
          
        }
    }
  
    return str

}