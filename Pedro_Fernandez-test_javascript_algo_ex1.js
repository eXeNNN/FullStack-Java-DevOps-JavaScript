// Exercise 1

// 1-
let to_check = new Array(9);
for (let i=0;i<9;i++) {
    to_check[i] = new Array(9);
}

// 2- 
function F11() {
    document.write("Table 1 <br>");
    
    for (let j = 0; j < 9; j++) {
        for (let k = 0; k < 9; k++) {
            to_check[j][k] = array_number[j].split(" ")[k];
        }
    }
}


// 3- 
function F12() {
    document.write("<table border='1'>");
    for(let i = 0; i < to_check.length; i++){
        document.write("<tr>");
        for(let j = 0; j < to_check[i].length; j++){
            document.write("<td>" + to_check[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}


F11();
F12();