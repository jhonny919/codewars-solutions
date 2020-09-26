function pathFinder(area) {

    let arr = [];
    arr[0] = []

    for (let i = 0, k = 0, j = 0; i < area.length; i++) {
        if (area[i] == '\n') {
            k++;
            arr[k] = [];
            j = 0
        } else {
            arr[k][j] = area[i];
            j++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = {
                cli: arr[i][j],
                active: false,
                sum: false,
            }
        }
    }

    arr[0][0].active = true;
    arr[0][0].sum = true;

    let active = [];

    while ((() => {
            active = [];

            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j].active == true) {
                        active[active.length] = [i, j];
                    }
                }
            }

            return active.length;
        })() != 0) {
        for (let i = 0; i < active.length; i++) {
            let n = active[i][0],
                m = active[i][1];
            arr[n][m].active = false;
            if (n - 1 >= 0 && arr[n - 1][m].sum == false && arr[n-1][m].cli!='W') {
                arr[n - 1][m].sum = true;
                arr[n - 1][m].active = true;
            }
            if (m - 1 >= 0 && arr[n][m - 1].sum == false && arr[n][m-1].cli!='W') {
                arr[n][m - 1].sum = true;
                arr[n][m - 1].active = true;


            }
            if (n + 1 < arr.length && arr[n + 1][m].sum == false && arr[n+1][m].cli!='W') {
                arr[n + 1][m].sum = true;
                arr[n + 1][m].active = true;


            }
            if (m + 1 < arr[arr.length - 1].length && arr[n][m + 1].sum == false && arr[n][m+1].cli!='W') {
                arr[n][m + 1].sum = true;
                arr[n][m + 1].active = true;


            }
        }
    }

    return arr[arr.length - 1][arr[arr.length - 1].length - 1].sum;
}