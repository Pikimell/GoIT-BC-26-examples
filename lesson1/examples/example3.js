/* 
Выполните рефакторинг методов объекта phonebook чтобы код заработал.
*/

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      date: this.getDate(),
    };
    contacts.push(newContact);
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  list: "friends",
});

phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});

console.log(phonebook.contacts);

let obj1 = {
  name: "123",
  age: 112,
};

let obj2 = {
  name: "default",
  ...obj1,
};

console.log(obj2);
