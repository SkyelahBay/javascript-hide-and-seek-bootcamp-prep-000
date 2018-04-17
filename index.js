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
  return arr[arr.length-1];
}

