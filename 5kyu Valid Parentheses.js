function validParentheses(arr){
  let a=0,b=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]=='(') a++;
    else b++;
    if(b>a)return false;
  }
  return a==b;
}