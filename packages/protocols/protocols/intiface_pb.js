/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.IntifaceProtocols = (function() {

    /**
     * Namespace IntifaceProtocols.
     * @exports IntifaceProtocols
     * @namespace
     */
    var IntifaceProtocols = {};

    IntifaceProtocols.ServerControlMessage = (function() {

        /**
         * Properties of a ServerControlMessage.
         * @memberof IntifaceProtocols
         * @interface IServerControlMessage
         * @property {IntifaceProtocols.ServerControlMessage.IStop|null} [stop] ServerControlMessage stop
         */

        /**
         * Constructs a new ServerControlMessage.
         * @memberof IntifaceProtocols
         * @classdesc Represents a ServerControlMessage.
         * @implements IServerControlMessage
         * @constructor
         * @param {IntifaceProtocols.IServerControlMessage=} [properties] Properties to set
         */
        function ServerControlMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerControlMessage stop.
         * @member {IntifaceProtocols.ServerControlMessage.IStop|null|undefined} stop
         * @memberof IntifaceProtocols.ServerControlMessage
         * @instance
         */
        ServerControlMessage.prototype.stop = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ServerControlMessage msg.
         * @member {"stop"|undefined} msg
         * @memberof IntifaceProtocols.ServerControlMessage
         * @instance
         */
        Object.defineProperty(ServerControlMessage.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["stop"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerControlMessage instance using the specified properties.
         * @function create
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {IntifaceProtocols.IServerControlMessage=} [properties] Properties to set
         * @returns {IntifaceProtocols.ServerControlMessage} ServerControlMessage instance
         */
        ServerControlMessage.create = function create(properties) {
            return new ServerControlMessage(properties);
        };

        /**
         * Encodes the specified ServerControlMessage message. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.verify|verify} messages.
         * @function encode
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {IntifaceProtocols.IServerControlMessage} message ServerControlMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerControlMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stop != null && Object.hasOwnProperty.call(message, "stop"))
                $root.IntifaceProtocols.ServerControlMessage.Stop.encode(message.stop, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerControlMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {IntifaceProtocols.IServerControlMessage} message ServerControlMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerControlMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerControlMessage message from the specified reader or buffer.
         * @function decode
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IntifaceProtocols.ServerControlMessage} ServerControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerControlMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerControlMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stop = $root.IntifaceProtocols.ServerControlMessage.Stop.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerControlMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IntifaceProtocols.ServerControlMessage} ServerControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerControlMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerControlMessage message.
         * @function verify
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerControlMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.stop != null && message.hasOwnProperty("stop")) {
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerControlMessage.Stop.verify(message.stop);
                    if (error)
                        return "stop." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerControlMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {IntifaceProtocols.ServerControlMessage} ServerControlMessage
         */
        ServerControlMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.IntifaceProtocols.ServerControlMessage)
                return object;
            var message = new $root.IntifaceProtocols.ServerControlMessage();
            if (object.stop != null) {
                if (typeof object.stop !== "object")
                    throw TypeError(".IntifaceProtocols.ServerControlMessage.stop: object expected");
                message.stop = $root.IntifaceProtocols.ServerControlMessage.Stop.fromObject(object.stop);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerControlMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof IntifaceProtocols.ServerControlMessage
         * @static
         * @param {IntifaceProtocols.ServerControlMessage} message ServerControlMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerControlMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.stop != null && message.hasOwnProperty("stop")) {
                object.stop = $root.IntifaceProtocols.ServerControlMessage.Stop.toObject(message.stop, options);
                if (options.oneofs)
                    object.msg = "stop";
            }
            return object;
        };

        /**
         * Converts this ServerControlMessage to JSON.
         * @function toJSON
         * @memberof IntifaceProtocols.ServerControlMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerControlMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerControlMessage.Stop = (function() {

            /**
             * Properties of a Stop.
             * @memberof IntifaceProtocols.ServerControlMessage
             * @interface IStop
             */

            /**
             * Constructs a new Stop.
             * @memberof IntifaceProtocols.ServerControlMessage
             * @classdesc Represents a Stop.
             * @implements IStop
             * @constructor
             * @param {IntifaceProtocols.ServerControlMessage.IStop=} [properties] Properties to set
             */
            function Stop(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Stop instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {IntifaceProtocols.ServerControlMessage.IStop=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerControlMessage.Stop} Stop instance
             */
            Stop.create = function create(properties) {
                return new Stop(properties);
            };

            /**
             * Encodes the specified Stop message. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.Stop.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {IntifaceProtocols.ServerControlMessage.IStop} message Stop message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stop.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Stop message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.Stop.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {IntifaceProtocols.ServerControlMessage.IStop} message Stop message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stop.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Stop message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerControlMessage.Stop} Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stop.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerControlMessage.Stop();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Stop message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerControlMessage.Stop} Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stop.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Stop message.
             * @function verify
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Stop.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Stop message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerControlMessage.Stop} Stop
             */
            Stop.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerControlMessage.Stop)
                    return object;
                return new $root.IntifaceProtocols.ServerControlMessage.Stop();
            };

            /**
             * Creates a plain object from a Stop message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @static
             * @param {IntifaceProtocols.ServerControlMessage.Stop} message Stop
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Stop.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Stop to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerControlMessage.Stop
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Stop.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Stop;
        })();

        return ServerControlMessage;
    })();

    IntifaceProtocols.ServerProcessMessage = (function() {

        /**
         * Properties of a ServerProcessMessage.
         * @memberof IntifaceProtocols
         * @interface IServerProcessMessage
         * @property {IntifaceProtocols.ServerProcessMessage.IProcessStarted|null} [processStarted] ServerProcessMessage processStarted
         * @property {IntifaceProtocols.ServerProcessMessage.IProcessError|null} [processError] ServerProcessMessage processError
         * @property {IntifaceProtocols.ServerProcessMessage.IProcessEnded|null} [processEnded] ServerProcessMessage processEnded
         * @property {IntifaceProtocols.ServerProcessMessage.IProcessLog|null} [processLog] ServerProcessMessage processLog
         * @property {IntifaceProtocols.ServerProcessMessage.IButtplugLog|null} [buttplugLog] ServerProcessMessage buttplugLog
         * @property {IntifaceProtocols.ServerProcessMessage.IClientConnected|null} [clientConnected] ServerProcessMessage clientConnected
         * @property {IntifaceProtocols.ServerProcessMessage.IClientDisconnected|null} [clientDisconnected] ServerProcessMessage clientDisconnected
         * @property {IntifaceProtocols.ServerProcessMessage.IDeviceConnected|null} [deviceConnected] ServerProcessMessage deviceConnected
         * @property {IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected|null} [deviceDisconnected] ServerProcessMessage deviceDisconnected
         * @property {IntifaceProtocols.ServerProcessMessage.IClientRejected|null} [clientRejected] ServerProcessMessage clientRejected
         */

        /**
         * Constructs a new ServerProcessMessage.
         * @memberof IntifaceProtocols
         * @classdesc Represents a ServerProcessMessage.
         * @implements IServerProcessMessage
         * @constructor
         * @param {IntifaceProtocols.IServerProcessMessage=} [properties] Properties to set
         */
        function ServerProcessMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerProcessMessage processStarted.
         * @member {IntifaceProtocols.ServerProcessMessage.IProcessStarted|null|undefined} processStarted
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.processStarted = null;

        /**
         * ServerProcessMessage processError.
         * @member {IntifaceProtocols.ServerProcessMessage.IProcessError|null|undefined} processError
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.processError = null;

        /**
         * ServerProcessMessage processEnded.
         * @member {IntifaceProtocols.ServerProcessMessage.IProcessEnded|null|undefined} processEnded
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.processEnded = null;

        /**
         * ServerProcessMessage processLog.
         * @member {IntifaceProtocols.ServerProcessMessage.IProcessLog|null|undefined} processLog
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.processLog = null;

        /**
         * ServerProcessMessage buttplugLog.
         * @member {IntifaceProtocols.ServerProcessMessage.IButtplugLog|null|undefined} buttplugLog
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.buttplugLog = null;

        /**
         * ServerProcessMessage clientConnected.
         * @member {IntifaceProtocols.ServerProcessMessage.IClientConnected|null|undefined} clientConnected
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.clientConnected = null;

        /**
         * ServerProcessMessage clientDisconnected.
         * @member {IntifaceProtocols.ServerProcessMessage.IClientDisconnected|null|undefined} clientDisconnected
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.clientDisconnected = null;

        /**
         * ServerProcessMessage deviceConnected.
         * @member {IntifaceProtocols.ServerProcessMessage.IDeviceConnected|null|undefined} deviceConnected
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.deviceConnected = null;

        /**
         * ServerProcessMessage deviceDisconnected.
         * @member {IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected|null|undefined} deviceDisconnected
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.deviceDisconnected = null;

        /**
         * ServerProcessMessage clientRejected.
         * @member {IntifaceProtocols.ServerProcessMessage.IClientRejected|null|undefined} clientRejected
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        ServerProcessMessage.prototype.clientRejected = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ServerProcessMessage msg.
         * @member {"processStarted"|"processError"|"processEnded"|"processLog"|"buttplugLog"|"clientConnected"|"clientDisconnected"|"deviceConnected"|"deviceDisconnected"|"clientRejected"|undefined} msg
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         */
        Object.defineProperty(ServerProcessMessage.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["processStarted", "processError", "processEnded", "processLog", "buttplugLog", "clientConnected", "clientDisconnected", "deviceConnected", "deviceDisconnected", "clientRejected"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerProcessMessage instance using the specified properties.
         * @function create
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {IntifaceProtocols.IServerProcessMessage=} [properties] Properties to set
         * @returns {IntifaceProtocols.ServerProcessMessage} ServerProcessMessage instance
         */
        ServerProcessMessage.create = function create(properties) {
            return new ServerProcessMessage(properties);
        };

        /**
         * Encodes the specified ServerProcessMessage message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.verify|verify} messages.
         * @function encode
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {IntifaceProtocols.IServerProcessMessage} message ServerProcessMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerProcessMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.processStarted != null && Object.hasOwnProperty.call(message, "processStarted"))
                $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted.encode(message.processStarted, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.processError != null && Object.hasOwnProperty.call(message, "processError"))
                $root.IntifaceProtocols.ServerProcessMessage.ProcessError.encode(message.processError, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.processEnded != null && Object.hasOwnProperty.call(message, "processEnded"))
                $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded.encode(message.processEnded, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.processLog != null && Object.hasOwnProperty.call(message, "processLog"))
                $root.IntifaceProtocols.ServerProcessMessage.ProcessLog.encode(message.processLog, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.buttplugLog != null && Object.hasOwnProperty.call(message, "buttplugLog"))
                $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog.encode(message.buttplugLog, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.clientConnected != null && Object.hasOwnProperty.call(message, "clientConnected"))
                $root.IntifaceProtocols.ServerProcessMessage.ClientConnected.encode(message.clientConnected, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.clientDisconnected != null && Object.hasOwnProperty.call(message, "clientDisconnected"))
                $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected.encode(message.clientDisconnected, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.deviceConnected != null && Object.hasOwnProperty.call(message, "deviceConnected"))
                $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected.encode(message.deviceConnected, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.deviceDisconnected != null && Object.hasOwnProperty.call(message, "deviceDisconnected"))
                $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.encode(message.deviceDisconnected, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.clientRejected != null && Object.hasOwnProperty.call(message, "clientRejected"))
                $root.IntifaceProtocols.ServerProcessMessage.ClientRejected.encode(message.clientRejected, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerProcessMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {IntifaceProtocols.IServerProcessMessage} message ServerProcessMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerProcessMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer.
         * @function decode
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IntifaceProtocols.ServerProcessMessage} ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerProcessMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.processStarted = $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.processError = $root.IntifaceProtocols.ServerProcessMessage.ProcessError.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.processEnded = $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.processLog = $root.IntifaceProtocols.ServerProcessMessage.ProcessLog.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.buttplugLog = $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.clientConnected = $root.IntifaceProtocols.ServerProcessMessage.ClientConnected.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.clientDisconnected = $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.deviceConnected = $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deviceDisconnected = $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.clientRejected = $root.IntifaceProtocols.ServerProcessMessage.ClientRejected.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IntifaceProtocols.ServerProcessMessage} ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerProcessMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerProcessMessage message.
         * @function verify
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerProcessMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.processStarted != null && message.hasOwnProperty("processStarted")) {
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted.verify(message.processStarted);
                    if (error)
                        return "processStarted." + error;
                }
            }
            if (message.processError != null && message.hasOwnProperty("processError")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ProcessError.verify(message.processError);
                    if (error)
                        return "processError." + error;
                }
            }
            if (message.processEnded != null && message.hasOwnProperty("processEnded")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded.verify(message.processEnded);
                    if (error)
                        return "processEnded." + error;
                }
            }
            if (message.processLog != null && message.hasOwnProperty("processLog")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ProcessLog.verify(message.processLog);
                    if (error)
                        return "processLog." + error;
                }
            }
            if (message.buttplugLog != null && message.hasOwnProperty("buttplugLog")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog.verify(message.buttplugLog);
                    if (error)
                        return "buttplugLog." + error;
                }
            }
            if (message.clientConnected != null && message.hasOwnProperty("clientConnected")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ClientConnected.verify(message.clientConnected);
                    if (error)
                        return "clientConnected." + error;
                }
            }
            if (message.clientDisconnected != null && message.hasOwnProperty("clientDisconnected")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected.verify(message.clientDisconnected);
                    if (error)
                        return "clientDisconnected." + error;
                }
            }
            if (message.deviceConnected != null && message.hasOwnProperty("deviceConnected")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected.verify(message.deviceConnected);
                    if (error)
                        return "deviceConnected." + error;
                }
            }
            if (message.deviceDisconnected != null && message.hasOwnProperty("deviceDisconnected")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.verify(message.deviceDisconnected);
                    if (error)
                        return "deviceDisconnected." + error;
                }
            }
            if (message.clientRejected != null && message.hasOwnProperty("clientRejected")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.ClientRejected.verify(message.clientRejected);
                    if (error)
                        return "clientRejected." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerProcessMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {IntifaceProtocols.ServerProcessMessage} ServerProcessMessage
         */
        ServerProcessMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.IntifaceProtocols.ServerProcessMessage)
                return object;
            var message = new $root.IntifaceProtocols.ServerProcessMessage();
            if (object.processStarted != null) {
                if (typeof object.processStarted !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.processStarted: object expected");
                message.processStarted = $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted.fromObject(object.processStarted);
            }
            if (object.processError != null) {
                if (typeof object.processError !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.processError: object expected");
                message.processError = $root.IntifaceProtocols.ServerProcessMessage.ProcessError.fromObject(object.processError);
            }
            if (object.processEnded != null) {
                if (typeof object.processEnded !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.processEnded: object expected");
                message.processEnded = $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded.fromObject(object.processEnded);
            }
            if (object.processLog != null) {
                if (typeof object.processLog !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.processLog: object expected");
                message.processLog = $root.IntifaceProtocols.ServerProcessMessage.ProcessLog.fromObject(object.processLog);
            }
            if (object.buttplugLog != null) {
                if (typeof object.buttplugLog !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.buttplugLog: object expected");
                message.buttplugLog = $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog.fromObject(object.buttplugLog);
            }
            if (object.clientConnected != null) {
                if (typeof object.clientConnected !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.clientConnected: object expected");
                message.clientConnected = $root.IntifaceProtocols.ServerProcessMessage.ClientConnected.fromObject(object.clientConnected);
            }
            if (object.clientDisconnected != null) {
                if (typeof object.clientDisconnected !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.clientDisconnected: object expected");
                message.clientDisconnected = $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected.fromObject(object.clientDisconnected);
            }
            if (object.deviceConnected != null) {
                if (typeof object.deviceConnected !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.deviceConnected: object expected");
                message.deviceConnected = $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected.fromObject(object.deviceConnected);
            }
            if (object.deviceDisconnected != null) {
                if (typeof object.deviceDisconnected !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.deviceDisconnected: object expected");
                message.deviceDisconnected = $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.fromObject(object.deviceDisconnected);
            }
            if (object.clientRejected != null) {
                if (typeof object.clientRejected !== "object")
                    throw TypeError(".IntifaceProtocols.ServerProcessMessage.clientRejected: object expected");
                message.clientRejected = $root.IntifaceProtocols.ServerProcessMessage.ClientRejected.fromObject(object.clientRejected);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerProcessMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @static
         * @param {IntifaceProtocols.ServerProcessMessage} message ServerProcessMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerProcessMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.processStarted != null && message.hasOwnProperty("processStarted")) {
                object.processStarted = $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted.toObject(message.processStarted, options);
                if (options.oneofs)
                    object.msg = "processStarted";
            }
            if (message.processError != null && message.hasOwnProperty("processError")) {
                object.processError = $root.IntifaceProtocols.ServerProcessMessage.ProcessError.toObject(message.processError, options);
                if (options.oneofs)
                    object.msg = "processError";
            }
            if (message.processEnded != null && message.hasOwnProperty("processEnded")) {
                object.processEnded = $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded.toObject(message.processEnded, options);
                if (options.oneofs)
                    object.msg = "processEnded";
            }
            if (message.processLog != null && message.hasOwnProperty("processLog")) {
                object.processLog = $root.IntifaceProtocols.ServerProcessMessage.ProcessLog.toObject(message.processLog, options);
                if (options.oneofs)
                    object.msg = "processLog";
            }
            if (message.buttplugLog != null && message.hasOwnProperty("buttplugLog")) {
                object.buttplugLog = $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog.toObject(message.buttplugLog, options);
                if (options.oneofs)
                    object.msg = "buttplugLog";
            }
            if (message.clientConnected != null && message.hasOwnProperty("clientConnected")) {
                object.clientConnected = $root.IntifaceProtocols.ServerProcessMessage.ClientConnected.toObject(message.clientConnected, options);
                if (options.oneofs)
                    object.msg = "clientConnected";
            }
            if (message.clientDisconnected != null && message.hasOwnProperty("clientDisconnected")) {
                object.clientDisconnected = $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected.toObject(message.clientDisconnected, options);
                if (options.oneofs)
                    object.msg = "clientDisconnected";
            }
            if (message.deviceConnected != null && message.hasOwnProperty("deviceConnected")) {
                object.deviceConnected = $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected.toObject(message.deviceConnected, options);
                if (options.oneofs)
                    object.msg = "deviceConnected";
            }
            if (message.deviceDisconnected != null && message.hasOwnProperty("deviceDisconnected")) {
                object.deviceDisconnected = $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.toObject(message.deviceDisconnected, options);
                if (options.oneofs)
                    object.msg = "deviceDisconnected";
            }
            if (message.clientRejected != null && message.hasOwnProperty("clientRejected")) {
                object.clientRejected = $root.IntifaceProtocols.ServerProcessMessage.ClientRejected.toObject(message.clientRejected, options);
                if (options.oneofs)
                    object.msg = "clientRejected";
            }
            return object;
        };

        /**
         * Converts this ServerProcessMessage to JSON.
         * @function toJSON
         * @memberof IntifaceProtocols.ServerProcessMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerProcessMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerProcessMessage.ProcessLog = (function() {

            /**
             * Properties of a ProcessLog.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IProcessLog
             * @property {string|null} [message] ProcessLog message
             */

            /**
             * Constructs a new ProcessLog.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ProcessLog.
             * @implements IProcessLog
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessLog=} [properties] Properties to set
             */
            function ProcessLog(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessLog message.
             * @member {string} message
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @instance
             */
            ProcessLog.prototype.message = "";

            /**
             * Creates a new ProcessLog instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessLog=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessLog} ProcessLog instance
             */
            ProcessLog.create = function create(properties) {
                return new ProcessLog(properties);
            };

            /**
             * Encodes the specified ProcessLog message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessLog} message ProcessLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessLog.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ProcessLog message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessLog} message ProcessLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessLog.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessLog message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessLog} ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessLog.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ProcessLog();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessLog message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessLog} ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessLog.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessLog message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessLog.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ProcessLog message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessLog} ProcessLog
             */
            ProcessLog.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ProcessLog)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.ProcessLog();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ProcessLog message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ProcessLog} message ProcessLog
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessLog.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ProcessLog to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessLog
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessLog.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessLog;
        })();

        ServerProcessMessage.ProcessStarted = (function() {

            /**
             * Properties of a ProcessStarted.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IProcessStarted
             */

            /**
             * Constructs a new ProcessStarted.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ProcessStarted.
             * @implements IProcessStarted
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessStarted=} [properties] Properties to set
             */
            function ProcessStarted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ProcessStarted instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessStarted=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessStarted} ProcessStarted instance
             */
            ProcessStarted.create = function create(properties) {
                return new ProcessStarted(properties);
            };

            /**
             * Encodes the specified ProcessStarted message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessStarted} message ProcessStarted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessStarted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ProcessStarted message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessStarted} message ProcessStarted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessStarted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessStarted} ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessStarted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessStarted} ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessStarted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessStarted message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessStarted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ProcessStarted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessStarted} ProcessStarted
             */
            ProcessStarted.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted)
                    return object;
                return new $root.IntifaceProtocols.ServerProcessMessage.ProcessStarted();
            };

            /**
             * Creates a plain object from a ProcessStarted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ProcessStarted} message ProcessStarted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessStarted.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ProcessStarted to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessStarted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessStarted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessStarted;
        })();

        ServerProcessMessage.ProcessError = (function() {

            /**
             * Properties of a ProcessError.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IProcessError
             * @property {string|null} [message] ProcessError message
             */

            /**
             * Constructs a new ProcessError.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ProcessError.
             * @implements IProcessError
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessError=} [properties] Properties to set
             */
            function ProcessError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessError message.
             * @member {string} message
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @instance
             */
            ProcessError.prototype.message = "";

            /**
             * Creates a new ProcessError instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessError=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessError} ProcessError instance
             */
            ProcessError.create = function create(properties) {
                return new ProcessError(properties);
            };

            /**
             * Encodes the specified ProcessError message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessError.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessError} message ProcessError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ProcessError message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessError} message ProcessError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessError message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessError} ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ProcessError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessError} ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessError message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ProcessError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessError} ProcessError
             */
            ProcessError.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ProcessError)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.ProcessError();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ProcessError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ProcessError} message ProcessError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ProcessError to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessError;
        })();

        ServerProcessMessage.ProcessEnded = (function() {

            /**
             * Properties of a ProcessEnded.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IProcessEnded
             */

            /**
             * Constructs a new ProcessEnded.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ProcessEnded.
             * @implements IProcessEnded
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessEnded=} [properties] Properties to set
             */
            function ProcessEnded(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ProcessEnded instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessEnded=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessEnded} ProcessEnded instance
             */
            ProcessEnded.create = function create(properties) {
                return new ProcessEnded(properties);
            };

            /**
             * Encodes the specified ProcessEnded message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessEnded} message ProcessEnded message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessEnded.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ProcessEnded message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IProcessEnded} message ProcessEnded message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessEnded.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessEnded} ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessEnded.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessEnded} ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessEnded.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessEnded message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessEnded.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ProcessEnded message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ProcessEnded} ProcessEnded
             */
            ProcessEnded.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded)
                    return object;
                return new $root.IntifaceProtocols.ServerProcessMessage.ProcessEnded();
            };

            /**
             * Creates a plain object from a ProcessEnded message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ProcessEnded} message ProcessEnded
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessEnded.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ProcessEnded to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ProcessEnded
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessEnded.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessEnded;
        })();

        ServerProcessMessage.ButtplugLog = (function() {

            /**
             * Properties of a ButtplugLog.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IButtplugLog
             * @property {string|null} [message] ButtplugLog message
             */

            /**
             * Constructs a new ButtplugLog.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ButtplugLog.
             * @implements IButtplugLog
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IButtplugLog=} [properties] Properties to set
             */
            function ButtplugLog(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ButtplugLog message.
             * @member {string} message
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @instance
             */
            ButtplugLog.prototype.message = "";

            /**
             * Creates a new ButtplugLog instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IButtplugLog=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ButtplugLog} ButtplugLog instance
             */
            ButtplugLog.create = function create(properties) {
                return new ButtplugLog(properties);
            };

            /**
             * Encodes the specified ButtplugLog message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IButtplugLog} message ButtplugLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ButtplugLog.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ButtplugLog message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IButtplugLog} message ButtplugLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ButtplugLog.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ButtplugLog} ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ButtplugLog.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ButtplugLog} ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ButtplugLog.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ButtplugLog message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ButtplugLog.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ButtplugLog message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ButtplugLog} ButtplugLog
             */
            ButtplugLog.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.ButtplugLog();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ButtplugLog message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ButtplugLog} message ButtplugLog
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ButtplugLog.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ButtplugLog to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ButtplugLog
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ButtplugLog.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ButtplugLog;
        })();

        ServerProcessMessage.ClientConnected = (function() {

            /**
             * Properties of a ClientConnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IClientConnected
             * @property {string|null} [clientName] ClientConnected clientName
             */

            /**
             * Constructs a new ClientConnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ClientConnected.
             * @implements IClientConnected
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IClientConnected=} [properties] Properties to set
             */
            function ClientConnected(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientConnected clientName.
             * @member {string} clientName
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @instance
             */
            ClientConnected.prototype.clientName = "";

            /**
             * Creates a new ClientConnected instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientConnected=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientConnected} ClientConnected instance
             */
            ClientConnected.create = function create(properties) {
                return new ClientConnected(properties);
            };

            /**
             * Encodes the specified ClientConnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientConnected} message ClientConnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientConnected.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.clientName != null && Object.hasOwnProperty.call(message, "clientName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientName);
                return writer;
            };

            /**
             * Encodes the specified ClientConnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientConnected} message ClientConnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientConnected.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientConnected message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientConnected} ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientConnected.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ClientConnected();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.clientName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClientConnected message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientConnected} ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientConnected.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientConnected message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientConnected.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.clientName != null && message.hasOwnProperty("clientName"))
                    if (!$util.isString(message.clientName))
                        return "clientName: string expected";
                return null;
            };

            /**
             * Creates a ClientConnected message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientConnected} ClientConnected
             */
            ClientConnected.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ClientConnected)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.ClientConnected();
                if (object.clientName != null)
                    message.clientName = String(object.clientName);
                return message;
            };

            /**
             * Creates a plain object from a ClientConnected message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ClientConnected} message ClientConnected
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientConnected.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.clientName = "";
                if (message.clientName != null && message.hasOwnProperty("clientName"))
                    object.clientName = message.clientName;
                return object;
            };

            /**
             * Converts this ClientConnected to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientConnected
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientConnected.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ClientConnected;
        })();

        ServerProcessMessage.ClientDisconnected = (function() {

            /**
             * Properties of a ClientDisconnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IClientDisconnected
             */

            /**
             * Constructs a new ClientDisconnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ClientDisconnected.
             * @implements IClientDisconnected
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IClientDisconnected=} [properties] Properties to set
             */
            function ClientDisconnected(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ClientDisconnected instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientDisconnected=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientDisconnected} ClientDisconnected instance
             */
            ClientDisconnected.create = function create(properties) {
                return new ClientDisconnected(properties);
            };

            /**
             * Encodes the specified ClientDisconnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientDisconnected} message ClientDisconnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientDisconnected.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ClientDisconnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientDisconnected} message ClientDisconnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientDisconnected.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientDisconnected} ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientDisconnected.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientDisconnected} ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientDisconnected.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientDisconnected message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientDisconnected.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ClientDisconnected message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientDisconnected} ClientDisconnected
             */
            ClientDisconnected.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected)
                    return object;
                return new $root.IntifaceProtocols.ServerProcessMessage.ClientDisconnected();
            };

            /**
             * Creates a plain object from a ClientDisconnected message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ClientDisconnected} message ClientDisconnected
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientDisconnected.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ClientDisconnected to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientDisconnected
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientDisconnected.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ClientDisconnected;
        })();

        ServerProcessMessage.DeviceConnected = (function() {

            /**
             * Properties of a DeviceConnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IDeviceConnected
             * @property {string|null} [deviceName] DeviceConnected deviceName
             * @property {number|null} [deviceId] DeviceConnected deviceId
             */

            /**
             * Constructs a new DeviceConnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a DeviceConnected.
             * @implements IDeviceConnected
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceConnected=} [properties] Properties to set
             */
            function DeviceConnected(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeviceConnected deviceName.
             * @member {string} deviceName
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @instance
             */
            DeviceConnected.prototype.deviceName = "";

            /**
             * DeviceConnected deviceId.
             * @member {number} deviceId
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @instance
             */
            DeviceConnected.prototype.deviceId = 0;

            /**
             * Creates a new DeviceConnected instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceConnected=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceConnected} DeviceConnected instance
             */
            DeviceConnected.create = function create(properties) {
                return new DeviceConnected(properties);
            };

            /**
             * Encodes the specified DeviceConnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceConnected} message DeviceConnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceConnected.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceName);
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.deviceId);
                return writer;
            };

            /**
             * Encodes the specified DeviceConnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceConnected} message DeviceConnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceConnected.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceConnected} DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceConnected.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deviceName = reader.string();
                        break;
                    case 2:
                        message.deviceId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceConnected} DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceConnected.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeviceConnected message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceConnected.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                    if (!$util.isString(message.deviceName))
                        return "deviceName: string expected";
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isInteger(message.deviceId))
                        return "deviceId: integer expected";
                return null;
            };

            /**
             * Creates a DeviceConnected message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceConnected} DeviceConnected
             */
            DeviceConnected.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.DeviceConnected();
                if (object.deviceName != null)
                    message.deviceName = String(object.deviceName);
                if (object.deviceId != null)
                    message.deviceId = object.deviceId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a DeviceConnected message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.DeviceConnected} message DeviceConnected
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceConnected.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.deviceName = "";
                    object.deviceId = 0;
                }
                if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                    object.deviceName = message.deviceName;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                return object;
            };

            /**
             * Converts this DeviceConnected to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceConnected
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceConnected.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeviceConnected;
        })();

        ServerProcessMessage.DeviceDisconnected = (function() {

            /**
             * Properties of a DeviceDisconnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IDeviceDisconnected
             * @property {number|null} [deviceId] DeviceDisconnected deviceId
             */

            /**
             * Constructs a new DeviceDisconnected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a DeviceDisconnected.
             * @implements IDeviceDisconnected
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected=} [properties] Properties to set
             */
            function DeviceDisconnected(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeviceDisconnected deviceId.
             * @member {number} deviceId
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @instance
             */
            DeviceDisconnected.prototype.deviceId = 0;

            /**
             * Creates a new DeviceDisconnected instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceDisconnected} DeviceDisconnected instance
             */
            DeviceDisconnected.create = function create(properties) {
                return new DeviceDisconnected(properties);
            };

            /**
             * Encodes the specified DeviceDisconnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected} message DeviceDisconnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceDisconnected.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.deviceId);
                return writer;
            };

            /**
             * Encodes the specified DeviceDisconnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected} message DeviceDisconnected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceDisconnected.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceDisconnected} DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceDisconnected.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deviceId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceDisconnected} DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceDisconnected.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeviceDisconnected message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceDisconnected.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isInteger(message.deviceId))
                        return "deviceId: integer expected";
                return null;
            };

            /**
             * Creates a DeviceDisconnected message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.DeviceDisconnected} DeviceDisconnected
             */
            DeviceDisconnected.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.DeviceDisconnected();
                if (object.deviceId != null)
                    message.deviceId = object.deviceId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a DeviceDisconnected message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.DeviceDisconnected} message DeviceDisconnected
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceDisconnected.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.deviceId = 0;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                return object;
            };

            /**
             * Converts this DeviceDisconnected to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.DeviceDisconnected
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceDisconnected.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeviceDisconnected;
        })();

        ServerProcessMessage.ClientRejected = (function() {

            /**
             * Properties of a ClientRejected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @interface IClientRejected
             * @property {string|null} [clientName] ClientRejected clientName
             */

            /**
             * Constructs a new ClientRejected.
             * @memberof IntifaceProtocols.ServerProcessMessage
             * @classdesc Represents a ClientRejected.
             * @implements IClientRejected
             * @constructor
             * @param {IntifaceProtocols.ServerProcessMessage.IClientRejected=} [properties] Properties to set
             */
            function ClientRejected(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientRejected clientName.
             * @member {string} clientName
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @instance
             */
            ClientRejected.prototype.clientName = "";

            /**
             * Creates a new ClientRejected instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientRejected=} [properties] Properties to set
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientRejected} ClientRejected instance
             */
            ClientRejected.create = function create(properties) {
                return new ClientRejected(properties);
            };

            /**
             * Encodes the specified ClientRejected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientRejected.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientRejected} message ClientRejected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientRejected.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.clientName != null && Object.hasOwnProperty.call(message, "clientName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientName);
                return writer;
            };

            /**
             * Encodes the specified ClientRejected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientRejected.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.IClientRejected} message ClientRejected message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientRejected.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientRejected message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientRejected} ClientRejected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientRejected.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.ServerProcessMessage.ClientRejected();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.clientName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClientRejected message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientRejected} ClientRejected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientRejected.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientRejected message.
             * @function verify
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientRejected.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.clientName != null && message.hasOwnProperty("clientName"))
                    if (!$util.isString(message.clientName))
                        return "clientName: string expected";
                return null;
            };

            /**
             * Creates a ClientRejected message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.ServerProcessMessage.ClientRejected} ClientRejected
             */
            ClientRejected.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.ServerProcessMessage.ClientRejected)
                    return object;
                var message = new $root.IntifaceProtocols.ServerProcessMessage.ClientRejected();
                if (object.clientName != null)
                    message.clientName = String(object.clientName);
                return message;
            };

            /**
             * Creates a plain object from a ClientRejected message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @static
             * @param {IntifaceProtocols.ServerProcessMessage.ClientRejected} message ClientRejected
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientRejected.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.clientName = "";
                if (message.clientName != null && message.hasOwnProperty("clientName"))
                    object.clientName = message.clientName;
                return object;
            };

            /**
             * Converts this ClientRejected to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.ServerProcessMessage.ClientRejected
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientRejected.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ClientRejected;
        })();

        return ServerProcessMessage;
    })();

    IntifaceProtocols.IntifaceBackendMessage = (function() {

        /**
         * Properties of an IntifaceBackendMessage.
         * @memberof IntifaceProtocols
         * @interface IIntifaceBackendMessage
         * @property {number|null} [index] IntifaceBackendMessage index
         * @property {IntifaceProtocols.IntifaceBackendMessage.IOk|null} [ok] IntifaceBackendMessage ok
         * @property {IntifaceProtocols.IntifaceBackendMessage.IError|null} [error] IntifaceBackendMessage error
         * @property {IntifaceProtocols.IntifaceBackendMessage.IConfiguration|null} [configuration] IntifaceBackendMessage configuration
         * @property {IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable|null} [updatesAvailable] IntifaceBackendMessage updatesAvailable
         * @property {IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress|null} [downloadProgress] IntifaceBackendMessage downloadProgress
         * @property {IntifaceProtocols.IServerProcessMessage|null} [serverProcessMessage] IntifaceBackendMessage serverProcessMessage
         * @property {IntifaceProtocols.IntifaceBackendMessage.ILogMessage|null} [logMessage] IntifaceBackendMessage logMessage
         * @property {IntifaceProtocols.IntifaceBackendMessage.IProcessError|null} [processError] IntifaceBackendMessage processError
         */

        /**
         * Constructs a new IntifaceBackendMessage.
         * @memberof IntifaceProtocols
         * @classdesc Represents an IntifaceBackendMessage.
         * @implements IIntifaceBackendMessage
         * @constructor
         * @param {IntifaceProtocols.IIntifaceBackendMessage=} [properties] Properties to set
         */
        function IntifaceBackendMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntifaceBackendMessage index.
         * @member {number} index
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.index = 0;

        /**
         * IntifaceBackendMessage ok.
         * @member {IntifaceProtocols.IntifaceBackendMessage.IOk|null|undefined} ok
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.ok = null;

        /**
         * IntifaceBackendMessage error.
         * @member {IntifaceProtocols.IntifaceBackendMessage.IError|null|undefined} error
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.error = null;

        /**
         * IntifaceBackendMessage configuration.
         * @member {IntifaceProtocols.IntifaceBackendMessage.IConfiguration|null|undefined} configuration
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.configuration = null;

        /**
         * IntifaceBackendMessage updatesAvailable.
         * @member {IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable|null|undefined} updatesAvailable
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.updatesAvailable = null;

        /**
         * IntifaceBackendMessage downloadProgress.
         * @member {IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress|null|undefined} downloadProgress
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.downloadProgress = null;

        /**
         * IntifaceBackendMessage serverProcessMessage.
         * @member {IntifaceProtocols.IServerProcessMessage|null|undefined} serverProcessMessage
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.serverProcessMessage = null;

        /**
         * IntifaceBackendMessage logMessage.
         * @member {IntifaceProtocols.IntifaceBackendMessage.ILogMessage|null|undefined} logMessage
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.logMessage = null;

        /**
         * IntifaceBackendMessage processError.
         * @member {IntifaceProtocols.IntifaceBackendMessage.IProcessError|null|undefined} processError
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        IntifaceBackendMessage.prototype.processError = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * IntifaceBackendMessage msg.
         * @member {"ok"|"error"|"configuration"|"updatesAvailable"|"downloadProgress"|"serverProcessMessage"|"logMessage"|"processError"|undefined} msg
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         */
        Object.defineProperty(IntifaceBackendMessage.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["ok", "error", "configuration", "updatesAvailable", "downloadProgress", "serverProcessMessage", "logMessage", "processError"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IntifaceBackendMessage instance using the specified properties.
         * @function create
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {IntifaceProtocols.IIntifaceBackendMessage=} [properties] Properties to set
         * @returns {IntifaceProtocols.IntifaceBackendMessage} IntifaceBackendMessage instance
         */
        IntifaceBackendMessage.create = function create(properties) {
            return new IntifaceBackendMessage(properties);
        };

        /**
         * Encodes the specified IntifaceBackendMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.verify|verify} messages.
         * @function encode
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {IntifaceProtocols.IIntifaceBackendMessage} message IntifaceBackendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntifaceBackendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                $root.IntifaceProtocols.IntifaceBackendMessage.Ok.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.IntifaceProtocols.IntifaceBackendMessage.Error.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                $root.IntifaceProtocols.IntifaceBackendMessage.Configuration.encode(message.configuration, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.updatesAvailable != null && Object.hasOwnProperty.call(message, "updatesAvailable"))
                $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.encode(message.updatesAvailable, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.downloadProgress != null && Object.hasOwnProperty.call(message, "downloadProgress"))
                $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.encode(message.downloadProgress, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.serverProcessMessage != null && Object.hasOwnProperty.call(message, "serverProcessMessage"))
                $root.IntifaceProtocols.ServerProcessMessage.encode(message.serverProcessMessage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.logMessage != null && Object.hasOwnProperty.call(message, "logMessage"))
                $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage.encode(message.logMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.processError != null && Object.hasOwnProperty.call(message, "processError"))
                $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError.encode(message.processError, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IntifaceBackendMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {IntifaceProtocols.IIntifaceBackendMessage} message IntifaceBackendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntifaceBackendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntifaceBackendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IntifaceProtocols.IntifaceBackendMessage} IntifaceBackendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntifaceBackendMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.ok = $root.IntifaceProtocols.IntifaceBackendMessage.Ok.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.error = $root.IntifaceProtocols.IntifaceBackendMessage.Error.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = $root.IntifaceProtocols.IntifaceBackendMessage.Configuration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.updatesAvailable = $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.downloadProgress = $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.serverProcessMessage = $root.IntifaceProtocols.ServerProcessMessage.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.logMessage = $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.processError = $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IntifaceBackendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IntifaceProtocols.IntifaceBackendMessage} IntifaceBackendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntifaceBackendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntifaceBackendMessage message.
         * @function verify
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntifaceBackendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok")) {
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.Ok.verify(message.ok);
                    if (error)
                        return "ok." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.configuration != null && message.hasOwnProperty("configuration")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.Configuration.verify(message.configuration);
                    if (error)
                        return "configuration." + error;
                }
            }
            if (message.updatesAvailable != null && message.hasOwnProperty("updatesAvailable")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.verify(message.updatesAvailable);
                    if (error)
                        return "updatesAvailable." + error;
                }
            }
            if (message.downloadProgress != null && message.hasOwnProperty("downloadProgress")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.verify(message.downloadProgress);
                    if (error)
                        return "downloadProgress." + error;
                }
            }
            if (message.serverProcessMessage != null && message.hasOwnProperty("serverProcessMessage")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.ServerProcessMessage.verify(message.serverProcessMessage);
                    if (error)
                        return "serverProcessMessage." + error;
                }
            }
            if (message.logMessage != null && message.hasOwnProperty("logMessage")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage.verify(message.logMessage);
                    if (error)
                        return "logMessage." + error;
                }
            }
            if (message.processError != null && message.hasOwnProperty("processError")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError.verify(message.processError);
                    if (error)
                        return "processError." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IntifaceBackendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {IntifaceProtocols.IntifaceBackendMessage} IntifaceBackendMessage
         */
        IntifaceBackendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage)
                return object;
            var message = new $root.IntifaceProtocols.IntifaceBackendMessage();
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.ok != null) {
                if (typeof object.ok !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.ok: object expected");
                message.ok = $root.IntifaceProtocols.IntifaceBackendMessage.Ok.fromObject(object.ok);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.error: object expected");
                message.error = $root.IntifaceProtocols.IntifaceBackendMessage.Error.fromObject(object.error);
            }
            if (object.configuration != null) {
                if (typeof object.configuration !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.configuration: object expected");
                message.configuration = $root.IntifaceProtocols.IntifaceBackendMessage.Configuration.fromObject(object.configuration);
            }
            if (object.updatesAvailable != null) {
                if (typeof object.updatesAvailable !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.updatesAvailable: object expected");
                message.updatesAvailable = $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.fromObject(object.updatesAvailable);
            }
            if (object.downloadProgress != null) {
                if (typeof object.downloadProgress !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.downloadProgress: object expected");
                message.downloadProgress = $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.fromObject(object.downloadProgress);
            }
            if (object.serverProcessMessage != null) {
                if (typeof object.serverProcessMessage !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.serverProcessMessage: object expected");
                message.serverProcessMessage = $root.IntifaceProtocols.ServerProcessMessage.fromObject(object.serverProcessMessage);
            }
            if (object.logMessage != null) {
                if (typeof object.logMessage !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.logMessage: object expected");
                message.logMessage = $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage.fromObject(object.logMessage);
            }
            if (object.processError != null) {
                if (typeof object.processError !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceBackendMessage.processError: object expected");
                message.processError = $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError.fromObject(object.processError);
            }
            return message;
        };

        /**
         * Creates a plain object from an IntifaceBackendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @static
         * @param {IntifaceProtocols.IntifaceBackendMessage} message IntifaceBackendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntifaceBackendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.index = 0;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.ok != null && message.hasOwnProperty("ok")) {
                object.ok = $root.IntifaceProtocols.IntifaceBackendMessage.Ok.toObject(message.ok, options);
                if (options.oneofs)
                    object.msg = "ok";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.IntifaceProtocols.IntifaceBackendMessage.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.msg = "error";
            }
            if (message.configuration != null && message.hasOwnProperty("configuration")) {
                object.configuration = $root.IntifaceProtocols.IntifaceBackendMessage.Configuration.toObject(message.configuration, options);
                if (options.oneofs)
                    object.msg = "configuration";
            }
            if (message.updatesAvailable != null && message.hasOwnProperty("updatesAvailable")) {
                object.updatesAvailable = $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.toObject(message.updatesAvailable, options);
                if (options.oneofs)
                    object.msg = "updatesAvailable";
            }
            if (message.downloadProgress != null && message.hasOwnProperty("downloadProgress")) {
                object.downloadProgress = $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.toObject(message.downloadProgress, options);
                if (options.oneofs)
                    object.msg = "downloadProgress";
            }
            if (message.serverProcessMessage != null && message.hasOwnProperty("serverProcessMessage")) {
                object.serverProcessMessage = $root.IntifaceProtocols.ServerProcessMessage.toObject(message.serverProcessMessage, options);
                if (options.oneofs)
                    object.msg = "serverProcessMessage";
            }
            if (message.logMessage != null && message.hasOwnProperty("logMessage")) {
                object.logMessage = $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage.toObject(message.logMessage, options);
                if (options.oneofs)
                    object.msg = "logMessage";
            }
            if (message.processError != null && message.hasOwnProperty("processError")) {
                object.processError = $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError.toObject(message.processError, options);
                if (options.oneofs)
                    object.msg = "processError";
            }
            return object;
        };

        /**
         * Converts this IntifaceBackendMessage to JSON.
         * @function toJSON
         * @memberof IntifaceProtocols.IntifaceBackendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntifaceBackendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        IntifaceBackendMessage.Ok = (function() {

            /**
             * Properties of an Ok.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface IOk
             */

            /**
             * Constructs a new Ok.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents an Ok.
             * @implements IOk
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.IOk=} [properties] Properties to set
             */
            function Ok(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Ok instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IOk=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Ok} Ok instance
             */
            Ok.create = function create(properties) {
                return new Ok(properties);
            };

            /**
             * Encodes the specified Ok message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Ok.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IOk} message Ok message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ok.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Ok message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Ok.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IOk} message Ok message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ok.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Ok message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Ok} Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ok.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.Ok();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Ok message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Ok} Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ok.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Ok message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ok.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Ok message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Ok} Ok
             */
            Ok.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.Ok)
                    return object;
                return new $root.IntifaceProtocols.IntifaceBackendMessage.Ok();
            };

            /**
             * Creates a plain object from an Ok message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.Ok} message Ok
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ok.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Ok to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Ok
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ok.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ok;
        })();

        IntifaceBackendMessage.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface IError
             * @property {string|null} [reason] Error reason
             */

            /**
             * Constructs a new Error.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error reason.
             * @member {string} reason
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @instance
             */
            Error.prototype.reason = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IError=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Error.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.Error)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceBackendMessage.Error();
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.reason = "";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        IntifaceBackendMessage.ProcessError = (function() {

            /**
             * Properties of a ProcessError.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface IProcessError
             * @property {string|null} [reason] ProcessError reason
             */

            /**
             * Constructs a new ProcessError.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents a ProcessError.
             * @implements IProcessError
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.IProcessError=} [properties] Properties to set
             */
            function ProcessError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessError reason.
             * @member {string} reason
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @instance
             */
            ProcessError.prototype.reason = "";

            /**
             * Creates a new ProcessError instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IProcessError=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.ProcessError} ProcessError instance
             */
            ProcessError.create = function create(properties) {
                return new ProcessError(properties);
            };

            /**
             * Encodes the specified ProcessError message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.ProcessError.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IProcessError} message ProcessError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified ProcessError message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.ProcessError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IProcessError} message ProcessError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessError message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.ProcessError} ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.ProcessError} ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessError message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates a ProcessError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.ProcessError} ProcessError
             */
            ProcessError.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceBackendMessage.ProcessError();
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a plain object from a ProcessError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.ProcessError} message ProcessError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.reason = "";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Converts this ProcessError to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.ProcessError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessError;
        })();

        IntifaceBackendMessage.Configuration = (function() {

            /**
             * Properties of a Configuration.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface IConfiguration
             * @property {string|null} [configuration] Configuration configuration
             */

            /**
             * Constructs a new Configuration.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents a Configuration.
             * @implements IConfiguration
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.IConfiguration=} [properties] Properties to set
             */
            function Configuration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Configuration configuration.
             * @member {string} configuration
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @instance
             */
            Configuration.prototype.configuration = "";

            /**
             * Creates a new Configuration instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IConfiguration=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Configuration} Configuration instance
             */
            Configuration.create = function create(properties) {
                return new Configuration(properties);
            };

            /**
             * Encodes the specified Configuration message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Configuration.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IConfiguration} message Configuration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Configuration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.configuration);
                return writer;
            };

            /**
             * Encodes the specified Configuration message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Configuration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IConfiguration} message Configuration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Configuration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Configuration message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Configuration} Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Configuration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.Configuration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configuration = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Configuration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Configuration} Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Configuration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Configuration message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Configuration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.configuration != null && message.hasOwnProperty("configuration"))
                    if (!$util.isString(message.configuration))
                        return "configuration: string expected";
                return null;
            };

            /**
             * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.Configuration} Configuration
             */
            Configuration.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.Configuration)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceBackendMessage.Configuration();
                if (object.configuration != null)
                    message.configuration = String(object.configuration);
                return message;
            };

            /**
             * Creates a plain object from a Configuration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.Configuration} message Configuration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Configuration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.configuration = "";
                if (message.configuration != null && message.hasOwnProperty("configuration"))
                    object.configuration = message.configuration;
                return object;
            };

            /**
             * Converts this Configuration to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.Configuration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Configuration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Configuration;
        })();

        IntifaceBackendMessage.UpdatesAvailable = (function() {

            /**
             * Properties of an UpdatesAvailable.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface IUpdatesAvailable
             * @property {boolean|null} [application] UpdatesAvailable application
             * @property {boolean|null} [deviceFile] UpdatesAvailable deviceFile
             * @property {boolean|null} [engine] UpdatesAvailable engine
             */

            /**
             * Constructs a new UpdatesAvailable.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents an UpdatesAvailable.
             * @implements IUpdatesAvailable
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable=} [properties] Properties to set
             */
            function UpdatesAvailable(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdatesAvailable application.
             * @member {boolean} application
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @instance
             */
            UpdatesAvailable.prototype.application = false;

            /**
             * UpdatesAvailable deviceFile.
             * @member {boolean} deviceFile
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @instance
             */
            UpdatesAvailable.prototype.deviceFile = false;

            /**
             * UpdatesAvailable engine.
             * @member {boolean} engine
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @instance
             */
            UpdatesAvailable.prototype.engine = false;

            /**
             * Creates a new UpdatesAvailable instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable} UpdatesAvailable instance
             */
            UpdatesAvailable.create = function create(properties) {
                return new UpdatesAvailable(properties);
            };

            /**
             * Encodes the specified UpdatesAvailable message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable} message UpdatesAvailable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatesAvailable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.application != null && Object.hasOwnProperty.call(message, "application"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.application);
                if (message.deviceFile != null && Object.hasOwnProperty.call(message, "deviceFile"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.deviceFile);
                if (message.engine != null && Object.hasOwnProperty.call(message, "engine"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.engine);
                return writer;
            };

            /**
             * Encodes the specified UpdatesAvailable message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable} message UpdatesAvailable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatesAvailable.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatesAvailable message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable} UpdatesAvailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatesAvailable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.application = reader.bool();
                        break;
                    case 2:
                        message.deviceFile = reader.bool();
                        break;
                    case 3:
                        message.engine = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdatesAvailable message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable} UpdatesAvailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatesAvailable.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatesAvailable message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdatesAvailable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.application != null && message.hasOwnProperty("application"))
                    if (typeof message.application !== "boolean")
                        return "application: boolean expected";
                if (message.deviceFile != null && message.hasOwnProperty("deviceFile"))
                    if (typeof message.deviceFile !== "boolean")
                        return "deviceFile: boolean expected";
                if (message.engine != null && message.hasOwnProperty("engine"))
                    if (typeof message.engine !== "boolean")
                        return "engine: boolean expected";
                return null;
            };

            /**
             * Creates an UpdatesAvailable message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable} UpdatesAvailable
             */
            UpdatesAvailable.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable();
                if (object.application != null)
                    message.application = Boolean(object.application);
                if (object.deviceFile != null)
                    message.deviceFile = Boolean(object.deviceFile);
                if (object.engine != null)
                    message.engine = Boolean(object.engine);
                return message;
            };

            /**
             * Creates a plain object from an UpdatesAvailable message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable} message UpdatesAvailable
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatesAvailable.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.application = false;
                    object.deviceFile = false;
                    object.engine = false;
                }
                if (message.application != null && message.hasOwnProperty("application"))
                    object.application = message.application;
                if (message.deviceFile != null && message.hasOwnProperty("deviceFile"))
                    object.deviceFile = message.deviceFile;
                if (message.engine != null && message.hasOwnProperty("engine"))
                    object.engine = message.engine;
                return object;
            };

            /**
             * Converts this UpdatesAvailable to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdatesAvailable.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdatesAvailable;
        })();

        IntifaceBackendMessage.DownloadProgress = (function() {

            /**
             * Properties of a DownloadProgress.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface IDownloadProgress
             * @property {number|null} [bytesReceived] DownloadProgress bytesReceived
             * @property {number|null} [bytesTotal] DownloadProgress bytesTotal
             * @property {string|null} [error] DownloadProgress error
             */

            /**
             * Constructs a new DownloadProgress.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents a DownloadProgress.
             * @implements IDownloadProgress
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress=} [properties] Properties to set
             */
            function DownloadProgress(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DownloadProgress bytesReceived.
             * @member {number} bytesReceived
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @instance
             */
            DownloadProgress.prototype.bytesReceived = 0;

            /**
             * DownloadProgress bytesTotal.
             * @member {number} bytesTotal
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @instance
             */
            DownloadProgress.prototype.bytesTotal = 0;

            /**
             * DownloadProgress error.
             * @member {string} error
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @instance
             */
            DownloadProgress.prototype.error = "";

            /**
             * Creates a new DownloadProgress instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.DownloadProgress} DownloadProgress instance
             */
            DownloadProgress.create = function create(properties) {
                return new DownloadProgress(properties);
            };

            /**
             * Encodes the specified DownloadProgress message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress} message DownloadProgress message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DownloadProgress.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bytesReceived != null && Object.hasOwnProperty.call(message, "bytesReceived"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bytesReceived);
                if (message.bytesTotal != null && Object.hasOwnProperty.call(message, "bytesTotal"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bytesTotal);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified DownloadProgress message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress} message DownloadProgress message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DownloadProgress.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DownloadProgress message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.DownloadProgress} DownloadProgress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DownloadProgress.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bytesReceived = reader.uint32();
                        break;
                    case 2:
                        message.bytesTotal = reader.uint32();
                        break;
                    case 3:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DownloadProgress message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.DownloadProgress} DownloadProgress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DownloadProgress.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DownloadProgress message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DownloadProgress.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bytesReceived != null && message.hasOwnProperty("bytesReceived"))
                    if (!$util.isInteger(message.bytesReceived))
                        return "bytesReceived: integer expected";
                if (message.bytesTotal != null && message.hasOwnProperty("bytesTotal"))
                    if (!$util.isInteger(message.bytesTotal))
                        return "bytesTotal: integer expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a DownloadProgress message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.DownloadProgress} DownloadProgress
             */
            DownloadProgress.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceBackendMessage.DownloadProgress();
                if (object.bytesReceived != null)
                    message.bytesReceived = object.bytesReceived >>> 0;
                if (object.bytesTotal != null)
                    message.bytesTotal = object.bytesTotal >>> 0;
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from a DownloadProgress message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.DownloadProgress} message DownloadProgress
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DownloadProgress.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.bytesReceived = 0;
                    object.bytesTotal = 0;
                    object.error = "";
                }
                if (message.bytesReceived != null && message.hasOwnProperty("bytesReceived"))
                    object.bytesReceived = message.bytesReceived;
                if (message.bytesTotal != null && message.hasOwnProperty("bytesTotal"))
                    object.bytesTotal = message.bytesTotal;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this DownloadProgress to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.DownloadProgress
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DownloadProgress.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DownloadProgress;
        })();

        IntifaceBackendMessage.LogMessage = (function() {

            /**
             * Properties of a LogMessage.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @interface ILogMessage
             * @property {string|null} [info] LogMessage info
             */

            /**
             * Constructs a new LogMessage.
             * @memberof IntifaceProtocols.IntifaceBackendMessage
             * @classdesc Represents a LogMessage.
             * @implements ILogMessage
             * @constructor
             * @param {IntifaceProtocols.IntifaceBackendMessage.ILogMessage=} [properties] Properties to set
             */
            function LogMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LogMessage info.
             * @member {string} info
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @instance
             */
            LogMessage.prototype.info = "";

            /**
             * Creates a new LogMessage instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.ILogMessage=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceBackendMessage.LogMessage} LogMessage instance
             */
            LogMessage.create = function create(properties) {
                return new LogMessage(properties);
            };

            /**
             * Encodes the specified LogMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.LogMessage.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.ILogMessage} message LogMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LogMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.info);
                return writer;
            };

            /**
             * Encodes the specified LogMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.LogMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.ILogMessage} message LogMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LogMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LogMessage message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceBackendMessage.LogMessage} LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LogMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LogMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceBackendMessage.LogMessage} LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LogMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LogMessage message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LogMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                return null;
            };

            /**
             * Creates a LogMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceBackendMessage.LogMessage} LogMessage
             */
            LogMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceBackendMessage.LogMessage();
                if (object.info != null)
                    message.info = String(object.info);
                return message;
            };

            /**
             * Creates a plain object from a LogMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceBackendMessage.LogMessage} message LogMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LogMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.info = "";
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                return object;
            };

            /**
             * Converts this LogMessage to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceBackendMessage.LogMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LogMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LogMessage;
        })();

        return IntifaceBackendMessage;
    })();

    IntifaceProtocols.IntifaceFrontendMessage = (function() {

        /**
         * Properties of an IntifaceFrontendMessage.
         * @memberof IntifaceProtocols
         * @interface IIntifaceFrontendMessage
         * @property {number|null} [index] IntifaceFrontendMessage index
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IOk|null} [ok] IntifaceFrontendMessage ok
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IError|null} [error] IntifaceFrontendMessage error
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IReady|null} [ready] IntifaceFrontendMessage ready
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IStartProcess|null} [startProcess] IntifaceFrontendMessage startProcess
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IStopProcess|null} [stopProcess] IntifaceFrontendMessage stopProcess
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IStartProxy|null} [startProxy] IntifaceFrontendMessage startProxy
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IStopProxy|null} [stopProxy] IntifaceFrontendMessage stopProxy
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig|null} [updateConfig] IntifaceFrontendMessage updateConfig
         * @property {IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates|null} [checkForUpdates] IntifaceFrontendMessage checkForUpdates
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine|null} [updateEngine] IntifaceFrontendMessage updateEngine
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile|null} [updateDeviceFile] IntifaceFrontendMessage updateDeviceFile
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication|null} [updateApplication] IntifaceFrontendMessage updateApplication
         * @property {IntifaceProtocols.IntifaceFrontendMessage.ILogMessage|null} [logMessage] IntifaceFrontendMessage logMessage
         * @property {IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate|null} [cancelUpdate] IntifaceFrontendMessage cancelUpdate
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration|null} [resetIntifaceConfiguration] IntifaceFrontendMessage resetIntifaceConfiguration
         * @property {IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory|null} [openLogDirectory] IntifaceFrontendMessage openLogDirectory
         */

        /**
         * Constructs a new IntifaceFrontendMessage.
         * @memberof IntifaceProtocols
         * @classdesc Represents an IntifaceFrontendMessage.
         * @implements IIntifaceFrontendMessage
         * @constructor
         * @param {IntifaceProtocols.IIntifaceFrontendMessage=} [properties] Properties to set
         */
        function IntifaceFrontendMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntifaceFrontendMessage index.
         * @member {number} index
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.index = 0;

        /**
         * IntifaceFrontendMessage ok.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IOk|null|undefined} ok
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.ok = null;

        /**
         * IntifaceFrontendMessage error.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IError|null|undefined} error
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.error = null;

        /**
         * IntifaceFrontendMessage ready.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IReady|null|undefined} ready
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.ready = null;

        /**
         * IntifaceFrontendMessage startProcess.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IStartProcess|null|undefined} startProcess
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.startProcess = null;

        /**
         * IntifaceFrontendMessage stopProcess.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IStopProcess|null|undefined} stopProcess
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.stopProcess = null;

        /**
         * IntifaceFrontendMessage startProxy.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IStartProxy|null|undefined} startProxy
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.startProxy = null;

        /**
         * IntifaceFrontendMessage stopProxy.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IStopProxy|null|undefined} stopProxy
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.stopProxy = null;

        /**
         * IntifaceFrontendMessage updateConfig.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig|null|undefined} updateConfig
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.updateConfig = null;

        /**
         * IntifaceFrontendMessage checkForUpdates.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates|null|undefined} checkForUpdates
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.checkForUpdates = null;

        /**
         * IntifaceFrontendMessage updateEngine.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine|null|undefined} updateEngine
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.updateEngine = null;

        /**
         * IntifaceFrontendMessage updateDeviceFile.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile|null|undefined} updateDeviceFile
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.updateDeviceFile = null;

        /**
         * IntifaceFrontendMessage updateApplication.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication|null|undefined} updateApplication
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.updateApplication = null;

        /**
         * IntifaceFrontendMessage logMessage.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.ILogMessage|null|undefined} logMessage
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.logMessage = null;

        /**
         * IntifaceFrontendMessage cancelUpdate.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate|null|undefined} cancelUpdate
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.cancelUpdate = null;

        /**
         * IntifaceFrontendMessage resetIntifaceConfiguration.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration|null|undefined} resetIntifaceConfiguration
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.resetIntifaceConfiguration = null;

        /**
         * IntifaceFrontendMessage openLogDirectory.
         * @member {IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory|null|undefined} openLogDirectory
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        IntifaceFrontendMessage.prototype.openLogDirectory = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * IntifaceFrontendMessage msg.
         * @member {"ok"|"error"|"ready"|"startProcess"|"stopProcess"|"startProxy"|"stopProxy"|"updateConfig"|"checkForUpdates"|"updateEngine"|"updateDeviceFile"|"updateApplication"|"logMessage"|"cancelUpdate"|"resetIntifaceConfiguration"|"openLogDirectory"|undefined} msg
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         */
        Object.defineProperty(IntifaceFrontendMessage.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["ok", "error", "ready", "startProcess", "stopProcess", "startProxy", "stopProxy", "updateConfig", "checkForUpdates", "updateEngine", "updateDeviceFile", "updateApplication", "logMessage", "cancelUpdate", "resetIntifaceConfiguration", "openLogDirectory"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IntifaceFrontendMessage instance using the specified properties.
         * @function create
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {IntifaceProtocols.IIntifaceFrontendMessage=} [properties] Properties to set
         * @returns {IntifaceProtocols.IntifaceFrontendMessage} IntifaceFrontendMessage instance
         */
        IntifaceFrontendMessage.create = function create(properties) {
            return new IntifaceFrontendMessage(properties);
        };

        /**
         * Encodes the specified IntifaceFrontendMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.verify|verify} messages.
         * @function encode
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {IntifaceProtocols.IIntifaceFrontendMessage} message IntifaceFrontendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntifaceFrontendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.Ok.encode(message.ok, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.Error.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.Ready.encode(message.ready, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.startProcess != null && Object.hasOwnProperty.call(message, "startProcess"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess.encode(message.startProcess, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.stopProcess != null && Object.hasOwnProperty.call(message, "stopProcess"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess.encode(message.stopProcess, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.startProxy != null && Object.hasOwnProperty.call(message, "startProxy"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy.encode(message.startProxy, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.stopProxy != null && Object.hasOwnProperty.call(message, "stopProxy"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy.encode(message.stopProxy, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.updateConfig != null && Object.hasOwnProperty.call(message, "updateConfig"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.encode(message.updateConfig, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.checkForUpdates != null && Object.hasOwnProperty.call(message, "checkForUpdates"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.encode(message.checkForUpdates, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.updateEngine != null && Object.hasOwnProperty.call(message, "updateEngine"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.encode(message.updateEngine, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.updateDeviceFile != null && Object.hasOwnProperty.call(message, "updateDeviceFile"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.encode(message.updateDeviceFile, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.updateApplication != null && Object.hasOwnProperty.call(message, "updateApplication"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.encode(message.updateApplication, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.logMessage != null && Object.hasOwnProperty.call(message, "logMessage"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage.encode(message.logMessage, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.cancelUpdate != null && Object.hasOwnProperty.call(message, "cancelUpdate"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.encode(message.cancelUpdate, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.resetIntifaceConfiguration != null && Object.hasOwnProperty.call(message, "resetIntifaceConfiguration"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.encode(message.resetIntifaceConfiguration, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.openLogDirectory != null && Object.hasOwnProperty.call(message, "openLogDirectory"))
                $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.encode(message.openLogDirectory, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IntifaceFrontendMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {IntifaceProtocols.IIntifaceFrontendMessage} message IntifaceFrontendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntifaceFrontendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntifaceFrontendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {IntifaceProtocols.IntifaceFrontendMessage} IntifaceFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntifaceFrontendMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.ok = $root.IntifaceProtocols.IntifaceFrontendMessage.Ok.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.error = $root.IntifaceProtocols.IntifaceFrontendMessage.Error.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ready = $root.IntifaceProtocols.IntifaceFrontendMessage.Ready.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.startProcess = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.stopProcess = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.startProxy = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.stopProxy = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.updateConfig = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.checkForUpdates = $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.updateEngine = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.updateDeviceFile = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.updateApplication = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.logMessage = $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.cancelUpdate = $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.resetIntifaceConfiguration = $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.openLogDirectory = $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IntifaceFrontendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {IntifaceProtocols.IntifaceFrontendMessage} IntifaceFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntifaceFrontendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntifaceFrontendMessage message.
         * @function verify
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntifaceFrontendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok")) {
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.Ok.verify(message.ok);
                    if (error)
                        return "ok." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.ready != null && message.hasOwnProperty("ready")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.Ready.verify(message.ready);
                    if (error)
                        return "ready." + error;
                }
            }
            if (message.startProcess != null && message.hasOwnProperty("startProcess")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess.verify(message.startProcess);
                    if (error)
                        return "startProcess." + error;
                }
            }
            if (message.stopProcess != null && message.hasOwnProperty("stopProcess")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess.verify(message.stopProcess);
                    if (error)
                        return "stopProcess." + error;
                }
            }
            if (message.startProxy != null && message.hasOwnProperty("startProxy")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy.verify(message.startProxy);
                    if (error)
                        return "startProxy." + error;
                }
            }
            if (message.stopProxy != null && message.hasOwnProperty("stopProxy")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy.verify(message.stopProxy);
                    if (error)
                        return "stopProxy." + error;
                }
            }
            if (message.updateConfig != null && message.hasOwnProperty("updateConfig")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.verify(message.updateConfig);
                    if (error)
                        return "updateConfig." + error;
                }
            }
            if (message.checkForUpdates != null && message.hasOwnProperty("checkForUpdates")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.verify(message.checkForUpdates);
                    if (error)
                        return "checkForUpdates." + error;
                }
            }
            if (message.updateEngine != null && message.hasOwnProperty("updateEngine")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.verify(message.updateEngine);
                    if (error)
                        return "updateEngine." + error;
                }
            }
            if (message.updateDeviceFile != null && message.hasOwnProperty("updateDeviceFile")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.verify(message.updateDeviceFile);
                    if (error)
                        return "updateDeviceFile." + error;
                }
            }
            if (message.updateApplication != null && message.hasOwnProperty("updateApplication")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.verify(message.updateApplication);
                    if (error)
                        return "updateApplication." + error;
                }
            }
            if (message.logMessage != null && message.hasOwnProperty("logMessage")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage.verify(message.logMessage);
                    if (error)
                        return "logMessage." + error;
                }
            }
            if (message.cancelUpdate != null && message.hasOwnProperty("cancelUpdate")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.verify(message.cancelUpdate);
                    if (error)
                        return "cancelUpdate." + error;
                }
            }
            if (message.resetIntifaceConfiguration != null && message.hasOwnProperty("resetIntifaceConfiguration")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.verify(message.resetIntifaceConfiguration);
                    if (error)
                        return "resetIntifaceConfiguration." + error;
                }
            }
            if (message.openLogDirectory != null && message.hasOwnProperty("openLogDirectory")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    var error = $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.verify(message.openLogDirectory);
                    if (error)
                        return "openLogDirectory." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IntifaceFrontendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {IntifaceProtocols.IntifaceFrontendMessage} IntifaceFrontendMessage
         */
        IntifaceFrontendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage)
                return object;
            var message = new $root.IntifaceProtocols.IntifaceFrontendMessage();
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.ok != null) {
                if (typeof object.ok !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.ok: object expected");
                message.ok = $root.IntifaceProtocols.IntifaceFrontendMessage.Ok.fromObject(object.ok);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.error: object expected");
                message.error = $root.IntifaceProtocols.IntifaceFrontendMessage.Error.fromObject(object.error);
            }
            if (object.ready != null) {
                if (typeof object.ready !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.ready: object expected");
                message.ready = $root.IntifaceProtocols.IntifaceFrontendMessage.Ready.fromObject(object.ready);
            }
            if (object.startProcess != null) {
                if (typeof object.startProcess !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.startProcess: object expected");
                message.startProcess = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess.fromObject(object.startProcess);
            }
            if (object.stopProcess != null) {
                if (typeof object.stopProcess !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.stopProcess: object expected");
                message.stopProcess = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess.fromObject(object.stopProcess);
            }
            if (object.startProxy != null) {
                if (typeof object.startProxy !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.startProxy: object expected");
                message.startProxy = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy.fromObject(object.startProxy);
            }
            if (object.stopProxy != null) {
                if (typeof object.stopProxy !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.stopProxy: object expected");
                message.stopProxy = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy.fromObject(object.stopProxy);
            }
            if (object.updateConfig != null) {
                if (typeof object.updateConfig !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.updateConfig: object expected");
                message.updateConfig = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.fromObject(object.updateConfig);
            }
            if (object.checkForUpdates != null) {
                if (typeof object.checkForUpdates !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.checkForUpdates: object expected");
                message.checkForUpdates = $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.fromObject(object.checkForUpdates);
            }
            if (object.updateEngine != null) {
                if (typeof object.updateEngine !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.updateEngine: object expected");
                message.updateEngine = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.fromObject(object.updateEngine);
            }
            if (object.updateDeviceFile != null) {
                if (typeof object.updateDeviceFile !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.updateDeviceFile: object expected");
                message.updateDeviceFile = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.fromObject(object.updateDeviceFile);
            }
            if (object.updateApplication != null) {
                if (typeof object.updateApplication !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.updateApplication: object expected");
                message.updateApplication = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.fromObject(object.updateApplication);
            }
            if (object.logMessage != null) {
                if (typeof object.logMessage !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.logMessage: object expected");
                message.logMessage = $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage.fromObject(object.logMessage);
            }
            if (object.cancelUpdate != null) {
                if (typeof object.cancelUpdate !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.cancelUpdate: object expected");
                message.cancelUpdate = $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.fromObject(object.cancelUpdate);
            }
            if (object.resetIntifaceConfiguration != null) {
                if (typeof object.resetIntifaceConfiguration !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.resetIntifaceConfiguration: object expected");
                message.resetIntifaceConfiguration = $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.fromObject(object.resetIntifaceConfiguration);
            }
            if (object.openLogDirectory != null) {
                if (typeof object.openLogDirectory !== "object")
                    throw TypeError(".IntifaceProtocols.IntifaceFrontendMessage.openLogDirectory: object expected");
                message.openLogDirectory = $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.fromObject(object.openLogDirectory);
            }
            return message;
        };

        /**
         * Creates a plain object from an IntifaceFrontendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @static
         * @param {IntifaceProtocols.IntifaceFrontendMessage} message IntifaceFrontendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntifaceFrontendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.index = 0;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.ok != null && message.hasOwnProperty("ok")) {
                object.ok = $root.IntifaceProtocols.IntifaceFrontendMessage.Ok.toObject(message.ok, options);
                if (options.oneofs)
                    object.msg = "ok";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.IntifaceProtocols.IntifaceFrontendMessage.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.msg = "error";
            }
            if (message.ready != null && message.hasOwnProperty("ready")) {
                object.ready = $root.IntifaceProtocols.IntifaceFrontendMessage.Ready.toObject(message.ready, options);
                if (options.oneofs)
                    object.msg = "ready";
            }
            if (message.startProcess != null && message.hasOwnProperty("startProcess")) {
                object.startProcess = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess.toObject(message.startProcess, options);
                if (options.oneofs)
                    object.msg = "startProcess";
            }
            if (message.stopProcess != null && message.hasOwnProperty("stopProcess")) {
                object.stopProcess = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess.toObject(message.stopProcess, options);
                if (options.oneofs)
                    object.msg = "stopProcess";
            }
            if (message.startProxy != null && message.hasOwnProperty("startProxy")) {
                object.startProxy = $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy.toObject(message.startProxy, options);
                if (options.oneofs)
                    object.msg = "startProxy";
            }
            if (message.stopProxy != null && message.hasOwnProperty("stopProxy")) {
                object.stopProxy = $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy.toObject(message.stopProxy, options);
                if (options.oneofs)
                    object.msg = "stopProxy";
            }
            if (message.updateConfig != null && message.hasOwnProperty("updateConfig")) {
                object.updateConfig = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.toObject(message.updateConfig, options);
                if (options.oneofs)
                    object.msg = "updateConfig";
            }
            if (message.checkForUpdates != null && message.hasOwnProperty("checkForUpdates")) {
                object.checkForUpdates = $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.toObject(message.checkForUpdates, options);
                if (options.oneofs)
                    object.msg = "checkForUpdates";
            }
            if (message.updateEngine != null && message.hasOwnProperty("updateEngine")) {
                object.updateEngine = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.toObject(message.updateEngine, options);
                if (options.oneofs)
                    object.msg = "updateEngine";
            }
            if (message.updateDeviceFile != null && message.hasOwnProperty("updateDeviceFile")) {
                object.updateDeviceFile = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.toObject(message.updateDeviceFile, options);
                if (options.oneofs)
                    object.msg = "updateDeviceFile";
            }
            if (message.updateApplication != null && message.hasOwnProperty("updateApplication")) {
                object.updateApplication = $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.toObject(message.updateApplication, options);
                if (options.oneofs)
                    object.msg = "updateApplication";
            }
            if (message.logMessage != null && message.hasOwnProperty("logMessage")) {
                object.logMessage = $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage.toObject(message.logMessage, options);
                if (options.oneofs)
                    object.msg = "logMessage";
            }
            if (message.cancelUpdate != null && message.hasOwnProperty("cancelUpdate")) {
                object.cancelUpdate = $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.toObject(message.cancelUpdate, options);
                if (options.oneofs)
                    object.msg = "cancelUpdate";
            }
            if (message.resetIntifaceConfiguration != null && message.hasOwnProperty("resetIntifaceConfiguration")) {
                object.resetIntifaceConfiguration = $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.toObject(message.resetIntifaceConfiguration, options);
                if (options.oneofs)
                    object.msg = "resetIntifaceConfiguration";
            }
            if (message.openLogDirectory != null && message.hasOwnProperty("openLogDirectory")) {
                object.openLogDirectory = $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.toObject(message.openLogDirectory, options);
                if (options.oneofs)
                    object.msg = "openLogDirectory";
            }
            return object;
        };

        /**
         * Converts this IntifaceFrontendMessage to JSON.
         * @function toJSON
         * @memberof IntifaceProtocols.IntifaceFrontendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntifaceFrontendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        IntifaceFrontendMessage.Ok = (function() {

            /**
             * Properties of an Ok.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IOk
             */

            /**
             * Constructs a new Ok.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an Ok.
             * @implements IOk
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOk=} [properties] Properties to set
             */
            function Ok(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Ok instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOk=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ok} Ok instance
             */
            Ok.create = function create(properties) {
                return new Ok(properties);
            };

            /**
             * Encodes the specified Ok message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ok.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOk} message Ok message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ok.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Ok message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ok.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOk} message Ok message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ok.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Ok message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ok} Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ok.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.Ok();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Ok message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ok} Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ok.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Ok message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ok.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Ok message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ok} Ok
             */
            Ok.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.Ok)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.Ok();
            };

            /**
             * Creates a plain object from an Ok message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.Ok} message Ok
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ok.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Ok to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ok
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ok.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ok;
        })();

        IntifaceFrontendMessage.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IError
             * @property {string|null} [reason] Error reason
             */

            /**
             * Constructs a new Error.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error reason.
             * @member {string} reason
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @instance
             */
            Error.prototype.reason = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IError=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Error.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.Error)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceFrontendMessage.Error();
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.reason = "";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        IntifaceFrontendMessage.Ready = (function() {

            /**
             * Properties of a Ready.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IReady
             */

            /**
             * Constructs a new Ready.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a Ready.
             * @implements IReady
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IReady=} [properties] Properties to set
             */
            function Ready(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Ready instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IReady=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ready} Ready instance
             */
            Ready.create = function create(properties) {
                return new Ready(properties);
            };

            /**
             * Encodes the specified Ready message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ready.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IReady} message Ready message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ready.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Ready message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ready.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IReady} message Ready message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ready.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Ready message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ready} Ready
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ready.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.Ready();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Ready message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ready} Ready
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ready.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Ready message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ready.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Ready message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.Ready} Ready
             */
            Ready.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.Ready)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.Ready();
            };

            /**
             * Creates a plain object from a Ready message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.Ready} message Ready
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ready.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Ready to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.Ready
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ready.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ready;
        })();

        IntifaceFrontendMessage.StartProcess = (function() {

            /**
             * Properties of a StartProcess.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IStartProcess
             */

            /**
             * Constructs a new StartProcess.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a StartProcess.
             * @implements IStartProcess
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProcess=} [properties] Properties to set
             */
            function StartProcess(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StartProcess instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProcess=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProcess} StartProcess instance
             */
            StartProcess.create = function create(properties) {
                return new StartProcess(properties);
            };

            /**
             * Encodes the specified StartProcess message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProcess.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProcess} message StartProcess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartProcess.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartProcess message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProcess.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProcess} message StartProcess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartProcess.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartProcess message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProcess} StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartProcess.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartProcess message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProcess} StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartProcess.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartProcess message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartProcess.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StartProcess message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProcess} StartProcess
             */
            StartProcess.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.StartProcess();
            };

            /**
             * Creates a plain object from a StartProcess message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.StartProcess} message StartProcess
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartProcess.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartProcess to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProcess
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartProcess.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartProcess;
        })();

        IntifaceFrontendMessage.StopProcess = (function() {

            /**
             * Properties of a StopProcess.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IStopProcess
             */

            /**
             * Constructs a new StopProcess.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a StopProcess.
             * @implements IStopProcess
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProcess=} [properties] Properties to set
             */
            function StopProcess(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StopProcess instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProcess=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProcess} StopProcess instance
             */
            StopProcess.create = function create(properties) {
                return new StopProcess(properties);
            };

            /**
             * Encodes the specified StopProcess message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProcess.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProcess} message StopProcess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopProcess.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StopProcess message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProcess.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProcess} message StopProcess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopProcess.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StopProcess message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProcess} StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopProcess.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StopProcess message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProcess} StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopProcess.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StopProcess message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StopProcess.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StopProcess message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProcess} StopProcess
             */
            StopProcess.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.StopProcess();
            };

            /**
             * Creates a plain object from a StopProcess message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.StopProcess} message StopProcess
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StopProcess.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StopProcess to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProcess
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StopProcess.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StopProcess;
        })();

        IntifaceFrontendMessage.StartProxy = (function() {

            /**
             * Properties of a StartProxy.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IStartProxy
             */

            /**
             * Constructs a new StartProxy.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a StartProxy.
             * @implements IStartProxy
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProxy=} [properties] Properties to set
             */
            function StartProxy(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StartProxy instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProxy=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProxy} StartProxy instance
             */
            StartProxy.create = function create(properties) {
                return new StartProxy(properties);
            };

            /**
             * Encodes the specified StartProxy message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProxy.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProxy} message StartProxy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartProxy.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartProxy message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProxy.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStartProxy} message StartProxy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartProxy.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartProxy message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProxy} StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartProxy.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartProxy message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProxy} StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartProxy.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartProxy message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartProxy.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StartProxy message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StartProxy} StartProxy
             */
            StartProxy.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.StartProxy();
            };

            /**
             * Creates a plain object from a StartProxy message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.StartProxy} message StartProxy
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartProxy.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartProxy to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StartProxy
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartProxy.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartProxy;
        })();

        IntifaceFrontendMessage.StopProxy = (function() {

            /**
             * Properties of a StopProxy.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IStopProxy
             */

            /**
             * Constructs a new StopProxy.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a StopProxy.
             * @implements IStopProxy
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProxy=} [properties] Properties to set
             */
            function StopProxy(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StopProxy instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProxy=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProxy} StopProxy instance
             */
            StopProxy.create = function create(properties) {
                return new StopProxy(properties);
            };

            /**
             * Encodes the specified StopProxy message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProxy.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProxy} message StopProxy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopProxy.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StopProxy message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProxy.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IStopProxy} message StopProxy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopProxy.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StopProxy message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProxy} StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopProxy.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StopProxy message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProxy} StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopProxy.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StopProxy message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StopProxy.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StopProxy message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.StopProxy} StopProxy
             */
            StopProxy.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.StopProxy();
            };

            /**
             * Creates a plain object from a StopProxy message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.StopProxy} message StopProxy
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StopProxy.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StopProxy to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.StopProxy
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StopProxy.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StopProxy;
        })();

        IntifaceFrontendMessage.UpdateConfig = (function() {

            /**
             * Properties of an UpdateConfig.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IUpdateConfig
             * @property {string|null} [configuration] UpdateConfig configuration
             */

            /**
             * Constructs a new UpdateConfig.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an UpdateConfig.
             * @implements IUpdateConfig
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig=} [properties] Properties to set
             */
            function UpdateConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateConfig configuration.
             * @member {string} configuration
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @instance
             */
            UpdateConfig.prototype.configuration = "";

            /**
             * Creates a new UpdateConfig instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig} UpdateConfig instance
             */
            UpdateConfig.create = function create(properties) {
                return new UpdateConfig(properties);
            };

            /**
             * Encodes the specified UpdateConfig message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig} message UpdateConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.configuration);
                return writer;
            };

            /**
             * Encodes the specified UpdateConfig message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig} message UpdateConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig} UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.configuration = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig} UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateConfig message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.configuration != null && message.hasOwnProperty("configuration"))
                    if (!$util.isString(message.configuration))
                        return "configuration: string expected";
                return null;
            };

            /**
             * Creates an UpdateConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig} UpdateConfig
             */
            UpdateConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig();
                if (object.configuration != null)
                    message.configuration = String(object.configuration);
                return message;
            };

            /**
             * Creates a plain object from an UpdateConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig} message UpdateConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.configuration = "";
                if (message.configuration != null && message.hasOwnProperty("configuration"))
                    object.configuration = message.configuration;
                return object;
            };

            /**
             * Converts this UpdateConfig to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateConfig;
        })();

        IntifaceFrontendMessage.CheckForUpdates = (function() {

            /**
             * Properties of a CheckForUpdates.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface ICheckForUpdates
             */

            /**
             * Constructs a new CheckForUpdates.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a CheckForUpdates.
             * @implements ICheckForUpdates
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates=} [properties] Properties to set
             */
            function CheckForUpdates(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CheckForUpdates instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates} CheckForUpdates instance
             */
            CheckForUpdates.create = function create(properties) {
                return new CheckForUpdates(properties);
            };

            /**
             * Encodes the specified CheckForUpdates message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates} message CheckForUpdates message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CheckForUpdates.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CheckForUpdates message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates} message CheckForUpdates message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CheckForUpdates.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CheckForUpdates message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates} CheckForUpdates
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CheckForUpdates.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CheckForUpdates message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates} CheckForUpdates
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CheckForUpdates.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CheckForUpdates message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CheckForUpdates.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CheckForUpdates message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates} CheckForUpdates
             */
            CheckForUpdates.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates();
            };

            /**
             * Creates a plain object from a CheckForUpdates message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates} message CheckForUpdates
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CheckForUpdates.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CheckForUpdates to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CheckForUpdates.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CheckForUpdates;
        })();

        IntifaceFrontendMessage.UpdateEngine = (function() {

            /**
             * Properties of an UpdateEngine.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IUpdateEngine
             */

            /**
             * Constructs a new UpdateEngine.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an UpdateEngine.
             * @implements IUpdateEngine
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine=} [properties] Properties to set
             */
            function UpdateEngine(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new UpdateEngine instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine} UpdateEngine instance
             */
            UpdateEngine.create = function create(properties) {
                return new UpdateEngine(properties);
            };

            /**
             * Encodes the specified UpdateEngine message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine} message UpdateEngine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEngine.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified UpdateEngine message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine} message UpdateEngine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEngine.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateEngine message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine} UpdateEngine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEngine.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateEngine message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine} UpdateEngine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEngine.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateEngine message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateEngine.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an UpdateEngine message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine} UpdateEngine
             */
            UpdateEngine.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine();
            };

            /**
             * Creates a plain object from an UpdateEngine message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine} message UpdateEngine
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateEngine.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this UpdateEngine to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateEngine.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateEngine;
        })();

        IntifaceFrontendMessage.UpdateDeviceFile = (function() {

            /**
             * Properties of an UpdateDeviceFile.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IUpdateDeviceFile
             */

            /**
             * Constructs a new UpdateDeviceFile.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an UpdateDeviceFile.
             * @implements IUpdateDeviceFile
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile=} [properties] Properties to set
             */
            function UpdateDeviceFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new UpdateDeviceFile instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile} UpdateDeviceFile instance
             */
            UpdateDeviceFile.create = function create(properties) {
                return new UpdateDeviceFile(properties);
            };

            /**
             * Encodes the specified UpdateDeviceFile message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile} message UpdateDeviceFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateDeviceFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified UpdateDeviceFile message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile} message UpdateDeviceFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateDeviceFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateDeviceFile message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile} UpdateDeviceFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateDeviceFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateDeviceFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile} UpdateDeviceFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateDeviceFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateDeviceFile message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateDeviceFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an UpdateDeviceFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile} UpdateDeviceFile
             */
            UpdateDeviceFile.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile();
            };

            /**
             * Creates a plain object from an UpdateDeviceFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile} message UpdateDeviceFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateDeviceFile.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this UpdateDeviceFile to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateDeviceFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateDeviceFile;
        })();

        IntifaceFrontendMessage.UpdateApplication = (function() {

            /**
             * Properties of an UpdateApplication.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IUpdateApplication
             */

            /**
             * Constructs a new UpdateApplication.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an UpdateApplication.
             * @implements IUpdateApplication
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication=} [properties] Properties to set
             */
            function UpdateApplication(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new UpdateApplication instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication} UpdateApplication instance
             */
            UpdateApplication.create = function create(properties) {
                return new UpdateApplication(properties);
            };

            /**
             * Encodes the specified UpdateApplication message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication} message UpdateApplication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateApplication.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified UpdateApplication message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication} message UpdateApplication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateApplication.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateApplication message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication} UpdateApplication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateApplication.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateApplication message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication} UpdateApplication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateApplication.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateApplication message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateApplication.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an UpdateApplication message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication} UpdateApplication
             */
            UpdateApplication.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication();
            };

            /**
             * Creates a plain object from an UpdateApplication message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication} message UpdateApplication
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateApplication.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this UpdateApplication to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateApplication.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateApplication;
        })();

        IntifaceFrontendMessage.ResetIntifaceConfiguration = (function() {

            /**
             * Properties of a ResetIntifaceConfiguration.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IResetIntifaceConfiguration
             */

            /**
             * Constructs a new ResetIntifaceConfiguration.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a ResetIntifaceConfiguration.
             * @implements IResetIntifaceConfiguration
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration=} [properties] Properties to set
             */
            function ResetIntifaceConfiguration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ResetIntifaceConfiguration instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration} ResetIntifaceConfiguration instance
             */
            ResetIntifaceConfiguration.create = function create(properties) {
                return new ResetIntifaceConfiguration(properties);
            };

            /**
             * Encodes the specified ResetIntifaceConfiguration message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration} message ResetIntifaceConfiguration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetIntifaceConfiguration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ResetIntifaceConfiguration message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration} message ResetIntifaceConfiguration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResetIntifaceConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResetIntifaceConfiguration message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration} ResetIntifaceConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetIntifaceConfiguration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResetIntifaceConfiguration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration} ResetIntifaceConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResetIntifaceConfiguration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResetIntifaceConfiguration message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResetIntifaceConfiguration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ResetIntifaceConfiguration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration} ResetIntifaceConfiguration
             */
            ResetIntifaceConfiguration.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration();
            };

            /**
             * Creates a plain object from a ResetIntifaceConfiguration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration} message ResetIntifaceConfiguration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResetIntifaceConfiguration.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ResetIntifaceConfiguration to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResetIntifaceConfiguration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResetIntifaceConfiguration;
        })();

        IntifaceFrontendMessage.LogMessage = (function() {

            /**
             * Properties of a LogMessage.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface ILogMessage
             * @property {string|null} [info] LogMessage info
             */

            /**
             * Constructs a new LogMessage.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a LogMessage.
             * @implements ILogMessage
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ILogMessage=} [properties] Properties to set
             */
            function LogMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LogMessage info.
             * @member {string} info
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @instance
             */
            LogMessage.prototype.info = "";

            /**
             * Creates a new LogMessage instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ILogMessage=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.LogMessage} LogMessage instance
             */
            LogMessage.create = function create(properties) {
                return new LogMessage(properties);
            };

            /**
             * Encodes the specified LogMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.LogMessage.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ILogMessage} message LogMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LogMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.info);
                return writer;
            };

            /**
             * Encodes the specified LogMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.LogMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ILogMessage} message LogMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LogMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LogMessage message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.LogMessage} LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LogMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LogMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.LogMessage} LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LogMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LogMessage message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LogMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                return null;
            };

            /**
             * Creates a LogMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.LogMessage} LogMessage
             */
            LogMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage)
                    return object;
                var message = new $root.IntifaceProtocols.IntifaceFrontendMessage.LogMessage();
                if (object.info != null)
                    message.info = String(object.info);
                return message;
            };

            /**
             * Creates a plain object from a LogMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.LogMessage} message LogMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LogMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.info = "";
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                return object;
            };

            /**
             * Converts this LogMessage to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.LogMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LogMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LogMessage;
        })();

        IntifaceFrontendMessage.CancelUpdate = (function() {

            /**
             * Properties of a CancelUpdate.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface ICancelUpdate
             */

            /**
             * Constructs a new CancelUpdate.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents a CancelUpdate.
             * @implements ICancelUpdate
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate=} [properties] Properties to set
             */
            function CancelUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CancelUpdate instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate} CancelUpdate instance
             */
            CancelUpdate.create = function create(properties) {
                return new CancelUpdate(properties);
            };

            /**
             * Encodes the specified CancelUpdate message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate} message CancelUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CancelUpdate message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate} message CancelUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate} CancelUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CancelUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate} CancelUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelUpdate message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CancelUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate} CancelUpdate
             */
            CancelUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate();
            };

            /**
             * Creates a plain object from a CancelUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate} message CancelUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CancelUpdate.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CancelUpdate to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CancelUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CancelUpdate;
        })();

        IntifaceFrontendMessage.OpenLogDirectory = (function() {

            /**
             * Properties of an OpenLogDirectory.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @interface IOpenLogDirectory
             */

            /**
             * Constructs a new OpenLogDirectory.
             * @memberof IntifaceProtocols.IntifaceFrontendMessage
             * @classdesc Represents an OpenLogDirectory.
             * @implements IOpenLogDirectory
             * @constructor
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory=} [properties] Properties to set
             */
            function OpenLogDirectory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new OpenLogDirectory instance using the specified properties.
             * @function create
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory=} [properties] Properties to set
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory} OpenLogDirectory instance
             */
            OpenLogDirectory.create = function create(properties) {
                return new OpenLogDirectory(properties);
            };

            /**
             * Encodes the specified OpenLogDirectory message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.verify|verify} messages.
             * @function encode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory} message OpenLogDirectory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenLogDirectory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified OpenLogDirectory message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory} message OpenLogDirectory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpenLogDirectory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OpenLogDirectory message from the specified reader or buffer.
             * @function decode
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory} OpenLogDirectory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenLogDirectory.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OpenLogDirectory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory} OpenLogDirectory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpenLogDirectory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OpenLogDirectory message.
             * @function verify
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpenLogDirectory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an OpenLogDirectory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory} OpenLogDirectory
             */
            OpenLogDirectory.fromObject = function fromObject(object) {
                if (object instanceof $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory)
                    return object;
                return new $root.IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory();
            };

            /**
             * Creates a plain object from an OpenLogDirectory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @static
             * @param {IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory} message OpenLogDirectory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpenLogDirectory.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this OpenLogDirectory to JSON.
             * @function toJSON
             * @memberof IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpenLogDirectory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OpenLogDirectory;
        })();

        return IntifaceFrontendMessage;
    })();

    return IntifaceProtocols;
})();

module.exports = $root;
