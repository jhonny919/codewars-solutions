let str = x => {
  x+=55;
    if(x>=65 && x<=70)
      return String.fromCharCode(x)
    else return x-55;
}

function rgb(r, g, b){
  let a="";
  if(r<=0)a+="00";
  else if(r>=255)a+="FF";
  else{
    a+=str(parseInt(r/16))
    a+=str(r%16)
  }
  if(g<=0)a+="00";
  else if(g>=255)a+="FF";
  else{
    a+=str(parseInt(g/16))
    a+=str(g%16)
  }
  if(b<=0)a+="00";
  else if(b>=255)a+="FF";
  else{
    a+=str(parseInt(b/16))
    a+=str(b%16)
  }
  
  return a;
}