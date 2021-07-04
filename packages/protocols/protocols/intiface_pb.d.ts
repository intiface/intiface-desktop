import * as $protobuf from "protobufjs";
/** Namespace IntifaceProtocols. */
export namespace IntifaceProtocols {

    /** Properties of a ServerControlMessage. */
    interface IServerControlMessage {

        /** ServerControlMessage stop */
        stop?: (IntifaceProtocols.ServerControlMessage.IStop|null);
    }

    /** Represents a ServerControlMessage. */
    class ServerControlMessage implements IServerControlMessage {

        /**
         * Constructs a new ServerControlMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceProtocols.IServerControlMessage);

        /** ServerControlMessage stop. */
        public stop?: (IntifaceProtocols.ServerControlMessage.IStop|null);

        /** ServerControlMessage msg. */
        public msg?: "stop";

        /**
         * Creates a new ServerControlMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerControlMessage instance
         */
        public static create(properties?: IntifaceProtocols.IServerControlMessage): IntifaceProtocols.ServerControlMessage;

        /**
         * Encodes the specified ServerControlMessage message. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.verify|verify} messages.
         * @param message ServerControlMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceProtocols.IServerControlMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerControlMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.verify|verify} messages.
         * @param message ServerControlMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceProtocols.IServerControlMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerControlMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerControlMessage;

        /**
         * Decodes a ServerControlMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerControlMessage;

        /**
         * Verifies a ServerControlMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerControlMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerControlMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerControlMessage;

        /**
         * Creates a plain object from a ServerControlMessage message. Also converts values to other types if specified.
         * @param message ServerControlMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceProtocols.ServerControlMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerControlMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerControlMessage {

        /** Properties of a Stop. */
        interface IStop {
        }

        /** Represents a Stop. */
        class Stop implements IStop {

            /**
             * Constructs a new Stop.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerControlMessage.IStop);

            /**
             * Creates a new Stop instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Stop instance
             */
            public static create(properties?: IntifaceProtocols.ServerControlMessage.IStop): IntifaceProtocols.ServerControlMessage.Stop;

            /**
             * Encodes the specified Stop message. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.Stop.verify|verify} messages.
             * @param message Stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerControlMessage.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Stop message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerControlMessage.Stop.verify|verify} messages.
             * @param message Stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerControlMessage.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Stop message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerControlMessage.Stop;

            /**
             * Decodes a Stop message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerControlMessage.Stop;

            /**
             * Verifies a Stop message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Stop message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Stop
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerControlMessage.Stop;

            /**
             * Creates a plain object from a Stop message. Also converts values to other types if specified.
             * @param message Stop
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerControlMessage.Stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Stop to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ServerProcessMessage. */
    interface IServerProcessMessage {

        /** ServerProcessMessage processStarted */
        processStarted?: (IntifaceProtocols.ServerProcessMessage.IProcessStarted|null);

        /** ServerProcessMessage processError */
        processError?: (IntifaceProtocols.ServerProcessMessage.IProcessError|null);

        /** ServerProcessMessage processEnded */
        processEnded?: (IntifaceProtocols.ServerProcessMessage.IProcessEnded|null);

        /** ServerProcessMessage processLog */
        processLog?: (IntifaceProtocols.ServerProcessMessage.IProcessLog|null);

        /** ServerProcessMessage buttplugLog */
        buttplugLog?: (IntifaceProtocols.ServerProcessMessage.IButtplugLog|null);

        /** ServerProcessMessage clientConnected */
        clientConnected?: (IntifaceProtocols.ServerProcessMessage.IClientConnected|null);

        /** ServerProcessMessage clientDisconnected */
        clientDisconnected?: (IntifaceProtocols.ServerProcessMessage.IClientDisconnected|null);

        /** ServerProcessMessage deviceConnected */
        deviceConnected?: (IntifaceProtocols.ServerProcessMessage.IDeviceConnected|null);

        /** ServerProcessMessage deviceDisconnected */
        deviceDisconnected?: (IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected|null);

        /** ServerProcessMessage clientRejected */
        clientRejected?: (IntifaceProtocols.ServerProcessMessage.IClientRejected|null);
    }

    /** Represents a ServerProcessMessage. */
    class ServerProcessMessage implements IServerProcessMessage {

        /**
         * Constructs a new ServerProcessMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceProtocols.IServerProcessMessage);

        /** ServerProcessMessage processStarted. */
        public processStarted?: (IntifaceProtocols.ServerProcessMessage.IProcessStarted|null);

        /** ServerProcessMessage processError. */
        public processError?: (IntifaceProtocols.ServerProcessMessage.IProcessError|null);

        /** ServerProcessMessage processEnded. */
        public processEnded?: (IntifaceProtocols.ServerProcessMessage.IProcessEnded|null);

        /** ServerProcessMessage processLog. */
        public processLog?: (IntifaceProtocols.ServerProcessMessage.IProcessLog|null);

        /** ServerProcessMessage buttplugLog. */
        public buttplugLog?: (IntifaceProtocols.ServerProcessMessage.IButtplugLog|null);

        /** ServerProcessMessage clientConnected. */
        public clientConnected?: (IntifaceProtocols.ServerProcessMessage.IClientConnected|null);

        /** ServerProcessMessage clientDisconnected. */
        public clientDisconnected?: (IntifaceProtocols.ServerProcessMessage.IClientDisconnected|null);

        /** ServerProcessMessage deviceConnected. */
        public deviceConnected?: (IntifaceProtocols.ServerProcessMessage.IDeviceConnected|null);

        /** ServerProcessMessage deviceDisconnected. */
        public deviceDisconnected?: (IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected|null);

        /** ServerProcessMessage clientRejected. */
        public clientRejected?: (IntifaceProtocols.ServerProcessMessage.IClientRejected|null);

        /** ServerProcessMessage msg. */
        public msg?: ("processStarted"|"processError"|"processEnded"|"processLog"|"buttplugLog"|"clientConnected"|"clientDisconnected"|"deviceConnected"|"deviceDisconnected"|"clientRejected");

        /**
         * Creates a new ServerProcessMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerProcessMessage instance
         */
        public static create(properties?: IntifaceProtocols.IServerProcessMessage): IntifaceProtocols.ServerProcessMessage;

        /**
         * Encodes the specified ServerProcessMessage message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.verify|verify} messages.
         * @param message ServerProcessMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceProtocols.IServerProcessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerProcessMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.verify|verify} messages.
         * @param message ServerProcessMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceProtocols.IServerProcessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage;

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage;

        /**
         * Verifies a ServerProcessMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerProcessMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerProcessMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage;

        /**
         * Creates a plain object from a ServerProcessMessage message. Also converts values to other types if specified.
         * @param message ServerProcessMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceProtocols.ServerProcessMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerProcessMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerProcessMessage {

        /** Properties of a ProcessLog. */
        interface IProcessLog {

