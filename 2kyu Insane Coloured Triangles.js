let arr1=['RR','BB','GG','BG','BR','GB','GR','RB','RG']
let arr2=['R','B','G','R','G','R','B','G','B']

function triangle(r) {
    let size,str
    while(r.length>1){
      str=''; size=1
      while(size*3+1<=r.length)size*=3;//size for c^n+1 nums
      size++;

      for(let i=0;i<=r.length-size;i++){//cheking from r[size] to r[r.length-1]
        
        for(let j=0;j<arr1.length;j++){//cheking rgb
          if(r[i]+r[i+size-1]==arr1[j]){
            str+=arr2[j];
            break;
          }
        }
        
      }
      
      r=str;
    }
  return r
}