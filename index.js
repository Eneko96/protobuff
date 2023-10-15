const protobuf = require("protobufjs");

const Point = protobuf.loadSync("polyline.proto").lookupType("Point");

const point = Point.create({ x: 1, y: 2 });

const buffer = Point.encode(point).finish();

const decodedPoint = Point.decode(buffer);

console.log(decodedPoint);

// save to file

const fs = require("fs");

fs.writeFileSync("point.bin", buffer);

// read from file

const bufferFromFile = fs.readFileSync("point.bin");

const decodedPointFromFile = Point.decode(bufferFromFile);

console.log(decodedPointFromFile);

// misstype field name

let pointWithMisstypedField;
try {
  pointWithMisstypedField = Point.create({ x: "string", z: 2 });
} catch (e) {
  console.log(e);
}

const bufferWithMisstypedField = Point.encode(pointWithMisstypedField).finish();

const decodedPointWithMisstypedField = Point.decode(bufferWithMisstypedField);

console.log(decodedPointWithMisstypedField);
