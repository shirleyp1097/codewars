function likes(names) {
  let length = names.length;
  switch (true) {
    case (length === 0):
      return "no one likes this";
    case (length === 1):
      return `${names[0]} likes this`
    case (length === 2):
      return `${names[0]} and ${names[1]} like this`
    case (length === 3):
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    case (length >= 4):
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`

  }
}

function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 === 0);
}

function order(words){
  if (words.length === 0) {
    return "";
  } else {
    let returnString = "";
    words = words.split(' ');
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        console.log(words[i])
        if (words[i][j] === i) {
          // returnString.concat(words[i])
        }
      }
    }
    return returnString;
  }
}

function formatDuration (seconds) {
  let returnString = "";
  if (seconds >= 3600) {
    if (seconds >= 3600 && seconds <= 7199) {
      returnString += Math.floor(seconds/3600) + " hour"
    } else {
      returnString += Math.floor(seconds/3600) + " hours"
      returnString += formatDuration(seconds % 3600);
    }
  } else if (seconds >= 60 && seconds <= 3599) {
    returnString += Math.floor(seconds/60) + 'minutes'
  }
  return returnString;
}

function sortArray(array) {
  let newArr = [];
  let oddsArray = array.filter(num => num % 2 === 1 || num % 2 === -1).sort((a, b) => a - b);
  console.log(oddsArray);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i]);
    } else {
      newArr.push(oddsArray[0]);
      oddsArray.shift();
    }
  }
  return newArr;
}

console.log(sortArray([ -13, -22, -9, -18, 12, -2, -7, 7, 48, 18, 15, 17, -22, 41, 0 ]));
console.log(-13 % 2)
