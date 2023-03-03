function getRandomInteger (from, to) {
  return  Math.floor(Math.random()*(to - from + 1) + from);
}

function checkLength(str, maxLength = 0) {
  if(str.length <= maxLength) return true;
  return false;
}
//Тестирование
/*
let s = '';

for(let i = 0; i < 10; i++){
  //console.log(getRandomInteger(-1, 1));
  s += i;
  console.log(checkLength(s, 2));
}
*/
