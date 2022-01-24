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

// console.log(likes(["Adam","Sam", "Josh"]));
console.log(likes(["Adam","Sam", "Josh", "Hector", "Pablo"]));