            /** ProcessLog message */
            message?: (string|null);
        }

        /** Represents a ProcessLog. */
        class ProcessLog implements IProcessLog {

            /**
             * Constructs a new ProcessLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IProcessLog);

            /** ProcessLog message. */
            public message: string;

            /**
             * Creates a new ProcessLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessLog instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IProcessLog): IntifaceProtocols.ServerProcessMessage.ProcessLog;

            /**
             * Encodes the specified ProcessLog message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessLog message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ProcessLog;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ProcessLog;

            /**
             * Verifies a ProcessLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessLog
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ProcessLog;

            /**
             * Creates a plain object from a ProcessLog message. Also converts values to other types if specified.
             * @param message ProcessLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ProcessLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessStarted. */
        interface IProcessStarted {
        }

        /** Represents a ProcessStarted. */
        class ProcessStarted implements IProcessStarted {

            /**
             * Constructs a new ProcessStarted.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IProcessStarted);

            /**
             * Creates a new ProcessStarted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessStarted instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IProcessStarted): IntifaceProtocols.ServerProcessMessage.ProcessStarted;

            /**
             * Encodes the specified ProcessStarted message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessStarted message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ProcessStarted;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ProcessStarted;

            /**
             * Verifies a ProcessStarted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessStarted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessStarted
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ProcessStarted;

            /**
             * Creates a plain object from a ProcessStarted message. Also converts values to other types if specified.
             * @param message ProcessStarted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ProcessStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessStarted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessError. */
        interface IProcessError {

            /** ProcessError message */
            message?: (string|null);
        }

        /** Represents a ProcessError. */
        class ProcessError implements IProcessError {

            /**
             * Constructs a new ProcessError.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IProcessError);

            /** ProcessError message. */
            public message: string;

            /**
             * Creates a new ProcessError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessError instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IProcessError): IntifaceProtocols.ServerProcessMessage.ProcessError;

            /**
             * Encodes the specified ProcessError message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessError message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ProcessError;

            /**
             * Decodes a ProcessError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ProcessError;

            /**
             * Verifies a ProcessError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessError
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ProcessError;

            /**
             * Creates a plain object from a ProcessError message. Also converts values to other types if specified.
             * @param message ProcessError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ProcessError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessEnded. */
        interface IProcessEnded {
        }

        /** Represents a ProcessEnded. */
        class ProcessEnded implements IProcessEnded {

            /**
             * Constructs a new ProcessEnded.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IProcessEnded);

            /**
             * Creates a new ProcessEnded instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessEnded instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IProcessEnded): IntifaceProtocols.ServerProcessMessage.ProcessEnded;

            /**
             * Encodes the specified ProcessEnded message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessEnded message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ProcessEnded;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ProcessEnded;

            /**
             * Verifies a ProcessEnded message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessEnded message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessEnded
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ProcessEnded;

            /**
             * Creates a plain object from a ProcessEnded message. Also converts values to other types if specified.
             * @param message ProcessEnded
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ProcessEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessEnded to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ButtplugLog. */
        interface IButtplugLog {

            /** ButtplugLog message */
            message?: (string|null);
        }

        /** Represents a ButtplugLog. */
        class ButtplugLog implements IButtplugLog {

            /**
             * Constructs a new ButtplugLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IButtplugLog);

            /** ButtplugLog message. */
            public message: string;

            /**
             * Creates a new ButtplugLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtplugLog instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IButtplugLog): IntifaceProtocols.ServerProcessMessage.ButtplugLog;

            /**
             * Encodes the specified ButtplugLog message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtplugLog message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ButtplugLog;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ButtplugLog;

            /**
             * Verifies a ButtplugLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtplugLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtplugLog
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ButtplugLog;

            /**
             * Creates a plain object from a ButtplugLog message. Also converts values to other types if specified.
             * @param message ButtplugLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ButtplugLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtplugLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientConnected. */
        interface IClientConnected {

            /** ClientConnected clientName */
            clientName?: (string|null);
        }

        /** Represents a ClientConnected. */
        class ClientConnected implements IClientConnected {

            /**
             * Constructs a new ClientConnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IClientConnected);

            /** ClientConnected clientName. */
            public clientName: string;

            /**
             * Creates a new ClientConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientConnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IClientConnected): IntifaceProtocols.ServerProcessMessage.ClientConnected;

            /**
             * Encodes the specified ClientConnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientConnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ClientConnected;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ClientConnected;

            /**
             * Verifies a ClientConnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientConnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientConnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ClientConnected;

            /**
             * Creates a plain object from a ClientConnected message. Also converts values to other types if specified.
             * @param message ClientConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ClientConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientConnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientDisconnected. */
        interface IClientDisconnected {
        }

        /** Represents a ClientDisconnected. */
        class ClientDisconnected implements IClientDisconnected {

            /**
             * Constructs a new ClientDisconnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IClientDisconnected);

            /**
             * Creates a new ClientDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientDisconnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IClientDisconnected): IntifaceProtocols.ServerProcessMessage.ClientDisconnected;

            /**
             * Encodes the specified ClientDisconnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientDisconnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ClientDisconnected;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ClientDisconnected;

            /**
             * Verifies a ClientDisconnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientDisconnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientDisconnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ClientDisconnected;

            /**
             * Creates a plain object from a ClientDisconnected message. Also converts values to other types if specified.
             * @param message ClientDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ClientDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientDisconnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeviceConnected. */
        interface IDeviceConnected {

            /** DeviceConnected deviceName */
            deviceName?: (string|null);

            /** DeviceConnected deviceId */
            deviceId?: (number|null);
        }

        /** Represents a DeviceConnected. */
        class DeviceConnected implements IDeviceConnected {

            /**
             * Constructs a new DeviceConnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IDeviceConnected);

            /** DeviceConnected deviceName. */
            public deviceName: string;

            /** DeviceConnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceConnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IDeviceConnected): IntifaceProtocols.ServerProcessMessage.DeviceConnected;

            /**
             * Encodes the specified DeviceConnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceConnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.DeviceConnected;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.DeviceConnected;

            /**
             * Verifies a DeviceConnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceConnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceConnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.DeviceConnected;

            /**
             * Creates a plain object from a DeviceConnected message. Also converts values to other types if specified.
             * @param message DeviceConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.DeviceConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceConnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeviceDisconnected. */
        interface IDeviceDisconnected {

            /** DeviceDisconnected deviceId */
            deviceId?: (number|null);
        }

        /** Represents a DeviceDisconnected. */
        class DeviceDisconnected implements IDeviceDisconnected {

