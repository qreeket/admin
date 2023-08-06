PROTO_PATH=protos
OUT_DIR=generated

mkdir -p $OUT_DIR

protoc -I=$PROTO_PATH $(find $PROTO_PATH -name '*.proto') \
  --js_out=import_style=commonjs:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcweb:$OUT_DIR
  