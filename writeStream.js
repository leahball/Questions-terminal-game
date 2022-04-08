const fs = require("fs");

const writeSteam = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

process.stdin.on("data", (data) => {
  writeSteam.write(data);
});
