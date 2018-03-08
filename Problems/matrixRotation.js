const rotate = (matrix) => {
    // reverse the rows
    matrix = matrix.map((row) => {
        return row.reverse();
    });

    // swap the symmetric elements
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
};