            /**
             * Constructs a new DeviceDisconnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected);

            /** DeviceDisconnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceDisconnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected): IntifaceProtocols.ServerProcessMessage.DeviceDisconnected;

            /**
             * Encodes the specified DeviceDisconnected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceDisconnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.DeviceDisconnected;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.DeviceDisconnected;

            /**
             * Verifies a DeviceDisconnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceDisconnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceDisconnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.DeviceDisconnected;

            /**
             * Creates a plain object from a DeviceDisconnected message. Also converts values to other types if specified.
             * @param message DeviceDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.DeviceDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceDisconnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientRejected. */
        interface IClientRejected {

            /** ClientRejected clientName */
            clientName?: (string|null);
        }

        /** Represents a ClientRejected. */
        class ClientRejected implements IClientRejected {

            /**
             * Constructs a new ClientRejected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerProcessMessage.IClientRejected);

            /** ClientRejected clientName. */
            public clientName: string;

            /**
             * Creates a new ClientRejected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientRejected instance
             */
            public static create(properties?: IntifaceProtocols.ServerProcessMessage.IClientRejected): IntifaceProtocols.ServerProcessMessage.ClientRejected;

            /**
             * Encodes the specified ClientRejected message. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientRejected.verify|verify} messages.
             * @param message ClientRejected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerProcessMessage.IClientRejected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientRejected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerProcessMessage.ClientRejected.verify|verify} messages.
             * @param message ClientRejected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerProcessMessage.IClientRejected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientRejected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientRejected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerProcessMessage.ClientRejected;

            /**
             * Decodes a ClientRejected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientRejected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerProcessMessage.ClientRejected;

            /**
             * Verifies a ClientRejected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientRejected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientRejected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerProcessMessage.ClientRejected;

            /**
             * Creates a plain object from a ClientRejected message. Also converts values to other types if specified.
             * @param message ClientRejected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerProcessMessage.ClientRejected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientRejected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an IntifaceBackendMessage. */
    interface IIntifaceBackendMessage {

        /** IntifaceBackendMessage index */
        index?: (number|null);

        /** IntifaceBackendMessage ok */
        ok?: (IntifaceProtocols.IntifaceBackendMessage.IOk|null);

        /** IntifaceBackendMessage error */
        error?: (IntifaceProtocols.IntifaceBackendMessage.IError|null);

        /** IntifaceBackendMessage configuration */
        configuration?: (IntifaceProtocols.IntifaceBackendMessage.IConfiguration|null);

        /** IntifaceBackendMessage updatesAvailable */
        updatesAvailable?: (IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable|null);

        /** IntifaceBackendMessage downloadProgress */
        downloadProgress?: (IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress|null);

        /** IntifaceBackendMessage serverProcessMessage */
        serverProcessMessage?: (IntifaceProtocols.IServerProcessMessage|null);

        /** IntifaceBackendMessage logMessage */
        logMessage?: (IntifaceProtocols.IntifaceBackendMessage.ILogMessage|null);

        /** IntifaceBackendMessage processError */
        processError?: (IntifaceProtocols.IntifaceBackendMessage.IProcessError|null);

        /** IntifaceBackendMessage serialPortList */
        serialPortList?: (IntifaceProtocols.IntifaceBackendMessage.ISerialPortList|null);

        /** IntifaceBackendMessage initializeUserDeviceConfig */
        initializeUserDeviceConfig?: (IntifaceProtocols.IntifaceBackendMessage.IInitializeUserDeviceConfig|null);
    }

    /** Represents an IntifaceBackendMessage. */
    class IntifaceBackendMessage implements IIntifaceBackendMessage {

        /**
         * Constructs a new IntifaceBackendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceProtocols.IIntifaceBackendMessage);

        /** IntifaceBackendMessage index. */
        public index: number;

        /** IntifaceBackendMessage ok. */
        public ok?: (IntifaceProtocols.IntifaceBackendMessage.IOk|null);

        /** IntifaceBackendMessage error. */
        public error?: (IntifaceProtocols.IntifaceBackendMessage.IError|null);

        /** IntifaceBackendMessage configuration. */
        public configuration?: (IntifaceProtocols.IntifaceBackendMessage.IConfiguration|null);

        /** IntifaceBackendMessage updatesAvailable. */
        public updatesAvailable?: (IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable|null);

        /** IntifaceBackendMessage downloadProgress. */
        public downloadProgress?: (IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress|null);

        /** IntifaceBackendMessage serverProcessMessage. */
        public serverProcessMessage?: (IntifaceProtocols.IServerProcessMessage|null);

        /** IntifaceBackendMessage logMessage. */
        public logMessage?: (IntifaceProtocols.IntifaceBackendMessage.ILogMessage|null);

        /** IntifaceBackendMessage processError. */
        public processError?: (IntifaceProtocols.IntifaceBackendMessage.IProcessError|null);

        /** IntifaceBackendMessage serialPortList. */
        public serialPortList?: (IntifaceProtocols.IntifaceBackendMessage.ISerialPortList|null);

        /** IntifaceBackendMessage initializeUserDeviceConfig. */
        public initializeUserDeviceConfig?: (IntifaceProtocols.IntifaceBackendMessage.IInitializeUserDeviceConfig|null);

        /** IntifaceBackendMessage msg. */
        public msg?: ("ok"|"error"|"configuration"|"updatesAvailable"|"downloadProgress"|"serverProcessMessage"|"logMessage"|"processError"|"serialPortList"|"initializeUserDeviceConfig");

        /**
         * Creates a new IntifaceBackendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntifaceBackendMessage instance
         */
        public static create(properties?: IntifaceProtocols.IIntifaceBackendMessage): IntifaceProtocols.IntifaceBackendMessage;

        /**
         * Encodes the specified IntifaceBackendMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.verify|verify} messages.
         * @param message IntifaceBackendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceProtocols.IIntifaceBackendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntifaceBackendMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.verify|verify} messages.
         * @param message IntifaceBackendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceProtocols.IIntifaceBackendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntifaceBackendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntifaceBackendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage;

        /**
         * Decodes an IntifaceBackendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntifaceBackendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage;

        /**
         * Verifies an IntifaceBackendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntifaceBackendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntifaceBackendMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage;

        /**
         * Creates a plain object from an IntifaceBackendMessage message. Also converts values to other types if specified.
         * @param message IntifaceBackendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceProtocols.IntifaceBackendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntifaceBackendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace IntifaceBackendMessage {

        /** Properties of an Ok. */
        interface IOk {
        }

        /** Represents an Ok. */
        class Ok implements IOk {

