// /*

//  - Метод flatMap(callback) - аналогічний методу map(),
//  - але застосовується у випадках, коли результат - це багатовимірний масив,
//  - який необхідно «розгладити».

// */

// let objs = [
//   {
//     name: "123",
//     friend: ["Jonh1", "Marta1"],
//   },

//   {
//     name: "123",
//     friend: ["Jonh2", "Marta3"],
//   },

//   {
//     name: "123",
//     friend: ["Jonh4", "Marta5"],
//   },

//   {
//     name: "123",
//     friend: ["Jonh6", "Marta7"],
//   },
//   {
//     friend: 1312,
//   },
// ];

// let array = [[2, 6], [1, 5, 8], [2, 1], 23, 61, 56];

// let newArray = objs.flatMap((element) => {
//   return element.friend;
// });

// console.log(newArray);
