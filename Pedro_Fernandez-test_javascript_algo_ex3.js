// Exercise 3

var wrongLines = new Array();
var wrongColumns = new Array();
var wrongRegions = new Array();

F31();
F32();
F33();
printMistakes();

// 1-
function F31(){
    // Call F21 for each position in to_check
    for(let i = 0; i < to_check.length; i++){
        if(!F21(to_check[i])){
            wrongLines.push(i);
        }
    }
}

// 2-
function F32(){
    // Call F21 for each position in to_check
    let inverseArray = new Array(9);
    for(let i = 0; i < inverseArray.length; i++){
        inverseArray[i] = new Array(9);
    }
    // We reverse the array to iterate it by columns
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            inverseArray[i][j] = to_check[j][i];
        }
    }
    // Same procedure as F31 but with the inverse array
    for(let i = 0; i < inverseArray.length; i++){
        if(!F21(inverseArray[i])){
            wrongColumns.push(i);
        }
    }
}

// 3-
function F33(){
    var sumadorRegiones = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
    var nuevoSudoku = new Array(9);
    for(let i = 0; i < nuevoSudoku.length; i++){
        nuevoSudoku[i] = new Array(9);
    }
    for(let x = 0; x < 9; x++){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                nuevoSudoku[x][i*3+j] = to_check[sumadorRegiones[x][0]+i][sumadorRegiones[x][1]+j];
            }
        }
    }

    for(let i = 0; i < nuevoSudoku.length; i++){
        if(!F21(nuevoSudoku[i])){
            wrongRegions.push(i);
        }
    }
}

// 4-
function printMistakes(){
    if(wrongLines.length > 0){
        document.write("<table border =\"1\">");

        if(wrongLines.length > 0){
            for(let i = 0; i < wrongLines.length; i++){
                document.write("<tr><td>Line " + (wrongLines[i] + 1) + "</td>");
                for(let j = 0; j < to_check[wrongLines[i]].length; j++){
                    document.write("<td>" + to_check[wrongLines[i]][j] + "</td>");
                }
                document.write("</tr>");
            }
        }

        if(wrongColumns.length > 0){
            for(let i = 0; i < wrongColumns.length; i++){
                document.write("<tr><td>Column " + (wrongColumns[i] + 1) + "</td>");
                for(let j = 0; j < to_check[wrongColumns[i]].length; j++){
                    document.write("<td>" + to_check[j][wrongColumns[i]] + "</td>");
                }
                document.write("</tr>");
            }
        }

        var sumadorRegiones = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
        var nuevoSudoku = new Array(9);
        for(let i = 0; i < nuevoSudoku.length; i++){
            nuevoSudoku[i] = new Array(9);
        }
        for(let x = 0; x < 9; x++){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    nuevoSudoku[x][i*3+j] = to_check[sumadorRegiones[x][0]+i][sumadorRegiones[x][1]+j];
                }
            }
        }   
    
        if(wrongRegions.length > 0){
            for(let i = 0; i < wrongRegions.length; i++){
                document.write("<tr><td>Region " + (wrongRegions[i] + 1) + "</td>");
                for(let j = 0; j < to_check[wrongRegions[i]].length; j++){
                    document.write("<td>" + nuevoSudoku[wrongRegions[i]][j] + "</td>");
                }
                document.write("</tr>");
            }
        }
        
        document.write("</table>");
    }else{
        document.write("<p>The table is correct</p>");
    }
}