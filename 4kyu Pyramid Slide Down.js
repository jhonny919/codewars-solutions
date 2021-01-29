function longestSlideDown (arr) {
  arr.reverse()
  
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr[i].length-1;j++){
      if(arr[i][j]>=arr[i][j+1]) arr[i+1][j]+=arr[i][j]
      else arr[i+1][j]+=arr[i][j+1]
    }
  }
  
  return arr[arr.length-1][0]
}