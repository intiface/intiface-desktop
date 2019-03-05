import * as $protobuf from "protobufjs";
/** Namespace IntifaceProtocols. */
export namespace IntifaceProtocols {

    /** Properties of a ServerBackendMessage. */
    interface IServerBackendMessage {

        /** ServerBackendMessage processstarted */
        processstarted?: (IntifaceProtocols.ServerBackendMessage.IProcessStarted|null);

        /** ServerBackendMessage processerror */
        processerror?: (IntifaceProtocols.ServerBackendMessage.IProcessError|null);

        /** ServerBackendMessage processended */
        processended?: (IntifaceProtocols.ServerBackendMessage.IProcessEnded|null);

        /** ServerBackendMessage processlog */
        processlog?: (IntifaceProtocols.ServerBackendMessage.IProcessLog|null);

        /** ServerBackendMessage bplog */
        bplog?: (IntifaceProtocols.ServerBackendMessage.IButtplugLog|null);

        /** ServerBackendMessage clientconnected */
        clientconnected?: (IntifaceProtocols.ServerBackendMessage.IClientConnected|null);

        /** ServerBackendMessage clientdisconnected */
        clientdisconnected?: (IntifaceProtocols.ServerBackendMessage.IClientDisconnected|null);

        /** ServerBackendMessage deviceconnected */
        deviceconnected?: (IntifaceProtocols.ServerBackendMessage.IDeviceConnected|null);

        /** ServerBackendMessage devicedisconnected */
        devicedisconnected?: (IntifaceProtocols.ServerBackendMessage.IDeviceDisconnected|null);

        /** ServerBackendMessage configuration */
        configuration?: (IntifaceProtocols.ServerBackendMessage.IConfiguration|null);
    }

    /** Represents a ServerBackendMessage. */
    class ServerBackendMessage implements IServerBackendMessage {

        /**
         * Constructs a new ServerBackendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceProtocols.IServerBackendMessage);

        /** ServerBackendMessage processstarted. */
        public processstarted?: (IntifaceProtocols.ServerBackendMessage.IProcessStarted|null);

        /** ServerBackendMessage processerror. */
        public processerror?: (IntifaceProtocols.ServerBackendMessage.IProcessError|null);

        /** ServerBackendMessage processended. */
        public processended?: (IntifaceProtocols.ServerBackendMessage.IProcessEnded|null);

        /** ServerBackendMessage processlog. */
        public processlog?: (IntifaceProtocols.ServerBackendMessage.IProcessLog|null);

        /** ServerBackendMessage bplog. */
        public bplog?: (IntifaceProtocols.ServerBackendMessage.IButtplugLog|null);

        /** ServerBackendMessage clientconnected. */
        public clientconnected?: (IntifaceProtocols.ServerBackendMessage.IClientConnected|null);

        /** ServerBackendMessage clientdisconnected. */
        public clientdisconnected?: (IntifaceProtocols.ServerBackendMessage.IClientDisconnected|null);

        /** ServerBackendMessage deviceconnected. */
        public deviceconnected?: (IntifaceProtocols.ServerBackendMessage.IDeviceConnected|null);

        /** ServerBackendMessage devicedisconnected. */
        public devicedisconnected?: (IntifaceProtocols.ServerBackendMessage.IDeviceDisconnected|null);

        /** ServerBackendMessage configuration. */
        public configuration?: (IntifaceProtocols.ServerBackendMessage.IConfiguration|null);

        /** ServerBackendMessage msg. */
        public msg?: ("processstarted"|"processerror"|"processended"|"processlog"|"bplog"|"clientconnected"|"clientdisconnected"|"deviceconnected"|"devicedisconnected"|"configuration");

        /**
         * Creates a new ServerBackendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerBackendMessage instance
         */
        public static create(properties?: IntifaceProtocols.IServerBackendMessage): IntifaceProtocols.ServerBackendMessage;

        /**
         * Encodes the specified ServerBackendMessage message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.verify|verify} messages.
         * @param message ServerBackendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceProtocols.IServerBackendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerBackendMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.verify|verify} messages.
         * @param message ServerBackendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceProtocols.IServerBackendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerBackendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerBackendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage;

        /**
         * Decodes a ServerBackendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerBackendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage;

        /**
         * Verifies a ServerBackendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerBackendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerBackendMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage;

        /**
         * Creates a plain object from a ServerBackendMessage message. Also converts values to other types if specified.
         * @param message ServerBackendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceProtocols.ServerBackendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerBackendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerBackendMessage {

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IProcessLog);

            /** ProcessLog message. */
            public message: string;

