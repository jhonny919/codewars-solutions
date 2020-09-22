function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

function sumStrings(a,b) { 
  let length=Math.max(a.length,b.length)+1
  let arr1=[],arr2=[],arr=[]
  
  for(let i=0;i<a.length;i++){
    arr1[i]=parseInt(a[i])
  }
  for(let i=0;i<b.length;i++){
    arr2[i]=parseInt(b[i])
  }
  arr1=arr1.reverse()
  arr2=arr2.reverse()
  
  for(let i=0;i<length;i++){
    if(arr1[i]==undefined) arr1[i]=0
    if(arr2[i]==undefined) arr2[i]=0
  }
  arr1=arr1.reverse()
  arr2=arr2.reverse()
  
  let p1=0;
  let sum;
  for(let i=length-1;i>=0;i--){
    sum=arr1[i]+arr2[i];
    sum+=p1;
    p1=0;
    if(sum>9){
      p1=1;
      sum=sum%10;
    }
    arr[i]=sum;
  }
  let aaa="";
  for(let i=0;i<length;i++){
    aaa+=arr[i];
  }
  let num;
  aaa=reverseString(aaa)
  for(let i=0;i<length;i++){
    if(aaa[i].charCodeAt()>=49 && aaa[i].charCodeAt()<=57){
      num=i;
    }
  }
  let end=''
  for(let i=0;i<=num;i++){
    end+=aaa[i]
  }
  end=reverseString(end)
  return end
}