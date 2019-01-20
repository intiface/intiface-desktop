# TODO Fetch the protoc version from our package.json
# TODO Autodetect platform?

if [ ! -d "./protoc" ]; then
  wget https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protoc-3.6.1-linux-x86_64.zip
  mkdir protoc
  cd protoc || exit
  unzip ../protoc-3.6.1-linux-x86_64.zip
  cd ..
  rm protoc-3.6.1-linux-x86_64.zip
fi

# Path to this plugin
PROTOC_GEN_TS_PATH="../../node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./dist"

mkdir -p ${OUT_DIR}

./protoc/bin/protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    intiface.proto
