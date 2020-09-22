function sumIntervals(arr){
  let min=999,max=-999
  
  for(let i=0;i<arr.length;i++){
    if(arr[i][0]<min)min=arr[i][0]
    if(arr[i][0]>max)max=arr[i][0]
    
    if(arr[i][1]<min)min=arr[i][1]
    if(arr[i][1]>max)max=arr[i][1]
  }
  
  for(let i=0;i<arr.length;i++){
    arr[i][0]=arr[i][0]+Math.abs(min)
    arr[i][1]=arr[i][1]+Math.abs(min)
  }
  
  min=999,max=-999
  for(let i=0;i<arr.length;i++){
    if(arr[i][0]<min)min=arr[i][0]
    if(arr[i][0]>max)max=arr[i][0]
    
    if(arr[i][1]<min)min=arr[i][1]
    if(arr[i][1]>max)max=arr[i][1]
  }
  for(let i=0;i<arr.length;i++){
    arr[i][0]=arr[i][0]-Math.abs(min)
    arr[i][1]=arr[i][1]-Math.abs(min)
  }
  min=999,max=-999
  for(let i=0;i<arr.length;i++){
    if(arr[i][0]<min)min=arr[i][0]
    if(arr[i][0]>max)max=arr[i][0]
    
    if(arr[i][1]<min)min=arr[i][1]
    if(arr[i][1]>max)max=arr[i][1]
  }
  
  let count=0;
  let sum=[]
  for(let i=0;i<max;i++) sum[i]=false;
  
  for(let i=0;i<arr.length;i++){
    for(let j=arr[i][0];j<arr[i][1];j++)
      if(sum[j]==false){
        sum[j]=true
        count++;
      }
  }
  
  return count
}