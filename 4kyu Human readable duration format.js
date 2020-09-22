let pls = (aaa,c) =>{
  if(c>1)
    return aaa+'s'
  else if(c==1)
    return aaa
  else
    return ''
}

function formatDuration (sec) {
  if(sec==0) return 'now'
  let y,d,h,m;
  y=d=h=m=0;
  if(sec>=31536000)
  y=parseInt(sec/31536000);  sec-=y*31536000;
  if(sec>=86400)
  d=parseInt(sec/86400);      sec-=d*86400;
  if(sec>=3600)
  h=parseInt(sec/3600);        sec-=h*3600;
  if(sec>=60)
  m=parseInt(sec/60);          sec-=m*60;
  
  let date="";
  let o=0;
   
  if(y>0)    date+=`${y} ${pls('year',y)}, `
  if(d>0)    date+=`${d} ${pls('day',d)}, `
  if(h>0)    date+=`${h} ${pls('hour',h)}, `
  if(m>0)    date+=`${m} ${pls('minute',m)}, `
  if(sec>0)  date+=`${sec} ${pls('second',sec)}, `
  
  date=date.slice(0,date.length-2)

  for(let i=date.length-1;i>=0;i--){
    if(date[i]==','){
      let yy=''
      for(let j=i+1;j<date.length;j++){
        yy+=date[j];
      }
      date=date.slice(0,i);
      date+=' and'
      date+=yy;
      return date;
    }
  }
  return date;
}