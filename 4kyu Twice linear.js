function dblLinear(n) {
  let arr=[1];
  let arrc=[3,4];
  let arrn=[];
  
  while(arr.length<n*10){
    for(let i=0;i<arrc.length;i++){
      arrn[arrn.length]=arrc[i]*2+1;
      arrn[arrn.length]=arrc[i]*3+1;
    }
    
    for(let i=0;i<arrc.length;i++) arr[arr.length]=arrc[i];
    
    arrc=[];
    
    for(let i=0;i<arrn.length;i++) arrc[arrc.length]=arrn[i];
    
    arrn=[]
  }
  arr.sort(function(a, b) {return a - b;});
  
  let pli;
  for(let i=0;i<arr.length-1;i++){
    while(true){
      if(arr[i]!=arr[i+1]) {arrn[arrn.length]=arr[i]; break;}
      else {i++;}
    }
  }
  return arrn[n]
}