            /**
             * Creates a new ProcessLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessLog instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IProcessLog): IntifaceProtocols.ServerBackendMessage.ProcessLog;

            /**
             * Encodes the specified ProcessLog message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessLog message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ProcessLog;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ProcessLog;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ProcessLog;

            /**
             * Creates a plain object from a ProcessLog message. Also converts values to other types if specified.
             * @param message ProcessLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ProcessLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IProcessStarted);

            /**
             * Creates a new ProcessStarted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessStarted instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IProcessStarted): IntifaceProtocols.ServerBackendMessage.ProcessStarted;

            /**
             * Encodes the specified ProcessStarted message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessStarted message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ProcessStarted;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ProcessStarted;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ProcessStarted;

            /**
             * Creates a plain object from a ProcessStarted message. Also converts values to other types if specified.
             * @param message ProcessStarted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ProcessStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IProcessError);

            /** ProcessError message. */
            public message: string;

            /**
             * Creates a new ProcessError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessError instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IProcessError): IntifaceProtocols.ServerBackendMessage.ProcessError;

            /**
             * Encodes the specified ProcessError message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessError message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ProcessError;

            /**
             * Decodes a ProcessError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ProcessError;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ProcessError;

            /**
             * Creates a plain object from a ProcessError message. Also converts values to other types if specified.
             * @param message ProcessError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ProcessError, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IProcessEnded);

            /**
             * Creates a new ProcessEnded instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessEnded instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IProcessEnded): IntifaceProtocols.ServerBackendMessage.ProcessEnded;

            /**
             * Encodes the specified ProcessEnded message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessEnded message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ProcessEnded;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ProcessEnded;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ProcessEnded;

            /**
             * Creates a plain object from a ProcessEnded message. Also converts values to other types if specified.
             * @param message ProcessEnded
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ProcessEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IButtplugLog);

            /** ButtplugLog message. */
            public message: string;

            /**
             * Creates a new ButtplugLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtplugLog instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IButtplugLog): IntifaceProtocols.ServerBackendMessage.ButtplugLog;

            /**
             * Encodes the specified ButtplugLog message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtplugLog message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ButtplugLog;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ButtplugLog;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ButtplugLog;

            /**
             * Creates a plain object from a ButtplugLog message. Also converts values to other types if specified.
             * @param message ButtplugLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ButtplugLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IClientConnected);

            /** ClientConnected clientName. */
            public clientName: string;

            /**
             * Creates a new ClientConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientConnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IClientConnected): IntifaceProtocols.ServerBackendMessage.ClientConnected;

            /**
             * Encodes the specified ClientConnected message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientConnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ClientConnected;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ClientConnected;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ClientConnected;

            /**
             * Creates a plain object from a ClientConnected message. Also converts values to other types if specified.
             * @param message ClientConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ClientConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IClientDisconnected);

            /**
             * Creates a new ClientDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientDisconnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IClientDisconnected): IntifaceProtocols.ServerBackendMessage.ClientDisconnected;

            /**
             * Encodes the specified ClientDisconnected message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientDisconnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.ClientDisconnected;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.ClientDisconnected;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.ClientDisconnected;

            /**
             * Creates a plain object from a ClientDisconnected message. Also converts values to other types if specified.
             * @param message ClientDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.ClientDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IDeviceConnected);

            /** DeviceConnected deviceName. */
            public deviceName: string;

            /** DeviceConnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceConnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IDeviceConnected): IntifaceProtocols.ServerBackendMessage.DeviceConnected;

            /**
             * Encodes the specified DeviceConnected message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceConnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.DeviceConnected;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.DeviceConnected;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.DeviceConnected;

            /**
             * Creates a plain object from a DeviceConnected message. Also converts values to other types if specified.
             * @param message DeviceConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.DeviceConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IDeviceDisconnected);

            /** DeviceDisconnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceDisconnected instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IDeviceDisconnected): IntifaceProtocols.ServerBackendMessage.DeviceDisconnected;

            /**
             * Encodes the specified DeviceDisconnected message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceDisconnected message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.DeviceDisconnected;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.DeviceDisconnected;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.DeviceDisconnected;

            /**
             * Creates a plain object from a DeviceDisconnected message. Also converts values to other types if specified.
             * @param message DeviceDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.DeviceDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceDisconnected to JSON.
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
            constructor(properties?: IntifaceProtocols.ServerBackendMessage.IConfiguration);

            /** Configuration configuration. */
            public configuration: string;

            /**
             * Creates a new Configuration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Configuration instance
             */
            public static create(properties?: IntifaceProtocols.ServerBackendMessage.IConfiguration): IntifaceProtocols.ServerBackendMessage.Configuration;

