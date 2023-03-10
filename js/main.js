import { photosInfo } from './data.js'
import { getRandomInteger } from './util.js';

for(let i = 0; i < 25; i++){
  photosInfo.push({
    id: i+1,
    url: 'photos/' + (i+1) + '.jpg',
    description: 'Я - прекрасное описание картинки с id равным: ' + (i+1),
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200)
  });
}

console.log(photosInfo[24]);
