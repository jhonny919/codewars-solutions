let tt = (test,N) => {
  for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
      if(test[i]<test[j]){
        let temp=test[i];
        test[i]=test[j]
        test[j]=temp
      }
    }
  }
  for(let i=0;i<N;i++){
    if(test[i]!=i+1){
      return true;
    }
  }
  return false;
}




var Sudoku = function(arr) 
{

  return {
    isValid: function() {
      let test=[],k=0,N=arr.length,n=Math.sqrt(arr.length);
      console.log(arr)
      
      for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
          if(Number.isInteger(arr[i][j])==false || arr[i][j]<1 || arr[i][j]>N) return false
        }
      }
      
    for(let i=0;i<N;i++){
      for(let j=0;j<N;j++){
        test[j]=arr[i][j]
      }
      if(tt(test,N)) return false;
    }
  for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
      test[j]=arr[j][i]
    }
    if(tt(test,N)) return false;
  }
  let countt=0,iit=0,jjt=0
  while(countt<N){
    k=0;
    for(let i=iit;i<iit+n;i++){
    for(let j=jjt;j<jjt+n;j++){
      test[k]=arr[i][j]
      k++;
    }
  }
    if(tt(test,N)) return false;
    if(jjt==N-n){
      jjt=0;
      iit+=n
    }
    else jjt+=n;
    countt++;
  }
  
  return true;
    }
  };
};