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

function parseInt(str) {
  let words= {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand':1000,
    'million':1000000
  }

  let num=''
  let arrr=[]
  
  str+=' ';
  for(let i=0;i<str.length;i++)
    if(str[i]=='-') str=rep(i,i+1,' ',str);
  
  for(let i=0;i<str.length;i++){
    if(str[i]!=' ')
      num+=str[i]
    else
      {
        arrr[arrr.length]=num;
        num='';
      }
  }
  let arr=[]
  for(let i=0;i<arrr.length;i++){
    if(arrr[i]!='and'){
        arr[arr.length]={
        text : arrr[i],
        num : words[arrr[i]]
      }
    }
  }
  
  let main=0,tmp=arr[0].num;
  
  let mult={'thousand':1000,'million':1000000}
  
  if(arr.length==1) return arr[0].num
  else{
    for(let i=1;i<arr.length;i++){
      if(mult[arr[i].text]){
        tmp*=mult[arr[i].text];
        main+=tmp;
        i++;
        if(arr[i])tmp=arr[i].num;
      }
      else if(arr[i].num==100) tmp*=100;
      else tmp+=arr[i].num;
    }
    if(!mult[arr[arr.length-1].text])main+=tmp;
    console.log(str)
    return main
  }
  
}