            /**
             * Encodes the specified Configuration message. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.Configuration.verify|verify} messages.
             * @param message Configuration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerBackendMessage.IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Configuration message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerBackendMessage.Configuration.verify|verify} messages.
             * @param message Configuration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerBackendMessage.IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Configuration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerBackendMessage.Configuration;

            /**
             * Decodes a Configuration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerBackendMessage.Configuration;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerBackendMessage.Configuration;

            /**
             * Creates a plain object from a Configuration message. Also converts values to other types if specified.
             * @param message Configuration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerBackendMessage.Configuration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Configuration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ServerFrontendMessage. */
    interface IServerFrontendMessage {

        /** ServerFrontendMessage ready */
        ready?: (IntifaceProtocols.ServerFrontendMessage.IReady|null);

        /** ServerFrontendMessage startprocess */
        startprocess?: (IntifaceProtocols.ServerFrontendMessage.IStartProcess|null);

        /** ServerFrontendMessage stopprocess */
        stopprocess?: (IntifaceProtocols.ServerFrontendMessage.IStopProcess|null);

        /** ServerFrontendMessage startproxy */
        startproxy?: (IntifaceProtocols.ServerFrontendMessage.IStartProxy|null);

        /** ServerFrontendMessage stopproxy */
        stopproxy?: (IntifaceProtocols.ServerFrontendMessage.IStopProxy|null);

        /** ServerFrontendMessage updateconfig */
        updateconfig?: (IntifaceProtocols.ServerFrontendMessage.IUpdateConfig|null);
    }

    /** Represents a ServerFrontendMessage. */
    class ServerFrontendMessage implements IServerFrontendMessage {

        /**
         * Constructs a new ServerFrontendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceProtocols.IServerFrontendMessage);

        /** ServerFrontendMessage ready. */
        public ready?: (IntifaceProtocols.ServerFrontendMessage.IReady|null);

        /** ServerFrontendMessage startprocess. */
        public startprocess?: (IntifaceProtocols.ServerFrontendMessage.IStartProcess|null);

        /** ServerFrontendMessage stopprocess. */
        public stopprocess?: (IntifaceProtocols.ServerFrontendMessage.IStopProcess|null);

        /** ServerFrontendMessage startproxy. */
        public startproxy?: (IntifaceProtocols.ServerFrontendMessage.IStartProxy|null);

        /** ServerFrontendMessage stopproxy. */
        public stopproxy?: (IntifaceProtocols.ServerFrontendMessage.IStopProxy|null);

        /** ServerFrontendMessage updateconfig. */
        public updateconfig?: (IntifaceProtocols.ServerFrontendMessage.IUpdateConfig|null);

        /** ServerFrontendMessage msg. */
        public msg?: ("ready"|"startprocess"|"stopprocess"|"startproxy"|"stopproxy"|"updateconfig");

        /**
         * Creates a new ServerFrontendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerFrontendMessage instance
         */
        public static create(properties?: IntifaceProtocols.IServerFrontendMessage): IntifaceProtocols.ServerFrontendMessage;

        /**
         * Encodes the specified ServerFrontendMessage message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.verify|verify} messages.
         * @param message ServerFrontendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceProtocols.IServerFrontendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerFrontendMessage message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.verify|verify} messages.
         * @param message ServerFrontendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceProtocols.IServerFrontendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerFrontendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage;

        /**
         * Decodes a ServerFrontendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage;

        /**
         * Verifies a ServerFrontendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerFrontendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerFrontendMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage;

        /**
         * Creates a plain object from a ServerFrontendMessage message. Also converts values to other types if specified.
         * @param message ServerFrontendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceProtocols.ServerFrontendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerFrontendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerFrontendMessage {

        /** Properties of a Ready. */
        interface IReady {
        }

        /** Represents a Ready. */
        class Ready implements IReady {

            /**
             * Constructs a new Ready.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceProtocols.ServerFrontendMessage.IReady);

            /**
             * Creates a new Ready instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ready instance
             */
            public static create(properties?: IntifaceProtocols.ServerFrontendMessage.IReady): IntifaceProtocols.ServerFrontendMessage.Ready;

            /**
             * Encodes the specified Ready message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.Ready.verify|verify} messages.
             * @param message Ready message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerFrontendMessage.IReady, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ready message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.Ready.verify|verify} messages.
             * @param message Ready message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerFrontendMessage.IReady, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ready message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ready
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage.Ready;

            /**
             * Decodes a Ready message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ready
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage.Ready;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage.Ready;

            /**
             * Creates a plain object from a Ready message. Also converts values to other types if specified.
             * @param message Ready
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerFrontendMessage.Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerFrontendMessage.IStartProcess);

            /**
             * Creates a new StartProcess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartProcess instance
             */
            public static create(properties?: IntifaceProtocols.ServerFrontendMessage.IStartProcess): IntifaceProtocols.ServerFrontendMessage.StartProcess;

