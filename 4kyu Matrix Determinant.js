function add(arr,n,pm){
  let subarr=[];
  
  for(let i=1;i<arr.length;i++){
    subarr[subarr.length]=[];
    for(let j=0;j<arr.length;j++){
      if(j!=n) subarr[i-1][subarr[i-1].length] = arr[i][j];
    }
  }
  
  if(pm=='+') return 1*arr[0][n]*solve(subarr)
  else if(pm=='-') return -1*arr[0][n]*solve(subarr)
  
}

function solve(arr){
  if(arr.length==1)return arr[0][0];
  else if(arr.length==2)return arr[0][0]*arr[1][1]-arr[0][1]*arr[1][0];
  else {
    let det=0;
    for(let i=0;i<arr.length;i++){
      if(i%2==0) det+=add(arr,i,'+') 
      else if(i%2==1) det+=add(arr,i,'-') 
    }
    return det;
  }
}

function determinant(m) {
  return solve(m);
};