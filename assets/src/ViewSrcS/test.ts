function numEquivDominoPairs(dominoes: number[][]): number {
    let len = dominoes.length
    let count = 0
    for (let i = 1; i < len; i++) {


        // console.log(i, j, [dominoes[i][0], dominoes[i][1]], [dominoes[j][0], dominoes[j][1]], [dominoes[j][1], dominoes[j][0]])
        if ([dominoes[i-1][0], dominoes[i-1][1]].toString() == [dominoes[i][0], dominoes[i][1]].toString() || [dominoes[i-1][0], dominoes[i-1][1]].toString() == [dominoes[i][1], dominoes[i][0]].toString()) {
            count++
        }

    }
    return count
};
