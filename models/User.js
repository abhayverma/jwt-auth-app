const { v4: uuidv4 } = require("uuid");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStore = new LocalStorage("./scratch");
const msgHandler = require("../response-messages.json");

function createUser(user) {
  if (!user?.username || !user?.password) {
    throw new Error(msgHandler.USERNAME_PASS_REQUIRED);
  }
  user.id = uuidv4();
  localStore.setItem(user.username, JSON.stringify(user));
  return user;
}

function findOne(username) {
  if (!username) throw new Error(msgHandler.USERNAME_REQUIRED);
  try {
    const user = localStore.getItem(username);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createUser, findOne };
