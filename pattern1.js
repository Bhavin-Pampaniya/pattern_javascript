let row = 5;
let col = 5;
let patternString = "";
for(let i=1; i<=row; i++){
    for(let j=1; j<=col; j++){
        if(i > 1 && i < row){
            if(j == 1 || j == col){
                patternString+="*";
            }else{
                patternString+=" ";
            }
        }else{
            patternString+="*";
        }
    }
    patternString+="\n";
}

console.log(patternString);