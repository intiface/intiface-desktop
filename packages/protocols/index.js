const request = require('request');
const fs = require('fs');
const unzip = require('unzip');
const pjson = require('./package.json');
const os = require('os');
const child_process = require('child_process');


async function genPBuf() {

  const pbversion = pjson.devDependencies["google-protobuf"].substring(1);
  const protoc_dir = `./protoc-${pbversion}`;
  const protoc_bin = `${protoc_dir}/bin/protoc`;
  const out_dir="./dist";
  const protoc_gen_ts_path="../../node_modules/.bin/protoc-gen-ts";
  let res;

  if (!fs.existsSync(protoc_dir)) {

    const protoc_zip = `./protoc-${pbversion}.zip`;
    let osname;

    switch (os.platform()) {
    case "darwin":
      osname = "osx-x86_64";
      break;
    case "linux":
      osname = "linux-x86_64";
      break;
    case "win32":
      osname = "win32";
      break;
    default:
      // crash so CI will stop
      throw new Error("Unsupported platform for downloading protoc!");
    }

    console.log("Getting protoc...");
    const url = `https://github.com/protocolbuffers/protobuf/releases/download/v${pbversion}/protoc-${pbversion}-${osname}.zip`;
    const file = fs.createWriteStream(protoc_zip);
    let p = new Promise((rs, rj) => { res = rs; });
    request(url).pipe(file).on("finish", () => {
      console.log("Wrote protoc...");
      res();
    });
    await p;
    file.close();
    console.log("Extracting protoc...");
    p = new Promise((rs, rj) => { res = rs; });
    fs.createReadStream(protoc_zip).pipe(unzip.Extract({ path: protoc_dir })).on("finish", () => {
      res();
    });
    await p;
    if (osname != "win32") {
      function sleep(ms){
        return new Promise(resolve=>{
          setTimeout(resolve,ms);
        });
      }
      console.log("Changing protoc to executable...");
      fs.chmodSync(protoc_bin, 0755);
      // On linux, something in chmod takes while in the OS, meaning
      // child_process will throw an ETXTBSY if we don't wait a bit. Using chmod
      // or fchmod, even with explicit close, doesn't seem to fix it. This
      // sucks, but luckily we only really need to do this once.
      await sleep(500);
    }
  }

  if (!fs.existsSync(out_dir)) {
    fs.mkdirSync(out_dir);
  }
  console.log("Generating protocols...");
  child_process.execFileSync(protoc_bin, [
    `--plugin=protoc-gen-ts=${protoc_gen_ts_path}`,
    `--js_out=import_style=commonjs,binary:${out_dir}`,
    `--ts_out=${out_dir}`,
    "intiface.proto"]);
}

genPBuf();
