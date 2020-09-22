snail = function(array) {
  let arr=[],k=0;
  let maxi,maxj;
  maxi=maxj=array.length;
  let dir=1;
  let i,j;
  
  while(maxi>0){
    if(dir==1){
      i=0;
      for(j=0;j<maxj;j++){
        arr[k]=array[i][j];
        k++;
      }
      
      for(i=1;i<maxi;i++){
        for(j=0;j<maxj;j++){
          array[i-1][j]=array[i][j]
        }
      }
      maxi--;
      
      dir=2;
    }else if(dir==2){
      j=maxj-1;
      for(i=0;i<maxi;i++){
        arr[k]=array[i][j]
        k++;
      }
      
      maxj--;
      
      dir=3;
    }else if(dir==3){
      i=maxi-1;
      for(j=maxj-1;j>=0;j--){
        arr[k]=array[i][j];
        k++;
      }
      
      maxi--;
      
      dir=4;
    }else if(dir==4){
      j=0;
      for(i=maxi-1;i>=0;i--){
        arr[k]=array[i][j]
        k++;
      }
      
      for(i=0;i<maxi;i++){
        for(j=1;j<maxj;j++){
          array[i][j-1]=array[i][j]
        }
      }
      
      maxj--;
      
      dir=1
    }
  }
  
  if(arr[0]==undefined) return []
  return arr;