            /**
             * Constructs a new Ok.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IOk);

            /**
             * Creates a new Ok instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ok instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IOk): IntifaceProtocols.IntifaceBackendMessage.Ok;

            /**
             * Encodes the specified Ok message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Ok.verify|verify} messages.
             * @param message Ok message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IOk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ok message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Ok.verify|verify} messages.
             * @param message Ok message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IOk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ok message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.Ok;

            /**
             * Decodes an Ok message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.Ok;

            /**
             * Verifies an Ok message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Ok message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ok
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.Ok;

            /**
             * Creates a plain object from an Ok message. Also converts values to other types if specified.
             * @param message Ok
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.Ok, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ok to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Error. */
        interface IError {

            /** Error reason */
            reason?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IError);

            /** Error reason. */
            public reason: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IError): IntifaceProtocols.IntifaceBackendMessage.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessError. */
        interface IProcessError {

            /** ProcessError reason */
            reason?: (string|null);
        }

        /** Represents a ProcessError. */
        class ProcessError implements IProcessError {

            /**
             * Constructs a new ProcessError.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IProcessError);

            /** ProcessError reason. */
            public reason: string;

            /**
             * Creates a new ProcessError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessError instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IProcessError): IntifaceProtocols.IntifaceBackendMessage.ProcessError;

            /**
             * Encodes the specified ProcessError message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessError message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.ProcessError;

            /**
             * Decodes a ProcessError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.ProcessError;

            /**
             * Verifies a ProcessError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessError
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.ProcessError;

            /**
             * Creates a plain object from a ProcessError message. Also converts values to other types if specified.
             * @param message ProcessError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.ProcessError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Configuration. */
        interface IConfiguration {

            /** Configuration configuration */
            configuration?: (string|null);
        }

        /** Represents a Configuration. */
        class Configuration implements IConfiguration {

            /**
             * Constructs a new Configuration.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IConfiguration);

            /** Configuration configuration. */
            public configuration: string;

            /**
             * Creates a new Configuration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Configuration instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IConfiguration): IntifaceProtocols.IntifaceBackendMessage.Configuration;

            /**
             * Encodes the specified Configuration message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Configuration.verify|verify} messages.
             * @param message Configuration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Configuration message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.Configuration.verify|verify} messages.
             * @param message Configuration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Configuration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.Configuration;

            /**
             * Decodes a Configuration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.Configuration;

            /**
             * Verifies a Configuration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Configuration
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.Configuration;

            /**
             * Creates a plain object from a Configuration message. Also converts values to other types if specified.
             * @param message Configuration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.Configuration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Configuration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdatesAvailable. */
        interface IUpdatesAvailable {

            /** UpdatesAvailable application */
            application?: (boolean|null);

            /** UpdatesAvailable deviceFile */
            deviceFile?: (boolean|null);

            /** UpdatesAvailable engine */
            engine?: (boolean|null);
        }

        /** Represents an UpdatesAvailable. */
        class UpdatesAvailable implements IUpdatesAvailable {

            /**
             * Constructs a new UpdatesAvailable.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable);

            /** UpdatesAvailable application. */
            public application: boolean;

            /** UpdatesAvailable deviceFile. */
            public deviceFile: boolean;

            /** UpdatesAvailable engine. */
            public engine: boolean;

            /**
             * Creates a new UpdatesAvailable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdatesAvailable instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable): IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable;

            /**
             * Encodes the specified UpdatesAvailable message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.verify|verify} messages.
             * @param message UpdatesAvailable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdatesAvailable message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable.verify|verify} messages.
             * @param message UpdatesAvailable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IUpdatesAvailable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdatesAvailable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdatesAvailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable;

            /**
             * Decodes an UpdatesAvailable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdatesAvailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable;

            /**
             * Verifies an UpdatesAvailable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdatesAvailable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdatesAvailable
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable;

            /**
             * Creates a plain object from an UpdatesAvailable message. Also converts values to other types if specified.
             * @param message UpdatesAvailable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.UpdatesAvailable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdatesAvailable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DownloadProgress. */
        interface IDownloadProgress {

            /** DownloadProgress bytesReceived */
            bytesReceived?: (number|null);

            /** DownloadProgress bytesTotal */
            bytesTotal?: (number|null);

            /** DownloadProgress error */
            error?: (string|null);
        }

        /** Represents a DownloadProgress. */
        class DownloadProgress implements IDownloadProgress {

            /**
             * Constructs a new DownloadProgress.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress);

            /** DownloadProgress bytesReceived. */
            public bytesReceived: number;

            /** DownloadProgress bytesTotal. */
            public bytesTotal: number;

            /** DownloadProgress error. */
            public error: string;

            /**
             * Creates a new DownloadProgress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DownloadProgress instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress): IntifaceProtocols.IntifaceBackendMessage.DownloadProgress;

            /**
             * Encodes the specified DownloadProgress message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.verify|verify} messages.
             * @param message DownloadProgress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DownloadProgress message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.verify|verify} messages.
             * @param message DownloadProgress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IDownloadProgress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DownloadProgress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DownloadProgress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.DownloadProgress;

            /**
             * Decodes a DownloadProgress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DownloadProgress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.DownloadProgress;

            /**
             * Verifies a DownloadProgress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DownloadProgress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DownloadProgress
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.DownloadProgress;

            /**
             * Creates a plain object from a DownloadProgress message. Also converts values to other types if specified.
             * @param message DownloadProgress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.DownloadProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DownloadProgress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LogMessage. */
        interface ILogMessage {

            /** LogMessage info */
            info?: (string|null);
        }

        /** Represents a LogMessage. */
        class LogMessage implements ILogMessage {

            /**
             * Constructs a new LogMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.ILogMessage);

            /** LogMessage info. */
            public info: string;

            /**
             * Creates a new LogMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LogMessage instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.ILogMessage): IntifaceProtocols.IntifaceBackendMessage.LogMessage;

            /**
             * Encodes the specified LogMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.LogMessage.verify|verify} messages.
             * @param message LogMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.ILogMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LogMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.LogMessage.verify|verify} messages.
             * @param message LogMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.ILogMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LogMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.LogMessage;

            /**
             * Decodes a LogMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.LogMessage;

            /**
             * Verifies a LogMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LogMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LogMessage
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.LogMessage;

            /**
             * Creates a plain object from a LogMessage message. Also converts values to other types if specified.
             * @param message LogMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.LogMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LogMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SerialPortList. */
        interface ISerialPortList {

            /** SerialPortList ports */
            ports?: (string[]|null);

            /** SerialPortList names */
            names?: (string[]|null);
        }

        /** Represents a SerialPortList. */
        class SerialPortList implements ISerialPortList {

            /**
             * Constructs a new SerialPortList.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.ISerialPortList);

            /** SerialPortList ports. */
            public ports: string[];

            /** SerialPortList names. */
            public names: string[];

