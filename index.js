function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function increaseRankBy(n){
  let num = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(var i = 0; i < num.length; i++){
    num[i].innerHTML = (parseInt(num[i].innerHTML)+n);
  }
}





function deepestChild(){
  let arr = document.querySelector('div#grand-node').querySelectorAll('div');
  let current = arr;
  let next = [];
  
  let check = n => n.firstChild; //if false it would return true so it would return that one.

  while(current){
    if(!check(current)){
      return current;
    }
    if(Array.isArray(current)){
      for(var i = 0; i < current.length; i++){
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
  
}

