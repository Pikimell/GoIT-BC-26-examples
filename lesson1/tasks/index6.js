let user1 = {
  name: "Petya",
  setName: function (name) {
    this.name = name;
  },
};

let user2 = {
  name: "Vasya",
  age: "TEST",
};

let newName = user1.setName.bind(user2);

newName("name1");

newName("1231");

console.log(user1);
console.log(user2);
