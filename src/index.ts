import * as net from "net";
import * as protobuf from "protobufjs";

let pipe = "//./pipe/ButtplugPipe";
let pb = protobuf.loadSync("./src/buttplug-gui.proto");
let msgType = pb.lookupType("GuiMessage");

let stream = net.createServer();
stream.addListener("connection", (s) => {
  console.log("Got Connection!");
  s.addListener("data", (d) => {
    console.log("Got data!");
    msgType.verify(d);
    console.log(msgType.toObject(msgType.decode(d)));
  });
});
console.log("listening");
stream.listen(pipe);
