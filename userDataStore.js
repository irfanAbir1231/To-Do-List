const fs = require("fs");
const path = require("path");

class UserDataStore {
  constructor() {
    this.basePath = path.join(__dirname, "userData");
    if (!fs.existsSync(this.basePath)) {
      fs.mkdirSync(this.basePath);
    }
  }

  getFilePath(userId) {
    return path.join(this.basePath, `${userId}.json`);
  }

  getData(userId) {
    const filePath = this.getFilePath(userId);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    }
    return [];
  }

  setData(userId, newData) {
    const filePath = this.getFilePath(userId);
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf8");
  }
}

const instance = new UserDataStore();
Object.freeze(instance);

module.exports = instance;
