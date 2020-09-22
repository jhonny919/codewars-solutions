function removeZeros(array) {
  
  let arr=[],zero=[];
  for(let i=0;i<array.length;i++){
    if(array[i]===0 || array[i]==="0") zero[zero.length]=array[i];
    else arr[arr.length]=array[i];
  }

  return [...arr,...zero];
}
