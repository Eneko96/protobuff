/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Point = (function() {

    /**
     * Properties of a Point.
     * @exports IPoint
     * @interface IPoint
     * @property {number} x Point x
     * @property {number} y Point y
     */

    /**
     * Constructs a new Point.
     * @exports Point
     * @classdesc Represents a Point.
     * @implements IPoint
     * @constructor
     * @param {IPoint=} [properties] Properties to set
     */
    function Point(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Point x.
     * @member {number} x
     * @memberof Point
     * @instance
     */
    Point.prototype.x = 0;

    /**
     * Point y.
     * @member {number} y
     * @memberof Point
     * @instance
     */
    Point.prototype.y = 0;

    /**
     * Creates a new Point instance using the specified properties.
     * @function create
     * @memberof Point
     * @static
     * @param {IPoint=} [properties] Properties to set
     * @returns {Point} Point instance
     */
    Point.create = function create(properties) {
        return new Point(properties);
    };

    /**
     * Encodes the specified Point message. Does not implicitly {@link Point.verify|verify} messages.
     * @function encode
     * @memberof Point
     * @static
     * @param {IPoint} message Point message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
        return writer;
    };

    /**
     * Encodes the specified Point message, length delimited. Does not implicitly {@link Point.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Point
     * @static
     * @param {IPoint} message Point message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Point message from the specified reader or buffer.
     * @function decode
     * @memberof Point
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Point} Point
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Point();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.int32();
                    break;
                }
            case 2: {
                    message.y = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("x"))
            throw $util.ProtocolError("missing required 'x'", { instance: message });
        if (!message.hasOwnProperty("y"))
            throw $util.ProtocolError("missing required 'y'", { instance: message });
        return message;
    };

    /**
     * Decodes a Point message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Point
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Point} Point
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Point message.
     * @function verify
     * @memberof Point
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Point.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.x))
            return "x: integer expected";
        if (!$util.isInteger(message.y))
            return "y: integer expected";
        return null;
    };

    /**
     * Creates a Point message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Point
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Point} Point
     */
    Point.fromObject = function fromObject(object) {
        if (object instanceof $root.Point)
            return object;
        var message = new $root.Point();
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        return message;
    };

    /**
     * Creates a plain object from a Point message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Point
     * @static
     * @param {Point} message Point
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Point.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        return object;
    };

    /**
     * Converts this Point to JSON.
     * @function toJSON
     * @memberof Point
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Point.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Point
     * @function getTypeUrl
     * @memberof Point
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Point.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Point";
    };

    return Point;
})();

$root.Line = (function() {

    /**
     * Properties of a Line.
     * @exports ILine
     * @interface ILine
     * @property {IPoint} start Line start
     * @property {IPoint} end Line end
     */

    /**
     * Constructs a new Line.
     * @exports Line
     * @classdesc Represents a Line.
     * @implements ILine
     * @constructor
     * @param {ILine=} [properties] Properties to set
     */
    function Line(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Line start.
     * @member {IPoint} start
     * @memberof Line
     * @instance
     */
    Line.prototype.start = null;

    /**
     * Line end.
     * @member {IPoint} end
     * @memberof Line
     * @instance
     */
    Line.prototype.end = null;

    /**
     * Creates a new Line instance using the specified properties.
     * @function create
     * @memberof Line
     * @static
     * @param {ILine=} [properties] Properties to set
     * @returns {Line} Line instance
     */
    Line.create = function create(properties) {
        return new Line(properties);
    };

    /**
     * Encodes the specified Line message. Does not implicitly {@link Line.verify|verify} messages.
     * @function encode
     * @memberof Line
     * @static
     * @param {ILine} message Line message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Line.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.Point.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        $root.Point.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Line message, length delimited. Does not implicitly {@link Line.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Line
     * @static
     * @param {ILine} message Line message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Line.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Line message from the specified reader or buffer.
     * @function decode
     * @memberof Line
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Line} Line
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Line.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Line();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.start = $root.Point.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.end = $root.Point.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("start"))
            throw $util.ProtocolError("missing required 'start'", { instance: message });
        if (!message.hasOwnProperty("end"))
            throw $util.ProtocolError("missing required 'end'", { instance: message });
        return message;
    };

    /**
     * Decodes a Line message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Line
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Line} Line
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Line.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Line message.
     * @function verify
     * @memberof Line
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Line.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.Point.verify(message.start);
            if (error)
                return "start." + error;
        }
        {
            var error = $root.Point.verify(message.end);
            if (error)
                return "end." + error;
        }
        return null;
    };

    /**
     * Creates a Line message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Line
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Line} Line
     */
    Line.fromObject = function fromObject(object) {
        if (object instanceof $root.Line)
            return object;
        var message = new $root.Line();
        if (object.start != null) {
            if (typeof object.start !== "object")
                throw TypeError(".Line.start: object expected");
            message.start = $root.Point.fromObject(object.start);
        }
        if (object.end != null) {
            if (typeof object.end !== "object")
                throw TypeError(".Line.end: object expected");
            message.end = $root.Point.fromObject(object.end);
        }
        return message;
    };

    /**
     * Creates a plain object from a Line message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Line
     * @static
     * @param {Line} message Line
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Line.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.start = null;
            object.end = null;
        }
        if (message.start != null && message.hasOwnProperty("start"))
            object.start = $root.Point.toObject(message.start, options);
        if (message.end != null && message.hasOwnProperty("end"))
            object.end = $root.Point.toObject(message.end, options);
        return object;
    };

    /**
     * Converts this Line to JSON.
     * @function toJSON
     * @memberof Line
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Line.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Line
     * @function getTypeUrl
     * @memberof Line
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Line.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Line";
    };

    return Line;
})();

module.exports = $root;
