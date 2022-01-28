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

const foo = [1,2,3];
const [n] = foo;
console.log(typeof(42));