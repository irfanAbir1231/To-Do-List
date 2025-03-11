const userDataStore = require("./userDataStore");

// ...existing code...

// Example usage
const userId = "user1";
userDataStore.setData(userId, [{ task: "Task 1" }, { task: "Task 2" }]);
console.log(userDataStore.getData(userId));

// ...existing code...
