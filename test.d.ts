import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Point. */
export interface IPoint {

    /** Point x */
    x: number;

    /** Point y */
    y: number;
}

/** Represents a Point. */
export class Point implements IPoint {

    /**
     * Constructs a new Point.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPoint);

    /** Point x. */
    public x: number;

    /** Point y. */
    public y: number;

    /**
     * Creates a new Point instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Point instance
     */
    public static create(properties?: IPoint): Point;

    /**
     * Encodes the specified Point message. Does not implicitly {@link Point.verify|verify} messages.
     * @param message Point message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Point message, length delimited. Does not implicitly {@link Point.verify|verify} messages.
     * @param message Point message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Point message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Point
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Point;

    /**
     * Decodes a Point message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Point
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Point;

    /**
     * Verifies a Point message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Point message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Point
     */
    public static fromObject(object: { [k: string]: any }): Point;

    /**
     * Creates a plain object from a Point message. Also converts values to other types if specified.
     * @param message Point
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Point to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Point
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Line. */
export interface ILine {

    /** Line start */
    start: IPoint;

    /** Line end */
    end: IPoint;
}

/** Represents a Line. */
export class Line implements ILine {

    /**
     * Constructs a new Line.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILine);

    /** Line start. */
    public start: IPoint;

    /** Line end. */
    public end: IPoint;

    /**
     * Creates a new Line instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Line instance
     */
    public static create(properties?: ILine): Line;

    /**
     * Encodes the specified Line message. Does not implicitly {@link Line.verify|verify} messages.
     * @param message Line message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Line message, length delimited. Does not implicitly {@link Line.verify|verify} messages.
     * @param message Line message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Line message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Line
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Line;

    /**
     * Decodes a Line message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Line
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Line;

    /**
     * Verifies a Line message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Line message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Line
     */
    public static fromObject(object: { [k: string]: any }): Line;

    /**
     * Creates a plain object from a Line message. Also converts values to other types if specified.
     * @param message Line
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Line, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Line to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Line
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