            /**
             * Creates a new SerialPortList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SerialPortList instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.ISerialPortList): IntifaceProtocols.IntifaceBackendMessage.SerialPortList;

            /**
             * Encodes the specified SerialPortList message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.SerialPortList.verify|verify} messages.
             * @param message SerialPortList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.ISerialPortList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SerialPortList message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.SerialPortList.verify|verify} messages.
             * @param message SerialPortList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.ISerialPortList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SerialPortList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SerialPortList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.SerialPortList;

            /**
             * Decodes a SerialPortList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SerialPortList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.SerialPortList;

            /**
             * Verifies a SerialPortList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SerialPortList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SerialPortList
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.SerialPortList;

            /**
             * Creates a plain object from a SerialPortList message. Also converts values to other types if specified.
             * @param message SerialPortList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.SerialPortList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SerialPortList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InitializeUserDeviceConfig. */
        interface IInitializeUserDeviceConfig {

            /** InitializeUserDeviceConfig jsonDeviceConfig */
            jsonDeviceConfig?: (string|null);
        }

        /** Represents an InitializeUserDeviceConfig. */
        class InitializeUserDeviceConfig implements IInitializeUserDeviceConfig {

            /**
             * Constructs a new InitializeUserDeviceConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceBackendMessage.IInitializeUserDeviceConfig);

            /** InitializeUserDeviceConfig jsonDeviceConfig. */
            public jsonDeviceConfig: string;

            /**
             * Creates a new InitializeUserDeviceConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InitializeUserDeviceConfig instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceBackendMessage.IInitializeUserDeviceConfig): IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig;

            /**
             * Encodes the specified InitializeUserDeviceConfig message. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig.verify|verify} messages.
             * @param message InitializeUserDeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceBackendMessage.IInitializeUserDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InitializeUserDeviceConfig message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig.verify|verify} messages.
             * @param message InitializeUserDeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceBackendMessage.IInitializeUserDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InitializeUserDeviceConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InitializeUserDeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig;

            /**
             * Decodes an InitializeUserDeviceConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InitializeUserDeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig;

            /**
             * Verifies an InitializeUserDeviceConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InitializeUserDeviceConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InitializeUserDeviceConfig
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig;

            /**
             * Creates a plain object from an InitializeUserDeviceConfig message. Also converts values to other types if specified.
             * @param message InitializeUserDeviceConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InitializeUserDeviceConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an IntifaceFrontendMessage. */
    interface IIntifaceFrontendMessage {

        /** IntifaceFrontendMessage index */
        index?: (number|null);

        /** IntifaceFrontendMessage ok */
        ok?: (IntifaceProtocols.IntifaceFrontendMessage.IOk|null);

        /** IntifaceFrontendMessage error */
        error?: (IntifaceProtocols.IntifaceFrontendMessage.IError|null);

        /** IntifaceFrontendMessage ready */
        ready?: (IntifaceProtocols.IntifaceFrontendMessage.IReady|null);

        /** IntifaceFrontendMessage startProcess */
        startProcess?: (IntifaceProtocols.IntifaceFrontendMessage.IStartProcess|null);

        /** IntifaceFrontendMessage stopProcess */
        stopProcess?: (IntifaceProtocols.IntifaceFrontendMessage.IStopProcess|null);

        /** IntifaceFrontendMessage startProxy */
        startProxy?: (IntifaceProtocols.IntifaceFrontendMessage.IStartProxy|null);

        /** IntifaceFrontendMessage stopProxy */
        stopProxy?: (IntifaceProtocols.IntifaceFrontendMessage.IStopProxy|null);

        /** IntifaceFrontendMessage updateConfig */
        updateConfig?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig|null);

        /** IntifaceFrontendMessage checkForUpdates */
        checkForUpdates?: (IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates|null);

        /** IntifaceFrontendMessage updateEngine */
        updateEngine?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine|null);

        /** IntifaceFrontendMessage updateDeviceFile */
        updateDeviceFile?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile|null);

        /** IntifaceFrontendMessage updateApplication */
        updateApplication?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication|null);

        /** IntifaceFrontendMessage logMessage */
        logMessage?: (IntifaceProtocols.IntifaceFrontendMessage.ILogMessage|null);

        /** IntifaceFrontendMessage cancelUpdate */
        cancelUpdate?: (IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate|null);

        /** IntifaceFrontendMessage resetIntifaceConfiguration */
        resetIntifaceConfiguration?: (IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration|null);

        /** IntifaceFrontendMessage openLogDirectory */
        openLogDirectory?: (IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory|null);

        /** IntifaceFrontendMessage requestSerialPortList */
        requestSerialPortList?: (IntifaceProtocols.IntifaceFrontendMessage.IRequestSerialPortList|null);

        /** IntifaceFrontendMessage updateUserDeviceConfig */
        updateUserDeviceConfig?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateUserDeviceConfig|null);

        /** IntifaceFrontendMessage requestUserDeviceConfig */
        requestUserDeviceConfig?: (IntifaceProtocols.IntifaceFrontendMessage.IRequestUserDeviceConfig|null);
    }

    /** Represents an IntifaceFrontendMessage. */
    class IntifaceFrontendMessage implements IIntifaceFrontendMessage {

        /**
         * Constructs a new IntifaceFrontendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceProtocols.IIntifaceFrontendMessage);

        /** IntifaceFrontendMessage index. */
        public index: number;

        /** IntifaceFrontendMessage ok. */
        public ok?: (IntifaceProtocols.IntifaceFrontendMessage.IOk|null);

        /** IntifaceFrontendMessage error. */
        public error?: (IntifaceProtocols.IntifaceFrontendMessage.IError|null);

        /** IntifaceFrontendMessage ready. */
        public ready?: (IntifaceProtocols.IntifaceFrontendMessage.IReady|null);

        /** IntifaceFrontendMessage startProcess. */
        public startProcess?: (IntifaceProtocols.IntifaceFrontendMessage.IStartProcess|null);

        /** IntifaceFrontendMessage stopProcess. */
        public stopProcess?: (IntifaceProtocols.IntifaceFrontendMessage.IStopProcess|null);

        /** IntifaceFrontendMessage startProxy. */
        public startProxy?: (IntifaceProtocols.IntifaceFrontendMessage.IStartProxy|null);

        /** IntifaceFrontendMessage stopProxy. */
        public stopProxy?: (IntifaceProtocols.IntifaceFrontendMessage.IStopProxy|null);

        /** IntifaceFrontendMessage updateConfig. */
        public updateConfig?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig|null);

        /** IntifaceFrontendMessage checkForUpdates. */
        public checkForUpdates?: (IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates|null);

        /** IntifaceFrontendMessage updateEngine. */
        public updateEngine?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine|null);

        /** IntifaceFrontendMessage updateDeviceFile. */
        public updateDeviceFile?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile|null);

