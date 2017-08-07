function ticket(){
  document.getElementById('result').text=tickets([25,25,50,100,25,100]);
}
function tickets(peopleInLine){
  var bill25=0,bill50=0,i=0;
  while(i<peopleInLine.length){
    var money = peopleInLine[i];
    if(money==25) bill25++;
    else if(bill25<=0) return "NO";
    else if(money==50){bill25--;bill50++;}
    else if(bill50>0){bill25--;bill50--;}
    else if(bill25<=2) return "NO";
    else bill25-=3;
    i++;
  }
  return "YES";
}
