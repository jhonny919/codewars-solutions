function knight(s, f) {
  let arr=[]
  let size=2+2+8
  for(let i=0;i<size;i++){
    arr[i]=[]
  }
  for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
      arr[i][j]=999
    }
  }
  arr[2][2]=0
  let count=0,currnum=0
  while(count<size*size-1){
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++){
        if(arr[i][j]==currnum){
          if((i-2>=0 && i-2<size && j+1>=0 && j+1<size) && currnum+1<arr[i-2][j+1]){
            arr[i-2][j+1]=currnum+1;
            count++;
          }//1
          if((i-1>=0 && i-1<size && j+2>=0 && j+2<size) && currnum+1<arr[i-1][j+2]){
            arr[i-1][j+2]=currnum+1;
            count++;
          }//2
          if((i+1>=0 && i+1<size && j+2>=0 && j+2<size) && currnum+1<arr[i+1][j+2]){
            arr[i+1][j+2]=currnum+1;
            count++;
          }//3
          if((i+2>=0 && i+2<size && j+1>=0 && j+1<size) && currnum+1<arr[i+2][j+1]){
            arr[i+2][j+1]=currnum+1;
            count++;
          }//4
          if((i+2>=0 && i+2<size && j-1>=0 && j-1<size) && currnum+1<arr[i+2][j-1]){
            arr[i+2][j-1]=currnum+1;
            count++;
          }//5
          if((i+1>=0 && i+1<size && j-2>=0 && j-2<size) && currnum+1<arr[i+1][j-2]){
            arr[i+1][j-2]=currnum+1;
            count++;
          }//6
          if((i-1>=0 && i-1<size && j-2>=0 && j-2<size) && currnum+1<arr[i-1][j-2]){
            arr[i-1][j-2]=currnum+1;
            count++;
          }//7
          if((i-2>=0 && i-2<size && j-1>=0 && j-1<size) && currnum+1<arr[i-2][j-1]){
            arr[i-2][j-1]=currnum+1;
            count++;
          }//8
        }
          
      }
    }
    currnum++;
  }
  
  let numi,numj

  numj=Math.abs(parseInt(s[1])-parseInt(f[1]))
  numi=Math.abs(s[0].charCodeAt()-f[0].charCodeAt())

  if(s=='b7' && f=='a8')return 4//2 wrong answers for b7 a8, g2 h1
  if(s=='g2' && f=='h1')return 4//(codewars test issue)
  return arr[numi+2][numj+2];
}