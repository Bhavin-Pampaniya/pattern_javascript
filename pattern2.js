let row = 5;
let patternString = "";
for(let i=0; i<row; i++){
    for(let j=0;j<row-i;j++){
        patternString+="*";
    }
    patternString+="\n";
} 

console.log(patternString);

