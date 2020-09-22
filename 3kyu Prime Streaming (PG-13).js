let prim=[2,3]

function isPrime(nn){//check if num%(num in massive)==0 until nums sqrt<num
  for(let i=0;i<prim.length;i++){
    if(Math.sqrt(nn)<prim[i])return true;
    if(nn%prim[i]==0)return false
  }
}

function primes(n){//all prime numbers squre root%24=1
let i=5;
  while(prim.length<n){
    if((i*i)%24==1 && isPrime(i) )
    prim[prim.length]=i;
    i++;
  }

  return prim
}

class Primes {
  static * stream() {

    for(let p of primes(1000010)) {
      yield p;
    }
  }
}