        /** IntifaceFrontendMessage updateApplication. */
        public updateApplication?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication|null);

        /** IntifaceFrontendMessage logMessage. */
        public logMessage?: (IntifaceProtocols.IntifaceFrontendMessage.ILogMessage|null);

        /** IntifaceFrontendMessage cancelUpdate. */
        public cancelUpdate?: (IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate|null);

        /** IntifaceFrontendMessage resetIntifaceConfiguration. */
        public resetIntifaceConfiguration?: (IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration|null);

        /** IntifaceFrontendMessage openLogDirectory. */
        public openLogDirectory?: (IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory|null);

        /** IntifaceFrontendMessage requestSerialPortList. */
        public requestSerialPortList?: (IntifaceProtocols.IntifaceFrontendMessage.IRequestSerialPortList|null);

        /** IntifaceFrontendMessage updateUserDeviceConfig. */
        public updateUserDeviceConfig?: (IntifaceProtocols.IntifaceFrontendMessage.IUpdateUserDeviceConfig|null);

        /** IntifaceFrontendMessage requestUserDeviceConfig. */
        public requestUserDeviceConfig?: (IntifaceProtocols.IntifaceFrontendMessage.IRequestUserDeviceConfig|null);

        /** IntifaceFrontendMessage msg. */
        public msg?: ("ok"|"error"|"ready"|"startProcess"|"stopProcess"|"startProxy"|"stopProxy"|"updateConfig"|"checkForUpdates"|"updateEngine"|"updateDeviceFile"|"updateApplication"|"logMessage"|"cancelUpdate"|"resetIntifaceConfiguration"|"openLogDirectory"|"requestSerialPortList"|"updateUserDeviceConfig"|"requestUserDeviceConfig");

        /**
         * Creates a new IntifaceFrontendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntifaceFrontendMessage instance
         */
        public static create(properties?: IntifaceProtocols.IIntifaceFrontendMessage): IntifaceProtocols.IntifaceFrontendMessage;

        /**
         * Encodes the specified IntifaceFrontendMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.verify|verify} messages.
         * @param message IntifaceFrontendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceProtocols.IIntifaceFrontendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntifaceFrontendMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.verify|verify} messages.
         * @param message IntifaceFrontendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceProtocols.IIntifaceFrontendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntifaceFrontendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntifaceFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage;

        /**
         * Decodes an IntifaceFrontendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntifaceFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage;

        /**
         * Verifies an IntifaceFrontendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntifaceFrontendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntifaceFrontendMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage;

        /**
         * Creates a plain object from an IntifaceFrontendMessage message. Also converts values to other types if specified.
         * @param message IntifaceFrontendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntifaceFrontendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace IntifaceFrontendMessage {

        /** Properties of an Ok. */
        interface IOk {
        }

        /** Represents an Ok. */
        class Ok implements IOk {

            /**
             * Constructs a new Ok.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IOk);

            /**
             * Creates a new Ok instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ok instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IOk): IntifaceProtocols.IntifaceFrontendMessage.Ok;

            /**
             * Encodes the specified Ok message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ok.verify|verify} messages.
             * @param message Ok message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IOk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ok message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ok.verify|verify} messages.
             * @param message Ok message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IOk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ok message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.Ok;

            /**
             * Decodes an Ok message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ok
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.Ok;

            /**
             * Verifies an Ok message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Ok message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ok
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.Ok;

            /**
             * Creates a plain object from an Ok message. Also converts values to other types if specified.
             * @param message Ok
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.Ok, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ok to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Error. */
        interface IError {

            /** Error reason */
            reason?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IError);

            /** Error reason. */
            public reason: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IError): IntifaceProtocols.IntifaceFrontendMessage.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Ready. */
        interface IReady {
        }

        /** Represents a Ready. */
        class Ready implements IReady {

            /**
             * Constructs a new Ready.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IReady);

            /**
             * Creates a new Ready instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ready instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IReady): IntifaceProtocols.IntifaceFrontendMessage.Ready;

            /**
             * Encodes the specified Ready message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ready.verify|verify} messages.
             * @param message Ready message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IReady, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ready message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.Ready.verify|verify} messages.
             * @param message Ready message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IReady, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ready message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ready
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.Ready;

            /**
             * Decodes a Ready message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ready
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.Ready;

            /**
             * Verifies a Ready message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ready message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ready
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.Ready;

            /**
             * Creates a plain object from a Ready message. Also converts values to other types if specified.
             * @param message Ready
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ready to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartProcess. */
        interface IStartProcess {
        }

        /** Represents a StartProcess. */
        class StartProcess implements IStartProcess {

            /**
             * Constructs a new StartProcess.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStartProcess);

            /**
             * Creates a new StartProcess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartProcess instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStartProcess): IntifaceProtocols.IntifaceFrontendMessage.StartProcess;

            /**
             * Encodes the specified StartProcess message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProcess.verify|verify} messages.
             * @param message StartProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IStartProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartProcess message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProcess.verify|verify} messages.
             * @param message StartProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IStartProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartProcess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.StartProcess;

            /**
             * Decodes a StartProcess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.StartProcess;

            /**
             * Verifies a StartProcess message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartProcess message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartProcess
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.StartProcess;

            /**
             * Creates a plain object from a StartProcess message. Also converts values to other types if specified.
             * @param message StartProcess
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.StartProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartProcess to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StopProcess. */
        interface IStopProcess {
        }

        /** Represents a StopProcess. */
        class StopProcess implements IStopProcess {

            /**
             * Constructs a new StopProcess.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStopProcess);

            /**
             * Creates a new StopProcess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopProcess instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStopProcess): IntifaceProtocols.IntifaceFrontendMessage.StopProcess;

            /**
             * Encodes the specified StopProcess message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProcess.verify|verify} messages.
             * @param message StopProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IStopProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopProcess message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProcess.verify|verify} messages.
             * @param message StopProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IStopProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopProcess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.StopProcess;

            /**
             * Decodes a StopProcess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.StopProcess;

            /**
             * Verifies a StopProcess message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopProcess message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopProcess
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.StopProcess;

            /**
             * Creates a plain object from a StopProcess message. Also converts values to other types if specified.
             * @param message StopProcess
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.StopProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopProcess to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartProxy. */
        interface IStartProxy {
        }

        /** Represents a StartProxy. */
        class StartProxy implements IStartProxy {

            /**
             * Constructs a new StartProxy.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStartProxy);

            /**
             * Creates a new StartProxy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartProxy instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStartProxy): IntifaceProtocols.IntifaceFrontendMessage.StartProxy;

            /**
             * Encodes the specified StartProxy message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProxy.verify|verify} messages.
             * @param message StartProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IStartProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartProxy message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StartProxy.verify|verify} messages.
             * @param message StartProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IStartProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartProxy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.StartProxy;

            /**
             * Decodes a StartProxy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.StartProxy;

            /**
             * Verifies a StartProxy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartProxy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartProxy
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.StartProxy;

            /**
             * Creates a plain object from a StartProxy message. Also converts values to other types if specified.
             * @param message StartProxy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.StartProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartProxy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StopProxy. */
        interface IStopProxy {
        }

