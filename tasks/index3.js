let obj1 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "User1",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "chat1",
      type: "private",
    },
    date: 1658835452,
    text: "hhawdawd",
  },
};

let obj2 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "User2",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "chat2",
      type: "private",
    },
    date: 1658835452,
    text: "hhawdawd",
  },
};

let obj3 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "User3",
      language_code: "uk",
    },
    chat: {
      id: 4339826864,
      first_name: "Volodymyr",
      username: "chat2",
      type: "private",
    },
    date: 1658835452,
    text: "hhawdawd",
  },
};

let obj4 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "User4",
      language_code: "uk",
    },
    chat: {
      id: 4339826864,
      first_name: "Volodymyr",
      username: "chat4",
      type: "private",
    },
    date: 1658835452,
    text: "hhawdawd",
  },
};

let array = [obj1, obj2, obj3, obj4];

// let result = {
//   '433982686': ["User1", "User2"],
//   '4339826864': ["User3", "User4", ],
// };

// obj.message.chat.id
// obj.message.from.username

function getObj(array) {
  let result = {
    123: ["User1"],
    124: ["User2"],
  };

  for (let value of array) {
    let {
      message: {
        chat: { id },
      },
    } = value; // let id = value.message.chat.id
    let {
      message: {
        from: { username },
      },
    } = value; // let username = value.message.from.username

    if (result[id] !== undefined) result[id].push(username);
    else {
      result[id] = []; // result[id] = [username]
      result[id].push(username);
    }
  }
}

getObj(array);