            /**
             * Encodes the specified StartProcess message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StartProcess.verify|verify} messages.
             * @param message StartProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerFrontendMessage.IStartProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartProcess message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StartProcess.verify|verify} messages.
             * @param message StartProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerFrontendMessage.IStartProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartProcess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage.StartProcess;

            /**
             * Decodes a StartProcess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage.StartProcess;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage.StartProcess;

            /**
             * Creates a plain object from a StartProcess message. Also converts values to other types if specified.
             * @param message StartProcess
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerFrontendMessage.StartProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerFrontendMessage.IStopProcess);

            /**
             * Creates a new StopProcess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopProcess instance
             */
            public static create(properties?: IntifaceProtocols.ServerFrontendMessage.IStopProcess): IntifaceProtocols.ServerFrontendMessage.StopProcess;

            /**
             * Encodes the specified StopProcess message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StopProcess.verify|verify} messages.
             * @param message StopProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerFrontendMessage.IStopProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopProcess message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StopProcess.verify|verify} messages.
             * @param message StopProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerFrontendMessage.IStopProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopProcess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage.StopProcess;

            /**
             * Decodes a StopProcess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage.StopProcess;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage.StopProcess;

            /**
             * Creates a plain object from a StopProcess message. Also converts values to other types if specified.
             * @param message StopProcess
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerFrontendMessage.StopProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerFrontendMessage.IStartProxy);

            /**
             * Creates a new StartProxy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartProxy instance
             */
            public static create(properties?: IntifaceProtocols.ServerFrontendMessage.IStartProxy): IntifaceProtocols.ServerFrontendMessage.StartProxy;

            /**
             * Encodes the specified StartProxy message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StartProxy.verify|verify} messages.
             * @param message StartProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerFrontendMessage.IStartProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartProxy message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StartProxy.verify|verify} messages.
             * @param message StartProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerFrontendMessage.IStartProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartProxy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage.StartProxy;

            /**
             * Decodes a StartProxy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage.StartProxy;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage.StartProxy;

            /**
             * Creates a plain object from a StartProxy message. Also converts values to other types if specified.
             * @param message StartProxy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerFrontendMessage.StartProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerFrontendMessage.IStopProxy);

            /**
             * Creates a new StopProxy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopProxy instance
             */
            public static create(properties?: IntifaceProtocols.ServerFrontendMessage.IStopProxy): IntifaceProtocols.ServerFrontendMessage.StopProxy;

            /**
             * Encodes the specified StopProxy message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StopProxy.verify|verify} messages.
             * @param message StopProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerFrontendMessage.IStopProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopProxy message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.StopProxy.verify|verify} messages.
             * @param message StopProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerFrontendMessage.IStopProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopProxy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage.StopProxy;

            /**
             * Decodes a StopProxy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage.StopProxy;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage.StopProxy;

            /**
             * Creates a plain object from a StopProxy message. Also converts values to other types if specified.
             * @param message StopProxy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerFrontendMessage.StopProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: IntifaceProtocols.ServerFrontendMessage.IUpdateConfig);

            /** UpdateConfig configuration. */
            public configuration: string;

            /**
             * Creates a new UpdateConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateConfig instance
             */
            public static create(properties?: IntifaceProtocols.ServerFrontendMessage.IUpdateConfig): IntifaceProtocols.ServerFrontendMessage.UpdateConfig;

            /**
             * Encodes the specified UpdateConfig message. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.UpdateConfig.verify|verify} messages.
             * @param message UpdateConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceProtocols.ServerFrontendMessage.IUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateConfig message, length delimited. Does not implicitly {@link IntifaceProtocols.ServerFrontendMessage.UpdateConfig.verify|verify} messages.
             * @param message UpdateConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceProtocols.ServerFrontendMessage.IUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceProtocols.ServerFrontendMessage.UpdateConfig;

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceProtocols.ServerFrontendMessage.UpdateConfig;

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
            public static fromObject(object: { [k: string]: any }): IntifaceProtocols.ServerFrontendMessage.UpdateConfig;

            /**
             * Creates a plain object from an UpdateConfig message. Also converts values to other types if specified.
             * @param message UpdateConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceProtocols.ServerFrontendMessage.UpdateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
