let row = 9;
let string = "";
for(let i=0;i<(9/2);i++){
    // console.log(i);
    for(let j=0;j<row;j++){
        console.log(j);
        if( (j >= Math.floor((9/2))-i) && (j <= Math.floor((9/2))+i) ){
            console.log("yes");
            string+="*";
        }else{
            string+=" ";
        }
    }
    string+='\n';
}
string = string.substring(0,string.length-1);
let newString = "";
for(let i=0; i<Math.floor(9/2); i++){
    for(let j=0; j<row; j++){
        if(j >= i+1 && j<= (row-1)-i-1){
            newString+="*";
        }
        else{
            newString+=" ";
        }
    }
    newString+="\n";
}
console.log(string);

console.log(newString);
