/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/
function addBinary(a,b) {
  var res=a+b;
  var r="";
  while(res>1){
    r=res%2+r;
    res=(res-res%2)/2;
  }
  r=res+r;

  console.log(r);
}
