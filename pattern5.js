row = 9;
col = 5;

let string = "";
for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(j >= (row-1)-i){
            string+="*";
        }else{
            string+=" ";
        }
    }
    string+="\n";
}
string = string.substring(0,string.length-1);
let newString = "";
for(let i=0;i<Math.floor(row/2);i++){
    for(let j=0;j<col;j++){
        if(j > i){
            newString+="*";
        }else{
            newString+=" ";
        }
    }
    newString+="\n";
}
console.log(string);
console.log(newString);