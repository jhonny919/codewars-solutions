function rep(n, e, sadd, smain) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += smain[i];
  }
  str += sadd;
  for (let i = e; i < smain.length; i++) {
    str += smain[i];
  }
  return str;
}

function reparr(n, e, sadd, smain) {
  let str = [];
  for (let i = 0; i < n; i++) {
    str[str.length] = smain[i];
  }
  str[str.length] = sadd;
  for (let i = e; i < smain.length; i++) {
    str[str.length] = smain[i];
  }
  return str;
}

function mm(str){
  for(let i=0;i<str.length;i++){
    if(str[i]=='-' && str[i+1]=='-') str=rep(i,i+2,'+',str);
    else if(str[i]=='-' && str[i+1]=='+') str=rep(i,i+2,'-',str);
    else if(str[i]=='+' && str[i+1]=='-') str=rep(i,i+2,'-',str);
    else if(str[i]=='+' && str[i+1]=='+') str=rep(i,i+2,'+',str);
  }
  return str;
}

function havephar(str){
  for(let i=0;i<str.length;i++)
    if(str[i]=='(') return true;
  return false;
}

function solve(str){
  
  let arr=[];
  let num='';
  let pm=false;

  str=mm('+'+str)
  for(let i=0;i<str.length;i++){
    if(str[i]=='/' || str[i]=='*') str=mm(rep(i+1,i+1,'+',str))
  }
  
  for(let i=0;i<=str.length;i++){
    if(str[i]=='*' || str[i]=='/'){
      arr[arr.length]=num;
      num='';
      arr[arr.length]=str[i];
      pm=false;
    }
    else if(str[i]==undefined){
       arr[arr.length]=num;
      num='';
    }
    else if((str[i]=='-' || str[i]=='+') && pm==false){
      pm=true
      num+=str[i]
    }
    else if((str[i]=='-' || str[i]=='+') && pm==true){
      arr[arr.length]=num;
      num='';
      num+=str[i]
    }
    else num+=str[i]

  }
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]!='*' && arr[i]!='/')
      arr[i]=parseFloat(arr[i])
  }
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]=='*'){
      arr=reparr(i-1,i+2,arr[i-1]*arr[i+1],arr)
      i-=2;
    }
    if(arr[i]=='/'){
      arr=reparr(i-1,i+2,arr[i-1]/arr[i+1],arr)
      i-=2;
    }
  }
  
  let s=0;
  for(let i=0;i<arr.length;i++){
    s+=arr[i]
  }
  
  
  return s;
}


var calc = function (exp) {

  let str = '';
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] != ' ') str += exp[i];
  }
  
  str=mm(str);
  while(havephar(str)){
    
    let s=-1,e=-1;
    for(let i=0;i<str.length;i++){
      if(str[i]=='('){
        s=i;
      }
      else if (str[i]==')'){
        e=i;
        break;
      }
    }
    
    let substr='';
    for(let i=s+1;i<e;i++) substr+=str[i];
    
    str=rep(s,e+1,solve(substr),str)
    str=mm(str);
  }
  
  str=solve(str);

  return str
};