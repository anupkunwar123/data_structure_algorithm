"use strict"

function allNQueenSolution(n) {
    var solutions = []
    for (var i = 0; i < n; i++) {
        var arr = []
        arr.push(i)
        isNqueen(solutions, arr, n);
    }
    return solutions;
}

function isNqueen(solutionList, arr, n) {
    if (arr.length == n) {
        solutionList.push(arr)
    } else {
        for (var y = 0; y < n; y++) {
            var newArray = Array.from(arr)
            newArray.push(y)
            if (isValidUntilNow(newArray, n)) {
                isNqueen(solutionList, newArray, n)
            }
        }
    }

}

function isValidUntilNow(arr, n) {
    var copyArr = Array.from(arr)
    if (arr.length == 1) return true
    var currItem = copyArr[0]
    for (var i = 1; i < copyArr.length; i++) {
        if (copyArr[i] == currItem || Math.abs(copyArr[i] - currItem) == i) {
            return false
        }
    }
    var newArr = copyArr.splice(1, arr.length)
    return isValidUntilNow(newArr, n)
}






var n = 8;
var solutions = allNQueenSolution(n)
console.log(solutions.length)
for (var i = 0; i < solutions.length; i++) {
    for (var j = 0; j < solutions[i].length; j++) {
        for (var k = 0; k < n; k++) {
            if (k == solutions[i][j]) {
                process.stdout.write("Q".padStart(4))
            } else {
                process.stdout.write("*".padStart(4))
            }
        }
        console.log("")
        console.log("")

    }
    console.log("----------------------Next Solution--------------------------")
}
