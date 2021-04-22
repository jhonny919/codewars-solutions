function solution(list){
 let res='',s,e,c=0;
  list.forEach((i)=>{
    if(c===0){
      s=i;
      e=i;
      c++;
    }
    else if(i-1!==e){
      if(s!=e){
        if(s+2<=e){
          res+=s+'-'+e+','
        }
        else{
          res+=s+','+e+',';
        }
      }
      else{
        res+=s+','
      }
      c=1;
      s=i;
      e=i;
    }
    else{
      e++;
      c++;
    }
    if(i===list[list.length-1]) {
      if(s!=e){
        if(s+2<=e){
          res+=s+'-'+e+','
        }
        else{
          res+=s+','+e+',';
        }
      }
      else{
        res+=s+','
      }
    }
  })
  return res.slice(0,-1)
}