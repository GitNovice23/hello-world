var ary = new Array(10);
for(i=0; i < 10; i++){
    ary[i]= (prompt("Enter the elements of the array :"));
}
console.log(ary);


do{
    var inv = true;
    for(i = 0; i < ary.length -1; i++){
        if(ary[i] > ary[i +1]){
            let temp = ary[i +1];
            ary[i + 1] = ary[i];
            ary[i] = temp;
            inv = false;
        }
    }
}while(inv === true );

console.log(ary);