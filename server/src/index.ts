import qrcode from "qrcode-terminal";
import { Client, NoAuth } from "whatsapp-web.js";
import("dotenv/config");
const client = new Client({});

client.on("qr", async (qr) => {
  qrcode.generate(qr, { small: true });
});

const replies = ["👍👍", "All good"];
const searchString = ["sab", "kaise ho", "are", "you"];
client.on("ready", () => {
  console.log("client ready");
  client.on("message", async (msg) => {
    if (msg.from == process.env.userId_1) {
      if (
        msg.body.toLowerCase().includes(searchString[0]) ||
        msg.body.toLowerCase().includes(searchString[1]) ||
        msg.body.toLowerCase().includes(searchString[2]) ||
        msg.body.toLowerCase().includes(searchString[3])
      ) {
        client.sendMessage(msg.from, replies[1]);
      } else {
        client.sendMessage(msg.from, replies[0]);
      }
    }
    if (msg.from == process.env.userId_2) {
      if (
        msg.body.toLowerCase().includes(searchString[0]) ||
        msg.body.toLowerCase().includes(searchString[1]) ||
        msg.body.toLowerCase().includes(searchString[2]) ||
        msg.body.toLowerCase().includes(searchString[3])
      ) {
        client.sendMessage(msg.from, replies[1]);
      } else {
        client.sendMessage(msg.from, replies[0]);
      }
    }
  });
});

client.initialize();
