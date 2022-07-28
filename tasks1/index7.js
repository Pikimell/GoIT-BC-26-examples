let str = "Hello";

switch (
  str // 'Hello' == 'Hello'  true
) {
  case "World":
    console.log("world");
    break;
  case "Hello":
    console.log("world");
    break;
  case "false":
    console.log("world");
    break;
  case "error":
    console.log("world");
    break;
  case "true+":
    console.log("world");
    break;
}

function points(games) {
  let total = 0;
  for (let game of games) {
    let [x, y] = game.split(":"); // ['3','1']
    switch (true) {
      case +x > +y:
        total += 3;
        break;
      case +x == +y:
        total++;
        break;
    }
  }

  return total;
}

let array = ["10:1", "2:2", "0:1"];

console.log(points(array));
