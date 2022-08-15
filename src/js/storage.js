function loadFromLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.log("Error Parsing!");
    return [];
  }
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default {
  loadFromLS,
  saveToLS,
};