        /** Represents a StopProxy. */
        class StopProxy implements IStopProxy {

            /**
             * Constructs a new StopProxy.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStopProxy);

            /**
             * Creates a new StopProxy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopProxy instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IStopProxy): IntifaceProtocols.IntifaceFrontendMessage.StopProxy;

            /**
             * Encodes the specified StopProxy message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProxy.verify|verify} messages.
             * @param message StopProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IStopProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopProxy message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.StopProxy.verify|verify} messages.
             * @param message StopProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IStopProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopProxy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.StopProxy;

            /**
             * Decodes a StopProxy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.StopProxy;

            /**
             * Verifies a StopProxy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopProxy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopProxy
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.StopProxy;

            /**
             * Creates a plain object from a StopProxy message. Also converts values to other types if specified.
             * @param message StopProxy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.StopProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopProxy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateConfig. */
        interface IUpdateConfig {

            /** UpdateConfig configuration */
            configuration?: (string|null);
        }

        /** Represents an UpdateConfig. */
        class UpdateConfig implements IUpdateConfig {

            /**
             * Constructs a new UpdateConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig);

            /** UpdateConfig configuration. */
            public configuration: string;

            /**
             * Creates a new UpdateConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateConfig instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig): IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig;

            /**
             * Encodes the specified UpdateConfig message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.verify|verify} messages.
             * @param message UpdateConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateConfig message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.verify|verify} messages.
             * @param message UpdateConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig;

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig;

            /**
             * Verifies an UpdateConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateConfig
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig;

            /**
             * Creates a plain object from an UpdateConfig message. Also converts values to other types if specified.
             * @param message UpdateConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CheckForUpdates. */
        interface ICheckForUpdates {
        }

        /** Represents a CheckForUpdates. */
        class CheckForUpdates implements ICheckForUpdates {

            /**
             * Constructs a new CheckForUpdates.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates);

            /**
             * Creates a new CheckForUpdates instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckForUpdates instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates): IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates;

            /**
             * Encodes the specified CheckForUpdates message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.verify|verify} messages.
             * @param message CheckForUpdates message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckForUpdates message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.verify|verify} messages.
             * @param message CheckForUpdates message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.ICheckForUpdates, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckForUpdates message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckForUpdates
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates;

            /**
             * Decodes a CheckForUpdates message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckForUpdates
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates;

            /**
             * Verifies a CheckForUpdates message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckForUpdates message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckForUpdates
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates;

            /**
             * Creates a plain object from a CheckForUpdates message. Also converts values to other types if specified.
             * @param message CheckForUpdates
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckForUpdates to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateEngine. */
        interface IUpdateEngine {
        }

        /** Represents an UpdateEngine. */
        class UpdateEngine implements IUpdateEngine {

            /**
             * Constructs a new UpdateEngine.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine);

            /**
             * Creates a new UpdateEngine instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEngine instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine): IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine;

            /**
             * Encodes the specified UpdateEngine message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.verify|verify} messages.
             * @param message UpdateEngine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEngine message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.verify|verify} messages.
             * @param message UpdateEngine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateEngine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEngine message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEngine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine;

            /**
             * Decodes an UpdateEngine message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEngine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine;

            /**
             * Verifies an UpdateEngine message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEngine message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEngine
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine;

            /**
             * Creates a plain object from an UpdateEngine message. Also converts values to other types if specified.
             * @param message UpdateEngine
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEngine to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateDeviceFile. */
        interface IUpdateDeviceFile {
        }

        /** Represents an UpdateDeviceFile. */
        class UpdateDeviceFile implements IUpdateDeviceFile {

            /**
             * Constructs a new UpdateDeviceFile.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile);

            /**
             * Creates a new UpdateDeviceFile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateDeviceFile instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile): IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile;

            /**
             * Encodes the specified UpdateDeviceFile message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.verify|verify} messages.
             * @param message UpdateDeviceFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateDeviceFile message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.verify|verify} messages.
             * @param message UpdateDeviceFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateDeviceFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateDeviceFile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateDeviceFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile;

            /**
             * Decodes an UpdateDeviceFile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateDeviceFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile;

            /**
             * Verifies an UpdateDeviceFile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateDeviceFile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateDeviceFile
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile;

            /**
             * Creates a plain object from an UpdateDeviceFile message. Also converts values to other types if specified.
             * @param message UpdateDeviceFile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateDeviceFile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateApplication. */
        interface IUpdateApplication {
        }

        /** Represents an UpdateApplication. */
        class UpdateApplication implements IUpdateApplication {

            /**
             * Constructs a new UpdateApplication.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication);

            /**
             * Creates a new UpdateApplication instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateApplication instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication): IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication;

            /**
             * Encodes the specified UpdateApplication message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.verify|verify} messages.
             * @param message UpdateApplication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateApplication message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.verify|verify} messages.
             * @param message UpdateApplication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateApplication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateApplication message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateApplication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication;

            /**
             * Decodes an UpdateApplication message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateApplication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication;

            /**
             * Verifies an UpdateApplication message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateApplication message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateApplication
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication;

            /**
             * Creates a plain object from an UpdateApplication message. Also converts values to other types if specified.
             * @param message UpdateApplication
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateApplication to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResetIntifaceConfiguration. */
        interface IResetIntifaceConfiguration {
        }

        /** Represents a ResetIntifaceConfiguration. */
        class ResetIntifaceConfiguration implements IResetIntifaceConfiguration {

            /**
             * Constructs a new ResetIntifaceConfiguration.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration);

            /**
             * Creates a new ResetIntifaceConfiguration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResetIntifaceConfiguration instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration): IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration;

            /**
             * Encodes the specified ResetIntifaceConfiguration message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.verify|verify} messages.
             * @param message ResetIntifaceConfiguration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResetIntifaceConfiguration message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.verify|verify} messages.
             * @param message ResetIntifaceConfiguration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IResetIntifaceConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResetIntifaceConfiguration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResetIntifaceConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration;

            /**
             * Decodes a ResetIntifaceConfiguration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResetIntifaceConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration;

            /**
             * Verifies a ResetIntifaceConfiguration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResetIntifaceConfiguration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResetIntifaceConfiguration
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration;

            /**
             * Creates a plain object from a ResetIntifaceConfiguration message. Also converts values to other types if specified.
             * @param message ResetIntifaceConfiguration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResetIntifaceConfiguration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LogMessage. */
        interface ILogMessage {

