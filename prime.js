function checkprime(num){
  let c=0;
  for(let i=2; i<num;i++){
    if(num%i==0){
      c++;
    }
  }
return c;
  
}

let x=checkprime(17)
if(x==0){
  console.log("Yes,Prime")
}
else{
  console.log("Not,Prime")
}