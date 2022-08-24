// Exercise 2

// 1- 
function F21(A){
    var isgood = true;
    if(typeof A === "object"){
        if(A.length == 9){
            var contador = [0,0,0,0,0,0,0,0,0];
            for(let i = 0; i < A.length; i++){
                if(isNaN(parseInt(A[i]))){
                    isgood = !isgood;
                }
                contador[parseInt(A[i])-1]++;
            }
            for(let i = 0; i < contador.length; i++){
                if(contador[i] != 1){
                    isgood = !isgood;
                    i = contador.length;
                }
            }
        }
    }
    return isgood;
}