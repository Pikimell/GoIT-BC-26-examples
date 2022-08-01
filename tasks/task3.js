function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => {
    a = a.split(" ")[1];
    b = b.split(" ")[1];

    return a.localeCompare(b);
  });
}

let array = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];

sortReindeer(array);
