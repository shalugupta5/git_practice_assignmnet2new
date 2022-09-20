function checkprime(num){
  let factors=0;
  for(let i=2; i<num;i++){
    if(num%i==0){
     factors++;
    }
  }
return factors;
  
}

let x=checkprime(17)
if(x==0){
  console.log("Yes, its Prime")
}
else{
  console.log("No, its not Prime")
}

// Check it boss is it good now or not. 