            /** LogMessage info */
            info?: (string|null);
        }

        /** Represents a LogMessage. */
        class LogMessage implements ILogMessage {

            /**
             * Constructs a new LogMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.ILogMessage);

            /** LogMessage info. */
            public info: string;

            /**
             * Creates a new LogMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LogMessage instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.ILogMessage): IntifaceProtocols.IntifaceFrontendMessage.LogMessage;

            /**
             * Encodes the specified LogMessage message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.LogMessage.verify|verify} messages.
             * @param message LogMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.ILogMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LogMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.LogMessage.verify|verify} messages.
             * @param message LogMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.ILogMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LogMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.LogMessage;

            /**
             * Decodes a LogMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.LogMessage;

            /**
             * Verifies a LogMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LogMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LogMessage
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.LogMessage;

            /**
             * Creates a plain object from a LogMessage message. Also converts values to other types if specified.
             * @param message LogMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.LogMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LogMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelUpdate. */
        interface ICancelUpdate {
        }

        /** Represents a CancelUpdate. */
        class CancelUpdate implements ICancelUpdate {

            /**
             * Constructs a new CancelUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate);

            /**
             * Creates a new CancelUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelUpdate instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate): IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate;

            /**
             * Encodes the specified CancelUpdate message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.verify|verify} messages.
             * @param message CancelUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelUpdate message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.verify|verify} messages.
             * @param message CancelUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.ICancelUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate;

            /**
             * Decodes a CancelUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate;

            /**
             * Verifies a CancelUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelUpdate
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate;

            /**
             * Creates a plain object from a CancelUpdate message. Also converts values to other types if specified.
             * @param message CancelUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OpenLogDirectory. */
        interface IOpenLogDirectory {
        }

        /** Represents an OpenLogDirectory. */
        class OpenLogDirectory implements IOpenLogDirectory {

            /**
             * Constructs a new OpenLogDirectory.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory);

            /**
             * Creates a new OpenLogDirectory instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenLogDirectory instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory): IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory;

            /**
             * Encodes the specified OpenLogDirectory message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.verify|verify} messages.
             * @param message OpenLogDirectory message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenLogDirectory message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory.verify|verify} messages.
             * @param message OpenLogDirectory message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IOpenLogDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenLogDirectory message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenLogDirectory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory;

            /**
             * Decodes an OpenLogDirectory message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenLogDirectory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory;

            /**
             * Verifies an OpenLogDirectory message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenLogDirectory message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenLogDirectory
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory;

            /**
             * Creates a plain object from an OpenLogDirectory message. Also converts values to other types if specified.
             * @param message OpenLogDirectory
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.OpenLogDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenLogDirectory to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestUserDeviceConfig. */
        interface IRequestUserDeviceConfig {
        }

        /** Represents a RequestUserDeviceConfig. */
        class RequestUserDeviceConfig implements IRequestUserDeviceConfig {

            /**
             * Constructs a new RequestUserDeviceConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IRequestUserDeviceConfig);

            /**
             * Creates a new RequestUserDeviceConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestUserDeviceConfig instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IRequestUserDeviceConfig): IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig;

            /**
             * Encodes the specified RequestUserDeviceConfig message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig.verify|verify} messages.
             * @param message RequestUserDeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IRequestUserDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestUserDeviceConfig message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig.verify|verify} messages.
             * @param message RequestUserDeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IRequestUserDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestUserDeviceConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestUserDeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig;

            /**
             * Decodes a RequestUserDeviceConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestUserDeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig;

            /**
             * Verifies a RequestUserDeviceConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestUserDeviceConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestUserDeviceConfig
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig;

            /**
             * Creates a plain object from a RequestUserDeviceConfig message. Also converts values to other types if specified.
             * @param message RequestUserDeviceConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.RequestUserDeviceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestUserDeviceConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestSerialPortList. */
        interface IRequestSerialPortList {
        }

        /** Represents a RequestSerialPortList. */
        class RequestSerialPortList implements IRequestSerialPortList {

            /**
             * Constructs a new RequestSerialPortList.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IRequestSerialPortList);

            /**
             * Creates a new RequestSerialPortList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestSerialPortList instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IRequestSerialPortList): IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList;

            /**
             * Encodes the specified RequestSerialPortList message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList.verify|verify} messages.
             * @param message RequestSerialPortList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IRequestSerialPortList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestSerialPortList message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList.verify|verify} messages.
             * @param message RequestSerialPortList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IRequestSerialPortList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestSerialPortList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestSerialPortList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList;

            /**
             * Decodes a RequestSerialPortList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestSerialPortList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList;

            /**
             * Verifies a RequestSerialPortList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestSerialPortList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestSerialPortList
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList;

            /**
             * Creates a plain object from a RequestSerialPortList message. Also converts values to other types if specified.
             * @param message RequestSerialPortList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.RequestSerialPortList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestSerialPortList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateUserDeviceConfig. */
        interface IUpdateUserDeviceConfig {

            /** UpdateUserDeviceConfig jsonDeviceConfig */
            jsonDeviceConfig?: (string|null);
        }

        /** Represents an UpdateUserDeviceConfig. */
        class UpdateUserDeviceConfig implements IUpdateUserDeviceConfig {

            /**
             * Constructs a new UpdateUserDeviceConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateUserDeviceConfig);

            /** UpdateUserDeviceConfig jsonDeviceConfig. */
            public jsonDeviceConfig: string;

            /**
             * Creates a new UpdateUserDeviceConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserDeviceConfig instance
             */
            public static create(properties?: IntifaceProtocols.IntifaceFrontendMessage.IUpdateUserDeviceConfig): IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig;

            /**
             * Encodes the specified UpdateUserDeviceConfig message. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig.verify|verify} messages.
             * @param message UpdateUserDeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateUserDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserDeviceConfig message, length delimited. Does not implicitly {@link IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig.verify|verify} messages.
             * @param message UpdateUserDeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.IntifaceFrontendMessage.IUpdateUserDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserDeviceConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserDeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig;

            /**
             * Decodes an UpdateUserDeviceConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserDeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig;

            /**
             * Verifies an UpdateUserDeviceConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserDeviceConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserDeviceConfig
             */
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig;

            /**
             * Creates a plain object from an UpdateUserDeviceConfig message. Also converts values to other types if specified.
             * @param message UpdateUserDeviceConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.IntifaceFrontendMessage.UpdateUserDeviceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserDeviceConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
