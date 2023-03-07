function getRandomInteger (from, to) {
  let low = Math.ceil(Math.min(from, to));
  let high = Math.floor(Math.max(from, to));
  return  Math.floor(Math.random()*(high - low + 1) + low);
}

function checkLength(str = '', maxLength = 0) {
  if(str.length <= maxLength) return true;
  return false;
}

export {getRandomInteger};
export {checkLength};
