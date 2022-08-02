const contacts = require("./contacts.js");
const main = async () => {
  const noId = await contacts.tulisPertanyaan("masukan no id anda :");
  const nama = await contacts.tulisPertanyaan("masukan nama anda :");
  const email = await contacts.tulisPertanyaan("masukan email anda :");
  const link = await contacts.tulisPertanyaan("masukan link anda :");
  const kelamin = await contacts.tulisPertanyaan("masukan jenis kelamin anda :");
  const umur = await contacts.tulisPertanyaan("masukan umur anda :");

  contacts.simpanContacts(noId, nama, email, link, kelamin, umur);
};
main();
