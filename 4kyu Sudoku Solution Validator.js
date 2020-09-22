let tt= test => {
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(test[i]<test[j]){
        let temp=test[i];
        test[i]=test[j]
        test[j]=temp
      }
    }
  }
  for(let i=0;i<9;i++){
    if(test[i]!=i+1){
      return true;
    }
  }
  return false;
}

function validSolution(arr){
  let test=[],k=0
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      test[j]=arr[i][j]
    }
    if(tt(test)) return false;
  }
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      test[j]=arr[j][i]
    }
    if(tt(test)) return false;
  }
  let countt=0,iit=0,jjt=0
  while(countt<9){
    k=0;
    for(let i=iit;i<iit+3;i++){
    for(let j=jjt;j<jjt+3;j++){
      test[k]=arr[i][j]
      k++;
    }
  }
    if(tt(test)) return false;
    if(jjt==6){
      jjt=0;
      iit+=3
    }
    else jjt+=3;
    countt++;
  }
  
  return true;
}