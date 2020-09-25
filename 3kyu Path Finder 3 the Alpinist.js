function pathFinder(area) {

    let arr = [];
    arr[0] = []

    for (let i = 0, k = 0, j = 0; i < area.length; i++) {
        if (area[i] == '\n') {
            k++;
            arr[k] = [];
            j = 0
        } else {
            arr[k][j] = parseInt(area[i]);
            j++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = {
                cli: arr[i][j],
                active: false,
                sum: 999999999,
                dir: 0,

            }
        }
    }

    arr[0][0].active = true;
    arr[0][0].sum = 0;

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

            if (n - 1 >= 0 && arr[n][m].dir != 3 &&
                arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n - 1][m].cli) < arr[n - 1][m].sum) {

                arr[n - 1][m].sum = arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n - 1][m].cli);
                arr[n - 1][m].active = true;
                arr[n - 1][m].dir = 1;

            }
            if (m - 1 >= 0 && arr[n][m].dir != 4 &&
                arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n][m - 1].cli) < arr[n][m - 1].sum) {

                arr[n][m - 1].sum = arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n][m - 1].cli);
                arr[n][m - 1].active = true;
                arr[n][m - 1].dir = 2;

            }
            if (n + 1 < arr.length && arr[n][m].dir != 1 &&
                arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n + 1][m].cli) < arr[n + 1][m].sum) {

                arr[n + 1][m].sum = arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n + 1][m].cli);
                arr[n + 1][m].active = true;
                arr[n + 1][m].dir = 3;

            }
            if (m + 1 < arr[arr.length - 1].length && arr[n][m].dir != 2 &&
                arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n][m + 1].cli) < arr[n][m + 1].sum) {

                arr[n][m + 1].sum = arr[n][m].sum + Math.abs(arr[n][m].cli - arr[n][m + 1].cli);
                arr[n][m + 1].active = true;
                arr[n][m + 1].dir = 4;

            }



        } //for



    } //while


    return arr[arr.length - 1][arr[arr.length - 1].length - 1].sum;

}