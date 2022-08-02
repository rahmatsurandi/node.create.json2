const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
// membuat file jika belum ada
const dirFile = "./data/coba.json";
if (!fs.existsSync(dirFile)) {
  fs.writeFileSync(dirFile, "[]", "utf8");
}
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (noId) => {
      resolve(noId);
    });
  });
};

const simpanContacts = (noId, nama, email, link, kelamin, umur) => {
  const contact = { noId, nama, email, link, kelamin, umur };
  const dirfile = fs.readFileSync("data/coba.json", "utf8");
  const contacts = JSON.parse(dirfile);
  contacts.push(contact);
  fs.writeFileSync("data/coba.json", JSON.stringify(contacts));

  console.log("data sudah masuk ke file coba json");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContacts };
