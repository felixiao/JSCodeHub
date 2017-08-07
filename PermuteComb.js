//插入法
//
function PermuteComb(arr,newarr){
  if(arr.length<=0) console.log(newarr);
  else{
    var ar=arr;
    for(var index=0;index<=arr.length;index++){
      var a=insert(newarr,arr[0],index);
      PermuteComb(ar.slice(1,arr.length-1),a);
    }

  }
}
function insert(arr,item,index){
  var left=arr.slice(0,index).concat(item);
  var right = arr.slice(index);
  return left.concat(right);
}
function Comb(){
  PermuteComb([0,1,2,3,4]);
}
