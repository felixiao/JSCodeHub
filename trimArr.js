function clickit(){
  var arr=[1,[2,[3,4,[5,6,7,['q','i',['a','v'],'s'],8,9],10],11,12],13];
  document.getElementById('result').text=trimrecurse(arr);
}
var resultArr=[];
function trimArr(arr){
  var i=0;
  while(arr.length>i){
    if(arr[i].length>1) trimArr(arr[i]);
    else{ resultArr.push(arr[i]);console.log(resultArr);}
    i++;
  }
  return resultArr;
}

function trimloop(arr){
  if(arr.length==0) return;
  while(arr[0].length>1){
    trimrecurse(arr[0]);
  }
  resultArr.push(arr[0]);
  arr.pop(0);
  trimrecurse(arr);
}
